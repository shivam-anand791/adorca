# Adorca 360 — Technical Audit Report

## 1. Technology Stack
- **Framework**: Next.js 16.3.3 (App Router with Turbopack)
- **Runtime**: React 19.2.8 & React-DOM 19.2.8
- **Language**: TypeScript 5
- **Styling**: CSS Modules + Global CSS variables (Vanilla CSS design tokens)
- **Linting**: ESLint 9 (`eslint-config-next`)
- **Fonts**: `next/font/google` (Space Grotesk display + Inter body)

## 2. Route Architecture & Rendering Strategy
- **`/` (Homepage)**: Static/Server-rendered layout composed of modular client & server components.
- **`/case-studies` & `/case-studies/[slug]`**: Dynamic case study detail routing with rich OpenGraph metadata.
- **`/blog` & `/blog/[id]`**: Static index and dynamic article routing.
- **`/robots.ts` & `/sitemap.ts`**: Dynamic search engine indexation endpoints.

## 3. Performance & Core Web Vitals Optimization
- **Asset Optimization**: `next/image` utilized with intrinsic SVGs and priority flags for above-the-fold content.
- **Motion Restraint**: CSS transform and opacity-driven animations with full `@media (prefers-reduced-motion: reduce)` support.
- **Fluid Layout**: `clamp()`, `minmax()`, and CSS grid for intrinsic viewport responsiveness across 320px to 2560px.
- **Zero Heavy External Dependencies**: No heavy 3D or bloated UI libraries; pure high-performance CSS and lightweight React hooks.

## 4. Accessibility & SEO Compliance
- **Semantic Structure**: Single `<h1>` per page, hierarchical `<h2>`/`<h3>` headings.
- **Focus States**: `:focus-visible` styling with 2px blue rings across all interactive controls.
- **Structured Data (JSON-LD)**: `ProfessionalService` / `Organization`, `WebSite`, and `FAQPage` schemas injected.
