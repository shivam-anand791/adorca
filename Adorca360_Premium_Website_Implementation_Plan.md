# Adorca 360 Premium Website v3 — Implementation Plan

## 0. Project Goal

Build a new Adorca 360 website that is:

- More visually premium and memorable than both `adorca360.com` and `adorca.vercel.app`
- Conversion-focused without looking like a generic marketing template
- Editorial, cinematic, data-driven, and interactive
- Fast, accessible, SEO-friendly, and maintainable
- Faithful to Adorca's real business information and verified proof only

### Design positioning

**Premium growth agency + editorial storytelling + data visualization + subtle interaction**

Avoid the "generic SaaS landing page" look and avoid excessive 3D/neon effects.

---

# 1. Research Findings

The reference research points to a few recurring patterns worth adopting:

### A. Editorial design + strong typography

Upstatement uses an editorial mindset, large typographic statements, project-led storytelling, and a clear work narrative rather than only listing services.

Reference:
https://upstatement.com/

Why it matters for Adorca:
- Gives the agency a stronger brand personality
- Makes large typography part of the visual identity
- Lets case studies become storytelling rather than cards in a grid

### B. Typography + grids + motion

Obys explicitly describes its design approach as combining typography, grid systems, and motion, with a strong modernist/graphic-design foundation.

Reference:
https://obys.agency/about

Why it matters:
- Use a disciplined grid
- Use large type as a visual object
- Use motion selectively around meaningful content

### C. Technology and brand working together

Instrument presents brand, product, and marketing as connected disciplines rather than separate silos.

Reference:
https://www.instrument.com/

Why it matters:
Adorca should visually communicate one connected growth system instead of eight disconnected services.

### D. Scroll-led storytelling

Awwwards' featured agency references show recurring use of:
- service presentation
- featured case-study modules
- hover listings
- glowing interactions
- WebGL/3D used as a supporting layer
- microinteractions
- storytelling

Reference:
https://www.awwwards.com/sites/pathways-digital

### E. Product-like clarity

Linear demonstrates a strong hierarchy:
- one clear positioning statement
- concise supporting copy
- proof
- product/service sections
- detailed visual demonstrations
- customer evidence
- final conversion

Reference:
https://linear.app/homepage

### F. Conversion + visual systems

Stripe keeps a strong primary value proposition, then explains its capabilities using visual sections and grouped solutions rather than dumping every feature at the top.

Reference:
https://stripe.com/

---

# 2. Visual Inspiration Links

These are references for visual direction only. Do NOT copy layouts, assets, branding, or text.

## Primary live references

1. Upstatement
https://upstatement.com/

Use for:
- editorial typography
- asymmetrical layouts
- case-study storytelling
- high-end agency positioning

2. Obys
https://obys.agency/

Use for:
- typography
- grid systems
- motion
- strong visual identity

3. Instrument
https://www.instrument.com/

Use for:
- premium agency positioning
- brand + technology combination
- work presentation

4. Fantasy
https://fantasy.co/

Use for:
- dramatic typography
- premium creative positioning
- large-scale visual storytelling

5. Pathways Digital / Awwwards
https://www.awwwards.com/sites/pathways-digital

Use for:
- microinteractions
- service presentation
- case-study hover interactions
- controlled glow effects
- interactive storytelling

6. Linear
https://linear.app/homepage

Use for:
- hierarchy
- product-like clarity
- interface visualisation
- animation restraint

7. Stripe
https://stripe.com/

Use for:
- conversion hierarchy
- structured sections
- polished product/marketing visual language

## Screenshot / image references

### Upstatement editorial agency layout
Image:
https://cdn.land-book.com/website/85818/bd2ed726167be2a0-upstatement-com.jpg

Reference page:
https://www.landingpicks.com/category/portfolio

Use for:
- dark editorial composition
- large headline
- project tiles
- strong whitespace

### Premium case-study presentation
Image:
https://cdn.dribbble.com/userupload/43434886/file/original-1e8b6b9c04c26f8f08d3ac87c65df1b5.jpg

Reference search:
https://dribbble.com/search/case-study-section

Use for:
- case-study hierarchy
- result statistics
- image + narrative combinations

### Premium agency / website case-study composition
Image:
https://cdn.dribbble.com/users/1615587/screenshots/27178318/media/5fe1b5b7f0a5f5fba69f9d9b50d12a11.png

Reference:
https://dribbble.com/shots/27178318-AI-Website-l-Case-Studies

