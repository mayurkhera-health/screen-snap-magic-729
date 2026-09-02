import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="section-dark border-t border-border pb-24 sm:pb-0">
      <div className="container-page flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {/* The logo is never recoloured and only sits on a light ground,
              so it keeps its own white chip inside the dark footer. */}
          <span className="inline-flex rounded-md bg-white px-3 py-2">
            <img
              src="/zedventures-logo.png"
              alt={t.a11y.logoAlt}
              width={798}
              height={208}
              className="h-5 w-auto"
            />
          </span>
          <p className="mt-3 text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:items-end">
          <LanguageToggle dark />
          <p className="text-xs text-muted-foreground">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
