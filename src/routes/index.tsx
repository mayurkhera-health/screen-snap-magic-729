import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { DeckStrip } from "@/components/deck-strip";
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
          "Zedventures designs, builds, and runs AI, analytics, and digital platforms that hold up in production. Download our capability deck.",
      },
      { property: "og:title", content: "Zedventures — Technology Partner" },
      {
        property: "og:description",
        content:
          "Engineering intelligence into every enterprise. AI & Data, Analytics, Product Engineering, Managed Services.",
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
        <DeckStrip />
        <Careers />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </LanguageProvider>
  );
}
