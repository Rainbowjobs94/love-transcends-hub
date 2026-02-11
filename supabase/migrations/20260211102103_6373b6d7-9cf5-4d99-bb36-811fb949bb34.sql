-- Prevent direct profile deletion; profiles should only be removed via auth.users CASCADE
CREATE POLICY "Profiles cannot be deleted directly"
  ON public.profiles
  FOR DELETE
  USING (false);
