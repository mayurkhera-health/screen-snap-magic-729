import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";
import logoAsset from "@/assets/zedventures-logo.png.asset.json";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card pb-24 sm:pb-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <img src={logoAsset.url} alt={t.a11y.logoAlt} className="h-5 w-auto" />
          <p className="mt-3 text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <LanguageToggle />
          <p className="text-xs text-muted-foreground">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
