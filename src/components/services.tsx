import { useLanguage } from "@/lib/i18n";
import { SectionHeader } from "@/components/section-header";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex justify-center">
          <SectionHeader
            headingId="services-heading"
            eyebrow={t.services.eyebrow}
            heading={t.services.heading}
            sub={t.services.sub}
          />
        </div>
        <ul className="mt-12">
          {t.services.items.map((item, i) => (
            <li key={item.title} className="group border-t border-border py-6 last:border-b sm:py-8">
              {/* Three columns on desktop: number / title / description. The
                  description column starts at the same x on every row and reads
                  left-aligned, so the gap is a deliberate column of whitespace
                  rather than leftover space that widens with the viewport.
                  The title column cannot be narrowed further without wrapping
                  the longest title ("GIS & Geospatial"). */}
              <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 sm:grid-cols-[3rem_minmax(0,1.4fr)_minmax(0,1fr)] sm:gap-x-8">
                <span className="eyebrow text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl transition-colors group-hover:text-accent sm:text-4xl lg:text-5xl">
                  {item.title}
                </h3>
                <p className="col-start-2 max-w-prose text-sm leading-relaxed text-muted-foreground sm:col-start-3">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
