import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Shield, Zap, Coins, Activity, Play, Square,
  TrendingUp, Clock, Cpu, BarChart3, ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface MiningStats {
  totalMined: number;
  hashRate: number;
  blocksValidated: number;
  uptime: number;
  currentBlock: number;
  networkDifficulty: number;
}

const BioNexusProtocol = () => {
  const { user, isAdmin, loading } = useAuth();
  const [isMining, setIsMining] = useState(false);
  const [miningProgress, setMiningProgress] = useState(0);
  const [stats, setStats] = useState<MiningStats>({
    totalMined: 0,
    hashRate: 0,
    blocksValidated: 0,
    uptime: 0,
    currentBlock: 100000,
    networkDifficulty: 42.7,
  });
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM] BioNexus Protocol v0.9.1-beta initialized',
    '[SYSTEM] Shift Coin Protocol engine ready',
    '[NETWORK] Connected to LTR Miracle Network',
  ]);

  const addLog = useCallback((msg: string) => {
    setLogs(prev => [...prev.slice(-50), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  }, []);

  useEffect(() => {
    if (!isMining) return;

    const interval = setInterval(() => {
      setMiningProgress(prev => {
        if (prev >= 100) {
          // Block mined!
          setStats(s => ({
            ...s,
            totalMined: +(s.totalMined + 0.25).toFixed(4),
            blocksValidated: s.blocksValidated + 1,
            currentBlock: s.currentBlock + 1,
          }));
          addLog(`[MINER] Block #${stats.currentBlock + 1} validated — +0.25 RC earned`);
          return 0;
        }
        return prev + Math.random() * 8 + 2;
      });

      setStats(s => ({
        ...s,
        hashRate: +(Math.random() * 15 + 25).toFixed(1),
        uptime: s.uptime + 1,
        networkDifficulty: +(42 + Math.random() * 3).toFixed(1),
      }));
    }, 800);

    return () => clearInterval(interval);
  }, [isMining, addLog, stats.currentBlock]);

  const startMining = () => {
    setIsMining(true);
    setMiningProgress(0);
    addLog('[MINER] Mining engine started — Shift Coin Protocol active');
    addLog('[NETWORK] Auto-selecting optimal blockchain route...');
    addLog('[NETWORK] Route selected: Zero-gas lane via LTR Bridge');
  };

  const stopMining = () => {
    setIsMining(false);
    addLog('[MINER] Mining engine stopped');
    addLog(`[STATS] Session total: ${stats.totalMined} RC | ${stats.blocksValidated} blocks`);
  };

  if (loading) {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) return <Navigate to="/admin-login" replace />;
  if (!isAdmin) return <Navigate to="/admin" replace />;

  const statCards = [
    { icon: Coins, label: 'RC Mined', value: `${stats.totalMined} RC`, color: 'text-cosmic-gold' },
    { icon: Zap, label: 'Hash Rate', value: `${stats.hashRate} MH/s`, color: 'text-cosmic-teal' },
    { icon: Activity, label: 'Blocks Validated', value: stats.blocksValidated.toString(), color: 'text-rainbow-green' },
    { icon: Clock, label: 'Uptime', value: `${Math.floor(stats.uptime / 60)}m ${stats.uptime % 60}s`, color: 'text-cosmic-purple' },
    { icon: Cpu, label: 'Current Block', value: `#${stats.currentBlock}`, color: 'text-rainbow-blue' },
    { icon: BarChart3, label: 'Difficulty', value: stats.networkDifficulty.toString(), color: 'text-rainbow-orange' },
  ];

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button asChild variant="ghost" size="icon">
            <Link to="/admin"><ArrowLeft className="w-5 h-5" /></Link>
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold rainbow-text flex items-center gap-3">
              <Shield className="w-8 h-8" />
              BioNexus Protocol
            </h1>
            <p className="text-foreground/70 mt-1">Shift Coin Mining Simulator — Reality Coin (RC)</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${isMining ? 'bg-rainbow-green/20 text-rainbow-green animate-pulse' : 'bg-muted text-muted-foreground'}`}>
            {isMining ? '● MINING' : '○ IDLE'}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {statCards.map(s => (
            <Card key={s.label} className="glass-card border-border/30">
              <CardContent className="p-3 text-center">
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-1`} />
                <p className="text-lg font-bold text-foreground">{s.value}</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mining Control */}
        <Card className="glass-card border-primary/30 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Cpu className="w-5 h-5 text-primary" />
              Mining Engine
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Block Progress</span>
                <span className="text-foreground font-mono">{Math.min(100, Math.round(miningProgress))}%</span>
              </div>
              <Progress value={Math.min(100, miningProgress)} className="h-3" />
            </div>

            <div className="flex gap-3">
              <Button
                onClick={startMining}
                disabled={isMining}
                className="flex-1 cosmic-button text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Mining
              </Button>
              <Button
                onClick={stopMining}
                disabled={!isMining}
                variant="destructive"
                className="flex-1"
              >
                <Square className="w-4 h-4 mr-2" />
                Stop Mining
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-2 rounded-lg bg-background/30">
                <p className="text-muted-foreground">Protocol</p>
                <p className="font-semibold text-foreground">Shift Coin v2</p>
              </div>
              <div className="p-2 rounded-lg bg-background/30">
                <p className="text-muted-foreground">Gas Fee</p>
                <p className="font-semibold text-rainbow-green">$0.00</p>
              </div>
              <div className="p-2 rounded-lg bg-background/30">
                <p className="text-muted-foreground">RC Value</p>
                <p className="font-semibold text-cosmic-gold">$1.00</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mining Logs */}
        <Card className="glass-card border-border/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cosmic-teal" />
              Mining Logs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-black/60 rounded-lg p-3 h-48 overflow-y-auto font-mono text-xs space-y-0.5">
              {logs.map((log, i) => (
                <p key={i} className={
                  log.includes('[MINER]') ? 'text-rainbow-green' :
                  log.includes('[NETWORK]') ? 'text-cosmic-teal' :
                  log.includes('[STATS]') ? 'text-cosmic-gold' :
                  'text-foreground/60'
                }>
                  {log}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default BioNexusProtocol;
