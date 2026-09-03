# Adorca 360 Premium V2

## Phase-Wise Coding Agent Implementation Plan

Repository:
https://github.com/shivam-anand791/adorca

Live site:
https://adorca.vercel.app/

---

# 0. Global Instructions for the Coding Agent

You are working on the existing Adorca 360 repository.

Primary objective:

> Transform the existing website into a premium, visually distinctive, fully functional, accessible, performant, and highly responsive website.

## Mandatory Rules

1. Inspect existing code before modifying it.
2. Preserve existing working functionality and routes.
3. Do not invent business information.
4. Do not invent clients, testimonials, metrics, awards, partnerships, addresses, phone numbers, or performance claims.
5. Do not copy reference websites.
6. Use visual references only for design direction.
7. Do not replace the project architecture without a technical reason.
8. Build responsive static layouts before adding complex animation.
9. Every hover interaction must have a touch/keyboard alternative.
10. Every complex visual must have a mobile fallback.
11. Do not hide layout bugs with `overflow: hidden`.
12. Do not render `undefined`, `NaN`, fake zero values, or misleading metrics.
13. Keep important content as real HTML, not canvas-only graphics.
14. Do not add libraries unless they are genuinely required.
15. Maintain accessibility throughout implementation.
16. Maintain SEO throughout implementation.
17. Maintain performance throughout implementation.
18. After every phase, run the appropriate lint/build/tests.
19. Do not modify unrelated functionality.
20. Test each phase on multiple viewport sizes before declaring it complete.

## Visual Goal

Build Adorca as a:

**Premium international growth studio**

Visual personality:

**Editorial + Data-driven + Cinematic + Intelligent**

Avoid a generic SaaS/SEO-agency template aesthetic.

---

# 1. Visual Research References

These references are for inspiration only. Do not copy their layouts, assets, branding, or copy.

## Primary References

### Upstatement

https://upstatement.com/

Use for:

- editorial typography
- asymmetrical layouts
- case-study storytelling
- project-led presentation

### Obys

https://obys.agency/

Use for:

- typography
- grid systems
- motion
- strong visual identity

### Instrument

https://www.instrument.com/

Use for:

- premium agency positioning
- brand + technology
- project presentation

### Fantasy

https://fantasy.co/

Use for:

- dramatic typography
- visual storytelling
- premium creative direction

### Linear

https://linear.app/

Use for:

- hierarchy
- data visualization
- product-like clarity
- restrained animation

### Stripe

https://stripe.com/

Use for:

- conversion hierarchy
- structured content
- polished visual explanations

### Awwwards

https://www.awwwards.com/

Use for:

- interaction references
- motion patterns
- premium agency examples

## Additional Technical References

GSAP ScrollTrigger:
https://gsap.com/docs/v3/Plugins/ScrollTrigger/

Animation performance:
https://web.dev/articles/animations-guide

Reduced motion:
https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion

Responsive design:
https://web.dev/learn/design

Playwright screenshots:
https://playwright.dev/docs/screenshots

---

# 2. Overall Page Architecture

The target homepage architecture is:

```text
Navigation
     ↓
Hero
     ↓
Proof / Credibility
     ↓
Growth System
     ↓
Services
     ↓
Featured Work
     ↓
Approach
     ↓
Growth Opportunity Tool
     ↓
About
     ↓
Testimonials
     ↓
Insights
     ↓
FAQ
     ↓
Final CTA
     ↓
Footer
```

Do not add sections only to increase page length.

Every section must have a clear UX purpose.

---

# PHASE 1

## Repository Audit + Baseline

### Objective

Understand the existing implementation before changing the UI.

### Inspect

```text
package.json
src/app/
src/components/
public/
styles/
data/
API routes
forms
metadata
SEO files
animation utilities
```

Identify:

```text
framework
dependencies
routes
components
content sources
image assets
font setup
animation implementation
responsive implementation
form handling
SEO implementation
```

### Create

```text
/docs/design-audit.md
/docs/technical-audit.md
/docs/content-audit.md
```

For every major component classify:

```text
KEEP
POLISH
REDESIGN
REBUILD
REMOVE
```

### Do Not

Do not redesign anything yet.

### Acceptance Criteria

- repository structure understood
- current components documented
- existing functionality documented
- animation architecture documented
- responsive problems documented
- content requiring verification documented

### Completion Output

