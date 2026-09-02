import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr";

const en = {
  hero: {
    headline: "Engineering intelligence into every enterprise",
    subhead:
      "We build and run the systems enterprises can't afford to have fail: AI, data, analytics, geospatial, SAP and Guidewire. Not proofs of concept — the ones that have to work on Monday morning.",
    ctaPrimary: "Talk to a specialist",
    ctaSecondary: "Explore our work",
    trustLine:
      "Enterprise engineering · AI & Data · Cloud · SAP · Guidewire · Global delivery",
  },
  services: {
    eyebrow: "What we do",
    heading: "Capabilities",
    sub: "Seven things we do. Every one of them ends up in production.",
    viewService: "View service",
    pageCta: "Talk to a specialist",
    problemsEyebrow: "The problem",
    problemsHeading: "What we're usually called in for.",
    capsEyebrow: "What we do",
    capsHeading: "Capabilities",
    howEyebrow: "How we work",
    howHeading: "Strategy through operations.",
    techEyebrow: "Technologies",
    techHeading: "What we build with.",
    relatedEyebrow: "Related",
    relatedHeading: "Other capabilities.",
    ctaHeading: "Let's talk about your next project.",
    ctaSub: "Tell us what you're trying to solve. A senior member of our team will read it.",
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
    eyebrow: "Work in production",
    heading: "What we're building right now",
    items: [
      {
        tag: "Case study 01",
        date: "2026",
        client: "Enterprise software company",
        short: ["AI Help", "Chat"],
        title: "AI-assisted help, grounded in approved product knowledge",
        desc: "Their users couldn't find answers. The documentation existed, spread across systems nobody wanted to search, so people opened a support ticket instead. We built a help chat into the web app, the mobile app and the product itself. Every answer comes from documentation the company has already approved — if it isn't in there, the assistant doesn't say it. Answers come back in under a second. They expect it to absorb about 70% of routine Tier-1 tickets.",
        stack: ["RAG", "Azure AI Search", "Python API", "LLM orchestration", "Omnichannel UI"],
        outcomes: [
          "70% projected deflection of Tier-1 support tickets",
          "Near-zero hallucinations — every answer grounded in approved documentation",
          "Sub-second response times replacing manual document browsing",
          "Higher feature adoption through in-product guidance",
        ],
      },
      {
        tag: "Case study 02",
        date: "2026",
        client: "Global property-services company",
        short: ["Sales", "Intel"],
        title: "Event-driven sales intelligence for property services",
        desc: "Reps were spending an hour before every appointment, digging through the CRM, past transactions, property records and neighborhood data. Now the research runs itself the moment an appointment lands in the calendar. The rep opens a brief instead of building one. Prep went from an hour to under five minutes.",
        stack: ["Azure OpenAI", "RAG", "Python API", "Vector search", "Event-driven architecture"],
        outcomes: [
          "85% reduction in preparation time — 60 minutes to under 5",
          "20% projected increase in conversion rates",
          "100% data utilization across CRM history and neighborhood data",
          "2–3 additional high-value appointments per rep, per week",
        ],
      },
      {
        tag: "Case study 03",
        date: "2026",
        client: "Global relocation enterprise",
        short: ["Unified", "Data"],
        title: "Unified analytics for multi-country operations",
        desc: "Every region ran its own reporting. Head office had no single view, so anything cross-country got assembled by hand, late. We pulled the regional systems into one platform and put real dashboards on top. They can now see cost, client feedback and performance across every country as it happens, instead of a month later.",
        stack: ["SQL Azure", "Azure Data Lake", "Azure Data Factory", "Power BI", "C# .NET"],
        outcomes: [
          "100% real-time visibility into global operations and customer touchpoints",
          "Standardized reporting for account profitability",
          "Instant isolation of growth opportunities and weak performance areas",
        ],
      },
      {
        tag: "Case study 04",
        date: "2026",
        client: "Global consumer-electronics company",
        short: ["Cloud", "Shift"],
        title: "Cloud data migration and residency for global compliance",
        desc: "195 systems, one aging on-premise Hadoop cluster, and hardware contracts they couldn't get out of. Then CCPA arrived and US consumer data had to live somewhere the rest of the world couldn't reach. We separated the US data and rebuilt the estate on Google Cloud. Queries run three to five times faster. Feature releases go out about 20% sooner. Nodes that fail replace themselves.",
        stack: ["GCP", "Apache Spark", "Hive", "Presto", "IAM & KMS", "Auto-healing clusters"],
        outcomes: [
          "3–5× faster complex query performance",
          "25% gain in engineering productivity",
          "20.66% faster feature time-to-market",
          "Zero-downtime resilience with automated node replacement",
        ],
      },
    ],
  },
  caseStudiesPage: {
    eyebrow: "Case studies",
    heading: "Work in production",
    sub: "Real engagements, real outcomes — AI, data, and analytics systems running for global enterprises today.",
    outcomesLabel: "Outcomes",
    stackLabel: "Technology",
  },
  careers: {
    eyebrow: "Join us",
    line: "We're hiring across every team on this page.",
    cta: "View open roles",
  },
  /**
   * Careers page chrome and company-wide statements.
   *
   * The postings themselves are NOT here — they live in src/lib/careers.ts and
   * are deliberately single-language, because their wording is tied to a US
   * government filing and translating it is a decision for counsel, not for a
   * copywriter. Only the surrounding page is bilingual.
   *
   * Bracketed values below are placeholders awaiting real details.
   */
  careersPage: {
    eyebrow: "Careers",
    heading: "Open roles",
    sub: "Current openings at ZEDventures. Each posting lists what the role requires and how to apply.",
    draftNotice:
      "Draft — these postings have not been checked against the filings and the pay ranges are not final. Not for publication.",
    openCount: "open roles",
    noRoles: "No open roles right now. Send us your resume anyway and we will keep it on file.",
    viewRole: "View role",
    backToRoles: "All open roles",
    jobCodeLabel: "Job code",
    locationLabel: "Location",
    typeLabel: "Type",
    hoursLabel: "Hours",
    payLabel: "Pay range",
    payTbd: "To be confirmed",
    postedLabel: "Posted",
    sponsorshipLabel: "Visa sponsorship",
    sponsorshipYes: "Available for this role",
    sponsorshipNo: "Not available for this role",
    dutiesHeading: "What the role involves",
    requirementsHeading: "What the role requires",
    applyHeading: "How to apply",
    applyIntro: "Send your resume quoting the job title and job code.",
    applyEmailLabel: "By email",
    applyPostalLabel: "By post",
    verbatimNote:
      "This posting is reproduced as filed. Its wording is set by the filing and is not edited for style.",
    legalHeading: "Before you apply",
    legal: {
      eeoHeading: "Equal employment opportunity",
      eeo: "ZEDventures Inc. is an equal opportunity employer. We consider all qualified applicants for employment without regard to race, color, religion, sex, pregnancy, sexual orientation, gender identity or expression, national origin, ancestry, age, physical or mental disability, medical condition, genetic information, marital status, military or veteran status, or any other characteristic protected by federal, state or local law.",
      accommodationHeading: "Reasonable accommodation",
      accommodation:
        "If you need a reasonable accommodation to apply for a role or take part in our hiring process, write to [HR email] or call [phone]. Tell us what you need and we will work out an arrangement with you.",
      authHeading: "Work authorization",
      auth: "All roles require authorization to work in the United States. ZEDventures sponsors employment-based visas for some positions; each posting states whether sponsorship is available.",
      screeningHeading: "Pre-employment checks",
      screening:
        "Offers are conditional on background and reference checks. Depending on the role and the client this may include employment and education verification, criminal record, credit, motor vehicle record and drug testing. We tell you before any check is run and get your written consent first.",
      privacyHeading: "How we handle your application",
      privacy:
        "When you apply we collect the information in your resume and application — name, contact details, work history, education and anything else you choose to send. We use it to assess your application, to contact you about this and similar roles, and to meet our legal and immigration filing obligations. We keep applications for [retention period]. California residents can ask what we hold and request deletion at [privacy email].",
      fraudHeading: "Recruitment fraud",
      fraud:
        "We never ask candidates to pay a fee at any stage, and we do not ask for bank details, Social Security numbers or payment during the interview process. Every genuine message from us comes from a zedventures.com address. If something looks wrong, write to [HR email] before you reply to it.",
      agencyHeading: "Agencies and recruiters",
      agency:
        "We do not accept unsolicited resumes from agencies. Resumes sent without a signed agreement and a written request from our HR team become our property, and no fee is owed for a candidate hired from them.",
    },
  },
  contact: {
    eyebrow: "Get in touch",
    line: "Let's talk about your next project.",
    sub: "Tell us what you're trying to solve.",
    name: "Full name",
    email: "Work email",
    company: "Company",
    message: "What are you looking to build?",
    submit: "Send message",
    successTitle: "Your message is ready to send",
    successBody:
      "We've opened your email app with everything filled in. Press send there and it reaches us.",
    successFallback: "Nothing opened? Write to us directly at",
    required: "This field is required",
    invalidEmail: "Please enter a valid work email",
    page: {
      eyebrow: "Contact",
      heading: "Let's start a conversation.",
      sub: "Email or call us directly, or send a note below.",
      emailLabel: "Email",
      email: "info@zedventures.com",
      phoneLabel: "Phone",
      phone: "+1 (408) 555-0134",
      officesEyebrow: "Our offices",
      offices: [
        { city: "San Jose", region: "California, USA", address: "1762 Technology Drive, Suite 209, San Jose, CA 95110" },
        { city: "Dallas", region: "Irving, Texas, USA", address: "8629 N MacArthur Blvd, Irving, TX 75063" },
        { city: "Hyderabad", region: "Telangana, India", address: "1st Floor, Mahaveer Radiance, Opp. Metro Pillar 1708, Madhapur, Telangana 500081" },
      ],
    },
  },
  footer: {
    tagline: "Enterprise systems, built to stay up.",
    rights: "© 2026 Zedventures. All rights reserved.",
  },
  nav: {
    services: "Services",
    caseStudies: "Case Studies",
    contact: "Contact",
    about: "About",
    careers: "Careers",
    talk: "Let's talk",
  },
  about: {
    eyebrow: "About",
    heading: "Engineering built around outcomes, not slide decks.",
    sub: "[PLACEHOLDER] Replace with a short, specific positioning line about how Zed Ventures works.",
    whoEyebrow: "Who we are",
    whoHeading: "Who we are",
    whoBody:
      "[PLACEHOLDER] Replace with the company story: when Zed Ventures started, what it was built to do, and how it works today. Keep it specific and factual — no founding myths, no superlatives.",
    diffEyebrow: "What makes us different",
    diffHeading: "What makes us different",
    diffItems: [
      { title: "Engineering-first", desc: "[PLACEHOLDER] Describe what engineering-first means in practice here." },
      { title: "Senior technical leadership", desc: "[PLACEHOLDER] Describe the seniority actually on your engagements." },
      { title: "Production accountability", desc: "[PLACEHOLDER] Describe what you stay responsible for after go-live." },
      { title: "Flexible delivery", desc: "[PLACEHOLDER] Describe the engagement models you genuinely offer." },
      { title: "Global teams", desc: "[PLACEHOLDER] Describe the delivery footprint you can substantiate." },
    ],
    deliveryEyebrow: "Global delivery",
    deliveryHeading: "Where our teams are",
    deliveryBody:
      "Engineering teams in San Jose and Dallas in the United States, and in Hyderabad, India — offshore capacity with US time-zone overlap where the work needs it.",
    ctaHeading: "Talk to Zed Ventures.",
  },
  a11y: {
    switchTo: "Passer au français",
    logoAlt: "ZEDVentures logo",
    openMenu: "Open navigation menu",
    menuTitle: "Menu",
  },
};

