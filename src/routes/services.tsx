import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/section-header";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zedventures" },
      {
        name: "description",
        content:
          "Explore Zedventures' capabilities: AI & Data, Analytics, GIS & Geospatial, Guidewire, SAP, Product Engineering, and Offshore Delivery.",
      },
      { property: "og:title", content: "Services — Zedventures" },
      {
        property: "og:description",
        content:
          "Seven disciplines, one standard: systems that hold up in production.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://screen-snap-magic-729.lovable.app/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://screen-snap-magic-729.lovable.app/services",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <LanguageProvider>
      <Header />
      <main className="pt-20">
        <ServicesPageBody />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

function ServicesPageBody() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <>
      <section className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            align="center"
            eyebrow={s.eyebrow}
            heading={s.heading}
            sub={s.sub}
          />
        </div>
      </section>

      {s.items.map((item, i) => {
        const isDark = i % 2 === 0;
        return (
          <section
            key={item.title}
            className={`border-b border-border px-5 py-12 sm:px-8 sm:py-14 ${
              isDark ? "section-dark" : "bg-background"
            }`}
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[120px_1fr]">
                <span
                  className="font-display text-5xl leading-none text-primary sm:text-6xl"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-display text-2xl tracking-tight sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
