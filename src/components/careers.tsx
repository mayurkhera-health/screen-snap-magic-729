import { useLanguage } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";

export function Careers() {
  const { t } = useLanguage();

  return (
    <section id="careers" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-display text-2xl leading-tight tracking-tight text-accent sm:text-3xl">
          {t.careers.eyebrow}
        </p>
        <p className="font-display mt-3 max-w-2xl text-3xl leading-tight sm:text-5xl">
          {t.careers.line}
        </p>
        <a
          href="#"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold text-primary underline-offset-4 hover:underline"
        >
          {t.careers.cta}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
