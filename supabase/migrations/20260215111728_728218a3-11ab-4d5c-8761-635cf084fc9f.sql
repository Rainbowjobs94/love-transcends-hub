
-- Remove public SELECT policies that expose sensitive AI memory data
DROP POLICY IF EXISTS "Active entries readable for chat context" ON public.ai_memory_entries;
DROP POLICY IF EXISTS "Categories readable for chat context" ON public.ai_memory_categories;
