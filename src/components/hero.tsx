import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="pt-20">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
        <p className="eyebrow text-accent">{t.hero.eyebrow}</p>
        <hr className="mt-6 border-border" />
        <h1 className="font-display mt-12 max-w-5xl text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
          {t.hero.headline}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.subhead}
        </p>
      </div>
    </section>
  );
}
