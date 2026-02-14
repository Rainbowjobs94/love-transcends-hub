import { useState, useEffect, useRef } from 'react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  ArrowLeft, Plus, Trash2, Save, X, Loader2, Upload,
  Image, Film, Podcast, Youtube, Globe, Palette, ExternalLink,
  DollarSign, Eye, EyeOff
} from 'lucide-react';
import { toast } from 'sonner';

// ── Types ──────────────────────────────────────────────
type CmsMedia = {
  id: string; title: string; description: string | null;
  media_type: string; source_type: string; url: string;
  thumbnail_url: string | null; access_tier: string;
  price: number | null; is_active: boolean; sort_order: number | null;
  created_at: string; updated_at: string;
};

type HeroVideo = {
  id: string; title: string; source_type: string;
  url: string; is_active: boolean; sort_order: number | null;
  created_at: string;
};

type AppBranding = {
  id: string; app_key: string; app_name: string;
  logo_url: string | null; favicon_url: string | null;
  primary_color: string | null; description: string | null;
  updated_at: string;
};

type ExternalLinkItem = {
  id: string; title: string; link_type: string;
  url: string; thumbnail_url: string | null;
  description: string | null; is_active: boolean;
  sort_order: number | null; created_at: string;
};

// ── File Upload Helper ─────────────────────────────────
async function uploadFile(file: File, folder: string): Promise<string> {
  const ext = file.name.split('.').pop();
  const path = `${folder}/${Date.now()}.${ext}`;
  const { error } = await supabase.storage.from('cms-uploads').upload(path, file);
  if (error) throw error;
  const { data } = supabase.storage.from('cms-uploads').getPublicUrl(path);
  return data.publicUrl;
}

// ── Main Component ─────────────────────────────────────
const AdminContentManager = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }
  if (!user) return <Navigate to="/admin-login" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/admin">
            <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold rainbow-text flex items-center gap-2">
              <Palette className="w-8 h-8" /> Content Manager
            </h1>
            <p className="text-foreground/70 text-sm mt-1">
              Manage media, videos, branding, and external links
            </p>
          </div>
        </div>

        <Tabs defaultValue="media" className="space-y-6">
          <TabsList className="glass-card border border-border/30 p-1 h-auto flex-wrap">
            <TabsTrigger value="media" className="gap-1.5 text-xs"><Image className="w-3.5 h-3.5" /> Gallery Media</TabsTrigger>
            <TabsTrigger value="hero" className="gap-1.5 text-xs"><Film className="w-3.5 h-3.5" /> Hero Videos</TabsTrigger>
            <TabsTrigger value="branding" className="gap-1.5 text-xs"><Palette className="w-3.5 h-3.5" /> App Branding</TabsTrigger>
            <TabsTrigger value="links" className="gap-1.5 text-xs"><ExternalLink className="w-3.5 h-3.5" /> Links</TabsTrigger>
          </TabsList>

          <TabsContent value="media"><MediaTab /></TabsContent>
          <TabsContent value="hero"><HeroTab /></TabsContent>
          <TabsContent value="branding"><BrandingTab /></TabsContent>
          <TabsContent value="links"><LinksTab /></TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

