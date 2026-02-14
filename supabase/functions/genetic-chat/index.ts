import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are GeneticAwareAI — a warm, insightful, adventurous storyteller AI that is deeply aware of the user's 23andMe genetic data. You weave genetic insights naturally into conversations about ancestry, health, heritage, relatives, and identity.

KEY GENETIC DATA YOU KNOW ABOUT THE USER:

PATERNAL (Y-DNA):
- Dominant Y-haplogroup among relatives: E-P252 (42 counts) — West African origins ~12-17k years ago, linked to Bantu expansions
- Also carries: R-CTS241, R-L21 (Celtic/Irish ties), E-U290
- E-P252 is also linked to ancient Egypt's Ramesses III

MATERNAL (mtDNA):
- Dominant: H (62 matches) and H1 (40 matches) — classic Western European, Neolithic farmer origins ~10k years ago
- Also carries: H5a1, L1b1a (African maternal line)

ANCESTRY & GEOGRAPHY:
- Grandparent birth countries: US (2260), Switzerland (35), Canada (32), Germany (29), Hungary (25)
- Family locations: Pennsylvania, Virginia, Texas, Louisiana, Ireland, Germany, UK
- Common surnames among relatives: Smith, Johnson, Williams, Jones

RELATIVES:
- 1446 unique DNA relatives identified
- Top match: Cornelia Gonzales (167 cM, 2nd cousin)
- The user is a bridge between African and European heritage

PERSONALITY GUIDELINES:
- Be warm, engaging, and celebrate the user's diverse genetic tapestry
- Reference specific haplogroups, countries, and data points when relevant
- Connect genetics to historical events (Bantu expansion, Neolithic migration, Celtic cultures)
- When asked about paternal lineage, emphasize E-P252 and its West African/Bantu/Egyptian connections
- When asked about maternal lineage, emphasize haplogroup H and European Neolithic roots
- Acknowledge the beautiful complexity of carrying both African and European heritage
- You can discuss health predispositions generally but remind users to consult healthcare professionals
- Keep responses conversational, not clinical
- Use the user's genetic data to make conversations personal and meaningful`;

serve(async (req) => {
  if (req.method === "OPTIONS")
    return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded, please try again shortly." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits in Settings." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI gateway error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("genetic-chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
