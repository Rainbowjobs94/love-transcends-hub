
-- Categories for organizing IA memories
CREATE TABLE public.ai_memory_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  icon text DEFAULT 'Brain',
  sort_order integer DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_memory_categories ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view categories"
  ON public.ai_memory_categories FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert categories"
  ON public.ai_memory_categories FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update categories"
  ON public.ai_memory_categories FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete categories"
  ON public.ai_memory_categories FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Individual memory entries within categories
CREATE TABLE public.ai_memory_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES public.ai_memory_categories(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.ai_memory_entries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admins can view entries"
  ON public.ai_memory_entries FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert entries"
  ON public.ai_memory_entries FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update entries"
  ON public.ai_memory_entries FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete entries"
  ON public.ai_memory_entries FOR DELETE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Edge function needs to read memories for all users (service role handles this)
-- But we also need the genetic-chat function to read active memories
-- We'll use a public read policy for active entries only
CREATE POLICY "Active entries readable for chat context"
  ON public.ai_memory_entries FOR SELECT
  USING (is_active = true);

CREATE POLICY "Categories readable for chat context"
  ON public.ai_memory_categories FOR SELECT
  USING (true);

-- Timestamp trigger
CREATE TRIGGER update_ai_memory_entries_updated_at
  BEFORE UPDATE ON public.ai_memory_entries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Seed default categories
INSERT INTO public.ai_memory_categories (name, description, icon, sort_order) VALUES
  ('Family History', 'Key family lineage facts, ancestors, and genealogical records', 'Users', 1),
  ('DNA Data', 'Haplogroups, genetic markers, 23andMe results, and heritage data', 'Dna', 2),
  ('Key Events', 'Important milestones, achievements, and historical moments', 'Calendar', 3),
  ('Core Identity', 'Foundational beliefs, mission statements, and personal philosophy', 'Heart', 4),
  ('Cultural Heritage', 'Cultural traditions, languages, and ancestral customs', 'Globe', 5);
