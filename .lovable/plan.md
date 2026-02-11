

# Make BioNexus Protocol Fully Functional

## What This Does

Turns the BioNexus mining simulator into a fully persistent, functional system. Your RC balance, blocks validated, mining sessions, and transaction history will all be saved to the database -- nothing resets when you refresh or leave the page.

## Features

1. **Persistent Wallet** -- Your Reality Coin (RC) balance saves automatically and loads when you return
2. **Mining Session Tracking** -- Every mining session records start/end time, duration, and RC earned
3. **Transaction History** -- A full ledger of all RC earned, with timestamps
4. **Mining Tiers** -- Bronze and Silver levels with different hash rates and reward multipliers
5. **Auto-Save** -- Stats save to the database every time a block is mined
6. **Session Summary** -- When you stop mining, a session summary is saved with total earnings

## Technical Details

### Database Tables (3 new tables)

**`mining_wallets`** -- One row per user, stores their RC balance and lifetime stats
- `user_id`, `rc_balance`, `total_mined`, `blocks_validated`, `current_tier` (bronze/silver), `created_at`, `updated_at`

**`mining_sessions`** -- One row per mining session (start to stop)
- `user_id`, `started_at`, `ended_at`, `rc_earned`, `blocks_mined`, `avg_hash_rate`, `tier`

**`mining_transactions`** -- Individual block rewards logged as transactions
- `user_id`, `amount`, `type` (block_reward, bonus, etc.), `block_number`, `created_at`

All tables have RLS policies so users can only access their own data. Admins can view all.

### Frontend Changes

**`src/pages/BioNexusProtocol.tsx`** -- Major rewrite:
- Load wallet from database on mount (or create one if first visit)
- On each block mined: insert a transaction row, update wallet balance
- On stop mining: save the session record
- Add a "Mining Tier" selector (Bronze: 1x rewards, Silver: 2x rewards)
- Add a "Transaction History" section showing recent earnings
- Add a "Session History" section showing past mining sessions
- Add a "Wallet" card showing persistent RC balance

### Mining Tier Rules
- **Bronze** -- 0.25 RC per block, base hash rate ~30 MH/s
- **Silver** -- 0.50 RC per block, boosted hash rate ~55 MH/s, faster block discovery

### Data Flow
1. Page loads -> fetch wallet from `mining_wallets` (upsert if new)
2. Start mining -> create pending session record
3. Block mined -> insert into `mining_transactions`, update `mining_wallets` balance
4. Stop mining -> update session with final stats

