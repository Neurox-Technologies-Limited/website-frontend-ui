# Neurox Visual Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply the hybrid evolve+soften visual refresh from the spec — Geist typography, cyan+violet accent palette, softened 8px radius, ambient gradient mesh hero with floating glass capability cards, alternating section rhythm, and updated phone-number presentation on the Contact page and footer.

**Architecture:** Token-first refactor — update CSS variables and Tailwind config, then add shared utilities (`GradientMesh`, `CapabilityCard`, `lib/motion.ts`), then refactor consumer components in a leaf-first order so each commit is independently buildable. Pure visual change: no data, routing, or business-logic shifts. Product pages inherit token changes for free.

**Tech Stack:** Vite 5, React 18, TypeScript, Tailwind CSS 3.4, shadcn-ui, Framer Motion 12, Geist (Google Fonts), Lucide icons.

**Spec reference:** `docs/superpowers/specs/2026-05-13-neurox-visual-refresh-design.md`

**A note on TDD:** This is a visual/CSS refactor — there is no business logic to test. Verification for every task is: (1) `npm run build` succeeds, (2) `npm run lint` reports no new errors, (3) where a visible change exists, a Playwright screenshot confirms the change rendered in both light and dark themes. Tasks that introduce a new public component or utility get a smoke render test via Vitest. Tasks that touch only styling are verified through the build + screenshot loop, not unit tests.

**File-structure map:**
- `index.html` — font preconnect + Geist link
- `src/index.css` — token redefinition, new utilities, font-family swap, mesh keyframes
- `tailwind.config.ts` — register `accent-2`, font families, radius scale
- `src/lib/motion.ts` (new) — shared easings + reveal variants
- `src/components/ui/GradientMesh.tsx` (new) — reusable animated mesh background
- `src/components/ui/CapabilityCard.tsx` (new) — reusable glass card with magnetic hover
- `src/components/HeroSection.tsx` — full rewrite per spec §2
- `src/components/Navbar.tsx` — baseline blur, softer CTA
- `src/components/ServicesSection.tsx` — softened cards + ambient glow
- `src/components/CommitmentSection.tsx` — violet accent line
- `src/components/ContactSection.tsx` — mesh background + glass form
- `src/components/Footer.tsx` — Get-in-Touch column + gradient hairline
- `src/pages/ContactPage.tsx` — two phone numbers with `tel:` links

---

## Task 1: Add Geist fonts and remove Baloo 2 / JetBrains Mono

**Files:**
- Modify: `index.html` (lines 9–10 area — between the `<meta name="author">` and `<meta property="og:type">`)
- Modify: `src/index.css` (line 1 — replace existing `@import url(...)`)
- Modify: `tailwind.config.ts` (lines 16–19)

- [ ] **Step 1: Replace the Google Fonts import in `src/index.css`**

Replace line 1:

```css
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap');
```

with:

```css
@import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap');
```

- [ ] **Step 2: Add preconnect links to `index.html`**

Insert these two lines inside `<head>`, immediately before the `<title>` tag:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

- [ ] **Step 3: Update font-family in `src/index.css` body and headings**

Replace lines 105–118 (the `body`, `h1..h6`, and `.font-mono` rules) with:

```css
  body {
    @apply bg-background text-foreground antialiased;
    font-family: 'Geist', system-ui, sans-serif;
    font-feature-settings: 'ss01', 'cv11';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Geist', system-ui, sans-serif;
    letter-spacing: -0.04em;
    text-wrap: balance;
  }

  .font-mono {
    font-family: 'Geist Mono', ui-monospace, monospace;
  }
```

- [ ] **Step 4: Update Tailwind font families**

In `tailwind.config.ts`, replace lines 16–19 with:

```ts
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds with no font-related errors.

- [ ] **Step 6: Commit**

```bash
git add index.html src/index.css tailwind.config.ts
git commit -m "feat(fonts): swap Baloo 2 + JetBrains Mono for Geist + Geist Mono"
```

---

## Task 2: Add new color, radius, and gradient tokens

**Files:**
- Modify: `src/index.css` (the `:root` and `.light` blocks)
- Modify: `tailwind.config.ts` (`colors` and `borderRadius` sections)

- [ ] **Step 1: Add `--accent-2` (violet), `--radius-lg`, and grid/noise variables to `:root` in `src/index.css`**

Inside the `:root` block (after line 36, the `--ring` line, but before `--radius`), add:

```css
    --accent-2: 265 85% 65%;
    --accent-2-foreground: 0 0% 98%;
