/**
 * Which copy of the site is this?
 *
 * ---------------------------------------------------------------------------
 * THREE ENVIRONMENTS, ONE CODEBASE
 *
 *   local        your laptop, `npm run dev`. Break things freely.
 *   staging      a deployed copy that matches production but nobody real visits.
 *   production   the site customers see.
 *
 * Work flows one way: local -> staging -> production. The point is that a
 * mistake is found by someone who is not a customer.
 *
 * ---------------------------------------------------------------------------
 * HOW IT IS SET
 *
 * VITE_SITE_ENV is baked in at BUILD time, not read at runtime, because the
 * value has to reach the browser bundle as well as the server. A container
 * built for staging is a staging container for good — you cannot flip it with a
 * Fly secret, and that is deliberate: an image cannot quietly become production
 * because someone changed an environment variable.
 *
 *   local        unset (the default below)
 *   staging      docker build --build-arg VITE_SITE_ENV=staging
 *   production   docker build --build-arg VITE_SITE_ENV=production
 *
 * fly.staging.toml and fly.production.toml each pass the right one.
 *
 * ---------------------------------------------------------------------------
 * WHAT DEPENDS ON IT
 *
 *   - Everything that is not production emits <meta robots="noindex,nofollow">,
 *     so a staging copy can never turn up in a search result competing with the
 *     real site.
 *   - Everything that is not production shows a badge in the corner, so nobody
 *     has to read the URL to know which copy they are looking at.
 *
 * Both are deliberately keyed on "is production" rather than "is staging".
 * A typo in the build arg therefore fails safe: an unrecognised value is
 * treated as not-production, which means noindex and a visible badge. The
 * failure mode is an ugly production site, not an indexed staging site.
 */

export type SiteEnv = "local" | "staging" | "production";

const raw = import.meta.env["VITE_SITE_ENV"];

export const SITE_ENV: SiteEnv =
  raw === "production" ? "production" : raw === "staging" ? "staging" : "local";

/** The only check that should gate behaviour. See the note above about failing safe. */
export const IS_PRODUCTION = SITE_ENV === "production";
