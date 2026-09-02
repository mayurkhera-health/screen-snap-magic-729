import { createServerFn } from "@tanstack/react-start";
import type { ContactPayload } from "@/lib/contact-endpoint";

/**
 * Server-side delivery for the contact form.
 *
 * ---------------------------------------------------------------------------
 * WHY THIS FILE EXISTS
 *
 * A browser cannot send email. Sending needs a credential, and any credential
 * in the browser bundle is public — view-source, and someone is sending mail as
 * you until the domain is blacklisted. So the send has to happen somewhere the
 * key is not visible.
 *
 * This site already has that somewhere: it is a TanStack Start app running as a
 * real Node server (NITRO_PRESET=node-server, port 3000 on Fly), not a static
 * bundle. `createServerFn` compiles the handler below OUT of the client bundle
 * and leaves an RPC call in its place, so RESEND_API_KEY is only ever read in
 * the server process.
 *
 * ---------------------------------------------------------------------------
 * TO TURN IT ON
 *
 *   1. Create an API key at resend.com and verify the sending domain.
 *   2. fly secrets set RESEND_API_KEY=re_xxx CONTACT_TO=info@zedventures.com
 *   3. Redeploy.
 *
 * Nothing else changes. Until the secret exists the function reports
 * "not-configured" and the form falls back to the visitor's mail client, so the
 * button is never dead.
 *
 * Not using Resend? The handler is one fetch — swap it for SendGrid, Postmark,
 * SES or an SMTP client. The contract with the form does not change.
 */

const FROM = process.env["CONTACT_FROM"] ?? "ZEDventures site <onboarding@resend.dev>";
const TO = process.env["CONTACT_TO"] ?? "info@zedventures.com";
/** Overridable so the delivery path can be exercised against a local stub. */
const API_URL = process.env["CONTACT_API_URL"] ?? "https://api.resend.com/emails";

export type SubmitResult =
  | { status: "sent" }
  | { status: "not-configured" }
  | { status: "failed" };

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: ContactPayload) => {
    // Re-validated here, not only in the form. Client-side validation is a
    // convenience for the visitor; anything can POST to this function.
    const trim = (v: unknown) => (typeof v === "string" ? v.trim() : "");
    const clean: ContactPayload = {
      name: trim(data?.name).slice(0, 200),
      email: trim(data?.email).slice(0, 320),
      company: trim(data?.company).slice(0, 200),
      message: trim(data?.message).slice(0, 5000),
      _subject: trim(data?._subject).slice(0, 200),
      locale: trim(data?.locale) === "fr" ? "fr" : "en",
    };
    if (!clean.name || !clean.company || !clean.message) throw new Error("missing fields");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clean.email)) throw new Error("bad email");
    return clean;
  })
  .handler(async ({ data }): Promise<SubmitResult> => {
    const key = process.env["RESEND_API_KEY"];
    if (!key) return { status: "not-configured" };

    const lines = [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Language: ${data.locale}`,
      "",
      data.message,
    ];

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM,
          to: [TO],
          // So a reply in the inbox goes to the visitor, not into a void.
          reply_to: data.email,
          subject: data._subject || `Project enquiry — ${data.company}`,
          text: lines.join("\n"),
          html: `<pre style="font:14px/1.6 ui-monospace,monospace;white-space:pre-wrap">${escapeHtml(
            lines.join("\n"),
          )}</pre>`,
        }),
      });
      if (!res.ok) {
        // Body may carry the provider's reason; log it server-side only.
        console.error("[contact] provider rejected:", res.status, await res.text().catch(() => ""));
        return { status: "failed" };
      }
      return { status: "sent" };
    } catch (err) {
      console.error("[contact] send threw:", err);
      return { status: "failed" };
    }
  });
