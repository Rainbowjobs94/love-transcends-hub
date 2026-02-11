

# User Login and Simulated Mining for Visitors

## Overview
Add a public-facing login/signup system so site visitors can create accounts and experience a simulated version of the BioNexus MCL mining dashboard -- without requiring admin privileges or touching the admin-only database tables.

---

## What Changes

### 1. User Login Page (`src/pages/UserLogin.tsx`)
- A new login/signup page at `/login` (separate from `/admin-login`)
- Same cosmic styling as the admin login but branded for regular users ("MiracleCoin Portal" instead of "Admin Login")
- Email + password authentication using the existing auth system
- After login, redirects to `/mining` (the user mining dashboard)

### 2. User Mining Dashboard (`src/pages/UserMining.tsx`)
- A new page at `/mining` that requires authentication (any logged-in user, **not** admin)
- Reuses the same visual layout as BioNexusProtocol (balance overview, mining engine, logs, stats, 50/50 split indicator, unlock countdown, trading status, reserves)
- **All mining is simulated in local React state only** -- no database writes, no RLS issues
- Mining sessions, transactions, balances, and logs are all ephemeral (reset on page refresh)
- This keeps the admin mining data separate and protected

### 3. Local Mining Hook (`src/hooks/useLocalMining.ts`)
- A new hook that mirrors `useMining` but stores everything in React state instead of the database
- Same mining loop logic: progress bar, block rewards, hash rate simulation, tier selection
- Same 50/50 MCL split calculation with reserve entries
- No database calls at all -- purely client-side simulation

### 4. Navigation Update (`src/components/Navigation.tsx`)
- Change the "Login" button to link to `/login` instead of the external `ltsocial.net`
- When a user is logged in, show their email/avatar and a "Mining" link instead of the login button
- Admin users will still see a separate "Admin" link

### 5. Route Registration (`src/App.tsx`)
- Add `/login` route pointing to `UserLogin`
- Add `/mining` route pointing to `UserMining`

---

## File Summary

| File | Action | Purpose |
|---|---|---|
| `src/pages/UserLogin.tsx` | Create | Public login/signup page for visitors |
| `src/pages/UserMining.tsx` | Create | User-facing simulated mining dashboard |
| `src/hooks/useLocalMining.ts` | Create | Client-side-only mining simulation hook |
| `src/components/Navigation.tsx` | Modify | Update Login button to `/login`, show user state when logged in |
| `src/App.tsx` | Modify | Add `/login` and `/mining` routes |

### No Database Changes
- No new tables or migrations needed
- Existing admin-only RLS policies remain untouched
- User accounts are created through the existing authentication system (profiles table auto-creation via trigger)

### Security
- Regular users cannot access `/admin` or `/admin/bionexus` (existing admin role checks remain)
- The simulated mining page uses zero database writes -- all state is local
- Admin mining data stays completely isolated from user simulation

