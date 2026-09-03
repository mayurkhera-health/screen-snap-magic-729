import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { DraftBanner } from "@/components/draft-banner";
import {
  DRAFT_SERVICE_PAGES,
  HOW_WE_WORK,
  SERVICE_PAGES,
  SERVICE_SLUGS,
  isServiceSlug,
  type ServiceSlug,
} from "@/lib/service-pages";

const SITE = "https://screen-snap-magic-729.lovable.app";

export const Route = createFileRoute("/services_/$slug")({
  loader: ({ params }) => {
    if (!isServiceSlug(params.slug)) throw notFound();
    return { slug: params.slug as ServiceSlug };
  },
  head: ({ params }) => {
    const slug = params.slug;
    if (!isServiceSlug(slug)) return {};
    // Metadata is generated from the English content so each service page has
    // its own title and description (S57) rather than inheriting the site's.
    const s = SERVICE_PAGES.en[slug];
    const url = `${SITE}/services/${slug}`;
    return {
      meta: [
        { title: s.seoTitle },
        { name: "description", content: s.seoDescription },
        // While the copy is sample text these pages must not be indexed.
        ...(DRAFT_SERVICE_PAGES ? [{ name: "robots", content: "noindex, nofollow" }] : []),
        { property: "og:title", content: s.seoTitle },
        { property: "og:description", content: s.seoDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-16 sm:pt-20">
        {DRAFT_SERVICE_PAGES && <DraftBanner />}
        <ServiceDetailBody />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

function ServiceDetailBody() {
  const { slug } = Route.useLoaderData();
  const { t, lang } = useLanguage();
  const s = SERVICE_PAGES[lang][slug];

  // A service that carries `situation` uses the five-question layout. The rest
  // stay on the older seven-section template until they are converted, so both
  // can be compared on the live site.
  if (s.situation) return <FiveQuestionBody />;

  return <LegacyBody />;
}

/**
 * Five blocks, each answering one question a buyer asks, in the order they ask
 * it. See the note at the top of src/lib/service-pages.ts.
 */
function FiveQuestionBody() {
  const { slug } = Route.useLoaderData();
  const { t, lang } = useLanguage();
  const s = SERVICE_PAGES[lang][slug];
  const study = s.proof ? t.caseStudies.items[s.proof.index - 1] : undefined;

  return (
    <>
      {/* 1 — "Am I in the right place?" Two elements, nothing else. */}
      <section className="border-b border-border">
        <div className="container-page section-y">
          <p className="eyebrow text-accent">{t.services.eyebrow}</p>
          <h1 className="font-display mt-3 max-w-[16ch] text-[2.5rem] leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {s.name}
          </h1>
          <p className="font-display mt-6 max-w-[26ch] text-[1.375rem] leading-[1.25] tracking-[-0.02em] text-accent sm:text-[1.75rem]">
            {s.outcome}
          </p>
        </div>
      </section>

      {/* 2 — "Do they understand my situation?" Their problem, in our words.
             bg-surface, not bg-secondary: brand red at eyebrow size measures
             4.55:1 on #fbfbfa and 4.39:1 on #f7f7f5. The eyebrow is red, so the
             lighter ground is the only one that clears AA. */}
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

      {/* 3 — "Can they actually do it?" Capabilities, with the platforms that
             qualify them sitting alongside rather than in a section of their own. */}
      <section className="border-b border-border">
        <div className="container-page section-y">
          <SectionHeader
            align="left"
            eyebrow={t.services.buildEyebrow}
            heading={t.services.buildHeading}
          />
          <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {s.capabilities.map((c) => (
              <li key={c.title} className="border-t border-border pt-6">
                <h3 className="font-display text-[1.375rem] leading-[1.15] tracking-[-0.02em] sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-[34rem] text-base leading-[1.55] text-muted-foreground">
                  {c.desc}
                </p>
              </li>
            ))}
          </ul>
          <ul className="mt-10 flex flex-wrap gap-2.5 border-t border-border pt-8">
            {s.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border-strong px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — "Have they done it before?" Renders only when there is a real case
             study. No case study, no block — never filler. */}
      {study && s.proof && (
        <section className="border-b border-border">
          <div className="container-page section-y">
            <SectionHeader
              align="left"
              eyebrow={t.services.proofEyebrow}
              heading={t.services.proofHeading}
            />
            <Link
              to="/case-studies"
              hash={`case-${s.proof.index}`}
              className="group mt-8 flex max-w-[52rem] flex-col gap-4 rounded-xl border border-border border-l-[3px] border-l-primary bg-card p-7 transition-colors hover:bg-secondary"
              style={{ transitionDuration: "var(--dur)", transitionTimingFunction: "var(--ease)" }}
            >
              <p className="font-display text-[1.375rem] leading-[1.2] tracking-[-0.02em] sm:text-2xl">
                {study.title}
              </p>
              <p className="font-display text-lg leading-[1.25] tracking-[-0.015em] text-accent">
                {s.proof.headline}
              </p>
              <p className="text-sm leading-[1.55] text-muted-foreground">
                {study.client} · {study.stack.join(" · ")}
              </p>
              <span className="flex items-center gap-1.5 text-sm font-bold text-accent">
                {t.services.proofCta}
                <ArrowUpRight className="arrow-shift h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* 5 — "What happens if I get in touch?" The one line that turns a button
             people hover over into one they press. */}
      <section className="section-dark">
        <div className="container-page section-y split">
          <SectionHeader
            align="left"
            eyebrow={t.contact.eyebrow}
            heading={t.services.ctaHeading}
            sub={t.services.startNext}
          />
          <div className="lg:justify-self-end lg:pt-2">
            <Link to="/contact" className="btn btn-primary">
              {t.services.pageCta}
              <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/** The original seven-section template. Still used by the six unconverted services. */
function LegacyBody() {
  const { slug } = Route.useLoaderData();
  const { t, lang } = useLanguage();
  const s = SERVICE_PAGES[lang][slug];
  const steps = HOW_WE_WORK[lang];
  const others = SERVICE_SLUGS.filter((x) => x !== slug).slice(0, 3);

  return (
    <>
      {/* 1 — Service hero */}
      <section className="border-b border-border">
        <div className="container-page section-y">
          <p className="eyebrow text-accent">{t.services.eyebrow}</p>
          <h1 className="font-display mt-3 max-w-[16ch] text-[2.5rem] leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            {s.name}
          </h1>
          <p className="font-display mt-6 max-w-[26ch] text-[1.375rem] leading-[1.25] tracking-[-0.02em] text-accent sm:text-[1.75rem]">
            {s.outcome}
          </p>
          <p className="mt-6 max-w-[46rem] text-[1.0625rem] leading-[1.6] text-muted-foreground sm:text-[1.125rem]">
            {s.intro}
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:gap-4">
            <Link to="/contact" className="btn btn-primary w-full min-[480px]:w-auto">
              {t.services.pageCta}
              <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/case-studies" className="btn btn-secondary w-full min-[480px]:w-auto">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* 2 — Problems we solve */}
      <section className="border-b border-border">
        <div className="container-page section-y">
          <SectionHeader align="left" eyebrow={t.services.problemsEyebrow} heading={t.services.problemsHeading} />
          <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {s.problems.map((p, i) => (
              <li key={p} className="bg-card p-7">
                <p className="text-base leading-[1.55] text-foreground">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3 — Capabilities */}
      <section className="section-dark border-b border-border">
        <div className="container-page section-y">
          <SectionHeader align="left" eyebrow={t.services.capsEyebrow} heading={t.services.capsHeading} />
          <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {s.capabilities.map((c) => (
              <li key={c.title} className="border-t border-border pt-6">
                <h3 className="font-display text-[1.375rem] leading-[1.15] tracking-[-0.02em] sm:text-2xl">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-[34rem] text-base leading-[1.55] text-muted-foreground">{c.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4 — How we work */}
      <section className="border-b border-border">
        <div className="container-page section-y">
          <SectionHeader align="left" eyebrow={t.services.howEyebrow} heading={t.services.howHeading} />
          <ol className="mt-10">
            {steps.map((st, i) => (
              <li key={st.step} className="border-t border-border py-6 last:border-b">
                <div className="grid grid-cols-1 items-baseline gap-x-4 gap-y-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] sm:gap-x-8">
                  <h3 className="font-display text-[1.375rem] leading-[1.15] tracking-[-0.02em] sm:text-2xl">
                    {st.step}
                  </h3>
                  <p className="max-w-[34rem] text-base leading-[1.55] text-muted-foreground">
                    {st.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5 — Technologies */}
      <section className="border-b border-border">
        <div className="container-page section-y split">
          <SectionHeader align="left" eyebrow={t.services.techEyebrow} heading={t.services.techHeading} />
          <ul className="flex flex-wrap gap-2.5 lg:pt-2">
            {s.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border-strong px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6 — Related services (S59 internal linking) */}
      <section className="border-b border-border">
        <div className="container-page section-y">
          <SectionHeader align="left" eyebrow={t.services.relatedEyebrow} heading={t.services.relatedHeading} />
          <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {others.map((o) => (
              <li key={o}>
                <Link
                  to="/services/$slug"
                  params={{ slug: o }}
                  className="group flex h-full flex-col justify-between gap-6 bg-card p-7 transition-colors hover:bg-muted"
                >
                  <h3 className="font-display text-xl leading-[1.15] tracking-[-0.02em]">
                    {SERVICE_PAGES[lang][o].name}
                  </h3>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-accent">
                    {t.services.viewService}
                    <ArrowUpRight className="arrow-shift h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 — CTA */}
      <section className="section-dark">
        <div className="container-page section-y split">
          <SectionHeader align="left" eyebrow={t.contact.eyebrow} heading={t.services.ctaHeading} sub={t.services.ctaSub} />
          <div className="lg:justify-self-end lg:pt-2">
            <Link to="/contact" className="btn btn-primary">
              {t.services.pageCta}
              <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
