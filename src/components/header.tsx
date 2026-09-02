import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";
import logoAsset from "@/assets/zedventures-logo.png.asset.json";

const DECK_URL = "/zedventures-capability-deck.pdf";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center">
          <img
            src={logoAsset.url}
            alt={t.a11y.logoAlt}
            className="h-6 w-auto sm:h-7"
          />
        </a>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <a
            href={DECK_URL}
            download
            className="hidden rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground transition-colors hover:bg-primary/85 sm:inline-block"
          >
            {t.nav.deck}
          </a>
        </div>
      </div>
    </header>
  );
}
