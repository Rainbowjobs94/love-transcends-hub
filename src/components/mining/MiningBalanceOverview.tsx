import { Card, CardContent } from '@/components/ui/card';
import { Coins, Lock, Unlock, Wallet } from 'lucide-react';

interface MiningBalanceOverviewProps {
  totalMined: number;
  availableBalance: number;
  lockedBalance: number;
  claimableBalance: number;
}

const MiningBalanceOverview = ({
  totalMined,
  availableBalance,
  lockedBalance,
  claimableBalance,
}: MiningBalanceOverviewProps) => {
  const cards = [
    {
      icon: Wallet,
      label: 'Available (50%)',
      value: `${availableBalance.toFixed(4)} MCL`,
      color: 'text-cosmic-gold',
      desc: 'Tradeable now',
    },
    {
      icon: Unlock,
      label: 'Claimable',
      value: `${claimableBalance.toFixed(4)} MCL`,
      color: 'text-rainbow-green',
      desc: 'Unlocked — claim within 7 days',
    },
    {
      icon: Lock,
      label: 'Locked (50%)',
      value: `${lockedBalance.toFixed(4)} MCL`,
      color: 'text-cosmic-purple',
      desc: 'Unlocks Dec 31, 2030',
    },
    {
      icon: Coins,
      label: 'Total Value',
      value: `${totalMined.toFixed(4)} MCL`,
      color: 'text-cosmic-teal',
      desc: 'Lifetime mined',
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
      {cards.map((c) => (
        <Card key={c.label} className="glass-card border-border/30">
          <CardContent className="p-4">
            <c.icon className={`w-6 h-6 ${c.color} mb-2`} />
            <p className="text-xl font-bold text-foreground">{c.value}</p>
            <p className="text-xs text-muted-foreground font-medium">{c.label}</p>
            <p className="text-[10px] text-muted-foreground/70 mt-1">{c.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MiningBalanceOverview;