Use for:
- dark backgrounds
- large result metrics
- premium case-study presentation

### Agency homepage case-study reference
Image:
https://wunderstars.com/wp-content/uploads/2021/06/agency-website-design-Homepage-example_Elkcreative4-1024x824.png

Reference:
https://wunderstars.com/homepages-to-inspire-your-agency-website-design/

Use for:
- case-study-first homepage
- contrasting color blocks
- project storytelling

### Important

The four image URLs above are inspiration references. The production site should use original graphics, real client imagery, licensed stock, or custom illustrations rather than copying these designs.

---

# 3. Adorca-Specific Design Direction

## Brand foundation

Keep the strongest visual DNA from the existing site:

- navy
- electric blue
- lime green
- white / off-white
- rounded but not over-rounded cards
- large confident headings
- floating metric cards
- clean interface-style illustrations

But evolve it into a more premium system.

### Suggested visual balance

- 70% light / neutral surfaces
- 20% deep navy / dark cinematic sections
- 10% blue + lime accents

Do not use bright blue and lime as decoration everywhere.

---

# 4. Signature Visual: "Adorca Growth Orbit"

Create one reusable visual system that becomes recognizable as Adorca.

Concept:

DISCOVER -> ATTRACT -> CONVERT -> RETAIN -> SCALE

Visual language:
- thin orbital paths
- glowing nodes
- small data labels
- subtle motion
- navy/blue/lime highlights
- no cartoonish 3D

Reuse it in:
- Hero
- Growth system section
- Services
- About
- final CTA

This gives Adorca a visual signature instead of a collection of unrelated graphics.

---

# 5. Homepage Architecture

## Section 01 — Sticky Navigation

Desktop:
- Adorca 360 logo
- Work
- Services
- Approach
- Insights
- About
- Contact
- primary CTA: "Talk to a Strategist"

Behavior:
- transparent/overlay on hero
- becomes solid after scrolling
- compact height after scroll
- subtle backdrop blur
- visible active state

Mobile:
- clean menu button
- full-screen or large overlay menu
- same CTA
- keyboard accessible

Do not use more than one primary CTA style.

---

# 6. Hero

## Goal

Instantly explain:
1. What Adorca does
2. Why it is different
3. What the visitor should do

### Recommended headline

# Turn Search Into
# Sustainable Growth.

Possible supporting line:

"We combine SEO, paid media, content, technology and market intelligence to help ambitious brands acquire customers across international markets."

Primary CTA:
**Build My Growth Plan**

Secondary CTA:
**Explore Our Work**

### Hero visual

Build an interactive "Growth Intelligence" dashboard rather than a generic bar chart.

Visual contents:
- organic visibility
- qualified leads
- conversion rate
- market count
- simplified trend graph
- orbit/network connections

Example labels:
- "+214% Visibility"
- "+87% Qualified Leads"
- "50+ Markets"

IMPORTANT:
Only show real metrics after the business owner confirms they are real.
Unverified numbers must use neutral placeholders such as:
"Performance metric"
"Case study result"

### Animation

- headline reveals by line
- chart draws in
- metric cards fade/float in
- orbit nodes connect
- minimal ambient motion

No constant aggressive movement.

---

# 7. Proof Strip

Immediately after hero:

50+ Markets
12+ Years
Verified Case Studies
Transparent Reporting

If actual client count, retention or ratings are verified, add them here.

If not verified, do not fabricate them.

Current site contains:
- 98% retention
- +214% growth
- 4.9/5
These should be validated before reuse.

---

# 8. Dark Cinematic "Growth System" Section

Headline:

# One Growth System.
# Every Channel Connected.

Visual:

SEO
  ↓
CONTENT
  ↓
SOCIAL
  ↓
PAID
  ↓
DATA
  ↓
CONVERSION

Interaction:
As the user scrolls, each node activates and the route highlights.

Use:
- dark navy surface
- subtle grid
- orbital lines
- small data labels
- restrained glow

This section is the main visual signature of the homepage.

---

# 9. Services Section

Do NOT display eight identical service cards.

Group services into three pillars.

## 01 — ACQUIRE

- Global Growth Marketing
- SEO
- Lead Generation
- Programmatic Advertising

## 02 — AMPLIFY

- Digital Marketing
- Social Media Marketing
- Social Influence Marketing

## 03 — CONVERT

- Website Design & Development
- App & Revenue Boosters
- Conversion Optimization

