import { useState } from 'react';
import { Heart, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface DonationButtonProps {
  variant?: 'fixed' | 'inline';
  size?: 'sm' | 'lg';
}

const PayPalIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
  </svg>
);

export const DonationButton = ({ variant = 'fixed', size = 'lg' }: DonationButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleStripeDonate = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-donation');
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (err: any) {
      toast.error('Could not start donation. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap gap-2">
        <Button
          size={size}
          onClick={handleStripeDonate}
          disabled={loading}
          className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold"
        >
          <CreditCard className="w-4 h-4 mr-2" />
          {loading ? 'Loading…' : 'Donate (Card)'}
        </Button>
        <Button
          asChild
          size={size}
          className="bg-[hsl(210,80%,50%)] hover:bg-[hsl(210,80%,40%)] text-white font-bold"
        >
          <a href="https://paypal.me/jstrongman47" target="_blank" rel="noopener noreferrer">
            <PayPalIcon /> <span className="ml-2">PayPal</span>
          </a>
        </Button>
        <Button
          asChild
          size={size}
          variant="outline"
          className="border-rainbow-red/50 text-rainbow-red hover:bg-rainbow-red/10 font-bold"
        >
          <a href="https://www.gofundme.com/f/Ltsanp" target="_blank" rel="noopener noreferrer">
            <Heart className="w-4 h-4 mr-2" /> GoFundMe
          </a>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
      <Button
        size="lg"
        onClick={handleStripeDonate}
        disabled={loading}
        className="bg-cosmic-gold hover:bg-cosmic-gold/90 text-black font-bold shadow-lg cosmic-glow rounded-full px-6"
      >
        <CreditCard className="w-5 h-5 mr-2" />
        {loading ? 'Loading…' : 'Donate'}
      </Button>
      <Button
        asChild
        size="sm"
        className="bg-[hsl(210,80%,50%)] hover:bg-[hsl(210,80%,40%)] text-white font-bold rounded-full px-4 shadow-lg"
      >
        <a href="https://paypal.me/jstrongman47" target="_blank" rel="noopener noreferrer">
          <PayPalIcon /> <span className="ml-2">PayPal</span>
        </a>
      </Button>
    </div>
  );
};
