

# Integrate RSNX Protocol, KEM Watermarking, and NFT Marketplace Architecture

This plan extracts the key concepts, data, and architecture from the uploaded documents and integrates them into the existing React platform as new pages, enhanced content, and updated documentation.

---

## Summary of Uploaded Documents

| Document | Key Content |
|----------|-------------|
| ShiftCoin_KEM_InvestorDeck_Full.md | KEM watermarking spec, investor deck outline ($3B narrative), combined architecture |
| RSNX_KEM_MCL_SKILL_v2.md | RSNX Protocol v4.1 contract architecture, KEMVault mining pipeline, MCL economics |
| rsnx-protocol-v4.md (PDF) | Binary/corrupted -- no usable content extracted |

---

## Changes

### 1. New Page: KEM Watermarking & NFT Forge (`/kem-watermark`)

A dedicated documentation page explaining the KEM watermarking system in plain English with architecture diagrams rendered as styled cards.

**Sections:**
- Hero: "Post-Quantum IP Protection" with FIPS 203 badge
- How KEM Watermarking Works (5-step visual flow: Keypair Generation, Encapsulation, Watermark Embedding, On-Chain Recording, Verification)
- KEM vs Traditional Hashing comparison table
- The Forge Process (what happens in a single forge transaction -- 5 simultaneous events)
- Gas Cost estimates table (deploy ~$0.05, forge ~$0.005, verify = free)
- Mining IP concept explanation
- Architecture diagram (Creator Device > Off-Chain Service > Polygon Contract > IPFS) as a styled card layout

**New file:** `src/pages/KEMWatermark.tsx`

### 2. New Page: RSNX Protocol Explorer (`/rsnx-protocol`)

A technical documentation page for the RSNX bonding curve + KEMVault + MiracleCoin contract architecture.

**Sections:**
- Contract Architecture visual (BancorFormula > RCBondingCurve > ProvenanceLedger > KEMVault > MiracleCoin) as a vertical flow
- KEM Mining Pipeline explanation (browser keystroke-energy data > server attestation > on-chain claim)
- MCL Economics table (1000 KEM = 1 MCL, 50/50 split, Dec 31 2030 vest unlock, 5 daily claims max)
- RSNX Bonding Curve Economics table (50% reserve ratio, 1% protocol fee, Bronze/Silver/Gold tiers with reward multipliers)
- Deployment order reference
- Watermark layers explanation (Surface, Midpoint, Base)
- Founder wallet reference: `0x4a09...787c`

**New file:** `src/pages/RSNXProtocol.tsx`

### 3. Enhanced Shift Coin Page

Update the existing `/shift-coin` page with new content from the investor deck:

- Add a new "NFT Marketplace" section explaining the Shift Coin floor guarantee (USD floor enforced via Chainlink oracles on Polygon)
- Add "KEM IP Protection" summary card with link to the full `/kem-watermark` page
- Add "Cross-Network Portability" section (Polygon primary, bridge to Ethereum/EVM chains)
- Add CTA link to `/rsnx-protocol`

**Modified file:** `src/pages/ShiftCoin.tsx`

### 4. Enhanced Investor Page

Add new sections from the investor deck narrative:

- Comparable Company Landscape table (OpenSea $13.3B, Patreon $4B, OnlyFans $8B, Discord $7B, Farcaster $1B) showing what LT adds over each
- Revenue Streams breakdown (4 engines: NFT marketplace $50M, Creator subscriptions $60M, Mining network $12M, Premium social $30M = $152M total)
- Technical Moat section (KEM watermarking = 5-year head start, Shift Coin floor enforcement = novel, 4-platform network effects)
- Market size callout: creator economy TAM $250B, NFT market $40B growing to $200B by 2030

**Modified file:** `src/pages/Investors.tsx`

### 5. Enhanced Tokenomics Explorer

Add RSNX-specific economics data:

- New "RSNX Bonding Curve" card showing reserve ratio (50%), protocol fee (1%), founder fee (0%), graduation threshold (50,000 MATIC)
- KEM Mining Tiers card (Bronze: 1 RC/1000 KEM, Silver: 5 RC/1000 KEM, Gold: 10 RC/1000 KEM)
- MCL conversion rate: 1000 KEM score = 1 MCL (approx $1)
- Vest unlock date: Dec 31, 2030

**Modified file:** `src/pages/TokenomicsExplorer.tsx`

### 6. Route Registration

Add new routes in App.tsx:
- `/kem-watermark` -> KEMWatermark
- `/rsnx-protocol` -> RSNXProtocol

**Modified file:** `src/App.tsx`

---

## Technical Details

### New Files
- `src/pages/KEMWatermark.tsx` -- KEM watermarking documentation page
- `src/pages/RSNXProtocol.tsx` -- RSNX protocol architecture page

### Modified Files
- `src/App.tsx` -- Add 2 new routes
- `src/pages/ShiftCoin.tsx` -- Add NFT marketplace, KEM, and cross-network sections
- `src/pages/Investors.tsx` -- Add comps table, revenue breakdown, technical moat
- `src/pages/TokenomicsExplorer.tsx` -- Add RSNX bonding curve and KEM mining tier cards

### No New Dependencies
All content uses existing UI components (Table, Accordion, Progress, glass-card, etc.) and Lucide icons.

### No Database Changes
These are all content/documentation pages with no backend data requirements.

