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

        {/* One visual weight class per action: a single filled button, and the
            secondary action as a text link. Two equal-weight buttons make the
            visitor choose between them instead of following the primary path.
            The link keeps a 48px tap target on phones. */}
        <div className="mt-8 flex flex-col items-start gap-4 min-[480px]:flex-row min-[480px]:items-center min-[480px]:gap-7">
          <Link to="/contact" className="btn btn-primary w-full min-[480px]:w-auto">
            {t.hero.ctaPrimary}
            <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex h-12 items-center gap-1.5 text-[0.9375rem] font-semibold text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            style={{ transitionDuration: "var(--dur)", transitionTimingFunction: "var(--ease)" }}
          >
            {t.hero.ctaSecondary}
            <ArrowRight className="arrow-shift h-4 w-4" aria-hidden="true" />
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
