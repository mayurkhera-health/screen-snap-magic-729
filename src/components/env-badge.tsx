import { IS_PRODUCTION, SITE_ENV } from "@/lib/site-env";

/**
 * A corner marker naming which copy of the site you are looking at.
 *
 * Renders nothing in production. Everywhere else it is deliberately hard to
 * miss: the whole point is that nobody ever has to squint at a URL to work out
 * whether they are about to demo the real site or a staging copy, or whether
 * the bug they are chasing is even on the machine they think it is.
 *
 * Bottom-left rather than bottom-right, which is where cookie banners, chat
 * widgets and scroll-to-top buttons usually sit. Not interactive and hidden
 * from assistive technology — it is a note to whoever is building the site,
 * not content.
 */
export function EnvBadge() {
  if (IS_PRODUCTION) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-3 left-3 z-[100] select-none rounded-full border border-[#F0E4B8] bg-[#FDF6E3] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#6B5A1E] shadow-sm"
    >
      {SITE_ENV}
    </div>
  );
}
