import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

const en = {
  hero: {
    headline: "Engineering intelligence into every enterprise",
    subhead:
      "We design, build, and run AI, analytics, and geospatial systems that hold up in production.",
  },
  services: {
    eyebrow: "What we do",
    heading: "Capabilities",
    sub: "Seven disciplines, one standard: systems that hold up in production.",
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
        title: "Offshore & Nearshore Delivery",
        desc: "Extend your team with dedicated engineering talent where it makes sense. Offshore delivery in India gives you deep, cost-efficient capacity for design, development, QA, and support. Nearshore delivery across the Americas provides closer time-zone overlap for real-time collaboration and faster feedback loops. One engagement model, global scale.",
      },
    ],
  },
  caseStudies: {
    eyebrow: "AI in production",
    heading: "What we're building right now",
    items: [
      {
        tag: "Case study 01",
        date: "2026",
        client: "Enterprise software company",
        short: ["AI Help", "Chat"],
        title: "AI-assisted help, grounded in approved product knowledge",
        desc: "Product users were struggling to find quick, accurate answers across sprawling knowledge bases, driving repetitive support tickets, slow resolution, and the risk of misinformation from ungrounded AI. We built an omnichannel AI-assisted Help Chat integrated into web, mobile, and in-product interfaces. A Python orchestration API handles authentication, conversation history, dynamic prompt engineering, and validation guardrails — while retrieval-augmented generation over Azure AI Search grounds every response in verified documentation. The result: near-zero hallucinations, sub-second answers, and a projected 70% deflection of routine Tier-1 support.",
        stack: ["RAG", "Azure AI Search", "Python API", "LLM orchestration", "Omnichannel UI"],
      },
      {
        tag: "Case study 02",
        date: "2026",
        client: "Global property-services company",
        short: ["Sales", "Intel"],
        title: "Event-driven sales intelligence for property services",
        desc: "Sales reps were losing hours to manual pre-meeting research across CRM records, transaction history, property data, and neighborhood demographics. We built an event-driven AI assistant that triggers the moment an appointment is scheduled, synthesizing disconnected data into a structured intelligence profile. Azure OpenAI generates contextual recommendations, RAG injects live CRM and market data, and a vector index surfaces relevant neighborhood reports — giving reps a personalized brief in under five minutes instead of an hour.",
        stack: ["Azure OpenAI", "RAG", "Python API", "Vector search", "Event-driven architecture"],
      },
      {
        tag: "Case study 03",
        date: "2026",
        client: "Global relocation enterprise",
        short: ["Unified", "Data"],
        title: "Unified analytics for multi-country operations",
        desc: "A global relocation enterprise had no central visibility into multi-country operations. Regional data silos forced teams to compile reports manually, slowing decision-making and hiding costs, client feedback, and performance gaps. We built a unified analytics platform on SQL Azure, Azure Data Lake, and Microsoft SQL Server, with Azure Data Factory and Logic Apps integrating data from regional systems. Power BI and Birst Connect deliver real-time global dashboards, supported by C# .NET and WPF custom applications and Azure DevOps CI/CD. The result: 100% real-time visibility into moving processes and customer touchpoints, standardized reporting for account profitability, and the ability to isolate growth opportunities and weak performance areas instantly.",
        stack: ["SQL Azure", "Azure Data Lake", "Azure Data Factory", "Power BI", "C# .NET"],
      },
      {
        tag: "Case study 04",
        date: "2026",
        client: "Global consumer-electronics company",
        short: ["Cloud", "Shift"],
        title: "Cloud data migration and residency for global compliance",
        desc: "A global consumer-electronics leader operated 195 legacy systems on an on-premise Apache Hadoop cluster, locked into rigid hardware contracts, over-provisioned compute, and lacking the architecture to meet CCPA data-residency requirements. We led a comprehensive cloud data migration that decoupled US consumer data from global lakes and re-architected the estate on Google Cloud Platform. Hive, Presto, and Spark power distributed analytics over separated object storage; IAM, Kerberos, and client-side KMS encryption enforce strict access and privacy controls; multi-master clustering and auto-healing node scripts deliver resilience. The result: 3–5× faster queries, fully elastic ingestion, a 25% engineering productivity gain, 20.66% faster feature rollouts, and an outage-resilient platform that satisfies regional data sovereignty.",
        stack: ["GCP", "Apache Spark", "Hive", "Presto", "IAM & KMS", "Auto-healing clusters"],
      },
    ],
  },
  careers: {
    eyebrow: "Join us",
    line: "We're growing our AI, analytics, GIS, SAP, Guidewire, engineering, and offshore & nearshore delivery teams.",
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
    page: {
      eyebrow: "Contact",
      heading: "Let's start a conversation.",
      sub: "Reach us directly, or send a note — we respond within one business day.",
      emailLabel: "Email",
      email: "info@zedventures.com",
      phoneLabel: "Phone",
      phone: "+1 (408) 555-0134",
      officesEyebrow: "Our offices",
      offices: [
        { city: "San Jose", region: "California, USA", address: "1762 Technology Drive, Suite 209, San Jose, CA 95110" },
        { city: "Dallas", region: "Texas, USA", address: "Full address available on request" },
        { city: "Hyderabad", region: "India", address: "Full address available on request" },
      ],
    },
  },
  footer: {
    tagline: "Technology, engineered for outcomes.",
    rights: "© 2026 Zedventures. All rights reserved.",
  },
  nav: {
    services: "Services",
    contact: "Contact",
  },
  a11y: {
    switchTo: "Passer au français",
    logoAlt: "ZEDVentures logo",
  },
};

