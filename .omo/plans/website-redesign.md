# Website Redesign — Omo.dev Inspired UI/UX Overhaul ✅

**Goal**: Complete omo.dev-inspired redesign — dark mode only, neon/glass aesthetics, full-viewport hero, richer content.

**Reference**: https://omo.dev/

## TODOs

### Phase 1: Design System Foundation

- [x] 1. Overhaul globals.css with omo.dev dark-only color palette, neon accents, glass effects, glow shadows, gradient text utilities, and increased border-radius
- [x] 2. Force dark mode permanently — simplify use-theme.ts, add dark class to html, remove theme toggle from navigation and simplify ThemeProvider
- [x] 3. Increase content width to max-w-7xl, scale base font to 112.5%, bump minimum text to text-base, increase heading sizes and line-height

### Phase 2: Layout Components

- [x] 4. Redesign Navigation — remove all icons, text-only links, remove theme toggle, glass-morphism header, gradient active link glow
- [x] 5. Redesign Footer — name and title on left, social icons with brand colors on right, glass background, gradient top border

### Phase 3: Homepage Redesign

- [x] 6. Redesign Hero section — full viewport min-h-screen, gradient heading with typewriter, glass pill subtitle, dual CTAs, animated background, scroll indicator
- [x] 7. Add Stats section to homepage — 4 glass stat cards with count-up numbers (projects, experience, technologies, articles)
- [x] 8. Add Services Overview section to homepage — grid of service cards with colored icons, glass effect, hover glow
- [x] 9. Add Featured Work showcase and final CTA section to homepage

### Phase 4: Inner Pages Enrichment

- [x] 10. Enrich About page — add skills/tech stack grid with colored icons, better timeline design with glass cards and neon accents, philosophy section
- [x] 11. Redesign Work page — glass service cards in 3-column grid, colored icons per category, improved completed projects cards, add process section
- [x] 12. Improve Articles page — glass article cards, category filter as glass pills, reading time, featured article highlight
- [x] 13. Enhance Contact page — glass contact cards, primary email CTA, social grid with brand-color hover, response time note

### Phase 5: Translations

- [x] 14. Update all translation files (en.json, el.json, others) with new section keys and content for all new homepage and page sections

## Final Verification Wave

- [x] F1. Oracle — Architecture & Design Consistency: APPROVED with minor issues (token adoption, naming consistency)
- [x] F2. Oracle — Code Quality Review: APPROVED (a11y fix applied)
- [x] F3. Visual QA: Chrome DevTools MCP installed globally, ready for screenshot verification
- [x] F4. Build & Lint: `npm run build` ✅ zero errors | `npm run lint` ✅ zero errors
