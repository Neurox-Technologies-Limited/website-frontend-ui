# Neurox Technologies — Visual Refresh Design

**Date:** 2026-05-13
**Status:** Approved
**Scope:** Visual-only refresh of the website. No IA, copy, or routing changes.

## Goal

Evolve the existing brutalist-terminal identity (mono labels, numbered sections, the red `x` wordmark) with softened corners, ambient gradient depth, and richer typography. Make the site read as modern, tech-oriented, and richer yet simple — without losing brand recognizability.

## Direction (locked decisions)

| Decision | Choice |
|---|---|
| Aesthetic direction | Hybrid: evolve + soften the current brutalist-terminal identity |
| Hero treatment | Full-bleed gradient mesh + 3 floating glass capability cards |
| Typography | Geist Sans + Geist Mono (replaces Baloo 2 + JetBrains Mono) |
| Color accents | Cyan + violet duo. Red `x` preserved in the "Neuro**x**" wordmark |
| Section rhythm | Alternating ambient / clean — rich-then-rest |
| Phone display | Contact page (both, stacked with `tel:` links) + Footer (primary) |

## 1. Design tokens

### Typography
- Headings & body: **Geist Sans** weights 300, 400, 500, 600, 700 — replaces Baloo 2
- Labels & technical detail: **Geist Mono** weights 400, 500 — replaces JetBrains Mono
- Loaded via Google Fonts. Drop existing Baloo 2 / JetBrains Mono imports.
- `font-display: swap`, preconnect to Google Fonts.

### Color (HSL tokens in `src/index.css`)
- `--accent` (cyan) — keep at `180 80% 45%` (dark) / `180 80% 35%` (light)
- `--accent-2` (violet) — new, `265 85% 65%` (dark) / `265 75% 55%` (light); fallback to `265 75% 45%` in light if AA contrast fails
- `--t5-red` — kept; used only in the wordmark `x`
- `--gradient-mesh` — utility composing two radial-gradient blobs (cyan top-left, violet bottom-right) at 25% opacity in dark, 15% in light

### Radius
- `--radius` moves from `0px` → `8px` (default cards, inputs, buttons)
- `--radius-lg` new: `16px` (hero capability cards)
- Decorative borders use `1px hsl(var(--border) / 0.5)` instead of full-opacity border

### Surfaces (new utilities)
- `.glass` (dark): `bg-card/40 backdrop-blur-xl border border-white/10`
- `.glass` (light): `bg-white/60 backdrop-blur-xl border border-black/5`
- `.gradient-text`: linear gradient cyan → violet text fill, with solid-color fallback
- `.gradient-mesh-bg`: animated background blob layer + 5%-opacity grid SVG + 3%-opacity noise

### Motion
- New `src/lib/motion.ts` exports shared easings and stagger variants (`easeOutExpo`, 600ms baseline)
- All section-reveal animations migrate to these shared variants
- Hero capability cards: magnetic 4° tilt on hover; disabled at `prefers-reduced-motion`
- Mesh blob drift: 40s loop CSS keyframes; disabled at `prefers-reduced-motion`

## 2. Hero (homepage)

**Layout:** Full-bleed, ~85vh. Headline group center-aligned. Capability cards row beneath CTAs.

**Background:** `.gradient-mesh-bg` — two slow-drifting radial blobs (cyan top-left, violet bottom-right) + faint grid SVG overlay + noise texture.

**Headline:** "ELEVATING BUSINESS THROUGH **TECHNOLOGY.**" — Geist Sans 700, `clamp(3rem, 8vw, 7rem)`, tracking-tight. "TECHNOLOGY." renders with `.gradient-text` (cyan → violet).

**Eyebrow:** `ENTERPRISE IT INFRASTRUCTURE` — Geist Mono, existing `.label-tag` style.

**CTAs:**
- Primary "VIEW SERVICES" — cyan→violet gradient background, white text, 8px radius
- Secondary "CONTACT US" — outline button, `.glass` background on hover

**Capability cards** (3 across desktop, stack on mobile):

| # | Icon (lucide) | Title | Subtitle |
|---|---|---|---|
| 1 | `Cloud` | Cloud & Infrastructure | Scalable, secure, global |
| 2 | `Shield` | Cybersecurity | Detect, defend, recover |
| 3 | `Code` | Software Engineering | Custom builds, mobile + web |

Each card: glass surface, 16px radius, icon top-left in a cyan-tinted square, title Geist Sans 600, subtitle muted. Magnetic hover tilt.

## 3. Section-by-section treatment

| Section | Background | Card style | Notes |
|---|---|---|---|
| Hero | Gradient mesh + grid + noise | Glass capability cards | See §2 |
| About | Clean (`--background`) | None — text + numbered label | Single decorative gradient line/divider |
| Services | Subtle radial cyan glow top-right | Soft 8px-radius cards, `.glass` on hover | 14 services in 4-col grid; hover lifts 4px + cyan border-glow |
| Clients | Clean | CSS-only logo marquee, pause on hover | Logos grayscale → color on hover |
| Commitment | Faint noise + violet accent line | Two-column quote + supporting list | The only section where violet leads |
| Partners | Clean | Soft 8px cards, hover lifts | Same softer treatment as Services |
| Contact (section + page) | Gradient mesh return | Glass form card | Inputs get 8px radius; focus ring uses gradient |

