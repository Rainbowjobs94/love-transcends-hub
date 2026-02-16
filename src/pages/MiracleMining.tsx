import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Button } from '@/components/ui/button';
import { Coins, Zap, Shield, FileCheck, ChevronDown, Lock, Key, ShieldCheck } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';
import miracleNetworkLogo from '@/assets/logos/miracle-network-new-logo.png';

const MiracleMining = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <img src={miracleNetworkLogo} alt="Miracle Network" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg shadow-cosmic-gold/30" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="rainbow-text">LTMiracleMining</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Smart Contracts Protecting IP for Life — Powered by the revolutionary Shift Coin Protocol.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <Coins className="w-12 h-12 text-cosmic-gold mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Reality Coin ($1 Stable)</h3>
                <p className="text-muted-foreground">Mine stable-value cryptocurrency through the Shift Coin Protocol.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Zap className="w-12 h-12 text-cosmic-teal mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Zero Gas Fees</h3>
                <p className="text-muted-foreground">Auto-selects the fastest, cheapest blockchain network.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <FileCheck className="w-12 h-12 text-cosmic-purple mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">IP Protection</h3>
                <p className="text-muted-foreground">Smart contracts that protect intellectual property for life.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Shield className="w-12 h-12 text-rainbow-blue mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Late Ledger Hash</h3>
                <p className="text-muted-foreground">Transparent blockchain verification for all transactions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Collapsible>
              <CollapsibleTrigger className="w-full glass-card rounded-xl p-6 flex items-center justify-between hover:border-primary/40 transition-all group cursor-pointer">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-cosmic-teal" />
                  <div className="text-left">
                    <h2 className="text-xl font-bold text-foreground">Security & Cryptography</h2>
                    <p className="text-sm text-muted-foreground">How MiracleCoin protects your assets & data</p>
                  </div>
                </div>
                <ChevronDown className="w-5 h-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2">
                <div className="glass-card rounded-xl p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <Key className="w-6 h-6 text-cosmic-gold shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Key Encapsulation Mechanism (KEM)</h3>
                      <p className="text-sm text-muted-foreground">
                        Secure key exchange between mining nodes uses post-quantum cryptographic standards. This ensures that even with future advances in quantum computing, the key exchange remains secure.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Lock className="w-6 h-6 text-cosmic-purple shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Encryption at Rest (AES-256)</h3>
                      <p className="text-sm text-muted-foreground">
                        All wallet data and transaction records are encrypted using AES-256 with per-user key derivation. Your private keys never leave your device unencrypted.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-rainbow-blue shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Defense in Depth</h3>
                      <p className="text-sm text-muted-foreground">
                        Multiple security layers work together: rate limiting prevents mining abuse, block progression validation ensures transaction integrity, and tier-based reward verification guards against exploitation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-rainbow-green shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Behavioral Fraud Prevention</h3>
                      <p className="text-sm text-muted-foreground">
                        Machine learning pattern recognition analyzes typing signatures and mining behavior to detect and prevent automated fraud, sybil attacks, and wash trading.
                      </p>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                <a href="https://www.miraclemining.network" target="_blank" rel="noopener noreferrer">
                  Visit MiracleMining.network
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/shift-coin">Learn About Shift Coin</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MiracleMining;
