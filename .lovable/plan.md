

# Dedicated Bio Landing Pages + Privacy Policy Update

## Overview

This plan creates two standalone landing pages -- one for **Rainbow Strongman** and one for **John Strongman** -- each featuring an expanded biography, contact details, and links. It also updates the **Privacy & Trademarks** page to include contact information for both team members and cross-links to the new bio pages.

---

## 1. John Strongman Landing Page

**New file:** `src/pages/JohnStrongmanBio.tsx`
**Route:** `/john-strongman`

Sections:
- **Hero header** with portrait photo (`john-strongman-portrait.png`), name, and title (Co-Founder & Legacy Advisor, World Bank Mining Expert)
- **Biography** -- expanded version of existing content from `JohnStrongmanTribute.tsx` and `Story.tsx`: 46-year World Bank career, humanitarian work in Africa, White House recognition
- **White House Letter** -- expandable image (`whitehouse-letter-collage.jpeg`)
- **Legacy highlights** -- grid cards covering key achievements (World Bank, humanitarian impact, White House, LTR co-founder)
- **Contact details** -- Email: `Johnjasper@rainbowjobs.love`, Phone: `369-888-1002`
- **Back links** to Home and Contact page
- Uses existing layout pattern: `Navigation`, `StarField`, `Footer` components, `cosmic-bg` theme, `glass-card` styling

---

## 2. Rainbow Strongman Landing Page

**New file:** `src/pages/RainbowStrongmanBio.tsx`
**Route:** `/rainbow-strongman`

Sections:
- **Hero header** with portrait photo (`rainbow-strongman-portrait.jpeg`), name, and title (Founder & CEO)
- **Name meaning section** -- reused from `Story.tsx` (John, Jasper, River, Alexander breakdown with rainbow-colored dots)
- **Biography** -- survivor story, visionary behind Love Transcends Reality, family-first technology advocate
- **Royal Heritage** -- DNA heritage reference with image (`dna-heritage.jpeg`), lineage claims (King Richard III, Pharaoh Ramesses III)
- **Contact details** -- Emails: `Rainbow@rainbowjobs.love`, `Rainbowstrongman@ltsocial.net`, Phone: `369-888-1001`
- **Social media links** -- Instagram, TikTok, YouTube
- **Back links** to Home and Contact page
- Same layout pattern as John's page

---

## 3. Privacy & Trademarks Policy Update

**Edit file:** `src/pages/PrivacyPolicy.tsx`

Changes:
- Add a new **"Contact & Team"** section between the IP Notice and the Back link, featuring:
  - Brief bios of Rainbow Strongman and John Strongman with their contact details (emails and phone numbers)
  - Links to their dedicated bio pages (`/rainbow-strongman` and `/john-strongman`)
- Update the IP Notice contact section to also reference John's email alongside Rainbow's
- Update "Last Updated" date to current date

---

## 4. Routing & Navigation Updates

**Edit file:** `src/App.tsx`
- Import and register two new routes:
  - `/john-strongman` -> `JohnStrongmanBio`
  - `/rainbow-strongman` -> `RainbowStrongmanBio`

**Edit file:** `src/components/Footer.tsx`
- Add "Contact" link to the Pages section pointing to `/contact`

**Edit file:** `src/pages/Contact.tsx`
- Add "View Full Bio" links on each team member card linking to `/rainbow-strongman` and `/john-strongman` respectively

---

## Technical Details

- All new pages follow the existing page pattern: `Navigation` + `StarField` + `main` content + `Footer`
- Reuses existing image assets from `src/assets/about/`
- No new dependencies required
- No database changes needed
- Custom `TikTokIcon` SVG component reused on Rainbow's page for social links

