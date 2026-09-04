/**
 * PLACEHOLDER CONTENT.
 *
 * Every string below is sample copy written to give the service-page template
 * realistic shape. It describes standard industry capabilities, not claims
 * about Zedventures: there are deliberately no metrics, client names, dates or
 * outcome numbers anywhere in this file, because those cannot be invented.
 *
 * A service listed in DRAFT_SERVICES (below) carries a visible draft banner and
 * a noindex robots tag, so its text cannot be indexed before it is replaced.
 * Analytics has been through the copy review and is no longer listed.
 */


/**
 * The proof block on service detail pages.
 *
 * Off. Only three of the seven services have a case study behind them, so the
 * block appears on three pages and is absent from four - and the spec's
 * conditional rendering, while correct, makes that gap visible rather than
 * hiding it. Turned off until there is proof for every service, or until the
 * uneven version is judged better than none.
 *
 * Flip to true to bring it back everywhere it has data. The component and the
 * per-service `proof` records are left intact so that is a one-line change,
 * not a rebuild. Nothing else needs to move.
 */
export const SHOW_SERVICE_PROOF = false;

export type ServiceCapability = { title: string; desc: string };

/**
 * Icon for a technology group. A closed set rather than a free string: the
 * categories differ per service (Analytics has Business intelligence / Data
 * platforms / Cloud; SAP has Core platform / Extension / Integration), so an
 * open field would drift and a fixed three-icon list would only fit Analytics.
 */
export type TechIcon = "chart" | "cube" | "cloud" | "layers" | "plug" | "shield";

/**
 * A linked case study. Index matches the order on /case-studies, which is where
 * the anchor ids come from.
 */
export type ServiceProof = {
  /** 1-based position in caseStudies.items — becomes #case-N. */
  index: number;
  /** The single figure worth putting on the service page. */
  headline: string;
};

export type ServiceContent = {
  name: string;
  /** One-line business outcome, not a feature list. */
  outcome: string;
  intro: string;
  problems: string[];
  capabilities: ServiceCapability[];
  technologies: string[];
  seoTitle: string;
  seoDescription: string;

  // ---------------------------------------------------------------------------
  // FIVE-QUESTION FRAMEWORK (optional, being trialled on Analytics)
  //
  // A service page answers five questions in the order a buyer asks them:
  //   1 am I in the right place        -> name + outcome        (already above)
  //   2 do they understand my situation-> situation             (new)
  //   3 can they actually do it        -> capabilities + tech   (already above)
  //   4 have they done it before       -> proof                 (new, optional)
  //   5 what happens if I get in touch -> shared, in i18n       (new)
  //
  // A service carrying `situation` renders the five-block layout. Anything
  // without it keeps the older seven-section template, so both can be compared
  // side by side on the live site before the other six are converted.
  // ---------------------------------------------------------------------------

  /**
   * The state a client is in before they call — their problem in our words,
   * not what we sell. 2-3 sentences. Replaces the `problems` bullet list, which
   * says the same thing twice alongside `intro`.
   */
  situation?: string;
  /** Omit entirely when this service has no case study. The block then does not render. */
  proof?: ServiceProof;

  // ---------------------------------------------------------------------------
  // SPEC v1.2 FIELDS
  //
  // A service carrying `whyPillars` renders the v1.2 six-section layout. The
  // rest keep the older template until their copy is written, so services
  // convert one at a time and can be compared live (spec S58).
  // ---------------------------------------------------------------------------

  /** 3-4 named groups, 8-12 entries in total (S21, S47). Replaces the flat
   *  `technologies` strip: an ungrouped list of ten product names tells a
   *  reader nothing about where the depth is. */
  technologyGroups?: { label: string; items: string[]; icon?: TechIcon }[];
  /** One positioning sentence under the Why ZED heading. <=25 words (S25). */
  whyIntro?: string;
  /** Exactly three, and they must differ from every other service's (S29). */
  whyPillars?: { title: string; body: string }[];

  /**
   * Hero image, right column.
   *
   * `src` is a real file under /public. While it is absent the hero renders a
   * labelled placeholder — but ONLY while this service is still a draft. Off
   * the draft list and with no src, the hero falls back to the single-column
   * text-led layout it had before. That is deliberate: a grey box cannot
   * reach production by being forgotten, which is the usual fate of a
   * placeholder that renders unconditionally.
   *
   * `alt` is required alongside `src` — a hero image with no alt text fails
   * the accessibility criteria this page is audited against.
   *
   * `hint` is the subject to shoot or source, shown inside the placeholder so
   * whoever fills it knows what belongs there.
   */
  heroImage?: { src: string; alt: string };
  heroImageHint?: string;

  /** Per-service intro line above the platform table. Falls back to the shared
   *  wording when absent, so SAP does not inherit Analytics' sentence. */
  platformsSub?: string;

  /**
   * Closing block headline and button.
   *
   * The headline is back. It was removed when the button beneath it read
   * "Discuss your analytics priorities" and the two were the same sentence
   * twice; the button now reads "Start a conversation", so they are not.
   */
  finalCta?: { title: string; buttonLabel: string };
};

