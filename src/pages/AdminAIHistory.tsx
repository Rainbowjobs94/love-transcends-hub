import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, MessageCircle, Sparkles, User, Clock } from 'lucide-react';

interface Conversation {
  id: string;
  user_id: string;
  title: string | null;
  created_at: string;
  updated_at: string;
}

interface ChatMessage {
  id: string;
  role: string;
  content: string;
  created_at: string;
}

const AdminAIHistory = () => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin-login" replace />;
  if (!isAdmin) return <Navigate to="/admin" replace />;

  return <AIHistoryContent />;
};

const AIHistoryContent = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loadingConvos, setLoadingConvos] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);

  useEffect(() => {
    const fetchConversations = async () => {
      const { data } = await supabase
        .from('chat_conversations')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);
      setConversations(data ?? []);
      setLoadingConvos(false);
    };
    fetchConversations();
  }, []);

  useEffect(() => {
    if (!selectedId) { setMessages([]); return; }
    const fetchMessages = async () => {
      setLoadingMessages(true);
      const { data } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('conversation_id', selectedId)
        .order('created_at', { ascending: true });
      setMessages(data ?? []);
      setLoadingMessages(false);
    };
    fetchMessages();
  }, [selectedId]);

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button asChild variant="ghost" size="icon">
            <Link to="/admin"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold rainbow-text flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              IA Guardian Chat History
            </h1>
            <p className="text-foreground/70 mt-1">View all AI conversations across users</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Conversation List */}
          <Card className="glass-card border-border/30 lg:col-span-1">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                Conversations ({conversations.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[60vh]">
                {loadingConvos ? (
                  <p className="text-sm text-muted-foreground p-4">Loading...</p>
                ) : conversations.length === 0 ? (
                  <p className="text-sm text-muted-foreground p-4">No conversations yet.</p>
                ) : (
                  <div className="space-y-1 p-2">
                    {conversations.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedId(c.id)}
                        className={`w-full text-left p-3 rounded-lg transition-colors text-xs ${
                          selectedId === c.id
                            ? 'bg-primary/20 border border-primary/30'
                            : 'hover:bg-secondary/30 border border-transparent'
                        }`}
                      >
                        <p className="font-semibold text-foreground truncate">
                          {c.title || 'Untitled Chat'}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(c.created_at).toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5 text-muted-foreground">
                          <User className="w-3 h-3" />
                          <span className="truncate text-[10px]">{c.user_id.slice(0, 8)}…</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Message View */}
          <Card className="glass-card border-border/30 lg:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cosmic-purple" />
                {selectedId ? 'Conversation' : 'Select a conversation'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[60vh]">
                {loadingMessages ? (
                  <p className="text-sm text-muted-foreground p-4">Loading messages...</p>
                ) : !selectedId ? (
                  <div className="flex flex-col items-center justify-center h-full py-20 text-center">
                    <MessageCircle className="w-12 h-12 text-muted-foreground/30 mb-3" />
                    <p className="text-sm text-muted-foreground">Select a conversation to view messages</p>
                  </div>
                ) : messages.length === 0 ? (
                  <p className="text-sm text-muted-foreground p-4">No messages in this conversation.</p>
                ) : (
                  <div className="space-y-3 p-4">
                    {messages.map(m => (
                      <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                            m.role === 'user'
                              ? 'bg-primary/20 text-foreground'
                              : 'bg-secondary/50 text-foreground'
                          }`}
                        >
                          <p className="text-[10px] text-muted-foreground mb-1 font-semibold uppercase">
                            {m.role === 'user' ? 'User' : 'IA Guardian'}
                          </p>
                          {m.content}
                          <p className="text-[9px] text-muted-foreground mt-1.5">
                            {new Date(m.created_at).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminAIHistory;
