import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

const en = {
  nav: {
    deck: "Download deck",
    talk: "Book a consultation",
  },
  hero: {
    eyebrow: "Zedventures — Technology Partner",
    headline: "Engineering intelligence into every enterprise",
    subhead:
      "We design, build, and run AI, analytics, and digital platforms that hold up in production.",
    deckCta: "Download Capability Deck",
    consultCta: "Book a consultation",
  },
  services: {
    eyebrow: "What we do",
    items: [
      {
        title: "AI & Data",
        desc: "LLM applications, machine learning pipelines, and data platforms built to go from proof-of-concept to production.",
      },
      {
        title: "Analytics",
        desc: "BI dashboards, data warehousing, and predictive analytics that turn scattered data into decisions leadership trusts.",
      },
      {
        title: "Product Engineering",
        desc: "Full-cycle software delivery — architecture, cloud-native development, and QA — for products that ship on time.",
      },
      {
        title: "Managed Services",
        desc: "24/7 monitoring, support, and optimization so your platforms stay fast, secure, and available.",
      },
    ],
  },
  deck: {
    eyebrow: "Capability deck",
    line: "See our full capabilities — services, delivery model, and engagement options.",
    cta: "Download the deck",
  },
  careers: {
    eyebrow: "Join us",
    line: "We're growing our AI, analytics, and engineering teams.",
    cta: "View open roles",
  },
  contact: {
    eyebrow: "Get in touch",
    line: "Let's talk about your next project.",
    sub: "Tell us a bit about what you're building — we'll follow up within one business day.",
    name: "Full name",
    email: "Work email",
    company: "Company",
    message: "What are you looking to build?",
    submit: "Send message",
    successTitle: "Message sent",
    successBody: "Thanks for reaching out — we'll follow up within one business day.",
    required: "This field is required",
    invalidEmail: "Please enter a valid work email",
  },
  footer: {
    tagline: "Technology, engineered for outcomes.",
    rights: "© 2026 Zedventures. All rights reserved.",
  },
  a11y: {
    switchTo: "Passer au français",
    logoAlt: "ZEDVentures logo",
  },
};

export type Copy = typeof en;

const fr: Copy = {
  nav: {
    deck: "Télécharger la présentation",
    talk: "Réserver une consultation",
  },
  hero: {
    eyebrow: "Zedventures — Partenaire technologique",
    headline: "Intégrer l'intelligence au cœur de votre entreprise",
    subhead:
      "Nous concevons, développons et exploitons des plateformes d'IA, d'analytique et numériques prêtes pour la production.",
    deckCta: "Télécharger la présentation",
    consultCta: "Réserver une consultation",
  },
  services: {
    eyebrow: "Ce que nous faisons",
    items: [
      {
        title: "IA et données",
        desc: "Applications basées sur les LLM, pipelines d'apprentissage automatique et plateformes de données conçues pour passer du prototype à la production.",
      },
      {
        title: "Analytique",
        desc: "Tableaux de bord BI, entrepôts de données et analytique prédictive qui transforment des données dispersées en décisions fiables.",
      },
      {
        title: "Ingénierie produit",
        desc: "Livraison logicielle complète — architecture, développement infonuagique natif et assurance qualité — pour des produits livrés à temps.",
      },
      {
        title: "Services gérés",
        desc: "Surveillance, soutien et optimisation 24 h/24, 7 j/7 pour que vos plateformes restent rapides, sécurisées et disponibles.",
      },
    ],
  },
  deck: {
    eyebrow: "Présentation",
    line: "Découvrez toutes nos capacités — services, modèle de livraison et options d'engagement.",
    cta: "Télécharger la présentation",
  },
  careers: {
    eyebrow: "Rejoignez-nous",
    line: "Nous développons nos équipes d'IA, d'analytique et d'ingénierie.",
    cta: "Voir les postes ouverts",
  },
  contact: {
    eyebrow: "Contactez-nous",
    line: "Parlons de votre prochain projet.",
    sub: "Dites-nous ce que vous souhaitez réaliser — nous vous répondrons en un jour ouvrable.",
    name: "Nom complet",
    email: "Courriel professionnel",
    company: "Entreprise",
    message: "Que souhaitez-vous réaliser?",
    submit: "Envoyer le message",
    successTitle: "Message envoyé",
    successBody: "Merci de nous avoir contactés — nous vous répondrons en un jour ouvrable.",
    required: "Ce champ est requis",
    invalidEmail: "Veuillez saisir un courriel professionnel valide",
  },
  footer: {
    tagline: "La technologie, au service des résultats.",
    rights: "© 2026 Zedventures. Tous droits réservés.",
  },
  a11y: {
    switchTo: "Switch to English",
    logoAlt: "Logo ZEDVentures",
  },
};

const translations: Record<Lang, Copy> = { en, fr };

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Copy;
}>({ lang: "en", setLang: () => {}, t: en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("zv-lang");
    if (stored === "en" || stored === "fr") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("zv-lang", l);
    document.documentElement.lang = l;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
