

# Fix Slide-Out Panels & Navigation

## Problem Summary
The current implementation has:
1. **Three trigger buttons** instead of two (there's an extra hamburger menu at the top repeating tabs)
2. **Font colors** are hard to read in the panels
3. **Panel items don't navigate** to their respective pages - they just show text
4. **LTSANP and LTFoster** need to be merged and moved to the LEFT panel

---

## Changes Required

### 1. Navigation.tsx - Simplify Header

**Current Issue:** There's a hamburger menu button showing all navigation tabs, cluttering the page.

**Fix:**
- Remove the hamburger menu button and tab drawer from the navigation header
- Header should ONLY show: `[Play] [Back] | [LOGO] | [Skip] [Stop]`
- No tabs in the header at all - navigation happens through the slide-out panels

```
+------------------------------------------------------------+
|  [Play] [Back]  |   [LOGO Home Link]   |  [Skip] [Stop]    |
+------------------------------------------------------------+
```

---

### 2. LeftPanel.tsx - Fix Navigation + Merge LTSANP

**Current Issue:** Items show info but don't navigate anywhere. Font colors are hard to read.

**Fixes:**
- Make **Rainbow Strongman portrait** clickable - navigates to `/story` (your bio section)
- Make **"Historic Strongman Legacy" card** clickable - navigates to `/story` (John Strongman bio section)  
- Make **LTHistory card** clickable - navigates to `/story#john-strongman`
- Make **LTDimensions card** non-clickable for now (placeholder text only)
- Make **LTFoster&Recovery card** clickable - navigates to `/ltsanp` (merged with LTSANP)
- **Add LTSANP section** to LEFT panel (moved from right)
- Make **Contact & Donate** links work properly
- Fix text colors for better readability (use `text-foreground` instead of `text-muted-foreground` for key text)

**Left Panel Order:**
1. Historic Strongman Legacy (clickable to /story) - portrait clickable to your bio
2. LTHistory (clickable to /story#john-strongman)
3. LTDimensions (placeholder - not clickable)
4. LTSANP (NEW - contains LTFoster, LTCare, LTCakeCafe, LTHousing) - clickable to /ltsanp
5. Contact & Donate

---

### 3. RightPanel.tsx - Remove LTSANP, Keep Platform Hub

**Fixes:**
- Remove LTSANP card (moved to left panel)
- Remove LTFoster&Recovery (merged into LTSANP on left)
- Keep these sections:
  1. **LTR Network** (V1) - Master Mining Miracle Hub
  2. **LTMN** (V2) - Miracle Network (blockchain, crypto, mining)
  3. **LTSU** (V3) - Social Universe (full demo - ETA 2028)
  4. **LTCakeCafe** - Not-for-profit cafe (stays here as it's a service highlight)
  5. **iAGuardian Security** - Safety & fraud protection
  6. **Partnership & Investing** - Business opportunities
  7. **Contact & Donate** (mirror)

---

### 4. Fix Font Colors Throughout Panels

**Issue:** Text is hard to read.

**Fix:** Update color classes:
- Headings: `text-foreground` (bright, readable)
- Body text: `text-foreground/80` (slightly dimmed but still readable)
- Secondary info: `text-muted-foreground` (only for less important details)

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/Navigation.tsx` | Remove hamburger menu button and tab drawer. Keep only logo + media controls. |
| `src/components/LeftPanel.tsx` | Add navigation to clickable items. Add LTSANP section. Fix font colors. Merge LTFoster into LTSANP. |
| `src/components/RightPanel.tsx` | Remove LTSANP card. Remove LTFoster card. Fix font colors. |

---

## Visual Representation

```
HEADER:
+------------------------------------------------------------+
|  [▶ Play] [◀ Back]  |    [LOGO → Home]    |  [▶ Skip] [■]  |
+------------------------------------------------------------+

LEFT PANEL (tap icon to open):
+----------------------------------+
| Historic Strongman Legacy        |
| [Portrait] ← TAP = /story (bio)  |
+----------------------------------+
| LTHistory ← TAP = /story#john    |
+----------------------------------+
| LTDimensions (Coming Soon)       |
+----------------------------------+
| LTSANP ← TAP = /ltsanp           |
| (includes Foster, Care, Housing) |
+----------------------------------+
| Contact & Donate                 |
+----------------------------------+

RIGHT PANEL (tap icon to open):
+----------------------------------+
| LTR Network (V1)                 |
+----------------------------------+
| LTMN (V2)                        |
+----------------------------------+
| LTSU (V3)                        |
+----------------------------------+
| LTCakeCafe                       |
+----------------------------------+
| iAGuardian Security              |
+----------------------------------+
| Partnership & Investing          |
+----------------------------------+
| Contact & Donate                 |
+----------------------------------+
```

---

## Summary

This plan will:
1. Remove the extra hamburger menu from the header (just logo + media controls)
2. Make panel items navigate to their respective pages when tapped
3. Move LTSANP to the left panel
4. Merge LTFoster&Recovery into LTSANP
5. Fix font colors so everything is readable
6. Keep the two slide-out panel triggers (left and right)

