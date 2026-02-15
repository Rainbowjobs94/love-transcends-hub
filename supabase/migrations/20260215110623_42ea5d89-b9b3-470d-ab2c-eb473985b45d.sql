
-- Restrict storage SELECT policy to admins only
-- This prevents unauthenticated file listing via the storage API
-- Files remain accessible via their public URLs since the bucket is public
DROP POLICY IF EXISTS "Public can view cms-uploads" ON storage.objects;

CREATE POLICY "Admins can list cms-uploads"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'cms-uploads' AND public.has_role(auth.uid(), 'admin'::app_role));
