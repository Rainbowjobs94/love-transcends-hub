import { Link } from 'react-router-dom';
import { 
  Crown, 
  History, 
  Sparkles, 
  Heart, 
  Mail, 
  ExternalLink,
  Star,
  Dna,
  BookOpen,
  Users,
  PanelLeft,
  Home,
  Coffee,
  Building
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
import rainbowPortrait from '@/assets/about/rainbow-strongman-portrait.jpeg';

export const LeftPanel = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed left-4 top-20 z-40 h-10 w-10 rounded-full glass-card cosmic-glow"
          aria-label="Open left panel"
        >
          <PanelLeft className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 sm:w-96 p-0 cosmic-bg border-r border-border/30">
        <SheetHeader className="p-4 border-b border-border/30">
          <SheetTitle className="rainbow-text">Historic Strongman Legacy</SheetTitle>
        </SheetHeader>
        
        <ScrollArea className="h-[calc(100vh-80px)]">
          <div className="p-4 space-y-4">
            {/* Historic Strongman Legacy - Clickable to /story */}
            <Card className="glass-card border-border/30 cursor-pointer hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg rainbow-text">
                  <Crown className="w-5 h-5" />
                  Founder Legacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Portrait - Clickable to Rainbow's bio */}
                <Link to="/story" className="block">
                  <img 
                    src={rainbowPortrait} 
                    alt="Rainbow Strongman" 
                    className="w-24 h-24 rounded-full mx-auto cosmic-glow object-cover hover:scale-110 transition-transform cursor-pointer"
                  />
                  <p className="text-center text-sm text-foreground mt-2 hover:text-primary transition-colors">
                    Tap to view full bio
                  </p>
                </Link>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="name-origin" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2">
                      <span className="flex items-center gap-2 text-foreground">
                        <Star className="w-4 h-4 text-cosmic-gold" />
                        Name Origin (JJarvex)
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80 space-y-1">
                      <p><strong>John</strong> — Faithful first apostle</p>
                      <p><strong>Jasper</strong> — Foundation stone of heaven</p>
                      <p><strong>River</strong> — Gender-nonconforming flow, River of Life</p>
                      <p><strong>Alexander</strong> — Darkness forgiven</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="astrology" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2">
                      <span className="flex items-center gap-2 text-foreground">
                        <Sparkles className="w-4 h-4 text-cosmic-purple" />
                        Astrology Analysis
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80">
                      Detailed cosmic alignment and birth chart analysis revealing destiny patterns.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="timeline" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2">
                      <span className="flex items-center gap-2 text-foreground">
                        <History className="w-4 h-4 text-cosmic-teal" />
                        Tragic Events Timeline
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80">
                      Survivor journey from 2013 through institutional abuse, trafficking, and transformation into advocacy.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="values" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2">
                      <span className="flex items-center gap-2 text-foreground">
                        <Heart className="w-4 h-4 text-rainbow-red" />
                        Core Values
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80">
                      Compassion, Equity, Community, Justice, Love, Honesty, Transparency, Empathy, Remorse, Inclusivity, Uniqueness, Honor
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="ancestry" className="border-border/30">
                    <AccordionTrigger className="text-sm py-2">
                      <span className="flex items-center gap-2 text-foreground">
                        <Dna className="w-4 h-4 text-rainbow-green" />
                        Ancestry Documentation
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-xs text-foreground/80 space-y-1">
                      <p>• 23andMe DNA verification</p>
                      <p>• King Richard III lineage</p>
                      <p>• Pharaoh Ramesses III (Prince of Egypt)</p>
                      <p>• Spencer Dynasty (Princess Diana)</p>
                      <p>• Connection to Jesus Christ bloodline</p>
                      <p>• Current Royal Family connection</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* LTHistory - Clickable to John Strongman bio */}
            <Link to="/story#john-strongman" className="block">
              <Card className="glass-card border-cosmic-gold/20 cursor-pointer hover:border-cosmic-gold/50 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-cosmic-gold">
                    <BookOpen className="w-5 h-5" />
                    LTHistory
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-2">
                  <p className="font-semibold text-foreground">John Strongman</p>
                  <p className="text-foreground/80">Co-Founder, Inspiration & Living Miracle</p>
                  <p className="text-xs text-foreground/70">46-year World Bank legacy • White House recognition • Saved African women & children</p>
                  <p className="text-xs text-primary mt-2">Tap to view full story →</p>
                </CardContent>
              </Card>
            </Link>

            {/* LTDimensions - Placeholder (not clickable) */}
            <Card className="glass-card border-cosmic-purple/20 opacity-70">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg text-cosmic-purple">
                  <Sparkles className="w-5 h-5" />
                  LTDimensions
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-2">
                <p className="text-foreground/80">AI-generated beta tools</p>
                <p className="text-xs text-foreground/70">DigiGuardians: Virtual companions that will integrate with iAGuardian and appear on location maps.</p>
                <p className="text-xs text-muted-foreground italic">Coming Soon</p>
              </CardContent>
            </Card>

            {/* LTSANP - Clickable to /ltsanp (includes Foster, Care, Housing) */}
            <Link to="/ltsanp" className="block">
              <Card className="glass-card border-rainbow-green/20 cursor-pointer hover:border-rainbow-green/50 transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg text-rainbow-green">
                    <Users className="w-5 h-5" />
                    LTSANP
                  </CardTitle>
                  <p className="text-xs text-foreground/80">Love Transcends Sponsorship & Advertisement Nonprofit</p>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p className="text-foreground/80">Redistribution of boosted shares & tips into community initiatives:</p>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Users className="w-3 h-3 text-rainbow-green" />
                      <span><strong>LTFoster&Recovery</strong> — Therapy, treatment, adoption support</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Heart className="w-3 h-3 text-rainbow-red" />
                      <span><strong>LTCare</strong> — Recovery services, life coaching</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Coffee className="w-3 h-3 text-rainbow-orange" />
                      <span><strong>LTCakeCafe</strong> — Not-for-profit cafe & art space</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Building className="w-3 h-3 text-cosmic-teal" />
                      <span><strong>LTHousing</strong> — Tiny home projects (ETA 2031)</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-primary mt-2">Tap to learn more →</p>
                </CardContent>
              </Card>
            </Link>

            {/* Contact & Donate Combined */}
            <Card className="glass-card border-cosmic-teal/20">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg text-cosmic-teal">
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
