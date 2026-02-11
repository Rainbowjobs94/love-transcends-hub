import { useAuth } from '@/hooks/useAuth';
import { Navigate, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Shield, LogOut, Users, Package, BarChart3,
  Settings, FileText, Video, Coffee, Shirt
} from 'lucide-react';

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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
