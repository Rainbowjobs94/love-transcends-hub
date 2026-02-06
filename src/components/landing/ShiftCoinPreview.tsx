import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Coins, Zap, Shield, TrendingUp } from 'lucide-react';

export const ShiftCoinPreview = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/10 via-transparent to-cosmic-teal/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="premium-badge mb-4 inline-block">World's First</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="rainbow-text">Shift Coin Protocol</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            NOT a cryptocurrency — a revolutionary mining protocol that automatically selects 
            the fastest, cheapest blockchain with ZERO gas fees.
          </p>
          <div className="cosmic-divider w-48 mx-auto mt-6" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="glass-card rounded-xl p-6 text-center">
            <Coins className="w-12 h-12 text-cosmic-gold mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Reality Coin (RC)</h3>
            <p className="text-2xl font-bold rainbow-text mb-1">$1 Stable</p>
            <p className="text-xs text-muted-foreground">365 Trillion Supply Cap</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center">
            <TrendingUp className="w-12 h-12 text-cosmic-gold mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Miracle Coin (MC)</h3>
            <p className="text-2xl font-bold rainbow-text mb-1">$1M Target</p>
            <p className="text-xs text-muted-foreground">777 Trillion Supply Cap</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center">
            <Zap className="w-12 h-12 text-cosmic-teal mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Zero Gas Fees</h3>
            <p className="text-sm text-muted-foreground">Auto-selects fastest network</p>
          </div>

          <div className="glass-card rounded-xl p-6 text-center">
            <Shield className="w-12 h-12 text-cosmic-purple mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">4-Year Lock</h3>
            <p className="text-sm text-muted-foreground">Platform stability guarantee</p>
          </div>
        </div>

        {/* Mining Tiers Preview */}
        <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Mining Tier Earnings</h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-lg bg-amber-900/20 border border-amber-700/30">
              <div className="text-2xl mb-1">🥉</div>
              <p className="font-bold text-amber-400">Bronze</p>
              <p className="text-sm text-muted-foreground">Creator: $0.80/event</p>
            </div>
            <div className="p-4 rounded-lg bg-slate-400/20 border border-slate-400/30">
              <div className="text-2xl mb-1">🥈</div>
              <p className="font-bold text-slate-300">Silver</p>
              <p className="text-sm text-muted-foreground">Creator: $0.80 + Viewer: $0.70</p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
              <div className="text-2xl mb-1">🥇</div>
              <p className="font-bold text-yellow-400">Gold</p>
              <p className="text-sm text-muted-foreground">Creator: $3.25 + Viewer: $1.25</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="cosmic-button text-white font-semibold px-8">
            <Link to="/shift-coin">Explore Full Protocol Details →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