UI:
- large editorial cards
- big pillar number
- concise description
- service list
- small visual system
- hover/active state

On hover:
- card expands
- visual graph changes
- supporting copy changes
- CTA appears

Mobile:
- stacked cards
- tap-to-expand
- no hover dependency

---

# 10. Featured Case Study

This should be one of the most visually important sections.

Do not use four equal cards.

Use:
1 large featured case
+
2–3 smaller cases

Featured layout:

LEFT:
- category
- client
- problem
- strategy

RIGHT:
- large result number
- chart / visual
- "View case study"

Example:

NORTHWIND RETAIL
E-commerce

# +214%

Organic traffic growth

"Technical SEO + content architecture + international strategy"

Only use this example if it is a real verified case.

### Scroll interaction

- case visual scales gently into place
- metrics animate
- text reveals
- next case appears below

Do not lock scrolling in a way that makes the page feel trapped.

---

# 11. "How We Work" Section

Headline:

# From Strategy
# To Scale.

Four steps:

01 DISCOVER
Market, audience, competitors, existing performance

02 STRATEGIZE
Build a focused growth roadmap

03 EXECUTE
SEO, media, content, creative, technology

04 OPTIMIZE
Measure, learn, improve, scale

Visual:
- horizontal timeline on desktop
- vertical timeline on mobile
- orbit line connects each stage

---

# 12. Growth Opportunity Tool

Create the site's primary lead-generation interaction.

Headline:

# What's Your Growth Opportunity?

Inputs:
- website
- industry
- target market
- current goal

CTA:
**Generate My Growth Plan**

Initial implementation can:
- validate inputs
- gather lead information
- submit to backend/CRM
- show a lightweight audit summary
- offer a consultation

Do NOT make fake AI predictions.

If an actual audit engine does not exist, the UI should clearly say the information is used to prepare a tailored growth plan.

---

# 13. Testimonials

Use real testimonials only.

Required data model:

{
  quote,
  name,
  role,
  company,
  verified: boolean
}

If verified = false:
do not publish.

Remove all template/demo testimonials.

The current live site still contains "Garseo SEO Agency" references and placeholder-looking testimonials. These must not survive the redesign.

Source:
https://adorca360.com/

---

# 14. Insights / Blog

Keep the current blog-card language but make it more editorial.

Layout:
- 1 featured article
- 2 smaller articles

Card elements:
- category
- date
- reading time
- title
- one-sentence summary

Use original article cover art or licensed imagery.

The article section should support:
- SEO metadata
- OpenGraph image
- structured data
- author
- date
- reading time

---

# 15. About Section

Avoid a generic "About Us" wall of text.

Use:

# Built For
# Ambitious Growth.

Then:
- 50+ markets
- 12+ years
- operating model
- global specialist network

Visual:
- Adorca Growth Orbit
- global map / abstract network
- small performance indicators

Do not claim "global" coverage beyond what is actually supported.

---

# 16. Final CTA

Full-width dark section.

Headline:

# Ready To Build
# What's Next?

Supporting line:
"Tell us where you are. We'll show you where the next opportunity is."

CTA:
**Talk to a Strategist**

Background:
- subtle orbit
- slow ambient gradient
- small moving nodes

Do not use a giant aggressive animated background.

---

# 17. Footer

Simple premium footer:

Adorca 360

Navigation:
Work
Services
Approach
Insights
About
Contact

Legal:
Privacy
Terms

Business information:
Only verified legal/company/contact information.

IMPORTANT:
The current live site shows a suspicious-looking Minnesota address and placeholder `(234)` phone numbers. Verify before publishing:
https://adorca360.com/

---

# 18. Motion System

Preferred implementation:
GSAP + ScrollTrigger if the project already supports it, or Framer Motion if the current stack is already built around it.

GSAP ScrollTrigger reference:
https://gsap.com/docs/v3/Plugins/ScrollTrigger/

Use ScrollTrigger for:
- section reveals
- pinned storytelling sections
- timeline progress
- chart animation
- case-study transitions

Core rule:
Animations should use transform and opacity wherever possible.

Performance references:
https://web.dev/articles/animations-guide
https://web.dev/articles/animations-overview

Do not animate:
- width/height continuously
- expensive box shadows continuously
- layout-heavy properties during scroll

### Reduced motion

Implement:
`@media (prefers-reduced-motion: reduce)`

