
-- Mining tier enum
CREATE TYPE public.mining_tier AS ENUM ('bronze', 'silver');

-- Mining transaction type enum
CREATE TYPE public.mining_tx_type AS ENUM ('block_reward', 'bonus');

-- Mining wallets: one per user
CREATE TABLE public.mining_wallets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  rc_balance NUMERIC(12,4) NOT NULL DEFAULT 0,
  total_mined NUMERIC(12,4) NOT NULL DEFAULT 0,
  blocks_validated INTEGER NOT NULL DEFAULT 0,
  current_tier mining_tier NOT NULL DEFAULT 'bronze',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.mining_wallets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own wallet"
  ON public.mining_wallets FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own wallet"
  ON public.mining_wallets FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own wallet"
  ON public.mining_wallets FOR UPDATE
  USING (auth.uid() = user_id);

CREATE TRIGGER update_mining_wallets_updated_at
  BEFORE UPDATE ON public.mining_wallets
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Mining sessions
CREATE TABLE public.mining_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ended_at TIMESTAMPTZ,
  rc_earned NUMERIC(12,4) NOT NULL DEFAULT 0,
  blocks_mined INTEGER NOT NULL DEFAULT 0,
  avg_hash_rate NUMERIC(8,1) NOT NULL DEFAULT 0,
  tier mining_tier NOT NULL DEFAULT 'bronze',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.mining_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own sessions"
  ON public.mining_sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON public.mining_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON public.mining_sessions FOR UPDATE
  USING (auth.uid() = user_id);

-- Mining transactions
CREATE TABLE public.mining_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  amount NUMERIC(12,4) NOT NULL,
  type mining_tx_type NOT NULL DEFAULT 'block_reward',
  block_number INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.mining_transactions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own transactions"
  ON public.mining_transactions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions"
  ON public.mining_transactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);
