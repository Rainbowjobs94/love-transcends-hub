import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, AlertTriangle } from 'lucide-react';

interface ReserveEntry {
  amount: number;
  unlockDate: string;
  claimDeadline: string;
  status: 'locked' | 'claimable' | 'expired';
}

interface MiningReservesProps {
  lockedBalance: number;
  entries: ReserveEntry[];
}

const statusStyles = {
  locked: {
    border: 'border-l-cosmic-purple',
    bg: 'bg-cosmic-purple/5',
    badge: 'bg-cosmic-purple/20 text-cosmic-purple',
    label: '🔒 Locked',
  },
  claimable: {
    border: 'border-l-rainbow-green',
    bg: 'bg-rainbow-green/5',
    badge: 'bg-rainbow-green/20 text-rainbow-green',
    label: '✅ Claimable Now',
  },
  expired: {
    border: 'border-l-destructive',
    bg: 'bg-destructive/5',
    badge: 'bg-destructive/20 text-destructive',
    label: '❌ Expired',
  },
};

const MiningReserves = ({ lockedBalance, entries }: MiningReservesProps) => {
  return (
    <Card className="glass-card border-border/30 mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Lock className="w-5 h-5 text-cosmic-purple" /> Locked Reserves
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Warning */}
        <div className="p-3 rounded-lg bg-cosmic-gold/10 border border-cosmic-gold/20">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-cosmic-gold mt-0.5 shrink-0" />
            <p className="text-xs text-muted-foreground">
              50% of all mined MCL is locked until the next unlock date. You must claim within
              <strong> 7 days</strong> of unlock or coins are <strong>redistributed</strong>.
            </p>
          </div>
        </div>

        {entries.length === 0 ? (
          <p className="text-sm text-muted-foreground text-center py-4">
            No locked reserves yet. Start mining to build your MCL reserve.
          </p>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {entries.map((entry, i) => {
              const style = statusStyles[entry.status];
              return (
                <div
                  key={i}
                  className={`p-3 rounded-lg border-l-4 ${style.border} ${style.bg}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-lg font-bold text-foreground">
                      {entry.amount.toFixed(4)} MCL
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${style.badge}`}>
                      {style.label}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground space-y-0.5">
                    <p>Unlock: {new Date(entry.unlockDate).toLocaleDateString()}</p>
                    <p>Claim by: {new Date(entry.claimDeadline).toLocaleDateString()}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Split Info */}
        <div className="grid grid-cols-2 gap-2 text-center text-xs pt-2">
          <div className="p-2 rounded-lg bg-background/30">
            <p className="text-muted-foreground">Split Ratio</p>
            <p className="font-semibold text-foreground">50 / 50</p>
          </div>
          <div className="p-2 rounded-lg bg-background/30">
            <p className="text-muted-foreground">Lock Period</p>
            <p className="font-semibold text-foreground">3 Years</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MiningReserves;
