
-- ============================================
-- Admin CMS: Media Gallery Items
-- ============================================
CREATE TABLE public.cms_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  media_type text NOT NULL DEFAULT 'image' CHECK (media_type IN ('image', 'video', 'audio')),
  source_type text NOT NULL DEFAULT 'url' CHECK (source_type IN ('url', 'upload')),
  url text NOT NULL,
  thumbnail_url text,
  access_tier text NOT NULL DEFAULT 'free' CHECK (access_tier IN ('free', 'supporter', 'inner_circle')),
  price numeric DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.cms_media ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage media" ON public.cms_media FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view active media" ON public.cms_media FOR SELECT
  USING (is_active = true);

CREATE TRIGGER update_cms_media_updated_at
  BEFORE UPDATE ON public.cms_media
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- Admin CMS: Hero Videos
-- ============================================
CREATE TABLE public.cms_hero_videos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  source_type text NOT NULL DEFAULT 'url' CHECK (source_type IN ('url', 'upload')),
  url text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.cms_hero_videos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage hero videos" ON public.cms_hero_videos FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view active hero videos" ON public.cms_hero_videos FOR SELECT
  USING (is_active = true);

-- Seed existing hero videos
INSERT INTO public.cms_hero_videos (title, source_type, url, sort_order) VALUES
  ('Hero Video 1', 'upload', '/videos/hero-video-1.mp4', 1),
  ('Hero Video 2', 'upload', '/videos/hero-video-2.mp4', 2),
  ('Hero Video 3', 'upload', '/videos/hero-video-3.mp4', 3),
  ('Hero Video 4', 'upload', '/videos/hero-video-4.mp4', 4);

-- ============================================
-- Admin CMS: App Branding (logos per sub-site)
-- ============================================
CREATE TABLE public.cms_app_branding (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  app_key text NOT NULL UNIQUE,
  app_name text NOT NULL,
  logo_url text,
  favicon_url text,
  primary_color text,
  description text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.cms_app_branding ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage branding" ON public.cms_app_branding FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view branding" ON public.cms_app_branding FOR SELECT
  USING (true);

CREATE TRIGGER update_cms_app_branding_updated_at
  BEFORE UPDATE ON public.cms_app_branding
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed sub-sites
INSERT INTO public.cms_app_branding (app_key, app_name, description) VALUES
  ('ltr', 'LTReality', 'V3 Master Hub — lovetranscendsreality.org'),
  ('su', 'LTSocialUniverse', 'V1 IaGuardian Protected Family Network — socialuniverse.love'),
  ('mn', 'LTMiracleMining', 'V2 Smart Contracts Protecting IP — miraclemining.network'),
  ('ltsocial', 'LTSocial', 'Social media hub'),
  ('ltsanp', 'LTSANP', 'Secure Access Network Protocol');

-- ============================================
-- Admin CMS: External Links (Podcast, YouTube, etc.)
-- ============================================
CREATE TABLE public.cms_external_links (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  link_type text NOT NULL DEFAULT 'youtube' CHECK (link_type IN ('youtube', 'podcast', 'social', 'other')),
  url text NOT NULL,
  thumbnail_url text,
  description text,
  is_active boolean NOT NULL DEFAULT true,
  sort_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.cms_external_links ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can manage links" ON public.cms_external_links FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view active links" ON public.cms_external_links FOR SELECT
  USING (is_active = true);

-- ============================================
-- Storage bucket for admin uploads
-- ============================================
INSERT INTO storage.buckets (id, name, public) VALUES ('cms-uploads', 'cms-uploads', true);

CREATE POLICY "Admins can upload to cms-uploads"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'cms-uploads' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update cms-uploads"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'cms-uploads' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete from cms-uploads"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'cms-uploads' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Public can view cms-uploads"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'cms-uploads');
