import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Coins, Zap, Shield, Lock, TrendingUp, ArrowRight,
  Layers, Timer, Pickaxe, CircleDollarSign, Gem,
  ShieldCheck, Fingerprint, Globe, BookOpen, Sparkles,
} from 'lucide-react';
import miracleNetworkLogo from '@/assets/logos/miracle-network-new-logo.png';

const WORKFLOW_STEPS = [
  { icon: Fingerprint, title: 'Device Fingerprint', desc: 'Encrypted collection of IP, VPN, IMEI, MAC, GPS, and WiFi data forms your unique mining identity.' },
  { icon: Shield, title: 'Shift Coin Protocol', desc: 'The protocol encrypts your fingerprint and auto-selects the fastest blockchain network with zero gas fees.' },
  { icon: Pickaxe, title: 'Block Validation', desc: 'Your device validates blocks on the network. Bronze earns 0.25 MCL/block, Silver earns 0.50 MCL/block.' },
  { icon: Layers, title: '50/50 Payout Split', desc: '50% of every reward is immediately liquid. The other 50% enters a locked reserve until the unlock date.' },
  { icon: Timer, title: '3-Year Graduated Unlock', desc: 'Locked reserves unlock in stages: 10% at Year 1, 30% at Year 2, and 60% at Year 3 (Dec 31, 2030).' },
  { icon: CircleDollarSign, title: 'Claim & Trade', desc: 'Once unlocked, you have a 7-day claim window. Unclaimed tokens expire. Trading is limited to twice per week.' },
];

