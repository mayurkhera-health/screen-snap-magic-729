# Zedventures — Single-Page B2B Site (EN/FR)

A modern one-page marketing site for Zedventures, built from the brief: sticky header with in-page anchors, EN/FR language toggle, and a capability-deck download as the primary conversion.

## Page structure (all at `/`)

1. **Sticky header** — logo, nav (Services · Why Us · Careers · Contact), EN/FR pill toggle, "Download Capability Deck" button. Mobile: hamburger sheet menu.
2. **Hero** — eyebrow, H1 "Engineering intelligence into every enterprise", subhead, two CTAs (deck download primary, book consultation secondary).
3. **Services** — 4-card grid: AI & Data, Analytics, Product Engineering, Managed Services.
4. **Why Zedventures** — 3 numbered points on a dark forest-green section.
5. **Capability deck banner** — full-width CTA band.
6. **Careers** — blurb + "View Open Roles" CTA.
7. **Contact** — form (full name, work email, company, message) with inline validation and an in-place success confirmation state; no data is stored.
8. **Footer** — tagline, nav repeat, copyright.
9. **Sticky bottom CTA bar on mobile** — deck download.

## Language toggle

All copy for both languages lives in one translations file keyed by section. The toggle swaps copy in place (no route change), sets `<html lang="en|fr">`, and remembers the choice in localStorage.

## Visual system

- Palette applied as design tokens: forest green `#1B4332` (dark sections, primary buttons), near-white `#F7FAF5` / white cards, amber `#B45309` accent for highlights, slate `#2A2F2C` body text, `#707973` muted, `#C0C9C1` hairlines.
- Hanken Grotesk from Google Fonts; display 44–56px/800, H2 30–34px/800, H3 17–18px/700, body 15–16px, 11px uppercase eyebrows with wide tracking.
- 12px card radius, 100px pill buttons, 1px hairline borders, near-flat shadows. No glassmorphism or heavy gradients.
- Buttons: green fill / green outline ghost / white outline ghost on dark.

## Accessibility & SEO

Semantic landmarks, labelled form fields with error messaging, visible focus rings, AA contrast, alt text. Route `head()` with a Zedventures-specific title, description, og/twitter tags.

## Technical notes

- Single route: rewrite `src/routes/index.tsx`; section components under `src/components/`.
- Tokens added to `src/styles.css`; font loaded via `<link>` in `src/routes/__root.tsx`.
- Contact form is frontend-only (React state + success view), per your choice — easy to wire to Lovable Cloud later.
- Capability deck CTA points to a placeholder PDF path until the real deck exists; careers CTA is a placeholder link.
- Logo: your uploaded ZEDVentures wordmark, used as-is (no recoloring) in the header on a light surface, and in the footer on a light band.

## Open items (left as placeholders)

Differentiator statement, client logos/case studies, real deck PDF, careers/ATS link.
