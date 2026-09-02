# Add GIS and Guidewire as highlighted capabilities

Two named capabilities get their own place on the one-pager: GIS (Geographic Information System) and Guidewire. Kept short — a line each, no sales padding.

## What changes

**Services index grows from 4 to 6 entries (01–06)**

Existing four stay as-is. Two added:

- **GIS & Geospatial** — Spatial data, mapping, and location analytics: exposure mapping, imagery-based risk assessment, and geospatial pipelines that put data on the map.
- **Guidewire** — End-to-end work across PolicyCenter, BillingCenter, and ClaimCenter — implementation, configuration, upgrades, and cloud migration for insurance carriers.

Both get the same numbered-index treatment as the rest: number, title, one sentence. No icons, no logos, no extra sections.

**Supporting copy touch-ups**

- Hero subhead widened slightly so insurance/geospatial work isn't a surprise below the fold.
- Careers line mentions the same disciplines so it stays consistent.
- Full French translations for the two new entries and the touched lines.

## Research note

ValueMomentum's live site does not brand a "GIS" service page; their nearest content is catastrophe modeling, exposure management, and aerial-imagery underwriting analytics. Their Guidewire practice is explicit — "end-to-end services across the Guidewire Suite, including PolicyCenter, BillingCenter, and ClaimCenter … implementing, customizing, and upgrading." The copy above is written in Zedventures' own voice, informed by that framing rather than copied from it.

## Technical details

- `src/lib/i18n.tsx` — add two objects to `services.items` in both the `en` and `fr` blocks; adjust hero subhead and careers line in both.
- `src/components/services.tsx` — verify the numbering renders `01`–`06` from the array index and that the list layout holds at six rows on mobile and desktop; adjust grid/spacing only if needed.
- No new sections, routes, components, or backend.

## Still open (from the previous message)

You mentioned moving off the forest-green theme toward brighter colors. That is a separate change — say the word and I'll follow this with a palette pass.
