import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, DollarSign, Target, Award, Shield, Building, Rocket, CheckCircle } from 'lucide-react';

const Investors = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />
      
      <main className="pt-24 relative z-10">
        {/* Hero */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <span className="premium-badge mb-4 inline-block">Investment Opportunity</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-cosmic-gold">Investor Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete Financial Blueprint for Love Transcends Reality. 
              Path to $3B valuation with multiple investment pathways.
            </p>
            <div className="cosmic-divider w-64 mx-auto mt-8" />
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="investor-card text-center">
                <Target className="w-12 h-12 text-cosmic-gold mx-auto mb-3" />
                <p className="text-4xl font-bold text-cosmic-gold">$3B</p>
                <p className="text-sm text-muted-foreground">North Star Target</p>
                <p className="text-xs text-muted-foreground">Year 5-10</p>
              </div>
              <div className="investor-card text-center">
                <Users className="w-12 h-12 text-cosmic-gold mx-auto mb-3" />
                <p className="text-4xl font-bold text-cosmic-gold">3.5M</p>
                <p className="text-sm text-muted-foreground">MAU Target</p>
                <p className="text-xs text-muted-foreground">Year 3 Upside</p>
              </div>
              <div className="investor-card text-center">
                <DollarSign className="w-12 h-12 text-cosmic-gold mx-auto mb-3" />
                <p className="text-4xl font-bold text-cosmic-gold">$312M</p>
                <p className="text-sm text-muted-foreground">Net Revenue</p>
                <p className="text-xs text-muted-foreground">Year 3 Upside</p>
              </div>
              <div className="investor-card text-center">
                <TrendingUp className="w-12 h-12 text-cosmic-gold mx-auto mb-3" />
                <p className="text-4xl font-bold text-cosmic-gold">75%</p>
                <p className="text-sm text-muted-foreground">Creator Share</p>
                <p className="text-xs text-muted-foreground">Industry-Leading</p>
              </div>
            </div>
          </div>
        </section>

        {/* Four Engine Revenue System */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="rainbow-text">The Hybrid Engine</span>
              <span className="text-foreground"> - Four Revenue Systems</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rainbow-violet/20 flex items-center justify-center">
                    <span className="font-bold text-rainbow-violet">A</span>
                  </div>
                  <h3 className="font-bold text-foreground">LTSocial (Family-First)</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 75% creator / 25% platform split</li>
                  <li>• Direct USD payouts, no wallet required</li>
                  <li>• Revenue: ads, boosts, subscriptions, marketplace</li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rainbow-orange/20 flex items-center justify-center">
                    <span className="font-bold text-rainbow-orange">B</span>
                  </div>
                  <h3 className="font-bold text-foreground">Miracle Network (For-Profit)</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Paid advertisements and boosting</li>
                  <li>• Fanship, 4Family ($30/mo), Self-Celebrity ($100/2mo)</li>
                  <li>• NFT support and transaction fees</li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rainbow-green/20 flex items-center justify-center">
                    <span className="font-bold text-rainbow-green">C</span>
                  </div>
                  <h3 className="font-bold text-foreground">LTSANP (Non-Profit)</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Capture 75% of U.S. ad spend ($1.5T/year)</li>
                  <li>• Redistribute to citizens via USDC</li>
                  <li>• Goal: Up to $1M aid per qualified citizen</li>
                </ul>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-rainbow-blue/20 flex items-center justify-center">
                    <span className="font-bold text-rainbow-blue">D</span>
                  </div>
                  <h3 className="font-bold text-foreground">LTReality Mining</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Reality Coin at 1:1 USD in UI/UX</li>
                  <li>• Late Ledger Hash blockchain verification</li>
                  <li>• Shift Coin Protocol allocation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Projections */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-gold">
              Three-Year Financial Projections
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Base Case */}
              <div className="investor-card">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-muted-foreground" />
                  Base Case (Conservative)
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableHead>MAU</TableHead>
                      <TableHead>Payer Rate</TableHead>
                      <TableHead>ARPU</TableHead>
                      <TableHead className="text-right">Net Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Year 1</TableCell>
                      <TableCell>100,000</TableCell>
                      <TableCell>8%</TableCell>
                      <TableCell>$28</TableCell>
                      <TableCell className="text-right font-bold">$2.45M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Year 2</TableCell>
                      <TableCell>400,000</TableCell>
                      <TableCell>8%</TableCell>
                      <TableCell>$32</TableCell>
                      <TableCell className="text-right font-bold">$11.2M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Year 3</TableCell>
                      <TableCell>1,200,000</TableCell>
                      <TableCell>8%</TableCell>
                      <TableCell>$38</TableCell>
                      <TableCell className="text-right font-bold">$38.5M</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Upside Case */}
              <div className="investor-card border-cosmic-gold/40">
                <h3 className="text-xl font-bold text-cosmic-gold mb-4 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Upside Case (Celebrity Partnership)
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableHead>MAU</TableHead>
                      <TableHead>Payer Rate</TableHead>
                      <TableHead>ARPU</TableHead>
                      <TableHead className="text-right">Net Revenue</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Year 1</TableCell>
                      <TableCell>250,000</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>$35</TableCell>
                      <TableCell className="text-right font-bold text-cosmic-gold">$19.46M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Year 2</TableCell>
                      <TableCell>1,200,000</TableCell>
                      <TableCell>11%</TableCell>
                      <TableCell>$38</TableCell>
                      <TableCell className="text-right font-bold text-cosmic-gold">$98.8M</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Year 3</TableCell>
                      <TableCell>3,500,000</TableCell>
                      <TableCell>12%</TableCell>
                      <TableCell>$42</TableCell>
                      <TableCell className="text-right font-bold text-cosmic-gold">$312.4M</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Break-Even */}
            <div className="investor-card max-w-2xl mx-auto mt-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Break-Even Analysis (100K MAU)</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product/Engineering</span>
                  <span className="text-foreground">$1,200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Trust & Safety</span>
                  <span className="text-foreground">$500,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Targeted Marketing</span>
                  <span className="text-foreground">$600,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Operations/Legal</span>
                  <span className="text-foreground">$200,000</span>
                </div>
                <div className="col-span-2 pt-4 border-t border-border flex justify-between font-bold">
                  <span>Total OpEx</span>
                  <span className="text-cosmic-gold">$2,300,000 - $2,500,000</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Pathways */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 rainbow-text">
              Investment Pathways & Equity Offers
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="investor-card">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-8 h-8 text-cosmic-teal" />
                  <div>
                    <h3 className="font-bold text-foreground">Pathway A: Big-Tech Partnership</h3>
                    <p className="text-sm text-muted-foreground">Amazon, Google, Microsoft-tier</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment Range</span>
                    <span className="text-foreground font-semibold">$50M - $500M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equity</span>
                    <span className="text-foreground font-semibold">7% - 49%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus</span>
                    <span className="text-foreground">Infrastructure, scale, distribution</span>
                  </div>
                </div>
              </div>

              <div className="investor-card border-cosmic-gold/40 bg-cosmic-gold/5">
                <div className="absolute -top-3 right-4">
                  <span className="premium-badge">Recommended</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-cosmic-gold" />
                  <div>
                    <h3 className="font-bold text-cosmic-gold">Pathway B: Celebrity Partnership</h3>
                    <p className="text-sm text-muted-foreground">Kelly Clarkson, mission-aligned celebrities</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment Range</span>
                    <span className="text-cosmic-gold font-semibold">$50M - $500M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equity</span>
                    <span className="text-cosmic-gold font-semibold">7% - 49% (via SPV)</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-cosmic-gold/20 text-xs text-muted-foreground">
                    <p><strong>Options:</strong> SPV (LT Media & Culinary Studios) up to 49%, Staged unlocks, Revenue-share overlay</p>
                  </div>
                </div>
              </div>

              <div className="investor-card">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-8 h-8 text-cosmic-purple" />
                  <div>
                    <h3 className="font-bold text-foreground">Pathway C: Institutional</h3>
                    <p className="text-sm text-muted-foreground">Growth capital, expansion</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Investment Range</span>
                    <span className="text-foreground font-semibold">$10M - $100M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Equity</span>
                    <span className="text-foreground font-semibold">5% - 25%</span>
                  </div>
                </div>
              </div>

              <div className="investor-card">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-muted-foreground" />
                  <div>
                    <h3 className="font-bold text-foreground">Pathway D: Bootstrap</h3>
                    <p className="text-sm text-muted-foreground">Self-funded with GoFundMe</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Control</span>
                    <span className="text-foreground font-semibold">Full founder control</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Growth</span>
                    <span className="text-foreground">Slower trajectory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equity Tier Structure */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              Equity Tier Structure
            </h2>

            <div className="investor-card max-w-4xl mx-auto overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investment Amount</TableHead>
                    <TableHead>Equity Offered</TableHead>
                    <TableHead>Board Seat</TableHead>
                    <TableHead>Control Level</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">$10M - $25M</TableCell>
                    <TableCell>5% - 10%</TableCell>
                    <TableCell>Observer</TableCell>
                    <TableCell>Limited</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">$25M - $50M</TableCell>
                    <TableCell>10% - 15%</TableCell>
                    <TableCell>1 Seat</TableCell>
                    <TableCell>Advisory</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">$50M - $100M</TableCell>
                    <TableCell>15% - 25%</TableCell>
                    <TableCell>1-2 Seats</TableCell>
                    <TableCell>Collaborative</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">$100M - $250M</TableCell>
                    <TableCell>25% - 35%</TableCell>
                    <TableCell>2 Seats</TableCell>
                    <TableCell>Shared Governance</TableCell>
                  </TableRow>
                  <TableRow className="bg-cosmic-gold/10">
                    <TableCell className="font-bold text-cosmic-gold">$250M - $500M</TableCell>
                    <TableCell className="font-bold text-cosmic-gold">35% - 49%</TableCell>
                    <TableCell className="font-bold">2-3 Seats</TableCell>
                    <TableCell className="font-bold">Strategic Partnership</TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <div className="mt-6 p-4 bg-cosmic-purple/10 rounded-lg border border-cosmic-purple/20">
                <p className="text-center text-sm">
                  <strong className="text-foreground">🛡️ Founder Protection:</strong>
                  <span className="text-muted-foreground"> 7-year control over product development regardless of equity structure</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Valuation */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-cosmic-gold">
              Milestone-Based Valuation
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-4">
                {[
                  { milestone: '100K MAU Achieved', valuation: '$25M' },
                  { milestone: '$10M Annual Revenue Run-Rate', valuation: '$50M' },
                  { milestone: 'Celebrity Flagship Programming Launched', valuation: '$75M' },
                  { milestone: 'Reality Coin RC Live (Compliant)', valuation: '$100M' },
                  { milestone: '1M MAU Achieved', valuation: '$150M' },
                  { milestone: '$100M Annual Revenue Run-Rate', valuation: '$200M' },
                ].map((item, index) => (
                  <div key={index} className="glass-card rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cosmic-teal" />
                      <span className="text-foreground">{item.milestone}</span>
                    </div>
                    <span className="font-bold text-cosmic-gold">{item.valuation}</span>
                  </div>
                ))}
                <div className="investor-card p-6 flex items-center justify-between border-cosmic-gold/40">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-cosmic-gold" />
                    <span className="font-bold text-lg text-foreground">North Star Target</span>
                  </div>
                  <span className="font-bold text-2xl text-cosmic-gold">$3B (Year 5-10)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 rainbow-text">
              Competitive Advantages
            </h2>

            <div className="investor-card max-w-5xl mx-auto overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead className="text-center">LTReality</TableHead>
                    <TableHead className="text-center">Minds</TableHead>
                    <TableHead className="text-center">Steemit</TableHead>
                    <TableHead className="text-center">Mastodon</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { feature: 'Shift Coin Protocol', lt: '✓ First Ever', minds: '✗', steemit: '✗', mastodon: '✗' },
                    { feature: '$1 Stable Cryptocurrency', lt: '✓ Reality Coin', minds: '✗', steemit: '✗ Volatile', mastodon: '✗' },
                    { feature: 'Live Video Streaming', lt: '✓ With RC Rewards', minds: '✗', steemit: '✗', mastodon: '✗' },
                    { feature: 'AI Guardian Protection', lt: '✓ Gemini AI', minds: '✗', steemit: '✗', mastodon: '✗' },
                    { feature: 'Mental Health Services', lt: '✓ AI + Human', minds: '✗', steemit: '✗', mastodon: '✗' },
                    { feature: 'Three-Tier Connections', lt: '✓ Unique Model', minds: '✗', steemit: '✗', mastodon: '✗' },
                    { feature: 'Zero Gas Fees', lt: '✓ Auto-selection', minds: '✗', steemit: 'Limited', mastodon: 'N/A' },
                  ].map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{row.feature}</TableCell>
                      <TableCell className="text-center font-bold text-cosmic-gold">{row.lt}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{row.minds}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{row.steemit}</TableCell>
                      <TableCell className="text-center text-muted-foreground">{row.mastodon}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="glass-card max-w-2xl mx-auto p-8 rounded-2xl border border-cosmic-gold/30">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Invest?</h2>
              <p className="text-muted-foreground mb-6">
                Contact us to discuss investment opportunities and receive our complete investor deck.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold">
                  <a href="mailto:Rainbow@rainbowjobs.love?subject=Investment%20Inquiry">
                    Contact for Investment
                  </a>
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

export default Investors;
