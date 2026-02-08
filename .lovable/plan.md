

# Move KYC to LTMN & Add Node Information

## Summary

This plan moves the Compliance & Security section (KYC, AML, Secure Infrastructure) from the SocialUniverse page to the LTMN (Miracle Network) page, and adds comprehensive node/mining information to LTMN.

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/SocialUniverse.tsx` | Remove "Compliance & Security" section (lines 319-341) |
| `src/pages/LTSUMN.tsx` | Add Compliance & Security section + Node Information |

---

## 1. Remove from SocialUniverse.tsx

Delete the following section (lines 319-341):
- "Compliance & Security" heading
- KYC Required card
- AML Compliant card
- Secure Infrastructure card

This content belongs on the Miracle Network page since it relates to blockchain/crypto operations.

---

## 2. Add to LTSUMN.tsx (Miracle Network Page)

### A. Compliance & Security Section (moved from SocialUniverse)

```text
Compliance & Security
---------------------
| KYC Required       | AML Compliant      | Secure Infrastructure |
| Identity verify    | Anti-money         | Enterprise-grade       |
| for payouts       | laundering         | transaction security   |
```

### B. Node Information Section (NEW)

Based on the LTMN platform architecture:

```text
Mining Nodes
------------
| Personal Node      | Community Node     | Enterprise Node       |
| Home mining        | Shared pool        | High-volume           |
| $50/mo setup       | mining             | operations            |
| 1x multiplier      | 3x multiplier      | 10x multiplier        |
```

### C. Node Benefits

- Run your own validator node
- Earn passive income from network fees
- Contribute to network security
- Stake RC tokens for enhanced rewards

### D. Mining Dashboard Features

- Real-time earnings tracking
- Node uptime monitoring
- Network statistics
- Payout history

---

## 3. Section Placement in LTSUMN.tsx

New section order for LTMN page:

1. Hero (existing)
2. 14 Live Features (existing)
3. Subscription Tiers (existing)
4. Mining Tiers - 3 Leaves (existing)
5. **Node Information (NEW)** - Mining nodes and node types
6. **Compliance & Security (MOVED)** - KYC, AML, Infrastructure
7. Financial Vision (existing)
8. Development Roadmap (existing)
9. Historic Legacy Strongman sidebar (existing)
10. CTA buttons (existing)

---

## 4. Technical Implementation

### Icons to Import for LTSUMN.tsx:
```typescript
import { Lock, Server } from 'lucide-react';
// Shield is already imported
```

### Node Types Data Structure:
```typescript
const nodeTypes = [
  {
    name: 'Personal Node',
    desc: 'Home mining setup',
    cost: '$50/mo',
    multiplier: '1x',
    color: 'border-cosmic-teal'
  },
  {
    name: 'Community Node',
    desc: 'Shared pool mining',
    cost: '$150/mo',
    multiplier: '3x',
    color: 'border-cosmic-purple'
  },
  {
    name: 'Enterprise Node',
    desc: 'High-volume operations',
    cost: '$500/mo',
    multiplier: '10x',
    color: 'border-cosmic-gold'
  }
];
```

---

## 5. Visual Layout

### Compliance Section (3 cards in grid):

```text
+-------------------+-------------------+-------------------+
|    KYC Required   |   AML Compliant   | Secure Infra      |
|    [Shield icon]  |   [Lock icon]     | [Server icon]     |
|    green border   |   blue border     | purple border     |
+-------------------+-------------------+-------------------+
```

### Node Section (3 cards in grid):

```text
+-------------------+-------------------+-------------------+
|  Personal Node    |  Community Node   |  Enterprise Node  |
|  [Home icon]      |  [Users icon]     | [Building icon]   |
|  $50/mo • 1x      |  $150/mo • 3x     | $500/mo • 10x     |
|  teal border      |  purple border    | gold border       |
+-------------------+-------------------+-------------------+
```

---

## 6. Why This Makes Sense

**KYC/Compliance belongs on LTMN because:**
- KYC is required for crypto payouts
- AML is a blockchain/financial regulation
- These relate to mining and token transactions

**SocialUniverse focuses on:**
- Social features (messaging, posting, connections)
- Creator tools and subscriptions
- Community programs

---

## Summary of Changes

1. **Remove** Compliance & Security section from `SocialUniverse.tsx` (lines 319-341)
2. **Add** Compliance & Security section to `LTSUMN.tsx` after Mining Tiers
3. **Add** Node Information section to `LTSUMN.tsx` with 3 node types
4. **Import** additional icons (Lock, Server) in LTSUMN.tsx

