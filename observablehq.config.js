// See https://observablehq.com/framework/config for documentation.

// Base path for GitHub Pages deployment.
// Set to the repository name, e.g. "/impact-monitor-2025".
// Use "" for root-domain or custom-domain deployments.
const base = "/impact-monitor-2025";

// Page equivalence map: maps each page slug to all three language variants.
// Used by the language switcher to navigate to the same conceptual page.
const pageSlugMap = [
  { de: "/de/index",                          en: "/en/index",                                         fr: "/fr/index" },
  { de: "/de/methodische-grundlagen",         en: "/en/methodology",                                   fr: "/fr/bases-methodologiques" },
  { de: "/de/foerderangebote-und-inhalte",    en: "/en/support-offers-and-content",                    fr: "/fr/offres-dencouragement-et-contenus" },
  { de: "/de/vergleichende-ergebnisse",       en: "/en/comparative-results",                           fr: "/fr/resultats-comparatifs" },
  { de: "/de/projekte-unternehmen-forschende",en: "/en/projects-companies-researchers",                fr: "/fr/projets-entreprises-chercheurs" },
  { de: "/de/projekte-forschende",            en: "/en/projects-researchers",                          fr: "/fr/projets-chercheurs" },
  { de: "/de/starthilfe-projekte-vernetzung", en: "/en/project-set-up-assistance-and-networking",      fr: "/fr/aide-au-demarrage-projets-mise-en-reseau" },
  { de: "/de/begleitung-start-ups",           en: "/en/support-for-start-ups",                         fr: "/fr/accompagnement-de-start-up" },
  { de: "/de/editorial",                      en: "/en/editorial",                                     fr: "/fr/editorial" }
];

function getLang(path) {
  return path.startsWith("/de/") ? "de" : path.startsWith("/fr/") ? "fr" : "en";
}

function getPageLinks(path) {
  const basePath = path.split("#")[0];
  const match = pageSlugMap.find(m => Object.values(m).includes(basePath));
  const links = match ?? { de: "/de/", en: "/en/", fr: "/fr/" };
  return { de: base + links.de, en: base + links.en, fr: base + links.fr };
}

