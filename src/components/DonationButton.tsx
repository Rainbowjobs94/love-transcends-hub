import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DonationButtonProps {
  variant?: 'fixed' | 'inline';
  size?: 'sm' | 'lg';
}

export const DonationButton = ({ variant = 'fixed', size = 'lg' }: DonationButtonProps) => {
  if (variant === 'inline') {
    return (
      <Button 
        asChild 
        size={size}
        className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold"
      >
        <a href="https://www.gofundme.com/f/Ltsanp" target="_blank" rel="noopener noreferrer">
          <Heart className="w-4 h-4 mr-2" /> Donate
        </a>
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        asChild 
        size="lg"
        className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold shadow-lg cosmic-glow rounded-full px-6"
      >
        <a href="https://www.gofundme.com/f/Ltsanp" target="_blank" rel="noopener noreferrer">
          <Heart className="w-5 h-5 mr-2 animate-pulse" /> Donate
        </a>
      </Button>
    </div>
  );
};
