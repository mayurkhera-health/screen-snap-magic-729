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
    // "Why join us" strip. Every line is a PLACEHOLDER: these have to be claims
    // that hold across every location and every role, and they cannot be
    // invented. Replace before launch or delete the section.
    whyEyebrow: "Why join us",
    whyHeading: "What working here is actually like",
    why: [
      { title: "[PLACEHOLDER — reason one]", body: "[PLACEHOLDER — one line, roughly 90 characters, true of every role and every location.]" },
      { title: "[PLACEHOLDER — reason two]", body: "[PLACEHOLDER — one line, roughly 90 characters, true of every role and every location.]" },
      { title: "[PLACEHOLDER — reason three]", body: "[PLACEHOLDER — one line, roughly 90 characters, true of every role and every location.]" },
    ],
    legalHelper: "The terms that apply to every role here. Open any item to read it.",
    expand: "Show",
    collapse: "Hide",
    legalHeading: "Before you apply",
    legal: {
      benefitsHeading: "Benefits",
      benefits:
        "Eligible employees receive medical, dental and vision coverage, a 401(k) retirement plan, paid time off and paid holidays. Eligibility, cost and what each plan covers depend on the role, the location and the hours worked, and are governed by the plan documents in effect at the time. We go through the details that apply to your role before you accept an offer.",
      eeoHeading: "Equal employment opportunity",
      eeo: "ZEDventures Inc. is an equal opportunity employer. We consider all qualified applicants for employment without regard to race, color, religion, sex, pregnancy, sexual orientation, gender identity or expression, national origin, ancestry, age, physical or mental disability, medical condition, genetic information, marital status, military or veteran status, or any other characteristic protected by federal, state or local law.",
      accommodationHeading: "Reasonable accommodation",
      accommodation:
        "If you need a reasonable accommodation to apply for a role or to take part in our hiring process — including a way to send us your application other than by post — write to hr@zedventures.com. Tell us what you need and we will work out an arrangement with you.",
      authHeading: "Work authorization",
      auth: "All roles require authorization to work in the United States. ZEDventures sponsors employment-based visas for some positions; each posting states whether sponsorship is available.",
      screeningHeading: "Pre-employment checks",
      screening:
        "Offers are conditional on background and reference checks. Depending on the role and the client this may include employment and education verification, criminal record, credit, motor vehicle record and drug testing. We tell you before any check is run and get your written consent first.",
      privacyHeading: "How we handle your application",
      privacy:
        "When you apply we collect the information in your resume and application — name, contact details, work history, education and anything else you choose to send. We use it to assess your application, to contact you about this and similar roles, and to meet our legal and immigration filing obligations. We keep applications for [retention period]. California residents can ask what we hold and request deletion at [privacy email].",
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
    sending: "Sending…",
    sentTitle: "Message sent",
    sentBody: "Thanks — it reached us. Someone will read it and reply to the address you gave.",
    sendFailedTitle: "That didn't go through",
    sendFailedBody: "Something went wrong on our side, so nothing was sent. Your message hasn't been lost — try again, or send it by email instead and it will come with you.",
    retry: "Try again",
    openMail: "Send it by email instead",
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
      phone: "+1 (408) 829-7029",
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
    exploreHeading: "Explore",
    companyHeading: "Company",
    legalHeading: "Legal",
    privacy: "Privacy policy",
    terms: "Terms of use",
  },
  /**
   * Privacy and Terms.
   *
   * PLACEHOLDER BODIES. Section headings are the ones a US company's policies
   * normally carry, so the structure is right and the routes are real, but every
   * body is a bracketed marker. A privacy policy is a statement about what a
   * company actually does with data — retention, processors, whether GDPR
   * applies through the French side of this site — and none of that can be
   * written from outside the company. Both pages are noindex and carry a draft
   * banner until the markers are gone.
   */
  legalPages: {
    lastUpdatedLabel: "Last updated",
    lastUpdated: "[PLACEHOLDER — date]",
    draftNotice:
      "Draft — every section below is a placeholder. These pages must be reviewed by counsel before publication.",
    privacy: {
      eyebrow: "Legal",
      heading: "Privacy policy",
      sub: "What this site collects, who it reaches, and how long we keep it.",
      sections: [
        { heading: "Who we are", body: "ZEDventures Inc. runs this website and decides how the information described below is used. Our offices are at 1762 Technology Drive, San Jose, California; 8629 N MacArthur Blvd, Irving, Texas; and Mahaveer Radiance, Madhapur, Telangana, India. Questions about this policy go to [privacy contact — confirm which address]. [CONFIRM — the exact registered legal entity name and address.]" },
        { heading: "What we collect, and only when you give it", body: "This site has no analytics, no advertising tags and no tracking pixels of any kind. Nothing is recorded about you simply for visiting. We hold personal information in two situations. If you send the contact form: your name, work email, company and whatever you write in the message. If you apply for a role: your resume and anything else you choose to send by email or by post." },
        { heading: "Cookies", body: "This site sets no cookies. It stores one thing in your browser — your choice of English or French, under the name \"zv-lang\" — so the site opens in the language you picked last time. That never leaves your device, is not an identifier, and clearing your browser data removes it." },
        { heading: "Why we use it", body: "Contact form messages are used to answer you and to discuss the work you are asking about. Job applications are used to assess you for the role you applied to, for similar roles we think may fit, and to meet the record-keeping our immigration filings require. We do not sell personal information, and we do not share it for cross-context behavioural advertising." },
        { heading: "Who else sees it", body: "Our website host, which keeps standard server logs including IP addresses. Our email provider, which delivers contact form messages to us. Google Fonts, which serves the typeface on this site — your browser requests the font files from Google directly, so Google receives your IP address on every page load. That is a normal part of how the site is built, but it is a transfer, so it is named here. [CONFIRM — any CRM, applicant tracking system or recruiting platform that receives this data, since those are not visible from the site itself.]" },
        { heading: "How long we keep it", body: "[CONFIRM — retention period for contact form enquiries.] [CONFIRM — retention period for job applications. The careers page states a period, and the two must match.] Records we are required to retain for immigration filings are kept for the period the relevant regulations require." },
        { heading: "Your rights", body: "If you live in California, the CCPA and CPRA give you the right to know what personal information we hold about you, to have it deleted, to correct it, and not to be discriminated against for asking. Job applicants have these rights too. Write to [privacy contact] and we will respond within the time the law allows. [CONFIRM WITH COUNSEL — whether GDPR applies through the French-language version of this site, and if so add the lawful basis for each purpose above and the right to lodge a complaint with a supervisory authority.]" },
        { heading: "Children", body: "This site is aimed at businesses and is not directed at children. We do not knowingly collect information from anyone under 16." },
        { heading: "Changes to this policy", body: "If this policy changes we will update the date at the top of this page. Material changes will be described here rather than made quietly." },
      ],
    },
    terms: {
      eyebrow: "Legal",
      heading: "Terms of use",
      sub: "The terms that apply to visitors of this website.",
      sections: [
        { heading: "Acceptance", body: "[PLACEHOLDER — that using the site means accepting these terms.]" },
        { heading: "Use of this site", body: "[PLACEHOLDER — permitted and prohibited use.]" },
        { heading: "Intellectual property", body: "[PLACEHOLDER — ownership of the content, marks and code on this site.]" },
        { heading: "No professional advice", body: "[PLACEHOLDER — that material here is general information, not engineering, legal or financial advice, and that engagements are governed by their own signed agreements.]" },
        { heading: "Third-party links", body: "[PLACEHOLDER — disclaimer for sites linked from here.]" },
        { heading: "Disclaimers and liability", body: "[PLACEHOLDER — warranty disclaimer and limitation of liability. Counsel should write this one, not a template.]" },
        { heading: "Governing law", body: "[PLACEHOLDER — governing law and venue.]" },
        { heading: "Contact", body: "[PLACEHOLDER — where questions about these terms go.]" },
      ],
    },
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
    whyEyebrow: "Pourquoi nous rejoindre",
    whyHeading: "Ce que c'est de travailler ici",
    why: [
      { title: "[ESPACE RÉSERVÉ — raison une]", body: "[ESPACE RÉSERVÉ — une ligne, environ 90 caractères, vraie pour chaque poste et chaque site.]" },
      { title: "[ESPACE RÉSERVÉ — raison deux]", body: "[ESPACE RÉSERVÉ — une ligne, environ 90 caractères, vraie pour chaque poste et chaque site.]" },
      { title: "[ESPACE RÉSERVÉ — raison trois]", body: "[ESPACE RÉSERVÉ — une ligne, environ 90 caractères, vraie pour chaque poste et chaque site.]" },
    ],
    legalHelper: "Les conditions qui s'appliquent à tous les postes. Ouvrez un élément pour le lire.",
    expand: "Afficher",
    collapse: "Masquer",
    legalHeading: "Avant de postuler",
    legal: {
      benefitsHeading: "Avantages sociaux",
      benefits:
        "Les employés éligibles bénéficient d'une couverture médicale, dentaire et optique, d'un plan de retraite 401(k), de congés payés et de jours fériés payés. L'éligibilité, le coût et l'étendue de chaque régime dépendent du poste, du lieu et du nombre d'heures travaillées, et sont régis par les documents du régime en vigueur. Nous passons en revue les modalités qui s'appliquent à votre poste avant que vous n'acceptiez une offre.",
      eeoHeading: "Égalité des chances en matière d'emploi",
      eeo: "ZEDventures Inc. souscrit au principe de l'égalité des chances en matière d'emploi. Nous étudions toutes les candidatures qualifiées sans distinction de race, couleur, religion, sexe, grossesse, orientation sexuelle, identité ou expression de genre, origine nationale, ascendance, âge, handicap physique ou mental, état de santé, information génétique, situation de famille, statut militaire ou d'ancien combattant, ni aucune autre caractéristique protégée par la loi fédérale, d'État ou locale.",
      accommodationHeading: "Aménagements raisonnables",
      accommodation:
        "Si vous avez besoin d'un aménagement raisonnable pour postuler ou participer à notre processus de recrutement — y compris un autre moyen que le courrier postal pour nous envoyer votre candidature — écrivez à hr@zedventures.com. Dites-nous ce dont vous avez besoin et nous trouverons une solution avec vous.",
      authHeading: "Autorisation de travail",
      auth: "Tous les postes exigent une autorisation de travail aux États-Unis. ZEDventures parraine des visas de travail pour certains postes ; chaque annonce précise si le parrainage est disponible.",
      screeningHeading: "Vérifications préalables à l'embauche",
      screening:
        "Toute offre est conditionnée à des vérifications d'antécédents et de références. Selon le poste et le client, cela peut inclure la vérification des emplois et diplômes, du casier judiciaire, du crédit, du dossier de conduite et un test de dépistage. Nous vous prévenons avant toute vérification et recueillons d'abord votre consentement écrit.",
      privacyHeading: "Ce que nous faisons de votre candidature",
      privacy:
        "Lorsque vous postulez, nous recueillons les informations de votre CV et de votre candidature — nom, coordonnées, parcours professionnel, formation et tout autre élément que vous choisissez de nous transmettre. Nous les utilisons pour évaluer votre candidature, vous contacter au sujet de ce poste et de postes similaires, et respecter nos obligations légales et de dépôt en matière d'immigration. Nous conservons les candidatures pendant [durée de conservation]. Les résidents de Californie peuvent demander quelles données nous détenons et en demander la suppression à [courriel confidentialité].",
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
    sending: "Envoi en cours…",
    sentTitle: "Message envoyé",
    sentBody: "Merci — nous l'avons bien reçu. Quelqu'un le lira et répondra à l'adresse indiquée.",
    sendFailedTitle: "L'envoi a échoué",
    sendFailedBody: "Un problème de notre côté : rien n'a été envoyé. Votre message n'est pas perdu — réessayez, ou envoyez-le par courriel et il vous suivra.",
    retry: "Réessayer",
    openMail: "Envoyer par courriel à la place",
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
      phone: "+1 (408) 829-7029",
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
    exploreHeading: "Explorer",
    companyHeading: "Entreprise",
    legalHeading: "Mentions légales",
    privacy: "Politique de confidentialité",
    terms: "Conditions d'utilisation",
  },
  legalPages: {
    lastUpdatedLabel: "Dernière mise à jour",
    lastUpdated: "[ESPACE RÉSERVÉ — date]",
    draftNotice:
      "Brouillon — chaque section ci-dessous est un espace réservé. Ces pages doivent être revues par un conseil juridique avant publication.",
    privacy: {
      eyebrow: "Mentions légales",
      heading: "Politique de confidentialité",
      sub: "Ce que ce site recueille, qui y a accès et combien de temps nous le conservons.",
      sections: [
        { heading: "Qui nous sommes", body: "ZEDventures Inc. exploite ce site et décide de l'usage des informations décrites ci-dessous. Nos bureaux se trouvent au 1762 Technology Drive, San Jose, Californie ; au 8629 N MacArthur Blvd, Irving, Texas ; et à Mahaveer Radiance, Madhapur, Telangana, Inde. Pour toute question : [contact confidentialité — à confirmer]. [À CONFIRMER — la dénomination et l'adresse exactes de l'entité juridique.]" },
        { heading: "Ce que nous recueillons, et uniquement si vous le fournissez", body: "Ce site n'utilise aucun outil de mesure d'audience, aucune balise publicitaire et aucun pixel de suivi. Rien n'est enregistré à votre sujet du seul fait de votre visite. Nous détenons des données personnelles dans deux cas. Si vous utilisez le formulaire de contact : vos nom, adresse professionnelle, société et le contenu de votre message. Si vous postulez : votre CV et tout autre élément que vous nous envoyez par courriel ou par courrier." },
        { heading: "Cookies", body: "Ce site ne dépose aucun cookie. Il conserve une seule information dans votre navigateur — votre choix entre le français et l'anglais, sous le nom « zv-lang » — afin d'ouvrir le site dans la langue choisie la dernière fois. Cette information ne quitte jamais votre appareil, ne constitue pas un identifiant, et disparaît si vous effacez les données de votre navigateur." },
        { heading: "Pourquoi nous les utilisons", body: "Les messages du formulaire de contact servent à vous répondre et à discuter du projet évoqué. Les candidatures servent à évaluer votre profil pour le poste visé, pour des postes similaires susceptibles de vous convenir, et à respecter les obligations de conservation liées à nos dépôts en matière d'immigration. Nous ne vendons pas de données personnelles et ne les partageons pas à des fins de publicité comportementale." },
        { heading: "Qui d'autre y a accès", body: "Notre hébergeur, qui conserve des journaux serveur standard incluant les adresses IP. Notre prestataire de messagerie, qui nous transmet les messages du formulaire. Google Fonts, qui fournit la police de caractères du site — votre navigateur télécharge les fichiers de police directement auprès de Google, qui reçoit donc votre adresse IP à chaque chargement de page. Cela relève de la construction du site, mais il s'agit d'un transfert : il est donc mentionné ici. [À CONFIRMER — tout CRM, ATS ou plateforme de recrutement recevant ces données, non visibles depuis le site.]" },
        { heading: "Durée de conservation", body: "[À CONFIRMER — durée de conservation des demandes reçues via le formulaire.] [À CONFIRMER — durée de conservation des candidatures. La page carrières annonce une durée : les deux doivent concorder.] Les documents que nous devons conserver au titre des dépôts d'immigration le sont pour la durée exigée par la réglementation applicable." },
        { heading: "Vos droits", body: "Si vous résidez en Californie, le CCPA et le CPRA vous donnent le droit de savoir quelles données nous détenons, d'en demander la suppression ou la rectification, et de ne pas subir de traitement défavorable pour avoir exercé ces droits. Les candidats en bénéficient également. Écrivez à [contact confidentialité] et nous répondrons dans le délai prévu par la loi. [À CONFIRMER AVEC UN CONSEIL JURIDIQUE — si le RGPD s'applique du fait de la version française de ce site, et le cas échéant ajouter la base légale de chaque finalité ci-dessus ainsi que le droit d'introduire une réclamation auprès d'une autorité de contrôle.]" },
        { heading: "Enfants", body: "Ce site s'adresse aux entreprises et non aux enfants. Nous ne recueillons pas sciemment de données concernant des personnes de moins de 16 ans." },
        { heading: "Modifications", body: "En cas de modification, nous mettrons à jour la date figurant en haut de cette page. Les changements importants y seront décrits plutôt qu'apportés discrètement." },
      ],
    },
    terms: {
      eyebrow: "Mentions légales",
      heading: "Conditions d'utilisation",
      sub: "Les conditions applicables aux visiteurs de ce site.",
      sections: [
        { heading: "Acceptation", body: "[ESPACE RÉSERVÉ — l'utilisation du site vaut acceptation des présentes conditions.]" },
        { heading: "Utilisation du site", body: "[ESPACE RÉSERVÉ — usages autorisés et interdits.]" },
        { heading: "Propriété intellectuelle", body: "[ESPACE RÉSERVÉ — propriété du contenu, des marques et du code de ce site.]" },
        { heading: "Absence de conseil professionnel", body: "[ESPACE RÉSERVÉ — le contenu est une information générale et non un conseil technique, juridique ou financier ; les prestations sont régies par leurs propres contrats signés.]" },
        { heading: "Liens de tiers", body: "[ESPACE RÉSERVÉ — clause de non-responsabilité pour les sites liés depuis celui-ci.]" },
        { heading: "Garanties et responsabilité", body: "[ESPACE RÉSERVÉ — exclusion de garanties et limitation de responsabilité. À rédiger par un conseil juridique, pas à partir d'un modèle.]" },
        { heading: "Droit applicable", body: "[ESPACE RÉSERVÉ — droit applicable et juridiction compétente.]" },
        { heading: "Contact", body: "[ESPACE RÉSERVÉ — où adresser les questions relatives aux présentes conditions.]" },
      ],
    },
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
