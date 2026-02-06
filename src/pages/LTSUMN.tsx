import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, Shield, Brain, Coins, Pickaxe, Calendar, 
  DollarSign, Check, Star, Zap, Globe, Lock
} from 'lucide-react';
import socialUniverseGlobe from '@/assets/hero/social-universe-globe.png';

const LTSUMN = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <img 
              src={socialUniverseGlobe} 
              alt="LT Social Universe" 
              className="w-48 h-48 mx-auto mb-6 floating"
            />
            <span className="premium-badge mb-4 inline-block">LT Social Universe Miracle Network</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-5xl mx-auto leading-tight">
              <span className="rainbow-text">Love Transcends Reality</span>{' '}
              <span className="text-foreground">through Mining Miracles via Social Engagements, User/IA Controlled Censorship/Filters, and Creator IP through Data Mining</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The complete ecosystem where creators earn 75%, users control their experience, 
              and every interaction mines value.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Core Features */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Platform Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <Shield className="w-12 h-12 text-rainbow-violet mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">IA Guardian Protection</h3>
                <p className="text-muted-foreground">Gemini AI + Human moderation team ensuring family-safe content with user-controlled filters.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Users className="w-12 h-12 text-rainbow-blue mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Three-Tier Connections</h3>
                <p className="text-muted-foreground">Family, Friends, and Community levels with customizable privacy settings.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Coins className="w-12 h-12 text-rainbow-yellow mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">75% Creator Revenue</h3>
                <p className="text-muted-foreground">Industry-leading creator share with direct USD or Reality Coin payouts.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Pickaxe className="w-12 h-12 text-rainbow-orange mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Shift Coin Protocol</h3>
                <p className="text-muted-foreground">Revolutionary device fingerprinting mining that earns while you engage.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Brain className="w-12 h-12 text-rainbow-green mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Mental Health Services</h3>
                <p className="text-muted-foreground">AI + licensed human therapy sessions integrated directly into the platform.</p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <Lock className="w-12 h-12 text-rainbow-red mb-4" />
                <h3 className="font-bold text-foreground text-xl mb-2">Creator IP Protection</h3>
                <p className="text-muted-foreground">Blockchain-verified content ownership through data mining protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Subscription Tiers */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Subscription Tiers & Costs
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {/* Free Tier */}
              <div className="glass-card rounded-xl p-6 border border-border/50">
                <h3 className="font-bold text-xl text-foreground mb-2">Free</h3>
                <p className="text-3xl font-bold text-cosmic-gold mb-4">$0<span className="text-sm text-muted-foreground">/mo</span></p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Basic profile</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Content viewing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Standard mining</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Community access</li>
                </ul>
                <Button variant="outline" className="w-full">Get Started</Button>
              </div>

              {/* Fanship */}
              <div className="glass-card rounded-xl p-6 border border-cosmic-purple/50">
                <h3 className="font-bold text-xl text-foreground mb-2">Fanship</h3>
                <p className="text-3xl font-bold text-cosmic-gold mb-1">$100<span className="text-sm text-muted-foreground">/yr</span></p>
                <p className="text-xs text-muted-foreground mb-4">or 10,000 MC</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Up to 3 connections</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Paywalls for 3 feeds</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Enhanced mining</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Basic creator tools</li>
                </ul>
                <Button className="w-full bg-cosmic-purple hover:bg-cosmic-purple/90">Subscribe</Button>
              </div>

              {/* 4Family */}
              <div className="glass-card rounded-xl p-6 border border-cosmic-teal/50 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cosmic-teal text-white text-xs px-3 py-1 rounded-full">Popular</span>
                <h3 className="font-bold text-xl text-foreground mb-2">4Family</h3>
                <p className="text-3xl font-bold text-cosmic-gold mb-1">$100<span className="text-sm text-muted-foreground">/yr</span></p>
                <p className="text-xs text-muted-foreground mb-4">or 10,000 MC</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Multi-user family plan</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Parental controls</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Safe content filtering</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Family mining pool</li>
                </ul>
                <Button className="w-full bg-cosmic-teal hover:bg-cosmic-teal/90">Subscribe</Button>
              </div>

              {/* SelfCelebrity */}
              <div className="glass-card rounded-xl p-6 border border-cosmic-gold/50">
                <h3 className="font-bold text-xl text-foreground mb-2">SelfCelebrity</h3>
                <p className="text-3xl font-bold text-cosmic-gold mb-1">$500<span className="text-sm text-muted-foreground">/yr</span></p>
                <p className="text-xs text-muted-foreground mb-4">or 50,000 MC</p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-center gap-2"><Star className="w-4 h-4 text-cosmic-gold" /> Unlimited connections</li>
                  <li className="flex items-center gap-2"><Star className="w-4 h-4 text-cosmic-gold" /> 30/30 revenue split</li>
                  <li className="flex items-center gap-2"><Star className="w-4 h-4 text-cosmic-gold" /> Priority support</li>
                  <li className="flex items-center gap-2"><Star className="w-4 h-4 text-cosmic-gold" /> Enhanced creator tools</li>
                </ul>
                <Button className="w-full bg-cosmic-gold hover:bg-cosmic-gold/90 text-black">Subscribe</Button>
              </div>
            </div>

            {/* Premium Tiers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
              <div className="glass-card rounded-xl p-6 border border-rainbow-violet/50">
                <h3 className="font-bold text-xl text-foreground mb-2">Pearl</h3>
                <p className="text-3xl font-bold text-cosmic-gold mb-1">$5,000<span className="text-sm text-muted-foreground">/yr</span></p>
                <p className="text-xs text-muted-foreground mb-4">or 500,000 MC • 25%/50% split</p>
                <p className="text-sm text-muted-foreground">Premium features, VIP support, exclusive events</p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-rainbow-orange/50">
                <h3 className="font-bold text-xl text-foreground mb-2">Miner</h3>
                <p className="text-3xl font-bold text-cosmic-gold mb-1">$5,000<span className="text-sm text-muted-foreground">/yr</span></p>
                <p className="text-xs text-muted-foreground mb-4">or 500,000 MC • 25%/50% split</p>
                <p className="text-sm text-muted-foreground">Enhanced mining, priority blockchain selection</p>
              </div>

              <div className="glass-card rounded-xl p-6 border border-rainbow-yellow/50">
                <h3 className="font-bold text-xl text-foreground mb-2">Jasper</h3>
                <p className="text-3xl font-bold text-cosmic-gold mb-1">Unlimited</p>
                <p className="text-xs text-muted-foreground mb-4">20%/40% split</p>
                <p className="text-sm text-muted-foreground">White-glove service, custom development, direct platform input</p>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Projections */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Launch Projections
            </h2>

            <div className="glass-card rounded-2xl p-8 max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Timeline */}
                <div>
                  <h3 className="text-xl font-bold text-cosmic-gold mb-6 flex items-center gap-2">
                    <Calendar className="w-6 h-6" /> 2026 Roadmap
                  </h3>
                  <div className="space-y-4">
                    {[
                      { quarter: 'Q2', items: ['DNS/VPN Cloud Mining', 'Paid Memberships & Replies', 'User-Controlled Moderation'] },
                      { quarter: 'Q3', items: ['Custom-Branded Apps (iOS/Android)', 'Analytics Dashboard', 'Blogging Platform'] },
                      { quarter: 'Q4', items: ['DPoS Governance', 'Open-Source Platform Release'] },
                    ].map((phase) => (
                      <div key={phase.quarter} className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-teal flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-white text-sm">{phase.quarter}</span>
                        </div>
                        <ul className="text-muted-foreground text-sm">
                          {phase.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Zap className="w-3 h-3 text-cosmic-gold" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projections */}
                <div>
                  <h3 className="text-xl font-bold text-cosmic-gold mb-6 flex items-center gap-2">
                    <Globe className="w-6 h-6" /> Growth Targets
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-background/50">
                      <p className="text-sm text-muted-foreground">Year 1 MAU Target</p>
                      <p className="text-2xl font-bold text-foreground">250,000</p>
                    </div>
                    <div className="p-4 rounded-lg bg-background/50">
                      <p className="text-sm text-muted-foreground">Year 3 MAU Target</p>
                      <p className="text-2xl font-bold text-foreground">3,500,000</p>
                    </div>
                    <div className="p-4 rounded-lg bg-cosmic-gold/10">
                      <p className="text-sm text-muted-foreground">Year 3 Net Revenue (Upside)</p>
                      <p className="text-2xl font-bold text-cosmic-gold">$312.4M</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Vision */}
              <div className="mt-8 pt-8 border-t border-border/30">
                <h3 className="text-xl font-bold text-cosmic-gold mb-4">2027-2030 Vision</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-3 rounded-lg bg-background/50">
                    <p className="font-bold text-foreground">DApps Ecosystem</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <p className="font-bold text-foreground">Federated Structure</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <p className="font-bold text-foreground">Self-Hosting</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <p className="font-bold text-foreground">Web2/Web3 Bridge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                <a href="https://www.socialuniverse.love" target="_blank" rel="noopener noreferrer">
                  Visit SocialUniverse.love
                </a>
              </Button>
              <Button asChild size="lg" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold">
                <Link to="/investors">View Investor Hub</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LTSUMN;
