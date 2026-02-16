

# Upgrades from Uploaded Reference Files

Since the uploaded zip files contain Python and Node.js code that cannot run directly in this React/TypeScript project, the plan extracts **concepts, features, and architecture ideas** from each file to enhance the existing platform.

---

## File Analysis Summary

| File | Contents | Usable For |
|------|----------|------------|
| project-sentinel-with-admin-ui.zip | Node.js backend with admin/auth controllers, sentinel monitoring | Admin dashboard security monitoring module |
| onecode_v0_6_0_scaffold.zip | Python OneCode v0.6.0 scaffold | Architecture reference only (Python) |
| ltmmn_ai_update_2025-10-22.zip | AI packages update for LT Miracle Mining Network | Enhanced AI system prompt, mining AI features |
| iarainbow-onecode-v0_6_0.zip | iaRainbow OneCode v0.6.0 (Python) | IA Guardian personality/capability upgrades |
| lowia.zip | GPT conversation exports (markdown) | Bulk import into IA Memory Core knowledge base |
| heia.zip | Python crypto/security code (KEM exchange) | Security concepts for MiracleCoin documentation |

---

## Proposed Updates

### 1. Project Sentinel -- Admin Security Monitor

Add a new **"Sentinel Monitor"** module to the Admin Dashboard that provides:

- **Real-time security overview card** showing login attempts, failed auths, and audit log stats (reading from existing `admin_audit_log` table)
- **Threat level indicator** (green/yellow/red) based on recent failed login counts
- **Quick stats widgets**: active sessions, recent audit events, last admin login timestamp
- New route: `/admin/sentinel`
- New file: `src/pages/AdminSentinel.tsx`
- Dashboard card added to `AdminDashboard.tsx` tools grid

### 2. AI/Mining Content Enhancements

Based on the ltmmn_ai_update package:

- **Upgrade the IA Guardian system prompt** in `genetic-chat` edge function with enhanced MiracleCoin technical knowledge (dual mining mechanics, tokenomics formulas, 3-year unlock schedules)
- **Add new AI Memory categories** pre-seeded via a database migration: "Tokenomics", "Smart Contracts", "Mining Protocol" with starter knowledge entries
- **Mining page AI assistant** -- add a small "Ask about mining" button on the `/mining` page that opens the IA Guardian chat pre-loaded with a mining context question

### 3. AI Conversation Knowledge Base Import

From the lowia.zip conversation exports:

- **Bulk import UI** on the IA Memory Core page (`/admin/ai-memory`) -- a new "Import Conversations" button that lets admins paste markdown text from exported AI conversations
- The importer will parse markdown content and create memory entries under a new "Conversation Insights" category
- This allows quickly loading historical AI conversations as knowledge for the IA Guardian

### 4. Crypto Security Documentation Page

Inspired by the heia.zip KEM exchange code:

- **Add a "Security Architecture" section** to the MiracleCoin/Miracle Mining page explaining the cryptographic principles (key exchange, encryption at rest)
- Content-only update to `src/pages/MiracleMining.tsx` with a new collapsible "Security & Cryptography" accordion section

---

## Technical Details

### New Files
- `src/pages/AdminSentinel.tsx` -- Security monitoring dashboard

### Modified Files
- `src/App.tsx` -- Add `/admin/sentinel` route
- `src/pages/AdminDashboard.tsx` -- Add Sentinel Monitor card + link to tools grid
- `src/pages/AdminAIMemory.tsx` -- Add bulk conversation import button and parser
- `src/pages/MiracleMining.tsx` -- Add Security Architecture accordion section
- `src/pages/UserMining.tsx` -- Add "Ask AI about mining" quick action button
- `supabase/functions/genetic-chat/index.ts` -- Expand system prompt with deeper tokenomics and mining protocol knowledge

### Database Migration
- Seed new AI memory categories: "Tokenomics", "Smart Contracts", "Mining Protocol", "Conversation Insights"
- No schema changes required -- all existing tables support these additions

### No New Dependencies
All features use existing libraries (Accordion from Radix, existing UI components, existing Supabase client).

