# Zedventures — Editorial One-Pager (EN/FR)

A stripped-down, type-forward single page. No "Why Us", no sales sections, no cards grid — just a strong statement, a services index, careers, and a way to talk to us. Everything in both English and French.

## Page structure (all at `/`)

1. **Minimal fixed header** — ZEDVentures wordmark (your uploaded logo, as-is), EN/FR pill toggle, one CTA ("Download deck"). No long nav; anchors appear only if needed.
2. **Hero — type as the hero.** Oversized statement headline ("Engineering intelligence into every enterprise") with the subhead kept to one line. Primary CTA: deck download. Secondary: "Book a consultation". A hairline rule and small eyebrow ("ZEDVENTURES — TECHNOLOGY PARTNER") instead of imagery.
3. **Services — index list, not cards.** Four rows (01–04): AI & Data · Analytics · Product Engineering · Managed Services. Each row = number + discipline name in large type + one sentence. Hover/focus reveals the description on desktop. Hairline dividers between rows.
4. **Deck strip** — one quiet band: "See our full capabilities" + Download button. Replaces a big CTA banner.
5. **Careers** — two lines max + "View open roles" link.
6. **Contact — conversational, minimal.** One line ("Let's talk about your next project"), then a compact form (name, work email, company, message) with inline validation and an in-place success state. No data stored.
7. **Footer** — tagline, EN/FR toggle repeat, copyright. Nothing else.

Removed per your direction: Why Us / Why ZEDVentures section, Why Us eyebrow copy, the big CTA banner, dense services grid.

## Language toggle

Single translations file keyed by section; EN/FR pill in the header swaps copy in place, sets `<html lang>`, persists in localStorage.

## Visual system

- Same brand palette, applied sparser: near-white `#F7FAF5` canvas, slate `#2A2F2C` text, forest green `#1B4332` used only for the deck strip, buttons, and the number accents; amber `#B45309` for the single deck CTA. Hairlines `#C0C9C1`.
- Hanken Grotesk; hero headline 64–96px/800 (oversized editorial scale), index rows 28–40px, body 15–16px, 11px uppercase eyebrows with wide tracking.
- 100px pill buttons, 1px hairlines, flat (no shadows, no glass, no gradients).
- Generous whitespace; lots of air between sections. Mobile: sticky bottom deck CTA.

## Accessibility & SEO

Semantic landmarks, labelled fields, visible focus, AA contrast, alt text. Route `head()` with Zedventures title, description, og/twitter tags.

## Technical notes

- Single route: rewrite `src/routes/index.tsx`; small components under `src/components/`.
- Tokens added to `src/styles.css`; Hanken Grotesk loaded via `<link>` in `src/routes/__root.tsx`.
- Logo uploaded to the asset library and used as-is in header and footer (light surfaces).
- Contact form is frontend-only (per your earlier choice). Deck CTA points to a placeholder PDF; careers link is a placeholder.

## Open items (placeholders)

Real capability-deck PDF, careers/ATS link.
