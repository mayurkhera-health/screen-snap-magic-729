import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Box,
  Cloud,
  Layers,
  Plug,
  ShieldCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { SectionHeader } from "@/components/section-header";
import {
  DRAFT_SERVICE_PAGES,
  SERVICE_PAGES,
  SHOW_SERVICE_PROOF,
  type ServiceSlug,
  type TechIcon,
} from "@/lib/service-pages";

/**
 * Category icons. Lucide, not Ionicons — the site already ships lucide and
 * adding a second icon library for six glyphs is weight for nothing.
 */
const TECH_ICONS: Record<TechIcon, typeof BarChart3> = {
  chart: BarChart3,
  cube: Box,
  cloud: Cloud,
  layers: Layers,
  plug: Plug,
  shield: ShieldCheck,
};

/**
 * Service detail page — spec v1.2.
 *
 * One template, seven records. This is the whole layout; nothing about it is
 * per-service except the data it reads. A service that has not had its v1.2
 * copy written keeps the older template (see services_.$slug.tsx), so the
 * seven convert one at a time rather than drifting apart.
 *
 * Six sections, answering the five buyer questions in the order they are asked:
 *
 *   01 HERO           white     am I in the right place (copy + one image)
 *   02 SITUATION      surface   do they understand my situation
 *   03 CAPABILITIES   white     can they do this
 *   04 TECHNOLOGY     surface   ...with what
 *   05 WHY ZED        #0a0a0b   why them specifically
 *   06 PROOF + NEXT   white     have they done it / what happens if I write
 *
 * The background rhythm is load-bearing (S3). One dark band, and it is the
 * page's only visual event; a second one at the bottom would spend it. That is
 * why section 06 is white even though a dark closing band is the more common
 * pattern.
 *
 * Colour constraints on this page are measured, not chosen (S38):
 *   #E31937 on #FFFFFF   4.71  eyebrows allowed
 *   #E31937 on #FBFBFA   4.55  eyebrows allowed
 *   #E31937 on #F7F7F5   4.39  FAILS — --secondary carries no red small text
 *   #E31937 on #0A0A0B   4.20  FAILS — dark band uses --dark-lead instead
 */
