import { useLanguage } from "@/lib/i18n";

export function MobileCtaBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-sm sm:hidden">
      <a
        href="#contact"
        className="block rounded-full bg-primary py-3 text-center text-sm font-bold text-primary-foreground"
      >
        {t.nav.talk}
      </a>
    </div>
  );
}
