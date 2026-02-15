import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Button } from '@/components/ui/button';
import { Coins, Zap, Shield, FileCheck } from 'lucide-react';
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