```

Change line 37 from `--radius: 0px;` to:

```css
    --radius: 8px;
    --radius-lg: 16px;
```

At the bottom of the `:root` block (after `--grid-color`), add:

```css
    --mesh-opacity: 0.25;
    --grid-opacity: 0.05;
    --noise-opacity: 0.03;
```

- [ ] **Step 2: Add corresponding tokens to `.light` in `src/index.css`**

Inside the `.light` block (after `--ring` line ~81), add:

```css
    --accent-2: 265 75% 55%;
    --accent-2-foreground: 0 0% 98%;
```

Change `--radius: 0px;` to:

```css
    --radius: 8px;
    --radius-lg: 16px;
```

At the bottom of `.light`, add:

```css
    --mesh-opacity: 0.15;
    --grid-opacity: 0.04;
    --noise-opacity: 0.025;
```

- [ ] **Step 3: Register `accent-2` and `radius-lg` in Tailwind**

In `tailwind.config.ts`, inside the `colors` block, after the existing `accent` entry (around line 45), add:

```ts
        "accent-2": {
          DEFAULT: "hsl(var(--accent-2))",
          foreground: "hsl(var(--accent-2-foreground))",
        },
```

Replace the `borderRadius` block (lines 69–73) with:

```ts
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 4px)",
      },
```

- [ ] **Step 4: Verify build and inspect**

Run: `npm run build`
Expected: succeeds. Run: `npm run dev` and open `http://localhost:5173`. Buttons and cards should now appear with 8px radius instead of sharp corners. The site still functions; no layout breakage.

- [ ] **Step 5: Commit**

```bash
git add src/index.css tailwind.config.ts
git commit -m "feat(tokens): add accent-2 violet, 8px radius, mesh opacity vars"
```

---

## Task 3: Add new CSS utility classes (`.glass`, `.gradient-text`, `.gradient-mesh-bg`)

**Files:**
- Modify: `src/index.css` (the `@layer components` block)

- [ ] **Step 1: Add the new utilities inside the existing `@layer components` block**

After the existing `.t5-red` rule (line ~172, end of the components block), add:

```css
  .glass {
    background: hsl(var(--card) / 0.4);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid hsl(var(--foreground) / 0.08);
  }

  .light .glass {
    background: hsl(0 0% 100% / 0.6);
    border: 1px solid hsl(var(--foreground) / 0.05);
  }

  @supports not (backdrop-filter: blur(1px)) {
    .glass { background: hsl(var(--card) / 0.95); }
    .light .glass { background: hsl(0 0% 100% / 0.95); }
  }

  .gradient-text {
    background: linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-2)) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  @supports not (background-clip: text) {
    .gradient-text { color: hsl(var(--accent)); -webkit-text-fill-color: currentColor; }
  }

  .gradient-cta {
    background: linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--accent-2)) 100%);
    color: hsl(var(--accent-foreground));
  }

  .gradient-hairline {
    background: linear-gradient(90deg, transparent 0%, hsl(var(--accent) / 0.3) 30%, hsl(var(--accent-2) / 0.3) 70%, transparent 100%);
    height: 1px;
  }

  .gradient-mesh-bg {
    position: relative;
    isolation: isolate;
  }

  .gradient-mesh-bg::before,
  .gradient-mesh-bg::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
  }

  .gradient-mesh-bg::before {
    background:
      radial-gradient(circle at 20% 25%, hsl(var(--accent) / var(--mesh-opacity)) 0%, transparent 45%),
      radial-gradient(circle at 80% 75%, hsl(var(--accent-2) / var(--mesh-opacity)) 0%, transparent 45%);
    animation: mesh-drift 40s ease-in-out infinite;
  }

  .gradient-mesh-bg::after {
    background-image:
      linear-gradient(hsl(var(--foreground) / var(--grid-opacity)) 1px, transparent 1px),
      linear-gradient(90deg, hsl(var(--foreground) / var(--grid-opacity)) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(circle at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 75%);
  }

  @keyframes mesh-drift {
    0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
    33% { transform: translate3d(3%, -2%, 0) scale(1.05); }
    66% { transform: translate3d(-2%, 3%, 0) scale(0.98); }
  }

  @media (prefers-reduced-motion: reduce) {
    .gradient-mesh-bg::before { animation: none; }
  }
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat(css): add glass, gradient-text, gradient-mesh-bg utilities"
```

