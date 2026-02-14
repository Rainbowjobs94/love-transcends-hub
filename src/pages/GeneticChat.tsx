import { useState, useRef, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dna, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

type Msg = { role: 'user' | 'assistant'; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/genetic-chat`;

async function streamChat({
  messages,
  onDelta,
  onDone,
  onError,
}: {
  messages: Msg[];
  onDelta: (t: string) => void;
  onDone: () => void;
  onError: (msg: string) => void;
}) {
  const resp = await fetch(CHAT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
    },
    body: JSON.stringify({ messages }),
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => ({ error: 'Request failed' }));
    onError(err.error || 'Request failed');
    return;
  }

  if (!resp.body) { onError('No response body'); return; }

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buf = '';
  let done = false;

  while (!done) {
    const { done: d, value } = await reader.read();
    if (d) break;
    buf += decoder.decode(value, { stream: true });

    let idx: number;
    while ((idx = buf.indexOf('\n')) !== -1) {
      let line = buf.slice(0, idx);
      buf = buf.slice(idx + 1);
      if (line.endsWith('\r')) line = line.slice(0, -1);
      if (line.startsWith(':') || line.trim() === '') continue;
      if (!line.startsWith('data: ')) continue;
      const json = line.slice(6).trim();
      if (json === '[DONE]') { done = true; break; }
      try {
        const parsed = JSON.parse(json);
        const c = parsed.choices?.[0]?.delta?.content as string | undefined;
        if (c) onDelta(c);
      } catch {
        buf = line + '\n' + buf;
        break;
      }
    }
  }
  onDone();
}

const SUGGESTIONS = [
  "Tell me about my paternal ancestry",
  "What does my maternal DNA reveal?",
  "Where are my relatives from?",
  "Tell me about the Bantu expansion connection",
];

const GeneticChat = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const send = async (text: string) => {
    if (!text.trim() || isLoading) return;
    const userMsg: Msg = { role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setError('');

    let assistantSoFar = '';
    const upsert = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant')
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        return [...prev, { role: 'assistant', content: assistantSoFar }];
      });
    };

    try {
      await streamChat({
        messages: [...messages, userMsg],
        onDelta: upsert,
        onDone: () => setIsLoading(false),
        onError: (msg) => { setError(msg); setIsLoading(false); },
      });
    } catch {
      setError('Connection failed. Please try again.');
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(input); }
  };

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card cosmic-glow mb-4">
            <Dna className="w-5 h-5 text-rainbow-green" />
            <span className="text-sm font-medium rainbow-text">GeneticAwareAI</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold rainbow-text mb-2">
            Your DNA Story, Alive
          </h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Chat with an AI that knows your 23andMe genetic profile — haplogroups, ancestry, relatives, and heritage.
          </p>
        </div>

        <Card className="glass-card border-border/30 flex flex-col h-[60vh]">
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-6 py-12">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center cosmic-glow">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-center text-sm max-w-sm">
                  Hey Explorer! Your E-P252 lineage whispers tales from ancient West Africa. Ask me anything about your DNA.
                </p>
                <div className="flex flex-wrap gap-2 justify-center max-w-md">
                  {SUGGESTIONS.map(s => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full glass-card border border-border/30 text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {m.role === 'assistant' && (
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                        m.role === 'user'
                          ? 'bg-primary/20 text-foreground'
                          : 'bg-secondary/50 text-foreground'
                      }`}
                    >
                      {m.content}
                    </div>
                    {m.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-cosmic-teal/20 flex items-center justify-center shrink-0 mt-1">
                        <User className="w-4 h-4 text-cosmic-teal" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Loader2 className="w-4 h-4 text-primary animate-spin" />
                    </div>
                    <div className="bg-secondary/50 rounded-2xl px-4 py-3 text-sm text-muted-foreground">
                      Thinking...
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>

          {error && (
            <div className="mx-4 mb-2 text-xs text-destructive bg-destructive/10 rounded-lg px-3 py-2">
              {error}
            </div>
          )}

          <div className="p-4 border-t border-border/30">
            <div className="flex gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about your ancestry, haplogroups, relatives..."
                rows={1}
                className="flex-1 resize-none rounded-xl bg-secondary/30 border border-border/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <Button
                onClick={() => send(input)}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="cosmic-button h-12 w-12 rounded-xl shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default GeneticChat;