export function ServicePageV12({ slug }: { slug: ServiceSlug }) {
  const { t, lang } = useLanguage();
  const s = SERVICE_PAGES[lang][slug];
  const study = s.proof ? t.caseStudies.items[s.proof.index - 1] : undefined;

  // Guaranteed by the caller, which only renders this template for a service
  // that has whyPillars. Narrowed here so the JSX does not need optional chains.
  const groups = s.technologyGroups ?? [];
  const pillars = s.whyPillars ?? [];

  // Right-hand hero column exists when there is a real image, or while the
  // page is still a draft and a placeholder is useful. Never otherwise.
  const showImageSlot = Boolean(s.heroImage) || DRAFT_SERVICE_PAGES;

  return (
    <>
      {/* ---------------------------------------------------------------
          01 — HERO

          Two columns: copy left, one image right.

          The image slot resolves three ways, and the third is the point:

            heroImage set            -> the real image
            no image, draft on       -> a labelled placeholder naming the
                                        subject to source
            no image, draft OFF      -> nothing; the hero returns to the
                                        single-column text-led layout

          A placeholder that renders unconditionally is how a grey box ends
          up on a production page. Tying it to DRAFT_SERVICE_PAGES means
          turning the draft flag off either reveals real images or quietly
          restores a hero that still reads correctly without them.
          --------------------------------------------------------------- */}
      <section className="border-b border-border">
        <div
          className={`container-page section-y ${
            showImageSlot ? "grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:items-center lg:gap-14" : ""
          }`}
        >
          <div>
            {/* The eyebrow is the service name, because the H1 is deliberately
                an outcome and no longer says which page this is. */}
            <p className="eyebrow text-accent">{s.name}</p>
            <h1 className="font-display mt-3 max-w-[18ch] text-[2.5rem] leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              {s.outcome}
            </h1>
            <p className="mt-7 max-w-[42rem] text-[1.0625rem] leading-[1.55] text-muted-foreground sm:text-[1.1875rem]">
              {s.intro}
            </p>
            <Link to="/contact" className="btn btn-wrap btn-primary mt-9">
              {t.services.heroCtaBefore} {s.name} {t.services.heroCtaAfter}
              <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {s.heroImage ? (
            <img
              src={s.heroImage.src}
              alt={s.heroImage.alt}
              width={1280}
              height={720}
              loading="eager"
              className="aspect-[16/9] w-full rounded-2xl object-cover"
            />
          ) : (
            showImageSlot && (
              <div
                className="flex aspect-[16/9] w-full flex-col justify-end rounded-2xl border border-dashed border-border-strong bg-secondary p-6"
                role="note"
                aria-label="Hero image not yet supplied"
              >
                <p className="eyebrow text-subtle-foreground">Hero image</p>
                <p className="mt-2 max-w-[34ch] text-sm leading-[1.5] text-muted-foreground">
                  {s.heroImageHint}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* ---------------------------------------------------------------
          02 — THE SITUATION (S11-S12)
          The client's world before they called. No ZED, no product names,
          no capability list. This is the one section that cannot be drafted
          from the service description, and the only one a competitor could
          not have written.
          --------------------------------------------------------------- */}
      <section className="border-b border-border bg-surface">
        <div className="container-page section-y split">
          <SectionHeader
            align="left"
            eyebrow={t.services.situationEyebrow}
            heading={t.services.situationHeading}
          />
          <p className="max-w-[38rem] text-[1.0625rem] leading-[1.65] text-muted-foreground sm:text-[1.125rem]">
            {s.situation}
          </p>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          03 — WHAT WE HELP YOU DO (S13-S18)
          Editorial grid, not cards: numbering, typography, whitespace and
          a hairline. Rows are not links — there is nowhere to send the
          reader, and a hover that implies navigation and delivers none is
          worse than no hover at all (S17).
          --------------------------------------------------------------- */}
      <section className="border-b border-border">
        <div className="container-page section-y">
          <SectionHeader
            align="left"
            eyebrow={t.services.buildEyebrow}
            heading={t.services.buildHeading}
          />
          <ol className="mt-11 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {s.capabilities.map((c, i) => (
              <li key={c.title} className="group border-t border-border pt-6">
                <span
                  className="eyebrow block text-accent transition-opacity group-hover:opacity-80"
                  style={{ transitionDuration: "var(--dur)" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="font-display mt-3.5 max-w-[20ch] text-[1.375rem] leading-[1.15] tracking-[-0.02em] transition-transform group-hover:translate-x-1 sm:text-2xl"
                  style={{
                    transitionDuration: "var(--dur)",
                    transitionTimingFunction: "var(--ease)",
                  }}
                >
                  {c.title}
                </h3>
                <p className="mt-3 max-w-[30rem] text-base leading-[1.55] text-muted-foreground">
                  {c.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------------------------------------------------------
          04 — PLATFORMS WE WORK WITH (S19-S23)
          Text, not logo tiles. Tiles cost a licensing question per mark,
          imply partner status that may not exist, and turn the section
          into the logo wall the spec warns against. Three columns of names
          at 15px say the same thing in a tenth of the markup.
          --------------------------------------------------------------- */}
      {groups.length > 0 && (
        <section className="border-b border-border bg-surface">
          <div className="container-page section-y">
            <SectionHeader
              align="left"
              eyebrow={t.services.platformsEyebrow}
              heading={t.services.platformsHeading}
              sub={t.services.platformsSub}
            />
            {/* One card, three rows, flat dot-marked chips.
                Adapted from the chip spec: 170px label column, 12px/18px row
                padding, 5px chip radius, no chip border, 6px chip gap, leading
                dot bullet. Denser than the rounded pills it replaces, and a
                flat chip reads as a label rather than as a button nobody can
                press.

                Its colours are NOT adopted. That spec is FuelUp Youth's
                system — #064E3B, #1B4332, #40916C, #F7FAF5 are a green
                palette belonging to a different brand. Everything here maps to
                ZEDventures tokens instead: chip ground --secondary, chip text
                --foreground, label --subtle-foreground, dot and icon --accent.

                Still names only, no logos: no licensing question per mark and
                no implied partner status. */}
            {/* Two border weights, and both are heavier than the site's content
                dividers. The --border / --border-strong tokens are tuned for
                hairlines *inside* prose, where barely-there is right; this
                card is a discrete object sitting on a tinted band and has to
                hold its own edge, so it takes its own values.

                Measured against the card ground (#ffffff):
                  #e7e7e4  1.24  --border, the content hairline
                  #d8d8d5  1.43  --border-strong
                  #c2c2be  1.79  <- row dividers
                  #a8a8a3  2.39  <- card frame
                  #8e8e89  3.29  reads as a drawn box, too heavy here

                The frame stays a step above the dividers so the card still
                reads as one object rather than three stacked strips. */}
            <dl className="mt-7 max-w-[54rem] overflow-hidden rounded-xl border border-[#a8a8a3] bg-background">
              {groups.map((g, i) => {
                const Icon = g.icon ? TECH_ICONS[g.icon] : null;
                return (
                  <div
                    key={g.label}
                    className={`grid gap-2 px-4 py-3 sm:px-[18px] lg:grid-cols-[minmax(0,170px)_minmax(0,1fr)] lg:items-center lg:gap-3 ${
                      i > 0 ? "border-t border-[#c2c2be]" : ""
                    }`}
                  >
                    <dt className="flex items-center gap-1.5">
                      {Icon && (
                        <Icon
                          className="h-[13px] w-[13px] shrink-0 text-accent"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      )}
                      <span className="text-[10px] font-bold uppercase leading-none tracking-[0.1em] text-subtle-foreground">
                        {g.label}
                      </span>
                    </dt>
                    <dd className="flex flex-wrap gap-1.5">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-[5px] bg-secondary py-1 pl-[7px] pr-[9px] text-[12.5px] font-semibold leading-[1.5] text-foreground"
                        >
                          <span
                            className="h-1 w-1 shrink-0 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          {item}
                        </span>
                      ))}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------------
          05 — WHY ZED (S24-S29)
          The page's one dark band. Eyebrow and pillar numerals use
          --dark-lead (#c7c7ca, 11.73:1) rather than brand red, which
          measures 4.20:1 here and fails AA. The red survives as a short
          decorative rule beside each numeral, which is not load-bearing
          text (S27).
          --------------------------------------------------------------- */}
      {pillars.length > 0 && (
        <section className="section-dark">
          <div className="container-page section-y">
            <p className="eyebrow text-dark-lead">{t.services.whyEyebrow}</p>
            <h2 className="font-display mt-3 max-w-[20ch] text-[2rem] leading-[1.08] tracking-[-0.025em] sm:text-[2.75rem]">
              {t.services.whyHeading} {s.name}
            </h2>
            {s.whyIntro && (
              <p className="mt-5 max-w-[47rem] text-[1.0625rem] leading-[1.55] text-dark-lead sm:text-[1.125rem]">
                {s.whyIntro}
              </p>
            )}

            <ol className="mt-12 grid gap-px overflow-hidden bg-border lg:grid-cols-3">
              {pillars.map((pillar, i) => (
                <li
                  key={pillar.title}
                  className="bg-background py-7 lg:px-8 lg:py-0 lg:first:pl-0"
                >
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-dark-lead" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="h-px w-8 bg-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display mt-5 max-w-[18ch] text-[1.375rem] leading-[1.15] tracking-[-0.02em] sm:text-2xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-[30rem] text-[0.9375rem] leading-[1.6] text-muted-foreground">
                    {pillar.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------------
          06A — PROOF (S31-S33)

          Currently hidden site-wide by SHOW_SERVICE_PROOF; see the note on
          that flag in service-pages.ts. When it is on, the block still
          renders only where a real case study exists - no empty card, no
          "coming soon", no unrelated project.
          --------------------------------------------------------------- */}
      {SHOW_SERVICE_PROOF && study && s.proof && (
        <section className="border-b border-border" aria-label={t.services.proofEyebrow}>
          <div className="container-page section-y">
            {/* Eyebrow only, no H2. A heading here ("We've done this.") narrated
                the card immediately below it without adding anything the card
                does not already say, and put a claim in ZED's voice directly
                above the client's evidence. The eyebrow labels the section and
                the case study speaks for itself. */}
            <SectionHeader align="left" eyebrow={t.services.proofEyebrow} />
            <Link
              to="/case-studies"
              hash={`case-${s.proof.index}`}
              className="group mt-7 flex max-w-[52rem] flex-col gap-4 border-l-[3px] border-l-primary bg-surface py-7 pl-7 pr-7 transition-colors hover:bg-secondary"
              style={{ transitionDuration: "var(--dur)", transitionTimingFunction: "var(--ease)" }}
            >
              <p className="font-display text-[1.375rem] leading-[1.2] tracking-[-0.02em] sm:text-2xl">
                {study.title}
              </p>
              <p className="font-display text-lg leading-[1.25] tracking-[-0.015em] text-accent">
                {s.proof.headline}
              </p>
              <p className="text-sm leading-[1.55] text-muted-foreground">
                {study.stack.join(" · ")}
              </p>
              <span className="flex items-center gap-1.5 text-sm font-bold text-accent">
                {t.services.proofCta}
                <ArrowUpRight className="arrow-shift h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* ---------------------------------------------------------------
          06B — WHAT HAPPENS NEXT

          One sentence. No heading, no button, no eyebrow.

          The spec's full closing block was removed: its headline repeated its
          button, and the button repeated the "Let's talk" control pinned in
          the header at every scroll position. What is left is the only part
          that was not a duplicate — a statement of what happens after someone
          writes, which no competitor service page reviewed for this project
          provides.

          The button is deliberately labelled differently from the header's
          "Let's talk" — same destination, but two controls carrying identical
          words read as one repeated element rather than two chances to act.
          --------------------------------------------------------------- */}
      <section aria-label={t.contact.eyebrow}>
        <div className="container-page section-y grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-center">
          <p className="font-display max-w-[36ch] text-[1.375rem] leading-[1.3] tracking-[-0.02em] sm:text-[1.625rem]">
            {t.services.startNext}
          </p>
          <div className="lg:justify-self-end">
            <Link to="/contact" className="btn btn-wrap btn-primary">
              {t.services.startNextCta}
              <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
