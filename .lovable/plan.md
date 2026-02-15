

## Fix Admin Login - Password Reset

The admin account `rainbowjobs@pm.me` exists but the password is incorrect (auth logs show repeated `invalid_credentials` errors since Feb 11).

### Solution

Create a temporary edge function to reset the admin password using the Supabase Admin API, then remove it after use.

### Steps

1. **Create edge function** `supabase/functions/reset-admin-password/index.ts`
   - Uses `SUPABASE_SERVICE_ROLE_KEY` to call `supabase.auth.admin.updateUserById()`
   - Sets the password to `Mn$trongman` for user ID `904836a0-02b5-4ef4-8567-a686b5af5ecf`
   - Protected by the existing `ADMIN_FAILSAFE_CODE` secret so only authorized calls succeed

2. **Deploy and invoke** the function once to reset the password

3. **Delete the edge function** after successful reset (it's a one-time utility)

4. **Verify login** works at `/admin-login` with the new credentials

### Technical Details

```text
Edge Function: reset-admin-password
  - Validates ADMIN_FAILSAFE_CODE from request body
  - Calls auth.admin.updateUserById() with new password
  - Returns success/error response
  - Will be deleted immediately after use
```

### Security
- The function is gated behind the failsafe code so it cannot be called by random users
- The function will be removed from the codebase after the password is reset
- Password meets minimum complexity (10 chars, mixed case, special char, number)

