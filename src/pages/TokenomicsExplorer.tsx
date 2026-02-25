import { useState, useEffect, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import {
  Coins, Flame, TrendingUp, Lock, BarChart3, Activity,
  ArrowUpRight, ArrowDownRight, Layers, PieChart, Wallet, Gem,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';

/* ─── Simulated live-tick helpers ─── */
const jitter = (base: number, pct = 0.002) =>
  base + base * (Math.random() * pct * 2 - pct);

const fmt = (n: number, decimals = 2) =>
  n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

const fmtM = (n: number) => {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  return fmt(n, 0);
};

/* ─── Metric card ─── */
const MetricCard = ({
  icon: Icon,
  iconColor,
  label,
  value,
  sub,
  delta,
  deltaUp,
}: {
  icon: React.ElementType;
  iconColor: string;
  label: string;
  value: string;
  sub?: string;
  delta?: string;
  deltaUp?: boolean;
}) => (
  <div className="glass-card rounded-xl p-5 flex flex-col gap-2 group hover:border-primary/40 transition-all">
    <div className="flex items-center justify-between">
      <Icon className={`w-6 h-6 ${iconColor}`} />
      {delta && (
        <span
          className={`text-xs font-semibold flex items-center gap-0.5 ${
            deltaUp ? 'text-rainbow-green' : 'text-red-400'
          }`}
        >
          {deltaUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {delta}
        </span>
      )}
    </div>
    <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
    <p className="text-2xl font-bold text-foreground tabular-nums">{value}</p>
    {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
  </div>
);

/* ─── Distribution bar ─── */
const DistSlice = ({ label, pct, color }: { label: string; pct: number; color: string }) => (
  <div className="flex items-center gap-3">
    <span className={`w-3 h-3 rounded-full ${color} shrink-0`} />
    <span className="text-sm text-foreground flex-1">{label}</span>
    <span className="text-sm font-semibold text-muted-foreground">{pct}%</span>
    <Progress value={pct} className="w-24 h-1.5" />
  </div>
);

/* ─── Page ─── */
const TokenomicsExplorer = () => {
  /* live-ticking state */
  const [totalSupply, setTotalSupply] = useState(1_000_000_000);
  const [circulatingSupply, setCirculating] = useState(247_500_000);
  const [burned, setBurned] = useState(12_340_000);
  const [burnRate, setBurnRate] = useState(41_133); // daily
  const [stakedTotal, setStaked] = useState(185_600_000);
  const [stakingApy, setApy] = useState(2.5);
  const [mclPrice, setPrice] = useState(0.0842);
  const [blockHeight, setBlock] = useState(1_482_037);

  const tick = useCallback(() => {
    setBurned((b) => b + Math.random() * 120);
    setBurnRate((r) => jitter(r, 0.005));
    setCirculating((c) => c + Math.random() * 50 - 30);
    setStaked((s) => s + Math.random() * 80 - 20);
    setApy((a) => Math.max(1.8, Math.min(3.2, jitter(a, 0.003))));
    setPrice((p) => Math.max(0.05, jitter(p, 0.004)));
    setBlock((b) => b + 1);
  }, []);

  useEffect(() => {
    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, [tick]);

  const marketCap = circulatingSupply * mclPrice;
  const stakedPct = ((stakedTotal / circulatingSupply) * 100).toFixed(1);
  const burnedPct = ((burned / totalSupply) * 100).toFixed(2);

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />

      <main className="pt-24 pb-12 relative z-10">
        {/* Header */}
        <section className="text-center mb-12">
          <div className="container mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cosmic-gold/30 bg-cosmic-gold/10 text-cosmic-gold text-xs font-semibold mb-4">
              <Activity className="w-3 h-3 animate-pulse" /> LIVE METRICS
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="rainbow-text">MCL Tokenomics</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time supply, deflation, and staking data for MiracleCoin — powering the Love Transcends ecosystem.
            </p>
            <div className="cosmic-divider w-48 mx-auto mt-6" />
          </div>
        </section>

        {/* Top metrics grid */}
        <section className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <MetricCard
              icon={Coins}
              iconColor="text-cosmic-gold"
              label="Total Supply"
              value={fmtM(totalSupply)}
              sub="Hard-capped"
            />
            <MetricCard
              icon={Wallet}
              iconColor="text-cosmic-teal"
              label="Circulating"
              value={fmtM(circulatingSupply)}
              sub={`${((circulatingSupply / totalSupply) * 100).toFixed(1)}% of total`}
              delta="+0.12%"
              deltaUp
            />
            <MetricCard
              icon={Flame}
              iconColor="text-red-400"
              label="Burned"
              value={fmtM(burned)}
              sub={`${burnedPct}% of total`}
              delta={`${fmt(burnRate, 0)}/day`}
              deltaUp={false}
            />
            <MetricCard
              icon={BarChart3}
              iconColor="text-cosmic-purple"
              label="MCL Price"
              value={`$${fmt(mclPrice, 4)}`}
              sub={`Mkt Cap $${fmtM(marketCap)}`}
              delta="+1.3%"
              deltaUp
            />
          </div>
        </section>

        {/* Staking & Reserve panel */}
        <section className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Staking */}
            <div className="glass-card rounded-xl p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-cosmic-gold" />
                <h2 className="text-lg font-bold text-foreground">Staking Overview</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Staked MCL</p>
                  <p className="text-xl font-bold text-foreground tabular-nums">{fmtM(stakedTotal)}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Staked %</p>
                  <p className="text-xl font-bold text-foreground tabular-nums">{stakedPct}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">APY (compounding)</p>
                  <p className="text-xl font-bold text-rainbow-green tabular-nums">{fmt(stakingApy)}%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Early Withdraw Penalty</p>
                  <p className="text-xl font-bold text-red-400">15%</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Reserve Lock Progress (3-year)</p>
                <Progress value={33} className="h-2" />
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                  <span>Year 1 — 10%</span>
                  <span>Year 2 — 30%</span>
                  <span>Year 3 — 60%</span>
                </div>
              </div>
            </div>

            {/* Burn Mechanics */}
            <div className="glass-card rounded-xl p-6 space-y-5">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-red-400" />
                <h2 className="text-lg font-bold text-foreground">Burn Mechanics</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                MCL implements a continuous deflationary burn funded by platform fees.
                The 7% transaction fee is split across treasury allocations, with a
                portion permanently removed from circulation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Daily Burn</p>
                  <p className="text-xl font-bold text-red-400 tabular-nums">{fmt(burnRate, 0)} MCL</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Lifetime Burned</p>
                  <p className="text-xl font-bold text-foreground tabular-nums">{fmtM(burned)}</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Supply Deflation</p>
                <Progress value={parseFloat(burnedPct)} className="h-2" />
                <p className="text-[10px] text-muted-foreground mt-1">
                  {burnedPct}% of total supply permanently removed
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Token Distribution */}
        <section className="container mx-auto px-4 mb-10">
          <div className="max-w-5xl mx-auto glass-card rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <PieChart className="w-5 h-5 text-cosmic-purple" />
              <h2 className="text-lg font-bold text-foreground">Token Distribution</h2>
            </div>
            <div className="space-y-3">
              <DistSlice label="Community Mining Rewards" pct={40} color="bg-cosmic-gold" />
              <DistSlice label="Staking Reserve (Locked)" pct={25} color="bg-cosmic-teal" />
              <DistSlice label="Development Fund" pct={15} color="bg-cosmic-purple" />
              <DistSlice label="Security & Audits" pct={10} color="bg-rainbow-blue" />
              <DistSlice label="Founder Allocation (7yr vest)" pct={7} color="bg-rainbow-green" />
              <DistSlice label="Initial Burn" pct={3} color="bg-red-400" />
            </div>
          </div>
        </section>

        {/* Minting Formula + Network Stats */}
        <section className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="glass-card rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-cosmic-gold" />
                <h2 className="text-lg font-bold text-foreground">Minting Formula</h2>
              </div>
              <div className="bg-background/60 rounded-lg p-4 font-mono text-sm text-foreground border border-border/50">
                MCL<sub>minted</sub> = base_rate × tier_multiplier × participation_score
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cosmic-teal" />
                  <div>
                    <p className="font-semibold text-foreground">50 / 50 Payout</p>
                    <p className="text-xs text-muted-foreground">Liquid + 3yr reserve lock</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-rainbow-green" />
                  <div>
                    <p className="font-semibold text-foreground">Bronze 0.25 RC</p>
                    <p className="text-xs text-muted-foreground">Silver 0.50 RC / block</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-cosmic-teal" />
                <h2 className="text-lg font-bold text-foreground">Network Pulse</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Block Height</p>
                  <p className="text-xl font-bold text-foreground tabular-nums">{blockHeight.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Avg Block Time</p>
                  <p className="text-xl font-bold text-foreground">~3s</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Encryption</p>
                  <p className="text-sm font-bold text-foreground">Kyber-768 / AES-256</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Gas Fees</p>
                  <p className="text-xl font-bold text-rainbow-green">$0.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSNX Bonding Curve + KEM Mining Tiers */}
        <section className="container mx-auto px-4 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="glass-card rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cosmic-gold" />
                <h2 className="text-lg font-bold text-foreground">RSNX Bonding Curve</h2>
              </div>
              {[
                ['Reserve Ratio', '50%'],
                ['Protocol Fee', '1%'],
                ['Founder Fee', '0%'],
                ['Graduation Threshold', '50,000 MATIC'],
                ['MCL Conversion', '1,000 KEM = 1 MCL (~$1)'],
                ['Vest Unlock', 'Dec 31, 2030'],
              ].map(([k, v], i) => (
                <div key={i} className="flex justify-between text-sm border-b border-border/30 pb-2">
                  <span className="text-muted-foreground">{k}</span>
                  <span className="font-semibold text-foreground">{v}</span>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Gem className="w-5 h-5 text-cosmic-teal" />
                <h2 className="text-lg font-bold text-foreground">KEM Mining Tiers</h2>
              </div>
              {[
                ['🥉 Bronze', '1 RC / 1,000 KEM', '1× multiplier'],
                ['🥈 Silver', '5 RC / 1,000 KEM', '5× multiplier'],
                ['🥇 Gold', '10 RC / 1,000 KEM', '10× multiplier'],
              ].map(([tier, rate, mult], i) => (
                <div key={i} className="flex items-center justify-between text-sm border-b border-border/30 pb-2">
                  <span className="font-semibold text-foreground">{tier}</span>
                  <span className="text-muted-foreground text-xs">{rate}</span>
                  <span className="text-cosmic-gold font-bold">{mult}</span>
                </div>
              ))}
              <p className="text-xs text-muted-foreground mt-2">
                Daily claim limit: 5 per user · Early withdrawal penalty: 15%
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TokenomicsExplorer;
