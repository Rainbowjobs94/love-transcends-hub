

# Right Panel Reorganization & LTSU Feature Corrections

## Summary of Changes Required

The right panel has incorrect labeling and ordering. Additionally, the Gallery page is missing the full media library with paywalls for Videos, Pictures, and Music drops.

---

## 1. Right Panel Corrections (`RightPanel.tsx`)

### Current Order (WRONG):
1. LTR Network (V1)
2. LTMN (V2)
3. LTSU (V3)
4. LTCakeCafe
5. iAGuardian Security
6. Partnership & Investing
7. Contact & Donate

### New Order (CORRECT):
1. **LTSU** (V1 - Social Universe) - FIRST, labeled as V1
2. **LTMN** (unchanged)
3. **LTR Network** (renamed/repositioned)
4. iAGuardian Security
5. Partnership & Investing
6. Contact & Donate
7. ~~LTCakeCafe~~ (REMOVED - already in left panel's LTSANP)

---

## 2. LTSU Card - Complete Rewrite (V1)

**LTSU is now V1 with these specific features:**

| Feature | Description |
|---------|-------------|
| **4-Tier Marketplace** | Public, Homies, Friendlies, Inner Circle |
| **Paid Posting** | OnlyFans-style pay-to-view posts |
| **Messaging** | Direct messaging system |
| **Live Stream Tipping** | Tip creators during live streams |
| **Calendar Events** | Event scheduling and discovery |
| **LTRealityStream** | Gallery of Videos, Pictures, Music, Digital Items with paywalls |
| **RC Token Wallet** | Reality Coin wallet integration |

**Subscription Models:**

| Tier | Price | Features |
|------|-------|----------|
| **Viewer** | $10/mo | Watch Homies' streams, earn share of platform revenue divided by active viewers. Requirement: 8hrs/week platform use + Sunday 10am check-in |
| **Self-Celebrity** | $20/mo | Pay-to-post tool access, 10% withdrawal fee, 5% platform fee for viewer bonuses |

---

## 3. Add LTRealityStream Library Reference

The Gallery page exists but needs to be referenced as the **LTRealityStream** - the Video, Picture, and Music drop library with paywalls. The LTSU card should link to `/gallery` for the media library.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/RightPanel.tsx` | Reorder cards, update LTSU to V1 with correct features, remove LTCakeCafe, add LTRealityStream reference |
| `src/components/socialuniverse/VersionBadge.tsx` | No changes needed (already supports v1) |

---

## Technical Changes to `RightPanel.tsx`

### 1. Remove LTCakeCafe Card
Delete lines 157-174 and remove `Coffee` icon import.

### 2. Move LTSU to Top & Update to V1
LTSU card moves from position 3 to position 1, with:
- Badge: `v1` (green "V1 Basic")
- New subtitle: "LTSocial Universe - Core Platform"
- Features list updated:
  - 4-Tier Marketplace (Public, Homies, Friendlies, Inner Circle)
  - Paid Posting (OnlyFans-style)
  - Messaging
  - Live Stream Tipping
  - Calendar Events
  - LTRealityStream (Video/Picture/Music with paywalls)
  - RC Token Wallet

### 3. Add Subscription Accordion
Add expandable section showing:
- **Viewer ($10/mo):** Earn share of platform revenue when watching Homies' streams. Must be active 8hrs/week + Sunday 10am check-in.
- **Self-Celebrity ($20/mo):** Pay-to-post access. 10% withdrawal fee. Platform takes 5% for viewer bonus pool.

### 4. Reorder Cards
Final order:
1. LTSU (V1) - links to `/socialuniverse`
2. LTMN - unchanged, links to `/miraclemining`
3. LTR Network - links to `/ltsumn`
4. iAGuardian Security
5. Partnership & Investing
6. Contact & Donate

---

## Updated LTSU Card Content

```
LTSU (V1)
LTSocial Universe - Core Platform

Features:
• 4-Tier Marketplace (Public, Homies, Friendlies, Inner Circle)
• Paid Posting (pay-to-view like OnlyFans)
• Messaging
• Live Stream Tipping
• Calendar Events
• LTRealityStream Gallery (Videos, Pictures, Music, Digital Items)
• RC Token Wallet

[Expandable: Subscription Tiers]
  Viewer ($10/mo):
  - Earn share of platform revenue watching Homies' streams
  - Revenue divided by active viewer count
  - Requirement: 8hrs/week activity + Sunday 10am check-in

  Self-Celebrity ($20/mo):
  - Pay-to-post tool access
  - 10% withdrawal fee on earnings
  - 5% goes to viewer bonus pool

Tap to explore →
```

---

## Visual Comparison

### Before:
```
RIGHT PANEL:
1. LTR Network (V1) ← Wrong position
2. LTMN (V2)
3. LTSU (V3) ← Wrong version & position
4. LTCakeCafe ← Should be removed
5. iAGuardian
6. Partnership
7. Contact
```

### After:
```
RIGHT PANEL:
1. LTSU (V1) ← Correct! First position, V1 badge
2. LTMN
3. LTR Network ← Moved down
4. iAGuardian
5. Partnership
6. Contact
```

---

## Summary

This update will:
1. Move **LTSU to the top** of the right panel
2. Change **LTSU to V1** with correct features (4-tier marketplace, paid posting, messaging, tipping, calendar, LTRealityStream, wallet)
3. Add **subscription tier details** ($10 Viewer, $20 Self-Celebrity with specific requirements)
4. **Remove LTCakeCafe** (already in left panel)
5. Reorder remaining cards: LTSU → LTMN → LTR Network → iAGuardian → Partnership → Contact

