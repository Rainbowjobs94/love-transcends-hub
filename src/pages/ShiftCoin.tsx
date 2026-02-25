import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { LeftPanel } from '@/components/LeftPanel';
import { RightPanel } from '@/components/RightPanel';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Coins, Zap, Shield, TrendingUp, Fingerprint, Globe, Lock, ArrowRight } from 'lucide-react';

const ShiftCoin = () => {
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
            <span className="premium-badge mb-4 inline-block">World's First</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="rainbow-text">Shift Coin Protocol</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              NOT a cryptocurrency — a revolutionary mining protocol that automatically 
              selects the fastest, cheapest blockchain network with ZERO or minimal gas fees.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              How Shift Mining Works
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { icon: Fingerprint, title: 'Device Fingerprint', desc: 'Encrypted data collection' },
                  { icon: Shield, title: 'Encryption', desc: 'IP, VPN, IMEI, MAC secured' },
                  { icon: Zap, title: 'Algorithm', desc: 'Mathematical mining process' },
                  { icon: Globe, title: 'Network Selection', desc: 'Auto-select fastest chain' },
                  { icon: Coins, title: 'Reward', desc: 'Reality Coins mined' },
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="glass-card rounded-xl p-4 text-center h-full">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-teal mx-auto mb-3 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-bold text-sm text-foreground mb-1">{step.title}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                    {index < 4 && (
                      <ArrowRight className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 w-4 h-4 text-cosmic-teal" />
                    )}
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-xl p-6 mt-8">
                <h3 className="font-bold text-foreground mb-3">Device Data Encrypted:</h3>
                <div className="flex flex-wrap gap-2">
                  {['IP Address', 'VPN Status', 'IMEI', 'MAC Address', 'GPS Location', 'Bluetooth', 'WiFi Network', 'DNS'].map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-cosmic-purple/20 text-sm text-cosmic-teal">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reality Coin & Miracle Coin */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Reality Coin */}
              <div className="glass-card rounded-2xl p-8 border border-cosmic-teal/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-teal to-cosmic-blue flex items-center justify-center">
                    <Coins className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Reality Coin (RC)</h3>
                    <p className="text-cosmic-teal font-bold text-xl">$1 Stable Value</p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cosmic-teal" />
                    <p>Always $1 inside LTReality network</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cosmic-teal" />
                    <p>Supply Cap: <strong className="text-foreground">365 Trillion</strong></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cosmic-teal" />
                    <p>Becomes volatile only when converted OUT</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-cosmic-teal" />
                    <p><strong className="text-foreground">4-Year Crypto Lock</strong> for stability</p>
                  </div>
                </div>
              </div>

              {/* Miracle Coin */}
              <div className="glass-card rounded-2xl p-8 border border-cosmic-gold/30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-gold to-rainbow-orange flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Miracle Coin (MC)</h3>
                    <p className="text-cosmic-gold font-bold text-xl">$1 Million Target</p>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cosmic-gold" />
                    <p>Premium conversion target: $1M per coin</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cosmic-gold" />
                    <p>Supply Cap: <strong className="text-foreground">777 Trillion</strong></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cosmic-gold" />
                    <p>Convert: <strong className="text-foreground">1M RC = 1 MC</strong></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cosmic-gold" />
                    <p>OR: <strong className="text-foreground">$2M transactions = 1 MC</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mining Tiers */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 rainbow-text">
              Mining Tier Rewards
            </h2>

            <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tier</TableHead>
                    <TableHead>Platform Revenue</TableHead>
                    <TableHead>Creator Share</TableHead>
                    <TableHead>Viewer Share</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        🥉 <span className="font-bold">Bronze</span>
                      </span>
                    </TableCell>
                    <TableCell>$0.20/event</TableCell>
                    <TableCell className="font-bold text-cosmic-teal">$0.80</TableCell>
                    <TableCell className="text-muted-foreground">—</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <span className="flex items-center gap-2">
                        🥈 <span className="font-bold">Silver</span>
                      </span>
                    </TableCell>
                    <TableCell>$0.50/event</TableCell>
                    <TableCell className="font-bold text-cosmic-teal">$0.80</TableCell>
                    <TableCell className="font-bold text-cosmic-purple">$0.70</TableCell>
                  </TableRow>
                  <TableRow className="bg-cosmic-gold/10">
                    <TableCell>
                      <span className="flex items-center gap-2">
                        🥇 <span className="font-bold text-cosmic-gold">Gold</span>
                      </span>
                    </TableCell>
                    <TableCell>$0.50/event</TableCell>
                    <TableCell className="font-bold text-cosmic-gold">$3.25</TableCell>
                    <TableCell className="font-bold text-cosmic-gold">$1.25</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Earning Methods */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Ways to Earn Reality Coins
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: 'Daily Activities', desc: 'Earn RC through regular platform engagement', reward: 'Varies' },
                { title: 'Content Creation', desc: 'Publish posts, stories, and media', reward: 'Based on tier' },
                { title: 'Live Streaming', desc: 'Earn per paying viewer', reward: '$0.35/viewer' },
                { title: 'LTMMM Protocol', desc: 'Engagement rewards program', reward: 'Multiplied' },
                { title: 'Investment Returns', desc: 'Earn on platform investments', reward: '50% rate' },
                { title: 'Referrals', desc: 'Bring new users to the platform', reward: 'Bonus RC' },
              ].map((method, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <h3 className="font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.desc}</p>
                  <span className="text-cosmic-teal font-semibold text-sm">{method.reward}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Tiers */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-gold">
              Subscription Tiers
            </h2>

            <div className="glass-card rounded-2xl p-8 max-w-5xl mx-auto overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tier</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Revenue Split</TableHead>
                    <TableHead>Features</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-bold">Fanship</TableCell>
                    <TableCell>$100 / 10,000 MC</TableCell>
                    <TableCell>Standard</TableCell>
                    <TableCell className="text-sm text-muted-foreground">Up to 3 connections, basic content, paywalls for 3 feeds</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold">4Family</TableCell>
                    <TableCell>$100 / 10,000 MC</TableCell>
                    <TableCell>Standard</TableCell>
                    <TableCell className="text-sm text-muted-foreground">Family-focused, parental controls, multi-user, safe filtering</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-cosmic-teal">SelfCelebrity</TableCell>
                    <TableCell className="text-cosmic-teal">$500 / 50,000 MC</TableCell>
                    <TableCell>30%/30%</TableCell>
                    <TableCell className="text-sm text-muted-foreground">Unlimited connections, enhanced creator tools, priority support</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-cosmic-purple">Pearl</TableCell>
                    <TableCell className="text-cosmic-purple">$5,000 / 500,000 MC</TableCell>
                    <TableCell>25%/50%</TableCell>
                    <TableCell className="text-sm text-muted-foreground">Premium features, VIP support</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-bold text-cosmic-purple">Miner</TableCell>
                    <TableCell className="text-cosmic-purple">$5,000 / 500,000 MC</TableCell>
                    <TableCell>25%/50%</TableCell>
                    <TableCell className="text-sm text-muted-foreground">Enhanced mining, priority blockchain selection</TableCell>
                  </TableRow>
                  <TableRow className="bg-cosmic-gold/10">
                    <TableCell className="font-bold text-cosmic-gold">Jasper</TableCell>
                    <TableCell className="text-cosmic-gold">Unlimited</TableCell>
                    <TableCell>20%/40%</TableCell>
                    <TableCell className="text-sm">All features, white-glove service, custom development</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* NFT Marketplace */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-gold">NFT Marketplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="glass-card rounded-xl p-6 border border-cosmic-gold/30">
                <Shield className="w-8 h-8 text-cosmic-gold mb-3" />
                <h3 className="font-bold text-foreground mb-2">Floor Price Guarantee</h3>
                <p className="text-sm text-muted-foreground">USD floor enforced via Chainlink oracles on Polygon — creators never sell below cost.</p>
              </div>
              <div className="glass-card rounded-xl p-6 border border-cosmic-teal/30">
                <Fingerprint className="w-8 h-8 text-cosmic-teal mb-3" />
                <h3 className="font-bold text-foreground mb-2">KEM IP Protection</h3>
                <p className="text-sm text-muted-foreground">Post-quantum watermarking embeds tamper-proof provenance into every NFT.</p>
                <Button asChild variant="link" size="sm" className="px-0 mt-2 text-cosmic-teal">
                  <Link to="/kem-watermark">Learn More →</Link>
                </Button>
              </div>
              <div className="glass-card rounded-xl p-6 border border-cosmic-purple/30">
                <Globe className="w-8 h-8 text-cosmic-purple mb-3" />
                <h3 className="font-bold text-foreground mb-2">Cross-Network Portability</h3>
                <p className="text-sm text-muted-foreground">Polygon primary with bridge support to Ethereum and all EVM-compatible chains.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                <Link to="/rsnx-protocol">Explore RSNX Protocol</Link>
              </Button>
              <Button asChild size="lg" className="cosmic-button text-white font-semibold">
                <Link to="/investors">View Investment Opportunities</Link>
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

export default ShiftCoin;
