import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logoAsset from "@/assets/zedventures-logo.png.asset.json";

const NAV = [
  { to: "/services", key: "services" },
  { to: "/case-studies", key: "caseStudies" },
  { to: "/contact", key: "contact" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center">
          <img src={logoAsset.url} alt={t.a11y.logoAlt} className="h-10 w-auto sm:h-12" />
        </Link>

        {/* Desktop navigation — the three links do not fit beside the logo
            below ~640px, so they collapse into the sheet below. */}
        <nav className="hidden items-center gap-5 sm:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold text-foreground transition-colors hover:text-accent"
              activeProps={{ className: "text-sm font-semibold text-accent" }}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <LanguageToggle />
        </nav>

        {/* Mobile: language stays visible (it is a primary affordance on a
            bilingual site); the links move behind a menu button. */}
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={t.a11y.openMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:text-accent"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-background">
              <SheetTitle className="eyebrow text-accent">{t.a11y.menuTitle}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-6" aria-label="Main navigation">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-foreground transition-colors hover:text-accent"
                    activeProps={{ className: "font-display text-2xl text-accent" }}
                  >
                    {t.nav[item.key]}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
