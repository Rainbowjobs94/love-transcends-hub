import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, Shield, Brain, Coins, Calendar, Home, MessageCircle,
  DollarSign, Check, Star, Zap, Globe, Settings, Search, 
  Heart, Video, ShoppingBag, Pickaxe, TrendingUp, Target
} from 'lucide-react';
import socialUniverseGlobe from '@/assets/hero/social-universe-globe.png';
import rainbowStrongmanPortrait from '@/assets/about/rainbow-strongman-portrait.jpeg';

const LTSUMN = () => {
  const coreFeatures = [
    { icon: Home, name: 'Home Feed', description: '4-tier visibility system for personalized content delivery', category: 'Core Social' },
    { icon: Users, name: 'Profile', description: 'Avatar upload, posts/media/likes tabs with full customization', category: 'Core Social' },
    { icon: Search, name: 'Discover & Search', description: 'Category filters, Rising Stars discovery system', category: 'Core Social' },
    { icon: Heart, name: 'Connections', description: 'Tier-based filtering: Family, Friends, Community', category: 'Core Social' },
    { icon: Video, name: 'Reality Hub', description: 'AI Media Gallery, YouTube, Twitch, Spotify, RSS integration', category: 'Content' },
    { icon: Zap, name: 'LTRStream', description: 'Live streaming with category filters and monetization', category: 'Content' },
    { icon: Coins, name: 'PostMining', description: 'Upload pay-to-view content and earn Reality Coin', category: 'Content' },
    { icon: ShoppingBag, name: 'LTMarket', description: 'Products, auctions, and services marketplace', category: 'Marketplace' },
    { icon: Brain, name: 'LTCare', description: 'Life coaching and therapy directory with AI support', category: 'Marketplace' },
    { icon: Calendar, name: 'Calendar & Events', description: 'Event creation, ticket purchasing, community gatherings', category: 'Infrastructure' },
    { icon: MessageCircle, name: 'LTMessaging', description: 'Real-time chat, video calls, encrypted communications', category: 'Infrastructure' },
    { icon: Pickaxe, name: 'LTMiningNetwork', description: 'Mining dashboard, stats, and earnings tracking', category: 'Infrastructure' },
    { icon: Shield, name: 'IARainbowGuardian', description: 'AI safety, personal censorship import, family protection', category: 'Infrastructure' },
    { icon: Settings, name: 'Settings', description: 'Theme toggle, account preferences, privacy controls', category: 'Infrastructure' },
  ];

  const subscriptionTiers = [
    { name: 'SelfCelebrity', price: 50, features: ['Basic creator tools', 'Enhanced profile', '80% creator revenue'] },
    { name: '4Family', price: 100, features: ['Multi-user family plan', 'Parental controls', 'Family mining pool'] },
    { name: 'Miner', price: 250, features: ['Enhanced mining rates', 'Priority blockchain', 'Mining dashboard'] },
    { name: 'Pearl', price: 350, features: ['Premium features', 'VIP support', 'Exclusive events'] },
    { name: 'Jasper', price: 500, features: ['White-glove service', 'Custom development', 'Platform input'] },
  ];

  const miningTiers = [
    { tier: 'Bronze', totalRC: '$1 RC', creator: '80% ($0.80)', viewers: '-', platform: '20% ($0.20)', color: 'bg-amber-700' },
    { tier: 'Silver', totalRC: '$2 RC', creator: '40% ($0.80)', viewers: '35% ($0.70)', platform: '25% ($0.50)', color: 'bg-gray-400' },
    { tier: 'Gold', totalRC: '$5 RC', creator: '65% ($3.25)', viewers: '25% ($1.25)', platform: '10% ($0.50)', color: 'bg-cosmic-gold' },
  ];

  const coreValues = ['Compassion', 'Equity', 'Community', 'Justice', 'Love', 'Honesty', 'Transparency', 'Empathy', 'Inclusivity', 'Honor'];

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
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-6xl mx-auto leading-tight">
              <span className="rainbow-text">Love Transcends Reality</span>{' '}
              <span className="text-foreground text-xl md:text-2xl lg:text-3xl block mt-2">
                through Mining Miracles via Social Engagements, User/IA Controlled Censorship/Filters, and Creator IP through Data Mining
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                <a href="https://miraclemining.network/app" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/investors">View Investment Opportunities</Link>
              </Button>
            </div>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Main Content Grid with Sidebar */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            
            {/* Main Content - 3 columns */}
            <div className="xl:col-span-3 space-y-12">
              
              {/* 14 Live Features */}
              <section>
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  14 Live Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coreFeatures.map((feature, index) => (
                    <div key={index} className="glass-card rounded-xl p-5 hover:border-cosmic-purple/50 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-cosmic-purple/20">
                          <feature.icon className="w-6 h-6 text-cosmic-purple" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-foreground">{feature.name}</h3>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-cosmic-teal/20 text-cosmic-teal">
                              {feature.category}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Subscription Tiers */}
              <section>
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  Subscription Tiers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {subscriptionTiers.map((tier, index) => (
                    <div key={index} className={`glass-card rounded-xl p-6 ${index === 1 ? 'border-2 border-cosmic-teal' : 'border border-border/50'}`}>
                      {index === 1 && (
                        <span className="block text-center text-xs text-cosmic-teal font-bold mb-2">POPULAR</span>
                      )}
                      <h3 className="font-bold text-xl text-foreground mb-2">{tier.name}</h3>
                      <p className="text-3xl font-bold text-cosmic-gold mb-4">
                        ${tier.price}<span className="text-sm text-muted-foreground">/mo</span>
                      </p>
                      <ul className="space-y-2 mb-6">
                        {tier.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-cosmic-teal flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                        Subscribe
                      </Button>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mining Tiers - 3 Leaves */}
              <section>
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  Mining Tiers — 3 Leaves
                </h2>
                <div className="glass-card rounded-2xl p-6 overflow-x-auto">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left py-3 text-muted-foreground font-medium">Tier</th>
                        <th className="text-center py-3 text-muted-foreground font-medium">Total RC</th>
                        <th className="text-center py-3 text-muted-foreground font-medium">Creator</th>
                        <th className="text-center py-3 text-muted-foreground font-medium">Viewers</th>
                        <th className="text-center py-3 text-muted-foreground font-medium">Platform</th>
                      </tr>
                    </thead>
                    <tbody>
                      {miningTiers.map((tier, index) => (
                        <tr key={index} className="border-b border-border/30 last:border-0">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-full ${tier.color}`} />
                              <span className="font-bold text-foreground">{tier.tier}</span>
                            </div>
                          </td>
                          <td className="text-center py-4 font-bold text-cosmic-gold">{tier.totalRC}</td>
                          <td className="text-center py-4 text-foreground">{tier.creator}</td>
                          <td className="text-center py-4 text-muted-foreground">{tier.viewers}</td>
                          <td className="text-center py-4 text-muted-foreground">{tier.platform}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Financial Vision */}
              <section>
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  Financial Vision
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="glass-card rounded-xl p-6 text-center">
                    <Target className="w-8 h-8 text-cosmic-gold mx-auto mb-3" />
                    <p className="text-2xl font-bold text-cosmic-gold">$3B</p>
                    <p className="text-xs text-muted-foreground">Valuation Target</p>
                    <p className="text-xs text-muted-foreground mt-1">Miracle Network App</p>
                  </div>
                  <div className="glass-card rounded-xl p-6 text-center">
                    <TrendingUp className="w-8 h-8 text-cosmic-teal mx-auto mb-3" />
                    <p className="text-2xl font-bold text-cosmic-teal">$1.5T</p>
                    <p className="text-xs text-muted-foreground">Annual Redistribution</p>
                    <p className="text-xs text-muted-foreground mt-1">LT:S&ANP Goal (Year 15)</p>
                  </div>
                  <div className="glass-card rounded-xl p-6 text-center">
                    <Coins className="w-8 h-8 text-cosmic-purple mx-auto mb-3" />
                    <p className="text-2xl font-bold text-cosmic-purple">75%</p>
                    <p className="text-xs text-muted-foreground">Revenue to Citizens</p>
                    <p className="text-xs text-muted-foreground mt-1">Industry-Leading Split</p>
                  </div>
                  <div className="glass-card rounded-xl p-6 text-center">
                    <DollarSign className="w-8 h-8 text-rainbow-green mx-auto mb-3" />
                    <p className="text-2xl font-bold text-rainbow-green">$1,500</p>
                    <p className="text-xs text-muted-foreground">Monthly User Earnings</p>
                    <p className="text-xs text-muted-foreground mt-1">Projected Average</p>
                  </div>
                </div>
              </section>

              {/* Roadmap */}
              <section>
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  Development Roadmap
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="glass-card rounded-xl p-6 border-l-4 border-cosmic-teal">
                    <h3 className="font-bold text-xl text-cosmic-teal mb-3">v1 Beta</h3>
                    <p className="text-sm text-muted-foreground mb-4">Current Phase</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> 14 core features complete</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> IARainbowGuardian active</li>
                      <li className="flex items-center gap-2"><Check className="w-4 h-4 text-cosmic-teal" /> Mining dashboard live</li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-xl p-6 border-l-4 border-cosmic-purple">
                    <h3 className="font-bold text-xl text-cosmic-purple mb-3">v2 Growth</h3>
                    <p className="text-sm text-muted-foreground mb-4">2026</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cosmic-purple" /> API integrations</li>
                      <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cosmic-purple" /> Enhanced auth systems</li>
                      <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cosmic-purple" /> RC coin launch</li>
                      <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-cosmic-purple" /> iOS/Android apps</li>
                    </ul>
                  </div>
                  <div className="glass-card rounded-xl p-6 border-l-4 border-cosmic-gold">
                    <h3 className="font-bold text-xl text-cosmic-gold mb-3">v3 Ecosystem</h3>
                    <p className="text-sm text-muted-foreground mb-4">2027-2030</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><Star className="w-4 h-4 text-cosmic-gold" /> LTHousing integration</li>
                      <li className="flex items-center gap-2"><Star className="w-4 h-4 text-cosmic-gold" /> LTThrifty marketplace</li>
                      <li className="flex items-center gap-2"><Star className="w-4 h-4 text-cosmic-gold" /> Global expansion</li>
                      <li className="flex items-center gap-2"><Star className="w-4 h-4 text-cosmic-gold" /> Federated structure</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar - Historic Legacy Strongman */}
            <div className="xl:col-span-1 space-y-6">
              <div className="glass-card rounded-xl p-6 sticky top-28">
                <h3 className="font-bold text-xl text-cosmic-gold mb-4 text-center">Historic Legacy Strongman</h3>
                
                <img 
                  src={rainbowStrongmanPortrait} 
                  alt="Rainbow Strongman" 
                  className="w-full rounded-xl mb-4 gold-glow"
                />
                
                <h4 className="font-bold text-foreground mb-2">Rainbow Strongman</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Founder & CEO — From adversity to advocacy, a story of resilience and transformative love.
                </p>
                
                <div className="space-y-3 mb-6">
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Founded:</strong> Love Transcends (2013)
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Mission:</strong> Survivor-founded enterprise transforming advertising into universal basic income.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Education:</strong> San Bernardino College, Crafton Hills — Psychology, Arts, Theatre, Business
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Advocacy:</strong> HIV/AIDS awareness, mental health reform, Smart Recovery since 2013
                  </p>
                </div>

                <div className="mb-6">
                  <h5 className="text-xs font-bold text-muted-foreground uppercase mb-2">Core Values</h5>
                  <div className="flex flex-wrap gap-1">
                    {coreValues.map((value) => (
                      <span key={value} className="text-xs px-2 py-0.5 rounded-full bg-cosmic-purple/20 text-cosmic-purple">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-cosmic-gold/10 rounded-lg border border-cosmic-gold/30 mb-4">
                  <p className="text-xs italic text-foreground text-center">
                    "Love Transcends Adversity"
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <div className="p-3 rounded-lg bg-background/50">
                    <p className="text-lg font-bold text-cosmic-gold">75%</p>
                    <p className="text-xs text-muted-foreground">Ad Revenue to Citizens</p>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50">
                    <p className="text-lg font-bold text-cosmic-teal">$1.5T</p>
                    <p className="text-xs text-muted-foreground">Redistribution Goal (Year 15)</p>
                  </div>
                </div>

                <Button asChild className="w-full mt-4" variant="outline">
                  <Link to="/story">Read Full Story</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="py-12 mt-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                <a href="https://miraclemining.network/app" target="_blank" rel="noopener noreferrer">
                  Try Demo
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
