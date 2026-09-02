import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

type FieldId = "name" | "email" | "company" | "message";
/** Error *codes*, not translated strings — so switching language re-translates
 *  existing errors instead of forcing the form to remount and lose its values. */
type ErrorCode = "required" | "invalidEmail";
type Errors = Partial<Record<FieldId, ErrorCode>>;

export function ContactForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [handedOff, setHandedOff] = useState(false);

  const recipient = t.contact.page.email;

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "required";
    if (!values.company.trim()) next.company = "required";
    if (!values.message.trim()) next.message = "required";
    if (!values.email.trim()) next.email = "required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "invalidEmail";
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);

    const order: FieldId[] = ["name", "email", "company", "message"];
    const firstInvalid = order.find((id) => next[id]);
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    // There is no backend. Rather than showing a success screen for a message
    // that goes nowhere, hand the message to the visitor's own mail client.
    const subject = `Project enquiry — ${values.company}`;
    const body = [
      `Name: ${values.name}`,
      `Company: ${values.company}`,
      `Email: ${values.email}`,
      "",
      values.message,
    ].join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setHandedOff(true);
  };

  const field = (id: FieldId, label: string, type: "text" | "email" | "textarea") => {
    const code = errors[id];
    const err = code ? t.contact[code] : undefined;
    // No `focus:outline-none` here: it was suppressing the global
    // :focus-visible ring and leaving keyboard users with no indicator.
    const base =
      "w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary";
    const cls = `${base} ${err ? "border-destructive" : "border-input"}`;
    const autoComplete = { name: "name", email: "email", company: "organization", message: "off" }[id];
    const shared = {
      id,
      name: id,
      autoComplete,
      value: values[id],
      "aria-invalid": !!err,
      "aria-describedby": err ? `${id}-error` : undefined,
      className: cls,
    };

    return (
      <div>
        <label
          htmlFor={id}
          className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground"
        >
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            rows={5}
            {...shared}
            onChange={(e) => setValues({ ...values, [id]: e.target.value })}
          />
        ) : (
          <input
            type={type}
            {...shared}
            onChange={(e) => setValues({ ...values, [id]: e.target.value })}
          />
        )}
        {err && (
          <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-medium text-destructive">
            {err}
          </p>
        )}
      </div>
    );
  };

  if (handedOff) {
    return (
      <div className="flex h-full flex-col items-start justify-center rounded-xl border border-border bg-card p-10">
        <CheckCircle2 className="h-10 w-10 text-accent" aria-hidden="true" />
        <p className="font-display mt-6 text-2xl">{t.contact.successTitle}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t.contact.successBody}</p>
        <p className="mt-4 text-sm text-muted-foreground">
          {t.contact.successFallback}{" "}
          <a
            href={`mailto:${recipient}`}
            className="font-bold text-accent underline-offset-4 hover:underline"
          >
            {recipient}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {field("name", t.contact.name, "text")}
      {field("email", t.contact.email, "email")}
      {field("company", t.contact.company, "text")}
      {field("message", t.contact.message, "textarea")}
      <div>
        <button
          type="submit"
          className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/85"
        >
          {t.contact.submit}
        </button>
      </div>
    </form>
  );
}
