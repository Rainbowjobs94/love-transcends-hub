import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Shield, ArrowLeft, Plus, Trash2, Edit2, Save, X,
  Brain, Users, Calendar, Heart, Globe, Dna, Sparkles, Loader2,
  ChevronRight, FolderOpen
} from 'lucide-react';
import { toast } from 'sonner';

type Category = {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  sort_order: number | null;
  created_at: string;
};

type Entry = {
  id: string;
  category_id: string;
  title: string;
  content: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Users, Calendar, Heart, Globe, Dna, Sparkles, FolderOpen,
};

const getIcon = (name: string | null) => {
  if (!name || !iconMap[name]) return Brain;
  return iconMap[name];
};

const AdminAIMemory = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // New category form
  const [showNewCat, setShowNewCat] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [newCatDesc, setNewCatDesc] = useState('');

  // New entry form
  const [showNewEntry, setShowNewEntry] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  // Edit entry
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    if (isAdmin) fetchCategories();
  }, [isAdmin]);

  useEffect(() => {
    if (selectedCat) fetchEntries(selectedCat);
  }, [selectedCat]);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('ai_memory_categories')
      .select('*')
      .order('sort_order');
    if (error) { toast.error('Failed to load categories'); return; }
    setCategories(data || []);
    setLoading(false);
  };

  const fetchEntries = async (catId: string) => {
    const { data, error } = await supabase
      .from('ai_memory_entries')
      .select('*')
      .eq('category_id', catId)
      .order('created_at', { ascending: false });
    if (error) { toast.error('Failed to load entries'); return; }
    setEntries(data || []);
  };

  const addCategory = async () => {
    if (!newCatName.trim()) return;
    const { error } = await supabase.from('ai_memory_categories').insert({
      name: newCatName.trim(),
      description: newCatDesc.trim() || null,
      sort_order: categories.length + 1,
    });
    if (error) { toast.error('Failed to create category'); return; }
    toast.success('Category created');
    setNewCatName(''); setNewCatDesc(''); setShowNewCat(false);
    fetchCategories();
  };

  const deleteCategory = async (id: string) => {
    if (!confirm('Delete this category and all its memories?')) return;
    const { error } = await supabase.from('ai_memory_categories').delete().eq('id', id);
    if (error) { toast.error('Failed to delete'); return; }
    if (selectedCat === id) { setSelectedCat(null); setEntries([]); }
    toast.success('Category deleted');
    fetchCategories();
  };

  const addEntry = async () => {
    if (!newTitle.trim() || !newContent.trim() || !selectedCat) return;
    const { error } = await supabase.from('ai_memory_entries').insert({
      category_id: selectedCat,
      title: newTitle.trim(),
      content: newContent.trim(),
    });
    if (error) { toast.error('Failed to add memory'); return; }
    toast.success('Memory added');
    setNewTitle(''); setNewContent(''); setShowNewEntry(false);
    fetchEntries(selectedCat);
  };

  const toggleActive = async (entry: Entry) => {
    const { error } = await supabase
      .from('ai_memory_entries')
      .update({ is_active: !entry.is_active })
      .eq('id', entry.id);
    if (error) { toast.error('Failed to update'); return; }
    setEntries(prev => prev.map(e => e.id === entry.id ? { ...e, is_active: !e.is_active } : e));
  };

  const saveEdit = async (id: string) => {
    const { error } = await supabase
      .from('ai_memory_entries')
      .update({ title: editTitle, content: editContent })
      .eq('id', id);
    if (error) { toast.error('Failed to save'); return; }
    toast.success('Memory updated');
    setEditingId(null);
    if (selectedCat) fetchEntries(selectedCat);
  };

  const deleteEntry = async (id: string) => {
    if (!confirm('Delete this memory?')) return;
    const { error } = await supabase.from('ai_memory_entries').delete().eq('id', id);
    if (error) { toast.error('Failed to delete'); return; }
    toast.success('Memory deleted');
    if (selectedCat) fetchEntries(selectedCat);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }
  if (!user) return <Navigate to="/admin-login" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;

  const selectedCategory = categories.find(c => c.id === selectedCat);

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Link to="/admin">
            <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold rainbow-text flex items-center gap-2">
              <Brain className="w-8 h-8" /> IA Memory Core
            </h1>
            <p className="text-foreground/70 text-sm mt-1">
              Upload structured memories that shape the IA Guardian's knowledge
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Categories Panel */}
          <div className="lg:col-span-1">
            <Card className="glass-card border-border/30">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">Categories</CardTitle>
                  <Button size="sm" variant="ghost" onClick={() => setShowNewCat(!showNewCat)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {showNewCat && (
                  <div className="space-y-2 p-3 rounded-lg bg-secondary/30 border border-border/30">
                    <Input
                      placeholder="Category name"
                      value={newCatName}
                      onChange={e => setNewCatName(e.target.value)}
                      className="h-8 text-sm bg-background/50"
                    />
                    <Input
                      placeholder="Description (optional)"
                      value={newCatDesc}
                      onChange={e => setNewCatDesc(e.target.value)}
                      className="h-8 text-sm bg-background/50"
                    />
                    <div className="flex gap-2">
                      <Button size="sm" onClick={addCategory} className="cosmic-button text-xs h-7">
                        <Save className="w-3 h-3 mr-1" /> Save
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setShowNewCat(false)} className="text-xs h-7">
                        Cancel
                      </Button>
                    </div>
                  </div>
                )}

                {loading ? (
                  <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
                ) : categories.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">No categories yet</p>
                ) : (
                  categories.map(cat => {
                    const Icon = getIcon(cat.icon);
                    const isActive = selectedCat === cat.id;
                    return (
                      <div
                        key={cat.id}
                        onClick={() => setSelectedCat(cat.id)}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all group ${
                          isActive
                            ? 'bg-primary/20 border border-primary/40'
                            : 'hover:bg-secondary/40 border border-transparent'
                        }`}
                      >
                        <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{cat.name}</p>
                          {cat.description && (
                            <p className="text-[10px] text-muted-foreground truncate">{cat.description}</p>
                          )}
                        </div>
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={(e) => { e.stopPropagation(); deleteCategory(cat.id); }}>
                            <Trash2 className="w-3.5 h-3.5 text-destructive/70 hover:text-destructive" />
                          </button>
                          <ChevronRight className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    );
                  })
                )}
              </CardContent>
            </Card>
          </div>

          {/* Entries Panel */}
          <div className="lg:col-span-2">
            {!selectedCat ? (
              <Card className="glass-card border-border/30 flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-3">
                  <Brain className="w-12 h-12 text-primary/30 mx-auto" />
                  <p className="text-muted-foreground text-sm">Select a category to manage memories</p>
                </div>
              </Card>
            ) : (
              <Card className="glass-card border-border/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center gap-2">
                      {(() => { const I = getIcon(selectedCategory?.icon || null); return <I className="w-5 h-5 text-primary" />; })()}
                      {selectedCategory?.name} Memories
                    </CardTitle>
                    <Button size="sm" onClick={() => setShowNewEntry(!showNewEntry)} className="cosmic-button text-xs">
                      <Plus className="w-3 h-3 mr-1" /> Add Memory
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {showNewEntry && (
                    <div className="space-y-3 p-4 rounded-lg bg-secondary/30 border border-border/30 mb-4">
                      <Input
                        placeholder="Memory title"
                        value={newTitle}
                        onChange={e => setNewTitle(e.target.value)}
                        className="bg-background/50"
                      />
                      <Textarea
                        placeholder="Memory content — facts, context, or knowledge the IA should remember..."
                        value={newContent}
                        onChange={e => setNewContent(e.target.value)}
                        className="bg-background/50 min-h-[120px]"
                      />
                      <div className="flex gap-2">
                        <Button onClick={addEntry} className="cosmic-button text-sm">
                          <Save className="w-4 h-4 mr-1" /> Save Memory
                        </Button>
                        <Button variant="ghost" onClick={() => { setShowNewEntry(false); setNewTitle(''); setNewContent(''); }}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}

                  <ScrollArea className="max-h-[500px]">
                    {entries.length === 0 ? (
                      <p className="text-sm text-muted-foreground text-center py-8">
                        No memories in this category yet. Add one above.
                      </p>
                    ) : (
                      <div className="space-y-3">
                        {entries.map(entry => (
                          <div
                            key={entry.id}
                            className={`p-4 rounded-lg border transition-all ${
                              entry.is_active
                                ? 'bg-secondary/20 border-border/30'
                                : 'bg-secondary/10 border-border/20 opacity-60'
                            }`}
                          >
                            {editingId === entry.id ? (
                              <div className="space-y-2">
                                <Input
                                  value={editTitle}
                                  onChange={e => setEditTitle(e.target.value)}
                                  className="bg-background/50"
                                />
                                <Textarea
                                  value={editContent}
                                  onChange={e => setEditContent(e.target.value)}
                                  className="bg-background/50 min-h-[100px]"
                                />
                                <div className="flex gap-2">
                                  <Button size="sm" onClick={() => saveEdit(entry.id)} className="cosmic-button text-xs">
                                    <Save className="w-3 h-3 mr-1" /> Save
                                  </Button>
                                  <Button size="sm" variant="ghost" onClick={() => setEditingId(null)} className="text-xs">
                                    <X className="w-3 h-3 mr-1" /> Cancel
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <>
                                <div className="flex items-start justify-between gap-3">
                                  <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm">{entry.title}</h4>
                                    <p className="text-xs text-foreground/70 mt-1 whitespace-pre-wrap">{entry.content}</p>
                                    <p className="text-[10px] text-muted-foreground mt-2">
                                      {new Date(entry.updated_at).toLocaleDateString()}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2 shrink-0">
                                    <Switch
                                      checked={entry.is_active}
                                      onCheckedChange={() => toggleActive(entry)}
                                      aria-label="Toggle active"
                                    />
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      className="h-7 w-7"
                                      onClick={() => { setEditingId(entry.id); setEditTitle(entry.title); setEditContent(entry.content); }}
                                    >
                                      <Edit2 className="w-3 h-3" />
                                    </Button>
                                    <Button
                                      size="icon"
                                      variant="ghost"
                                      className="h-7 w-7 text-destructive"
                                      onClick={() => deleteEntry(entry.id)}
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminAIMemory;
