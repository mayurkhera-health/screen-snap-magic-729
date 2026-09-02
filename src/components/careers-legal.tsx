import { useLanguage } from "@/lib/i18n";
import { SectionHeader } from "@/components/section-header";

/**
 * The statements the careers page carries alongside every posting: benefits,
 * equal opportunity, work authorization, pre-employment checks and how an
 * application is handled.
 *
 * Rendered on the careers index and on every posting detail page, so a candidate
 * who arrives on a role link from a recruiter sees them without having to find
 * the index first.
 *
 * Deliberately plain: these are statements of fact and obligation, not selling
 * points, so they get no cards, no icons and no accent colour. Several still
 * contain bracketed placeholders — search for "[" in i18n.tsx before launch.
 *
 * Removed at the client's request, not by oversight: reasonable accommodation,
 * recruitment fraud, and unsolicited agency resumes.
 */
export function LegalBlocks() {
  const { t } = useLanguage();
  const c = t.careersPage;
  const L = c.legal;

  const blocks = [
    { heading: L.benefitsHeading, body: L.benefits },
    { heading: L.eeoHeading, body: L.eeo },
    { heading: L.authHeading, body: L.auth },
    { heading: L.screeningHeading, body: L.screening },
    { heading: L.privacyHeading, body: L.privacy },
  ];

  return (
    <section className="border-b border-border bg-secondary" aria-labelledby="careers-legal">
      <div className="container-page section-y">
        <SectionHeader
          align="left"
          eyebrow={c.eyebrow}
          heading={c.legalHeading}
          headingId="careers-legal"
        />
        <dl className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.heading} className="border-t border-border pt-5">
              <dt className="text-base font-bold leading-[1.3] text-foreground">{b.heading}</dt>
              <dd className="mt-2.5 max-w-[36rem] text-[0.9375rem] leading-[1.6] text-muted-foreground">
                {b.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
