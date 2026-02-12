import { useAuth } from '@/hooks/useAuth';
import { Navigate, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import {
  Coins, Zap, Activity, Play, Square,
  TrendingUp, Clock, Cpu, BarChart3, Home, History, Sparkles,
} from 'lucide-react';
import { useMining, MiningTier } from '@/hooks/useMining';
import MiningBalanceOverview from '@/components/mining/MiningBalanceOverview';
import UnlockCountdown from '@/components/mining/UnlockCountdown';
import TradingStatus from '@/components/mining/TradingStatus';
import MiningReserves from '@/components/mining/MiningReserves';

const UserMining = () => {
  const { user, loading } = useAuth();
  const {
    wallet, walletLoading, sessions, transactions,
    isMining, liveStats, logs,
    startMining, stopMining, setTier, tierConfig, mclBalances,
  } = useMining(user?.id);

  if (loading || walletLoading) {
    return (
      <div className="min-h-screen cosmic-bg flex items-center justify-center">
        <div className="animate-pulse text-primary text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  const tier = wallet?.current_tier ?? 'bronze';
  const config = tierConfig[tier];

  const statCards = [
    { icon: Coins, label: 'MCL Balance', value: `${wallet?.rc_balance?.toFixed(2) ?? '0'} MCL`, color: 'text-cosmic-gold' },
    { icon: Zap, label: 'Hash Rate', value: `${liveStats.hashRate} MH/s`, color: 'text-cosmic-teal' },
    { icon: Activity, label: 'Blocks Validated', value: (wallet?.blocks_validated ?? 0).toString(), color: 'text-rainbow-green' },
    { icon: Clock, label: 'Total Mined', value: `${wallet?.total_mined?.toFixed(2) ?? '0'} MCL`, color: 'text-cosmic-purple' },
    { icon: Cpu, label: 'Current Block', value: `#${liveStats.currentBlock}`, color: 'text-rainbow-blue' },
    { icon: BarChart3, label: 'Difficulty', value: liveStats.networkDifficulty.toString(), color: 'text-rainbow-orange' },
  ];

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button asChild variant="ghost" size="icon">
            <Link to="/"><Home className="w-5 h-5" /></Link>
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold rainbow-text flex items-center gap-3">
              <Sparkles className="w-8 h-8" />
              MiracleCoin Mining
            </h1>
            <p className="text-foreground/70 mt-1">MCL Simulation • 50/50 Split • Local Session</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold ${isMining ? 'bg-rainbow-green/20 text-rainbow-green animate-pulse' : 'bg-muted text-muted-foreground'}`}>
            {isMining ? '● MINING' : '○ IDLE'}
          </div>
        </div>

        {/* Simulation Notice */}
        <div className="mb-6 p-3 rounded-lg bg-cosmic-gold/10 border border-cosmic-gold/20 text-sm text-cosmic-gold">
          <Sparkles className="w-4 h-4 inline mr-2" />
          Your MCL mining data is saved — balances persist across sessions!
        </div>

        {/* Balance Overview */}
        <MiningBalanceOverview
          totalMined={mclBalances.totalMined}
          availableBalance={mclBalances.available}
          lockedBalance={mclBalances.locked}
          claimableBalance={mclBalances.claimable}
        />

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

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Mining Control */}
          <Card className="glass-card border-primary/30 lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                MCL Mining Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Block Progress</span>
                  <span className="text-foreground font-mono">{Math.min(100, Math.round(liveStats.miningProgress))}%</span>
                </div>
                <Progress value={Math.min(100, liveStats.miningProgress)} className="h-3" />
              </div>

              <div className="flex gap-3">
                <Button onClick={startMining} disabled={isMining} className="flex-1 cosmic-button text-white">
                  <Play className="w-4 h-4 mr-2" /> Start Mining
                </Button>
                <Button onClick={stopMining} disabled={!isMining} variant="destructive" className="flex-1">
                  <Square className="w-4 h-4 mr-2" /> Stop Mining
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-2 rounded-lg bg-background/30">
                  <p className="text-muted-foreground">Protocol</p>
                  <p className="font-semibold text-foreground">MCL v2.0</p>
                </div>
                <div className="p-2 rounded-lg bg-background/30">
                  <p className="text-muted-foreground">Gas Fee</p>
                  <p className="font-semibold text-rainbow-green">$0.00</p>
                </div>
                <div className="p-2 rounded-lg bg-background/30">
                  <p className="text-muted-foreground">MCL/Block</p>
                  <p className="font-semibold text-cosmic-gold">{config.reward} MCL</p>
                </div>
              </div>

              {/* 50/50 Split Indicator */}
              <div className="p-3 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/20">
                <p className="text-xs font-semibold text-cosmic-purple mb-1">50/50 Split Active</p>
                <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cosmic-gold" /> 50% Immediate
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-cosmic-purple" /> 50% Locked (3yr)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Column: Tier + Trading Status */}
          <div className="space-y-4">
            <Card className="glass-card border-border/30">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Mining Tier</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={tier}
                  onValueChange={(v) => setTier(v as MiningTier)}
                  disabled={isMining}
                  className="space-y-2"
                >
                  {(Object.entries(tierConfig) as [MiningTier, typeof tierConfig.bronze][]).map(([key, cfg]) => (
                    <div key={key} className="flex items-center space-x-2">
                      <RadioGroupItem value={key} id={`user-${key}`} />
                      <Label htmlFor={`user-${key}`} className="text-sm cursor-pointer">
                        {cfg.label} — {cfg.reward} MCL/block, ~{cfg.baseHash} MH/s
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {isMining && <p className="text-[10px] text-muted-foreground mt-2">Stop mining to change tier</p>}
              </CardContent>
            </Card>

            <TradingStatus lastTradeTime={null} />
          </div>
        </div>

        {/* Unlock Countdown + Reserves */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <UnlockCountdown />
          <MiningReserves
            lockedBalance={mclBalances.locked}
            entries={mclBalances.reserveEntries}
          />
        </div>

        {/* Logs */}
        <Card className="glass-card border-border/30 mb-6">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cosmic-teal" /> Mining Logs
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
                }>{log}</p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* History */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass-card border-border/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Coins className="w-5 h-5 text-cosmic-gold" /> Recent Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              {transactions.length === 0 ? (
                <p className="text-sm text-muted-foreground">No transactions yet. Start mining!</p>
              ) : (
                <div className="space-y-1 max-h-52 overflow-y-auto">
                  {transactions.map(tx => (
                    <div key={tx.id} className="flex justify-between text-xs py-1 border-b border-border/20">
                      <span className="text-muted-foreground">Block #{tx.block_number}</span>
                      <span className="text-rainbow-green font-mono">+{tx.amount} MCL</span>
                      <span className="text-muted-foreground">{new Date(tx.created_at).toLocaleTimeString()}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="glass-card border-border/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <History className="w-5 h-5 text-cosmic-purple" /> Session History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {sessions.length === 0 ? (
                <p className="text-sm text-muted-foreground">No sessions yet.</p>
              ) : (
                <div className="space-y-2 max-h-52 overflow-y-auto">
                  {sessions.map(s => (
                    <div key={s.id} className="p-2 rounded-lg bg-background/30 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-cosmic-gold font-semibold">{s.rc_earned.toFixed(4)} MCL</span>
                        <span className="text-muted-foreground">{s.blocks_mined} blocks</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>{new Date(s.started_at).toLocaleString()}</span>
                        <span className="capitalize">{s.tier}</span>
                      </div>
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

export default UserMining;
