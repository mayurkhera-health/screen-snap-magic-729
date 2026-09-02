import { useLanguage } from "@/lib/i18n";
import { SectionHeader } from "@/components/section-header";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-dark border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeader align="left" eyebrow={t.contact.eyebrow} heading={t.contact.line} sub={t.contact.sub} />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
