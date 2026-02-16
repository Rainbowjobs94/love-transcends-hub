import { useState, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Target, Globe, ExternalLink, Heart, Rocket, Shield } from 'lucide-react';

const BURST_COLORS = [
  'hsl(0, 85%, 60%)', 'hsl(25, 95%, 55%)', 'hsl(45, 90%, 55%)',
  'hsl(210, 90%, 55%)', 'hsl(280, 80%, 60%)',
];

interface HeroParticle {
  id: number;
  x: number;
  y: number;
  type: 'star' | 'firework';
  color: string;
  angle: number;
  distance: number;
  size: number;
  duration: number;
}

const DOMAINS = [
  { name: 'LTSocial', url: 'https://ltsocial.net', label: 'V3 Beta Hub', color: 'text-cosmic-teal' },
  { name: 'Social Universe', url: 'https://socialuniverse.love', label: 'V1 Family Network', color: 'text-rainbow-green' },
  { name: 'Miracle Mining', url: 'https://miraclemining.network', label: 'V2 Mining Network', color: 'text-rainbow-yellow' },
  { name: 'LTReality', url: 'https://lovetranscendsreality.org', label: 'Master Hub', color: 'text-rainbow-red' },
  { name: 'LTSocial.com', url: 'https://ltsocial.com', label: 'Social Platform', color: 'text-rainbow-blue' },
  { name: 'Rainbow Jobs', url: 'https://rainbowjobs.love', label: 'Founder Portal', color: 'text-rainbow-violet' },
];

const Investors = () => {
  const [particles, setParticles] = useState<HeroParticle[]>([]);

  const spawnEffects = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = Date.now();
    const newParticles: HeroParticle[] = [];

    for (let i = 0; i < 2; i++) {
      newParticles.push({
        id: now + Math.random(), x: x + (Math.random() - 0.5) * 60, y: y + (Math.random() - 0.5) * 40,
        type: 'star', color: 'white', angle: 20 + Math.random() * 40, distance: 80 + Math.random() * 120, size: 2, duration: 0.5 + Math.random() * 0.5,
      });
    }

    const fwColor = BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)];
    for (let i = 0; i < 8; i++) {
      newParticles.push({
        id: now + Math.random() + i, x, y, type: 'firework', color: fwColor,
        angle: (360 / 8) * i + Math.random() * 20, distance: 25 + Math.random() * 45, size: 2 + Math.random() * 3, duration: 0.8 + Math.random() * 0.4,
      });
    }

    setParticles((prev) => [...prev.slice(-30), ...newParticles]);
    setTimeout(() => setParticles((prev) => prev.filter((p) => !newParticles.includes(p))), 1400);
  }, []);

  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      <LeftPanel />
      <RightPanel />

      <main className="pt-24 relative z-10">
        {/* Hero with hover fireworks */}
        <section
          className="py-20 text-center relative overflow-hidden cursor-crosshair"
          onMouseMove={(e) => { if (Math.random() > 0.7) spawnEffects(e); }}
          onClick={spawnEffects}
        >
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: p.x, top: p.y, width: p.size,
                height: p.type === 'star' ? 2 : p.size,
                backgroundColor: p.color,
                boxShadow: `0 0 6px ${p.color}, 0 0 12px ${p.color}`,
                animation: p.type === 'star'
                  ? `hero-shoot ${p.duration}s linear forwards`
                  : `hero-burst ${p.duration}s ease-out forwards`,
                '--h-angle': `${p.angle}deg`,
                '--h-dist': `${p.distance}px`,
              } as React.CSSProperties}
            />
          ))}

          <div className="container mx-auto px-4 relative z-10">
            <span className="premium-badge mb-4 inline-block">Investment Opportunity</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-cosmic-gold">Investor Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              75/25 creator-first revenue · $3B North Star · 7-year founder control
            </p>
            <div className="cosmic-divider w-48 mx-auto" />
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Target, value: '$3B', label: 'North Star', sub: 'Year 5-10' },
                { icon: Users, value: '3.5M', label: 'MAU Target', sub: 'Year 3 Upside' },
                { icon: DollarSign, value: '$312M', label: 'Net Revenue', sub: 'Year 3 Upside' },
                { icon: TrendingUp, value: '75%', label: 'Creator Share', sub: 'Industry-Leading' },
              ].map(({ icon: Icon, value, label, sub }) => (
                <div key={label} className="investor-card text-center p-4">
                  <Icon className="w-8 h-8 text-cosmic-gold mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-cosmic-gold">{value}</p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-xs text-muted-foreground/60">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem Domains */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6 rainbow-text">Our Ecosystem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {DOMAINS.map((d) => (
                <a
                  key={d.name}
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:cosmic-glow transition-all duration-300"
                >
                  <Globe className={`w-8 h-8 ${d.color} shrink-0`} />
                  <div className="min-w-0">
                    <p className="font-bold text-foreground group-hover:text-cosmic-gold transition-colors truncate">{d.name}</p>
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Pathways (concise) */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-6 text-cosmic-gold">Investment Pathways</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Rocket, title: 'Big-Tech / Celebrity', equity: '7% – 49%', range: '$50M – $500M', highlight: true },
                { icon: TrendingUp, title: 'Institutional Growth', equity: '5% – 25%', range: '$10M – $100M', highlight: false },
                { icon: Shield, title: 'Bootstrap (GoFundMe)', equity: 'Full Control', range: 'Self-funded', highlight: false },
                { icon: Heart, title: 'Community / LTSANP', equity: 'Non-Profit', range: 'Donations', highlight: false },
              ].map(({ icon: Icon, title, equity, range, highlight }) => (
                <div key={title} className={`investor-card p-5 ${highlight ? 'border-cosmic-gold/50 bg-cosmic-gold/5' : ''}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className={`w-6 h-6 ${highlight ? 'text-cosmic-gold' : 'text-muted-foreground'}`} />
                    <h3 className={`font-bold ${highlight ? 'text-cosmic-gold' : 'text-foreground'}`}>{title}</h3>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Equity</span>
                    <span className="font-semibold text-foreground">{equity}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Range</span>
                    <span className="font-semibold text-foreground">{range}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              🛡️ 7-year founder control over product development regardless of equity structure
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card max-w-xl mx-auto p-8 rounded-2xl border border-cosmic-gold/30">
              <h2 className="text-xl font-bold text-foreground mb-3">Ready to Invest?</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Contact us for the complete investor deck and partnership details.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold">
                  <a href="mailto:Rainbow@rainbowjobs.love?subject=Investment%20Inquiry">Contact for Investment</a>
                </Button>
                <Button asChild size="lg" className="v3-launch-btn font-bold">
                  <a href="https://www.gofundme.com/f/Ltsanp" target="_blank" rel="noopener noreferrer">
                    <Heart className="w-4 h-4 mr-1" /> Donate via LTSANP
                  </a>
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

export default Investors;
