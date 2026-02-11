import { useState, useCallback, useRef, useMemo, useEffect } from 'react';

export type MiningTier = 'bronze' | 'silver';

const FIRST_UNLOCK = new Date('2030-12-31T23:59:59Z').getTime();
const CLAIM_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

export interface ReserveEntry {
  amount: number;
  unlockDate: string;
  claimDeadline: string;
  status: 'locked' | 'claimable' | 'expired';
}

interface LocalWallet {
  rc_balance: number;
  total_mined: number;
  blocks_validated: number;
  current_tier: MiningTier;
}

interface LocalSession {
  id: string;
  started_at: string;
  ended_at: string | null;
  rc_earned: number;
  blocks_mined: number;
  avg_hash_rate: number;
  tier: MiningTier;
}

interface LocalTransaction {
  id: string;
  amount: number;
  type: string;
  block_number: number;
  created_at: string;
}

interface LiveStats {
  hashRate: number;
  currentBlock: number;
  networkDifficulty: number;
  miningProgress: number;
}

const TIER_CONFIG = {
  bronze: { reward: 0.25, baseHash: 30, label: 'Bronze' },
  silver: { reward: 0.50, baseHash: 55, label: 'Silver' },
};

export function useLocalMining() {
  const [wallet, setWallet] = useState<LocalWallet>({
    rc_balance: 0,
    total_mined: 0,
    blocks_validated: 0,
    current_tier: 'bronze',
  });
  const [sessions, setSessions] = useState<LocalSession[]>([]);
  const [transactions, setTransactions] = useState<LocalTransaction[]>([]);
  const [isMining, setIsMining] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM] BioNexus Protocol v2.0 initialized',
    '[SYSTEM] MiracleCoin (MCL) engine ready — 50/50 split active',
    '[NETWORK] Connected to LTR Miracle Network (Polygon)',
    '[SYSTEM] Simulation mode — local state only',
  ]);
  const [liveStats, setLiveStats] = useState<LiveStats>({
    hashRate: 0,
    currentBlock: 100000,
    networkDifficulty: 42.7,
    miningProgress: 0,
  });

  const sessionStartRef = useRef<string | null>(null);
  const sessionEarnedRef = useRef(0);
  const sessionBlocksRef = useRef(0);
  const hashSamplesRef = useRef<number[]>([]);

  const addLog = useCallback((msg: string) => {
    setLogs(prev => [...prev.slice(-50), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  }, []);

  const setTier = useCallback((tier: MiningTier) => {
    setWallet(prev => ({ ...prev, current_tier: tier }));
    addLog(`[SYSTEM] Mining tier changed to ${TIER_CONFIG[tier].label}`);
  }, [addLog]);

  // Mining loop
  useEffect(() => {
    if (!isMining) return;

    const tier = wallet.current_tier;
    const config = TIER_CONFIG[tier];

    const interval = setInterval(() => {
      setLiveStats(prev => {
        const newProgress = prev.miningProgress + Math.random() * (tier === 'silver' ? 12 : 8) + 2;

        if (newProgress >= 100) {
          const blockNum = prev.currentBlock + 1;
          const reward = config.reward;

          sessionEarnedRef.current += reward;
          sessionBlocksRef.current += 1;

          setTransactions(t => [{
            id: crypto.randomUUID(),
            amount: reward,
            type: 'block_reward',
            block_number: blockNum,
            created_at: new Date().toISOString(),
          }, ...t].slice(0, 20));

          setWallet(w => ({
            ...w,
            rc_balance: +(w.rc_balance + reward).toFixed(4),
            total_mined: +(w.total_mined + reward).toFixed(4),
            blocks_validated: w.blocks_validated + 1,
          }));

          addLog(`[MINER] Block #${blockNum} validated — +${reward} MCL earned (50% immediate)`);

          return {
            ...prev,
            miningProgress: 0,
            currentBlock: blockNum,
            hashRate: +(Math.random() * 15 + config.baseHash).toFixed(1),
            networkDifficulty: +(42 + Math.random() * 3).toFixed(1),
          };
        }

        const newHash = +(Math.random() * 15 + config.baseHash).toFixed(1);
        hashSamplesRef.current.push(newHash);

        return {
          ...prev,
          miningProgress: newProgress,
          hashRate: newHash,
          networkDifficulty: +(42 + Math.random() * 3).toFixed(1),
        };
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isMining, wallet.current_tier, addLog]);

  const startMining = useCallback(() => {
    sessionEarnedRef.current = 0;
    sessionBlocksRef.current = 0;
    hashSamplesRef.current = [];
    sessionStartRef.current = new Date().toISOString();

    setIsMining(true);
    setLiveStats(s => ({ ...s, miningProgress: 0 }));
    addLog('[MINER] Mining engine started — MiracleCoin Protocol v2 active');
    addLog('[NETWORK] Auto-selecting optimal blockchain route (Polygon)...');
    addLog(`[NETWORK] Tier: ${TIER_CONFIG[wallet.current_tier].label} — ${TIER_CONFIG[wallet.current_tier].reward} MCL/block (50/50 split)`);
  }, [wallet.current_tier, addLog]);

  const stopMining = useCallback(() => {
    setIsMining(false);

    const avgHash = hashSamplesRef.current.length > 0
      ? +(hashSamplesRef.current.reduce((a, b) => a + b, 0) / hashSamplesRef.current.length).toFixed(1)
      : 0;

    const session: LocalSession = {
      id: crypto.randomUUID(),
      started_at: sessionStartRef.current ?? new Date().toISOString(),
      ended_at: new Date().toISOString(),
      rc_earned: sessionEarnedRef.current,
      blocks_mined: sessionBlocksRef.current,
      avg_hash_rate: avgHash,
      tier: wallet.current_tier,
    };

    setSessions(prev => [session, ...prev].slice(0, 10));
    addLog(`[STATS] Session: ${sessionEarnedRef.current.toFixed(4)} MCL | ${sessionBlocksRef.current} blocks | avg ${avgHash} MH/s`);
    addLog('[MINER] Mining engine stopped');
    sessionStartRef.current = null;
  }, [wallet.current_tier, addLog]);

  const mclBalances = useMemo(() => {
    const totalMined = wallet.total_mined;
    const available = totalMined * 0.5;
    const locked = totalMined * 0.5;
    const claimable = 0;

    const reserveEntries: ReserveEntry[] = sessions.map(s => {
      const reserveAmt = s.rc_earned * 0.5;
      const unlockDate = new Date(FIRST_UNLOCK).toISOString();
      const claimDeadline = new Date(FIRST_UNLOCK + CLAIM_WINDOW_MS).toISOString();
      const now = Date.now();
      let status: ReserveEntry['status'] = 'locked';
      if (now >= FIRST_UNLOCK && now <= FIRST_UNLOCK + CLAIM_WINDOW_MS) status = 'claimable';
      else if (now > FIRST_UNLOCK + CLAIM_WINDOW_MS) status = 'expired';
      return { amount: reserveAmt, unlockDate, claimDeadline, status };
    }).filter(e => e.amount > 0);

    return { totalMined, available, locked, claimable, reserveEntries };
  }, [wallet.total_mined, sessions]);

  return {
    wallet,
    walletLoading: false,
    sessions,
    transactions,
    isMining,
    liveStats,
    logs,
    startMining,
    stopMining,
    setTier,
    tierConfig: TIER_CONFIG,
    mclBalances,
  };
}