const MiningKnowledge = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero */}
          <section className="text-center mb-16">
            <img src={miracleNetworkLogo} alt="Miracle Network" className="w-20 h-20 rounded-full mx-auto mb-6 object-cover shadow-lg shadow-cosmic-gold/30" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="rainbow-text">Mining Knowledge Base</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand MiracleCoin tokenomics, mining tiers, the 50/50 payout model, and the Shift Coin Protocol that powers it all.
            </p>
            <div className="cosmic-divider w-48 mx-auto mt-8" />
          </section>

          {/* Tokenomics Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Gem className="w-8 h-8 text-cosmic-gold" />
              MiracleCoin (MCL) Tokenomics
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MCL Core */}
              <div className="glass-card rounded-2xl p-6 border border-cosmic-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-gold to-rainbow-orange flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">MiracleCoin (MCL)</h3>
                    <p className="text-cosmic-gold text-sm font-semibold">v2.0 Protocol</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-gold mt-1.5 shrink-0" /> <span>Mined through the Shift Coin Protocol on Polygon</span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-gold mt-1.5 shrink-0" /> <span>50% of rewards are <strong className="text-foreground">immediately liquid</strong></span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-gold mt-1.5 shrink-0" /> <span>50% locked in reserve with graduated 3-year unlock</span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-gold mt-1.5 shrink-0" /> <span>7% platform fee on all payouts</span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-gold mt-1.5 shrink-0" /> <span>5% of platform revenue → Viewer Bonus Pool</span></li>
                </ul>
              </div>

              {/* RC Core */}
              <div className="glass-card rounded-2xl p-6 border border-cosmic-teal/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-teal to-rainbow-blue flex items-center justify-center">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Reality Coin (RC)</h3>
                    <p className="text-cosmic-teal text-sm font-semibold">$1 Stable Value</p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-teal mt-1.5 shrink-0" /> <span>Supply cap: <strong className="text-foreground">365 Trillion</strong></span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-teal mt-1.5 shrink-0" /> <span>Stable at $1 within the LTReality network</span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-teal mt-1.5 shrink-0" /> <span>Volatile only when converted out of ecosystem</span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-teal mt-1.5 shrink-0" /> <span>4-year crypto lock for price stability</span></li>
                  <li className="flex items-start gap-2"><span className="w-2 h-2 rounded-full bg-cosmic-teal mt-1.5 shrink-0" /> <span>Wallet rules: 1:1.75 deposit, 75c/25c withdrawal split</span></li>
                </ul>
              </div>
            </div>

            {/* Conversion */}
            <div className="glass-card rounded-xl p-5 mt-4 border border-border/30 text-center">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Miracle Coin Conversion:</strong>{' '}
                1,000,000 RC = 1 MC &nbsp;|&nbsp; $2M in platform transactions = 1 MC &nbsp;|&nbsp;
                MC Target Price: <span className="text-cosmic-gold font-bold">$1,000,000</span> &nbsp;|&nbsp;
                MC Supply Cap: <span className="text-foreground font-bold">777 Trillion</span>
              </p>
            </div>
          </section>

          {/* Mining Workflow */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-cosmic-teal" />
              Mining Workflow
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WORKFLOW_STEPS.map((step, i) => (
                <Card key={step.title} className="glass-card border-border/30 relative overflow-hidden">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                        {i + 1}
                      </div>
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Mining Tiers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Pickaxe className="w-8 h-8 text-rainbow-orange" />
              Mining Tiers & Rewards
            </h2>

            <div className="glass-card rounded-2xl p-6 border border-border/30">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tier</TableHead>
                    <TableHead>MCL / Block</TableHead>
                    <TableHead>Base Hash Rate</TableHead>
                    <TableHead>Min Interval</TableHead>
                    <TableHead>50% Immediate</TableHead>
                    <TableHead>50% Locked</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <span className="flex items-center gap-2">🥉 <strong>Bronze</strong></span>
                    </TableCell>
                    <TableCell className="font-mono text-cosmic-gold">0.25 MCL</TableCell>
                    <TableCell>~30 MH/s</TableCell>
                    <TableCell>3 seconds</TableCell>
                    <TableCell className="text-rainbow-green">0.125 MCL</TableCell>
                    <TableCell className="text-cosmic-purple">0.125 MCL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <span className="flex items-center gap-2">🥈 <strong>Silver</strong></span>
                    </TableCell>
                    <TableCell className="font-mono text-cosmic-gold">0.50 MCL</TableCell>
                    <TableCell>~55 MH/s</TableCell>
                    <TableCell>2 seconds</TableCell>
                    <TableCell className="text-rainbow-green">0.25 MCL</TableCell>
                    <TableCell className="text-cosmic-purple">0.25 MCL</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Payout Rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Lock className="w-8 h-8 text-cosmic-purple" />
              Payout & Reserve Rules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-6 border border-cosmic-purple/20 space-y-4">
                <h3 className="font-bold text-foreground text-lg">50/50 Split Mechanics</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-rainbow-green mt-0.5 shrink-0" />
                    <p><strong className="text-foreground">Liquid (50%):</strong> Immediately available for trading, withdrawal, or in-platform spending.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-cosmic-purple mt-0.5 shrink-0" />
                    <p><strong className="text-foreground">Locked (50%):</strong> Held in reserve until the graduated unlock schedule releases them.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Timer className="w-5 h-5 text-rainbow-orange mt-0.5 shrink-0" />
                    <p><strong className="text-foreground">15% Early Withdrawal Penalty</strong> applies if reserves are accessed before the scheduled unlock.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-cosmic-gold/20 space-y-4">
                <h3 className="font-bold text-foreground text-lg">Unlock Schedule</h3>
                <div className="space-y-3">
                  {[
                    { year: 'Year 1', pct: '10%', color: 'bg-rainbow-blue' },
                    { year: 'Year 2', pct: '30%', color: 'bg-rainbow-green' },
                    { year: 'Year 3 (Dec 2030)', pct: '60%', color: 'bg-cosmic-gold' },
                  ].map(u => (
                    <div key={u.year} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${u.color} shrink-0`} />
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground font-medium">{u.year}</span>
                          <span className="text-muted-foreground font-mono">{u.pct} unlocked</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-lg bg-background/30 text-xs text-muted-foreground mt-2">
                  <strong className="text-foreground">Claim Window:</strong> 7 days after each unlock event. Unclaimed tokens expire and return to the network reserve.
                </div>
                <div className="p-3 rounded-lg bg-background/30 text-xs text-muted-foreground">
                  <strong className="text-foreground">Withdrawal Limits:</strong> Max 2 payouts per week, capped at $1,000 per payout. 7% platform fee deducted.
                </div>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-rainbow-green" />
              Security Architecture
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Shield, title: 'Post-Quantum KEM', desc: 'Key exchange between mining nodes uses post-quantum cryptographic standards, future-proofing all transactions.' },
                { icon: Lock, title: 'AES-256-GCM Encryption', desc: 'All wallet data and transaction records encrypted at rest with per-user key derivation. Private keys never leave your device.' },
                { icon: Globe, title: 'Auto-Network Selection', desc: 'Shift Coin Protocol auto-selects the fastest, cheapest blockchain (Polygon) with zero or minimal gas fees.' },
                { icon: Fingerprint, title: 'Behavioral Fraud Prevention', desc: 'ML pattern recognition analyzes typing signatures and mining behavior to prevent bots, sybil attacks, and wash trading.' },
              ].map(s => (
                <Card key={s.title} className="glass-card border-border/30">
                  <CardContent className="p-5 flex items-start gap-4">
                    <s.icon className="w-6 h-6 text-rainbow-green shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground text-sm mb-1">{s.title}</h3>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Mining Node Tiers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Layers className="w-8 h-8 text-cosmic-teal" />
              Mining Node Infrastructure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: 'Personal Node', price: '$50/mo', multiplier: '1×', features: ['Run a validator node', 'Earn passive network fees', 'Basic staking rewards'] },
                { name: 'Community Node', price: '$150/mo', multiplier: '3×', features: ['3× mining multiplier', 'Priority block validation', 'Enhanced staking'] },
                { name: 'Enterprise Node', price: '$500/mo', multiplier: '10×', features: ['10× mining multiplier', 'Dedicated infrastructure', 'White-glove support'] },
              ].map(node => (
                <div key={node.name} className="glass-card rounded-2xl p-6 border border-border/30 text-center">
                  <h3 className="font-bold text-foreground text-lg mb-1">{node.name}</h3>
                  <p className="text-cosmic-gold font-bold text-xl mb-1">{node.price}</p>
                  <p className="text-xs text-cosmic-teal font-semibold mb-4">{node.multiplier} Rewards</p>
                  <ul className="space-y-2 text-sm text-muted-foreground text-left">
                    {node.features.map(f => (
                      <li key={f} className="flex items-center gap-2">
                        <ArrowRight className="w-3 h-3 text-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="glass-card rounded-2xl p-8 text-center border border-primary/20">
            <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Mine?</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Create an account to start earning MiracleCoin, or explore the Shift Coin Protocol and investment opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/login">
                <Button className="cosmic-button text-white">Create Account & Mine</Button>
              </Link>
              <Link to="/shift-coin">
                <Button variant="outline">Shift Coin Protocol</Button>
              </Link>
              <Link to="/miraclemining">
                <Button variant="outline">MiracleMining Network</Button>
              </Link>
            </div>
          </section>

          <div className="text-center mt-8">
            <Link to="/" className="text-accent hover:underline">← Back to Home</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MiningKnowledge;
