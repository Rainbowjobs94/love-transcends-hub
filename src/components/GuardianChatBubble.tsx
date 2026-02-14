import { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

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

export const GuardianChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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
    <>
      {/* Floating bubble */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full cosmic-button flex items-center justify-center shadow-lg cosmic-glow transition-transform hover:scale-110"
        aria-label="Open IA Guardian Chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] glass-card border border-border/30 rounded-2xl flex flex-col overflow-hidden shadow-2xl cosmic-glow animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border/30 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold rainbow-text">IA Rainbow Guardian</p>
              <p className="text-[10px] text-muted-foreground">GeneticAwareAI • Ask about your DNA</p>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 px-3 py-2">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 py-8 text-center">
                <Sparkles className="w-8 h-8 text-primary/50" />
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  Ask me anything about thy ancestry, haplogroups, or genetic heritage.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div
                      className={`max-w-[85%] rounded-xl px-3 py-2 text-xs leading-relaxed whitespace-pre-wrap ${
                        m.role === 'user'
                          ? 'bg-primary/20 text-foreground'
                          : 'bg-secondary/50 text-foreground'
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                ))}
                {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
                  <div className="flex justify-start">
                    <div className="bg-secondary/50 rounded-xl px-3 py-2 text-xs text-muted-foreground flex items-center gap-1">
                      <Loader2 className="w-3 h-3 animate-spin" /> Thinking...
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScrollArea>

          {error && (
            <div className="mx-3 mb-1 text-[10px] text-destructive bg-destructive/10 rounded px-2 py-1">
              {error}
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-border/30 flex gap-2">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about your DNA..."
              rows={1}
              className="flex-1 resize-none rounded-lg bg-secondary/30 border border-border/30 px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <Button
              onClick={() => send(input)}
              disabled={!input.trim() || isLoading}
              size="icon"
              className="cosmic-button h-8 w-8 rounded-lg shrink-0"
            >
              <Send className="w-3 h-3" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
