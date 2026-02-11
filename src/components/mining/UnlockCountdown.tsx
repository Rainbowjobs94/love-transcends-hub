import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, AlertTriangle, Calendar } from 'lucide-react';

const FIRST_UNLOCK = new Date('2030-12-31T23:59:59Z').getTime();
const UNLOCK_INTERVAL_MS = 3 * 365.25 * 24 * 60 * 60 * 1000;
const CLAIM_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

function getNextUnlockDate(): Date {
  const now = Date.now();
  if (now < FIRST_UNLOCK) return new Date(FIRST_UNLOCK);
  const cyclesPassed = Math.floor((now - FIRST_UNLOCK) / UNLOCK_INTERVAL_MS);
  return new Date(FIRST_UNLOCK + (cyclesPassed + 1) * UNLOCK_INTERVAL_MS);
}

function getCountdown(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UnlockCountdown = () => {
  const [countdown, setCountdown] = useState(getCountdown(getNextUnlockDate()));
  const nextUnlock = getNextUnlockDate();
  const now = Date.now();
  const isInClaimWindow =
    now >= nextUnlock.getTime() - UNLOCK_INTERVAL_MS &&
    now <= nextUnlock.getTime() - UNLOCK_INTERVAL_MS + CLAIM_WINDOW_MS;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(getNextUnlockDate()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const unlockSchedule = [
    { date: 'Dec 31, 2030', window: 'Jan 1-7, 2031', who: 'Mined before Dec 31, 2027' },
    { date: 'Dec 31, 2033', window: 'Jan 1-7, 2034', who: 'Mined Dec 2027 – Dec 2030' },
    { date: 'Dec 31, 2036', window: 'Jan 1-7, 2037', who: 'Mined Dec 2030 – Dec 2033' },
  ];

  return (
    <Card className="glass-card border-cosmic-purple/30 mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Clock className="w-5 h-5 text-cosmic-purple" /> Next Unlock Countdown
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Countdown Display */}
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { label: 'Days', value: countdown.days },
            { label: 'Hours', value: countdown.hours },
            { label: 'Minutes', value: countdown.minutes },
            { label: 'Seconds', value: countdown.seconds },
          ].map((u) => (
            <div key={u.label} className="p-3 rounded-lg bg-background/40 border border-border/20">
              <p className="text-2xl font-bold font-mono text-cosmic-purple">{u.value}</p>
              <p className="text-[10px] text-muted-foreground">{u.label}</p>
            </div>
          ))}
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Next unlock: <span className="text-foreground font-medium">{nextUnlock.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </p>

        {/* Claim Window Warning */}
        <div className="p-3 rounded-lg bg-cosmic-gold/10 border border-cosmic-gold/30">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-cosmic-gold mt-0.5 shrink-0" />
            <div className="text-xs">
              <p className="font-semibold text-cosmic-gold">Critical: 7-Day Claim Window</p>
              <p className="text-muted-foreground mt-1">
                You have <strong>7 days</strong> after each unlock to claim your locked reserves. 
                Missed claims are permanently redistributed to active traders.
              </p>
            </div>
          </div>
        </div>

        {/* Unlock Schedule */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Unlock Schedule
          </p>
          {unlockSchedule.map((s) => (
            <div key={s.date} className="flex items-center justify-between text-xs p-2 rounded bg-background/30">
              <span className="font-medium text-foreground">{s.date}</span>
              <span className="text-muted-foreground">{s.window}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UnlockCountdown;
