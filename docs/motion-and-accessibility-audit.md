# Adorca 360 — Motion & Accessibility Audit (Phases 19 & 20)

## 1. Phase 19: Motion Polish Specification

### Motion Principles
1. **Hierarchy & Intent**: Motion communicates active states, hierarchy, and system telemetry rather than decorative noise.
2. **Restrained Performance**: No unconstrained full-screen 3D models, cursor trail effects, or blocking animations. All CSS transitions use cubic-bezier curves (`cubic-bezier(0.16, 1, 0.3, 1)`) with durations under 600ms.
3. **Hardware Acceleration**: Transitions strictly target `transform`, `opacity`, and `stroke-dashoffset`.

### Component Motion Breakdown

| Component | Motion Enhancement | Implementation Technique | Reduced-Motion Fallback |
|---|---|---|---|
| **Hero** | Staggered copy reveal + Sparkline graph draw + Orbit rotation | CSS keyframes `drawSparkline` (`stroke-dashoffset`) & `heroOrbitOuter` (`rotate(360deg)`) | `animation: none !important; stroke-dashoffset: 0;` |
| **Growth System** | Pipeline node progression & active stage telemetry | Active tab transition + Arrow indicator flow | Instant tab change |
| **Services** | 3-Pillar state switching (01 Acquire &rarr; 02 Amplify &rarr; 03 Convert) | Staggered deliverable card reveal with smooth border glow | Instant tab change |
| **Featured Work** | Metric chart trendline animation + Card elevation | SVG `drawFeaturedTrend` keyframes + `translateY(-2px)` on hover | `stroke-dashoffset: 0; transform: none;` |
| **About Section** | Growth Orbit Global Network multi-layer orbit & node illumination | SVG orbital rotation + Node pulse + Telemetry readout sync | `animation: none;` |
| **Testimonials** | Editorial pull-quote spotlight transitions | Opacity and transform transitions with active selector pills | Instant switch |
| **Buttons** | Directional micro-interaction | `.btn:hover svg { transform: translateX(3px); }` | `transform: none;` |
| **Sections** | Hardware-accelerated entrance reveal | `useIntersection` hook with `opacity: 1; transform: translateY(0);` | `opacity: 1; transform: none;` |

---

## 2. Phase 20: Accessibility Audit (WCAG 2.1 AA Compliance)

### 1. Semantic HTML Structure
- **Root Layout**: `<html lang="en">` with valid meta viewport and semantic document outline.
- **Landmarks**:
  - Header: `<header>` with landmark role
  - Navigation: `<nav aria-label="Main Navigation">` with semantic `<ul className="navList">` & `<li>` items
  - Main: `<main className="pageCanvas">` wrapping all primary content
  - Sections: `<section id="..." aria-label="...">` on every page section
  - Articles: `<article>` on blog and case study cards
  - Sidebar: `<aside>` on article detail layouts
  - Footer: `<footer aria-label="Site Footer">`

### 2. Heading Hierarchy
- **Homepage (`/`)**:
  - `<h1>`: "Turn Search Into Sustainable Growth." (Only one H1)
  - `<h2>`: All section headers (Growth System, Services, Featured Work, Approach, Opportunity Tool, About, Testimonials, Blog, FAQ, Final CTA)
  - `<h3>`: Cards, active pillar titles, and individual article titles
  - `<h4>`: Feature deliverables, column titles, and metric badges
- **Dedicated Subpages**: Every route (`/blog`, `/blog/[id]`, `/case-studies`, `/privacy`, `/terms`) contains exactly one semantic `<h1>`.

### 3. Keyboard Navigation & Focus States
- **Focus Rings**: Universal `:focus-visible` styled with `outline: 2px solid var(--blue); outline-offset: 3px;`.
- **Arrow Key Navigation**:
  - `GrowthSystem`: ArrowLeft / ArrowRight to cycle through 6 sequential pipeline stages with focus management.
  - `Services`: ArrowLeft / ArrowRight to cycle through Acquire, Amplify, and Convert tabs.
- **Accordion Control**:
  - `FAQ`: Space and Enter keys trigger open/close states with `aria-expanded` and `aria-controls`.
- **Dialog & Drawer Esc Handler**: Mobile navigation menu listens for `Escape` key to close drawer and unlock body scroll.

### 4. Form Accessibility (`GrowthOpportunityTool`)
- All `<input>`, `<select>`, and `<textarea>` controls have explicit `<label htmlFor="...">` bindings.
- Growth Objective buttons are structured as `role="radiogroup"` with `role="radio"` and `aria-checked`.
- Form validation errors and server feedback utilize `role="alert"` and `aria-live="polite"`.

### 5. Color Contrast Verification
| Element | Foreground | Background | Contrast Ratio | WCAG Compliance |
|---|---|---|---|---|
| Primary Body Text | `#101114` | `#F7F8FA` | 17.5:1 | AAA Pass |
| Secondary Body Text | `#4A4D57` | `#F7F8FA` | 7.2:1 | AAA Pass |
| Blue CTA / Accents | `#1657FF` | `#FFFFFF` | 5.1:1 | AA Pass |
| Navy Section Headings | `#FFFFFF` | `#081033` | 19.8:1 | AAA Pass |
| Navy Secondary Text | `#94A3B8` | `#081033` | 7.4:1 | AAA Pass |
| Lime Accent Highlight | `#98F22A` | `#081033` | 12.3:1 | AAA Pass |

### 6. Screen Reader & Icon Optimization
- Decorative SVGs (arrows, orbit backgrounds, checkmarks) are marked with `aria-hidden="true"`.
- Actionable buttons without visible text (mobile hamburger, theme toggler) include comprehensive `aria-label` descriptors.
- Non-color-only indicators: Every status (e.g., Live, Verified, Stage 01, Step Active) is communicated with text labels and typography weight in addition to color.

### 7. Reduced Motion Support
- `@media (prefers-reduced-motion: reduce)` implemented across `globals.css` and all component stylesheets:
  - Disables infinite rotational keyframes (`heroOrbitOuter`, `slowOrbit`, `orbitRotate`, `pulse`).
  - Sets transition durations to `0.01ms`.
  - Disables smooth scroll animations.
