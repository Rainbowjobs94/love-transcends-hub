import { Link } from 'react-router-dom';
import { ArrowLeft, Vote, Shield, Coins, Users, Scale, Clock, Landmark, FileText, Zap, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const phases = [
  {
    phase: 'Phase 1 — Foundation',
    period: '2025–2026',
    status: 'active',
    items: [
      'Core smart contracts audited & deployed',
      'Governance forum launched for community proposals',
      'Advisory council formed (5 seats, appointed by founder)',
      'Temperature-check voting on Snapshot (off-chain, gasless)',
    ],
  },
  {
    phase: 'Phase 2 — Transition',
    period: '2027–2028',
    status: 'upcoming',
    items: [
      'On-chain governance contract deployed (Governor Bravo compatible)',
      'MCL token voting goes live — 1 MCL = 1 vote',
      'Quadratic voting enabled for major protocol proposals (MIPs)',
      'Treasury multi-sig transitions from 3-of-5 founder keys to 5-of-9 community + founder keys',
    ],
  },
  {
    phase: 'Phase 3 — Full DAO',
    period: '2029–2030',
    status: 'upcoming',
    items: [
      'Founder control clause expires after 7-year term',
      'DAO assumes full authority over protocol upgrades, fee structures, and treasury',
      'Delegate system: MCL holders can delegate votes to representatives',
      'Sub-DAOs for specific domains (mining, security, grants)',
    ],
  },
];

const treasuryAllocations = [
  { label: 'Protocol Development', pct: 40, icon: Zap, color: 'text-blue-400' },
  { label: 'Security Audits & Bug Bounties', pct: 20, icon: Shield, color: 'text-red-400' },
  { label: 'Community Grants & Ecosystem', pct: 20, icon: Users, color: 'text-green-400' },
  { label: 'Operational Reserve', pct: 15, icon: Landmark, color: 'text-yellow-400' },
  { label: 'Emergency Fund', pct: 5, icon: Lock, color: 'text-purple-400' },
];

const Governance = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-16 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
            <Vote className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="rainbow-text">Governance</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            MiracleCoin is on a path to full community governance. This page outlines how protocol upgrades, fee structures, and treasury allocation will be decided by MCL holders through a decentralized autonomous organization (DAO).
          </p>
        </div>

        {/* Voting Mechanics */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Scale className="w-6 h-6 text-primary" /> Voting Mechanics
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Token-Weighted Voting', desc: '1 MCL = 1 vote on standard proposals. Voting power scales linearly with holdings. Only unlocked (liquid) MCL counts — reserved tokens cannot vote until their unlock milestone.' },
              { title: 'Quadratic Voting', desc: 'For Major Improvement Proposals (MIPs), quadratic voting applies: voting power = √(MCL staked). This prevents whale dominance and amplifies smaller holders\' influence on critical decisions.' },
              { title: 'Proposal Thresholds', desc: 'Creating a proposal requires holding ≥ 10,000 MCL. Temperature checks need ≥ 1,000 MCL. Quorum for binding votes: 4% of circulating supply must participate.' },
              { title: 'Timelock & Execution', desc: 'Approved proposals enter a 48-hour timelock before execution. During this window, the security council can veto proposals flagged as malicious. Execution is permissionless after timelock expires.' },
            ].map((card) => (
              <Card key={card.title} className="glass-card border-primary/20">
                <CardHeader className="pb-2"><CardTitle className="text-base">{card.title}</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{card.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Governance Roadmap */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" /> Governance Roadmap
          </h2>
          <div className="space-y-6">
            {phases.map((p) => (
              <Card key={p.phase} className={`glass-card border-primary/20 ${p.status === 'active' ? 'ring-1 ring-primary/40' : ''}`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{p.phase}</CardTitle>
                    <span className="text-xs font-mono text-muted-foreground">{p.period}</span>
                  </div>
                  {p.status === 'active' && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-0.5 w-fit">Current Phase</span>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {p.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Treasury Allocation */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Coins className="w-6 h-6 text-primary" /> Treasury Allocation
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            The DAO treasury is funded by the 7% platform fee on all mining payouts. Allocation targets are voted on quarterly. Current targets:
          </p>
          <div className="space-y-3">
            {treasuryAllocations.map((a) => (
              <div key={a.label} className="flex items-center gap-3">
                <a.icon className={`w-5 h-5 ${a.color} shrink-0`} />
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span>{a.label}</span>
                    <span className="font-mono text-muted-foreground">{a.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full rounded-full bg-primary/60" style={{ width: `${a.pct}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proposal Types */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" /> Proposal Types
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {[
              { id: 'mip', title: 'MIP — Major Improvement Proposal', content: 'Protocol-level changes: mining rate adjustments, new tier introductions, fee structure modifications, smart contract upgrades. Requires quadratic voting, 4% quorum, and 66% supermajority. Subject to 48-hour timelock and security council review.' },
              { id: 'tip', title: 'TIP — Treasury Improvement Proposal', content: 'Requests for treasury fund disbursement: grants, partnerships, bug bounties, operational expenses. Standard token-weighted voting, 2% quorum, simple majority (>50%). Expenditures over $50,000 require MIP-level governance.' },
              { id: 'gip', title: 'GIP — Governance Improvement Proposal', content: 'Changes to the governance process itself: quorum thresholds, voting periods, proposal requirements, delegate rules. Requires 5% quorum and 75% supermajority to prevent governance capture.' },
              { id: 'temp', title: 'Temperature Check', content: 'Non-binding sentiment polls to gauge community interest before drafting formal proposals. No quorum required. Open for 72 hours. Results inform but do not bind any action.' },
            ].map((p) => (
              <AccordionItem key={p.id} value={p.id} className="glass-card border-primary/20 rounded-lg px-4">
                <AccordionTrigger className="text-sm font-semibold hover:no-underline">{p.title}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{p.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Founder Control Clause */}
        <section className="mb-16">
          <Card className="glass-card border-yellow-500/30 bg-yellow-500/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-400" /> Founder Control Clause
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>
                Per the operating agreement, the founding team retains a <strong className="text-foreground">mandatory 7-year control clause</strong> (2025–2032) over all product development decisions. During this period:
              </p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">▸</span> The security council (founder-appointed) holds veto power over proposals that could compromise platform integrity.</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">▸</span> Equity investors (7%–49% tiers) have advisory votes but cannot override founder decisions on core architecture.</li>
                <li className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">▸</span> The 75/25 creator revenue split is locked and cannot be altered by governance during this period.</li>
              </ul>
              <p className="text-xs text-muted-foreground/70 pt-2">
                After the 7-year term, full governance authority transfers to the DAO as described in Phase 3 of the roadmap.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Governance;
