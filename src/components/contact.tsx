import { useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { CheckCircle2 } from "lucide-react";

type Errors = Partial<Record<"name" | "email" | "company" | "message", string>>;

export function Contact() {
  const { t, lang } = useLanguage();
  const [values, setValues] = useState({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = t.contact.required;
    if (!values.company.trim()) next.company = t.contact.required;
    if (!values.message.trim()) next.message = t.contact.required;
    if (!values.email.trim()) next.email = t.contact.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = t.contact.invalidEmail;
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const field = (
    id: "name" | "email" | "company" | "message",
    label: string,
    type: "text" | "email" | "textarea"
  ) => {
    const err = errors[id];
    const base =
      "w-full rounded-xl border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none";
    const cls = `${base} ${err ? "border-destructive" : "border-input"}`;
    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </label>
        {type === "textarea" ? (
          <textarea
            id={id}
            rows={5}
            value={values[id]}
            onChange={(e) => setValues({ ...values, [id]: e.target.value })}
            aria-invalid={!!err}
            aria-describedby={err ? `${id}-error` : undefined}
            className={cls}
          />
        ) : (
          <input
            id={id}
            type={type}
            value={values[id]}
            onChange={(e) => setValues({ ...values, [id]: e.target.value })}
            aria-invalid={!!err}
            aria-describedby={err ? `${id}-error` : undefined}
            className={cls}
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

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeader align="left" eyebrow={t.contact.eyebrow} heading={t.contact.line} sub={t.contact.sub} />
        </div>
        <div>
          {sent ? (
            <div className="flex h-full flex-col items-start justify-center rounded-xl border border-border bg-card p-10">
              <CheckCircle2 className="h-10 w-10 text-primary" aria-hidden="true" />
              <p className="font-display mt-6 text-2xl">{t.contact.successTitle}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.contact.successBody}</p>
            </div>
          ) : (
            <form key={lang} onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
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
          )}
        </div>
      </div>
    </section>
  );
}
