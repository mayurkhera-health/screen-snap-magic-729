import { useLanguage } from "@/lib/i18n";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <p className="font-display text-2xl leading-tight tracking-tight text-accent sm:text-3xl">
          {t.services.eyebrow}
        </p>
        <h2 id="services-heading" className="sr-only">
          {t.services.eyebrow}
        </h2>
        <ul className="mt-8">
          {t.services.items.map((item, i) => (
            <li key={item.title} className="group border-t border-border py-6 last:border-b sm:py-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-10">
                <span className="eyebrow text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl transition-colors group-hover:text-primary sm:text-4xl lg:text-5xl">
                  {item.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:ml-auto sm:text-right">
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
