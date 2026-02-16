import { 
  Globe, 
  Coins, 
  Briefcase, 
  Coffee, 
  Shield, 
  Heart,
  Mail,
  ExternalLink,
  Tv,
  MapPin,
  FileText,
  Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { VersionBadge, FeatureStatus } from './VersionBadge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const RightSidebar = () => {
  return (
    <aside className="w-full lg:w-80 space-y-4">
      {/* LTR - Love Transcends Reality Network */}
      <Card className="glass-card border-rainbow-violet/30">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg rainbow-text">
              <Tv className="w-5 h-5" />
              LTR Network
            </CardTitle>
            <VersionBadge version="v1" />
          </div>
          <p className="text-xs text-muted-foreground">Love Transcends Reality: Master Mining Miracle Hub</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs text-muted-foreground">
            AI Media Gallery • LTTV Live Streams • Music Drops • YouTube, Twitch, Spotify, RSS Integration
          </p>
          
          <div className="space-y-2">
            <FeatureStatus label="Social Feed (tip to share)" active />
            <FeatureStatus label="Paywalls" active />
            <FeatureStatus label="Messaging" active />
            <FeatureStatus label="Digital & AI Goods" active />
            <FeatureStatus label="RC Wallet (1:1.75 in, 75c/25c out)" active />
          </div>
          
          <p className="text-xs text-muted-foreground">
            5-Feed System with engagement demotion logic • Calendar integration
          </p>
        </CardContent>
      </Card>

      {/* LTMN - Miracle Network */}
      <Card className="glass-card border-cosmic-gold/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg text-cosmic-gold">
              <Coins className="w-5 h-5" />
              LTMN
            </CardTitle>
            <VersionBadge version="v2" />
          </div>
          <p className="text-xs text-muted-foreground">Miracle Network</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            Location Sharing & Live Event Hub
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="crypto" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">Blockchain & Crypto</AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-1">
                <p>• Reality Coin ($1 stable, 365T cap)</p>
                <p>• Miracle Coin ($1M target, 777T cap)</p>
                <p>• Shift Coin Protocol</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="mining" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">Mining Levels</AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-1">
                <p><strong>Bronze:</strong> $1 (80% creator, 20% platform)</p>
                <p><strong>Silver:</strong> $2 (40% creator, 35% viewers, 25% platform)</p>
                <p className="mt-2">Sustainable mining via File Sharing Protocol</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* LTSU - Social Universe V3 */}
      <Card className="glass-card border-rainbow-red/30">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg text-rainbow-red">
              <Globe className="w-5 h-5" />
              LTSU
            </CardTitle>
            <VersionBadge version="v3" />
          </div>
          <p className="text-xs text-muted-foreground">LTSocial Universe • ETA 2028</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-xs font-semibold text-foreground">Master Network Hub - All Features Demo</p>
          
          <div className="space-y-2">
            <FeatureStatus label="Social Feed" active />
            <FeatureStatus label="Paywalls" active />
            <FeatureStatus label="Messaging" active />
            <FeatureStatus label="Digital & AI Goods" active />
            <FeatureStatus label="Crypto Wallet" active />
          </div>
          
          <p className="text-xs text-muted-foreground">
            5-Feed System • All V1/V2/V3 features included
          </p>
        </CardContent>
      </Card>

      {/* LTCakeCafe */}
      <Card className="glass-card border-rainbow-orange/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-rainbow-orange">
            <Coffee className="w-5 h-5" />
            LTCakeCafe
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p className="font-semibold text-foreground">Not-for-profit Cafe & Art Space</p>
          <ul className="text-xs space-y-1">
            <li>• Specialty drinks & unique culinary experiences</li>
            <li>• Art exhibition space</li>
            <li>• Live music/performance venue</li>
            <li>• Community workshops & creator meetups</li>
          </ul>
        </CardContent>
      </Card>

      {/* iAGuardian Security */}
      <Card className="glass-card border-rainbow-blue/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-rainbow-blue">
            <Shield className="w-5 h-5" />
            iAGuardian Security
          </CardTitle>
          <p className="text-xs text-muted-foreground">(Formerly Operation OneCode)</p>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p className="font-semibold text-foreground">Threat, Fraud & Danger Protector</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="workflow" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">Workflow Pipeline</AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-1 bg-primary/10 rounded">Scan</span>
                  <span>→</span>
                  <span className="px-2 py-1 bg-primary/10 rounded">Flag</span>
                  <span>→</span>
                  <span className="px-2 py-1 bg-primary/10 rounded">Review</span>
                  <span>→</span>
                  <span className="px-2 py-1 bg-primary/10 rounded">Dispute</span>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="features" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">Features</AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-1">
                <p>• Post verification with OneCode receipts</p>
                <p>• Photo/video scanning</p>
                <p>• Repost detection</p>
                <p>• Mining eligibility gates</p>
                <p>• Fine system for violations</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Partnership & Investing */}
      <Card className="glass-card border-cosmic-teal/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-cosmic-teal">
            <Briefcase className="w-5 h-5" />
            Partnership & Investing
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <ul className="text-xs space-y-1">
            <li>• Financial projections & business documents</li>
            <li>• 7-49% equity investment pathways</li>
            <li>• $3B valuation target</li>
            <li>• 7-year founder control clause</li>
          </ul>
        </CardContent>
      </Card>

      {/* LTSANP */}
      <Card className="glass-card border-rainbow-green/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-rainbow-green">
            <Users className="w-5 h-5" />
            LTSANP
          </CardTitle>
          <p className="text-xs text-muted-foreground">Love Transcends Sponsorship & Advertisement Nonprofit</p>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <ul className="text-xs space-y-1">
            <li>• Boosted shares → nonprofit funds</li>
            <li>• Tips redistribution</li>
            <li>• $1.5T annual redistribution goal</li>
            <li>• LTCakes, LTCare, LTHousing, LTCommunity initiatives</li>
          </ul>
        </CardContent>
      </Card>

      {/* LTOpportunity */}
      <Card className="glass-card border-cosmic-gold/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-cosmic-gold">
            <Briefcase className="w-5 h-5" />
            LTOpportunity
          </CardTitle>
          <p className="text-xs text-muted-foreground">Business & Commerce Ventures</p>
        </CardHeader>
        <CardContent className="space-y-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="ltcakecafe" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">
                <span className="flex items-center gap-2">
                  <Coffee className="w-4 h-4 text-rainbow-orange" />
                  LTCakeCafe
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-1">
                <p>• Not-for-profit cafe & art space</p>
                <p>• Live music & performance venue</p>
                <p>• Community workshops & events</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ltthrifty" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rainbow-green" />
                  LTThrifty
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-1">
                <p>• Sustainable commerce & thrift</p>
                <p>• Eco-friendly shopping</p>
                <p>• Community donations hub</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="ltapparel" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-rainbow-violet" />
                  LTApparel
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-1">
                <p>• Wear your support merchandise</p>
                <p>• Mission-driven fashion</p>
                <p>• Proceeds support LT initiatives</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Contact & Donate */}
      <Card className="glass-card border-cosmic-purple/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-cosmic-purple">
            <Mail className="w-5 h-5" />
            Contact & Donate
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <a 
            href="mailto:rainbowstrongman@ltsocial.net"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-4 h-4" />
            rainbowstrongman@ltsocial.net
          </a>
          
          <Button 
            asChild 
            className="w-full cosmic-button text-white"
          >
            <a 
              href="https://www.gofundme.com/f/Ltsanp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Donate via GoFundMe
              <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
};
