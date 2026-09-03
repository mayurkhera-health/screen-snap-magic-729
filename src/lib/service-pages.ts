/**
 * PLACEHOLDER CONTENT.
 *
 * Every string below is sample copy written to give the service-page template
 * realistic shape. It describes standard industry capabilities, not claims
 * about Zedventures: there are deliberately no metrics, client names, dates or
 * outcome numbers anywhere in this file, because those cannot be invented.
 *
 * While DRAFT_SERVICE_PAGES is true the pages carry a visible draft banner and
 * a noindex robots tag, so this text cannot be indexed before it is replaced.
 * Set it to false once the copy is real.
 */
export const DRAFT_SERVICE_PAGES = true;

export type ServiceCapability = { title: string; desc: string };

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
      outcome: "Turn reporting that nobody trusts into numbers leadership will actually decide on.",
      intro:
        "The dashboard is almost never the hard part. Getting two teams to agree what a number means, and building a pipeline that produces it the same way every month — that is the work. We start there.",
      problems: [
        "Two teams reporting different numbers for the same measure.",
        "Reports assembled by hand every month because the pipeline never landed.",
        "Dashboards that answer questions nobody is asking.",
      ],
      capabilities: [
        { title: "BI and dashboards", desc: "Reporting built on agreed definitions, so the number means the same thing in every room." },
        { title: "Data warehousing", desc: "Modelled, documented storage that reporting and analysis can both sit on." },
        { title: "Predictive analytics", desc: "Forecasting and scoring tied to a decision somebody is going to make." },
        { title: "Reporting automation", desc: "Removing the manual assembly step that quietly consumes a week of every month." },
      ],
      technologies: ["Power BI", "Azure Data Factory", "SQL Server", "Snowflake", "dbt", "Python"],
      // [CONFIRM] Drafted from the existing intro and problem list. This is the
      // block that does the most work on the page — worth getting exactly right.
      situation:
        "Every team reports its own numbers, and two of them rarely agree. Someone rebuilds the monthly pack by hand because the pipeline never landed, and by the time leadership sees a figure nobody is confident enough to decide on it. The dashboard is not the problem.",
      proof: { index: 3, headline: "Real-time visibility across every country" },
      seoTitle: "Enterprise Analytics Services | Zed Ventures",
      seoDescription:
        "Zed Ventures designs and builds enterprise analytics — BI dashboards, data warehousing and predictive analytics built on definitions the business agrees on.",
    },
    "gis-geospatial": {
      name: "GIS & Geospatial",
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
      outcome: "Extend SAP without rebuilding the problems clean core was meant to remove.",
      intro:
        "The discipline that matters in SAP work is knowing what belongs in the core and what belongs beside it. We build extensions and integrations that keep that line intact, including AI agents that reach real ERP context.",
      problems: [
        "Customisation in the core that now blocks every upgrade.",
        "Integrations built point-to-point until nobody can map them.",
        "AI pilots that cannot see live ERP data, so they stay pilots.",
      ],
      capabilities: [
        { title: "S/4HANA", desc: "Migration and greenfield work with the core kept clean enough to upgrade." },
        { title: "BTP extensions", desc: "Side-by-side extension where the logic belongs outside the core." },
        { title: "Fiori applications", desc: "Interfaces built for the people doing the process, not the module." },
        { title: "SAP-grounded AI", desc: "Agents with governed access to real ERP context rather than a copied extract." },
      ],
      technologies: ["S/4HANA", "SAP BTP", "Fiori", "CAP", "ABAP", "OData"],
      seoTitle: "SAP Consulting & Engineering | Zed Ventures",
      seoDescription:
        "Zed Ventures delivers SAP S/4HANA, BTP and Fiori engineering with clean-core discipline, plus SAP-grounded AI agents with governed access to ERP context.",
    },
    "product-engineering": {
      name: "Product Engineering",
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
      outcome: "Transformer des rapports auxquels personne ne se fie en chiffres sur lesquels la direction décide.",
      intro:
        "Le tableau de bord n'est presque jamais le plus difficile. Faire convenir deux équipes du sens d'un chiffre, puis construire un pipeline qui le produit de la même façon chaque mois — voilà le travail. C'est par là que nous commençons.",
      problems: [
        "Deux équipes qui publient des chiffres différents pour la même mesure.",
        "Des rapports assemblés à la main chaque mois faute de pipeline.",
        "Des tableaux de bord qui répondent à des questions que personne ne pose.",
      ],
      capabilities: [
        { title: "Décisionnel et tableaux de bord", desc: "Des rapports fondés sur des définitions convenues, pour que le chiffre ait le même sens partout." },
        { title: "Entreposage de données", desc: "Un stockage modélisé et documenté sur lequel reposent le reporting et l'analyse." },
        { title: "Analytique prédictive", desc: "Prévision et scorage rattachés à une décision que quelqu'un va réellement prendre." },
        { title: "Automatisation du reporting", desc: "Supprimer l'assemblage manuel qui consomme discrètement une semaine par mois." },
      ],
      technologies: ["Power BI", "Azure Data Factory", "SQL Server", "Snowflake", "dbt", "Python"],
      situation:
        "Chaque équipe publie ses propres chiffres, et deux d'entre elles s'accordent rarement. Quelqu'un reconstitue le rapport mensuel à la main faute de pipeline, et quand la direction voit enfin un chiffre, personne n'est assez sûr pour décider. Le tableau de bord n'est pas le problème.",
      proof: { index: 3, headline: "Visibilité en temps réel sur tous les pays" },
      seoTitle: "Services d'analytique d'entreprise | Zed Ventures",
      seoDescription:
        "Zed Ventures conçoit l'analytique d'entreprise — tableaux de bord, entreposage de données et analytique prédictive fondés sur des définitions convenues.",
    },
    "gis-geospatial": {
      name: "SIG et géomatique",
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
      outcome: "Étendre SAP sans recréer les problèmes que le clean core devait éliminer.",
      intro:
        "La discipline qui compte dans le travail SAP consiste à savoir ce qui appartient au cœur et ce qui doit rester à côté. Nous construisons des extensions et des intégrations qui préservent cette frontière, y compris des agents d'IA reliés au contexte ERP réel.",
      problems: [
        "De la personnalisation dans le cœur qui bloque désormais chaque montée de version.",
        "Des intégrations point à point que plus personne ne sait cartographier.",
        "Des pilotes d'IA sans accès aux données ERP réelles, qui restent des pilotes.",
      ],
      capabilities: [
        { title: "S/4HANA", desc: "Migration et projets neufs avec un cœur suffisamment propre pour rester évolutif." },
        { title: "Extensions BTP", desc: "Extension côte à côte lorsque la logique n'a pas sa place dans le cœur." },
        { title: "Applications Fiori", desc: "Des interfaces conçues pour les personnes qui exécutent le processus, pas pour le module." },
        { title: "IA ancrée dans SAP", desc: "Des agents disposant d'un accès gouverné au contexte ERP réel plutôt qu'à un extrait copié." },
      ],
      technologies: ["S/4HANA", "SAP BTP", "Fiori", "CAP", "ABAP", "OData"],
      seoTitle: "Conseil et ingénierie SAP | Zed Ventures",
      seoDescription:
        "Zed Ventures livre de l'ingénierie SAP S/4HANA, BTP et Fiori avec une discipline clean core, ainsi que des agents d'IA reliés au contexte ERP.",
    },
    "product-engineering": {
      name: "Ingénierie produit",
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
