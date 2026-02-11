import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, ShieldCheck, Info } from 'lucide-react';

interface TradingStatusProps {
  /** Simulated: last trade timestamp (null if never traded) */
  lastTradeTime: number | null;
}

const TRADE_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const TradingStatus = ({ lastTradeTime }: TradingStatusProps) => {
  const now = Date.now();
  const canTrade = !lastTradeTime || now >= lastTradeTime + TRADE_COOLDOWN_MS;
  const cooldownRemaining = lastTradeTime
    ? Math.max(0, lastTradeTime + TRADE_COOLDOWN_MS - now)
    : 0;

  const daysLeft = Math.ceil(cooldownRemaining / (1000 * 60 * 60 * 24));

  return (
    <Card className="glass-card border-border/30 mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-cosmic-teal" /> Trading Status
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Status Indicator */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-background/30">
          <div
            className={`w-3 h-3 rounded-full ${
              canTrade ? 'bg-rainbow-green animate-pulse' : 'bg-cosmic-gold'
            }`}
          />
          <div>
            <p className="text-sm font-semibold text-foreground">
              {canTrade ? 'Ready to Trade' : 'Cooldown Active'}
            </p>
            <p className="text-[10px] text-muted-foreground">
              {canTrade
                ? 'You can execute one trade this week'
                : `${daysLeft} day${daysLeft !== 1 ? 's' : ''} until next trade window`}
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="flex items-start gap-2 p-2 rounded bg-background/20">
          <Info className="w-3 h-3 text-muted-foreground mt-0.5 shrink-0" />
          <p className="text-[10px] text-muted-foreground">
            Weekly trading limits prevent market manipulation and encourage long-term holding. 
            You may trade MCL on exchanges <strong>once per week</strong>.
          </p>
        </div>

        {/* Protocol Details */}
        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          <div className="p-2 rounded-lg bg-background/30">
            <p className="text-muted-foreground">Cooldown</p>
            <p className="font-semibold text-foreground">7 Days</p>
          </div>
          <div className="p-2 rounded-lg bg-background/30">
            <p className="text-muted-foreground">Protocol</p>
            <p className="font-semibold text-foreground flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-rainbow-green" /> KYC-Gated
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TradingStatus;
