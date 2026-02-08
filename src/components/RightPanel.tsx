import { Link } from 'react-router-dom';
import { 
  Globe, 
  Coins, 
  Briefcase, 
  Shield, 
  Heart,
  Mail,
  ExternalLink,
  Tv,
  MapPin,
  PanelRight,
  Users,
  MessageCircle,
  Video,
  Calendar,
  Wallet,
  Image,
  Music,
  Coffee,
  Shirt
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { VersionBadge, FeatureStatus } from '@/components/socialuniverse/VersionBadge';

export const RightPanel = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed right-4 top-20 z-40 h-10 w-10 rounded-full glass-card cosmic-glow"
          aria-label="Open right panel"
        >
          <PanelRight className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 sm:w-96 p-0 cosmic-bg border-l border-border/30">
        <SheetHeader className="p-4 border-b border-border/30">
          <SheetTitle className="rainbow-text">Platform Hub</SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-4 space-y-4">
            {/* LTSU - Social Universe V1 (FIRST) */}
            <Link to="/socialuniverse" className="block">
              <Card className="glass-card border-rainbow-green/30 cursor-pointer hover:border-rainbow-green/60 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg text-rainbow-green">
                      <Globe className="w-5 h-5" />
                      LTSU
                    </CardTitle>
                    <VersionBadge version="v1" />
                  </div>
                  <p className="text-xs text-foreground/80">LTSocial Universe - Core Platform</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <FeatureStatus label="4-Tier Marketplace (Public, Homies, Friendlies, Inner Circle)" active />
                    <FeatureStatus label="Paid Posting (OnlyFans-style)" active />
                    <FeatureStatus label="Messaging" active />
                    <FeatureStatus label="Live Stream Tipping" active />
                    <FeatureStatus label="Calendar Events" active />
                    <FeatureStatus label="LTRealityStream Gallery" active />
                    <FeatureStatus label="RC Token Wallet" active />
                  </div>
                  
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="subscriptions" className="border-border/30">
                      <AccordionTrigger className="text-sm py-2 text-foreground">Subscription Tiers</AccordionTrigger>
                      <AccordionContent className="text-xs text-foreground/80 space-y-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <p className="font-semibold text-foreground">Viewer - $10/mo</p>
                          <ul className="mt-1 space-y-1">
                            <li>• Earn share of platform revenue watching Homies' streams</li>
                            <li>• Revenue divided by active viewer count</li>
                            <li>• Requirement: 8hrs/week activity</li>
                            <li>• Sunday 10am check-in required</li>
                          </ul>
                        </div>
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <p className="font-semibold text-foreground">Self-Celebrity - $20/mo</p>
                          <ul className="mt-1 space-y-1">
                            <li>• Pay-to-post tool access</li>
                            <li>• 10% withdrawal fee on earnings</li>
                            <li>• 5% goes to viewer bonus pool</li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Link to="/gallery" className="flex items-center gap-2 text-xs text-primary hover:underline">
                    <Image className="w-3 h-3" />
                    <Video className="w-3 h-3" />
                    <Music className="w-3 h-3" />
                    LTRealityStream Gallery →
                  </Link>
                  
                  <p className="text-xs text-primary">Tap to explore →</p>
                </CardContent>
              </Card>
            </Link>

            {/* LTMN - Miracle Network */}
            <Link to="/miraclemining" className="block">
              <Card className="glass-card border-cosmic-gold/20 cursor-pointer hover:border-cosmic-gold/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg text-cosmic-gold">
                      <Coins className="w-5 h-5" />
                      LTMN
                    </CardTitle>
                    <VersionBadge version="v2" />
                  </div>
                  <p className="text-xs text-foreground/80">Miracle Network</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-foreground/70">
                    <MapPin className="w-3 h-3" />
                    Location Sharing & Live Event Hub
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="crypto" className="border-border/30">
                      <AccordionTrigger className="text-sm py-2 text-foreground">Blockchain & Crypto</AccordionTrigger>
                      <AccordionContent className="text-xs text-foreground/80 space-y-1">
                        <p>• Reality Coin ($1 stable, 365T cap)</p>
                        <p>• Miracle Coin ($1M target, 777T cap)</p>
                        <p>• Shift Coin Protocol</p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="mining" className="border-border/30">
                      <AccordionTrigger className="text-sm py-2 text-foreground">Mining Levels</AccordionTrigger>
                      <AccordionContent className="text-xs text-foreground/80 space-y-1">
                        <p><strong>Bronze:</strong> $1 (80% creator, 20% platform)</p>
                        <p><strong>Silver:</strong> $2 (40% creator, 35% viewers, 25% platform)</p>
                        <p className="mt-2">Sustainable mining via File Sharing Protocol</p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <p className="text-xs text-primary mt-2">Tap to explore →</p>
                </CardContent>
              </Card>
            </Link>

            {/* LTR - Love Transcends Reality Network */}
            <Link to="/ltsumn" className="block">
              <Card className="glass-card border-rainbow-violet/30 cursor-pointer hover:border-rainbow-violet/60 transition-colors">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-lg rainbow-text">
                      <Tv className="w-5 h-5" />
                      LTR Network
                    </CardTitle>
                    <VersionBadge version="v3" />
                  </div>
                  <p className="text-xs text-foreground/80">Love Transcends Reality: Master Mining Miracle Hub</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-xs text-foreground/70">
                    AI Media Gallery • LTTV Live Streams • Music Drops • YouTube, Twitch, Spotify, RSS Integration
                  </p>
                  
                  <div className="space-y-2">
                    <FeatureStatus label="Social Feed (tip to share)" active />
                    <FeatureStatus label="Paywalls" active />
                    <FeatureStatus label="Messaging" active />
                    <FeatureStatus label="Digital & AI Goods" active />
                    <FeatureStatus label="RC Wallet (1:1.75 in, 75c/25c out)" active />
                  </div>
                  
                  <p className="text-xs text-primary">Tap to explore →</p>
                </CardContent>
              </Card>
            </Link>

            {/* iAGuardian Security */}
            <Card className="glass-card border-rainbow-blue/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg text-rainbow-blue">
                  <Shield className="w-5 h-5" />
                  iAGuardian Security
                </CardTitle>
                <p className="text-xs text-foreground/70">(Formerly Operation OneCode)</p>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="font-semibold text-foreground">Threat, Fraud & Danger Protector</p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="workflow" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2 text-foreground">Workflow Pipeline</AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80">
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
                    <AccordionTrigger className="text-sm py-2 text-foreground">Features</AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80 space-y-1">
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
            <Link to="/investors" className="block">
              <Card className="glass-card border-cosmic-teal/20 cursor-pointer hover:border-cosmic-teal/50 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-cosmic-teal">
                    <Briefcase className="w-5 h-5" />
                    Partnership & Investing
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <ul className="text-xs text-foreground/80 space-y-1">
                    <li>• Financial projections & business documents</li>
                    <li>• 7-49% equity investment pathways</li>
                    <li>• $3B valuation target</li>
                    <li>• 7-year founder control clause</li>
                  </ul>
                  <p className="text-xs text-primary mt-2">Tap to view opportunities →</p>
                </CardContent>
              </Card>
            </Link>

            {/* LTOpportunity */}
            <Card className="glass-card border-cosmic-gold/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg text-cosmic-gold">
                  <Briefcase className="w-5 h-5" />
                  LTOpportunity
                </CardTitle>
                <p className="text-xs text-foreground/70">Business & Commerce Ventures</p>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="ltcakecafe" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2 text-foreground">
                      <span className="flex items-center gap-2">
                        <Coffee className="w-4 h-4 text-cosmic-gold" />
                        LTCakeCafe
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80 space-y-1">
                      <p>• Not-for-profit cafe & art space</p>
                      <p>• Live music & performance venue</p>
                      <p>• Community workshops & events</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="ltthrifty" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2 text-foreground">
                      <span className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-cosmic-purple" />
                        LTThrifty
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80 space-y-1">
                      <p>• Sustainable commerce & thrift</p>
                      <p>• Eco-friendly shopping</p>
                      <p>• Community donations hub</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="ltapparel" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2 text-foreground">
                      <span className="flex items-center gap-2">
                        <Shirt className="w-4 h-4 text-cosmic-teal" />
                        LTApparel
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80 space-y-1">
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
                  className="flex items-center gap-2 text-sm text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  rainbowstrongman@ltsocial.net
                </a>
                
                <Button 
                  asChild 
                  className="w-full cosmic-button text-white"
                >
                  <a 
                    href="https://www.gofundme.com/f/love-transcends-reality-llc"
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
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
