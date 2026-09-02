import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="pt-8 sm:pt-12">
      <div className="mx-auto max-w-6xl px-5 pt-8 pb-16 sm:px-8 sm:pt-12 sm:pb-24">
        <p className="eyebrow text-accent">{t.hero.eyebrow}</p>
        <h1 className="font-display mt-8 max-w-5xl text-5xl leading-[1.02] sm:mt-10 sm:text-7xl lg:text-8xl">
          {t.hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
          {t.hero.subhead}
        </p>
      </div>
    </section>
  );
}
