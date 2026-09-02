# Zedventures Design Tokens

Global CSS custom properties and design tokens used across the Zedventures site.
Source of truth: `src/styles.css` (Tailwind v4, CSS-first configuration).

---

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `oklch(1 0 0)` / `#FFFFFF` | Page background, light surfaces |
| `--foreground` | `oklch(0.15 0 0)` / near-black | Primary text, headings |
| `--card` | `oklch(1 0 0)` / `#FFFFFF` | Card backgrounds |
| `--card-foreground` | `oklch(0.15 0 0)` | Text on cards |
| `--popover` | `oklch(1 0 0)` | Popover/dropdown background |
| `--primary` | `oklch(0.585 0.226 22.3)` / `#E31937` | Logo red; CTAs, accents, links |
| `--primary-foreground` | `oklch(1 0 0)` / `#FFFFFF` | Text on primary buttons |
| `--secondary` | `oklch(0.955 0 0)` | Light gray wash; hero glow panels |
| `--secondary-foreground` | `oklch(0.15 0 0)` | Text on secondary surfaces |
| `--muted` | `oklch(0.96 0 0)` | Subtle hover states |
| `--muted-foreground` | `oklch(0.45 0 0)` / `#737373` | Body copy, descriptions, labels |
| `--accent` | `oklch(0.585 0.226 22.3)` / `#E31937` | Same as primary; chips, rules |
| `--accent-foreground` | `oklch(1 0 0)` | Text on accent surfaces |
| `--destructive` | `oklch(0.585 0.226 22.3)` / `#E31937` | Errors (shares logo red) |
| `--destructive-foreground` | `oklch(1 0 0)` | Text on destructive surfaces |
| `--border` | `oklch(0.9 0 0)` / `#E5E5E5` | Hairlines, dividers, input borders |
| `--input` | `oklch(0.88 0 0)` | Form input borders |
| `--ring` | `oklch(0.585 0.226 22.3)` / `#E31937` | Focus outline color |

### Dark Section Override (`.section-dark`)

Applied via utility class to flip a section to near-black:

| Token | Dark Value |
|-------|------------|
| `--background` | `oklch(0.16 0 0)` |
| `--foreground` | `oklch(0.97 0 0)` |
| `--card` | `oklch(0.2 0 0)` |
| `--card-foreground` | `oklch(0.97 0 0)` |
| `--muted` | `oklch(0.24 0 0)` |
| `--muted-foreground` | `oklch(0.68 0 0)` |
| `--border` | `oklch(0.28 0 0)` |
| `--input` | `oklch(0.34 0 0)` |

---

## Border Radius

| Token | Value |
|-------|-------|
| `--radius` | `0.75rem` (base) |
| `--radius-sm` | `calc(var(--radius) - 4px)` = `0.5rem` |
| `--radius-md` | `calc(var(--radius) - 2px)` = `0.625rem` |
| `--radius-lg` | `var(--radius)` = `0.75rem` |
| `--radius-xl` | `calc(var(--radius) + 4px)` = `1.25rem` |

Pill buttons use `rounded-full`.

---

## Typography

### Font Family

- **Primary / Display / Body**: `"Hanken Grotesk"`, `ui-sans-serif`, `system-ui`, `sans-serif`
- Loaded via Google Fonts in `src/routes/__root.tsx`
- Weights used: 300–900 range

### Type Scale (Tailwind classes in use)

| Element | Class | Notes |
|---------|-------|-------|
| Hero headline | `text-5xl sm:text-7xl lg:text-8xl` | `.font-display`, leading `[1.02]` |
| Section heading | `text-4xl sm:text-5xl` | `.font-display`, leading `[1.05]` |
| Service title | `text-3xl sm:text-4xl lg:text-5xl` | `.font-display`, hover turns primary |
| Case-study display | `text-4xl lg:text-5xl` | uppercase, tight leading `[0.9]` |
| Body | `text-sm sm:text-base` | `text-muted-foreground`, leading-relaxed |
| Eyebrow | `.eyebrow` utility | 11px, bold, uppercase, tracking `[0.12em]` |
| Case-study tag | `text-[10px]` | uppercase, tracking `[0.2em]` |

### Custom Utilities

```css
.font-display {
  font-family: "Hanken Grotesk", ui-sans-serif, system-ui, sans-serif;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
```

---

## Spacing & Layout

| Token / Pattern | Value |
|-----------------|-------|
| Max content width | `max-w-6xl` (72rem / 1152px) |
| Page padding | `px-5 sm:px-8` |
| Section vertical padding | `py-10 sm:py-14` (home), `py-12 sm:py-16` (contact) |
| Header height | `h-20` (80px) |
| Main top offset | `pt-20` (accounts for fixed header) |
| Hero top padding | `pt-14 sm:pt-20` |
| Grid gap (case studies) | `gap-y-14 md:gap-x-12 lg:gap-x-16` |
| Service row gap | `gap-3 sm:gap-10` |

---

## Tailwind v4 Theme Mapping

Registered in `@theme inline` inside `src/styles.css`:

```css
@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-ring-offset-background: var(--background);
}
```

---

## Focus & Selection

- Selection background: `var(--color-primary)` / `#E31937`
- Selection text: `var(--color-primary-foreground)` / white
- Focus visible: `2px solid var(--color-ring)`, offset `3px`, radius `2px`

---

## Logo Asset

- File: `src/assets/zedventures-logo.png`
- Header size: `h-10 sm:h-12`
- Footer size: `h-5`
- **Rule**: never recolor; use only on light/white backgrounds.
