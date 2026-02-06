import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

export const InvestorPreview = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="premium-badge mb-4 inline-block">Investment Opportunity</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-cosmic-gold">Investor Hub</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us on the path to a $3 Billion valuation. Multiple investment pathways 
            available from $10M to $500M.
          </p>
          <div className="cosmic-divider w-48 mx-auto mt-6" />
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="investor-card text-center">
            <Target className="w-10 h-10 text-cosmic-gold mx-auto mb-3" />
            <p className="text-3xl font-bold text-cosmic-gold">$3B</p>
            <p className="text-sm text-muted-foreground">Target Valuation</p>
          </div>
          <div className="investor-card text-center">
            <Users className="w-10 h-10 text-cosmic-gold mx-auto mb-3" />
            <p className="text-3xl font-bold text-cosmic-gold">3.5M</p>
            <p className="text-sm text-muted-foreground">Year 3 MAU Target</p>
          </div>
          <div className="investor-card text-center">
            <DollarSign className="w-10 h-10 text-cosmic-gold mx-auto mb-3" />
            <p className="text-3xl font-bold text-cosmic-gold">$312M</p>
            <p className="text-sm text-muted-foreground">Upside Revenue Y3</p>
          </div>
          <div className="investor-card text-center">
            <TrendingUp className="w-10 h-10 text-cosmic-gold mx-auto mb-3" />
            <p className="text-3xl font-bold text-cosmic-gold">75%</p>
            <p className="text-sm text-muted-foreground">Creator Share</p>
          </div>
        </div>

        {/* Investment Pathways Preview */}
        <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto border border-cosmic-gold/20">
          <h3 className="text-xl font-bold text-cosmic-gold mb-6 text-center">Investment Pathways</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-background/50">
              <p className="font-bold text-foreground">Pathway A: Big-Tech Partnership</p>
              <p className="text-sm text-muted-foreground">$50M - $500M • 7% - 49% equity</p>
            </div>
            <div className="p-4 rounded-lg bg-cosmic-gold/10 border border-cosmic-gold/30">
              <p className="font-bold text-cosmic-gold">Pathway B: Celebrity Partnership ⭐</p>
              <p className="text-sm text-muted-foreground">$50M - $500M • SPV Structure Available</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <p className="font-bold text-foreground">Pathway C: Institutional</p>
              <p className="text-sm text-muted-foreground">$10M - $100M • 5% - 25% equity</p>
            </div>
            <div className="p-4 rounded-lg bg-background/50">
              <p className="font-bold text-foreground">Pathway D: Bootstrap</p>
              <p className="text-sm text-muted-foreground">Self-funded • Full founder control</p>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            <strong className="text-foreground">Founder Protection:</strong> 7-year control over product development
          </p>
        </div>

        <div className="text-center mt-8">
          <Button asChild size="lg" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold px-8">
            <Link to="/investors">View Complete Financial Blueprint →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