Return:

```text
PHASE 1 COMPLETE

Current stack:
...

Reusable components:
...

Components to preserve:
...

Components to redesign:
...

Technical risks:
...

Responsive issues:
...

Existing functionality:
...
```

---

# PHASE 2

## Premium Design System

### Objective

Create a coherent visual foundation.

### Color Direction

Use:

```text
Deep Navy
Electric Blue
Lime Accent
Off White
White
Dark Ink
Muted Gray
```

Use lime sparingly.

The site should feel sophisticated first and colorful second.

### Typography

Preferred primary fonts:

```text
Geist
Inter
Manrope
Satoshi
```

Use one primary font.

Optional editorial serif only for specific accent moments.

### Create Shared Tokens

```text
colors
typography
spacing
containers
radius
borders
shadows
gradients
motion
breakpoints
```

### Shared Components

Create or improve:

```text
Container
Section
SectionHeading
Button
Badge
Metric
AnimatedNumber
Divider
Reveal
```

### Responsive Typography

Use `clamp()`.

Example:

```css
font-size: clamp(3rem, 7vw, 7rem);
```

### Acceptance Criteria

- design tokens centralized
- repeated values removed
- responsive typography established
- existing build still works
- existing page does not regress

---

# PHASE 3

## Responsive Foundation

### Objective

Make responsiveness structural rather than a final patch.

### Required Viewports

```text
320 × 568
360 × 800
375 × 812
390 × 844
412 × 915
430 × 932

600 × 800
768 × 1024
820 × 1180
1024 × 1366

1280 × 720
1366 × 768
1440 × 900
1536 × 864
1920 × 1080
2560 × 1440
```

### Zoom

Test:

```text
80%
90%
100%
110%
125%
150%
```

### Rules

Use:

- CSS Grid
- Flexbox
- `clamp()`
- `minmax()`
- fluid widths
- intrinsic sizing

Avoid:

- fixed content widths
- fixed-height sections containing text
- absolute positioning for primary content
- hover-only functionality

### Acceptance Criteria

At all required viewport sizes:

- no horizontal overflow
- no text clipping
- no image distortion
- no button overflow
- no navigation collision
- no broken grids
- no major whitespace anomalies

---

# PHASE 4

## Navigation Redesign

### Desktop

```text
ADORCA 360

Work
Services
Approach
Insights
About

Talk to a Strategist
```

### Hero State

Transparent / overlay.

### Scroll State

Compact:

- solid background
- subtle blur
- subtle border
- reduced height

### Mobile

Create proper mobile navigation.

Requirements:

- accessible menu button
- keyboard support
- focus management
- Escape closes
- body scroll handling
- touch-friendly controls

### Acceptance Criteria

Navigation works on:

- desktop
- tablet
- mobile
- keyboard

No layout jump.

---

# PHASE 5

## Hero Redesign

### Objective

Make the hero the strongest visual section.

### Headline

Use:

```text
Turn Search Into
Sustainable Growth.
```

Supporting copy must clearly explain the business.

### CTA

Primary:

```text
Build My Growth Plan
```

Secondary:

```text
Explore Our Work
```

## Hero Visual

Reuse and improve the repository's existing Growth Orbit concept.

Transform it into:

### Growth Intelligence System

Include:

```text
Visibility
Qualified Leads
Conversion
Markets
Performance
```

Visual language:

- SVG
- orbital lines
- nodes
- charts
- KPI cards
- subtle glow
- ambient gradients

### Animation Sequence

```text
background
↓
headline
↓
supporting copy
↓
CTA
↓
orbit
↓
metrics
↓
graph
```

Do not reveal every element simultaneously.

### Mobile

Create a simplified composition.

Do not shrink the desktop version until it becomes unreadable.

### Acceptance Criteria

Within a few seconds the visitor should understand:

- what Adorca does
- what outcome it creates
- what action to take

Test:

```text
390px
768px
1024px
1440px
1920px
```

---

# PHASE 6

## Proof / Credibility Strip

### Objective

Create a compact credibility layer.

Possible structure:

```text
50+ Markets
12+ Years
Verified Case Studies
Transparent Reporting
```

Only publish verified claims.

### Visual

Minimal typography-driven strip.

Avoid four oversized generic cards.

### Acceptance Criteria

It should feel like a credibility layer, not another service section.

---

# PHASE 7

## Growth System