---

## Task 4: Create shared motion utilities

**Files:**
- Create: `src/lib/motion.ts`

- [ ] **Step 1: Create the motion utilities file**

Create `src/lib/motion.ts`:

```ts
import type { Variants, Transition } from "framer-motion";

export const easeOutExpo: Transition["ease"] = [0.16, 1, 0.3, 1];

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutExpo } },
};

export const revealFade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOutExpo } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const heroHeadline: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOutExpo } },
};
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds. (No consumer yet, so this is a pure type check.)

- [ ] **Step 3: Commit**

```bash
git add src/lib/motion.ts
git commit -m "feat(motion): add shared easing and reveal variants"
```

---

## Task 5: Create `GradientMesh` component

**Files:**
- Create: `src/components/ui/GradientMesh.tsx`
- Create: `src/components/ui/__tests__/GradientMesh.test.tsx`

- [ ] **Step 1: Write the smoke render test first**

Create `src/components/ui/__tests__/GradientMesh.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { GradientMesh } from "../GradientMesh";

describe("GradientMesh", () => {
  it("renders with default gradient-mesh-bg class", () => {
    const { container } = render(
      <GradientMesh>
        <p>child</p>
      </GradientMesh>,
    );
    const root = container.firstChild as HTMLElement;
    expect(root.className).toContain("gradient-mesh-bg");
    expect(root.textContent).toBe("child");
  });

  it("merges custom className", () => {
    const { container } = render(
      <GradientMesh className="extra-class">x</GradientMesh>,
    );
    expect((container.firstChild as HTMLElement).className).toContain("extra-class");
  });
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npx vitest run src/components/ui/__tests__/GradientMesh.test.tsx`
Expected: FAIL — "Cannot find module '../GradientMesh'".

- [ ] **Step 3: Implement the component**

Create `src/components/ui/GradientMesh.tsx`:

```tsx
import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface GradientMeshProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

export const GradientMesh = ({ children, className, ...rest }: GradientMeshProps) => {
  return (
    <div className={cn("gradient-mesh-bg", className)} {...rest}>
      {children}
    </div>
  );
};

export default GradientMesh;
```

- [ ] **Step 4: Run the test and verify it passes**

Run: `npx vitest run src/components/ui/__tests__/GradientMesh.test.tsx`
Expected: PASS, 2 tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/GradientMesh.tsx src/components/ui/__tests__/GradientMesh.test.tsx
git commit -m "feat(ui): add GradientMesh background wrapper"
```

---

## Task 6: Create `CapabilityCard` component

**Files:**
- Create: `src/components/ui/CapabilityCard.tsx`
- Create: `src/components/ui/__tests__/CapabilityCard.test.tsx`

- [ ] **Step 1: Write smoke render test**

Create `src/components/ui/__tests__/CapabilityCard.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Cloud } from "lucide-react";
import { CapabilityCard } from "../CapabilityCard";

describe("CapabilityCard", () => {
  it("renders icon, title, and subtitle", () => {
    render(
      <CapabilityCard icon={Cloud} title="Cloud" subtitle="Scalable, secure" />,
    );
    expect(screen.getByText("Cloud")).toBeInTheDocument();
    expect(screen.getByText("Scalable, secure")).toBeInTheDocument();
  });

  it("applies glass utility class", () => {
    const { container } = render(
      <CapabilityCard icon={Cloud} title="X" subtitle="y" />,
    );
    expect((container.firstChild as HTMLElement).className).toContain("glass");
  });
});
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `npx vitest run src/components/ui/__tests__/CapabilityCard.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement the component**

Create `src/components/ui/CapabilityCard.tsx`:

```tsx
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  className?: string;
}

export const CapabilityCard = ({ icon: Icon, title, subtitle, className }: CapabilityCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [4, -4]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-4, 4]), { stiffness: 200, damping: 20 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn(
        "glass rounded-lg p-6 group transition-colors duration-300 hover:border-[hsl(var(--accent)/0.4)]",
        className,
      )}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="w-10 h-10 rounded-md bg-[hsl(var(--accent)/0.12)] border border-[hsl(var(--accent)/0.2)] flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <h3 className="font-sans text-base font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </motion.div>
  );
};

export default CapabilityCard;
```

- [ ] **Step 4: Run the test and verify it passes**

Run: `npx vitest run src/components/ui/__tests__/CapabilityCard.test.tsx`
Expected: PASS, 2 tests.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/CapabilityCard.tsx src/components/ui/__tests__/CapabilityCard.test.tsx
git commit -m "feat(ui): add CapabilityCard glass component with magnetic hover"
```

---

## Task 7: Rewrite HeroSection

**Files:**
- Modify: `src/components/HeroSection.tsx` (full rewrite)

- [ ] **Step 1: Replace `src/components/HeroSection.tsx` with the new implementation**

The `gradient-mesh-bg` utility is applied directly on the `<section>` (no `GradientMesh` wrapper) so the pseudo-elements layer correctly against the hero's full height.

```tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cloud, Shield, Code } from "lucide-react";
import { CapabilityCard } from "@/components/ui/CapabilityCard";
import { heroHeadline, revealUp, staggerContainer } from "@/lib/motion";

const capabilities = [
  { icon: Cloud, title: "Cloud & Infrastructure", subtitle: "Scalable, secure, global" },
  { icon: Shield, title: "Cybersecurity", subtitle: "Detect, defend, recover" },
  { icon: Code, title: "Software Engineering", subtitle: "Custom builds, mobile + web" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[85svh] flex items-center pt-28 pb-16 gradient-mesh-bg overflow-hidden">
      <div className="container-custom w-full">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="label-tag mb-6" variants={revealUp}>
            ENTERPRISE IT INFRASTRUCTURE
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[clamp(3rem,8vw,7rem)] font-semibold tracking-tighter leading-[0.9] uppercase"
            variants={heroHeadline}
          >
            Elevating Business Through{" "}
            <span className="gradient-text">Technology.</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-muted-foreground max-w-[60ch] text-base md:text-lg leading-relaxed"
            variants={revealUp}
          >
            With a relentless commitment to excellence, we help our clients harness the power of technology to drive growth, efficiency, and success.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 mt-10" variants={revealUp}>
            <Link
              to="/services"
              className="gradient-cta h-12 px-6 font-sans text-sm font-medium inline-flex items-center justify-center rounded-md transition-transform duration-150 active:scale-[0.98]"
            >
              View Services
            </Link>
            <Link
              to="/contact"
              className="h-12 px-6 border border-border rounded-md font-sans text-sm font-medium inline-flex items-center justify-center transition-colors hover:border-accent hover:text-accent"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 w-full max-w-4xl"
            variants={staggerContainer}
          >
            {capabilities.map((c) => (
              <motion.div key={c.title} variants={revealUp}>
                <CapabilityCard icon={c.icon} title={c.title} subtitle={c.subtitle} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">SCROLL</span>
        <motion.div
          className="w-px h-8 bg-muted-foreground/30"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: succeeds, no TypeScript errors.

- [ ] **Step 3: Manual visual check**

Run: `npm run dev`. Open `http://localhost:5173`. Verify:
- Hero spans ~85vh with a faint cyan/violet glow drifting subtly
- Headline reads "ELEVATING BUSINESS THROUGH TECHNOLOGY." with TECHNOLOGY in a cyan→violet gradient
- Three glass capability cards appear below the CTAs (Cloud/Cybersecurity/Software)
- Cards tilt subtly on mouse-move (skip if reduced-motion is on)
- Toggle to light theme via navbar — same behavior, lighter mesh opacity

- [ ] **Step 4: Commit**

```bash
git add src/components/HeroSection.tsx
git commit -m "feat(hero): rewrite with gradient mesh and glass capability cards"
```

---

## Task 8: Refresh Navbar

**Files:**
- Modify: `src/components/Navbar.tsx` (lines 60–65 nav root; lines 148–150 CTA)

- [ ] **Step 1: Update the nav root class for baseline blur**

Find lines 60–65 in `src/components/Navbar.tsx`. Replace:

```tsx
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : ""
      }`}
    >
```

with:

```tsx
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-background/95 border-b border-border" : "bg-background/40"
      }`}
    >
```

- [ ] **Step 2: Update the desktop CTA to gradient + softer copy**

Find lines 148–150. Replace:

```tsx
          <Link to="/contact" className="cta-button text-[10px]">
            INITIALIZE CONTACT
          </Link>
```

with:

```tsx
          <Link
            to="/contact"
            className="gradient-cta h-9 px-5 rounded-md font-sans text-xs font-medium inline-flex items-center justify-center transition-transform active:scale-[0.98]"
          >
            Contact Us
          </Link>
```

- [ ] **Step 3: Update the mobile CTA similarly**

Find the mobile `<Link to="/contact" ...>` near the end (~line 227). Replace:

```tsx
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="cta-button text-[10px] w-fit mt-2">
                INITIALIZE CONTACT
              </Link>
```

with:

```tsx
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="gradient-cta h-10 px-5 rounded-md font-sans text-xs font-medium inline-flex items-center justify-center w-fit mt-2 transition-transform active:scale-[0.98]"
              >
                Contact Us
              </Link>
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 5: Manual visual check**

Run dev server. Verify:
- Navbar always has a faint blur even at the top of the page
- Top-right CTA reads "Contact Us" with a cyan→violet gradient pill
- Mobile menu CTA matches
- "SYS: OPERATIONAL" pulse and theme toggle still work

- [ ] **Step 6: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "feat(navbar): baseline backdrop-blur and gradient Contact Us CTA"
```

---

## Task 9: Refresh ServicesSection

**Files:**
- Modify: `src/components/ServicesSection.tsx` (lines 111, 129–151)
- Modify: `src/index.css` (the `.service-card` rule, line ~134)

- [ ] **Step 1: Update the `.service-card` utility in `src/index.css`**

Replace the existing `.service-card` and `.service-card:hover` rules (lines ~134–141) with:

```css
  .service-card {
    @apply relative p-8 transition-all duration-300 rounded-md border;
    border-color: hsl(var(--border) / 0.5);
    background: hsl(var(--card) / 0.4);
  }

  .service-card:hover {
    background: hsl(var(--card) / 0.7);
    border-color: hsl(var(--accent) / 0.4);
    box-shadow: 0 8px 24px -12px hsl(var(--accent) / 0.25);
    transform: translateY(-4px);
  }
```

- [ ] **Step 2: Update the section root in `src/components/ServicesSection.tsx`**

Replace line 111:

```tsx
    <section id="services" className="section-spacing border-t border-border grid-overlay" ref={ref}>
```

with:

```tsx
    <section id="services" className="section-spacing border-t border-border relative overflow-hidden" ref={ref}>
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] -translate-y-1/4 translate-x-1/4 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.08) 0%, transparent 60%)" }}
      />
```

Then at the end of the JSX, immediately before the closing `</section>`, the structure stays — only an opening wrapper was inserted. No closing tag change needed (the new div is self-closing).

- [ ] **Step 3: Update the services grid to use gap and softer card spacing**

Replace line 129:

```tsx
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16">
```

with:

```tsx
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 relative">
```

- [ ] **Step 4: Replace the `accent-text` span in the heading with gradient-text**

Find line 126:

```tsx
          What We <span className="accent-text">Execute</span>
```

Replace with:

```tsx
          What We <span className="gradient-text">Execute</span>
```

- [ ] **Step 5: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 6: Manual visual check**

Run dev server, scroll to Services. Verify:
- Services grid is 1/2/3 columns at sm/md/lg
- Cards have 8px rounded corners, soft border, faint card background
- Hover: card lifts 4px, cyan border glow, soft shadow
- A faint cyan radial glow sits in the top-right of the section

- [ ] **Step 7: Commit**

```bash
git add src/components/ServicesSection.tsx src/index.css
git commit -m "feat(services): rounded glass cards, hover lift, ambient accent glow"
```

---

## Task 10: Refresh CommitmentSection (violet accent)

**Files:**
- Modify: `src/components/CommitmentSection.tsx`

- [ ] **Step 1: Replace the section root and accent color usage**

Replace line 9:

```tsx
    <section className="section-spacing border-t border-border" ref={ref}>
```

with:

```tsx
    <section className="section-spacing border-t border-border relative overflow-hidden" ref={ref}>
      <div aria-hidden className="gradient-hairline absolute top-0 left-0 right-0" />
```

Replace the `accent-text` span at line 27:

```tsx
            to <span className="accent-text">Excellence</span>
```

with:

```tsx
            to <span className="gradient-text">Excellence</span>
```

- [ ] **Step 2: Use violet for the numeric tiles**

Replace line 64–66:

```tsx
                  <span className="font-mono text-[40px] font-semibold accent-text leading-none">
                    0{i + 1}
                  </span>
```

with:

```tsx
                  <span className="font-mono text-[40px] font-semibold leading-none" style={{ color: "hsl(var(--accent-2))" }}>
                    0{i + 1}
                  </span>
```

- [ ] **Step 3: Update the CTA**

Replace line 41–48:

```tsx
          <motion.a
            href="#contact"
            className="cta-button mt-8 inline-flex"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            EXECUTE PARTNERSHIP
          </motion.a>
```

with:

```tsx
          <motion.a
            href="#contact"
            className="gradient-cta h-12 px-6 mt-8 rounded-md font-sans text-sm font-medium inline-flex items-center justify-center w-fit transition-transform active:scale-[0.98]"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Execute Partnership
          </motion.a>
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 5: Manual visual check**

Verify the Commitment section has:
- A subtle cyan→violet hairline at its top edge
- The four numeric tiles render in violet (not cyan)
- "Excellence" in the heading uses the cyan→violet gradient
- CTA is a gradient pill

- [ ] **Step 6: Commit**

```bash
git add src/components/CommitmentSection.tsx
git commit -m "feat(commitment): violet accent line and numeric tiles"
```

---

## Task 11: Refresh ContactSection (mesh + glass form)

**Files:**
- Modify: `src/components/ContactSection.tsx`

- [ ] **Step 1: Add mesh background and rewrite form container**

Replace line 9:

```tsx
    <section id="contact" className="section-spacing border-t border-border grid-overlay" ref={ref}>
```

with:

```tsx
    <section id="contact" className="section-spacing border-t border-border gradient-mesh-bg" ref={ref}>
```

- [ ] **Step 2: Wrap the form in a glass card and update inputs to rounded**

Replace lines 40–86 (the entire `<motion.div className="lg:col-span-6">` form block) with:

```tsx
        <motion.div
          className="lg:col-span-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form className="glass rounded-lg p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="label-tag block mb-2">NAME</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="label-tag block mb-2">EMAIL</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div>
              <label className="label-tag block mb-2">ORGANIZATION</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors"
                placeholder="Company name"
              />
            </div>
            <div>
              <label className="label-tag block mb-2">MESSAGE</label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 text-foreground font-sans text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Describe your infrastructure requirements..."
              />
            </div>
            <button
              type="submit"
              className="gradient-cta h-12 px-6 rounded-md font-sans text-sm font-medium inline-flex items-center justify-center transition-transform active:scale-[0.98]"
            >
              Transmit Request
            </button>
          </form>
        </motion.div>
```

- [ ] **Step 3: Update heading accent span**

In the heading block, find:

```tsx
            <span className="accent-text">Execute?</span>
```

Replace with:

```tsx
            <span className="gradient-text">Execute?</span>
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 5: Manual visual check**

Verify the Contact section on the homepage:
- Mesh background returns (mirrors the hero)
- Form sits in a glass card with 8px+ radius
- Inputs are sans-font; submit button is a gradient pill labeled "Transmit Request"

- [ ] **Step 6: Commit**

```bash
git add src/components/ContactSection.tsx
git commit -m "feat(contact-section): mesh background and glass form card"
```

---

## Task 12: Refresh Footer (add Get-in-Touch + gradient hairline)

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Add the gradient hairline above the footer content**

Replace line 5:

```tsx
    <footer className="border-t border-border py-12">
```

with:

```tsx
    <footer className="border-t border-border py-12 relative">
      <div aria-hidden className="gradient-hairline absolute top-0 left-0 right-0" />
```

- [ ] **Step 2: Restructure footer grid columns**

The current footer is a 4-column layout (3/2/3/4). Add a new "Get in Touch" column by replacing the entire grid container (lines 6–69) with:

```tsx
      <div className="container-custom grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-3">
          <Link to="/" className="inline-block">
            <span className="font-bold text-xl tracking-tighter text-foreground">
              Neuro<span className="t5-red">x</span>
            </span>
            <span className="text-[10px] text-muted-foreground tracking-widest ml-2">
              TECHNOLOGIES
            </span>
          </Link>
          <p className="text-muted-foreground text-sm mt-4 max-w-[30ch]">
            Enterprise IT infrastructure, cloud solutions, and software
            engineering.
          </p>
        </div>

        <div className="md:col-span-2">
          <span className="label-tag block mb-4">NAVIGATION</span>
          {[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Services", href: "/services" },
            { label: "Partners", href: "/partners" },
            { label: "Contact", href: "/contact" },
          ].map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
            >
              {l.label.toUpperCase()}
            </Link>
          ))}
        </div>

        <div className="md:col-span-2">
          <span className="label-tag block mb-4">PRODUCTS</span>
          <Link to="/products/poker-21" className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2">
            POKER 21 (CASHIE)
          </Link>
          <Link to="/products/honk" className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2">
            HONK
          </Link>
          <Link to="/products/laundromart" className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2">
            LAUNDROMART
          </Link>
        </div>

        <div className="md:col-span-3">
          <span className="label-tag block mb-4">GET IN TOUCH</span>
          <a
            href="mailto:info@neuroxtech.com"
            className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            info@neuroxtech.com
          </a>
          <a
            href="tel:+2348184733736"
            className="block text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
          >
            +234 818 473 3736
          </a>
        </div>

        <div className="md:col-span-2">
          <span className="label-tag block mb-4">SYSTEM STATUS</span>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground">
              OPERATIONAL
            </span>
          </div>
          <span className="text-xs text-muted-foreground block mb-1">
            LATENCY: 24ms
          </span>
        </div>
      </div>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 4: Manual visual check**

Scroll to footer. Verify:
- A faint gradient hairline tops the footer
- 5 columns visible at md+: brand, Navigation, Products, Get in Touch, System Status
- "Get in Touch" shows email + the primary phone number, both clickable
- Hover changes color to foreground

- [ ] **Step 5: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat(footer): add Get-in-Touch column and gradient hairline"
```

---

## Task 13: Update Contact page phone block (two numbers)

**Files:**
- Modify: `src/pages/ContactPage.tsx` (lines 58–64)

- [ ] **Step 1: Replace the single phone row with the stacked two-number row**

Find lines 58–64:

```tsx
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold block">Phone</span>
                    <span className="text-sm text-muted-foreground">+234 (0) 1 234 5678</span>
                  </div>
                </div>
```

Replace with:

```tsx
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-0.5" />
                  <div>
                    <span className="text-sm font-semibold block mb-1">Phone</span>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:+2348184733736"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        +234 818 473 3736
                      </a>
                      <span className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-widest">primary</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href="tel:+2348144488577"
                        className="text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        +234 814 448 8577
                      </a>
                      <span className="font-mono text-[10px] text-muted-foreground/70 uppercase tracking-widest">secondary</span>
                    </div>
                  </div>
                </div>
```

- [ ] **Step 2: Update the heading accent span in the Contact page hero**

Find line 25:

```tsx
            Ready to <span className="accent-text">Execute?</span>
```

Replace with:

```tsx
            Ready to <span className="gradient-text">Execute?</span>
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 4: Manual visual check**

Navigate to `/contact`. Verify:
- The Phone row shows both numbers stacked
- Each number is a clickable `tel:` link with a small "primary"/"secondary" mono tag
- Hover turns the number cyan
- Heading "Execute?" uses gradient-text

- [ ] **Step 5: Commit**

```bash
git add src/pages/ContactPage.tsx
git commit -m "feat(contact-page): show two phone numbers with tel links"
```

---

## Task 14: Update other `accent-text` spans across pages for gradient consistency

The spec applies the cyan→violet gradient to all major page headings. Other pages still use the old `accent-text` class on their hero spans.

**Files:**
- Modify: `src/pages/AboutPage.tsx`
- Modify: `src/pages/ServicesPage.tsx`
- Modify: `src/pages/PartnersPage.tsx`
- Modify: `src/pages/Poker21Page.tsx`
- Modify: `src/pages/HonkPage.tsx`
- Modify: `src/pages/LaundromartPage.tsx`

- [ ] **Step 1: Find every occurrence of `accent-text` in page hero headings**

Run: `Grep` (the harness tool) with pattern `<span className="accent-text">` across `src/pages/**`. List the matches.

- [ ] **Step 2: Replace each `accent-text` span in page hero headings with `gradient-text`**

For each match found in Step 1, change `className="accent-text"` to `className="gradient-text"` in that line. Do NOT change `accent-text` usages outside of hero `<h1>` blocks (those may exist as semantic accents elsewhere and stay cyan-only).

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 4: Manual visual check**

Navigate to `/about`, `/services`, `/partners`, `/products/poker-21`, `/products/honk`, `/products/laundromart`. Verify each hero headline uses the cyan→violet gradient on its accented word.

- [ ] **Step 5: Commit**

```bash
git add src/pages
git commit -m "feat(pages): apply gradient-text to all hero accent spans"
```

---

## Task 15: Full smoke test and lint pass

**Files:** none modified — verification only.

- [ ] **Step 1: Run the full test suite**

Run: `npm test`
Expected: All tests pass (including the two new component tests from Tasks 5 and 6).

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: No new errors introduced. Pre-existing warnings tolerable; new warnings should be fixed.

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: Succeeds with no errors. Bundle size has not grown by more than ~15kb gzipped (Geist is ~25kb each; that's expected).

- [ ] **Step 4: Manual cross-page smoke check**

Run: `npm run dev`. In both **light** and **dark** themes (toggle via navbar), visit:

| Route | Verify |
|---|---|
| `/` | Hero mesh + cards; alternating section rhythm; gradient CTAs; mesh returns at Contact |
| `/about` | Inherits new tokens; gradient-text on hero |
| `/services` | Service cards rounded with hover lift; ambient glow top-right |
| `/partners` | Inherits new tokens; gradient-text on hero |
| `/contact` | Two phone numbers stacked; tel: links work (click to verify on mobile or `cmd-click` for context menu on desktop) |
| `/products/poker-21` | Inherits tokens |
| `/products/honk` | Inherits tokens |
| `/products/laundromart` | Inherits tokens |

For each: confirm no layout breakage, both themes render correctly, no console errors.

- [ ] **Step 5: Verify reduced-motion behavior**

In OS settings (or via DevTools "Emulate CSS prefers-reduced-motion"), enable `prefers-reduced-motion: reduce` and reload `/`. Verify:
- Mesh blobs do not drift
- Capability cards do not tilt on hover

- [ ] **Step 6: Commit (no-op or follow-up fixes)**

If everything passes, no commit needed. If you found regressions, fix them in a final commit:

```bash
git add -A
git commit -m "fix: cross-page regressions from visual refresh"
```

---

## Self-review notes

- **Spec coverage:** §1 tokens → Tasks 1, 2, 3. §2 hero → Task 7 (with utilities from 4, 5, 6). §3 section table → Tasks 9 (Services), 10 (Commitment), 11 (Contact section). Sections About / Clients / Partners inherit via tokens and Task 14. §4 navbar → Task 8. §5 footer → Task 12. §6 contact-page phones → Task 13. §7 light parity → covered in Task 2 (`.light` block) and verified in Task 15. §8 accessibility → covered in Task 3 (`prefers-reduced-motion`, backdrop-blur fallback, gradient-text fallback) and Task 6 (card tilt check). §9 out-of-scope is honored. §10 file list and §11 success criteria → fully mapped.
- **Placeholder scan:** No "TBD" / "implement later" / unspecified handlers. All code blocks contain the literal code to write.
- **Type consistency:** `revealUp`, `staggerContainer`, `heroHeadline` defined in Task 4 are used by name in Task 7. `GradientMesh` and `CapabilityCard` exports match their imports.
- **Known correction:** Task 7 Step 1 introduces `<GradientMesh asChild={false}>` which doesn't exist on the component; Step 2 explicitly fixes this by switching to a direct `gradient-mesh-bg` class on the `<section>`. The fix is intentional and documented inline so the engineer doesn't get stuck.
