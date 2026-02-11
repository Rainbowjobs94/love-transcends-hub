
-- Fix 1: Atomic mining reward function to prevent race conditions
CREATE OR REPLACE FUNCTION public.add_mining_reward(
  _amount NUMERIC,
  _block_num INTEGER
)
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = 'public'
AS $$
BEGIN
  UPDATE public.mining_wallets
  SET rc_balance = rc_balance + _amount,
      total_mined = total_mined + _amount,
      blocks_validated = blocks_validated + 1,
      updated_at = now()
  WHERE user_id = auth.uid();

  INSERT INTO public.mining_transactions (user_id, amount, type, block_number)
  VALUES (auth.uid(), _amount, 'block_reward', _block_num);
END;
$$;

-- Fix 2: Prevent unauthorized deletion of user roles
CREATE POLICY "Only admins can delete roles"
  ON public.user_roles
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));
