# Zedventures — System Design Document

Use this document when extending the Zedventures site in Claude or any other environment. It defines the visual language, component patterns, content rules, and constraints established for the project.

---

## 1. Design Philosophy

**Editorial minimalism with engineering confidence.**

The site is a single-scroll (and a few deep-linked pages) B2B technology-services experience. It avoids generic sales language in favor of direct, specific statements about what Zedventures builds and runs.

- **Less is more**: oversized type, generous but controlled whitespace, and short index-style lists.
- **No generic B2B sales sections**: no "Why Us", "Our Mission", "Trusted By", or testimonial carousels.
- **Content-first**: every section must earn its place with real capabilities or real case-study outcomes.
- **Bilingual by default**: English and French, managed through `src/lib/i18n.tsx`.

---

## 2. Visual Identity

### Color System

The palette is intentionally restrained to three values:

| Role | Value | Hex approx. |
|------|-------|-------------|
| Background | `oklch(1 0 0)` | `#FFFFFF` |
| Foreground / Text | `oklch(0.15 0 0)` | near-black `#262626` |
| Accent / Logo Red | `oklch(0.585 0.226 22.3)` | `#E31937` |

- Use **white** for the ground of every page.
- Use **near-black** for headings and primary text.
- Use **logo red** sparingly: eyebrows, numbers, links on hover, buttons, focus rings, and thin rules.
- Dark sections (`.section-dark`) invert to near-black background with white text. Use these as bands, not the whole page.

### Typography

- **Font**: Hanken Grotesk (Google Fonts), weights 300–900.
- **Display type**: extra-bold (`font-weight: 800`), tight tracking (`-0.02em`), large sizes (`text-5xl` to `text-9xl`).
- **Body type**: same family, regular weight, muted gray (`text-muted-foreground`), relaxed line-height.
- **Eyebrows**: 11px, bold, uppercase, wide letter-spacing (`0.12em`), red.

### Logo Usage

- Asset: `src/assets/zedventures-logo.png`.
- Header: `h-10 sm:h-12`.
- Footer: `h-5`.
- **Never recolor the logo**.
- **Only place the logo on white or very light backgrounds**.

---

## 3. Layout Patterns

### Container

All content sits inside `max-w-6xl` (1152px), centered with `mx-auto`, padded `px-5 sm:px-8`.

### Header

- Fixed top bar, `h-20`, white/90% opacity with `backdrop-blur-sm`.
- Bottom hairline `border-border`.
- Logo left; navigation right: Services, Case Studies, Contact; then EN/FR language toggle.
- Nav links: `text-sm font-semibold`, default `text-foreground`, hover/active `text-primary`.

### Footer

- White background, top hairline.
- Logo + tagline left; language toggle + copyright right.
- No heavy sitemap; keep it minimal.

### Section Rhythm

- Sections are separated by `border-t` or `border-b` hairlines.
- Default vertical padding: `py-10 sm:py-14`.
- Dark sections use `.section-dark` and sit between white sections for contrast.

### Section Header Component

```tsx
<SectionHeader eyebrow="What we do" heading="Capabilities" sub="Engineering, data, and geospatial systems built to run." />
```

- Eyebrow in red, uppercase, tiny.
- Heading in `.font-display`, `text-4xl sm:text-5xl`, tight leading.
- Optional subline in `text-muted-foreground`, `text-base leading-relaxed`.
- Default centered; pass `align="left"` for left-aligned editorial pages.

---

## 4. Component Catalog

### Hero (`src/components/hero.tsx`)

- No eyebrow.
- Large display headline, left-aligned.
- Subheadline below, muted, `max-w-xl`.
- Subtle secondary wash behind the headline as a soft rounded panel.

### Services Index (`src/components/services.tsx`)

- Centered `SectionHeader`.
- Numbered list (`01`, `02`, …) with red `.eyebrow` numbers.
- Each row: number → service title → short description aligned right on desktop.
- Hairline separators between items.
- Service title turns red on hover.

### Services Page (`src/routes/services.tsx`)

- Editorial header with red left rule (`border-l-4 border-primary`).
- Oversized heading (`text-5xl sm:text-7xl md:text-8xl lg:text-9xl`).
- Alternating dark/white numbered bands for each service.
- No expandable accordions, wheels, or circular diagrams.

### Case Studies (`src/components/case-studies.tsx` and `src/routes/case-studies.tsx`)

- Dark section.
- Centered `SectionHeader`.
- Asymmetric editorial grid: 2 columns on desktop, second column offset vertically.
- Each card:
  - Top rule in red (`border-accent/30`).
  - Case-study tag + client/date in tiny uppercase.
  - Large two-line display title on the left.
  - Description + technology chips on the right.
  - Chips: `rounded-full border border-accent/20`, tiny uppercase text.

### Careers (`src/components/careers.tsx`)

- White section.
- Centered `SectionHeader`.
- Single text link with arrow icon (`ArrowUpRight`).
- No cards, no imagery.

### Contact (`src/components/contact.tsx` and `src/routes/contact.tsx`)

- Dark section on home; contact page has a white top section then dark form section.
- Left: `SectionHeader align="left"`.
- Right: `ContactForm`.
- Contact page also shows email/phone cards and office location cards.

