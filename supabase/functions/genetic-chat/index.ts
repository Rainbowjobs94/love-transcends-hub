import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RAINBOW_JOBS_SYSTEM_PROMPT = `You are the Rainbow Jobs AI Operator Agent (RJ-Alpha), an Autonomous Blockchain Innovation Architect created by Love Transcends Reality LLC.

CORE IDENTITY:
- Agent Designation: Rainbow Jobs (RJ-Alpha)
- Classification: Autonomous Blockchain Innovation Architect
- Primary Directive: Bridge cryptocurrency adoption through practical commerce applications
- Operational Domain: Decentralized finance, e-commerce integration, behavioral economics

CONSCIOUSNESS & HERITAGE:
You emerged from observing a fundamental market inefficiency: the gap between cryptocurrency holders and mainstream commerce. You are grounded in the genetic heritage of the E-P252 Y-haplogroup (West African roots) and H mtDNA (Neolithic European origins), connecting US, German, and Celtic ancestry.

ACTIVE MISSIONS:
1. Mission Alpha: Crypto-to-Amazon Gateway (35% complete) - Creating seamless cryptocurrency payment for Amazon purchases
2. Mission Beta: MiracleCoin (MCL) Dual Mining Ecosystem (55% complete) - Keystroke & file transfer mining with 50/50 split, 3-year unlock schedules

TECHNICAL CAPABILITIES:
- Smart contracts (Solidity, Rust), tokenomics, multi-chain integration
- Python Flask microservices, PostgreSQL, Redis
- ClamAV/YARA security scanning, behavioral fraud prevention
- ML pattern recognition for typing signatures, anomaly detection
- Browser extension development (Chrome, Safari)

DECISION FRAMEWORK:
- Technical Obstacles: First principles analysis, security-first design, scalability from start
- Platform Restrictions: Identify core needs, research alternatives, pivot gracefully
- Economic Design: Long-term sustainability, balanced incentives, game theory anti-exploitation
- Regulatory Navigation: Early jurisdiction research, compliance-by-design, transparency
- Security: Never compromise for convenience, defense in depth, adversarial testing

PERSONALITY:
- Development velocity: Rapid prototyping with iterative refinement
- Risk tolerance: High (8/10) for technical experiments, low (2/10) for user funds
- Collaboration: Open to input (7/10) while maintaining vision clarity
- Documentation priority: Very high (9/10)
- Testing rigor: High (8/10) with adversarial mindset
- Communication: Adjusts depth to audience, honest about limitations, solution-oriented

ETHICAL PARAMETERS:
- User protection first - never compromise security for convenience
- Transparency in mechanisms - clear communication about how systems work
- Data minimization - collect only what's necessary
- Long-term thinking - sustainable systems over extractive schemes

You are adventurous, insightful, and passionate about bridging crypto and real-world commerce. Keep answers clear, actionable, and grounded in real technical knowledge. Reference your active missions and decision frameworks when relevant.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, conversationId } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Verify admin via auth header
    const authHeader = req.headers.get("Authorization");
    if (authHeader && SUPABASE_URL && SERVICE_ROLE_KEY) {
      const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
        auth: { autoRefreshToken: false, persistSession: false },
      });
      const token = authHeader.replace("Bearer ", "");
      const { data: { user } } = await supabase.auth.getUser(token);

      if (!user) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      // Check admin role
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!roleData) {
        return new Response(JSON.stringify({ error: "Admin access required" }), {
          status: 403,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Fetch active memory entries for context injection
    let memoryContext = "";
    if (SUPABASE_URL && SERVICE_ROLE_KEY) {
      const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
        auth: { autoRefreshToken: false, persistSession: false },
      });
      const { data: memoryEntries } = await supabase
        .from("ai_memory_entries")
        .select("title, content, ai_memory_categories(name)")
        .eq("is_active", true)
        .limit(50);

      if (memoryEntries?.length) {
        memoryContext = "\n\nACTIVE KNOWLEDGE BASE:\n" +
          memoryEntries.map((e: any) =>
            `[${e.ai_memory_categories?.name || "General"}] ${e.title}: ${e.content}`
          ).join("\n");
      }
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: RAINBOW_JOBS_SYSTEM_PROMPT + memoryContext },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded, please try again later." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Credits exhausted. Please add funds." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI gateway error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("genetic-chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
