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
  Shield
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import rainbowPortrait from '@/assets/about/rainbow-strongman-portrait.jpeg';

export const LeftSidebar = () => {
  return (
    <aside className="w-full lg:w-80 space-y-4">
      {/* Historic Strongman Legacy */}
      <Card className="glass-card border-border/30">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg rainbow-text">
            <Crown className="w-5 h-5" />
            Historic Strongman Legacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <img 
            src={rainbowPortrait} 
            alt="Rainbow Strongman" 
            className="w-24 h-24 rounded-full mx-auto cosmic-glow object-cover"
          />
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="name-origin" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-cosmic-gold" />
                  Name Origin (JJarvex)
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-1">
                <p><strong>John</strong> — Faithful first apostle</p>
                <p><strong>Jasper</strong> — Foundation stone of heaven</p>
                <p><strong>River</strong> — Gender-nonconforming flow, River of Life</p>
                <p><strong>Alexander</strong> — Darkness forgiven</p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="astrology" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cosmic-purple" />
                  Astrology Analysis
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground">
                Detailed cosmic alignment and birth chart analysis revealing destiny patterns.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="timeline" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">
                <span className="flex items-center gap-2">
                  <History className="w-4 h-4 text-cosmic-teal" />
                  Tragic Events Timeline
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground">
                Survivor journey from 2013 through institutional abuse, trafficking, and transformation into advocacy.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="values" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rainbow-red" />
                  Core Values
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground">
                Compassion, Equity, Community, Justice, Love, Honesty, Transparency, Empathy, Remorse, Inclusivity, Uniqueness, Honor
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="ancestry" className="border-border/30">
              <AccordionTrigger className="text-sm py-2">
                <span className="flex items-center gap-2">
                  <Dna className="w-4 h-4 text-rainbow-green" />
                  Ancestry Documentation
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground space-y-1">
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

      {/* LTHistory */}
      <Card className="glass-card border-cosmic-gold/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-cosmic-gold">
            <BookOpen className="w-5 h-5" />
            LTHistory
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p className="font-semibold text-foreground">John Strongman</p>
          <p>Co-Founder, Inspiration & Living Miracle</p>
          <p className="text-xs">46-year World Bank legacy • White House recognition • Saved African women & children</p>
        </CardContent>
      </Card>

      {/* LTDimensions */}
      <Card className="glass-card border-cosmic-purple/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-cosmic-purple">
            <Sparkles className="w-5 h-5" />
            LTDimensions
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>AI-generated beta tools</p>
          <p className="text-xs">DigiGuardians: Virtual companions that will integrate with IAGuardian and appear on location maps.</p>
        </CardContent>
      </Card>

      {/* LTFoster&Recovery */}
      <Card className="glass-card border-rainbow-green/20">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg text-rainbow-green">
            <Users className="w-5 h-5" />
            LTFoster&Recovery
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <ul className="text-xs space-y-1">
            <li>• Therapy & treatment directory</li>
            <li>• IAGuardian life coaching</li>
            <li>• Ancestry data protection for foster kids</li>
            <li>• Bio family finder & adoption support</li>
            <li>• Network support groups</li>
          </ul>
        </CardContent>
      </Card>

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
