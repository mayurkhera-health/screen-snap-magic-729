/**
 * Hero mark — a geometric stand-in for a photograph.
 *
 * Four stacked planes read as layers of a platform seen edge-on, which is what
 * the company actually builds. Deliberately not the orange-circles-and-stock-
 * photo composition it replaces: this is drawn from the site's own tokens, so
 * it inherits the brand red and works on both themes without a second asset.
 *
 * Decorative, so it is hidden from assistive technology — the headline beside
 * it already carries the meaning.
 */
export function HeroMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="presentation"
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Spine connecting the layers */}
      <line
        x1="200"
        y1="60"
        x2="200"
        y2="344"
        stroke="var(--color-foreground)"
        strokeOpacity="0.22"
        strokeWidth="1"
      />

      {/* Layer 4 — deepest, faintest */}
      <path
        d="M200 302 L356 344 L200 386 L44 344 Z"
        stroke="var(--color-foreground)"
        strokeOpacity="0.26"
        strokeWidth="1.25"
      />

      {/* Layer 3 */}
      <path
        d="M200 222 L356 264 L200 306 L44 264 Z"
        stroke="var(--color-foreground)"
        strokeOpacity="0.40"
        strokeWidth="1.25"
      />

      {/* Layer 2 — the one carrying load */}
      <path
        d="M200 142 L356 184 L200 226 L44 184 Z"
        fill="var(--color-primary)"
        fillOpacity="0.12"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />

      {/* Layer 1 — surface */}
      <path
        d="M200 62 L356 104 L200 146 L44 104 Z"
        stroke="var(--color-foreground)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />

      {/* Nodes on the load-bearing layer */}
      <circle cx="356" cy="184" r="5" fill="var(--color-primary)" />
      <circle cx="44" cy="184" r="5" fill="var(--color-primary)" />
      <circle cx="200" cy="62" r="4" fill="var(--color-foreground)" />
      <circle cx="200" cy="386" r="3" fill="var(--color-foreground)" fillOpacity="0.3" />
    </svg>
  );
}