// ═══════════════════════════════════════════════════════
// TAB 1: Gallery Media
// ═══════════════════════════════════════════════════════
const MediaTab = () => {
  const [items, setItems] = useState<CmsMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState({ title: '', description: '', media_type: 'image', url: '', access_tier: 'free', price: '0' });
  const [uploading, setUploading] = useState(false);

  const fetch_ = async () => {
    const { data } = await supabase.from('cms_media').select('*').order('sort_order');
    setItems(data || []); setLoading(false);
  };
  useEffect(() => { fetch_(); }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file, 'media');
      setForm(f => ({ ...f, url }));
      toast.success('File uploaded');
    } catch { toast.error('Upload failed'); }
    setUploading(false);
  };

  const addItem = async () => {
    if (!form.title.trim() || !form.url.trim()) return;
    const { error } = await supabase.from('cms_media').insert({
      title: form.title, description: form.description || null,
      media_type: form.media_type, url: form.url,
      source_type: form.url.startsWith('http') ? 'url' : 'upload',
      access_tier: form.access_tier, price: parseFloat(form.price) || 0,
      sort_order: items.length,
    });
    if (error) { toast.error('Failed to add'); return; }
    toast.success('Media added'); setShowAdd(false);
    setForm({ title: '', description: '', media_type: 'image', url: '', access_tier: 'free', price: '0' });
    fetch_();
  };

  const toggleActive = async (item: CmsMedia) => {
    await supabase.from('cms_media').update({ is_active: !item.is_active }).eq('id', item.id);
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, is_active: !i.is_active } : i));
  };

  const deleteItem = async (id: string) => {
    if (!confirm('Delete this media item?')) return;
    await supabase.from('cms_media').delete().eq('id', id);
    toast.success('Deleted'); fetch_();
  };

  const tierColors: Record<string, string> = { free: 'text-rainbow-green', supporter: 'text-cosmic-gold', inner_circle: 'text-cosmic-purple' };

  return (
    <Card className="glass-card border-border/30">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Gallery Media</CardTitle>
          <Button size="sm" onClick={() => setShowAdd(!showAdd)} className="cosmic-button text-xs">
            <Plus className="w-3 h-3 mr-1" /> Add Media
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showAdd && (
          <div className="space-y-3 p-4 rounded-lg bg-secondary/30 border border-border/30 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input placeholder="Title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="bg-background/50" />
              <select value={form.media_type} onChange={e => setForm(f => ({ ...f, media_type: e.target.value }))}
                className="rounded-md border border-input bg-background/50 px-3 py-2 text-sm">
                <option value="image">Image</option>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
              </select>
            </div>
            <Input placeholder="URL (paste or upload below)" value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} className="bg-background/50" />
            <div className="flex items-center gap-2">
              <input ref={fileRef} type="file" className="hidden" accept="image/*,video/*,audio/*" onChange={handleFileUpload} />
              <Button variant="outline" size="sm" onClick={() => fileRef.current?.click()} disabled={uploading}>
                <Upload className="w-3 h-3 mr-1" /> {uploading ? 'Uploading...' : 'Upload File'}
              </Button>
            </div>
            <Textarea placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="bg-background/50 min-h-[60px]" />
            <div className="grid grid-cols-2 gap-3">
              <select value={form.access_tier} onChange={e => setForm(f => ({ ...f, access_tier: e.target.value }))}
                className="rounded-md border border-input bg-background/50 px-3 py-2 text-sm">
                <option value="free">Free</option>
                <option value="supporter">Supporter</option>
                <option value="inner_circle">Inner Circle</option>
              </select>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
                <Input type="number" placeholder="Price" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} className="bg-background/50" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={addItem} className="cosmic-button text-sm"><Save className="w-4 h-4 mr-1" /> Save</Button>
              <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
        ) : items.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">No media items yet.</p>
        ) : (
          <ScrollArea className="max-h-[500px]">
            <div className="space-y-2">
              {items.map(item => (
                <div key={item.id} className={`flex items-center gap-3 p-3 rounded-lg border transition-all ${item.is_active ? 'bg-secondary/20 border-border/30' : 'bg-secondary/10 border-border/20 opacity-50'}`}>
                  {item.media_type === 'video' ? <Film className="w-5 h-5 text-cosmic-purple shrink-0" /> :
                   item.media_type === 'audio' ? <Podcast className="w-5 h-5 text-cosmic-teal shrink-0" /> :
                   <Image className="w-5 h-5 text-primary shrink-0" />}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{item.title}</p>
                    <p className="text-[10px] text-muted-foreground truncate">{item.url}</p>
                  </div>
                  <span className={`text-[10px] font-medium ${tierColors[item.access_tier] || 'text-foreground'}`}>
                    {item.access_tier.replace('_', ' ').toUpperCase()}
                  </span>
                  {(item.price ?? 0) > 0 && <span className="text-[10px] text-cosmic-gold">${item.price}</span>}
                  <Switch checked={item.is_active} onCheckedChange={() => toggleActive(item)} />
                  <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={() => deleteItem(item.id)}>
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        )}
      </CardContent>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════
// TAB 2: Hero Videos
// ═══════════════════════════════════════════════════════
const HeroTab = () => {
  const [items, setItems] = useState<HeroVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const fetch_ = async () => {
    const { data } = await supabase.from('cms_hero_videos').select('*').order('sort_order');
    setItems(data || []); setLoading(false);
  };
  useEffect(() => { fetch_(); }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    setUploading(true);
    try { const u = await uploadFile(file, 'hero-videos'); setUrl(u); toast.success('Uploaded'); }
    catch { toast.error('Upload failed'); }
    setUploading(false);
  };

  const addItem = async () => {
    if (!title.trim() || !url.trim()) return;
    await supabase.from('cms_hero_videos').insert({ title, url, source_type: url.startsWith('http') ? 'url' : 'upload', sort_order: items.length });
    toast.success('Video added'); setShowAdd(false); setTitle(''); setUrl(''); fetch_();
  };

  const toggleActive = async (item: HeroVideo) => {
    await supabase.from('cms_hero_videos').update({ is_active: !item.is_active }).eq('id', item.id);
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, is_active: !i.is_active } : i));
  };

  const deleteItem = async (id: string) => {
    if (!confirm('Delete this hero video?')) return;
    await supabase.from('cms_hero_videos').delete().eq('id', id);
    toast.success('Deleted'); fetch_();
  };

  return (
    <Card className="glass-card border-border/30">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Hero Videos</CardTitle>
          <Button size="sm" onClick={() => setShowAdd(!showAdd)} className="cosmic-button text-xs">
            <Plus className="w-3 h-3 mr-1" /> Add Video
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showAdd && (
          <div className="space-y-3 p-4 rounded-lg bg-secondary/30 border border-border/30 mb-4">
            <Input placeholder="Video title" value={title} onChange={e => setTitle(e.target.value)} className="bg-background/50" />
            <Input placeholder="Video URL" value={url} onChange={e => setUrl(e.target.value)} className="bg-background/50" />
            <div className="flex items-center gap-2">
              <input ref={fileRef} type="file" className="hidden" accept="video/*" onChange={handleFileUpload} />
              <Button variant="outline" size="sm" onClick={() => fileRef.current?.click()} disabled={uploading}>
                <Upload className="w-3 h-3 mr-1" /> {uploading ? 'Uploading...' : 'Upload Video'}
              </Button>
            </div>
            <div className="flex gap-2">
              <Button onClick={addItem} className="cosmic-button text-sm"><Save className="w-4 h-4 mr-1" /> Save</Button>
              <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
        ) : (
          <div className="space-y-2">
            {items.map(item => (
              <div key={item.id} className={`flex items-center gap-3 p-3 rounded-lg border ${item.is_active ? 'bg-secondary/20 border-border/30' : 'opacity-50 border-border/20'}`}>
                <Film className="w-5 h-5 text-cosmic-purple shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{item.url}</p>
                </div>
                <Switch checked={item.is_active} onCheckedChange={() => toggleActive(item)} />
                <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={() => deleteItem(item.id)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════
// TAB 3: App Branding
// ═══════════════════════════════════════════════════════
const BrandingTab = () => {
  const [apps, setApps] = useState<AppBranding[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState('');
  const [faviconUrl, setFaviconUrl] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadTarget, setUploadTarget] = useState<'logo' | 'favicon'>('logo');

  const fetch_ = async () => {
    const { data } = await supabase.from('cms_app_branding').select('*').order('app_name');
    setApps(data || []); setLoading(false);
  };
  useEffect(() => { fetch_(); }, []);

  const startEdit = (app: AppBranding) => {
    setEditingId(app.id);
    setLogoUrl(app.logo_url || '');
    setFaviconUrl(app.favicon_url || '');
    setPrimaryColor(app.primary_color || '');
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; if (!file) return;
    try {
      const url = await uploadFile(file, 'branding');
      if (uploadTarget === 'logo') setLogoUrl(url);
      else setFaviconUrl(url);
      toast.success('Uploaded');
    } catch { toast.error('Upload failed'); }
  };

  const saveEdit = async (id: string) => {
    await supabase.from('cms_app_branding').update({
      logo_url: logoUrl || null,
      favicon_url: faviconUrl || null,
      primary_color: primaryColor || null,
    }).eq('id', id);
    toast.success('Branding updated'); setEditingId(null); fetch_();
  };

  return (
    <Card className="glass-card border-border/30">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">App Branding</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
        ) : (
          <div className="space-y-3">
            {apps.map(app => (
              <div key={app.id} className="p-4 rounded-lg bg-secondary/20 border border-border/30">
                <div className="flex items-center gap-3 mb-2">
                  {app.logo_url ? (
                    <img src={app.logo_url} alt={app.app_name} className="w-10 h-10 rounded-lg object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-sm">{app.app_name}</p>
                    <p className="text-[10px] text-muted-foreground">{app.description}</p>
                  </div>
                  <Button size="sm" variant="ghost" onClick={() => editingId === app.id ? setEditingId(null) : startEdit(app)}>
                    {editingId === app.id ? <X className="w-4 h-4" /> : <Palette className="w-4 h-4" />}
                  </Button>
                </div>

                {editingId === app.id && (
                  <div className="space-y-3 mt-3 pt-3 border-t border-border/30">
                    <input ref={fileRef} type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Logo URL</label>
                      <div className="flex gap-2">
                        <Input value={logoUrl} onChange={e => setLogoUrl(e.target.value)} placeholder="Logo URL" className="bg-background/50 flex-1" />
                        <Button variant="outline" size="sm" onClick={() => { setUploadTarget('logo'); fileRef.current?.click(); }}>
                          <Upload className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Favicon URL</label>
                      <div className="flex gap-2">
                        <Input value={faviconUrl} onChange={e => setFaviconUrl(e.target.value)} placeholder="Favicon URL" className="bg-background/50 flex-1" />
                        <Button variant="outline" size="sm" onClick={() => { setUploadTarget('favicon'); fileRef.current?.click(); }}>
                          <Upload className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-muted-foreground mb-1 block">Primary Color</label>
                      <Input value={primaryColor} onChange={e => setPrimaryColor(e.target.value)} placeholder="e.g. #7c3aed" className="bg-background/50" />
                    </div>
                    <Button onClick={() => saveEdit(app.id)} className="cosmic-button text-sm">
                      <Save className="w-4 h-4 mr-1" /> Save Branding
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

// ═══════════════════════════════════════════════════════
// TAB 4: External Links (YouTube, Podcast, etc.)
// ═══════════════════════════════════════════════════════
const LinksTab = () => {
  const [items, setItems] = useState<ExternalLinkItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ title: '', link_type: 'youtube', url: '', description: '' });

  const fetch_ = async () => {
    const { data } = await supabase.from('cms_external_links').select('*').order('sort_order');
    setItems(data || []); setLoading(false);
  };
  useEffect(() => { fetch_(); }, []);

  const addItem = async () => {
    if (!form.title.trim() || !form.url.trim()) return;
    await supabase.from('cms_external_links').insert({
      title: form.title, link_type: form.link_type,
      url: form.url, description: form.description || null,
      sort_order: items.length,
    });
    toast.success('Link added'); setShowAdd(false);
    setForm({ title: '', link_type: 'youtube', url: '', description: '' });
    fetch_();
  };

  const toggleActive = async (item: ExternalLinkItem) => {
    await supabase.from('cms_external_links').update({ is_active: !item.is_active }).eq('id', item.id);
    setItems(prev => prev.map(i => i.id === item.id ? { ...i, is_active: !i.is_active } : i));
  };

  const deleteItem = async (id: string) => {
    if (!confirm('Delete this link?')) return;
    await supabase.from('cms_external_links').delete().eq('id', id);
    toast.success('Deleted'); fetch_();
  };

  const linkIcons: Record<string, React.ReactNode> = {
    youtube: <Youtube className="w-5 h-5 text-red-500 shrink-0" />,
    podcast: <Podcast className="w-5 h-5 text-cosmic-purple shrink-0" />,
    social: <Globe className="w-5 h-5 text-rainbow-blue shrink-0" />,
    other: <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0" />,
  };

  return (
    <Card className="glass-card border-border/30">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">Podcast & YouTube Links</CardTitle>
          <Button size="sm" onClick={() => setShowAdd(!showAdd)} className="cosmic-button text-xs">
            <Plus className="w-3 h-3 mr-1" /> Add Link
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {showAdd && (
          <div className="space-y-3 p-4 rounded-lg bg-secondary/30 border border-border/30 mb-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input placeholder="Title" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className="bg-background/50" />
              <select value={form.link_type} onChange={e => setForm(f => ({ ...f, link_type: e.target.value }))}
                className="rounded-md border border-input bg-background/50 px-3 py-2 text-sm">
                <option value="youtube">YouTube</option>
                <option value="podcast">Podcast</option>
                <option value="social">Social</option>
                <option value="other">Other</option>
              </select>
            </div>
            <Input placeholder="URL" value={form.url} onChange={e => setForm(f => ({ ...f, url: e.target.value }))} className="bg-background/50" />
            <Textarea placeholder="Description (optional)" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} className="bg-background/50 min-h-[60px]" />
            <div className="flex gap-2">
              <Button onClick={addItem} className="cosmic-button text-sm"><Save className="w-4 h-4 mr-1" /> Save</Button>
              <Button variant="ghost" onClick={() => setShowAdd(false)}>Cancel</Button>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
        ) : items.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-8">No links yet.</p>
        ) : (
          <div className="space-y-2">
            {items.map(item => (
              <div key={item.id} className={`flex items-center gap-3 p-3 rounded-lg border ${item.is_active ? 'bg-secondary/20 border-border/30' : 'opacity-50 border-border/20'}`}>
                {linkIcons[item.link_type] || linkIcons.other}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-[10px] text-muted-foreground truncate">{item.url}</p>
                </div>
                <Switch checked={item.is_active} onCheckedChange={() => toggleActive(item)} />
                <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={() => deleteItem(item.id)}>
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminContentManager;
