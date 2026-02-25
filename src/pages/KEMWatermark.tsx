import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import {
  Shield, Key, Lock, FileCheck, Eye, ArrowRight, Cpu, Globe, Database,
  Layers, Fingerprint, Zap, CheckCircle, XCircle,
} from 'lucide-react';

const STEPS = [
  { icon: Key, title: 'Keypair Generation', desc: 'Kyber-768 lattice-based keypair created per creator' },
  { icon: Lock, title: 'Encapsulation', desc: 'Shared secret generated via ML-KEM encapsulate()' },
  { icon: Fingerprint, title: 'Watermark Embedding', desc: '3-layer watermark embedded in content (Surface, Midpoint, Base)' },
  { icon: Database, title: 'On-Chain Recording', desc: 'Hash + metadata recorded on Polygon via ProvenanceLedger' },
  { icon: Eye, title: 'Verification', desc: 'Anyone can verify provenance — zero gas cost' },
];

const FORGE_EVENTS = [
  'ML-KEM watermark generated',
  'IPFS content pinned',
  'ProvenanceLedger entry written',
  'NFT minted to creator wallet',
  'Shift Coin floor price set via Chainlink oracle',
];

const KEMWatermark = () => (
  <div className="min-h-screen cosmic-bg">
    <Navigation />
    <StarField />
    <LeftPanel />
    <RightPanel />

    <main className="pt-24 relative z-10">
      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cosmic-teal/30 bg-cosmic-teal/10 text-cosmic-teal text-xs font-semibold mb-4">
            <Shield className="w-3 h-3" /> FIPS 203 Compliant
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="rainbow-text">Post-Quantum IP Protection</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            KEM watermarking uses ML-KEM (Kyber-768) lattice-based cryptography to embed
            tamper-proof provenance into every piece of content — future-proofed against quantum attacks.
          </p>
          <div className="cosmic-divider w-48 mx-auto mt-8" />
        </div>
      </section>

      {/* 5-Step Flow */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">How KEM Watermarking Works</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">
            {STEPS.map((s, i) => (
              <div key={i} className="relative">
                <div className="glass-card rounded-xl p-4 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-teal mx-auto mb-3 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="font-bold text-sm text-foreground mb-1">{s.title}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </div>
                {i < 4 && <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-4 h-4 text-cosmic-teal" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEM vs Traditional */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">KEM vs Traditional Hashing</h2>
          <div className="glass-card rounded-2xl p-6 max-w-4xl mx-auto overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Traditional Hash</TableHead>
                  <TableHead>KEM Watermark</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  ['Quantum Resistance', false, true],
                  ['Embedded in Content', false, true],
                  ['Tamper Detection', true, true],
                  ['Creator Attribution', false, true],
                  ['On-Chain Provenance', false, true],
                  ['Survives Re-encoding', false, true],
                  ['Zero-Cost Verification', false, true],
                ].map(([feature, trad, kem], i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-foreground">{feature as string}</TableCell>
                    <TableCell>
                      {trad ? <CheckCircle className="w-4 h-4 text-rainbow-green" /> : <XCircle className="w-4 h-4 text-red-400" />}
                    </TableCell>
                    <TableCell>
                      {kem ? <CheckCircle className="w-4 h-4 text-rainbow-green" /> : <XCircle className="w-4 h-4 text-red-400" />}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* The Forge */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-cosmic-gold">The Forge Process</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-xl mx-auto">
            A single "forge" transaction triggers 5 simultaneous events in under 2 seconds.
          </p>
          <div className="max-w-2xl mx-auto space-y-3">
            {FORGE_EVENTS.map((evt, i) => (
              <div key={i} className="glass-card rounded-lg p-4 flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-cosmic-gold/20 text-cosmic-gold font-bold text-sm flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-sm text-foreground">{evt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gas Costs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Gas Cost Estimates</h2>
          <div className="glass-card rounded-2xl p-6 max-w-lg mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Operation</TableHead>
                  <TableHead className="text-right">Est. Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium text-foreground">Deploy Contract</TableCell>
                  <TableCell className="text-right text-cosmic-teal font-semibold">~$0.05</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-foreground">Forge (mint + watermark)</TableCell>
                  <TableCell className="text-right text-cosmic-teal font-semibold">~$0.005</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-foreground">Verify Provenance</TableCell>
                  <TableCell className="text-right text-rainbow-green font-bold">FREE</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 rainbow-text">Architecture</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { icon: Cpu, label: 'Creator Device', sub: 'Content + KEM keypair' },
              { icon: Zap, label: 'Off-Chain Service', sub: 'ML-KEM embed + IPFS pin' },
              { icon: Layers, label: 'Polygon Contract', sub: 'ProvenanceLedger + NFT mint' },
              { icon: Globe, label: 'IPFS', sub: 'Permanent content storage' },
            ].map((n, i) => (
              <div key={i} className="relative">
                <div className="glass-card rounded-xl p-5 text-center h-full border border-cosmic-purple/30">
                  <n.icon className="w-8 h-8 text-cosmic-teal mx-auto mb-2" />
                  <p className="font-bold text-foreground text-sm">{n.label}</p>
                  <p className="text-xs text-muted-foreground">{n.sub}</p>
                </div>
                {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-4 h-4 text-cosmic-purple" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="cosmic-button text-white font-semibold">
              <Link to="/rsnx-protocol">Explore RSNX Protocol</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/shift-coin">Back to Shift Coin</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default KEMWatermark;
