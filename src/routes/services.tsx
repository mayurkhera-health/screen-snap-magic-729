import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SERVICE_SLUG_BY_INDEX } from "@/lib/service-pages";


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
      <main className="pt-16 sm:pt-20">
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
            <p className="eyebrow text-accent">{s.eyebrow}</p>
            <h1 className="font-display mt-2 text-[2.25rem] leading-[0.95] tracking-tight [overflow-wrap:anywhere] sm:text-7xl sm:leading-[0.9] md:text-8xl lg:text-9xl">
              {s.heading}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              {s.sub}
            </p>
          </div>
        </div>
      </section>

      {/* Each band links to its own service page.
          Until now this page described the seven services and linked to none
          of them: the header nav points here, so the route a visitor actually
          takes — click Services, then look for the one you want — was a dead
          end, and the detail pages were only reachable from the homepage. */}
      {s.items.map((item, i) => {
        const isDark = i % 2 === 0;
        const slug = SERVICE_SLUG_BY_INDEX[i];
        if (!slug) return null;
        return (
          <section
            key={item.title}
            className={`border-b border-border ${isDark ? "section-dark" : "bg-background"}`}
          >
            <Link
              to="/services/$slug"
              params={{ slug }}
              className="group block px-5 py-8 transition-colors hover:bg-secondary sm:px-8 sm:py-10"
              style={{ transitionDuration: "var(--dur)", transitionTimingFunction: "var(--ease)" }}
            >
              <div className="mx-auto max-w-6xl">
                <h2 className="font-display text-2xl tracking-tight transition-transform group-hover:translate-x-1 sm:text-3xl">
                  {item.title}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent">
                  {t.services.viewService}
                  <ArrowUpRight className="arrow-shift h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </section>
        );
      })}
    </>
  );
}
