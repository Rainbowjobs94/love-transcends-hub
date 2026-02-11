
-- Drop existing permissive policies on mining tables and replace with admin-only policies

-- mining_wallets: restrict all operations to admins
DROP POLICY IF EXISTS "Users can insert own wallet" ON public.mining_wallets;
DROP POLICY IF EXISTS "Users can update own wallet" ON public.mining_wallets;
DROP POLICY IF EXISTS "Users can view own wallet" ON public.mining_wallets;
DROP POLICY IF EXISTS "Wallets cannot be deleted directly" ON public.mining_wallets;

CREATE POLICY "Admins can view own wallet" ON public.mining_wallets
  FOR SELECT USING (auth.uid() = user_id AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert own wallet" ON public.mining_wallets
  FOR INSERT WITH CHECK (auth.uid() = user_id AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update own wallet" ON public.mining_wallets
  FOR UPDATE USING (auth.uid() = user_id AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Wallets cannot be deleted" ON public.mining_wallets
  FOR DELETE USING (false);

-- mining_sessions: restrict all operations to admins
DROP POLICY IF EXISTS "Users can insert own sessions" ON public.mining_sessions;
DROP POLICY IF EXISTS "Users can update own sessions" ON public.mining_sessions;
DROP POLICY IF EXISTS "Users can view own sessions" ON public.mining_sessions;

CREATE POLICY "Admins can view own sessions" ON public.mining_sessions
  FOR SELECT USING (auth.uid() = user_id AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert own sessions" ON public.mining_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update own sessions" ON public.mining_sessions
  FOR UPDATE USING (auth.uid() = user_id AND public.has_role(auth.uid(), 'admin'));

-- mining_transactions: restrict to admins
DROP POLICY IF EXISTS "Users can insert own transactions" ON public.mining_transactions;
DROP POLICY IF EXISTS "Users can view own transactions" ON public.mining_transactions;
DROP POLICY IF EXISTS "Transactions are immutable" ON public.mining_transactions;
DROP POLICY IF EXISTS "Transactions cannot be deleted" ON public.mining_transactions;

CREATE POLICY "Admins can view own transactions" ON public.mining_transactions
  FOR SELECT USING (auth.uid() = user_id AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert own transactions" ON public.mining_transactions
  FOR INSERT WITH CHECK (auth.uid() = user_id AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Transactions are immutable" ON public.mining_transactions
  FOR UPDATE USING (false);

CREATE POLICY "Transactions cannot be deleted" ON public.mining_transactions
  FOR DELETE USING (false);