### Objective

Create the signature Adorca visual experience.

### Heading

```text
One Growth System.
Every Channel Connected.
```

### Visual

```text
DISCOVER
    ↓
ATTRACT
    ↓
CONVERT
    ↓
RETAIN
    ↓
SCALE
```

Connected capabilities:

```text
SEO
CONTENT
SOCIAL
PAID
DATA
TECH
```

### Interaction

Scroll progression:

```text
Node activates
↓
connection draws
↓
supporting content updates
↓
next node activates
```

### Visual Style

- dark navy
- subtle grid
- thin data lines
- controlled blue/lime glow
- restrained motion

### Acceptance Criteria

- visually distinctive
- smooth
- performant
- mobile fallback
- reduced-motion fallback

---

# PHASE 8

## Services Redesign

Preserve:

```text
01 ACQUIRE
02 AMPLIFY
03 CONVERT
```

## Acquire

- SEO
- Lead Generation
- Programmatic Advertising
- Growth Marketing

## Amplify

- Digital Marketing
- Social Media
- Influencer Marketing

## Convert

- Website Development
- App Growth
- Conversion Optimization

### Desktop

Use large interactive editorial panels.

Each contains:

```text
number
title
description
services
visual
CTA
```

Changing pillar should update:

- visual
- service list
- explanatory copy
- active state

### Mobile

Use stacked expandable cards.

### Acceptance Criteria

Services are understandable without interaction.

Interaction enhances the content rather than hiding it.

---

# PHASE 9

## Featured Work Redesign

### Objective

Make case studies one of the most visually important parts of the site.

Do not use an equal four-card grid as the primary pattern.

### Featured Case

Structure:

```text
Client
Industry

+RESULT

Challenge
Strategy
Execution
Outcome

View Case Study
```

### Visuals

Use:

- large project image
- before/after chart
- result visualization
- KPI
- editorial layout

### Secondary Work

Show 2–3 smaller projects.

### Acceptance Criteria

Work feels like actual agency work, not generic cards.

---

# PHASE 10

## Case Study Pages

Each case-study route should use:

```text
Hero
Challenge
Opportunity
Strategy
Execution
Data
Results
Outcome
Next Project
```

### Functional Requirements

- deep links work
- metadata works
- OpenGraph works
- proper routing
- breadcrumb where useful

Never fabricate results.

---

# PHASE 11

## Approach / Process

### Heading

```text
From Strategy
To Scale.
```

### Steps

```text
01 Discover
02 Strategize
03 Execute
04 Optimize
```

### Desktop

Horizontal timeline.

### Mobile

Vertical timeline.

### Animation

Progress line / subtle stage reveal.

### Acceptance Criteria

The process remains understandable with animation disabled.

---

# PHASE 12

## Growth Opportunity Tool

Make this a real conversion feature.

### UI

```text
What's Your Growth Opportunity?

Website
[____________]

Industry
[____________]

Target Market
[____________]

Primary Goal
[____________]

[ Generate My Growth Plan ]
```

### States

```text
Idle
Loading
Success
Error
Retry
```

### Backend Flow

```text
Frontend
↓
Client validation
↓
Server validation
↓
Spam / rate limiting
↓
CRM / Email / Database
↓
Response
```

### Important

Do not claim an automated AI audit happened unless an actual audit system exists.

### Acceptance Criteria

Handle:

- empty inputs
- invalid inputs
- network failure
- duplicate submission
- successful submission

---

# PHASE 13

## About Section

### Heading

```text
Built For
Ambitious Growth.
```

Show only verified information:

- markets
- experience
- capabilities
- operating model

### Visual

Use the Growth Orbit as a global/network visual.

Do not add fake geographic claims.

---

# PHASE 14

## Testimonials + Trust

Use only verified testimonials.

Each testimonial:

```text
Quote
Name
Role
Company
```

### Visual

Prefer editorial presentation over an overly generic carousel.

Use:

- large quote
- company mark where legitimate
- subtle transitions
- strong whitespace

### Acceptance Criteria

Testimonials are:

- genuine
- readable
- accessible
- responsive

---

# PHASE 15

## Insights / Blog

### Homepage

```text
Featured Article
+
2 Secondary Articles
```

### Article Page

Include:

- title
- author
- date
- reading time
- hero image
- body content
- related articles

### SEO

Support:

