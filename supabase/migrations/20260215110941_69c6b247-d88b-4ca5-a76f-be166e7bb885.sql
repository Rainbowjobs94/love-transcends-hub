
-- Drop existing SELECT policies on admin_audit_log and recreate properly
DROP POLICY IF EXISTS "Admins can view audit logs" ON public.admin_audit_log;
DROP POLICY IF EXISTS "Anyone can view audit logs" ON public.admin_audit_log;
DROP POLICY IF EXISTS "Public can view audit logs" ON public.admin_audit_log;

-- Create a PERMISSIVE admin-only SELECT policy
CREATE POLICY "Admins can view audit logs"
  ON public.admin_audit_log
  FOR SELECT
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));
