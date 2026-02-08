

# Contact Information & Social Media Update

## Summary of Changes

Update contact details across multiple files to add the main phone number and social media links.

---

## Current Contact Info Found

| Location | Current Email | Current Phone |
|----------|---------------|---------------|
| `ContactSection.tsx` | Rainbow@rainbowjobs.love, Rainbowstrongman@ltsocial.net | 369-888-1001 (Rainbow), 369-888-1002 (John) |
| `Footer.tsx` | None displayed | None displayed |
| `Navigation.tsx` | None | None |

---

## Updates Required

### 1. Add Main Phone Number: **369-888-1000**

This is the primary contact number to be added to:
- ContactSection (as main line)
- Footer (new contact section)
- SocialUniverse page (new contact section)

### 2. Add Social Media Links

| Platform | Handle/Link |
|----------|-------------|
| **Instagram** | @RainbowStrongman → `https://instagram.com/rainbowstrongman` |
| **TikTok** | @RainbowJobs → `https://tiktok.com/@rainbowjobs` |
| **YouTube** | Rainbow Strongman → `https://youtube.com/@rainbowstrongman` |

### 3. Keep Current Emails (already correct)
- Rainbow@rainbowjobs.love
- Rainbowstrongman@ltsocial.net
- Johnjasper@rainbowjobs.love

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/landing/ContactSection.tsx` | Add main phone 369-888-1000, add Instagram/TikTok/YouTube icons and links |
| `src/components/Footer.tsx` | Add new "Connect" column with phone and social media links |
| `src/pages/SocialUniverse.tsx` | Add contact section at bottom with phone and socials |

---

## Technical Changes

### ContactSection.tsx Updates

Add social media row after the email section for Rainbow Strongman:

```
Social Media Links:
- Instagram icon → instagram.com/rainbowstrongman
- TikTok icon → tiktok.com/@rainbowjobs  
- YouTube icon → youtube.com/@rainbowstrongman
```

Add main phone line before individual numbers:
```
Main Line: 369-888-1000
Rainbow: 369-888-1001
John: 369-888-1002
```

### Footer.tsx Updates

Add new "Connect" column:
```
Connect
├── Phone: 369-888-1000
├── Instagram ↗
├── TikTok ↗
└── YouTube ↗
```

### SocialUniverse.tsx Updates

Add contact section before "Three Pillars" section:
```
Contact & Social
├── Phone: 369-888-1000
├── Email: Rainbow@rainbowjobs.love
└── Social: Instagram | TikTok | YouTube
```

---

## Icon Requirements

Will use Lucide icons where available:
- `Phone` - already imported
- `Mail` - already imported
- `Instagram` - available in lucide-react
- `Youtube` - available in lucide-react

For TikTok (not in lucide), will use either:
- Custom SVG icon, or
- Text link with external link indicator

---

## Updated Contact Card Structure

```
Rainbow Strongman
CEO, Founder, Survivor Influencer & Historian

📍 219 Sheridan Ave, Longwood, FL 32750
📞 Main: 369-888-1000
📞 Direct: 369-888-1001
✉️ Rainbow@rainbowjobs.love
✉️ Rainbowstrongman@ltsocial.net

Follow:
📸 Instagram: @RainbowStrongman
🎵 TikTok: @RainbowJobs
🎬 YouTube: Rainbow Strongman
```

---

## Summary

This update will:
1. Add **369-888-1000** as the main phone number
2. Add **Instagram** (@RainbowStrongman) link
3. Add **TikTok** (@RainbowJobs) link
4. Add **YouTube** (Rainbow Strongman) link
5. Keep existing emails unchanged
6. Update Footer with social links
7. Add contact info to SocialUniverse page