export type Copy = typeof en;

const fr: Copy = {
  hero: {
    headline: "Intégrer l'intelligence au cœur de votre entreprise",
    subhead:
      "Nous concevons, développons et exploitons des systèmes d'IA, d'analytique et de géomatique prêts pour la production.",
  },
  services: {
    eyebrow: "Ce que nous faisons",
    heading: "Expertises",
    sub: "Sept disciplines, une même exigence : des systèmes prêts pour la production.",
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
        title: "Livraison offshore et nearshore",
        desc: "Étendez votre équipe avec des talents d'ingénierie dédiés, là où c'est le plus pertinent. La livraison offshore en Inde offre une capacité approfondie et économique pour la conception, le développement, l'assurance qualité et le support. La livraison nearshore dans les Amériques garantit un meilleur recouvrement de fuseaux horaires pour une collaboration en temps réel et des boucles de feedback plus rapides. Un modèle d'engagement, une échelle mondiale.",
      },
    ],
  },
  caseStudies: {
    eyebrow: "L'IA en production",
    heading: "Ce que nous développons en ce moment",
    items: [
      {
        tag: "Étude de cas 01",
        date: "2026",
        client: "Entreprise de logiciels",
        short: ["Aide", "IA"],
        title: "Une aide assistée par IA, ancrée dans le savoir produit approuvé",
        desc: "Les utilisateurs du produit peinaient à trouver des réponses rapides et précises dans des bases de connaissances dispersées, ce qui générait des tickets de support répétitifs, des résolutions lentes et le risque de désinformation par une IA non ancrée. Nous avons conçu une aide conversationnelle assistée par IA, omnicanale, intégrée aux interfaces web, mobile et in-product. Une API d'orchestration Python gère l'authentification, l'historique des conversations, l'ingénierie dynamique des invites et les garde-fous de validation, tandis que la génération augmentée par récupération via Azure AI Search ancre chaque réponse dans la documentation vérifiée de l'entreprise. Résultat : pratiquement aucune hallucination, des réponses en moins d'une seconde et une déflexion projetée de 70 % des demandes de support de niveau 1 routinières.",
        stack: ["RAG", "Azure AI Search", "API Python", "Orchestration LLM", "Interface omnicanale"],
      },
      {
        tag: "Étude de cas 02",
        date: "2026",
        client: "Entreprise mondiale de services immobiliers",
        short: ["Intel", "Ventes"],
        title: "Intelligence commerciale pilotée par événements pour les services immobiliers",
        desc: "Les représentants passaient des heures à rechercher manuellement des informations avant chaque rendez-vous, en naviguant entre le CRM, l'historique des transactions, les données de propriétés et les démographies de quartier. Nous avons conçu un assistant IA piloté par événements qui s'active dès qu'un rendez-vous est planifié, synthétisant des données dispersées en un profil d'intelligence structuré. Azure OpenAI génère des recommandations contextuelles, la génération augmentée par récupération injecte des données de marché et du CRM en temps réel, et un index vectoriel fait remonter les rapports de quartier pertinents — fournissant aux représentants un briefing personnalisé en moins de cinq minutes au lieu d'une heure.",
        stack: ["Azure OpenAI", "RAG", "API Python", "Recherche vectorielle", "Architecture événementielle"],
      },
      {
        tag: "Étude de cas 03",
        date: "2026",
        client: "Entreprise mondiale de déménagement",
        short: ["Données", "Unifiées"],
        title: "Analytique unifiée pour des opérations multinationales",
        desc: "Une entreprise mondiale de déménagement n'avait aucune visibilité centralisée sur ses opérations multinationales. Les silos de données régionaux obligeaient les équipes à compiler manuellement les rapports, ce qui ralentissait la prise de décision et masquait les coûts, les retours clients et les écarts de performance. Nous avons conçu une plateforme d'analytique unifiée sur SQL Azure, Azure Data Lake et Microsoft SQL Server, avec Azure Data Factory et Logic Apps pour intégrer les données des systèmes régionaux. Power BI et Birst Connect fournissent des tableaux de bord mondiaux en temps réel, appuyés par des applications personnalisées en C# .NET et WPF et par un CI/CD Azure DevOps. Résultat : une visibilité en temps réel à 100 % sur les processus de déménagement et les points de contact client, des rapports standardisés pour la rentabilité des comptes, et la capacité d'isoler immédiatement les opportunités de croissance et les zones de performance faible.",
        stack: ["SQL Azure", "Azure Data Lake", "Azure Data Factory", "Power BI", "C# .NET"],
      },
      {
        tag: "Étude de cas 04",
        date: "2026",
        client: "Multinationale de l'électronique grand public",
        short: ["Virage", "Cloud"],
        title: "Migration infonuagique et résidence des données pour la conformité mondiale",
        desc: "Une multinationale de l’électronique grand public exploitait 195 systèmes hérités sur un cluster Apache Hadoop local, enfermée dans des contrats de matériel rigides, avec du calcul surprovisionné et sans l'architecture nécessaire pour répondre aux exigences de résidence des données de la CCPA. Nous avons dirigé une migration complète vers le cloud qui a dissocié les données des consommateurs américains des lacs de données mondiaux et réarchitecturé l'écosystème sur Google Cloud Platform. Hive, Presto et Spark alimentent l'analytique distribuée sur un stockage objet séparé ; IAM, Kerberos et le chiffrement côté client via KMS appliquent des contrôles d'accès et de confidentialité stricts ; des clusters multi-maîtres et des scripts de nœuds auto-cicatrisants assurent la résilience. Résultat : requêtes 3 à 5 fois plus rapides, ingestion entièrement élastique, gain de productivité de 25 %, déploiement des fonctionnalités 20,66 % plus rapide, et une plateforme résiliente aux pannes qui respecte la souveraineté des données régionales.",
        stack: ["GCP", "Apache Spark", "Hive", "Presto", "IAM & KMS", "Clusters auto-cicatrisants"],
      },
    ],
  },
  careers: {
    eyebrow: "Rejoignez-nous",
    line: "Nous développons nos équipes d'IA, d'analytique, de SIG, de SAP, de Guidewire, d'ingénierie et de livraison offshore et nearshore.",
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
    page: {
      eyebrow: "Contact",
      heading: "Démarrons la conversation.",
      sub: "Contactez-nous directement ou envoyez-nous un message — nous répondons en un jour ouvrable.",
      emailLabel: "Courriel",
      email: "info@zedventures.com",
      phoneLabel: "Téléphone",
      phone: "+1 (408) 555-0134",
      officesEyebrow: "Nos bureaux",
      offices: [
        { city: "San Jose", region: "Californie, États-Unis", address: "1762 Technology Drive, Suite 209, San Jose, CA 95110" },
        { city: "Dallas", region: "Texas, États-Unis", address: "Adresse complète disponible sur demande" },
        { city: "Hyderabad", region: "Inde", address: "Adresse complète disponible sur demande" },
      ],
    },
  },
  footer: {
    tagline: "La technologie, au service des résultats.",
    rights: "© 2026 Zedventures. Tous droits réservés.",
  },
  nav: {
    services: "Expertises",
    contact: "Contact",
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
