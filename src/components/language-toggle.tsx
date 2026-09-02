import { useLanguage, type Lang } from "@/lib/i18n";

export function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, setLang, t } = useLanguage();

  const option = (value: Lang, label: string) => (
    <button
      key={value}
      type="button"
      aria-pressed={lang === value}
      onClick={() => setLang(value)}
      className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide transition-colors ${
        lang === value
          ? dark
            ? "bg-primary-foreground text-primary"
            : "bg-primary text-primary-foreground"
          : dark
            ? "text-primary-foreground/70 hover:text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      role="group"
      aria-label={t.a11y.switchTo}
      className={`flex items-center gap-0.5 rounded-full border p-0.5 ${
        dark ? "border-primary-foreground/30" : "border-border"
      }`}
    >
      {option("en", "EN")}
      {option("fr", "FR")}
    </div>
  );
}
