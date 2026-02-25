import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Layers, ArrowDown, Cpu, Coins, Lock, TrendingUp, Shield, Fingerprint, Gem,
} from 'lucide-react';

const CONTRACTS = [
  { name: 'BancorFormula', desc: 'Continuous pricing math' },
  { name: 'RCBondingCurve', desc: 'Buy/sell with reserve ratio' },
  { name: 'ProvenanceLedger', desc: 'KEM watermark records' },
  { name: 'KEMVault', desc: 'Mining score accumulator' },
  { name: 'MiracleCoin (MCL)', desc: 'ERC-20 reward token' },
];

const WATERMARK_LAYERS = [
  { layer: 'Surface', desc: 'Visual overlay — visible creator mark', durability: 'Low (removable)' },
  { layer: 'Midpoint', desc: 'Frequency-domain embedding', durability: 'Medium' },
  { layer: 'Base', desc: 'Lattice-cryptographic signature', durability: 'Permanent' },
];

const RSNXProtocol = () => (
  <div className="min-h-screen cosmic-bg">
    <Navigation />
    <StarField />
    <LeftPanel />
    <RightPanel />

    <main className="pt-24 relative z-10">
      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <span className="premium-badge mb-4 inline-block">Protocol v4.1</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="rainbow-text">RSNX Protocol Explorer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The smart-contract architecture powering bonding-curve token economics,
            KEM mining, and MiracleCoin rewards across the Love Transcends ecosystem.
          </p>
          <div className="cosmic-divider w-48 mx-auto mt-8" />
        </div>
      </section>

      {/* Contract Architecture */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Contract Architecture</h2>
          <div className="max-w-md mx-auto space-y-2">
            {CONTRACTS.map((c, i) => (
              <div key={i}>
                <div className="glass-card rounded-xl p-4 flex items-center gap-4 border border-cosmic-purple/30">
                  <Layers className="w-6 h-6 text-cosmic-teal shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
                {i < CONTRACTS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-4 h-4 text-cosmic-purple/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEM Mining Pipeline */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-gold">KEM Mining Pipeline</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Cpu, title: 'Browser Collection', desc: 'Keystroke-energy data captured client-side via WebCrypto' },
              { icon: Shield, title: 'Server Attestation', desc: 'Off-chain service validates & hashes KEM score data' },
              { icon: Coins, title: 'On-Chain Claim', desc: 'KEMVault.claimMCL() converts KEM → MCL (max 5/day)' },
            ].map((s, i) => (
              <div key={i} className="glass-card rounded-xl p-6 text-center">
                <s.icon className="w-10 h-10 text-cosmic-gold mx-auto mb-3" />
                <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MCL Economics */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">MCL Economics</h2>
          <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Parameter</TableHead>
                  <TableHead>Value</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ['KEM → MCL Conversion', '1,000 KEM score = 1 MCL (~$1)'],
                  ['Payout Split', '50% liquid / 50% locked reserve'],
                  ['Daily Claim Limit', '5 claims per user'],
                  ['Vest Unlock Date', 'December 31, 2030'],
                  ['Hard Cap', '1,000,000,000 MCL'],
                  ['Staking APY', '2.5% compounding'],
                  ['Early Withdrawal Penalty', '15% (redistributed to pool)'],
                ].map(([param, val], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-foreground">{param}</TableCell>
                    <TableCell className="text-cosmic-teal font-semibold">{val}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* RSNX Bonding Curve */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 rainbow-text">RSNX Bonding Curve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cosmic-gold" />
                <h3 className="font-bold text-foreground">Curve Parameters</h3>
              </div>
              {[
                ['Reserve Ratio', '50%'],
                ['Protocol Fee', '1%'],
                ['Founder Fee', '0%'],
                ['Graduation Threshold', '50,000 MATIC'],
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
                <h3 className="font-bold text-foreground">Mining Tier Rewards</h3>
              </div>
              {[
                ['🥉 Bronze', '1 RC per 1,000 KEM', '1×'],
                ['🥈 Silver', '5 RC per 1,000 KEM', '5×'],
                ['🥇 Gold', '10 RC per 1,000 KEM', '10×'],
              ].map(([tier, rate, mult], i) => (
                <div key={i} className="flex items-center justify-between text-sm border-b border-border/30 pb-2">
                  <span className="font-semibold text-foreground">{tier}</span>
                  <span className="text-muted-foreground text-xs">{rate}</span>
                  <span className="text-cosmic-gold font-bold">{mult}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Watermark Layers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Watermark Layers</h2>
          <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Layer</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Durability</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {WATERMARK_LAYERS.map((w, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-bold text-foreground">{w.layer}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">{w.desc}</TableCell>
                    <TableCell className="text-cosmic-teal font-semibold text-sm">{w.durability}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Deployment & Founder */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-cosmic-purple" /> Deployment Order
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                <li>BancorFormula (pure math)</li>
                <li>RCBondingCurve (pricing engine)</li>
                <li>ProvenanceLedger (watermark storage)</li>
                <li>KEMVault (mining accumulator)</li>
                <li>MiracleCoin ERC-20 (reward token)</li>
              </ol>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-cosmic-gold" /> Founder Reference
              </h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Founder Wallet:</p>
                <code className="block bg-background/60 rounded p-2 text-xs text-foreground border border-border/50 break-all">
                  0x4a09...787c
                </code>
                <p className="text-xs">All protocol fees route to treasury — 0% founder fee on bonding curve.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="cosmic-button text-white font-semibold">
              <Link to="/kem-watermark">KEM Watermark Docs</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/tokenomics">Tokenomics Explorer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default RSNXProtocol;
