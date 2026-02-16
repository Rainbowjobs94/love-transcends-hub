import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Shield, ArrowLeft, AlertTriangle, CheckCircle, XCircle,
  Activity, Clock, Users, Eye, Loader2,
} from 'lucide-react';
import { toast } from 'sonner';

type AuditEntry = {
  id: string;
  event_type: string;
  email: string | null;
  details: string | null;
  created_at: string;
};

const AdminSentinel = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [auditLogs, setAuditLogs] = useState<AuditEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalEvents: 0,
    failedLogins: 0,
    successLogins: 0,
    failsafeUsed: 0,
    lastLogin: null as string | null,
  });

  useEffect(() => {
    if (isAdmin) fetchData();
  }, [isAdmin]);

  const fetchData = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('admin_audit_log')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) {
      toast.error('Failed to load audit data');
      setLoading(false);
      return;
    }

    const logs = data || [];
    setAuditLogs(logs);

    const now = new Date();
    const last24h = logs.filter(l => (now.getTime() - new Date(l.created_at).getTime()) < 86400000);
    const failedLogins = last24h.filter(l => l.event_type === 'login_failure').length;
    const successLogins = last24h.filter(l => l.event_type === 'login_success').length;
    const failsafeUsed = last24h.filter(l => l.event_type === 'failsafe_used').length;
    const lastLogin = logs.find(l => l.event_type === 'login_success');

    setStats({
      totalEvents: last24h.length,
      failedLogins,
      successLogins,
      failsafeUsed,
      lastLogin: lastLogin?.created_at || null,
    });
    setLoading(false);
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

  const threatLevel = stats.failedLogins >= 10 ? 'critical' : stats.failedLogins >= 5 ? 'elevated' : stats.failedLogins >= 2 ? 'moderate' : 'normal';
  const threatColors = {
    critical: { bg: 'bg-destructive/20', border: 'border-destructive/40', text: 'text-destructive', icon: XCircle },
    elevated: { bg: 'bg-rainbow-orange/20', border: 'border-rainbow-orange/40', text: 'text-rainbow-orange', icon: AlertTriangle },
    moderate: { bg: 'bg-cosmic-gold/20', border: 'border-cosmic-gold/40', text: 'text-cosmic-gold', icon: AlertTriangle },
    normal: { bg: 'bg-rainbow-green/20', border: 'border-rainbow-green/40', text: 'text-rainbow-green', icon: CheckCircle },
  };
  const tc = threatColors[threatLevel];
  const ThreatIcon = tc.icon;

  const eventTypeLabel = (type: string) => {
    switch (type) {
      case 'login_success': return { label: 'Login Success', color: 'text-rainbow-green' };
      case 'login_failure': return { label: 'Login Failed', color: 'text-destructive' };
      case 'failsafe_used': return { label: 'Failsafe Used', color: 'text-rainbow-orange' };
      case 'password_reset': return { label: 'Password Reset', color: 'text-cosmic-purple' };
      default: return { label: type, color: 'text-muted-foreground' };
    }
  };

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
              <Shield className="w-8 h-8" /> Sentinel Monitor
            </h1>
            <p className="text-foreground/70 text-sm mt-1">Real-time security monitoring & threat assessment</p>
          </div>
          <Button size="sm" variant="outline" className="ml-auto" onClick={fetchData} disabled={loading}>
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Activity className="w-4 h-4" />}
            <span className="ml-1">Refresh</span>
          </Button>
        </div>

        {/* Threat Level Banner */}
        <Card className={`mb-6 ${tc.bg} ${tc.border} border`}>
          <CardContent className="p-4 flex items-center gap-4">
            <ThreatIcon className={`w-10 h-10 ${tc.text}`} />
            <div>
              <p className={`text-lg font-bold ${tc.text} capitalize`}>Threat Level: {threatLevel}</p>
              <p className="text-sm text-foreground/70">
                {stats.failedLogins} failed login{stats.failedLogins !== 1 ? 's' : ''} in the last 24 hours
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="glass-card border-border/30">
            <CardContent className="p-4 text-center">
              <Eye className="w-6 h-6 text-primary mx-auto mb-1" />
              <p className="text-2xl font-bold text-foreground">{stats.totalEvents}</p>
              <p className="text-xs text-muted-foreground">Events (24h)</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border/30">
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-6 h-6 text-rainbow-green mx-auto mb-1" />
              <p className="text-2xl font-bold text-foreground">{stats.successLogins}</p>
              <p className="text-xs text-muted-foreground">Successful Logins</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border/30">
            <CardContent className="p-4 text-center">
              <XCircle className="w-6 h-6 text-destructive mx-auto mb-1" />
              <p className="text-2xl font-bold text-foreground">{stats.failedLogins}</p>
              <p className="text-xs text-muted-foreground">Failed Attempts</p>
            </CardContent>
          </Card>
          <Card className="glass-card border-border/30">
            <CardContent className="p-4 text-center">
              <Clock className="w-6 h-6 text-cosmic-purple mx-auto mb-1" />
              <p className="text-sm font-bold text-foreground">
                {stats.lastLogin ? new Date(stats.lastLogin).toLocaleString() : 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">Last Admin Login</p>
            </CardContent>
          </Card>
        </div>

        {/* Audit Log Feed */}
        <Card className="glass-card border-border/30">
          <CardHeader className="pb-3">
            <CardTitle className="text-base flex items-center gap-2">
              <Activity className="w-5 h-5 text-primary" /> Recent Audit Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="max-h-[500px]">
              {loading ? (
                <div className="flex justify-center py-8"><Loader2 className="w-5 h-5 animate-spin text-muted-foreground" /></div>
              ) : auditLogs.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-8">No audit events recorded.</p>
              ) : (
                <div className="space-y-2">
                  {auditLogs.map(log => {
                    const { label, color } = eventTypeLabel(log.event_type);
                    return (
                      <div key={log.id} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/20 border border-border/20">
                        <div className={`text-xs font-semibold px-2 py-0.5 rounded ${color} bg-secondary/40 whitespace-nowrap`}>
                          {label}
                        </div>
                        <div className="flex-1 min-w-0">
                          {log.email && <p className="text-xs text-foreground/80 truncate">{log.email}</p>}
                          {log.details && <p className="text-[10px] text-muted-foreground truncate">{log.details}</p>}
                        </div>
                        <span className="text-[10px] text-muted-foreground whitespace-nowrap">
                          {new Date(log.created_at).toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AdminSentinel;
