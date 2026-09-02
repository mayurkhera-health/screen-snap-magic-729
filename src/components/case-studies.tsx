import { useLanguage } from "@/lib/i18n";

export function CaseStudies() {
  const { t } = useLanguage();

  return (
    <section aria-label={t.caseStudies.eyebrow} className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <p className="font-display text-xl leading-tight tracking-tight text-accent sm:text-2xl">
          {t.caseStudies.eyebrow}
        </p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl leading-tight sm:text-5xl">
          {t.caseStudies.heading}
        </h2>
        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
          {t.caseStudies.items.map((cs) => (
            <article key={cs.title} className="bg-background p-8 sm:p-10">
              <p className="eyebrow text-muted-foreground">{cs.tag}</p>
              <h3 className="font-display mt-4 text-xl leading-snug sm:text-2xl">
                {cs.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {cs.desc}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {cs.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