- canonical
- metadata
- OpenGraph
- structured data
- internal links

---

# PHASE 16

## FAQ

Keep the FAQ content.

Improve:

- accordion design
- spacing
- open/close states
- subtle animation
- accessibility

Required states:

```text
Closed
Open
Keyboard Focus
Touch
Reduced Motion
```

---

# PHASE 17

## Final CTA

Create a visually strong closing section.

### Heading

```text
Ready To Build
What's Next?
```

Supporting message:

```text
Tell us where you are.
We'll show you where the next opportunity is.
```

CTA:

```text
Talk to a Strategist →
```

### Background

Use:

- Growth Orbit
- subtle nodes
- ambient gradient
- restrained movement

The CTA should feel like the culmination of the page.

---

# PHASE 18

## Footer

Keep it clean.

```text
ADORCA 360

Work
Services
Approach
Insights
About
Contact

Privacy
Terms
```

Use verified company data only.

Test every link.

---

# PHASE 19

## Motion Polish

Only after all static sections are complete and responsive.

### Add

Hero:

- text reveal
- graph drawing
- orbit animation

Growth System:

- scroll progression

Services:

- state transitions

Case Studies:

- image reveal
- metric animation

Buttons:

- subtle arrow movement

Sections:

- controlled reveal

### Avoid

- excessive parallax
- giant rotating objects
- constant animation
- unnecessary 3D
- cursor effects everywhere
- animations longer than necessary

### Rule

Motion should communicate hierarchy and interaction.

---

# PHASE 20

## Accessibility

Audit:

```text
semantic HTML
heading hierarchy
links
buttons
forms
tabs
accordions
focus states
contrast
keyboard navigation
screen reader behavior
```

Ensure:

- all interactive controls are keyboard accessible
- all fields have labels
- information is not conveyed through color alone
- animations do not block content
- reduced-motion mode works

---

# PHASE 21

## SEO

Implement:

### Metadata

```text
title
description
canonical
OpenGraph
Twitter/X
favicon
```

### Structured Data

```text
Organization
WebSite
Article
Breadcrumb
```

### Technical SEO

```text
sitemap.xml
robots.txt
semantic HTML
H1/H2 hierarchy
internal linking
image alt text
```

Important marketing text must remain real HTML.

---

# PHASE 22

## Performance

Target excellent Core Web Vitals.

Audit:

```text
JavaScript bundle
images
fonts
animations
client components
server components
third-party code
```

Optimize:

- hero image
- below-fold images
- font loading
- SVGs
- animations
- unnecessary dependencies

Rules:

- do not load huge images on mobile
- do not add heavy libraries without justification
- use Server Components where appropriate
- lazy-load below-fold resources
- avoid layout-shifting content

Do not sacrifice performance for decorative effects.

---

# PHASE 23

## Functional QA

Test every interaction.

```text
Navigation
Mobile menu
Hero CTA
Services
Case studies
Blog
FAQ
Growth Tool
Contact
Footer
```

Every meaningful CTA must lead somewhere.

No dead buttons.

No dummy links.

No silent failures.

---

# PHASE 24

## Error Handling

All dynamic functionality must support:

```text
Loading
Success
Failure
Retry
```

Example:

```text
Generate My Growth Plan
        ↓
Generating...
        ↓
Success
```

Failure:

```text
Unable to submit.
Please try again.

[ Retry ]
```

---

# PHASE 25

## Content Verification

Create or update:

```text
/docs/content-verification.md
```

Track:

```text
Claim
Source
Verified
Approved
```

Every:

```text
client
testimonial
rating
address
phone number
award
partnership
performance claim
```

must have a legitimate source.

Do not use unverified numbers.

---

# PHASE 26

## Cross-Device Responsive QA

Required viewport matrix:

```text
320
375
390
430
768
1024
1280
1440
1920
2560
```

Check:

```text
Hero
Navigation
Growth System
Services
Case Studies
Forms
CTA
Footer
```

Look specifically for:

```text
overflow
clipping
overlap
tiny text
broken grids
awkward whitespace
missing CTA
animation collision
```

---

# PHASE 27

## Cross-Browser QA

Test:

```text
Chrome
Firefox
Safari
Edge
```

Mobile:

```text
iPhone Safari
Android Chrome
iPad Safari
```

Pay attention to:

- sticky navigation
- mobile viewport units
- SVG scaling
- touch interaction
- fonts
- image loading
- scrolling