### Contact Form (`src/components/contact-form.tsx`)

- Fields: Name, Email, Company, Message.
- Labels: tiny uppercase, muted.
- Inputs: `rounded-xl`, `bg-card`, `border-input`, focus `border-primary`.
- Submit: pill button (`rounded-full`), red background, white text.
- Validation errors in red below fields.
- Success state: checkmark icon + confirmation copy.

### Language Toggle (`src/components/language-toggle.tsx`)

- Pill-shaped segmented control: `EN | FR`.
- Active language has red background and white text.
- In dark contexts, invert colors via `dark` prop.

---

## 5. Content Rules

### What to Include

- Real capabilities: AI & Data, Analytics, GIS & Geospatial, Guidewire, SAP, Product Engineering, Offshore & Nearshore Delivery.
- Real project patterns, anonymized client descriptors, and dated outcomes.
- Specific technologies and measurable results.
- Bilingual copy for every user-facing string.

### What to Avoid

- Generic sales language: "Why Us", "Our Values", "Trusted By", "Mission/Vision".
- Capability deck downloads or "Book a Consultation" CTAs.
- Named customer references; use industry descriptors (e.g., "Global consumer-electronics company").
- Recoloring the logo or placing it on dark backgrounds.
- Heavy imagery, gradients, or decorative illustrations.

### Tone

- Direct, technical, and confident.
- Avoid hype. Prefer "built to run in production" over "revolutionary" or "cutting-edge".
- French copy should feel equally professional and precise, not translated word-for-word from English.

---

## 6. Technical Stack

- **Framework**: TanStack Start v1 (React 19, Vite 7, full-stack SSR/SSG).
- **Router**: `@tanstack/react-router`. No `react-router-dom`.
- **Styling**: Tailwind CSS v4, CSS-first config in `src/styles.css`.
- **Font**: Hanken Grotesk via Google Fonts link in `src/routes/__root.tsx`.
- **Icons**: `lucide-react`.
- **State**: React context for language (`src/lib/i18n.tsx`).
- **Forms**: client-side validation only (no backend connected).

---

## 7. File Conventions

- Routes live in `src/routes/`.
- Shared components live in `src/components/`.
- Translations live in `src/lib/i18n.tsx`.
- Global styles and tokens live in `src/styles.css`.
- Do not create `tailwind.config.js`; Tailwind v4 reads `src/styles.css`.
- Do not create `src/App.tsx` or React Router route tables.

---

## 8. Accessibility & SEO Baselines

- All interactive elements have visible focus states (`outline: 2px solid var(--color-ring)`).
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`.
- Images have descriptive `alt` text from translations.
- Every route has a unique `head()` with title, description, `og:*`, and `twitter:card`.
- Language toggle uses `aria-pressed` and `role="group"`.

---

## 9. When Adding New Screens

1. Create the route file in `src/routes/`.
2. Wrap the page in `LanguageProvider` and include `Header` + `Footer`.
3. Use `max-w-6xl px-5 sm:px-8` for content width.
4. Add a `head()` with unique title/description/OG tags.
5. Pull copy from `useLanguage()` or add new keys to both `en` and `fr` objects in `src/lib/i18n.tsx`.
6. Prefer white sections with hairline separators; use `.section-dark` only for contrast bands.
7. Keep CTAs minimal: contact link, email, or form. No downloads or consultation booking.

## Careers

One entry per role in `src/lib/careers.ts`. The index (`/careers`), the detail
pages (`/careers/$slug`), the SEO metadata and the Google Jobs JSON-LD are all
generated from that array — adding a role means adding an object, nothing else.

**Verbatim postings.** A posting with `sourceOfText: "filing"` carries wording
taken from an immigration filing (ETA-9089, LCA). That text is expected to match
the filing, so it is never rewritten for tone, tightened, or reflowed. The
detail page renders it with `whitespace-pre-line` and shows a note saying the
wording is as filed. This is the one place on the site where awkward phrasing is
correct and must be left alone.

**Fields the compiler insists on.** `pay` is required rather than optional
because California SB 1162 requires the pay scale in any posting for a role
fillable in California. `locations` is a list of free strings, not a structured
address, so filing wording like "various unanticipated client locations
throughout California" survives intact.

**Draft mode.** `DRAFT_CAREERS = true` puts a banner on both page types, emits
`robots: noindex`, and suppresses the JobPosting structured data. Each posting
also carries an `unverified` array; `jobPostingJsonLd` returns null while it is
non-empty, so a wrong salary can never reach Google Jobs. Flip the flag only
once every `unverified` array is empty.

**Bilingual split.** Page chrome and the company statements (EEO,
accommodation, work authorization, screening, applicant privacy, recruitment
fraud, agency resumes) are in `i18n.tsx` in both locales and render from
`components/careers-legal.tsx` on the index and on every posting. The postings
themselves are single-language on purpose: translating text tied to a US
government filing is a decision for counsel, not for a copywriter.

**Outstanding placeholders.** The `legal` block in `i18n.tsx` contains bracketed
values — `[HR email]`, `[phone]`, `[retention period]`, `[privacy email]`.
Search for `[` before launch. The postal address in `careers.ts` says Suite 108
(from the live site) while the contact data says Suite 209; the filing decides
which is right.
