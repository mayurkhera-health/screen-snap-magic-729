import { useLanguage } from "@/lib/i18n";
import { SectionHeader } from "@/components/section-header";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-border">
      <div className="container-page section-y">
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
            <li
              key={item.title}
              className="group border-t border-border py-7 last:border-b sm:min-h-[8.25rem] sm:py-8"
            >
              <div className="grid grid-cols-[2.5rem_minmax(0,1fr)] items-baseline gap-x-4 gap-y-2 sm:grid-cols-[3rem_minmax(0,1.4fr)_minmax(0,1fr)] sm:gap-x-8">
                <span className="eyebrow text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* S26 sets 27-32px here. That is a deliberate step DOWN from the
                    previous 30/36/48 — the row reads as an index entry rather
                    than a headline, which is what makes seven of them scannable. */}
                <h3 className="font-display text-[1.625rem] leading-[1.1] tracking-[-0.02em] sm:text-[1.75rem] lg:text-[2rem]">
                  {item.title}
                </h3>
                <p className="col-start-2 max-w-[27.5rem] text-[0.9375rem] leading-[1.5] text-muted-foreground sm:col-start-3 sm:text-base">
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
