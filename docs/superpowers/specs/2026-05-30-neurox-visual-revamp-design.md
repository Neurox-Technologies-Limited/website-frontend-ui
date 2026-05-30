# Neurox Technologies — Visual Revamp Design

Date: 2026-05-30
Branch: feat/visual-refresh
Status: Approved (user sign-off recorded in session)

## Goal

Modernize the Neurox marketing site with a clean-minimal aesthetic, switch the
entire application font to **Baloo 2**, introduce IT-related imagery (Unsplash
CDN), and use the `public/neurox.png` logo throughout.

## Stack (as-is)

Vite 5 · React 18 · TypeScript · Tailwind CSS v3 (HSL CSS-variable tokens) ·
shadcn/ui · framer-motion · react-router v6. Theme tokens live in `src/index.css`
(`:root` = dark, `.light` = light) and are surfaced to Tailwind in
`tailwind.config.ts`. Default theme is light (`ThemeProvider`).

## Decisions

- **Images:** Unsplash CDN hotlinks (`images.unsplash.com/photo-…?auto=format&fit=crop&q=80`).
- **Direction:** Clean minimal ("Trust & Authority"): whitespace, restrained
  color, soft shadows, WCAG-AA contrast, no AI purple/pink gradients.
- **Scope:** All pages — Home (+ its sections), About, Services, Partners,
  Contact, the 3 product pages, NotFound, plus Navbar & Footer.
- **Font:** Baloo 2 for the **entire** app (body, headings, and the former
  monospace labels). Confirmed by user.
- **Brand color:** Keep Neurox blue (override the skill's generic gold). Single
  blue primary + one lighter blue/indigo accent; keep the red "x" brand mark.

## Typography

- Load Baloo 2 (400/500/600/700/800) via Google Fonts `@import`; remove Geist.
- Remap Tailwind `font-sans` **and** `font-mono` to `"Baloo 2"` so every existing
  `font-mono` label renders in Baloo 2 (no per-file churn). Keep `.font-mono`
  utility pointing at Baloo 2 too.
- Body 400/500, line-height ~1.6. Headings 700/800. Base heading letter-spacing
  relaxed to ~-0.01em (the old -0.04em was tuned for Geist). Existing inline
  `tracking-tighter/-tight` utilities remain.

## Color tokens (clean-minimal, blue)

Refine `src/index.css` variables for both themes:

- Light: background ~white, foreground ink (`240 10% 12%`), muted grays, border
  `~240 6% 90%`. Primary/accent = blue (`~221 83% 53%`), accent-2 = indigo
  (`~243 75% 59%`). `--t5-red` retained for the wordmark "x".
- Dark: deep neutral background, same blue accents tuned for contrast.
- Radius rounder to suit Baloo: `--radius: 12px`, `--radius-lg: 20px`.
- Reduce mesh/grid opacity for a calmer, cleaner backdrop.

## Components / layout

- `.service-card`, `.glass`, cards → larger radius, softer shadow, gentle hover
  lift. `.label-tag` keeps its uppercase tracked treatment (now Baloo 2, no
  mono). `.gradient-text` / `.gradient-cta` use blue→indigo.
- Add a small reusable image helper module `src/lib/images.ts` exporting curated
  Unsplash URLs by theme (datacenter, cloud, code, security, team, ai, network).
- Images use `<img loading="lazy">`, real `alt`, aspect-ratio framing, rounded
  corners, subtle border/overlay, and `onError` → `/placeholder.svg` fallback.

## Logo

- Navbar: replace text-only wordmark with `<img src="/neurox.png">` (+ keep the
  "Neurox Technologies" text lockup for clarity). Footer: same logo.
- `index.html`: favicon → `/favicon.png`; set og/twitter image to the logo;
  remove stale Lovable-signed OG URLs and the `@Lovable` twitter handle.

## Imagery placement

- Home Hero: framed IT visual (network/datacenter) alongside the existing copy.
- Home sections (About/Commitment/Contact) and each page hero: one supporting
  image where it reinforces the message — used sparingly per clean-minimal.
- Product pages (Poker21/Honk/Laundromart): hero supporting image.

## Out of scope (YAGNI)

No new dependencies, no routing changes, no copy rewrites beyond trivial labels,
no backend/form wiring. Reuse existing shadcn components and framer-motion.

## Verification

- `npm run build` must pass (TypeScript + Vite).
- Spot-check light & dark themes; confirm Baloo 2 applied everywhere, logo in
  nav/footer, images load with fallback, AA contrast on text/CTAs.
