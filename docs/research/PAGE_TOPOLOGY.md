# stripe.dev Page Topology

## Overall Layout
- Main container: max-width 1728px
- Body: background gradient linear-gradient(20deg, rgb(241,248,249), rgb(249,241,248), rgb(248,249,241))
- Sections stack vertically, separated by 1px solid borders (#1e1e1e44)
- Each section has internal padding

## Sections (top to bottom)

### 1. Nav (fixed overlay)
- **Position:** Fixed, top: 0, z-index: 2
- **Height:** 49px, padding: 12px
- **Layout:** Flex, space-between
- **Content:** Logo (parallelogram icon) + nav links (Blog, Events, Docs, Youtube, Github, Meetups) + Console button
- **Nav links:** sohne-mono font, keyboard shortcut badges like [B], [E], [D] etc.
- **Interaction:** Static positioning, no scroll-triggered changes observed
- **Type:** Fixed overlay

### 2. Hero
- **Type:** Static (with animated generative art)
- **Content:** Large "Welcome to Stripe Dot Dev" text, subtitle paragraph, decorative SVG art (plus icons, generative canvas art)
- **Typography:** "Welcome" text is very large (~100px), light weight (300), negative letter-spacing (-6px)
- **Layout:** Full-width, generative art as background decorations
- **Art:** Multiple canvas/SVG artworks with interactive "Edit in Console" and "Open art controls" buttons

### 3. Featured Posts (two-column)
- **Type:** Static
- **Layout:** Two side-by-side cards — "Featured Post" and "Featured Video"
- **Each card has:** Section label ("/ Featured Post"), generative art canvas (with 10x zoom indicator), title, description, tags
- **Links:** "More posts" and "More videos" at bottom of each card

### 4. Statistics Ticker
- **Type:** Time-driven (continuous CSS animation)
- **Animation:** CSS animation `ticker` — translate(0%) to translate(-33.3333%), infinite linear
- **Content:** Repeating stats: "YouTube watch time hours: 380,000+", "Meetup group members: 4400+", "Stripe Developer Community: 5 million+"
- **Layout:** Horizontal scrolling marquee, content repeated 3x for seamless loop

### 5. Feed
- **Type:** Click-driven (filter buttons)
- **Heading:** "Feed" with superscript "(20)"
- **Layout:** Two-column — left sidebar (filters) + right content (list table + generative art)
- **Sidebar:** Type filter (event/video/Blog) + Topic filter (Agentic, AI, Best Practices, CLI, etc.)
- **List:** Table with columns Date / Name / Type, 20 items
- **Each item:** Accordion-expandable with plus/minus icon
- **Bottom links:** "More posts", "More videos", "More events"

### 6. Get Help
- **Type:** Time-driven (typewriter text animations)
- **Heading:** "Get help" with superscript "(4)"
- **Layout:** 4 cards in a 2x2 grid
- **Cards:** Changelog, Stripe Developer Meetups, Discord, Support
- **Each card:** Section label, description paragraph, "Example:" with animated typewriter text, CTA link
- **Typewriter:** Characters appear one by one with vibes-blink cursor animation

### 7. Router
- **Type:** Static
- **Heading:** "Router" with superscript "(12)"
- **Layout:** Left info card (with generative art) + Right topics grid
- **Topics:** Accept a payment, Ship a Stripe App, Build a platform, Upgrade your Stripe SDK
- **Each topic:** h3 title, paragraph, primary CTA link, 3 sub-links with pixel arrow icons

### 8. Footer
- **Type:** Static
- **Content:** Decorative SVG strips (repeating plus icons), Docs/Social/Resources sections, Stripe logo, copyright "© 2026 Stripe, Inc.", Privacy/Legal/Stripe.com links
- **Layout:** Multi-column with decorative top and bottom SVG borders
