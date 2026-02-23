import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BANNER_DISMISSED_KEY = 'privacy-banner-dismissed-v2';

export const PrivacyPolicyBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(BANNER_DISMISSED_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(BANNER_DISMISSED_KEY, 'true');
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card rounded-xl p-4 md:p-5 border border-cosmic-teal/30 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Shield className="w-5 h-5 text-cosmic-teal shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-sm text-muted-foreground flex-1">
            We've updated our <strong className="text-foreground">Privacy Policy & Mining Terms</strong> with new tokenomics, eligibility, and liability terms effective Feb 2026.
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <Button asChild size="sm" variant="outline" className="border-cosmic-teal/50 text-cosmic-teal hover:bg-cosmic-teal/10 h-8 text-xs">
              <Link to="/privacy" onClick={dismiss}>Review Policy</Link>
            </Button>
            <button
              onClick={dismiss}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
