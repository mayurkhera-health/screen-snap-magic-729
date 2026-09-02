import { useLanguage } from "@/lib/i18n";
import { Download } from "lucide-react";

const DECK_URL = "/zedventures-capability-deck.pdf";

export function DeckStrip() {
  const { t } = useLanguage();

  return (
    <section aria-label={t.deck.eyebrow} className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
        <div>
          <p className="eyebrow text-primary-foreground/60">{t.deck.eyebrow}</p>
          <p className="mt-4 max-w-lg text-xl font-bold leading-snug sm:text-2xl">
            {t.deck.line}
          </p>
        </div>
        <a
          href={DECK_URL}
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-full border border-primary-foreground px-7 py-3.5 text-sm font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          {t.deck.cta}
        </a>
      </div>
    </section>
  );
}