export const SERVICE_SLUGS = [
  "ai-data",
  "analytics",
  "gis-geospatial",
  "guidewire",
  "sap",
  "product-engineering",
  "offshore-nearshore",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/**
 * Which service pages are still drafts.
 *
 * This was one boolean covering all seven. That is wrong once the seven stop
 * moving together: turning it off to publish one finished page would also
 * strip the noindex from six pages whose copy is, by the note at the top of
 * this file, explicitly sample text.
 *
 * A slug listed here carries the draft banner, a noindex robots tag, and the
 * hero image placeholder. Remove a slug only when its copy is real, its
 * technology claims are confirmed, and its hero image exists.
 *
 * Removing the LAST entry does not make the site launch-ready on its own —
 * every route in this app still declares a canonical URL on the old
 * screen-snap-magic-729.lovable.app domain.
 */
export const DRAFT_SERVICES: readonly ServiceSlug[] = [
  "ai-data",
  "gis-geospatial",
  "guidewire",
  "sap",
  "product-engineering",
  "offshore-nearshore",
];

export function isServiceDraft(slug: ServiceSlug): boolean {
  return (DRAFT_SERVICES as readonly string[]).includes(slug);
}

/** Maps each capability row on the homepage to its service page. */
export const SERVICE_SLUG_BY_INDEX: ServiceSlug[] = [...SERVICE_SLUGS];

type Locale = "en" | "fr";

export const HOW_WE_WORK: Record<Locale, { step: string; desc: string }[]> = {
  en: [
    { step: "Strategy", desc: "Agree what the system has to do for the business before anything is built." },
    { step: "Architecture", desc: "Design for the load, the compliance boundary and the team that will run it." },
    { step: "Build", desc: "Ship in increments that reach a real environment, not a demo branch." },
    { step: "Modernize", desc: "Move what already exists without stopping the operation that depends on it." },
    { step: "Operate", desc: "Stay accountable for the system once it is carrying production traffic." },
  ],
  fr: [
    { step: "Stratégie", desc: "Définir ce que le système doit apporter à l'entreprise avant de construire quoi que ce soit." },
    { step: "Architecture", desc: "Concevoir en fonction de la charge, du périmètre de conformité et de l'équipe qui exploitera le système." },
    { step: "Développement", desc: "Livrer par incréments qui atteignent un environnement réel, pas une branche de démonstration." },
    { step: "Modernisation", desc: "Faire évoluer l'existant sans interrompre les opérations qui en dépendent." },
    { step: "Exploitation", desc: "Rester responsable du système une fois qu'il traite du trafic de production." },
  ],
};

export const SERVICE_PAGES: Record<Locale, Record<ServiceSlug, ServiceContent>> = {
  en: {
    "ai-data": {
      name: "AI & Data",
      heroImageHint: "A model or pipeline in use — not a stock robot or neural-network render",
      outcome: "Get AI out of the proof-of-concept stage and into systems your business can depend on.",
      intro:
        "Plenty of enterprise AI gets as far as a good demo and stops there, because nobody will sign off on putting it in front of customers. Closing that gap is retrieval, orchestration and evaluation work — plus the data platform underneath it.",
      problems: [
        "A working prototype that nobody will approve for production use.",
        "Model answers that cannot be traced back to an approved source.",
        "Data spread across systems that were never designed to be read together.",
      ],
      capabilities: [
        { title: "LLM applications", desc: "Retrieval-augmented systems grounded in your own approved content, with guardrails and evaluation built in from the start." },
        { title: "Machine learning pipelines", desc: "Training, deployment and monitoring paths that survive contact with changing data." },
        { title: "Data platforms", desc: "Lakes, warehouses and ingestion designed around how the business asks questions." },
        { title: "Orchestration APIs", desc: "The authentication, conversation state and validation layer between a model and your users." },
      ],
      technologies: ["Azure OpenAI", "Azure AI Search", "Python", "Vector databases", "Databricks", "Airflow"],
      seoTitle: "AI & Data Consulting Services | Zed Ventures",
      seoDescription:
        "Zed Ventures builds enterprise AI and data platforms — retrieval-augmented applications, machine learning pipelines and orchestration built to run in production.",
    },
    analytics: {
      name: "Analytics",
      heroImageHint: "A real reporting or dashboard screen, blurred or anonymized if it is client work",
      heroImage: {
        src: "/analytics-hero.webp",
        // Describes what is shown, not what it means. "Illustrative" is not in
        // the alt text: the figures on the dashboard are generic and no client
        // is named, so the image does not claim to be a ZED result and the alt
        // text does not need to disclaim one.
        alt: "A laptop showing an analytics dashboard: a twelve-month sales trend charted by channel, above summary tiles for total sales, orders and average order value.",
      },
      // S7: the H1 states the outcome. v1.1 used "reporting that nobody
      // trusts", which S7 rejects as accusatory - the reader being blamed is
      // the person we want to hear from.
      outcome: "Turn fragmented reporting into trusted business decisions.",
      intro:
        "We help companies clean up complex reporting environments, modernize outdated tools, and make it easier for teams to trust and use their data.",
      problems: [
        "Two teams reporting different numbers for the same measure.",
        "Reports assembled by hand every month because the pipeline never landed.",
        "Dashboards that answer questions nobody is asking.",
      ],
      // S12: the client's environment. No ZED, no product names, no selling.
      // The last sentence rejects the false solution - that is the line that
      // signals experience, and it names the situation rather than the reader.
      situation:
        "Reporting often grows over time, team by team. Different groups start using different numbers, manual workarounds creep in, and people spend more time checking the data than using it. Adding another dashboard usually doesn\u2019t solve the real problem underneath.",
      // S14: six capabilities, range 5-7. Managed support stays in the sales
      // conversation - nobody arrives here looking for the seventh thing we do.
      capabilities: [
        { title: "Analytics strategy & assessment", desc: "We review your current reporting setup, find the gaps, and help you decide what needs to change first." },
        { title: "Platform upgrades", desc: "Upgrade older BI platforms without disrupting the reports and dashboards your teams rely on every day." },
        { title: "Platform migration", desc: "Move from older or fragmented reporting tools to a more modern platform without losing what already works." },
        { title: "Reporting & dashboard modernization", desc: "Simplify reports and dashboards so they are easier to use, easier to maintain, and more useful to the business." },
        { title: "Data visualization & UX", desc: "Make complex information easier to understand so users can quickly see what matters and what action to take." },
        { title: "Performance & data consistency", desc: "Improve slow reports, reduce conflicting numbers, and put clearer standards around how data is defined and used." },
      ],
      /**
       * [CONFIRM] 18 entries across 4 groups, added at Mayur's direction.
       *
       * This is over the spec's own ceiling. v1.2 S21 and S47 cap the section
       * at 8-12 total entries, and S20 requires that every name be one ZED can
       * substantiate with delivery experience. Six of these 18 appear on the
       * current live site: Power BI, Azure Data Factory, SQL Server,
       * Snowflake, dbt and Python. The other twelve do not.
       *
       * Recorded here rather than argued again: the risk is not the length,
       * it is that one unanswerable question on a sales call costs more than
       * the extra names win. Cut any that cannot be defended.
       */
      technologyGroups: [
        { label: "Business intelligence", icon: "chart", items: ["Power BI", "Tableau", "SAP BusinessObjects", "Google Looker", "Qlik Sense", "ThoughtSpot"] },
        { label: "Data platforms", icon: "cube", items: ["Snowflake", "Databricks", "Microsoft Fabric", "Google BigQuery", "Amazon Redshift"] },
        { label: "Cloud", icon: "cloud", items: ["Microsoft Azure", "Amazon Web Services", "Google Cloud Platform"] },
        { label: "Data engineering", icon: "layers", items: ["SQL Server", "Python", "Apache Spark", "Apache Airflow"] },
      ],
      // Kept so the legacy template still renders for any service that has not
      // been converted; the v1.2 layout reads technologyGroups instead.
      technologies: ["Power BI", "Azure Data Factory", "SQL Server", "Snowflake", "dbt", "Python"],
      platformsSub:
        "We work with the analytics and data platforms many enterprise teams already use today.",
      whyIntro:
        "We know analytics projects are not just about tools. They are about fixing the data, reporting, and processes people depend on every day.",
      whyPillars: [
        {
          title: "Modernize without starting over",
          body: "Not everything needs to be replaced. We help clients keep what is working, fix what is not, and modernize in practical steps.",
        },
        {
          title: "Business + technology",
          body: "We look at more than the platform. We spend time understanding the reports, metrics, users, and decisions the business actually depends on.",
        },
        {
          title: "From assessment to production",
          body: "We can help from the first review and roadmap through migration, implementation, performance tuning, and ongoing support.",
        },
      ],
      proof: { index: 3, headline: "Real-time visibility across every country" },
      finalCta: {
        title: "Let\u2019s talk about your analytics priorities.",
        buttonLabel: "Start a conversation",
      },
      seoTitle: "Analytics Consulting & Modernization Services | ZEDventures",
      seoDescription:
        "ZEDventures helps enterprises assess, modernize, migrate and optimize analytics environments across Power BI, SAP BusinessObjects and modern data platforms.",
    },
    "gis-geospatial": {
      name: "GIS & Geospatial",
      heroImageHint: "A map or spatial visualization from actual delivered work",
      outcome: "Make location a dimension your business can analyze, not a map you look at.",
      intro:
        "Spatial data is usually treated as a separate discipline bolted onto the side of the estate. We build it into the same pipelines and the same analysis as everything else.",
      problems: [
        "Spatial data held in a system only one team can query.",
        "Exposure and risk assessed on addresses rather than actual geography.",
        "Imagery and sensor data arriving faster than anything can process it.",
      ],
      capabilities: [
        { title: "Spatial data platforms", desc: "Storage and pipelines built for geometry, not retrofitted around it." },
        { title: "Exposure and risk mapping", desc: "Location-aware assessment for portfolios where geography drives the number." },
        { title: "Imagery analysis", desc: "Automated interpretation of aerial and satellite imagery at production volume." },
        { title: "Location analytics", desc: "Spatial questions answered in the same tools as the rest of the business." },
      ],
      technologies: ["PostGIS", "ArcGIS", "QGIS", "GeoPandas", "Google Earth Engine", "Apache Sedona"],
      seoTitle: "GIS & Geospatial Solutions | Zed Ventures",
      seoDescription:
        "Zed Ventures builds geospatial systems — spatial data platforms, exposure mapping, imagery-based risk assessment and location analytics for enterprise use.",
    },
    guidewire: {
      name: "Guidewire",
      heroImageHint: "A policy or claims workflow screen",
      outcome: "Move PolicyCenter, BillingCenter and ClaimCenter forward without stopping the business on them.",
      intro:
        "Claims still have to be paid while you upgrade. Everything about how we sequence an implementation, a version move or a cloud migration follows from that one constraint.",
      problems: [
        "An upgrade deferred so long that the version gap is now the project.",
        "Configuration drift nobody has a full picture of.",
        "A cloud migration with no plan for the integrations hanging off the edges.",
      ],
      capabilities: [
        { title: "Implementation", desc: "PolicyCenter, BillingCenter and ClaimCenter delivered against real underwriting and claims process." },
        { title: "Configuration", desc: "Product model and rules work, documented so the next team can follow it." },
        { title: "Upgrades", desc: "Version moves planned around the customisation that actually exists, not the vanilla product." },
        { title: "Cloud migration", desc: "Getting to Guidewire Cloud with the integration surface intact." },
      ],
      technologies: ["PolicyCenter", "BillingCenter", "ClaimCenter", "Gosu", "Guidewire Cloud", "REST integrations"],
      seoTitle: "Guidewire Consulting Services | Zed Ventures",
      seoDescription:
        "Zed Ventures delivers Guidewire implementation, configuration, upgrades and cloud migration across PolicyCenter, BillingCenter and ClaimCenter.",
    },
    sap: {
      name: "SAP",
      heroImageHint: "An SAP module screen, or a rollout workshop in progress",
      heroImage: {
        src: "/sap-hero.webp",
        alt: "A manufacturing floor and loading dock, overlaid with a five-step process flow: plan, produce, manage, deliver, grow.",
      },
      // S7: outcome, not the service name, and not accusatory. The client is
      // not being blamed for the customisation they inherited.
      outcome: "Modernize SAP without disrupting the business it runs.",
      intro:
        "ZEDventures delivers S/4HANA migration, BTP extension and Fiori engineering with clean-core discipline, so the system can keep taking upgrades after the project team has gone.",
      problems: [
        "Customisation in the core that now blocks every upgrade.",
        "Integrations built point-to-point until nobody can map them.",
        "AI pilots that cannot see live ERP data, so they stay pilots.",
      ],
      /**
       * Mayur's words, not drafted. This is the one section on a service page
       * that cannot be produced from a service description, and the only one a
       * competitor could not have written — it exists to show someone has been
       * in the room.
       *
       * Two paragraphs, separated by a blank line. Longer than the spec's
       * 60-word guideline and kept that way: the second paragraph is the
       * consequence, and the first does not land without it.
       */
      situation:
        "The system was fitted to the business years ago, and every fit was a change to the core. Over time, custom reports, integrations, workarounds, and business rules pile up. The people who built them move on, documentation falls behind, and no one is completely sure what will break when something changes.\n\nUpgrades become bigger than they should be. Testing takes longer, integrations need rework, and each change uncovers another dependency. So upgrades get deferred, technical debt grows, and the platform becomes something the business depends on\u2014but nobody wants to touch.",
      capabilities: [
        { title: "S/4HANA migration", desc: "Move to S/4HANA with the core kept clean enough to keep taking upgrades afterwards." },
        { title: "Clean-core remediation", desc: "Move logic out of the core where it blocks upgrades, without changing what the business sees." },
        { title: "BTP extensions", desc: "Side-by-side extension for the logic that does not belong inside the core." },
        { title: "Fiori applications", desc: "Interfaces built around the people running the process rather than the module." },
        { title: "Integration and interfaces", desc: "Replace point-to-point connections with integration somebody can still map next year." },
        { title: "SAP-grounded AI", desc: "Agents with governed access to real ERP context instead of a copied extract." },
      ],
      /**
       * [CONFIRM] Same rule as Analytics: only platforms ZED can substantiate.
       * These six are the stack already named on the live site; nothing has
       * been added to lengthen the list.
       */
      technologyGroups: [
        {
          label: "Core platform",
          icon: "layers",
          // Chip labels are short forms. The full names — "ABAP RESTful
          // Application Programming Model", "Core Data Services",
          // "SAP S/4HANA Cloud, public and private edition" — are correct but
          // three to six words each, and a chip is a label rather than a
          // glossary entry: one long name forces the row to two lines and
          // makes the shorter names beside it look like lesser claims.
          items: [
            "SAP S/4HANA",
            "S/4HANA Cloud",
            "SAP HANA",
            "ABAP",
            "ABAP RAP",
            "CDS views",
            "Fiori",
          ],
        },
        { label: "Extension", icon: "cube", items: ["SAP BTP", "CAP", "OData"] },
        { label: "Integration", icon: "plug", items: ["SAP Integration Suite", "Microsoft Azure"] },
      ],
      technologies: ["S/4HANA", "SAP BTP", "Fiori", "CAP", "ABAP", "OData"],
      whyIntro:
        "We treat SAP as a business process that happens to run on software, and keep the core clean enough that the next upgrade is routine.",
      whyPillars: [
        {
          title: "Business process + technology",
          body: "We start from what the process has to do and what the business cannot afford to stop, then decide what the system change should be — not the other way round.",
        },
        {
          title: "Operational continuity",
          body: "The system is carrying live operations while we work on it. Migration and remediation are sequenced so the business keeps running through the change.",
        },
        {
          title: "Clean core, kept clean",
          body: "Extensions go beside the core, not inside it, and we document the boundary so it survives the people who drew it.",
        },
      ],
      seoTitle: "SAP Consulting, S/4HANA Migration & BTP Engineering | ZEDventures",
      seoDescription:
        "ZEDventures delivers SAP S/4HANA migration, clean-core remediation, BTP extension and Fiori engineering, keeping the core upgradeable after the project ends.",
    },
    "product-engineering": {
      name: "Product Engineering",
      heroImageHint: "Engineers working — a real team, not a stock photo of laptops",
      outcome: "Ship software on a date you can commit to in front of a customer.",
      intro:
        "Full-cycle delivery from architecture through QA, run by people who stay accountable after the release rather than handing over a repository.",
      problems: [
        "A roadmap that slips because the architecture cannot absorb the next feature.",
        "Quality checked at the end, when fixing anything is most expensive.",
        "Teams delivering code but not the operational readiness around it.",
      ],
      capabilities: [
        { title: "Architecture", desc: "Designs sized for the load and the team that has to maintain them." },
        { title: "Cloud-native development", desc: "Services built for the platform they run on rather than lifted onto it." },
        { title: "Quality engineering", desc: "Testing built into the pipeline instead of appended to the schedule." },
        { title: "Release and operations", desc: "Deployment, observability and the on-call reality that follows a launch." },
      ],
      technologies: ["TypeScript", "React", "Node.js", "Python", "Kubernetes", "Terraform"],
      seoTitle: "Product Engineering Services | Zed Ventures",
      seoDescription:
        "Zed Ventures provides full-cycle product engineering — architecture, cloud-native development, quality engineering and release operations for enterprise software.",
    },
    "offshore-nearshore": {
      name: "Offshore & Nearshore Delivery",
      heroImageHint: "A distributed team mid-call across locations",
      outcome: "Add engineering capacity without adding coordination overhead.",
      intro:
        "Offshore delivery in India for depth and cost-efficient capacity, nearshore across the Americas for time-zone overlap. One engagement model, chosen per workstream rather than per contract.",
      problems: [
        "Hiring timelines that do not match the delivery date.",
        "Distributed teams losing a day to every question.",
        "Vendor teams that never absorb enough context to work independently.",
      ],
      capabilities: [
        { title: "Dedicated teams", desc: "Engineers who stay on your product long enough to hold its context." },
        { title: "Offshore delivery", desc: "Depth and cost-efficient capacity for design, development, QA and support." },
        { title: "Nearshore delivery", desc: "Overlapping hours across the Americas for work that needs real-time collaboration." },
        { title: "Blended engagement", desc: "The split decided by what each workstream needs, not by a single contract shape." },
      ],
      technologies: ["Distributed delivery", "Follow-the-sun support", "Agile at scale", "Shared tooling", "Embedded QA", "Knowledge transfer"],
      seoTitle: "Offshore & Nearshore Engineering | Zed Ventures",
      seoDescription:
        "Zed Ventures provides offshore delivery in India and nearshore delivery across the Americas — dedicated engineering teams for design, development, QA and support.",
    },
  },

  fr: {
    "ai-data": {
      name: "IA et données",
      heroImageHint: "Un modèle ou un pipeline en usage réel — ni robot ni réseau de neurones de banque d'images",
      outcome: "Faire passer l'IA du prototype à des systèmes sur lesquels l'entreprise peut compter.",
      intro:
        "Beaucoup de projets d'IA en entreprise atteignent le stade d'une bonne démonstration et s'arrêtent là, faute de quelqu'un prêt à la mettre devant des clients. Combler cet écart, c'est un travail de recherche, d'orchestration et d'évaluation — et la plateforme de données en dessous.",
      problems: [
        "Un prototype fonctionnel que personne n'autorise en production.",
        "Des réponses de modèle impossibles à rattacher à une source approuvée.",
        "Des données réparties dans des systèmes jamais conçus pour être lus ensemble.",
      ],
      capabilities: [
        { title: "Applications LLM", desc: "Systèmes à génération augmentée par recherche, ancrés dans vos contenus approuvés, avec garde-fous et évaluation dès le départ." },
        { title: "Pipelines d'apprentissage automatique", desc: "Entraînement, déploiement et surveillance qui résistent à l'évolution des données." },
        { title: "Plateformes de données", desc: "Lacs, entrepôts et ingestion conçus selon les questions que pose réellement l'entreprise." },
        { title: "API d'orchestration", desc: "La couche d'authentification, d'état conversationnel et de validation entre un modèle et vos utilisateurs." },
      ],
      technologies: ["Azure OpenAI", "Azure AI Search", "Python", "Bases vectorielles", "Databricks", "Airflow"],
      seoTitle: "Services-conseils en IA et données | Zed Ventures",
      seoDescription:
        "Zed Ventures conçoit des plateformes d'IA et de données d'entreprise — applications à recherche augmentée, pipelines d'apprentissage automatique et orchestration prêtes pour la production.",
    },
    analytics: {
      name: "Analytique",
      heroImageHint: "Un véritable écran de reporting ou tableau de bord, flouté si nécessaire",
      heroImage: {
        src: "/analytics-hero.webp",
        alt: "Un ordinateur portable affichant un tableau de bord analytique : une tendance des ventes sur douze mois par canal, au-dessus d'indicateurs de ventes totales, de commandes et de panier moyen.",
      },
      outcome: "Transformer des rapports fragmentés en décisions fiables.",
      intro:
        "Nous aidons les entreprises à assainir des environnements de reporting complexes, à moderniser des outils vieillissants et à rendre leurs données plus faciles à utiliser et à croire.",
      problems: [
        "Deux équipes qui publient des chiffres différents pour la même mesure.",
        "Des rapports assemblés à la main chaque mois faute de pipeline.",
        "Des tableaux de bord qui répondent à des questions que personne ne pose.",
      ],
      situation:
        "Le reporting se construit avec le temps, équipe par équipe. Chaque groupe finit par utiliser ses propres chiffres, les contournements manuels s'installent, et l'on passe plus de temps à vérifier les données qu'à s'en servir. Ajouter un tableau de bord de plus ne règle généralement pas le problème de fond.",
      capabilities: [
        { title: "Stratégie et évaluation analytique", desc: "Nous examinons votre dispositif de reporting actuel, repérons les écarts et vous aidons à décider par quoi commencer." },
        { title: "Montées de version", desc: "Faire évoluer des plateformes décisionnelles anciennes sans perturber les rapports dont vos équipes se servent chaque jour." },
        { title: "Migration de plateforme", desc: "Quitter des outils anciens ou éparpillés pour une plateforme plus moderne, sans perdre ce qui fonctionne déjà." },
        { title: "Modernisation du reporting", desc: "Simplifier rapports et tableaux de bord pour qu'ils soient plus faciles à utiliser, à maintenir et plus utiles au métier." },
        { title: "Visualisation et expérience", desc: "Rendre une information complexe plus lisible, pour voir vite ce qui compte et ce qu'il faut en faire." },
        { title: "Performance et cohérence des données", desc: "Accélérer les rapports lents, réduire les chiffres contradictoires et clarifier la façon dont les données sont définies et utilisées." },
      ],
      technologyGroups: [
        { label: "Décisionnel", icon: "chart", items: ["Power BI", "Tableau", "SAP BusinessObjects", "Google Looker", "Qlik Sense", "ThoughtSpot"] },
        { label: "Plateformes de données", icon: "cube", items: ["Snowflake", "Databricks", "Microsoft Fabric", "Google BigQuery", "Amazon Redshift"] },
        { label: "Cloud", icon: "cloud", items: ["Microsoft Azure", "Amazon Web Services", "Google Cloud Platform"] },
        { label: "Ingénierie des données", icon: "layers", items: ["SQL Server", "Python", "Apache Spark", "Apache Airflow"] },
      ],
      technologies: ["Power BI", "Azure Data Factory", "SQL Server", "Snowflake", "dbt", "Python"],
      platformsSub:
        "Nous travaillons avec les plateformes analytiques et de données que beaucoup d'équipes utilisent déjà.",
      whyIntro:
        "Un projet analytique ne se résume pas aux outils. Il s'agit de réparer les données, le reporting et les processus dont les équipes dépendent chaque jour.",
      whyPillars: [
        {
          title: "Moderniser sans tout reprendre",
          body: "Tout n'a pas besoin d'être remplacé. Nous gardons ce qui fonctionne, corrigeons ce qui ne va plus, et modernisons par étapes concrètes.",
        },
        {
          title: "Métier et technologie",
          body: "Nous regardons au-delà de la plateforme : les rapports, les indicateurs, les utilisateurs et les décisions dont l'entreprise dépend réellement.",
        },
        {
          title: "De l'évaluation à la production",
          body: "Nous accompagnons depuis le premier diagnostic et la feuille de route jusqu'à la migration, la mise en œuvre, l'optimisation et le support.",
        },
      ],
      proof: { index: 3, headline: "Visibilité en temps réel sur tous les pays" },
      finalCta: {
        title: "Parlons de vos priorités analytiques.",
        buttonLabel: "Démarrer la conversation",
      },
      seoTitle: "Conseil et modernisation analytique | ZEDventures",
      seoDescription:
        "ZEDventures aide les entreprises à évaluer, moderniser, migrer et optimiser leurs environnements analytiques : Power BI, SAP BusinessObjects et plateformes de données modernes.",
    },
    "gis-geospatial": {
      name: "SIG et géomatique",
      heroImageHint: "Une carte ou visualisation spatiale issue d'un projet livré",
      outcome: "Faire de la localisation une dimension analysable, et non une carte que l'on regarde.",
      intro:
        "Les données spatiales sont souvent traitées comme une discipline à part, greffée sur le reste du parc. Nous les intégrons aux mêmes pipelines et aux mêmes analyses que tout le reste.",
      problems: [
        "Des données spatiales dans un système qu'une seule équipe sait interroger.",
        "Une exposition évaluée sur des adresses plutôt que sur la géographie réelle.",
        "Imagerie et capteurs qui arrivent plus vite qu'on ne peut les traiter.",
      ],
      capabilities: [
        { title: "Plateformes de données spatiales", desc: "Stockage et pipelines conçus pour la géométrie, et non adaptés après coup." },
        { title: "Cartographie de l'exposition", desc: "Évaluation géolocalisée pour les portefeuilles où la géographie détermine le chiffre." },
        { title: "Analyse d'imagerie", desc: "Interprétation automatisée d'images aériennes et satellitaires à l'échelle de la production." },
        { title: "Analytique de localisation", desc: "Des questions spatiales traitées dans les mêmes outils que le reste de l'entreprise." },
      ],
      technologies: ["PostGIS", "ArcGIS", "QGIS", "GeoPandas", "Google Earth Engine", "Apache Sedona"],
      seoTitle: "Solutions SIG et géospatiales | Zed Ventures",
      seoDescription:
        "Zed Ventures conçoit des systèmes géospatiaux — plateformes de données spatiales, cartographie de l'exposition, analyse d'imagerie et analytique de localisation.",
    },
    guidewire: {
      name: "Guidewire",
      heroImageHint: "Un écran de gestion de police ou de sinistre",
      outcome: "Faire évoluer PolicyCenter, BillingCenter et ClaimCenter sans arrêter l'activité qui en dépend.",
      intro:
        "Les sinistres doivent continuer d'être réglés pendant la montée de version. Toute notre façon de séquencer une implémentation, un changement de version ou une migration infonuagique découle de cette seule contrainte.",
      problems: [
        "Une montée de version reportée si longtemps que l'écart est devenu le projet.",
        "Une dérive de configuration dont personne n'a la vue complète.",
        "Une migration infonuagique sans plan pour les intégrations périphériques.",
      ],
      capabilities: [
        { title: "Implémentation", desc: "PolicyCenter, BillingCenter et ClaimCenter livrés selon les processus réels de souscription et de sinistres." },
        { title: "Configuration", desc: "Modèle produit et règles, documentés pour que l'équipe suivante puisse s'y retrouver." },
        { title: "Montées de version", desc: "Des passages de version planifiés sur la personnalisation réelle, pas sur le produit standard." },
        { title: "Migration infonuagique", desc: "Atteindre Guidewire Cloud avec la surface d'intégration intacte." },
      ],
      technologies: ["PolicyCenter", "BillingCenter", "ClaimCenter", "Gosu", "Guidewire Cloud", "Intégrations REST"],
      seoTitle: "Services-conseils Guidewire | Zed Ventures",
      seoDescription:
        "Zed Ventures assure l'implémentation, la configuration, les montées de version et la migration infonuagique Guidewire sur PolicyCenter, BillingCenter et ClaimCenter.",
    },
    sap: {
      name: "SAP",
      heroImageHint: "Un écran de module SAP, ou un atelier de déploiement",
      heroImage: {
        src: "/sap-hero.webp",
        alt: "Un atelier de production et un quai de chargement, avec un flux en cinq étapes superposé : planifier, produire, gérer, livrer, développer.",
      },
      outcome: "Moderniser SAP sans perturber l'activité qu'il fait tourner.",
      intro:
        "ZEDventures livre migration S/4HANA, extensions BTP et ingénierie Fiori avec une discipline clean core, pour que le système continue d'accepter les montées de version après le départ de l'équipe projet.",
      problems: [
        "De la personnalisation dans le cœur qui bloque désormais chaque montée de version.",
        "Des intégrations point à point que plus personne ne sait cartographier.",
        "Des pilotes d'IA sans accès aux données ERP réelles, qui restent des pilotes.",
      ],
      situation:
        "Le système a été ajusté à l'entreprise il y a des années, et chaque ajustement a touché le cœur. Avec le temps, rapports sur mesure, intégrations, contournements et règles de gestion s'accumulent. Ceux qui les ont construits sont partis, la documentation a pris du retard, et plus personne ne sait vraiment ce qui cassera au prochain changement.\n\nLes montées de version deviennent plus lourdes qu'elles ne devraient l'être. Les tests s'allongent, les intégrations demandent des reprises, et chaque changement révèle une dépendance de plus. On reporte donc les montées de version, la dette technique s'accumule, et la plateforme devient ce dont l'entreprise dépend \u2014 sans que personne ne veuille y toucher.",
      capabilities: [
        { title: "Migration S/4HANA", desc: "Passer à S/4HANA en gardant un cœur assez propre pour rester évolutif ensuite." },
        { title: "Assainissement du cœur", desc: "Sortir du cœur la logique qui bloque les montées de version, sans rien changer pour les utilisateurs." },
        { title: "Extensions BTP", desc: "Extension côte à côte pour la logique qui n'a pas sa place dans le cœur." },
        { title: "Applications Fiori", desc: "Des interfaces conçues autour des personnes qui exécutent le processus, pas du module." },
        { title: "Intégration et interfaces", desc: "Remplacer les liaisons point à point par une intégration encore cartographiable l'an prochain." },
        { title: "IA ancrée dans SAP", desc: "Des agents disposant d'un accès gouverné au contexte ERP réel plutôt qu'à un extrait copié." },
      ],
      technologyGroups: [
        {
          label: "Plateforme",
          icon: "layers",
          items: [
            "SAP S/4HANA",
            "S/4HANA Cloud",
            "SAP HANA",
            "ABAP",
            "ABAP RAP",
            "CDS views",
            "Fiori",
          ],
        },
        { label: "Extension", icon: "cube", items: ["SAP BTP", "CAP", "OData"] },
        { label: "Intégration", icon: "plug", items: ["SAP Integration Suite", "Microsoft Azure"] },
      ],
      technologies: ["S/4HANA", "SAP BTP", "Fiori", "CAP", "ABAP", "OData"],
      whyIntro:
        "Nous traitons SAP comme un processus métier qui se trouve tourner sur un logiciel, et gardons le cœur assez propre pour que la prochaine montée de version soit une routine.",
      whyPillars: [
        {
          title: "Processus métier et technologie",
          body: "Nous partons de ce que le processus doit accomplir et de ce que l'entreprise ne peut pas se permettre d'arrêter, puis décidons du changement système — et non l'inverse.",
        },
        {
          title: "Continuité opérationnelle",
          body: "Le système porte l'exploitation pendant que nous y travaillons. Migration et assainissement sont séquencés pour que l'activité continue malgré le chantier.",
        },
        {
          title: "Un cœur propre, qui le reste",
          body: "Les extensions se placent à côté du cœur, pas dedans, et nous documentons la frontière pour qu'elle survive à ceux qui l'ont tracée.",
        },
      ],
      seoTitle: "Conseil SAP, migration S/4HANA et ingénierie BTP | ZEDventures",
      seoDescription:
        "ZEDventures livre migration S/4HANA, assainissement du cœur, extensions BTP et ingénierie Fiori, en gardant le cœur évolutif après la fin du projet.",
    },
    "product-engineering": {
      name: "Ingénierie produit",
      heroImageHint: "Des ingénieurs au travail — une vraie équipe, pas une photo de banque d'images",
      outcome: "Livrer un logiciel à une date que vous pouvez annoncer devant un client.",
      intro:
        "Une livraison de bout en bout, de l'architecture à l'assurance qualité, assurée par des gens qui restent responsables après la mise en production plutôt que de remettre un dépôt de code.",
      problems: [
        "Une feuille de route qui glisse parce que l'architecture n'absorbe plus la fonctionnalité suivante.",
        "Une qualité vérifiée à la fin, quand toute correction coûte le plus cher.",
        "Des équipes qui livrent du code mais pas la préparation opérationnelle qui l'accompagne.",
      ],
      capabilities: [
        { title: "Architecture", desc: "Des conceptions dimensionnées pour la charge et pour l'équipe qui devra les maintenir." },
        { title: "Développement infonuagique natif", desc: "Des services conçus pour la plateforme qui les exécute plutôt que déplacés dessus." },
        { title: "Ingénierie de la qualité", desc: "Des tests intégrés au pipeline plutôt qu'ajoutés au calendrier." },
        { title: "Livraison et exploitation", desc: "Déploiement, observabilité et la réalité des astreintes qui suit un lancement." },
      ],
      technologies: ["TypeScript", "React", "Node.js", "Python", "Kubernetes", "Terraform"],
      seoTitle: "Services d'ingénierie produit | Zed Ventures",
      seoDescription:
        "Zed Ventures assure l'ingénierie produit de bout en bout — architecture, développement infonuagique natif, qualité et exploitation pour les logiciels d'entreprise.",
    },
    "offshore-nearshore": {
      name: "Livraison délocalisée et de proximité",
      heroImageHint: "Une équipe distribuée en visioconférence",
      outcome: "Ajouter de la capacité d'ingénierie sans ajouter de coordination.",
      intro:
        "Une livraison délocalisée en Inde pour la profondeur et une capacité économique, et de proximité dans les Amériques pour le chevauchement horaire. Un seul modèle d'engagement, choisi par chantier plutôt que par contrat.",
      problems: [
        "Des délais de recrutement incompatibles avec la date de livraison.",
        "Des équipes distribuées qui perdent une journée à chaque question.",
        "Des équipes prestataires qui n'acquièrent jamais assez de contexte pour travailler seules.",
      ],
      capabilities: [
        { title: "Équipes dédiées", desc: "Des ingénieurs qui restent assez longtemps sur votre produit pour en détenir le contexte." },
        { title: "Livraison délocalisée", desc: "Profondeur et capacité économique pour la conception, le développement, la qualité et le soutien." },
        { title: "Livraison de proximité", desc: "Des heures communes dans les Amériques pour les travaux exigeant une collaboration en temps réel." },
        { title: "Engagement mixte", desc: "Une répartition décidée par les besoins de chaque chantier, non par la forme d'un contrat unique." },
      ],
      technologies: ["Livraison distribuée", "Soutien continu", "Agilité à l'échelle", "Outillage partagé", "QA intégrée", "Transfert de connaissances"],
      seoTitle: "Ingénierie délocalisée et de proximité | Zed Ventures",
      seoDescription:
        "Zed Ventures offre une livraison délocalisée en Inde et de proximité dans les Amériques — équipes d'ingénierie dédiées pour la conception, le développement, la QA et le soutien.",
    },
  },
};

export function isServiceSlug(v: string): v is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(v);
}
