/**
 * Contact form transport.
 *
 * The send happens on our own server — see src/lib/contact-server.ts, which
 * holds the credential and does the work. A browser cannot send email without
 * exposing a key, and this site is a real Node server rather than a static
 * bundle, so there is no need for a third-party form service.
 *
 * Order of attempts:
 *   1. CONTACT_ENDPOINT below, if one is set — an optional override for anyone
 *      who would rather point the form at Formspree, Web3Forms or Basin.
 *   2. our own server function.
 *   3. the visitor's own mail client, as a last resort so the button is never
 *      dead. A stopgap, not the destination.
 *
 * Leave CONTACT_ENDPOINT null to use our server.
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

export type SendResult =
  | { ok: true }
  /** No delivery path configured yet — the form falls back to mailto. */
  | { ok: false; reason: "not-configured" }
  /** A path is configured but the send failed — show the failure panel. */
  | { ok: false; reason: "failed" };

/**
 * Sends the enquiry. Never throws — the form needs a result it can render, not
 * an exception.
 */
export async function sendEnquiry(payload: ContactPayload): Promise<SendResult> {
  // 1. Explicit third-party endpoint, if the site has been pointed at one.
  if (CONTACT_ENDPOINT) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12_000);
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      return res.ok ? { ok: true } : { ok: false, reason: "failed" };
    } catch {
      return { ok: false, reason: "failed" };
    } finally {
      clearTimeout(timeout);
    }
  }

  // 2. Our own server. Imported lazily so the RPC stub is only pulled in when a
  //    visitor actually submits, not on every page that renders the form.
  try {
    const { submitEnquiry } = await import("@/lib/contact-server");
    const result = await submitEnquiry({ data: payload });
    if (result.status === "sent") return { ok: true };
    if (result.status === "not-configured") return { ok: false, reason: "not-configured" };
    return { ok: false, reason: "failed" };
  } catch {
    return { ok: false, reason: "failed" };
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
