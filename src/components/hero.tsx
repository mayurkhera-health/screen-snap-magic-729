import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden pt-14 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-secondary)_0%,transparent_65%)] opacity-60 sm:-top-32 sm:h-[56rem] sm:w-[56rem]"
      />
      <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-14 sm:px-8 sm:pt-14 sm:pb-20">
        <div className="relative inline-block">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-3xl bg-[var(--color-secondary)]/40 sm:-inset-8"
          />
          <h1 className="font-display max-w-5xl text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
            {t.hero.headline}
          </h1>
        </div>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
          {t.hero.subhead}
        </p>
      </div>
    </section>
  );
}
