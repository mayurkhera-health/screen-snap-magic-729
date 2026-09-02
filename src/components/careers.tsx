import { useLanguage } from "@/lib/i18n";
import { SectionHeader } from "@/components/section-header";
import { ArrowUpRight } from "lucide-react";

export function Careers() {
  const { t } = useLanguage();

  return (
    <section id="careers" className="section-dark border-b border-border">
      <div className="container-page section-y">
        <div className="flex justify-center">
          <SectionHeader eyebrow={t.careers.eyebrow} heading={t.careers.line} />
        </div>
        <a
          href="#"
          className="mx-auto mt-8 flex w-fit items-center gap-1.5 text-sm font-bold text-accent underline-offset-4 hover:underline"
        >
          {t.careers.cta}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
