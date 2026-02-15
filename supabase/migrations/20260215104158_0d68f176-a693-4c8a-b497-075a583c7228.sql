
-- Audit trail for admin login attempts and password resets
CREATE TABLE public.admin_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL, -- 'login_success', 'login_failure', 'password_reset', 'failsafe_used'
  email text,
  ip_address text,
  user_agent text,
  details text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;

-- Only admins can read audit logs
CREATE POLICY "Admins can view audit logs"
  ON public.admin_audit_log FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

-- Allow inserts from authenticated and anon (for failed login tracking)
CREATE POLICY "Anyone can insert audit logs"
  ON public.admin_audit_log FOR INSERT
  WITH CHECK (true);

-- Audit logs are immutable
CREATE POLICY "Audit logs cannot be updated"
  ON public.admin_audit_log FOR UPDATE
  USING (false);

CREATE POLICY "Audit logs cannot be deleted"
  ON public.admin_audit_log FOR DELETE
  USING (false);
