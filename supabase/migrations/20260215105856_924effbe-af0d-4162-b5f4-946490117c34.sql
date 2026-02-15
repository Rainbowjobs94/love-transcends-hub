
-- Drop the overly permissive public INSERT policy
DROP POLICY IF EXISTS "Anyone can insert audit logs" ON public.admin_audit_log;

-- Create a secure SECURITY DEFINER function for audit log inserts
-- This allows unauthenticated callers (login failures) to log events
-- without exposing the table to direct public writes
CREATE OR REPLACE FUNCTION public.log_admin_audit(
  _event_type text,
  _email text DEFAULT NULL,
  _details text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Validate event_type is one of the allowed values
  IF _event_type NOT IN ('login_success', 'login_failure', 'failsafe_used', 'password_reset') THEN
    RAISE EXCEPTION 'Invalid event type';
  END IF;

  -- Truncate inputs to prevent abuse
  INSERT INTO public.admin_audit_log (event_type, email, details)
  VALUES (
    _event_type,
    LEFT(_email, 320),
    LEFT(_details, 1000)
  );
END;
$$;
