import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { DollarSign, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const LTSANP = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <span className="premium-badge mb-4 inline-block">Non-Profit Initiative</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="rainbow-text">LTSANP</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Love Transcends Social Advertising Network Platform — 
              Redistributing advertising wealth directly to citizens.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* The Opportunity */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-2xl p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-cosmic-gold mb-6">The $1.5 Trillion Opportunity</h2>
              <p className="text-6xl font-bold rainbow-text mb-4">$1,500,000,000,000</p>
              <p className="text-xl text-muted-foreground mb-6">
                Annual U.S. advertising spend that currently flows to corporations
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-cosmic-purple/10">
                  <Target className="w-10 h-10 text-cosmic-purple mx-auto mb-3" />
                  <p className="font-bold text-foreground">75% Capture Goal</p>
                  <p className="text-sm text-muted-foreground">$1.125 trillion redirected</p>
                </div>
                <div className="p-4 rounded-lg bg-cosmic-gold/10">
                  <DollarSign className="w-10 h-10 text-cosmic-gold mx-auto mb-3" />
                  <p className="font-bold text-foreground">Up to $1M</p>
                  <p className="text-sm text-muted-foreground">Per qualified citizen over time</p>
                </div>
                <div className="p-4 rounded-lg bg-cosmic-teal/10">
                  <Users className="w-10 h-10 text-cosmic-teal mx-auto mb-3" />
                  <p className="font-bold text-foreground">Direct Distribution</p>
                  <p className="text-sm text-muted-foreground">Via USDC cryptocurrency</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              How Redistribution Works
            </h2>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { step: 1, title: 'Advertising Revenue Capture', desc: 'LTSANP partners with advertisers who choose ethical distribution over corporate accumulation.' },
                { step: 2, title: 'Transparent Allocation', desc: 'All revenue is tracked on-chain using USDC for complete transparency and accountability.' },
                { step: 3, title: 'Citizen Qualification', desc: 'Users verify identity through secure KYC processes to qualify for distributions.' },
                { step: 4, title: 'Direct Distribution', desc: 'Funds are distributed directly to qualified citizens without middlemen or bureaucracy.' },
                { step: 5, title: 'Cumulative Growth', desc: 'Over time, recipients can accumulate up to $1 million in total distributions.' },
              ].map((item) => (
                <div key={item.step} className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-teal flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto text-center border border-cosmic-gold/20">
              <Heart className="w-16 h-16 text-cosmic-gold mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-cosmic-gold mb-4">The Vision for 2030</h2>
              <p className="text-muted-foreground text-lg mb-6">
                By 2030, LTSANP aims to capture 10-15% of the U.S. advertising market, 
                proving that a Universal Basic Income model can work through 
                ethical advertising redistribution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold">
                  <Link to="/investors">Support Our Mission</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LTSANP;
