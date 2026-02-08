

# Add LTOpportunity to Global Right Panel

## Problem Identified

The **LTOpportunity** section (with LTCakeCafe, LTThrifty, LTApparel) exists in `RightSidebar.tsx` but is **MISSING** from the global `RightPanel.tsx` that appears on the home page.

---

## File to Modify

| File | Changes |
|------|---------|
| `src/components/RightPanel.tsx` | Add LTOpportunity card with accordion for LTCakeCafe, LTThrifty, LTApparel |

---

## Current RightPanel Structure

1. LTSU (V1)
2. LTMN (V2)
3. LTR Network (V3)
4. iAGuardian Security
5. Partnership & Investing
6. Contact & Donate

**Missing:** LTOpportunity section!

---

## Updated RightPanel Structure

1. LTSU (V1)
2. LTMN (V2)
3. LTR Network (V3)
4. iAGuardian Security
5. Partnership & Investing
6. **LTOpportunity (NEW)** - with LTCakeCafe, LTThrifty, LTApparel
7. Contact & Donate

---

## Implementation Details

### Icons to Import

Add `Coffee` icon (already imported in RightSidebar.tsx):
```typescript
import { Coffee } from 'lucide-react';
```

### New LTOpportunity Card

Insert before "Contact & Donate" section (around line 252):

```text
LTOpportunity
├── LTCakeCafe (cafe, art, events)
├── LTThrifty (sustainable commerce) 
└── LTApparel (merchandise)
```

### Card Structure

```typescript
{/* LTOpportunity */}
<Card className="glass-card border-cosmic-gold/20">
  <CardHeader>
    <CardTitle>LTOpportunity</CardTitle>
    <p>Business & Commerce Ventures</p>
  </CardHeader>
  <CardContent>
    <Accordion>
      <AccordionItem value="ltcakecafe">
        <AccordionTrigger>
          <Coffee icon /> LTCakeCafe
        </AccordionTrigger>
        <AccordionContent>
          • Not-for-profit cafe & art space
          • Live music & performance venue
          • Community workshops & events
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="ltthrifty">
        <AccordionTrigger>
          <Heart icon /> LTThrifty
        </AccordionTrigger>
        <AccordionContent>
          • Sustainable commerce & thrift
          • Eco-friendly shopping
          • Community donations hub
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="ltapparel">
        <AccordionTrigger>
          <Shield icon /> LTApparel
        </AccordionTrigger>
        <AccordionContent>
          • Wear your support merchandise
          • Mission-driven fashion
          • Proceeds support LT initiatives
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </CardContent>
</Card>
```

---

## Visual Layout

After Partnership & Investing, before Contact & Donate:

```text
+----------------------------------+
|       LTOpportunity              |
|   Business & Commerce Ventures   |
|                                  |
|   ▸ LTCakeCafe                   |
|   ▸ LTThrifty                    |
|   ▸ LTApparel                    |
+----------------------------------+
```

---

## Summary

Add the LTOpportunity card with its three accordion items (LTCakeCafe, LTThrifty, LTApparel) to the global RightPanel.tsx file so it appears when users click the right panel button from any page including the home page.

