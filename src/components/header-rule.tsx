import { useEffect, useState } from "react";

/**
 * The rule under the header.
 *
 * Always visible, including at the top of the page. An earlier version faded it
 * in only once you scrolled, which left the header looking unfinished at rest —
 * and at rest is the state most visitors see first.
 *
 * A flat 1px grey border is what every site has. Three things make this one read
 * as designed rather than defaulted:
 *
 *   1. The hairline is a gradient, strongest under the content column and
 *      falling away at both edges, so it belongs to the page instead of cutting
 *      the browser window in half.
 *   2. A short brand-red segment sits at the left edge of the content column,
 *      aligned with the logo above it. That is the detail that makes the rule
 *      look like part of a design system rather than a default border.
 *   3. Once the page moves, red fills along the rule to show how far down you
 *      are. On the long pages — service detail, postings, the privacy policy —
 *      that is genuinely useful, and it costs no extra height.
 *
 * VARIANT switches the treatment for comparison. Settle on one and delete the
 * branches you are not using.
 */
const VARIANT: "accent" | "shadow" | "plain" = "accent";

/** Set false to keep the rule static and drop the reading-position fill. */
const SHOW_PROGRESS = true;

export function HeaderRule({ scrolled }: { scrolled: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!SHOW_PROGRESS) return;
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
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]">
      {/* Base hairline — always on. Gradient rather than flat, so it fades out
          toward the window edges instead of running wall to wall. */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-border) 8%, var(--color-border-strong) 50%, var(--color-border) 92%, transparent)",
        }}
      />

      {/* A soft drop below the line, deepening once the page moves, so the
          header separates from content scrolling under it. */}
      {VARIANT === "shadow" && (
        <div
          className="absolute inset-x-0 top-full h-5 transition-opacity duration-300"
          style={{
            opacity: scrolled ? 1 : 0.45,
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 8%, transparent), transparent)",
            transitionTimingFunction: "var(--ease)",
          }}
        />
      )}

      {/* Brand mark on the rule, aligned to the content column — sitting under
          the logo rather than floating at the window edge. */}
      {VARIANT === "accent" && (
        <div className="container-page absolute inset-x-0 bottom-0">
          <div
            className="h-[2px] w-14"
            style={{
              background:
                "linear-gradient(to right, var(--color-primary), color-mix(in oklab, var(--color-primary) 30%, transparent))",
            }}
          />
        </div>
      )}

      {/* Reading position. Sits over the hairline, 2px so it reads clearly, with
          a soft leading edge. Under prefers-reduced-motion the width still
          updates — position is information — but without the easing. */}
      {SHOW_PROGRESS && (
        <div
          className="absolute bottom-0 left-0 h-[2px] transition-[width] duration-150 motion-reduce:transition-none"
          style={{
            width: `${progress * 100}%`,
            background:
              "linear-gradient(to right, var(--color-primary), var(--color-primary) 85%, color-mix(in oklab, var(--color-primary) 55%, transparent))",
            transitionTimingFunction: "var(--ease)",
          }}
        />
      )}
    </div>
  );
}
