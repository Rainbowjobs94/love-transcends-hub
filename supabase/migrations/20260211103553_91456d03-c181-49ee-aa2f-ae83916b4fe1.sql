-- Prevent wallet deletion (wallets should never be directly deleted)
CREATE POLICY "Wallets cannot be deleted directly"
  ON public.mining_wallets
  FOR DELETE
  USING (false);

-- Make transactions immutable (no updates allowed)
CREATE POLICY "Transactions are immutable"
  ON public.mining_transactions
  FOR UPDATE
  USING (false);