Use modern viewport units such as `svh`, `lvh`, and `dvh` where appropriate instead of relying on `100vh` for critical mobile layouts.

---

# PHASE 28

## Visual Regression

Use Playwright screenshot testing.

Capture:

```text
homepage-320.png
homepage-390.png
homepage-768.png
homepage-1024.png
homepage-1280.png
homepage-1440.png
homepage-1920.png
homepage-2560.png
```

At minimum compare:

```text
Hero
Growth System
Services
Case Studies
Growth Tool
CTA
Footer
```

---

# PHASE 29

## Production Validation

Run:

```bash
npm run lint
npm run build
npm run start
```

Test the production build.

Check:

```text
console errors
hydration warnings
404s
broken links
forms
SEO
accessibility
performance
responsive behavior
animations
```

---

# PHASE 30

## Final Visual Audit

Evaluate the website as one experience.

## Visual

Does it feel:

```text
Premium
Distinctive
Modern
Cohesive
Confident
Professional
```

Does it avoid:

```text
Template appearance
Excessive gradients
Generic cards
Unnecessary glassmorphism
Excessive animation
Generic stock imagery
```

## UX

Can a visitor quickly understand:

```text
What Adorca does
Why Adorca is credible
What Adorca has achieved
How Adorca works
What to do next
```

## Technical

Does it:

```text
work across screen sizes?
load quickly?
work with keyboard?
work with touch?
work with reduced motion?
have correct metadata?
have no broken links?
have no console errors?
```

---

# Recommended Execution Order

Execute phases sequentially:

```text
PHASE 1  → Repository Audit
PHASE 2  → Design System
PHASE 3  → Responsive Foundation
PHASE 4  → Navigation
PHASE 5  → Hero
PHASE 6  → Proof
PHASE 7  → Growth System
PHASE 8  → Services
PHASE 9  → Featured Work
PHASE 10 → Case Studies
PHASE 11 → Approach
PHASE 12 → Growth Tool
PHASE 13 → About
PHASE 14 → Testimonials
PHASE 15 → Insights
PHASE 16 → FAQ
PHASE 17 → Final CTA
PHASE 18 → Footer
PHASE 19 → Motion
PHASE 20 → Accessibility
PHASE 21 → SEO
PHASE 22 → Performance
PHASE 23 → Functional QA
PHASE 24 → Error Handling
PHASE 25 → Content Verification
PHASE 26 → Responsive QA
PHASE 27 → Cross-Browser QA
PHASE 28 → Visual Regression
PHASE 29 → Production Validation
PHASE 30 → Final Visual Audit
```

---

# How to Use This Plan

Do not give the entire plan to the coding agent and ask it to complete everything in one pass.

Execute one phase at a time.

Start with:

```text
Execute PHASE 1 only.

Do not modify the UI yet.

Inspect the repository and produce the requested audit files.

Do not proceed to PHASE 2.
```

After reviewing the result:

```text
Execute PHASE 2 only.

Do not proceed to PHASE 3.
```

Continue sequentially.

For visually sensitive phases, especially:

```text
PHASE 5  Hero
PHASE 7  Growth System
PHASE 8  Services
PHASE 9  Featured Work
```

stop after implementation and review the visual result before continuing.

---

# Phase Completion Protocol

At the end of every phase:

```text
1. Run lint.
2. Run build if supported.
3. Inspect the affected page in a browser.
4. Test desktop and mobile.
5. Test keyboard interaction where applicable.
6. Check browser console.
7. Check for layout overflow.
8. Check that existing functionality was not broken.
9. Summarize files changed.
10. Summarize known issues.
11. Do not move to the next phase if there are unresolved
    build errors, broken core functionality, or major
    responsive problems.
```

---

# Final Creative Direction

The final website should feel like:

**Adorca 360 — a premium international growth studio with a sophisticated digital product experience.**

Core visual formula:

```text
Editorial Typography
+
Data Visualization
+
Dark Cinematic Sections
+
Adorca Growth Orbit
+
Asymmetrical Layouts
+
Subtle Motion
+
Real Proof
+
Exceptional Responsive UX
```

The objective is not to make the website merely "flashier."

The objective is to make it feel:

> **expensive, intelligent, distinctive, and extremely intentional.**

A premium site should look impressive while still being easy to understand and use.
