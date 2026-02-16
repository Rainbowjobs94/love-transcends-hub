import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Shield, FileText, Copyright, Scale, Users, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      <StarField />

      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <section className="text-center mb-12">
            <Shield className="w-16 h-16 text-accent mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="rainbow-text">Privacy, Terms & Legal</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Privacy policy, terms of service, data handling practices & intellectual property protections.
            </p>
            <div className="cosmic-divider w-48 mx-auto mt-6" />
          </section>

          {/* Trademarks & Copyrights */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Copyright className="w-8 h-8 text-cosmic-gold" />
              <h2 className="text-2xl font-bold text-foreground">Trademarks & Copyrights</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                © 2013–2026 Love Transcends Reality Network, LLC. All rights reserved.
              </p>
              <p>
                The following names, logos, and marks are registered trademarks or trademarks of
                Love Transcends Reality Network, LLC and its affiliates, protected under U.S. and
                international trademark law since their respective dates of first use in commerce:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-foreground">Love Transcends Reality™</strong> — First use in commerce: 2013</li>
                <li><strong className="text-foreground">LTReality™</strong> — Digital ecosystem and master hub platform</li>
                <li><strong className="text-foreground">LTSocialUniverse™</strong> — IaGuardian Protected Family Network</li>
                <li><strong className="text-foreground">LTSocial™</strong> — Social networking services</li>
                <li><strong className="text-foreground">LTMiracleMining™</strong> — Blockchain mining and IP protection services</li>
                <li><strong className="text-foreground">Miracle Network™</strong> — Cryptocurrency and smart contract platform</li>
                <li><strong className="text-foreground">Shift Coin Protocol™</strong> — Multi-chain cryptocurrency protocol</li>
                <li><strong className="text-foreground">Reality Coin (RC)™</strong> — Stable-value digital currency</li>
                <li><strong className="text-foreground">Miracle Coin™</strong> — High-growth digital asset</li>
                <li><strong className="text-foreground">IaGuardian™</strong> — AI-powered content moderation and safety system</li>
                <li><strong className="text-foreground">IaRainbowGuardian™</strong> — AI safety and family protection technology</li>
                <li><strong className="text-foreground">Rainbow Jobs™</strong> — Employment and opportunity platform</li>
                <li><strong className="text-foreground">LTCare™</strong> — Home recovery and wellness services</li>
                <li><strong className="text-foreground">LTRecovery™</strong> — Mental health support services</li>
                <li><strong className="text-foreground">LTShelter™</strong> — Housing assistance services</li>
                <li><strong className="text-foreground">LTThrifty™</strong> — Commerce and marketplace</li>
                <li><strong className="text-foreground">LTApparel™</strong> — Merchandise and branded goods</li>
                <li><strong className="text-foreground">BioNexus Protocol™</strong> — Genetic identity verification system</li>
              </ul>
              <p>
                All associated logos, icons, taglines, and brand elements are the exclusive property
                of Love Transcends Reality Network, LLC. Unauthorized use, reproduction, or
                distribution of these marks is strictly prohibited and may result in legal action.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-rainbow-blue" />
              <h2 className="text-2xl font-bold text-foreground">Privacy Policy</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Effective Date:</strong> January 1, 2024 &nbsp;|&nbsp; <strong className="text-foreground">Last Updated:</strong> February 15, 2026</p>

              <h3 className="text-lg font-semibold text-foreground mt-6">1. Information We Collect</h3>
              <p>We may collect the following types of information when you use our platforms:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Account registration data (name, email, password)</li>
                <li>Profile information you choose to provide</li>
                <li>Usage data and analytics (pages visited, features used)</li>
                <li>Device and browser information</li>
                <li>Mining activity and wallet balances</li>
                <li>Communication preferences</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">2. How We Use Your Information</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and mining rewards</li>
                <li>To personalize your experience across our platforms</li>
                <li>To communicate updates, security alerts, and support</li>
                <li>To enforce our Terms of Service and protect user safety</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">3. IaGuardian & AI Safety</h3>
              <p>
                Our IaGuardian AI system monitors public content for safety purposes, including
                detecting harmful material, harassment, and policy violations. IaGuardian does
                not access private messages or encrypted communications. All AI moderation
                decisions can be appealed through our support channels.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">4. Data Sharing & Third Parties</h3>
              <p>
                We do not sell your personal data. We may share limited information with trusted
                service providers who assist in operating our platforms, subject to strict
                confidentiality agreements. We may disclose information when required by law or
                to protect the rights and safety of our users.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">5. Data Security</h3>
              <p>
                We implement industry-standard encryption, secure authentication, and regular
                security audits to protect your data. Blockchain transactions are secured through
                the Late Ledger Hash verification system. Despite our best efforts, no method
                of transmission over the Internet is 100% secure.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">6. Children's Privacy</h3>
              <p>
                Our family-first platforms include robust parental controls. Users under 13
                require verified parental consent. We comply with COPPA and equivalent
                international regulations for children's data protection.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">7. Your Rights</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Access and download your personal data</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your account and data</li>
                <li>Opt out of non-essential communications</li>
                <li>Data portability to other services</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">8. Cookies & Tracking</h3>
              <p>
                We use essential cookies for authentication and session management. Analytics
                cookies help us improve our services. You may adjust cookie preferences in your
                browser settings.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">9. Changes to This Policy</h3>
              <p>
                We may update this policy periodically. Significant changes will be communicated
                via email or platform notification. Continued use of our services constitutes
                acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* Data Handling Practices */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-cosmic-teal" />
              <h2 className="text-2xl font-bold text-foreground">Data Handling Practices</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <h3 className="text-lg font-semibold text-foreground">Data Retention</h3>
              <p>
                Account data is retained for the duration of your active membership. Mining transaction
                records are maintained permanently as an immutable audit trail required for blockchain
                integrity. Upon account deletion, personal data is purged within 30 days, while
                anonymized analytics data may be retained for service improvement.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">Data Storage & Encryption</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>All data at rest is encrypted using AES-256-GCM with per-user key derivation</li>
                <li>Data in transit is protected via TLS 1.3 on all endpoints</li>
                <li>Wallet keys and authentication tokens are stored using industry-standard vault services</li>
                <li>Database access is governed by Row Level Security (RLS) policies ensuring users can only access their own data</li>
                <li>Admin audit logs are append-only and cannot be modified or deleted</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">Data Processing Locations</h3>
              <p>
                Your data is processed on secure cloud infrastructure located in the United States.
                We do not transfer personal data to jurisdictions without adequate data protection
                laws unless required by law or with your explicit consent.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">Third-Party Sub-Processors</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong className="text-foreground">Authentication & Database:</strong> Cloud-hosted backend services with SOC 2 Type II compliance</li>
                <li><strong className="text-foreground">AI Processing:</strong> AI models process queries in real-time without persistent storage of conversation data beyond active sessions</li>
                <li><strong className="text-foreground">Payment Processing:</strong> PCI-DSS Level 1 certified payment providers; we never store full card numbers</li>
                <li><strong className="text-foreground">Analytics:</strong> Anonymized usage metrics only; no personally identifiable information is shared</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">Breach Notification</h3>
              <p>
                In the event of a data breach affecting your personal information, we will notify
                affected users within 72 hours via email and platform notification, in accordance
                with applicable breach notification laws.
              </p>
            </div>
          </section>

          {/* Terms of Service */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-rainbow-orange" />
              <h2 className="text-2xl font-bold text-foreground">Terms of Service</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Effective Date:</strong> January 1, 2024 &nbsp;|&nbsp; <strong className="text-foreground">Last Updated:</strong> February 15, 2026</p>

              <h3 className="text-lg font-semibold text-foreground mt-6">1. Acceptance of Terms</h3>
              <p>
                By accessing or using any Love Transcends Reality Network platform, including but not
                limited to LTReality, LTSocialUniverse, MiracleMining, and associated services, you
                agree to be bound by these Terms of Service. If you do not agree, you must not use our services.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">2. Eligibility</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You must be at least 18 years of age to create an account and use mining features</li>
                <li>Users aged 13–17 may access social features with verified parental consent</li>
                <li>Users under 13 require full parental supervision in compliance with COPPA</li>
                <li>KYC verification is required for MiracleCoin (MCL) token claims and withdrawals</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">3. User Accounts & Responsibilities</h3>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials.
                You agree not to share your login information or allow unauthorized access to your
                account. You must immediately notify us of any unauthorized use.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">4. Mining & Digital Assets</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>MiracleCoin (MCL) mining rewards are subject to the 50/50 payout split: 50% liquid, 50% locked in reserve until unlock milestones</li>
                <li>Mining activity is monitored for fraud prevention; automated or bot-driven mining is prohibited</li>
                <li>Reserve unlock follows a 3-year graduated schedule (10% Year 1, 30% Year 2, 60% Year 3)</li>
                <li>Early withdrawal from reserves incurs a 15% penalty redistributed to the staking pool</li>
                <li>A 7% platform fee applies to all payouts; 5% of revenue supports the Viewer Bonus Pool</li>
                <li>MCL values are not guaranteed; digital asset values may fluctuate</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">5. Prohibited Conduct</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Attempting to exploit, hack, or reverse-engineer any platform systems</li>
                <li>Creating multiple accounts to circumvent mining limits (sybil attacks)</li>
                <li>Wash trading or artificial inflation of mining metrics</li>
                <li>Posting harmful, abusive, or illegal content</li>
                <li>Circumventing IaGuardian safety systems</li>
                <li>Using automated tools or bots without authorization</li>
              </ul>

              <h3 className="text-lg font-semibold text-foreground mt-6">6. Intellectual Property</h3>
              <p>
                All content, software, algorithms, and designs on our platforms are protected by
                copyright, trademark, and IP laws. Creator content remains the property of its
                creator; by posting, you grant Love Transcends Reality Network a limited license
                for display and distribution within the LT ecosystem.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">7. Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, Love Transcends Reality Network, LLC and
                its officers, directors, and employees shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your use of our services,
                including but not limited to loss of digital assets, mining rewards, or data.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">8. Disclaimers</h3>
              <p>
                Our services are provided "as is" without warranties of any kind. We do not guarantee
                uninterrupted service availability, mining reward rates, or the future value of MCL
                tokens. Past performance does not indicate future results.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">9. Dispute Resolution</h3>
              <p>
                Any disputes arising from these Terms shall be resolved through binding arbitration
                in accordance with the rules of the American Arbitration Association. You waive any
                right to participate in a class action lawsuit. Disputes must be filed within one
                year of the event giving rise to the claim.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">10. Termination</h3>
              <p>
                We reserve the right to suspend or terminate accounts that violate these Terms.
                Upon termination, your right to use the platform ceases immediately. Accrued
                mining rewards in liquid balance may be claimed within 90 days of termination;
                reserved balances remain subject to unlock schedules.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">11. Governing Law</h3>
              <p>
                These Terms are governed by and construed in accordance with the laws of the
                United States. Any legal proceedings shall be conducted in the courts of competent
                jurisdiction within the state of incorporation.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6">12. Modifications</h3>
              <p>
                We may modify these Terms at any time. Material changes will be communicated via
                email or platform notice at least 30 days before taking effect. Continued use
                after the effective date constitutes acceptance.
              </p>
            </div>
          </section>

          {/* Legal & IP */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-rainbow-violet" />
              <h2 className="text-2xl font-bold text-foreground">Intellectual Property Notice</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                All content, software, algorithms, designs, artwork, text, graphics, and other
                materials available through Love Transcends Reality Network platforms are
                protected by copyright, trademark, patent, trade secret, and other intellectual
                property laws.
              </p>
              <p>
                The Shift Coin Protocol, BioNexus Protocol, IaGuardian technology, and all
                associated smart contracts represent proprietary innovations protected under
                applicable intellectual property laws since their respective creation dates.
              </p>
              <p>
                Creator content shared on our platforms remains the intellectual property of its
                respective creators. By using our services, creators grant a limited license for
                display and distribution within the LT ecosystem as outlined in our Terms of
                Service.
              </p>
              <p className="text-foreground font-medium">
                For licensing inquiries, trademark usage requests, or IP concerns, contact:{' '}
                <a href="mailto:Rainbow@rainbowjobs.love" className="text-accent hover:underline">
                  Rainbow@rainbowjobs.love
                </a>{' '}or{' '}
                <a href="mailto:Johnjasper@rainbowjobs.love" className="text-accent hover:underline">
                  Johnjasper@rainbowjobs.love
                </a>
              </p>
            </div>
          </section>

          {/* Contact & Team */}
          <section className="glass-card rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-rainbow-green" />
              <h2 className="text-2xl font-bold text-foreground">Contact & Team</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-background/30 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">Rainbow Strongman</h3>
                <p className="text-sm text-accent mb-2">Founder & CEO</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Survivor, visionary, and advocate for family-first technology.
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>📧 Rainbow@rainbowjobs.love</p>
                  <p>📧 Rainbowstrongman@ltsocial.net</p>
                  <p>📞 369-888-1001</p>
                </div>
                <Link to="/rainbow-strongman" className="inline-block mt-3 text-accent hover:underline text-sm">
                  View Full Bio →
                </Link>
              </div>
              <div className="p-4 rounded-xl bg-background/30 border border-border/30">
                <h3 className="font-semibold text-foreground mb-2">John Strongman</h3>
                <p className="text-sm text-cosmic-gold mb-2">Co-Founder & Legacy Advisor</p>
                <p className="text-muted-foreground text-sm mb-3">
                  46-year World Bank leader and humanitarian.
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>📧 Johnjasper@rainbowjobs.love</p>
                  <p>📞 369-888-1002</p>
                </div>
                <Link to="/john-strongman" className="inline-block mt-3 text-cosmic-gold hover:underline text-sm">
                  View Full Bio →
                </Link>
              </div>
            </div>
          </section>

          {/* Back */}
          <div className="text-center mt-8">
            <Link to="/" className="text-accent hover:underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
