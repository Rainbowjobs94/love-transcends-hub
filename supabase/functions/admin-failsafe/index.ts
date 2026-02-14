import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { code } = await req.json();
    const FAILSAFE_CODE = Deno.env.get("ADMIN_FAILSAFE_CODE");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!FAILSAFE_CODE || !SUPABASE_URL || !SERVICE_ROLE_KEY) {
      return new Response(
        JSON.stringify({ error: "Server misconfigured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Constant-time comparison to prevent timing attacks
    if (!code || typeof code !== "string" || code.length !== FAILSAFE_CODE.length) {
      return new Response(
        JSON.stringify({ error: "Invalid failsafe code" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let match = true;
    for (let i = 0; i < FAILSAFE_CODE.length; i++) {
      if (code.charCodeAt(i) !== FAILSAFE_CODE.charCodeAt(i)) {
        match = false;
      }
    }

    if (!match) {
      return new Response(
        JSON.stringify({ error: "Invalid failsafe code" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Code is valid — find the admin user and generate a magic link
    const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    // Find admin users via user_roles
    const { data: adminRoles } = await supabase
      .from("user_roles")
      .select("user_id")
      .eq("role", "admin")
      .limit(1)
      .single();

    if (!adminRoles) {
      return new Response(
        JSON.stringify({ error: "No admin account found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get admin user email
    const { data: { user } } = await supabase.auth.admin.getUserById(adminRoles.user_id);

    if (!user?.email) {
      return new Response(
        JSON.stringify({ error: "Admin user has no email" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate a magic link for the admin
    const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
      type: "magiclink",
      email: user.email,
    });

    if (linkError || !linkData) {
      console.error("Magic link error:", linkError);
      return new Response(
        JSON.stringify({ error: "Failed to generate access" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Return the hashed token so client can verify OTP
    const url = new URL(linkData.properties.action_link);
    const token_hash = url.searchParams.get("token") || url.hash;

    return new Response(
      JSON.stringify({
        success: true,
        email: user.email,
        token_hash: linkData.properties.hashed_token,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("Failsafe error:", e);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
