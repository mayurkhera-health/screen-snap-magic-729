/**
 * Where the contact form posts.
 *
 * ---------------------------------------------------------------------------
 * TO TURN THE FORM ON: put a URL here. That is the whole change.
 *
 *   export const CONTACT_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
 *
 * Anything that accepts a JSON POST works — Formspree, Web3Forms, Basin, a
 * Netlify or Vercel function, or your own handler on Fly. The form sends:
 *
 *   { name, email, company, message, _subject, locale }
 *
 * and treats any 2xx as delivered.
 *
 * ---------------------------------------------------------------------------
 * WHILE THIS IS NULL the form falls back to opening the visitor's own mail
 * client with the message pre-filled. That is where the site is today, and it
 * is a weak place to be for the only conversion path on a B2B site:
 *
 *   - nothing is recorded on your side; if the visitor never presses send in
 *     their mail app, the enquiry simply never existed and you cannot know
 *   - it does nothing at all for anyone reading mail in a browser tab without
 *     a registered mailto handler, which is most people on a work laptop
 *   - the visitor watches an unrelated application open on top of your site,
 *     which reads as a bug
 *
 * The fallback is kept rather than removed so the form is never a dead button,
 * but it is a stopgap, not the destination.
 */
export const CONTACT_ENDPOINT: string | null = null;

/** Where enquiries are read. Also the address used by the mailto fallback. */
export const CONTACT_FALLBACK_EMAIL = "info@zedventures.com";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
  /** Subject line for services that use it (Formspree, Web3Forms, Basin). */
  _subject: string;
  /** Which language the visitor was reading when they wrote in. */
  locale: string;
};

export type SendResult = { ok: true } | { ok: false; reason: "network" | "rejected" };

/**
 * Posts the enquiry. Never throws — the form needs a result it can render, not
 * an exception. A 12-second timeout stops the button sitting in "Sending…"
 * forever when the endpoint is unreachable.
 */
export async function sendEnquiry(payload: ContactPayload): Promise<SendResult> {
  if (!CONTACT_ENDPOINT) return { ok: false, reason: "network" };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12_000);
  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return res.ok ? { ok: true } : { ok: false, reason: "rejected" };
  } catch {
    return { ok: false, reason: "network" };
  } finally {
    clearTimeout(timeout);
  }
}

/** The mailto: URL used both by the fallback and by the "write to us" links. */
export function mailtoFor(p: ContactPayload): string {
  const body = [
    `Name: ${p.name}`,
    `Company: ${p.company}`,
    `Email: ${p.email}`,
    "",
    p.message,
  ].join("\n");
  return `mailto:${CONTACT_FALLBACK_EMAIL}?subject=${encodeURIComponent(
    p._subject,
  )}&body=${encodeURIComponent(body)}`;
}
