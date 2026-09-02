import { useLanguage } from "@/lib/i18n";
import { SectionHeader } from "@/components/section-header";

/**
 * The statements a US employer's careers page is expected to carry: equal
 * opportunity, accommodation, work authorization, screening, applicant privacy,
 * recruitment fraud and unsolicited agency resumes.
 *
 * Rendered on the careers index and on every posting detail page, so a candidate
 * who arrives on a role link from a recruiter sees them without having to find
 * the index first.
 *
 * Deliberately plain: these are statements of fact and obligation, not selling
 * points, so they get no cards, no icons and no accent colour. Several still
 * contain bracketed placeholders — search for "[" in i18n.tsx before launch.
 */
export function LegalBlocks() {
  const { t } = useLanguage();
  const c = t.careersPage;
  const L = c.legal;

  const blocks = [
    { heading: L.eeoHeading, body: L.eeo },
    { heading: L.accommodationHeading, body: L.accommodation },
    { heading: L.authHeading, body: L.auth },
    { heading: L.screeningHeading, body: L.screening },
    { heading: L.privacyHeading, body: L.privacy },
    { heading: L.fraudHeading, body: L.fraud },
    { heading: L.agencyHeading, body: L.agency },
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