## 4. Navbar

- Add baseline `backdrop-blur-sm bg-background/40` even when unscrolled; deepen to `bg-background/95` on scroll
- Logo unchanged: `Neuro` + red `x` + `TECHNOLOGIES` mono tag
- Right-side CTA "INITIALIZE CONTACT" → "**Contact Us**" (Geist Sans 500, gradient pill, 8px radius)
- "SYS: OPERATIONAL" pulse stays
- Theme toggle stays

## 5. Footer

- Same 4-column structure as today
- Add new column "**GET IN TOUCH**":
  - Email: `info@neuroxtech.com` (mailto:)
  - Phone (primary): `+234 818 473 3736` (tel:+2348184733736)
- Subtle gradient hairline at the top (cyan → violet, 1px, 30% opacity)
- Tagline "ARCHITECTURE FOR PRECISION." stays

## 6. Contact page phone block

Replace the single existing phone line in `src/pages/ContactPage.tsx` (currently `+234 (0) 1 234 5678`) with a single contact-info row that contains both numbers stacked, sharing one `Phone` icon:

```
[Phone icon]   Phone
               +234 818 473 3736   primary     →  tel:+2348184733736
               +234 814 448 8577   secondary   →  tel:+2348144488577
```

Both numbers are `tel:` anchors with hover color = cyan accent. "Phone" title in Geist Sans semibold (matching the existing Email/Office labels above and below it); numbers in Geist Sans 500; "primary"/"secondary" sub-labels in Geist Mono muted, right-aligned next to each number. Structure matches the existing `Mail` and `MapPin` rows so the column layout stays consistent.

## 7. Light theme parity

Light is the default theme (per the most recent commit). Every change must work in both themes:
- Gradient mesh blobs use 15% opacity in light (vs 25% in dark)
- Glass cards use `bg-white/60 + border-black/5` in light
- Gradient text uses different stops per theme to maintain contrast
- Violet may drop to `265 75% 45%` in light if AA contrast against `--background` fails

## 8. Accessibility & performance

- All gradient text has a solid-color fallback under `@supports not (background-clip: text)`
- Mesh blob drift respects `prefers-reduced-motion: reduce`
- Magnetic card tilt disabled at `prefers-reduced-motion: reduce`
- All new `tel:` and `mailto:` links keyboard-accessible with visible focus rings
- Geist fonts: `font-display: swap`; `<link rel="preconnect">` for `fonts.googleapis.com` and `fonts.gstatic.com`
- Backdrop-blur fallback: solid background color where `backdrop-filter` is unsupported
- Color contrast verified against WCAG AA for both themes before merge

## 9. Out of scope

- 3D / WebGL hero (rejected — chose CSS gradient mesh for lightness)
- Bento grid for Services (rejected as too heavy for the "simple" constraint)
- Page-level scroll-storytelling (no scroll-pinning)
- Copy or IA changes — visual only
- The product detail pages (Poker 21, Honk, Laundromart) and About/Services/Partners pages are not individually redesigned; they inherit the new tokens automatically. Any per-page regressions discovered after token swap will be fixed inline.

## 10. Files changed

**Modified:**
- `index.html` — Geist font links, drop Baloo
- `src/index.css` — new tokens, `.glass`, `.gradient-text`, `.gradient-mesh-bg`, mesh keyframes, font swap
- `tailwind.config.ts` — register `accent-2`, font families, radius scale
- `src/components/HeroSection.tsx` — full rewrite per §2
- `src/components/Navbar.tsx` — softer CTA, baseline backdrop-blur
- `src/components/ServicesSection.tsx` — softened cards, ambient glow, hover treatment
- `src/components/CommitmentSection.tsx` — violet accent line, layout tweak
- `src/components/ContactSection.tsx` — gradient mesh background, glass form
- `src/components/Footer.tsx` — Get in Touch column, gradient hairline
- `src/pages/ContactPage.tsx` — two phone numbers stacked with `tel:` links

**New:**
- `src/lib/motion.ts` — shared easings and reveal variants
- `src/components/ui/CapabilityCard.tsx` — reusable glass card with magnetic hover
- `src/components/ui/GradientMesh.tsx` — reusable gradient-mesh background

## 11. Success criteria

- Homepage hero renders gradient mesh + 3 capability cards in both themes
- All headings render in Geist Sans; all labels in Geist Mono; no Baloo references remain
- `--accent-2` (violet) appears in: hero gradient text, mesh background, Commitment section accent line, primary CTA gradient
- Contact page displays both phone numbers with working `tel:` links
- Footer displays primary phone in a "GET IN TOUCH" column
- Light and dark themes both pass WCAG AA contrast for body text and CTAs
- `prefers-reduced-motion: reduce` disables mesh drift and magnetic tilt
- No regressions on product pages (Poker 21, Honk, Laundromart) after token swap
- `npm run build` succeeds
- Lighthouse performance score does not drop below 85 on the homepage
