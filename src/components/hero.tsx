import { useLanguage } from "@/lib/i18n";

const DECK_URL = "/zedventures-capability-deck.pdf";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="pt-16">
      <div className="mx-auto max-w-6xl px-5 pt-24 pb-20 sm:px-8 sm:pt-36 sm:pb-28">
        <p className="eyebrow text-accent">{t.hero.eyebrow}</p>
        <hr className="mt-6 border-border" />
        <h1 className="font-display mt-12 max-w-5xl text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
          {t.hero.headline}
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.subhead}
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href={DECK_URL}
            download
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            {t.hero.deckCta}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-primary px-7 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-primary/5"
          >
            {t.hero.consultCta}
          </a>
        </div>
      </div>
    </section>
  );
}