export default {
  base,
  title: "Impact monitor",

  // Note: Observable Framework only supports one level of section nesting.
  // Sub-sections inside a section would be incorrectly treated as pages with path="undefined".
  // Each language section therefore uses a flat list of direct page entries.
  pages: [
    {
      name: "Deutsch",
      open: false,
      pages: [
        { name: "Einleitung", path: "/de/index" },
        { name: "Methodische Grundlagen", path: "/de/methodische-grundlagen" },
        { name: "Förderangebote und Inhalte", path: "/de/foerderangebote-und-inhalte" },
        { name: "Vergleichende Ergebnisse", path: "/de/vergleichende-ergebnisse" },
        { name: "Innovationsprojekte mit Umsetzungspartner", path: "/de/projekte-unternehmen-forschende" },
        { name: "Innovationsscheck", path: "/de/projekte-unternehmen-forschende#innovationsscheck" },
        { name: "Innovationsprojekte ohne Umsetzungspartner", path: "/de/projekte-forschende" },
        { name: "BRIDGE: Discovery", path: "/de/projekte-forschende#bridge-discovery" },
        { name: "BRIDGE: Proof of Concept", path: "/de/projekte-forschende#bridge-proof-of-concept" },
        { name: "Innovation Booster", path: "/de/starthilfe-projekte-vernetzung" },
        { name: "Start-up Core Coaching", path: "/de/begleitung-start-ups" }
      ]
    },
    {
      name: "English",
      open: false,
      pages: [
        { name: "Introduction", path: "/en/index" },
        { name: "Editorial", path: "/en/editorial" },
        { name: "Methodology", path: "/en/methodology" },
        { name: "Support offers and content", path: "/en/support-offers-and-content" },
        { name: "Comparative results", path: "/en/comparative-results" },
        { name: "Innovation projects with implementation partners", path: "/en/projects-companies-researchers" },
        { name: "Innovation cheques", path: "/en/projects-companies-researchers#innovation-cheques" },
        { name: "Innovation projects without implementation partner", path: "/en/projects-researchers" },
        { name: "BRIDGE Proof of Concept", path: "/en/projects-researchers#bridge-proof-of-concept" },
        { name: "Innovation Booster", path: "/en/project-set-up-assistance-and-networking" },
        { name: "Start-up Core Coaching", path: "/en/support-for-start-ups" }
      ]
    },
    {
      name: "Français",
      open: false,
      pages: [
        { name: "Introduction", path: "/fr/index" },
        { name: "Éditorial", path: "/fr/editorial" },
        { name: "Bases méthodologiques", path: "/fr/bases-methodologiques" },
        { name: "Offres d'encouragement et contenus", path: "/fr/offres-dencouragement-et-contenus" },
        { name: "Résultats comparatifs", path: "/fr/resultats-comparatifs" },
        { name: "Projets d'innovation avec partenaire", path: "/fr/projets-entreprises-chercheurs" },
        { name: "Chèque innovation", path: "/fr/projets-entreprises-chercheurs#cheque-d-innovation" },
        { name: "Projets d'innovation sans partenaire", path: "/fr/projets-chercheurs" },
        { name: "BRIDGE Proof of Concept", path: "/fr/projets-chercheurs#bridge-proof-of-concept" },
        { name: "Innovation Booster", path: "/fr/aide-au-demarrage-projets-mise-en-reseau" },
        { name: "Start-up Core Coaching", path: "/fr/accompagnement-de-start-up" }
      ]
    }
  ],

  head({path}) {
    const lang = getLang(path);
    return `<link rel="icon" href="/images/swiss-logo-flag.svg" type="image/svg+xml"><script>document.documentElement.lang="${lang}";</script><style>#observablehq-sidebar details:not(.observablehq-section-active){display:none}</style>`;
  },

  header({path}) {
    const lang = getLang(path);
    const links = getPageLinks(path);
    const agencyName = lang === "de"
      ? "Schweizerische Agentur für Innovationsförderung"
      : lang === "fr"
      ? "Agence suisse pour l'encouragement de l'innovation"
      : "Swiss Innovation Agency";

    const deSty = lang === "de" ? " font-weight:bold; background:#e8e8e8;" : "";
    const enSty = lang === "en" ? " font-weight:bold; background:#e8e8e8;" : "";
    const frSty = lang === "fr" ? " font-weight:bold; background:#e8e8e8;" : "";

    return `<div style="display:flex; align-items:center; justify-content:space-between; padding:0 1rem; height:100%; gap:1rem;">
  <a href="https://www.innosuisse.admin.ch" class="logo" id="header-logo-container" aria-label="Open Homepage" style="display:flex; align-items:center; gap:0.5rem; text-decoration:none; color:inherit; flex-shrink:0;">
    <img src="/images/swiss-logo.svg" class="logo_flag" style="height:40px;" alt="Swiss cross logo">
    <span style="font-size:0.8rem; line-height:1.25; color:#53565A;">Innosuisse<br>${agencyName}</span>
  </a>
  <nav style="display:flex; gap:0.25rem; font-size:0.85rem; flex-shrink:0; margin-left:auto;">
    <a href="${links.de}" style="padding:3px 8px; border-radius:3px; text-decoration:none; color:#53565A;${deSty}">DE</a>
    <a href="${links.en}" style="padding:3px 8px; border-radius:3px; text-decoration:none; color:#53565A;${enSty}">EN</a>
    <a href="${links.fr}" style="padding:3px 8px; border-radius:3px; text-decoration:none; color:#53565A;${frSty}">FR</a>
  </nav>
</div>`;
  },

  footer({path}) {
    const lang = getLang(path);
    const title = lang === "de" ? "Wirkungsmonitor" : lang === "fr" ? "Moniteur d'impact" : "Impact monitor";
    return `${title} — Built with <a href="https://observablehq.com/framework">Observable Framework</a>`;
  },

  root: "src"
};
