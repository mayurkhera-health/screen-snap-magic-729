import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--color-secondary)_0%,transparent_65%)] opacity-60 sm:-top-32 sm:h-[56rem] sm:w-[56rem]"
      />
      <div className="container-page section-y relative">
        <div className="relative inline-block">
          <div
            aria-hidden="true"
            className="absolute -inset-6 -z-10 rounded-3xl bg-[var(--color-secondary)]/40 sm:-inset-8"
          />
          {/* Sizing per spec S6. Weight stays 800 (.font-display) per S80 —
              the heavy editorial display type is the thing that makes this
              site not look like a template. */}
          <h1 className="ink-type font-display max-w-[18ch] text-[2.625rem] leading-[1.02] tracking-[-0.025em] sm:text-6xl md:text-7xl lg:text-[5.25rem] lg:leading-[0.98] lg:tracking-[-0.035em]">
            {t.hero.headline}
          </h1>
        </div>

        {/* Body sized up to 17-18px per S8; measure held near 60ch per S12. */}
        <p className="mt-6 max-w-[46rem] text-[1.0625rem] leading-[1.6] text-muted-foreground sm:mt-8 sm:text-[1.125rem]">
          {t.hero.subhead}
        </p>

        {/* S18: primary + secondary CTA. Full width on the narrowest screens so
            the tap targets are honest on a phone (S63), inline from 480px up. */}
        <div className="mt-8 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:gap-4">
          <Link to="/contact" className="btn btn-primary w-full min-[480px]:w-auto">
            {t.hero.ctaPrimary}
            <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
          </Link>
          <Link to="/case-studies" className="btn btn-secondary w-full min-[480px]:w-auto">
            {t.hero.ctaSecondary}
          </Link>
        </div>

        {/* S21 trust line. Every item names a capability the site actually
            documents — nothing here is a claim that cannot be substantiated. */}
        <p className="mt-6 max-w-[46rem] text-sm leading-relaxed text-subtle-foreground">
          {t.hero.trustLine}
        </p>
      </div>
    </section>
  );
}
