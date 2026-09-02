import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

const en = {
  hero: {
    eyebrow: "Zedventures — Technology Partner",
    headline: "Engineering intelligence into every enterprise",
    subhead:
      "We design, build, and run AI, analytics, and geospatial systems that hold up in production.",
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
        title: "GIS & Geospatial",
        desc: "Spatial data, mapping, and location analytics — exposure mapping, imagery-based risk assessment, and geospatial pipelines.",
      },
      {
        title: "Guidewire",
        desc: "End-to-end work across PolicyCenter, BillingCenter, and ClaimCenter — implementation, configuration, upgrades, and cloud migration.",
      },
      {
        title: "SAP",
        desc: "S/4HANA, BTP, and Fiori work with a clean-core discipline — integrations, extensions, and SAP-grounded AI agents that reach real ERP context.",
      },

      {
        title: "Product Engineering",
        desc: "Full-cycle software delivery — architecture, cloud-native development, and QA — for products that ship on time.",
      },
      {
        title: "Offshore Delivery",
        desc: "Dedicated offshore engineering teams embedded in your roadmap — design, development, QA, and support — so you scale delivery without adding overhead.",
      },
    ],
  },
  caseStudies: {
    eyebrow: "AI in production",
    heading: "What we're building right now",
    items: [
      {
        tag: "Case study 01",
        title: "AI-assisted help, grounded in approved product knowledge",
        desc: "A conversational help experience that lets users ask product questions from web, mobile, or in-product interfaces. A Python orchestration API manages authentication, conversation state, prompt construction, and guardrails — while retrieval-augmented generation over Azure AI Search grounds every answer in the customer's approved documentation, not the model's general knowledge.",
        stack: ["RAG", "Azure AI Search", "Python API", "LLM orchestration"],
      },
    ],
  },
  careers: {
    eyebrow: "Join us",
    line: "We're growing our AI, analytics, GIS, SAP, Guidewire, engineering, and offshore delivery teams.",
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
  hero: {
    eyebrow: "Zedventures — Partenaire technologique",
    headline: "Intégrer l'intelligence au cœur de votre entreprise",
    subhead:
      "Nous concevons, développons et exploitons des systèmes d'IA, d'analytique et de géomatique prêts pour la production.",
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
        title: "SIG et géospatial",
        desc: "Données spatiales, cartographie et analytique de localisation — cartographie de l'exposition, évaluation des risques par imagerie et pipelines géospatiaux.",
      },
      {
        title: "Guidewire",
        desc: "Services complets pour PolicyCenter, BillingCenter et ClaimCenter — implantation, configuration, mises à niveau et migration infonuagique.",
      },
      {
        title: "SAP",
        desc: "S/4HANA, BTP et Fiori selon une discipline « clean core » — intégrations, extensions et agents d'IA branchés au contexte réel de l'ERP.",
      },

      {
        title: "Ingénierie produit",
        desc: "Livraison logicielle complète — architecture, développement infonuagique natif et assurance qualité — pour des produits livrés à temps.",
      },
      {
        title: "Livraison offshore",
        desc: "Des équipes d'ingénierie offshore dédiées et intégrées à votre feuille de route — conception, développement, assurance qualité et soutien — pour passer à l'échelle sans surcoût.",
      },
    ],
  },
  caseStudies: {
    eyebrow: "L'IA en production",
    heading: "Ce que nous développons en ce moment",
    items: [
      {
        tag: "Étude de cas 01",
        title: "Une aide assistée par IA, ancrée dans le savoir produit approuvé",
        desc: "Une expérience d'aide conversationnelle permettant aux utilisateurs de poser des questions sur le produit depuis le web, le mobile ou l'interface du produit. Une API d'orchestration Python gère l'authentification, l'état des conversations, la construction des invites et les garde-fous, tandis que la génération augmentée par récupération via Azure AI Search ancre chaque réponse dans la documentation approuvée du client — et non dans les connaissances générales du modèle.",
        stack: ["RAG", "Azure AI Search", "API Python", "Orchestration LLM"],
      },
    ],
  },
  careers: {
    eyebrow: "Rejoignez-nous",
    line: "Nous développons nos équipes d'IA, d'analytique, de SIG, de SAP, de Guidewire, d'ingénierie et de livraison offshore.",
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
