import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, Users, Target, Heart, Coffee, Home, 
  HeartHandshake, Building, Sparkles, Calendar, Brain, HandHeart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LTSANP = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />
      
      <main className="pt-24 relative z-10">
        {/* Hero Banner */}
        <section className="py-12 bg-gradient-to-r from-cosmic-purple/20 via-cosmic-gold/20 to-cosmic-teal/20 border-b border-cosmic-gold/30">
          <div className="container mx-auto px-4 text-center">
            <span className="premium-badge mb-4 inline-block">Non-Profit Initiative</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="rainbow-text">Love Transcends</span>{' '}
              <span className="text-foreground">Sponsorship & Advertisement</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-cosmic-gold">
              Nonprofit Donations, Initiatives & Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Redistributing advertising wealth directly to citizens through 
              community programs, recovery services, and sustainable housing.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Donation CTA */}
        <section className="py-8">
          <div className="container mx-auto px-4 text-center">
            <Button asChild size="lg" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold text-lg px-12 py-6">
              <a href="https://gofundme.com" target="_blank" rel="noopener noreferrer">
                <Heart className="w-5 h-5 mr-2" /> Donate Now
              </a>
            </Button>
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

        {/* LTSANP Initiatives */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
              Our Initiatives & Services
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Love Transcends sponsors community programs that heal, nourish, and house those in need.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* LTCakes */}
              <div className="glass-card rounded-2xl p-8 border border-rainbow-orange/30">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-orange to-rainbow-yellow mx-auto mb-6 flex items-center justify-center">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cosmic-gold text-center mb-4">LTCakes</h3>
                <span className="block text-center text-xs text-muted-foreground mb-4 uppercase tracking-wider">Non-Profit Culinary Experience</span>
                
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-background/50">
                    <Sparkles className="w-5 h-5 text-rainbow-orange mb-2" />
                    <p className="font-semibold text-foreground text-sm">Community Café</p>
                    <p className="text-xs text-muted-foreground">Free meals for those in need</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <Sparkles className="w-5 h-5 text-rainbow-yellow mb-2" />
                    <p className="font-semibold text-foreground text-sm">Art Space Gallery</p>
                    <p className="text-xs text-muted-foreground">Showcasing emerging artists</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <Sparkles className="w-5 h-5 text-rainbow-red mb-2" />
                    <p className="font-semibold text-foreground text-sm">Live Music Venue</p>
                    <p className="text-xs text-muted-foreground">Community performances & events</p>
                  </div>
                  <div className="p-3 rounded-lg bg-cosmic-gold/10 border border-cosmic-gold/30">
                    <Sparkles className="w-5 h-5 text-cosmic-gold mb-2" />
                    <p className="font-semibold text-foreground text-sm">One-of-a-Kind Culinary</p>
                    <p className="text-xs text-muted-foreground">Unique dining experiences with purpose</p>
                  </div>
                </div>
              </div>

              {/* LTCare&Recovery */}
              <div className="glass-card rounded-2xl p-8 border border-rainbow-violet/30">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-violet to-rainbow-blue mx-auto mb-6 flex items-center justify-center">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cosmic-purple text-center mb-4">LTCare & Recovery</h3>
                <span className="block text-center text-xs text-muted-foreground mb-4 uppercase tracking-wider">Healing Through Love</span>
                
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-background/50">
                    <Heart className="w-5 h-5 text-rainbow-violet mb-2" />
                    <p className="font-semibold text-foreground text-sm">In-Home Recovery</p>
                    <p className="text-xs text-muted-foreground">Personalized care in your space</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <Sparkles className="w-5 h-5 text-rainbow-blue mb-2" />
                    <p className="font-semibold text-foreground text-sm">Drug Decontamination</p>
                    <p className="text-xs text-muted-foreground">Safe, supervised detox programs</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <Brain className="w-5 h-5 text-rainbow-green mb-2" />
                    <p className="font-semibold text-foreground text-sm">Human + AI Therapy</p>
                    <p className="text-xs text-muted-foreground">24/7 mental health support</p>
                  </div>
                  <div className="p-3 rounded-lg bg-cosmic-purple/10 border border-cosmic-purple/30">
                    <Users className="w-5 h-5 text-cosmic-purple mb-2" />
                    <p className="font-semibold text-foreground text-sm">Live Support Groups</p>
                    <p className="text-xs text-muted-foreground">On & off the LT Network</p>
                  </div>
                </div>
              </div>

              {/* LTHousing */}
              <div className="glass-card rounded-2xl p-8 border border-rainbow-green/30">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-green to-rainbow-teal mx-auto mb-6 flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-cosmic-teal text-center mb-4">LTHousing</h3>
                <span className="block text-center text-xs text-muted-foreground mb-4 uppercase tracking-wider">Planning 2031</span>
                
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-background/50">
                    <Building className="w-5 h-5 text-rainbow-green mb-2" />
                    <p className="font-semibold text-foreground text-sm">Affordable Tiny Homes</p>
                    <p className="text-xs text-muted-foreground">Sustainable, dignified living</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <Heart className="w-5 h-5 text-rainbow-teal mb-2" />
                    <p className="font-semibold text-foreground text-sm">Homeless Shelters</p>
                    <p className="text-xs text-muted-foreground">Free community housing</p>
                  </div>
                  <div className="p-3 rounded-lg bg-cosmic-teal/10 border border-cosmic-teal/30">
                    <Sparkles className="w-5 h-5 text-cosmic-teal mb-2" />
                    <p className="font-semibold text-foreground text-sm">Self-Sustaining Communities</p>
                    <p className="text-xs text-muted-foreground">Solar, gardens, community support</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Target Launch: 2031</p>
                  </div>
                </div>
              </div>

              {/* LTCommunity */}
              <div className="glass-card rounded-2xl p-8 border border-rainbow-blue/30">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rainbow-blue to-rainbow-violet mx-auto mb-6 flex items-center justify-center">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-rainbow-blue text-center mb-4">LTCommunity</h3>
                <span className="block text-center text-xs text-muted-foreground mb-4 uppercase tracking-wider">Building Together</span>
                
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-background/50">
                    <Users className="w-5 h-5 text-rainbow-blue mb-2" />
                    <p className="font-semibold text-foreground text-sm">Community Events</p>
                    <p className="text-xs text-muted-foreground">Gatherings & celebrations</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <HeartHandshake className="w-5 h-5 text-rainbow-violet mb-2" />
                    <p className="font-semibold text-foreground text-sm">Local Support Networks</p>
                    <p className="text-xs text-muted-foreground">Neighbor-to-neighbor help</p>
                  </div>
                  <div className="p-3 rounded-lg bg-rainbow-blue/10 border border-rainbow-blue/30">
                    <Heart className="w-5 h-5 text-rainbow-blue mb-2" />
                    <p className="font-semibold text-foreground text-sm">Volunteer Coordination</p>
                    <p className="text-xs text-muted-foreground">Connecting helpers with needs</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <Sparkles className="w-5 h-5 text-rainbow-violet mb-2" />
                    <p className="font-semibold text-foreground text-sm">Mutual Aid Programs</p>
                    <p className="text-xs text-muted-foreground">Community-powered support</p>
                  </div>
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
                ethical advertising redistribution while supporting community healing 
                through LTCakes, LTCare, and LTHousing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold">
                  <a href="https://gofundme.com" target="_blank" rel="noopener noreferrer">
                    <Heart className="w-5 h-5 mr-2" /> Donate to Our Mission
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-cosmic-purple hover:bg-cosmic-purple/90">
                  <Link to="/investors">Support as Investor</Link>
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
