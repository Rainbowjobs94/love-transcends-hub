-- Add server-side validation to mining reward function
CREATE OR REPLACE FUNCTION public.add_mining_reward(
  _amount NUMERIC,
  _block_num INTEGER
)
RETURNS void
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = 'public'
AS $$
DECLARE
  _current_tier mining_tier;
  _expected_reward NUMERIC;
  _max_block INTEGER;
BEGIN
  -- Get user's current tier
  SELECT current_tier INTO _current_tier
  FROM mining_wallets
  WHERE user_id = auth.uid();

  IF _current_tier IS NULL THEN
    RAISE EXCEPTION 'No wallet found for user';
  END IF;

  -- Validate reward amount matches tier
  _expected_reward := CASE _current_tier
    WHEN 'bronze' THEN 0.25
    WHEN 'silver' THEN 0.50
  END;

  IF _amount != _expected_reward THEN
    RAISE EXCEPTION 'Invalid reward amount';
  END IF;

  -- Validate block number is positive
  IF _block_num < 1 THEN
    RAISE EXCEPTION 'Invalid block number';
  END IF;

  -- Validate block number progression
  SELECT COALESCE(MAX(block_number), 0) INTO _max_block
  FROM mining_transactions
  WHERE user_id = auth.uid();

  IF _block_num <= _max_block THEN
    RAISE EXCEPTION 'Block already processed';
  END IF;

  -- Apply reward
  UPDATE mining_wallets
  SET rc_balance = rc_balance + _amount,
      total_mined = total_mined + _amount,
      blocks_validated = blocks_validated + 1,
      updated_at = now()
  WHERE user_id = auth.uid();

  INSERT INTO mining_transactions (user_id, amount, type, block_number)
  VALUES (auth.uid(), _amount, 'block_reward', _block_num);
END;
$$;
