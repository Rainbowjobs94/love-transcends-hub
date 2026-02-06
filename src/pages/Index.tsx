import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { AboutSection } from '@/components/landing/AboutSection';
import { JohnStrongmanTribute } from '@/components/landing/JohnStrongmanTribute';
import { ContactSection } from '@/components/landing/ContactSection';
import { SubSitesSection } from '@/components/landing/SubSitesSection';
import { ShiftCoinPreview } from '@/components/landing/ShiftCoinPreview';
import { InvestorPreview } from '@/components/landing/InvestorPreview';

const Index = () => {
  return (
    <div className="min-h-screen cosmic-bg">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div className="cosmic-divider" />
        <AboutSection />
        
        <div className="cosmic-divider" />
        <JohnStrongmanTribute />
        
        <div className="cosmic-divider" />
        <ShiftCoinPreview />
        
        <div className="cosmic-divider" />
        <InvestorPreview />
        
        <div className="cosmic-divider" />
        <SubSitesSection />
        
        <div className="cosmic-divider" />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
