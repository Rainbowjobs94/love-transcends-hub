

# Fix LTSUMN, Update Photos & Add Video Background

## Overview
This plan addresses multiple updates to align the site content with miraclemining.network, update profile photos for both John and Rainbow Strongman, and add autoplay video backgrounds.

---

## 1. Update Profile Photos

### John Strongman Photo
- **New image**: `IMG_4760.png` - World Bank Mining Expert illustration
- **Location**: Copy to `src/assets/about/john-strongman-portrait.png`
- **Usage**: Replace current photo in `JohnStrongmanTribute.tsx` and `AboutSection.tsx`

### Rainbow Strongman Photo  
- **New image**: `IMG_4317-2.jpeg` - Personal photo
- **Location**: Copy to `src/assets/about/rainbow-strongman-portrait.jpeg`
- **Usage**: Use in `AboutSection.tsx` as the founder portrait

---

## 2. Video Background at Site Launch

### Assets to Add
Copy 4 uploaded videos to `public/videos/`:
- `8fa7838534ef4fa987e0e5f5e81585b6.mp4` → `hero-video-1.mp4`
- `b0b1c8c4-a6be-47ef-a4e7-8da3deaf6f25-custom_video.mp4` → `hero-video-2.mp4`
- `83134f98-e3ef-4a5c-8c24-b7f8190b21b3-custom_video.mp4` → `hero-video-3.mp4`
- `b30bc9af-0e4f-482b-a69f-a1d1e948cf47-custom_video.mp4` → `hero-video-4.mp4`

### Implementation in HeroSection.tsx
- Add `<video>` element with autoplay, muted, loop, playsInline
- Position as absolute background layer behind stars
- Add dark overlay gradient for text readability
- Video will autoplay on site load

---

## 3. Fix LTSUMN Page Content

### Update to Match MiracleMining.network

The current LTSUMN page needs substantial updates to match the actual content from miraclemining.network:

**Header Update:**
- Keep the long header: "Love Transcends Reality through Mining Miracles via Social Engagements, User/IA Controlled Censorship/Filters, and Creator IP through Data Mining"

**14 Live Features Section (from miraclemining.network):**

Core Social (4 features):
1. Home Feed - 4-tier visibility system
2. Profile - Avatar upload, posts/media/likes tabs
3. Discover & Search - Category filters, Rising Stars
4. Connections - Tier-based filtering

Content & Monetization (3 features):
1. Reality Hub - AI Media Gallery, YouTube, Twitch, Spotify, RSS
2. LTRStream - Live streaming with category filters
3. PostMining - Upload pay-to-view content

Marketplace & Services (2 features):
1. LTMarket - Products, auctions, services
2. LTCare - Life coaching and therapy directory

Safety & Infrastructure (5 features):
1. Calendar & Events - Event creation, ticket purchasing
2. LTMessaging - Real-time chat, video calls
3. LTMiningNetwork - Mining dashboard, stats
4. IARainbowGuardian - AI safety, personal censorship import
5. Settings - Theme toggle, account preferences

**Subscription Tiers (Updated Pricing from site):**
- SelfCelebrity: $50/mo
- 4Family: $100/mo
- Miner: $250/mo
- Pearl: $350/mo
- Jasper: $500/mo

**Mining Tiers (3 Leaves - Correct values):**
| Tier | Total RC | Creator | Viewers | Platform |
|------|----------|---------|---------|----------|
| Bronze | $1 RC | 80% ($0.80) | - | 20% ($0.20) |
| Silver | $2 RC | 40% ($0.80) | 35% ($0.70) | 25% ($0.50) |
| Gold | $5 RC | 65% ($3.25) | 25% ($1.25) | 10% ($0.50) |

**Financial Vision Section:**
- $3B Valuation Target (Miracle Network App)
- $1.5T Annual Redistribution Goal (LT:S&ANP)
- 75% Revenue to Citizens
- $1,500/month Projected User Earnings

**Roadmap (v1/v2/v3):**
- v1 Beta: 14 features complete
- v2 Growth: API integrations, auth, RC launch, mobile apps
- v3 Ecosystem: LTHousing, LTThrifty, global expansion

---

## 4. Add Historic Legacy Strongman Section to Side Panels

### About Rainbow Section (from miraclemining.network content)
- "From adversity to advocacy — a story of resilience and transformative love"
- Survivor of trafficking and institutional abuse, now leading advocate
- Founded Love Transcends in 2013
- HIV/AIDS awareness, mental health reform advocate, and Smart Revover Lifestyle Since 2013
-attended San Bernardino College craft Hills College for psychology arts Theatre in business.
- Philosophy: "Love Transcends Adversity"

### Core Values Display
- Compassion, Equity, Community, Justice, Love, honesty, transparency, empathy, remorse, inclusivity, uniqueness, honor, and Justice.

### Vision Statistics
- 75% Ad Revenue to Citizens
- $1.5T Annual Redistribution Goal (by year 15)

---

## 5. Additional Gallery Images

Add the cosmic artwork images to the gallery:
- `88B5AC9F-8F75-448F-B7E4-A5C97A83A6FA.png` - Rainbow Guardian Rangers
- `8FEA27B8-2F46-4880-8E02-173A728B59C2.png` - Love Transcends multilingual cosmic art

---

## Technical Implementation Files

### Files to Create/Copy:
```text
public/videos/hero-video-1.mp4
public/videos/hero-video-2.mp4  
public/videos/hero-video-3.mp4
public/videos/hero-video-4.mp4
src/assets/about/john-strongman-portrait.png
src/assets/about/rainbow-strongman-portrait.jpeg
src/assets/gallery/rainbow-guardian-rangers.png
src/assets/gallery/love-transcends-multilingual.png
```

### Files to Modify:

1. **src/components/landing/HeroSection.tsx**
   - Add video background element
   - Video autoplay, muted, loop
   - Dark overlay for readability

2. **src/components/landing/AboutSection.tsx**
   - Update Rainbow Strongman photo to new image
   - Add detailed biography from miraclemining.network
   - Add Core Values display
   - Keep "Legacy of Historic Strongmans" title

3. **src/components/landing/JohnStrongmanTribute.tsx**
   - Replace photo with new World Bank illustration

4. **src/pages/LTSUMN.tsx** (Major Rewrite)
   - Update all 14 features with correct details
   - Fix subscription tier pricing
   - Add correct mining tier percentages (Bronze/Silver/Gold)
   - Add Financial Vision section ($3B target, $1.5T redistribution)
   - Add v1/v2/v3 Roadmap
   - Add Demo button linking to miraclemining.network/app
   - Add Historic Legacy Strongman sidebar panel

5. **src/pages/Gallery.tsx**
   - Add new cosmic artwork images

---

## Summary of Changes

| Component | Change |
|-----------|--------|
| Hero Video | Add autoplay background video |
| John Photo | New World Bank Mining Expert illustration |
| Rainbow Photo | New personal portrait |
| LTSUMN | Complete content update matching miraclemining.network |
| About Section | Enhanced bio with Core Values |
| Gallery | 2 new cosmic artworks added |

