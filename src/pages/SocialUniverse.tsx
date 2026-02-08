import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { VersionBadge } from '@/components/socialuniverse/VersionBadge';
import { Check, Users, MessageCircle, Video, Calendar, Wallet, Image, Music, Star } from 'lucide-react';
import socialUniverseGlobe from '@/assets/hero/social-universe-globe.png';

const SocialUniverse = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />
      
      <main className="pt-28 pb-12 relative z-10">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-8">
            <img 
              src={socialUniverseGlobe} 
              alt="LT Social Universe" 
              className="w-48 h-48 mx-auto mb-6 floating"
            />
            <div className="flex items-center justify-center gap-3 mb-4">
              <h1 className="text-3xl md:text-5xl font-bold">
                <span className="rainbow-text">LTSocialUniverse</span>
              </h1>
              <VersionBadge version="v1" className="text-sm" />
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              A Miracle in Reality — The core social platform with creator monetization, 
              4-tier marketplace, and Reality Coin integration.
            </p>
            <div className="cosmic-divider w-48 mx-auto mt-6" />
          </section>

          {/* V1 Core Features */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
              V1 Core Features
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Users, label: '4-Tier Marketplace', desc: 'Public, Homies, Friendlies, Inner Circle' },
                { icon: Star, label: 'Paid Posting', desc: 'OnlyFans-style pay-to-view' },
                { icon: MessageCircle, label: 'Messaging', desc: 'Direct messaging system' },
                { icon: Video, label: 'Live Stream Tipping', desc: 'Tip creators live' },
                { icon: Calendar, label: 'Calendar Events', desc: 'Event scheduling' },
                { icon: Image, label: 'LTRealityStream', desc: 'Video/Picture/Music gallery' },
                { icon: Wallet, label: 'RC Token Wallet', desc: 'Reality Coin integration' },
                { icon: Music, label: 'Digital Items', desc: 'NFT-style drops with paywalls' },
              ].map((feature) => (
                <div key={feature.label} className="glass-card rounded-xl p-4 text-center">
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-cosmic-purple" />
                  <p className="font-semibold text-sm text-foreground">{feature.label}</p>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Subscription Tiers */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
              Subscription Tiers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Free Viewer */}
              <Card className="glass-card border-border/30">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-muted-foreground">Free</CardTitle>
                  <p className="text-3xl font-bold text-foreground">$0<span className="text-sm font-normal">/mo</span></p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Browse Public feed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">View free content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Basic messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">RC Wallet access</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Viewer Tier */}
              <Card className="glass-card border-cosmic-purple/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-cosmic-purple text-white text-xs px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-cosmic-purple">Viewer</CardTitle>
                  <p className="text-3xl font-bold text-foreground">$10<span className="text-sm font-normal">/mo</span></p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cosmic-purple mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">All Free features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cosmic-purple mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Watch Homies' live streams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cosmic-purple mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Earn platform revenue share</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cosmic-purple mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Revenue ÷ active viewers</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-cosmic-purple/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Requirements:</strong> 8hrs/week activity + Sunday 10am check-in
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Self-Celebrity Tier */}
              <Card className="glass-card border-cosmic-gold/50">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl text-cosmic-gold">Self-Celebrity</CardTitle>
                  <p className="text-3xl font-bold text-foreground">$20<span className="text-sm font-normal">/mo</span></p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cosmic-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">All Viewer features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cosmic-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Pay-to-post tool access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cosmic-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Monetize your content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-cosmic-gold mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">Live stream with tips</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-cosmic-gold/10 rounded-lg">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Fees:</strong> 10% withdrawal fee • 5% to viewer bonus pool
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* 4-Tier Marketplace */}
          <section className="mb-8">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-foreground">4-Tier Marketplace</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: 'Public', desc: 'Open to all users', color: 'bg-green-500/20 border-green-500/30' },
                  { name: 'Homies', desc: 'Subscribers only', color: 'bg-blue-500/20 border-blue-500/30' },
                  { name: 'Friendlies', desc: 'Mutual connections', color: 'bg-purple-500/20 border-purple-500/30' },
                  { name: 'Inner Circle', desc: 'Trusted contacts', color: 'bg-cosmic-gold/20 border-cosmic-gold/30' },
                ].map((tier) => (
                  <div key={tier.name} className={`text-center p-4 rounded-lg border ${tier.color}`}>
                    <p className="font-bold text-foreground">{tier.name}</p>
                    <p className="text-xs text-muted-foreground">{tier.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* LTRealityStream CTA */}
          <section className="mb-8">
            <div className="glass-card rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-2 text-foreground">LTRealityStream Gallery</h2>
              <p className="text-muted-foreground mb-4">
                Explore Videos, Pictures, Music drops, and Digital Items with creator paywalls.
              </p>
              <Button asChild className="cosmic-button text-white">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </section>

          {/* Demo Login CTA */}
          <section className="mb-8">
            <div className="glass-card rounded-xl p-6 text-center">
              <h2 className="text-xl font-bold mb-4 text-foreground">Experience the Platform</h2>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                  <a href="https://miraclemining.network/app" target="_blank" rel="noopener noreferrer">
                    Demo Login
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://www.socialuniverse.love" target="_blank" rel="noopener noreferrer">
                    Visit SocialUniverse.love
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Three Pillars */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
              Three Pillars, One Universe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/ltsocial" className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rainbow-violet to-rainbow-blue mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">LT</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">Social</h3>
                <p className="text-muted-foreground text-sm">Family-first network with AI protection</p>
              </Link>

              <Link to="/miraclemining" className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rainbow-yellow to-rainbow-orange mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-black">MN</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">Mining</h3>
                <p className="text-muted-foreground text-sm">Shift Coin Protocol & Reality Coins</p>
              </Link>

              <Link to="/" className="glass-card rounded-xl p-6 text-center hover:cosmic-glow transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rainbow-green to-rainbow-blue mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">SU</span>
                </div>
                <h3 className="font-bold text-foreground text-lg mb-1">Universe</h3>
                <p className="text-muted-foreground text-sm">Complete ecosystem integration</p>
              </Link>
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocialUniverse;
