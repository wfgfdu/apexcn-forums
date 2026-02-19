# Design Concepts for oracleapex.cn

## Overview
Three distinct UI/UX design concepts for oracleapex.cn, inspired by Oracle's official website style (Clean, Enterprise, Professional, Red/Black/Grey/White palette).

---

## Concept A: Oracle Classic

**Style Name:** Oracle Classic Enterprise  
**Vibe:** Traditional, authoritative, corporate, trustworthy

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | Oracle Red | `#F80000` |
| Secondary | Charcoal Black | `#312D2A` |
| Background | Pure White | `#FFFFFF` |
| Surface | Light Grey | `#F5F5F5` |
| Text Primary | Dark Grey | `#333333` |
| Text Secondary | Medium Grey | `#666666` |
| Accent | Oracle Red Dark | `#C40000` |

### Typography
- **Headings:** "Helvetica Neue", Arial, sans-serif (Bold, 700)
- **Body:** "Helvetica Neue", Arial, sans-serif (Regular, 400)
- **Hero Title:** 56px
- **Section Title:** 32px
- **Body Text:** 16px
- **Line Height:** 1.5

### Layout Structure
- **Navigation:** Fixed top bar with logo left, menu center, CTA right
- **Hero:** Full-width, centered content with headline + subtext + CTA buttons
- **Content Grid:** 3-column card grid for main features
- **Footer:** Dark background, multi-column links

### Key Components
- **Buttons:** Solid red background, white text, slight rounded corners (4px), hover darkens
- **Cards:** White background, subtle shadow, grey border on hover
- **Navigation:** Black background, white text, red hover underline

---

## Concept B: Oracle Modern

**Style Name:** Oracle Modern Tech  
**Vibe:** Sleek, innovative, tech-forward, dynamic

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | Electric Red | `#E63946` |
| Secondary | Deep Black | `#1A1A2E` |
| Background | Off White | `#FAFAFA` |
| Surface | Soft Grey | `#F0F0F0` |
| Text Primary | Near Black | `#2B2D42` |
| Text Secondary | Slate Grey | `#8D99AE` |
| Accent | Vibrant Red | `#FF6B6B` |

### Typography
- **Headings:** "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif (Semi-bold, 600)
- **Body:** "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif (Regular, 400)
- **Hero Title:** 64px, letter-spacing: -1px
- **Section Title:** 28px
- **Body Text:** 17px
- **Line Height:** 1.6

### Layout Structure
- **Navigation:** Transparent fixed nav, becomes solid on scroll
- **Hero:** Split layout - content left, abstract graphic right
- **Content Grid:** 4-column responsive grid
- **Footer:** Clean, minimal single row

### Key Components
- **Buttons:** Pill-shaped (border-radius: 50px), gradient red background, subtle glow on hover
- **Cards:** No border, soft shadow (0 10px 40px rgba(0,0,0,0.08)), hover lift effect
- **Navigation:** White text on dark, transparent, blur backdrop

---

## Concept C: Oracle Minimal

**Style Name:** Oracle Minimal Pure  
**Vibe:** Clean, focused, minimalist, content-first

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | Muted Red | `#D62828` |
| Secondary | Warm Grey | `#3D3D3D` |
| Background | Pure White | `#FFFFFF` |
| Surface | Warm White | `#FAFAF9` |
| Text Primary | Dark Charcoal | `#1C1C1C` |
| Text Secondary | Cool Grey | `#71717A` |
| Border | Light Border | `#E5E5E5` |

### Typography
- **Headings:** "Inter", "Segoe UI", system-ui, sans-serif (Medium, 500)
- **Body:** "Inter", "Segoe UI", system-ui, sans-serif (Regular, 400)
- **Hero Title:** 48px
- **Section Title:** 24px
- **Body Text:** 15px
- **Line Height:** 1.7

### Layout Structure
- **Navigation:** Minimal top bar, logo only + essential links
- **Hero:** Centered, generous whitespace, text-focused
- **Content Grid:** 2-column with wide gaps
- **Footer:** Simple centered layout

### Key Components
- **Buttons:** Outlined style, 1px border, red text, fill on hover
- **Cards:** No shadow, thin border only, hover background tint
- **Navigation:** Simple underline on hover, no background

---

## Site Content Mapping

All 3 concepts support the following content sections:
1. APEX 问题求助 (Forum/Help) - Primary CTA
2. APEX 新手入门 (Beginner Guide) - Feature Card
3. APEX 进阶技巧 (Advanced Tips) - Feature Card
4. 建议与意见反馈 (Feedback) - Footer Link

---

## Implementation Notes

- All concepts use CSS variables for easy theming
- Responsive breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
- All HTML files are self-contained with inline CSS
- Use semantic HTML5 elements for accessibility
