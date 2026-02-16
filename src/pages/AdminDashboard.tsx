import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Shield, LogOut, Users, Package, BarChart3,
  Settings, FileText, Video, Coffee, Shirt, Sparkles, Brain, Palette, Eye,
  AlertTriangle, CheckCircle, XCircle, Activity, Loader2,
} from 'lucide-react';

const SentinelLiveCard = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, success: 0, failed: 0, lastLogin: null as string | null });
  const [recentLogs, setRecentLogs] = useState<{ id: string; event_type: string; email: string | null; created_at: string }[]>([]);

  useEffect(() => {
    const fetch24hStats = async () => {
      setLoading(true);
      const { data } = await supabase
        .from('admin_audit_log')
        .select('id, event_type, email, created_at')
        .order('created_at', { ascending: false })
        .limit(50);

      const logs = data || [];
      const now = Date.now();
      const recent = logs.filter(l => now - new Date(l.created_at).getTime() < 86400000);
      setStats({
        total: recent.length,
        success: recent.filter(l => l.event_type === 'login_success').length,
        failed: recent.filter(l => l.event_type === 'login_failure').length,
        lastLogin: logs.find(l => l.event_type === 'login_success')?.created_at || null,
      });
      setRecentLogs(logs.slice(0, 5));
      setLoading(false);
    };
    fetch24hStats();
  }, []);

  const threatLevel = stats.failed >= 10 ? 'critical' : stats.failed >= 5 ? 'elevated' : stats.failed >= 2 ? 'moderate' : 'normal';
  const threatConfig = {
    critical: { color: 'text-destructive', bg: 'bg-destructive/10', Icon: XCircle },
    elevated: { color: 'text-rainbow-orange', bg: 'bg-rainbow-orange/10', Icon: AlertTriangle },
    moderate: { color: 'text-cosmic-gold', bg: 'bg-cosmic-gold/10', Icon: AlertTriangle },
    normal: { color: 'text-rainbow-green', bg: 'bg-rainbow-green/10', Icon: CheckCircle },
  }[threatLevel];

  const eventLabel = (t: string) => {
    if (t === 'login_success') return { label: '✓ Login', color: 'text-rainbow-green' };
    if (t === 'login_failure') return { label: '✗ Failed', color: 'text-destructive' };
    if (t === 'failsafe_used') return { label: '⚡ Failsafe', color: 'text-rainbow-orange' };
    return { label: t, color: 'text-muted-foreground' };
  };

  return (
    <Card className="glass-card border-border/30 col-span-full">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-base flex items-center gap-2">
          <Activity className="w-5 h-5 text-primary" /> Sentinel Monitor — Live 24h
        </CardTitle>
        <Link to="/admin/sentinel">
          <Button variant="ghost" size="sm" className="text-xs">Full View →</Button>
        </Link>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-6"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4">
            {/* Stats Row */}
            <div className="flex flex-wrap gap-3">
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${threatConfig.bg}`}>
                <threatConfig.Icon className={`w-4 h-4 ${threatConfig.color}`} />
                <span className={`text-xs font-semibold ${threatConfig.color} capitalize`}>{threatLevel}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/30">
                <Eye className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs text-foreground">{stats.total} events</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/30">
                <CheckCircle className="w-3.5 h-3.5 text-rainbow-green" />
                <span className="text-xs text-foreground">{stats.success} logins</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary/30">
                <XCircle className="w-3.5 h-3.5 text-destructive" />
                <span className="text-xs text-foreground">{stats.failed} failed</span>
              </div>
            </div>
            {/* Recent Feed */}
            <div className="space-y-1.5">
              {recentLogs.length === 0 ? (
                <p className="text-xs text-muted-foreground">No recent events.</p>
              ) : recentLogs.map(log => {
                const { label, color } = eventLabel(log.event_type);
                return (
                  <div key={log.id} className="flex items-center gap-2 text-xs">
                    <span className={`font-medium ${color} w-20 shrink-0`}>{label}</span>
                    <span className="text-foreground/70 truncate flex-1">{log.email || '—'}</span>
                    <span className="text-muted-foreground whitespace-nowrap">{new Date(log.created_at).toLocaleTimeString()}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin-login" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen cosmic-bg">
        <Navigation />
        <main className="container mx-auto px-4 pt-24 pb-16 flex items-center justify-center min-h-[80vh]">
          <Card className="w-full max-w-md glass-card border-destructive/30 text-center">
            <CardHeader>
              <Shield className="w-12 h-12 text-destructive mx-auto mb-2" />
              <CardTitle className="text-destructive">Access Denied</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/70">You don't have admin privileges.</p>
              <Button onClick={signOut} variant="outline">
                <LogOut className="w-4 h-4 mr-2" /> Sign Out
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  const tools = [
    { icon: Users, label: 'User Management', desc: 'Manage platform users & roles', color: 'text-rainbow-blue', link: null },
    { icon: Package, label: 'LTApparel Orders', desc: 'View & manage clothing orders', color: 'text-cosmic-gold', link: '/ltopportunity' },
    { icon: BarChart3, label: 'Analytics', desc: 'Platform stats & metrics', color: 'text-rainbow-green', link: null },
    { icon: Video, label: 'AI Video Studio', desc: 'AI video generation tools', color: 'text-cosmic-purple', link: null },
    { icon: Coffee, label: 'LTCakeCafe Manager', desc: 'Cafe events & menu', color: 'text-cosmic-teal', link: null },
    { icon: Shirt, label: 'Apparel Manager', desc: 'Product catalog & inventory', color: 'text-rainbow-violet', link: '/ltopportunity' },
    { icon: FileText, label: 'Content Manager', desc: 'Blog posts & media', color: 'text-primary', link: null },
    { icon: Settings, label: 'Platform Settings', desc: 'System configuration', color: 'text-foreground', link: null },
  ];

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold rainbow-text">Admin Dashboard</h1>
            <p className="text-foreground/70 mt-1">Welcome, {user.email}</p>
          </div>
          <Button onClick={signOut} variant="outline" size="sm">
            <LogOut className="w-4 h-4 mr-2" /> Sign Out
          </Button>
        </div>

        {/* Live Sentinel Card */}
        <div className="mb-6">
          <SentinelLiveCard />
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => {
            const cardContent = (
              <Card
                key={tool.label}
                className={`glass-card border-border/30 hover:border-primary/40 transition-all cursor-pointer hover:scale-[1.02] ${!tool.link ? 'opacity-70' : ''}`}
              >
                <CardHeader className="pb-2">
                  <tool.icon className={`w-8 h-8 ${tool.color} mb-2`} />
                  <CardTitle className="text-base">{tool.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-foreground/60">{tool.desc}</p>
                  {!tool.link && <p className="text-[10px] text-muted-foreground italic mt-1">Coming Soon</p>}
                </CardContent>
              </Card>
            );
            return tool.link ? (
              <Link key={tool.label} to={tool.link}>{cardContent}</Link>
            ) : (
              <div key={tool.label}>{cardContent}</div>
            );
          })}
        </div>

        {/* Creator Hub */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">LTCreations Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="glass-card border-cosmic-purple/30">
              <CardHeader>
                <CardTitle className="text-cosmic-purple flex items-center gap-2">
                  <Video className="w-5 h-5" /> AI Video Generator Studio
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70">AI-powered video creation tools from the LTCreations hub.</p>
                <Button className="mt-3 cosmic-button" size="sm" disabled>
                  Coming Soon
                </Button>
              </CardContent>
            </Card>
            <Link to="/admin/bionexus">
              <Card className="glass-card border-rainbow-green/30 hover:border-rainbow-green/60 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-rainbow-green flex items-center gap-2">
                    <Shield className="w-5 h-5" /> BioNexus Protocol
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">MiracleCoin (MCL) mining v2.0 with 50/50 split & KYC-gated protocol.</p>
                  <Button className="mt-3 cosmic-button text-white" size="sm">
                    Launch Mining
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link to="/admin/ai-history">
              <Card className="glass-card border-cosmic-purple/30 hover:border-cosmic-purple/60 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-cosmic-purple flex items-center gap-2">
                    <Sparkles className="w-5 h-5" /> IA Guardian History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">View all IA Rainbow Guardian AI conversations & chat logs.</p>
                  <Button className="mt-3 cosmic-button text-white" size="sm">
                    View History
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link to="/admin/ai-memory">
              <Card className="glass-card border-cosmic-teal/30 hover:border-cosmic-teal/60 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-cosmic-teal flex items-center gap-2">
                    <Brain className="w-5 h-5" /> IA Memory Core
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">Upload structured memories & knowledge for the IA Guardian.</p>
                  <Button className="mt-3 cosmic-button text-white" size="sm">
                    Manage Memories
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link to="/admin/content">
              <Card className="glass-card border-cosmic-gold/30 hover:border-cosmic-gold/60 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-cosmic-gold flex items-center gap-2">
                    <Palette className="w-5 h-5" /> Content Manager
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">Manage media pricing, hero videos, app branding, podcasts & YouTube.</p>
                  <Button className="mt-3 cosmic-button text-white" size="sm">
                    Manage Content
                  </Button>
                </CardContent>
              </Card>
            </Link>
            <Link to="/admin/sentinel">
              <Card className="glass-card border-destructive/30 hover:border-destructive/60 transition-colors cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-destructive flex items-center gap-2">
                    <Eye className="w-5 h-5" /> Sentinel Monitor
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70">Real-time security monitoring, threat assessment & audit logs.</p>
                  <Button className="mt-3 cosmic-button text-white" size="sm">
                    View Security
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
