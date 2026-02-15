import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, ArrowLeft, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

type AuditEntry = {
  id: string;
  event_type: string;
  email: string | null;
  details: string | null;
  created_at: string;
};

const eventBadgeVariant = (type: string) => {
  switch (type) {
    case 'login_success': return 'default';
    case 'login_failure': return 'destructive';
    case 'failsafe_used': return 'secondary';
    case 'password_reset': return 'outline';
    default: return 'outline';
  }
};

const eventLabel = (type: string) => {
  switch (type) {
    case 'login_success': return 'Login Success';
    case 'login_failure': return 'Login Failed';
    case 'failsafe_used': return 'Failsafe Used';
    case 'password_reset': return 'Password Reset';
    default: return type;
  }
};

const AdminAuditLog = () => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const [logs, setLogs] = useState<AuditEntry[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/admin-login');
    }
  }, [user, isAdmin, loading, navigate]);

  const fetchLogs = async () => {
    setFetching(true);
    const { data } = await supabase
      .from('admin_audit_log')
      .select('id, event_type, email, details, created_at')
      .order('created_at', { ascending: false })
      .limit(100);
    setLogs((data as AuditEntry[]) || []);
    setFetching(false);
  };

  useEffect(() => {
    if (user && isAdmin) fetchLogs();
  }, [user, isAdmin]);

  if (loading || !user || !isAdmin) return null;

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold rainbow-text">Admin Audit Log</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={fetchLogs} disabled={fetching}>
                <RefreshCw className={`w-4 h-4 mr-1 ${fetching ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link to="/admin"><ArrowLeft className="w-4 h-4 mr-1" /> Dashboard</Link>
              </Button>
            </div>
          </div>

          <Card className="glass-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Recent Activity ({logs.length})</CardTitle>
            </CardHeader>
            <CardContent>
              {logs.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">No audit events recorded yet.</p>
              ) : (
                <div className="space-y-3">
                  {logs.map((log) => (
                    <div key={log.id} className="flex items-start justify-between p-3 rounded-lg bg-background/30 border border-border/30">
                      <div className="flex items-start gap-3">
                        <Badge variant={eventBadgeVariant(log.event_type) as any} className="mt-0.5 shrink-0">
                          {eventLabel(log.event_type)}
                        </Badge>
                        <div>
                          {log.email && <p className="text-sm text-foreground font-medium">{log.email}</p>}
                          {log.details && <p className="text-xs text-muted-foreground mt-1">{log.details}</p>}
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground shrink-0 ml-4">
                        {new Date(log.created_at).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminAuditLog;
