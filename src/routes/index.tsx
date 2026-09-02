import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { CaseStudies } from "@/components/case-studies";
import { Careers } from "@/components/careers";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MobileCtaBar } from "@/components/mobile-cta-bar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zedventures — AI, Data & Product Engineering Partner" },
      {
        name: "description",
        content:
          "Zedventures designs, builds, and runs AI, analytics, geospatial, and insurance platforms that hold up in production.",
      },
      { property: "og:title", content: "Zedventures — Technology Partner" },
      {
        property: "og:description",
        content:
          "Engineering intelligence into every enterprise. AI & Data, Analytics, GIS, Guidewire, Product Engineering, Managed Services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </LanguageProvider>
  );
}
