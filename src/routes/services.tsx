import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Zedventures" },
      {
        name: "description",
        content:
          "Explore Zedventures' capabilities: AI & Data, Analytics, GIS & Geospatial, Guidewire, SAP, Product Engineering, and Offshore & Nearshore Delivery.",
      },
      { property: "og:title", content: "Services — Zedventures" },
      {
        property: "og:description",
        content:
          "Engineering, data, and geospatial systems built to run.",
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
      <section className="border-b border-border bg-background px-5 py-10 sm:px-8 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="border-l-4 border-primary pl-5 sm:pl-8 md:pl-12">
            <p className="eyebrow text-primary">{s.eyebrow}</p>
            <h1 className="font-display mt-2 text-5xl leading-[0.9] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              {s.heading}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {s.sub}
            </p>
          </div>
        </div>
      </section>

      {s.items.map((item, i) => {
        const isDark = i % 2 === 0;
        return (
          <section
            key={item.title}
            className={`border-b border-border px-5 py-8 sm:px-8 sm:py-10 ${
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
