import { useEffect, useState } from "react";

/**
 * The rule under the header.
 *
 * A plain 1px border is the default every site has. This one earns its place by
 * carrying information: the brand-red segment is how far down the page you are.
 * On a long page — a service page, a posting, the privacy policy — that is
 * genuinely useful, and it costs no extra height.
 *
 * Three behaviours in one element:
 *
 *   1. At the very top of the page there is no rule at all. The header sits
 *      flush against the hero, which is what the design already did.
 *   2. Once the page moves, a hairline fades in. It is a gradient rather than a
 *      flat line: strongest under the content column, falling away at both
 *      edges, so it reads as part of the page rather than a band drawn across
 *      the browser.
 *   3. Over that hairline, a red fill tracks reading position.
 *
 * VARIANT is a temporary switch for comparing treatments side by side. Settle on
 * one and delete the others.
 */
const VARIANT: "progress" | "accent-tab" | "glow" = "progress";

export function HeaderRule({ scrolled }: { scrolled: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (VARIANT !== "progress") return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]"
    >
      {/* Hairline. Gradient, not flat: it fades out toward both edges so the
          rule belongs to the content column rather than cutting the viewport
          in half. Opacity, not display, so it eases in with the header. */}
      <div
        className="absolute inset-x-0 bottom-0 h-px transition-opacity duration-300"
        style={{
          opacity: scrolled ? 1 : 0,
          background:
            "linear-gradient(to right, transparent, var(--color-border-strong) 12%, var(--color-border-strong) 88%, transparent)",
          transitionTimingFunction: "var(--ease)",
        }}
      />

      {VARIANT === "progress" && (
        <>
          {/* Reading position. 2px so it sits proud of the hairline, with a
              soft leading edge so it does not end in a hard chop. Under
              prefers-reduced-motion the width still changes — it is position,
              not decoration — but without the easing. */}
          <div
            className="absolute bottom-0 left-0 h-[2px] transition-[width,opacity] duration-150 motion-reduce:transition-none"
            style={{
              width: `${progress * 100}%`,
              opacity: scrolled ? 1 : 0,
              background:
                "linear-gradient(to right, var(--color-primary), var(--color-primary) 85%, color-mix(in oklab, var(--color-primary) 55%, transparent))",
              transitionTimingFunction: "var(--ease)",
            }}
          />
        </>
      )}

      {VARIANT === "accent-tab" && (
        <div
          className="container-page absolute inset-x-0 bottom-0 transition-opacity duration-300"
          style={{ opacity: scrolled ? 1 : 0, transitionTimingFunction: "var(--ease)" }}
        >
          <div className="h-[2px] w-16 bg-primary" />
        </div>
      )}

      {VARIANT === "glow" && (
        <div
          className="absolute inset-x-0 bottom-0 h-6 transition-opacity duration-300"
          style={{
            opacity: scrolled ? 1 : 0,
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 7%, transparent), transparent)",
            transitionTimingFunction: "var(--ease)",
          }}
        />
      )}
    </div>
  );
}