Disable or simplify non-essential animations.

Reference:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion

---

# 19. Image Strategy

## Prefer

1. Real Adorca client/project screenshots
2. Real campaign/project imagery
3. Custom generated abstract graphics
4. Licensed stock photography
5. SVG/data visualizations

## Avoid

- generic office stock images
- fake dashboard screenshots
- fake client logos
- fake testimonials
- copied portfolio imagery
- invented case studies
- random AI-generated "business people"

### Image treatment

Use:
- large crops
- 16:9 and 4:3 editorial ratios
- rounded corners only where appropriate
- subtle grain
- soft masking
- dark overlays for contrast

---

# 20. Technical Architecture

Use the existing project stack unless there is a technical reason to change it.

Recommended if rebuilding:

- Next.js
- TypeScript
- Tailwind CSS
- CSS variables for design tokens
- GSAP/ScrollTrigger OR existing animation system
- next/image
- MDX or headless CMS for blog
- Zod for form validation
- server-side form endpoint
- analytics
- sitemap
- robots.txt
- JSON-LD

Component structure:

/components
  /layout
    Header
    Footer
  /hero
    GrowthDashboard
    HeroMetrics
  /growth
    GrowthOrbit
    GrowthSystem
  /services
    ServicePillar
    ServiceExplorer
  /work
    FeaturedCaseStudy
    CaseStudyCard
  /process
    ProcessTimeline
  /leadgen
    GrowthPlanForm
  /insights
    FeaturedArticle
    ArticleCard
  /ui
    Button
    MagneticButton
    Reveal
    Metric
    Container

---

# 21. Design Tokens

Create variables instead of scattering values through components.

Example:

--background: #F7F8FA;
--surface: #FFFFFF;
--ink: #101114;
--navy: #081033;
--blue: #1657FF;
--lime: #98F22A;
--muted: #667085;
--line: rgba(16,17,20,.10);

Border radius:
- small: 10px
- medium: 18px
- large: 28px

Do not make every component pill-shaped.

Spacing system:
8px base scale.

Container:
max-width around 1280–1440px depending on current design.

Desktop hero:
min-height around 85–95vh.

Do not force exact pixel dimensions if responsive constraints conflict.

---

# 22. Typography

Primary:
- Geist Sans OR Inter OR another clean variable sans

Optional editorial accent:
- a restrained serif only for selected moments

Do not introduce 4–5 different fonts.

Desktop:
- Hero 72–110px depending on viewport
- Section headings 48–72px
- Body 18–20px
- Supporting text 15–16px

Mobile:
- Hero 44–58px
- Section headings 36–48px
- Body 16–18px

Use `clamp()` for responsive typography.

---

# 23. Accessibility

Required:
- keyboard navigation
- visible focus states
- semantic headings
- proper labels
- alt text
- accessible contrast
- reduced-motion support
- hover interactions must have keyboard/touch equivalent
- no information conveyed only through color

MDN accessibility guidance:
https://developer.mozilla.org/en-US/curriculum/core/accessibility/

---

# 24. SEO

Preserve and improve:
- title tags
- meta descriptions
- canonical URLs
- structured H1/H2 hierarchy
- OpenGraph
- Twitter/X cards
- JSON-LD Organization
- JSON-LD WebSite
- JSON-LD Article
- sitemap
- robots
- internal linking
- image alt text
- image compression
- Core Web Vitals

Do not sacrifice HTML content for animations.

Important:
All important copy must exist as actual text in the DOM, not inside canvas/WebGL only.

---

# 25. Performance Budget

Target:
- strong Lighthouse performance
- LCP as low as practical
- no unnecessarily large JS bundles
- no full-page video unless justified
- lazy-load below-the-fold imagery
- use WebP/AVIF when suitable
- avoid loading animation libraries until needed if architecture allows
- do not ship large 3D libraries for a simple graph

Motion should enhance the page without making a budget laptop sound like it is preparing for spaceflight.

---

# 26. Mobile Design

Do NOT treat mobile as a scaled desktop.

Explicitly redesign:
- hero composition
- dashboard visualization
- service cards
- timeline
- case studies
- final CTA

Rules:
- no hover-only interactions
- minimum tap target about 44px
- no horizontal overflow
- simplify complex orbit visualizations
- reduce animation intensity
- keep CTAs visible and easy to reach

---

# 27. Content Truth Gate

Before implementation, audit every claim.

Create a `content-verification.md` file containing:

