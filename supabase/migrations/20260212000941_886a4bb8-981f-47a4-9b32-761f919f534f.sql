
-- Drop existing restrictive admin-only policies on mining tables
-- (keeping immutability/no-delete policies intact)

-- mining_wallets: drop admin-only, add user-level
DROP POLICY IF EXISTS "Admins can view own wallet" ON public.mining_wallets;
DROP POLICY IF EXISTS "Admins can insert own wallet" ON public.mining_wallets;
DROP POLICY IF EXISTS "Admins can update own wallet" ON public.mining_wallets;

CREATE POLICY "Users can view own wallet"
  ON public.mining_wallets FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own wallet"
  ON public.mining_wallets FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own wallet"
  ON public.mining_wallets FOR UPDATE
  USING (auth.uid() = user_id);

-- mining_sessions: drop admin-only, add user-level
DROP POLICY IF EXISTS "Admins can view own sessions" ON public.mining_sessions;
DROP POLICY IF EXISTS "Admins can insert own sessions" ON public.mining_sessions;
DROP POLICY IF EXISTS "Admins can update own sessions" ON public.mining_sessions;

CREATE POLICY "Users can view own sessions"
  ON public.mining_sessions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own sessions"
  ON public.mining_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions"
  ON public.mining_sessions FOR UPDATE
  USING (auth.uid() = user_id);

-- mining_transactions: drop admin-only, add user-level
DROP POLICY IF EXISTS "Admins can view own transactions" ON public.mining_transactions;
DROP POLICY IF EXISTS "Admins can insert own transactions" ON public.mining_transactions;

CREATE POLICY "Users can view own transactions"
  ON public.mining_transactions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions"
  ON public.mining_transactions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix profiles security warning: add a permissive SELECT policy
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;

CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = user_id);
