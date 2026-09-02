import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";
import logoAsset from "@/assets/zedventures-logo.png.asset.json";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center">
          <img
            src={logoAsset.url}
            alt={t.a11y.logoAlt}
            className="h-10 w-auto sm:h-12"
          />
        </Link>
        <nav className="flex items-center gap-5" aria-label="Main navigation">
          <Link
            to="/services"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-sm font-semibold text-primary" }}
          >
            {t.nav.services}
          </Link>
          <Link
            to="/case-studies"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-sm font-semibold text-primary" }}
          >
            {t.nav.caseStudies}
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-foreground transition-colors hover:text-primary"
            activeProps={{ className: "text-sm font-semibold text-primary" }}
          >
            {t.nav.contact}
          </Link>
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
