import { useLanguage } from "@/lib/i18n";
import { SectionHeader } from "@/components/section-header";
import { ArrowUpRight } from "lucide-react";

export function Careers() {
  const { t } = useLanguage();

  return (
    <section id="careers" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex justify-center">
          <SectionHeader eyebrow={t.careers.eyebrow} heading={t.careers.line} />
        </div>
        <a
          href="#"
          className="mx-auto mt-8 flex w-fit items-center gap-1.5 text-sm font-bold text-primary underline-offset-4 hover:underline"
        >
          {t.careers.cta}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
