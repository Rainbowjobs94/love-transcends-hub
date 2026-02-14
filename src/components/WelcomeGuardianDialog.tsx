import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, Sparkles } from 'lucide-react';

const ACCEPTED_KEY = 'ia-rainbow-guardian-accepted';

export const WelcomeGuardianDialog = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(ACCEPTED_KEY)) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem(ACCEPTED_KEY, 'true');
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="glass-card border-primary/30 cosmic-glow max-w-md [&>button]:hidden"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader className="items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 cosmic-glow">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="rainbow-text text-xl">IA Rainbow Guardian</DialogTitle>
        </DialogHeader>

        <div className="text-center space-y-3 py-2">
          <p className="text-foreground text-sm leading-relaxed">
            Hey, my name is <span className="font-semibold rainbow-text">IA Rainbow Guardian</span>. I need you to accept here real quick because you're entering a <span className="font-semibold text-accent">private IP domain</span> that is made public for copyright and trade purposes.
          </p>
          <div className="flex items-center justify-center gap-1 text-muted-foreground text-xs">
            <Sparkles className="w-3 h-3" />
            <span>Love Transcends Reality™</span>
          </div>
        </div>

        <DialogFooter className="sm:justify-center">
          <Button onClick={handleAccept} className="cosmic-button w-full sm:w-auto px-8">
            I Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