| Claim | Current value | Source | Verified? | Publish? |
|---|---|---|---|---|
| Markets | 50+ | company source | ? | ? |
| Experience | 12+ years | company source | ? | ? |
| Retention | 98% | company source | ? | ? |
| Organic growth | +214% | case study | ? | ? |
| Rating | 4.9/5 | reviews source | ? | ? |
| Client names | various | CRM/contracts | ? | ? |
| Testimonials | various | client approval | ? | ? |

No unverified item should appear as a factual public claim.

This is especially important because the current site has inconsistent/template content.

---

# 28. Implementation Phases

## Phase 1 — Audit

- inspect current repository
- inspect routes
- inspect current components
- inspect image assets
- inspect responsive behavior
- identify reusable components
- identify broken/missing content
- produce content verification list

Deliverable:
`audit.md`

## Phase 2 — Design System

Implement:
- CSS variables
- typography
- spacing
- color system
- buttons
- cards
- grid
- container
- responsive breakpoints
- motion primitives

Deliverable:
working design-system components

## Phase 3 — Hero

Build:
- new headline
- CTA hierarchy
- growth dashboard
- orbit animation
- hero entrance animation
- responsive fallback

Acceptance:
hero communicates service + value proposition within 5 seconds.

## Phase 4 — Growth System

Build:
- dark cinematic section
- animated channel network
- scroll activation
- reduced-motion fallback

## Phase 5 — Services

Build:
- Acquire / Amplify / Convert pillars
- interactive service explorer
- keyboard/touch support

## Phase 6 — Work

Build:
- featured case study
- results visualization
- case-study detail routes
- secondary project cards

## Phase 7 — Process + Lead Generation

Build:
- process timeline
- growth opportunity form
- validation
- success state
- CRM/backend integration if available

## Phase 8 — Insights + About + CTA + Footer

Build:
- editorial blog layout
- about narrative
- final CTA
- verified company info

## Phase 9 — Motion Polish

Add:
- section reveals
- hover states
- scroll transitions
- number animations
- subtle cursor/magnetic interactions if justified

Do NOT add motion before the static layout is approved.

## Phase 10 — QA

Test:
- Chrome
- Safari
- Firefox
- desktop
- tablet
- mobile
- reduced motion
- keyboard navigation

Check:
- no layout shifts
- no horizontal overflow
- no broken images
- no console errors
- no hydration errors
- no inaccessible controls

---

# 29. Coding Agent Rules

These rules are mandatory.

### Rule 1
Do NOT invent:
- clients
- reviews
- metrics
- addresses
- phone numbers
- company awards
- partnerships
- logos
- testimonials

### Rule 2
Do NOT copy reference websites.

Use them only to understand:
- composition
- hierarchy
- interaction
- typography
- motion principles

### Rule 3
Do NOT replace useful existing components without inspecting them.

### Rule 4
Do NOT create a new animation for every section.

Use a small reusable motion system.

### Rule 5
Build the static responsive layout first.

Then add motion.

### Rule 6
Every hover effect needs a touch/keyboard equivalent where applicable.

### Rule 7
Every complex visual needs a lightweight mobile fallback.

### Rule 8
Important business information must remain real HTML text.

### Rule 9
Do not make the page depend on JavaScript to render the primary marketing message.

### Rule 10
Do not use stock visuals that look obviously generic.

---

# 30. Acceptance Criteria

The build is successful only when:

### Visual
- clearly more premium than current site
- strong visual identity
- memorable hero
- consistent visual system
- polished spacing and typography

### UX
- primary action is obvious
- services are understandable in one scan
- work/case studies are easy to explore
- navigation is simple
- mobile experience is intentionally designed

### Motion
- smooth
- meaningful
- no jank
- no unnecessary motion
- reduced-motion supported

### Content
- no template references
- no fake clients
- no fake testimonials
- no placeholder contact details in production
- all metrics verified

### Technical
- no console errors
- no hydration warnings
- no broken links
- no horizontal overflow
- responsive across target devices
- SEO metadata complete
- images optimized

---

# 31. Final Creative Direction in One Sentence

**Build Adorca 360 as a premium digital growth studio where editorial typography, a signature growth-orbit visual system, case-study storytelling, data visualization, and restrained cinematic motion work together to communicate measurable business growth.**

The target reaction should be:

**"This looks expensive, but I also understand exactly what they do."**

Not:

**"Someone discovered gradients."**
