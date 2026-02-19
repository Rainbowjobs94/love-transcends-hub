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
  const [stats, setStats] = useState({ total: 0, success: 0, failed: 0, failsafe: 0, lastLogin: null as string | null });
  const [recentLogs, setRecentLogs] = useState<{ id: string; event_type: string; email: string | null; created_at: string }[]>([]);

  const fetchData = async () => {
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
      failsafe: recent.filter(l => l.event_type === 'failsafe_used').length,
      lastLogin: logs.find(l => l.event_type === 'login_success')?.created_at || null,
    });
    setRecentLogs(logs.slice(0, 6));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // auto-refresh every 30s
    return () => clearInterval(interval);
  }, []);

  const threatLevel = stats.failed >= 10 ? 'critical' : stats.failed >= 5 ? 'elevated' : stats.failed >= 2 ? 'moderate' : 'normal';
  const threatConfig = {
    critical: { color: 'text-destructive', bg: 'bg-destructive/15', border: 'border-destructive/40', pulse: 'animate-pulse', Icon: XCircle, label: 'Critical' },
    elevated: { color: 'text-rainbow-orange', bg: 'bg-rainbow-orange/15', border: 'border-rainbow-orange/40', pulse: 'animate-pulse', Icon: AlertTriangle, label: 'Elevated' },
    moderate: { color: 'text-cosmic-gold', bg: 'bg-cosmic-gold/15', border: 'border-cosmic-gold/40', pulse: '', Icon: AlertTriangle, label: 'Moderate' },
    normal: { color: 'text-rainbow-green', bg: 'bg-rainbow-green/15', border: 'border-rainbow-green/40', pulse: '', Icon: CheckCircle, label: 'Normal' },
  }[threatLevel];

  const eventLabel = (t: string) => {
    if (t === 'login_success') return { label: '✓ Login', color: 'text-rainbow-green' };
    if (t === 'login_failure') return { label: '✗ Failed', color: 'text-destructive' };
    if (t === 'failsafe_used') return { label: '⚡ Failsafe', color: 'text-rainbow-orange' };
    if (t === 'password_reset') return { label: '🔑 Reset', color: 'text-cosmic-purple' };
    return { label: t, color: 'text-muted-foreground' };
  };

  const timeSince = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  };

  return (
    <Card className={`glass-card ${threatConfig.border} border col-span-full`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Sentinel Monitor
            <span className="text-[10px] font-normal text-muted-foreground ml-1">auto-refresh 30s</span>
          </CardTitle>
          <div className="flex items-center gap-2">
            {/* Threat Level Badge */}
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${threatConfig.bg} ${threatConfig.border} ${threatConfig.pulse}`}>
              <threatConfig.Icon className={`w-4 h-4 ${threatConfig.color}`} />
              <span className={`text-xs font-bold ${threatConfig.color} uppercase tracking-wider`}>
                {threatConfig.label}
              </span>
              {stats.failed > 0 && (
                <span className={`text-[10px] font-semibold ${threatConfig.color} ml-0.5`}>
                  ({stats.failed} threat{stats.failed !== 1 ? 's' : ''})
                </span>
              )}
            </div>
            <Link to="/admin/sentinel">
              <Button variant="outline" size="sm" className="text-xs gap-1 border-primary/30 hover:bg-primary/10">
                <Eye className="w-3.5 h-3.5" /> Full Sentinel View
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-6"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
        ) : (
          <div className="space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/20 border border-border/20">
                <Eye className="w-4 h-4 text-primary mb-1" />
                <span className="text-xl font-bold text-foreground tabular-nums">{stats.total}</span>
                <span className="text-[10px] text-muted-foreground">Events (24h)</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/20 border border-border/20">
                <CheckCircle className="w-4 h-4 text-rainbow-green mb-1" />
                <span className="text-xl font-bold text-foreground tabular-nums">{stats.success}</span>
                <span className="text-[10px] text-muted-foreground">Logins</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/20 border border-border/20">
                <XCircle className="w-4 h-4 text-destructive mb-1" />
                <span className="text-xl font-bold text-foreground tabular-nums">{stats.failed}</span>
                <span className="text-[10px] text-muted-foreground">Failed</span>
              </div>
              <div className="flex flex-col items-center p-3 rounded-lg bg-secondary/20 border border-border/20">
                <AlertTriangle className="w-4 h-4 text-rainbow-orange mb-1" />
                <span className="text-xl font-bold text-foreground tabular-nums">{stats.failsafe}</span>
                <span className="text-[10px] text-muted-foreground">Failsafe</span>
              </div>
            </div>

            {/* Recent Feed */}
            <div>
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Recent Activity</p>
              {recentLogs.length === 0 ? (
                <p className="text-xs text-muted-foreground text-center py-3">No recent events.</p>
              ) : (
                <div className="space-y-1">
                  {recentLogs.map(log => {
                    const { label, color } = eventLabel(log.event_type);
                    return (
                      <div key={log.id} className="flex items-center gap-2 text-xs py-1.5 px-2 rounded-md hover:bg-secondary/20 transition-colors">
                        <span className={`font-semibold ${color} w-20 shrink-0`}>{label}</span>
                        <span className="text-foreground/70 truncate flex-1">{log.email || '—'}</span>
                        <span className="text-muted-foreground whitespace-nowrap tabular-nums">{timeSince(log.created_at)}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Last successful login */}
            {stats.lastLogin && (
              <p className="text-[10px] text-muted-foreground text-right">
                Last admin login: {new Date(stats.lastLogin).toLocaleString()}
              </p>
            )}
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
