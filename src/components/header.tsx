import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import logoAsset from "@/assets/zedventures-logo.png.asset.json";

const NAV = [
  { to: "/services", key: "services" },
  { to: "/case-studies", key: "caseStudies" },
  { to: "/about", key: "about" },
  { to: "/careers", key: "careers" },
] as const;

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // S16: the hairline and blur only appear once the page has moved, so the
  // header sits flush against the hero at rest instead of drawing a line
  // across the top of the design.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200 ${
        scrolled
          ? "border-b border-border bg-background/92 backdrop-blur-[16px]"
          : "border-b border-transparent bg-background"
      }`}
      style={{ transitionTimingFunction: "var(--ease)" }}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logoAsset.url}
            alt={t.a11y.logoAlt}
            className={`w-auto transition-[height] duration-200 ${scrolled ? "h-9 sm:h-10" : "h-10 sm:h-12"}`}
            style={{ transitionTimingFunction: "var(--ease)" }}
          />
        </Link>

        {/* Desktop navigation — collapses into the sheet below ~640px, where the
            logo plus links plus toggle no longer fit on one line. */}
        <nav className="hidden items-center gap-7 sm:flex lg:gap-8" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.9375rem] font-medium text-foreground transition-colors hover:text-accent"
              activeProps={{ className: "text-[0.9375rem] font-semibold text-accent" }}
              style={{ transitionDuration: "var(--dur)", transitionTimingFunction: "var(--ease)" }}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <LanguageToggle />
          {/* S15: Contact becomes a modest CTA. Deliberately shorter than the
              48px hero buttons so it reads as navigation, not a hero action. */}
          <Link to="/contact" className="btn btn-primary h-10 px-[18px] text-sm">
            {t.nav.talk}
            <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
          </Link>
        </nav>

        {/* Mobile: language stays visible (a primary affordance on a bilingual
            site); the links move behind the menu button. */}
        <div className="flex items-center gap-2 sm:hidden">
          <LanguageToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label={t.a11y.openMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:text-accent"
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
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary mt-2 w-full"
                >
                  {t.nav.talk}
                  <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