export type Copy = typeof en;

const fr: Copy = {
  hero: {
    headline: "Intégrer l'intelligence au cœur de votre entreprise",
    subhead:
      "Nous construisons et exploitons les systèmes dont une entreprise ne peut pas se permettre la panne : IA, données, analytique, géomatique, SAP et Guidewire. Pas des maquettes — ceux qui doivent tourner lundi matin.",
    ctaPrimary: "Parler à un spécialiste",
    ctaSecondary: "Découvrir nos réalisations",
    trustLine:
      "Ingénierie d'entreprise · IA et données · Infonuagique · SAP · Guidewire · Livraison mondiale",
  },
  services: {
    eyebrow: "Ce que nous faisons",
    heading: "Expertises",
    sub: "Sept métiers. Tous finissent en production.",
    viewService: "Voir le service",
    pageCta: "Parler à un spécialiste",
    problemsEyebrow: "Le problème",
    problemsHeading: "Ce pour quoi on nous appelle.",
    capsEyebrow: "Ce que nous faisons",
    capsHeading: "Expertises",
    howEyebrow: "Notre approche",
    howHeading: "De la stratégie à l'exploitation.",
    techEyebrow: "Technologies",
    techHeading: "Ce avec quoi nous construisons.",
    relatedEyebrow: "Connexe",
    relatedHeading: "Autres expertises.",
    ctaHeading: "Parlons de votre prochain projet.",
    ctaSub: "Dites-nous ce que vous cherchez à résoudre. Un membre senior de notre équipe le lira.",
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
    eyebrow: "Du travail en production",
    heading: "Ce que nous développons en ce moment",
    items: [
      {
        tag: "Étude de cas 01",
        date: "2026",
        client: "Entreprise de logiciels",
        short: ["Aide", "IA"],
        title: "Une aide assistée par IA, ancrée dans le savoir produit approuvé",
        desc: "Leurs utilisateurs ne trouvaient pas les réponses. La documentation existait, éparpillée dans des systèmes que personne n'avait envie de fouiller ; les gens ouvraient un ticket à la place. Nous avons intégré une aide conversationnelle au site, à l'application mobile et au produit lui-même. Chaque réponse provient d'une documentation déjà approuvée par l'entreprise — si ce n'est pas écrit, l'assistant ne le dit pas. Les réponses arrivent en moins d'une seconde. Ils prévoient d'absorber ainsi environ 70 % des demandes de niveau 1 courantes.",
        stack: ["RAG", "Azure AI Search", "API Python", "Orchestration LLM", "Interface omnicanale"],
        outcomes: [
          "Déflexion projetée de 70 % des tickets de support de niveau 1",
          "Pratiquement aucune hallucination — chaque réponse ancrée dans la documentation approuvée",
          "Réponses en moins d'une seconde, sans navigation manuelle dans les documents",
          "Adoption accrue des fonctionnalités grâce au guidage intégré au produit",
        ],
      },
      {
        tag: "Étude de cas 02",
        date: "2026",
        client: "Entreprise mondiale de services immobiliers",
        short: ["Intel", "Ventes"],
        title: "Intelligence commerciale pilotée par événements pour les services immobiliers",
        desc: "Les représentants passaient une heure avant chaque rendez-vous à fouiller le CRM, l'historique des transactions, les données de propriétés et celles du quartier. Cette recherche se fait maintenant toute seule, dès qu'un rendez-vous entre au calendrier. Le représentant ouvre un dossier au lieu de le construire. La préparation est passée d'une heure à moins de cinq minutes.",
        stack: ["Azure OpenAI", "RAG", "API Python", "Recherche vectorielle", "Architecture événementielle"],
        outcomes: [
          "Réduction de 85 % du temps de préparation — de 60 minutes à moins de 5",
          "Augmentation projetée de 20 % des taux de conversion",
          "Utilisation à 100 % des données CRM et de quartier",
          "2 à 3 rendez-vous à haute valeur de plus par représentant, par semaine",
        ],
      },
      {
        tag: "Étude de cas 03",
        date: "2026",
        client: "Entreprise mondiale de déménagement",
        short: ["Données", "Unifiées"],
        title: "Analytique unifiée pour des opérations multinationales",
        desc: "Chaque région faisait ses propres rapports. Le siège n'avait aucune vue d'ensemble : tout ce qui traversait les pays était assemblé à la main, en retard. Nous avons réuni les systèmes régionaux sur une seule plateforme et posé de vrais tableaux de bord par-dessus. Ils voient maintenant les coûts, les retours clients et la performance de chaque pays au fil de l'eau, au lieu d'un mois plus tard.",
        stack: ["SQL Azure", "Azure Data Lake", "Azure Data Factory", "Power BI", "C# .NET"],
        outcomes: [
          "Visibilité en temps réel à 100 % sur les opérations mondiales et les points de contact client",
          "Rapports standardisés sur la rentabilité des comptes",
          "Identification immédiate des opportunités de croissance et des zones de faible performance",
        ],
      },
      {
        tag: "Étude de cas 04",
        date: "2026",
        client: "Multinationale de l'électronique grand public",
        short: ["Virage", "Cloud"],
        title: "Migration infonuagique et résidence des données pour la conformité mondiale",
        desc: "195 systèmes, un cluster Hadoop local vieillissant, et des contrats de matériel dont ils ne pouvaient pas sortir. Puis la CCPA est arrivée : les données des consommateurs américains devaient résider là où le reste du monde ne pouvait pas les atteindre. Nous avons séparé ces données et reconstruit l'ensemble sur Google Cloud. Les requêtes tournent trois à cinq fois plus vite. Les fonctionnalités sortent environ 20 % plus tôt. Les nœuds défaillants se remplacent tout seuls.",
        stack: ["GCP", "Apache Spark", "Hive", "Presto", "IAM & KMS", "Clusters auto-cicatrisants"],
        outcomes: [
          "Requêtes complexes 3 à 5 fois plus rapides",
          "Gain de productivité d'ingénierie de 25 %",
          "Mise sur le marché des fonctionnalités 20,66 % plus rapide",
          "Résilience sans interruption grâce au remplacement automatisé des nœuds",
        ],
      },
    ],
  },
  caseStudiesPage: {
    eyebrow: "Études de cas",
    heading: "Des réalisations en production",
    sub: "Des engagements réels, des résultats concrets — des systèmes d'IA, de données et d'analytique en production chez des entreprises mondiales.",
    outcomesLabel: "Résultats",
    stackLabel: "Technologies",
  },
  careers: {
    eyebrow: "Rejoignez-nous",
    line: "Nous recrutons dans toutes les équipes présentées sur cette page.",
    cta: "Voir les postes ouverts",
  },
  careersPage: {
    eyebrow: "Carrières",
    heading: "Postes ouverts",
    sub: "Les postes actuellement ouverts chez ZEDventures. Chaque annonce indique les exigences du poste et la façon de postuler.",
    draftNotice:
      "Brouillon — ces annonces n'ont pas été vérifiées par rapport aux dépôts officiels et les fourchettes de salaire ne sont pas définitives. Ne pas publier.",
    openCount: "postes ouverts",
    noRoles:
      "Aucun poste ouvert pour le moment. Envoyez-nous tout de même votre CV, nous le conserverons.",
    viewRole: "Voir le poste",
    backToRoles: "Tous les postes ouverts",
    jobCodeLabel: "Code du poste",
    locationLabel: "Lieu",
    typeLabel: "Type",
    hoursLabel: "Heures",
    payLabel: "Fourchette de salaire",
    payTbd: "À confirmer",
    postedLabel: "Publié le",
    sponsorshipLabel: "Parrainage de visa",
    sponsorshipYes: "Disponible pour ce poste",
    sponsorshipNo: "Non disponible pour ce poste",
    dutiesHeading: "En quoi consiste le poste",
    requirementsHeading: "Ce que le poste exige",
    applyHeading: "Comment postuler",
    applyIntro: "Envoyez votre CV en indiquant l'intitulé et le code du poste.",
    applyEmailLabel: "Par courriel",
    applyPostalLabel: "Par courrier",
    verbatimNote:
      "Cette annonce est reproduite telle qu'elle a été déposée. Sa formulation est fixée par le dépôt officiel et n'est pas retouchée.",
    legalHeading: "Avant de postuler",
    legal: {
      eeoHeading: "Égalité des chances en matière d'emploi",
      eeo: "ZEDventures Inc. souscrit au principe de l'égalité des chances en matière d'emploi. Nous étudions toutes les candidatures qualifiées sans distinction de race, couleur, religion, sexe, grossesse, orientation sexuelle, identité ou expression de genre, origine nationale, ascendance, âge, handicap physique ou mental, état de santé, information génétique, situation de famille, statut militaire ou d'ancien combattant, ni aucune autre caractéristique protégée par la loi fédérale, d'État ou locale.",
      accommodationHeading: "Aménagements raisonnables",
      accommodation:
        "Si vous avez besoin d'un aménagement raisonnable pour postuler ou participer à notre processus de recrutement, écrivez à [courriel RH] ou appelez le [téléphone]. Dites-nous ce dont vous avez besoin et nous trouverons une solution avec vous.",
      authHeading: "Autorisation de travail",
      auth: "Tous les postes exigent une autorisation de travail aux États-Unis. ZEDventures parraine des visas de travail pour certains postes ; chaque annonce précise si le parrainage est disponible.",
      screeningHeading: "Vérifications préalables à l'embauche",
      screening:
        "Toute offre est conditionnée à des vérifications d'antécédents et de références. Selon le poste et le client, cela peut inclure la vérification des emplois et diplômes, du casier judiciaire, du crédit, du dossier de conduite et un test de dépistage. Nous vous prévenons avant toute vérification et recueillons d'abord votre consentement écrit.",
      privacyHeading: "Ce que nous faisons de votre candidature",
      privacy:
        "Lorsque vous postulez, nous recueillons les informations de votre CV et de votre candidature — nom, coordonnées, parcours professionnel, formation et tout autre élément que vous choisissez de nous transmettre. Nous les utilisons pour évaluer votre candidature, vous contacter au sujet de ce poste et de postes similaires, et respecter nos obligations légales et de dépôt en matière d'immigration. Nous conservons les candidatures pendant [durée de conservation]. Les résidents de Californie peuvent demander quelles données nous détenons et en demander la suppression à [courriel confidentialité].",
      fraudHeading: "Fraude au recrutement",
      fraud:
        "Nous ne demandons jamais de frais aux candidats, à aucune étape, et nous ne demandons ni coordonnées bancaires, ni numéro de sécurité sociale, ni paiement pendant le processus d'entretien. Tout message authentique de notre part provient d'une adresse zedventures.com. Si quelque chose vous semble anormal, écrivez à [courriel RH] avant de répondre.",
      agencyHeading: "Agences et recruteurs",
      agency:
        "Nous n'acceptons pas les CV non sollicités provenant d'agences. Les CV envoyés sans accord signé et sans demande écrite de notre équipe RH deviennent notre propriété, et aucun honoraire n'est dû pour un candidat recruté à partir de ceux-ci.",
    },
  },
  contact: {
    eyebrow: "Contactez-nous",
    line: "Parlons de votre prochain projet.",
    sub: "Dites-nous ce que vous cherchez à résoudre.",
    name: "Nom complet",
    email: "Courriel professionnel",
    company: "Entreprise",
    message: "Que souhaitez-vous réaliser?",
    submit: "Envoyer le message",
    successTitle: "Votre message est prêt à être envoyé",
    successBody:
      "Nous avons ouvert votre application de courriel avec le message déjà rempli. Envoyez-le et il nous parviendra.",
    successFallback: "Rien ne s'est ouvert? Écrivez-nous directement à",
    required: "Ce champ est requis",
    invalidEmail: "Veuillez saisir un courriel professionnel valide",
    page: {
      eyebrow: "Contact",
      heading: "Démarrons la conversation.",
      sub: "Écrivez-nous ou appelez-nous directement, ou laissez un message ci-dessous.",
      emailLabel: "Courriel",
      email: "info@zedventures.com",
      phoneLabel: "Téléphone",
      phone: "+1 (408) 555-0134",
      officesEyebrow: "Nos bureaux",
      offices: [
        { city: "San Jose", region: "Californie, États-Unis", address: "1762 Technology Drive, Suite 209, San Jose, CA 95110" },
        { city: "Dallas", region: "Irving, Texas, États-Unis", address: "8629 N MacArthur Blvd, Irving, TX 75063" },
        { city: "Hyderabad", region: "Telangana, Inde", address: "1st Floor, Mahaveer Radiance, Opp. Metro Pillar 1708, Madhapur, Telangana 500081" },
      ],
    },
  },
  footer: {
    tagline: "Des systèmes d'entreprise conçus pour tenir.",
    rights: "© 2026 Zedventures. Tous droits réservés.",
  },
  nav: {
    services: "Expertises",
    caseStudies: "Études de cas",
    contact: "Contact",
    about: "À propos",
    careers: "Carrières",
    talk: "Parlons-en",
  },
  about: {
    eyebrow: "À propos",
    heading: "Une ingénierie construite autour des résultats, pas des présentations.",
    sub: "[ESPACE RÉSERVÉ] À remplacer par une ligne de positionnement courte et précise.",
    whoEyebrow: "Qui nous sommes",
    whoHeading: "Qui nous sommes",
    whoBody:
      "[ESPACE RÉSERVÉ] À remplacer par l'histoire de l'entreprise : sa création, sa raison d'être et son fonctionnement actuel. Rester précis et factuel.",
    diffEyebrow: "Ce qui nous distingue",
    diffHeading: "Ce qui nous distingue",
    diffItems: [
      { title: "L'ingénierie d'abord", desc: "[ESPACE RÉSERVÉ] Décrire ce que cela signifie concrètement." },
      { title: "Direction technique senior", desc: "[ESPACE RÉSERVÉ] Décrire la séniorité réellement affectée aux mandats." },
      { title: "Responsabilité en production", desc: "[ESPACE RÉSERVÉ] Décrire ce dont vous restez responsable après la mise en service." },
      { title: "Livraison flexible", desc: "[ESPACE RÉSERVÉ] Décrire les modèles d'engagement réellement offerts." },
      { title: "Équipes mondiales", desc: "[ESPACE RÉSERVÉ] Décrire la présence que vous pouvez démontrer." },
    ],
    deliveryEyebrow: "Livraison mondiale",
    deliveryHeading: "Où sont nos équipes",
    deliveryBody:
      "Des équipes d'ingénierie à San Jose et à Dallas aux États-Unis, ainsi qu'à Hyderabad, en Inde — une capacité délocalisée avec chevauchement horaire américain là où le travail l'exige.",
    ctaHeading: "Parlons-en.",
  },
  a11y: {
    switchTo: "Switch to English",
    logoAlt: "Logo ZEDVentures",
    openMenu: "Ouvrir le menu de navigation",
    menuTitle: "Menu",
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

  // Keep <html lang> in step with the rendered copy on every path — including
  // the restore-from-storage path above, which previously left it at "en".
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("zv-lang", l);
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
