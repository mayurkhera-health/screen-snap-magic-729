import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";
import { DraftBanner } from "@/components/draft-banner";
import { LegalBlocks } from "@/components/careers-legal";
import { DRAFT_CAREERS, OPEN_POSTINGS, formatPay } from "@/lib/careers";

const SITE = "https://screen-snap-magic-729.lovable.app";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — ZEDventures" },
      {
        name: "description",
        content:
          "Open roles at ZEDventures. Engineering, SAP, analytics and systems analysis positions in San Jose, California.",
      },
      ...(DRAFT_CAREERS ? [{ name: "robots", content: "noindex, nofollow" }] : []),
      { property: "og:title", content: "Careers — ZEDventures" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE}/careers` },
    ],
    links: [{ rel: "canonical", href: `${SITE}/careers` }],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-16 sm:pt-20">
        {DRAFT_CAREERS && (
          <DraftBanner note="These postings were read off the current live site, not transcribed from the filings, and the pay ranges are placeholders. This page is noindex until both are fixed." />
        )}
        <CareersBody />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

function CareersBody() {
  const { t } = useLanguage();
  const c = t.careersPage;

  return (
    <>
      <section className="border-b border-border">
        <div className="container-page section-y">
          <SectionHeader align="left" eyebrow={c.eyebrow} heading={c.heading} sub={c.sub} />
        </div>
      </section>

      <section className="border-b border-border">
        <div className="container-page section-y">
          {OPEN_POSTINGS.length === 0 ? (
            <p className="max-w-[46rem] text-[1.0625rem] leading-[1.6] text-muted-foreground">
              {c.noRoles}
            </p>
          ) : (
            <ul>
              {OPEN_POSTINGS.map((p) => {
                const pay = formatPay(p);
                return (
                  <li key={p.slug} className="border-t border-border first:border-t-0 last:border-b">
                    <Link
                      to="/careers/$slug"
                      params={{ slug: p.slug }}
                      className="group grid gap-x-8 gap-y-2 py-7 transition-colors hover:bg-secondary sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_auto] sm:items-baseline"
                    >
                      <div>
                        <h2 className="font-display text-[1.375rem] leading-[1.15] tracking-[-0.02em] sm:text-2xl">
                          {p.title}
                        </h2>
                        {p.jobCode && (
                          <p className="mt-1.5 text-[0.8125rem] text-subtle-foreground">
                            {c.jobCodeLabel} {p.jobCode}
                          </p>
                        )}
                      </div>
                      <div className="text-sm leading-[1.5] text-muted-foreground">
                        <p>{p.locations[0]}</p>
                        <p className="mt-1">
                          {p.employmentType} · {pay ?? c.payTbd}
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm font-bold text-accent">
                        {c.viewRole}
                        <ArrowUpRight className="arrow-shift h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <LegalBlocks />
    </>
  );
}
