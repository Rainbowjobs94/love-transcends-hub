import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';

export type MiningTier = 'bronze' | 'silver';

// V2 MiracleCoin constants
const FIRST_UNLOCK = new Date('2030-12-31T23:59:59Z').getTime();
const CLAIM_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

export interface ReserveEntry {
  amount: number;
  unlockDate: string;
  claimDeadline: string;
  status: 'locked' | 'claimable' | 'expired';
}

interface Wallet {
  id: string;
  rc_balance: number;
  total_mined: number;
  blocks_validated: number;
  current_tier: MiningTier;
}

interface MiningSession {
  id: string;
  started_at: string;
  ended_at: string | null;
  rc_earned: number;
  blocks_mined: number;
  avg_hash_rate: number;
  tier: MiningTier;
}

interface MiningTransaction {
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

export function useMining(userId: string | undefined) {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [sessions, setSessions] = useState<MiningSession[]>([]);
  const [transactions, setTransactions] = useState<MiningTransaction[]>([]);
  const [isMining, setIsMining] = useState(false);
  const [walletLoading, setWalletLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([
    '[SYSTEM] BioNexus Protocol v2.0 initialized',
    '[SYSTEM] MiracleCoin (MCL) engine ready — 50/50 split active',
    '[NETWORK] Connected to LTR Miracle Network (Polygon)',
  ]);
  const [liveStats, setLiveStats] = useState<LiveStats>({
    hashRate: 0,
    currentBlock: 100000,
    networkDifficulty: 42.7,
    miningProgress: 0,
  });

  const sessionIdRef = useRef<string | null>(null);
  const sessionEarnedRef = useRef(0);
  const sessionBlocksRef = useRef(0);
  const hashSamplesRef = useRef<number[]>([]);

  const addLog = useCallback((msg: string) => {
    setLogs(prev => [...prev.slice(-50), `[${new Date().toLocaleTimeString()}] ${msg}`]);
  }, []);

  // Load wallet (upsert if new)
  useEffect(() => {
    if (!userId) return;
    const load = async () => {
      setWalletLoading(true);
      // Try to fetch existing wallet
      const { data } = await supabase
        .from('mining_wallets')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (data) {
        setWallet({
          id: data.id,
          rc_balance: Number(data.rc_balance),
          total_mined: Number(data.total_mined),
          blocks_validated: data.blocks_validated,
          current_tier: data.current_tier as MiningTier,
        });
        setLiveStats(s => ({ ...s, currentBlock: 100000 + data.blocks_validated }));
      } else {
        // Create new wallet
        const { data: newWallet } = await supabase
          .from('mining_wallets')
          .insert({ user_id: userId })
          .select()
          .single();
        if (newWallet) {
          setWallet({
            id: newWallet.id,
            rc_balance: Number(newWallet.rc_balance),
            total_mined: Number(newWallet.total_mined),
            blocks_validated: newWallet.blocks_validated,
            current_tier: newWallet.current_tier as MiningTier,
          });
        }
      }
      setWalletLoading(false);
    };
    load();
  }, [userId]);

  // Load recent sessions & transactions
  useEffect(() => {
    if (!userId) return;
    const loadHistory = async () => {
      const [sessRes, txRes] = await Promise.all([
        supabase
          .from('mining_sessions')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })
          .limit(10),
        supabase
          .from('mining_transactions')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false })
          .limit(20),
      ]);
      if (sessRes.data) setSessions(sessRes.data.map(s => ({ ...s, rc_earned: Number(s.rc_earned), avg_hash_rate: Number(s.avg_hash_rate), tier: s.tier as MiningTier })));
      if (txRes.data) setTransactions(txRes.data.map(t => ({ ...t, amount: Number(t.amount) })));
    };
    loadHistory();
  }, [userId]);

  const setTier = useCallback(async (tier: MiningTier) => {
    if (!wallet || !userId) return;
    await supabase
      .from('mining_wallets')
      .update({ current_tier: tier })
      .eq('user_id', userId);
    setWallet(prev => prev ? { ...prev, current_tier: tier } : prev);
    addLog(`[SYSTEM] Mining tier changed to ${TIER_CONFIG[tier].label}`);
  }, [wallet, userId, addLog]);

  // Mining loop
  useEffect(() => {
    if (!isMining || !wallet || !userId) return;

    const tier = wallet.current_tier;
    const config = TIER_CONFIG[tier];

    const interval = setInterval(async () => {
      setLiveStats(prev => {
        const newProgress = prev.miningProgress + Math.random() * (tier === 'silver' ? 12 : 8) + 2;

        if (newProgress >= 100) {
          // Block mined — fire async DB updates
          const blockNum = prev.currentBlock + 1;
          const reward = config.reward;

          // Atomic wallet update + transaction insert via RPC
          supabase
            .rpc('add_mining_reward', {
              _amount: reward,
              _block_num: blockNum,
            })
            .then(() => {
              // Add transaction to local state
              setTransactions(prev => [{
                id: crypto.randomUUID(),
                amount: reward,
                type: 'block_reward',
                block_number: blockNum,
                created_at: new Date().toISOString(),
              }, ...prev].slice(0, 20));
            });

          sessionEarnedRef.current += reward;
          sessionBlocksRef.current += 1;

          // Update local wallet state
          setWallet(w => w ? {
            ...w,
            rc_balance: +(w.rc_balance + reward).toFixed(4),
            total_mined: +(w.total_mined + reward).toFixed(4),
            blocks_validated: w.blocks_validated + 1,
          } : w);

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
  }, [isMining, wallet, userId, addLog]);

  const startMining = useCallback(async () => {
    if (!userId || !wallet) return;
    sessionEarnedRef.current = 0;
    sessionBlocksRef.current = 0;
    hashSamplesRef.current = [];

    // Create session record
    const { data } = await supabase
      .from('mining_sessions')
      .insert({
        user_id: userId,
        tier: wallet.current_tier,
      })
      .select()
      .single();

    if (data) {
      sessionIdRef.current = data.id;
    }

    setIsMining(true);
    setLiveStats(s => ({ ...s, miningProgress: 0 }));
    addLog('[MINER] Mining engine started — MiracleCoin Protocol v2 active');
    addLog('[NETWORK] Auto-selecting optimal blockchain route (Polygon)...');
    addLog(`[NETWORK] Tier: ${TIER_CONFIG[wallet.current_tier].label} — ${TIER_CONFIG[wallet.current_tier].reward} MCL/block (50/50 split)`);
  }, [userId, wallet, addLog]);

  const stopMining = useCallback(async () => {
    setIsMining(false);

    if (sessionIdRef.current && userId) {
      const avgHash = hashSamplesRef.current.length > 0
        ? +(hashSamplesRef.current.reduce((a, b) => a + b, 0) / hashSamplesRef.current.length).toFixed(1)
        : 0;

      await supabase
        .from('mining_sessions')
        .update({
          ended_at: new Date().toISOString(),
          rc_earned: sessionEarnedRef.current,
          blocks_mined: sessionBlocksRef.current,
          avg_hash_rate: avgHash,
        })
        .eq('id', sessionIdRef.current);

      // Refresh sessions list
      const { data } = await supabase
        .from('mining_sessions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(10);
      if (data) setSessions(data.map(s => ({ ...s, rc_earned: Number(s.rc_earned), avg_hash_rate: Number(s.avg_hash_rate), tier: s.tier as MiningTier })));

      addLog(`[STATS] Session: ${sessionEarnedRef.current.toFixed(4)} MCL | ${sessionBlocksRef.current} blocks | avg ${avgHash} MH/s`);
    }

    addLog('[MINER] Mining engine stopped');
    sessionIdRef.current = null;
  }, [userId, addLog]);

  // V2 MiracleCoin computed values (informational — 50/50 split)
  const mclBalances = useMemo(() => {
    const totalMined = wallet?.total_mined ?? 0;
    const available = totalMined * 0.5; // 50% immediate
    const locked = totalMined * 0.5;    // 50% locked
    const claimable = 0; // Not yet unlocked (Dec 31 2030)

    // Build reserve entries from sessions
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
  }, [wallet, sessions]);

  return {
    wallet,
    walletLoading,
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
