-- Prevent transaction deletion to maintain immutable audit trail
CREATE POLICY "Transactions cannot be deleted"
  ON public.mining_transactions
  FOR DELETE
  USING (false);