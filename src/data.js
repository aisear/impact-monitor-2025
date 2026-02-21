// Data import
import { FileAttachment } from "observablehq:stdlib";
import { getLang } from "./lang.js";

const lang = getLang();

export const daten_controlling = await FileAttachment("data/daten_controlling.txt").tsv({ typed: true });

const df_subcluster = await FileAttachment("data/daten_subcluster.txt").tsv({ typed: true });

export const df_subcluster_n = df_subcluster.map((d) => ({
  ...d,
  instrument_n:
    d.instrument === "Innovationsprojekte mit UP"
      ? lang === "de"
        ? "Innovationsprojekte mit\nUmsetzungspartner"
        : lang === "fr"
        ? "Projets d'innovation avec\npartenaire de mise en œuvre"
        : "Innovation projects with\nimplementation partner"
      : d.instrument === "Innovationsprojekte ohne UP"
        ? lang === "de"
          ? "Innovationsprojekte ohne\nUmsetzungspartner"
          : lang === "fr"
          ? "Projets d'innovation sans\npartenaire de mise en œuvre"
          : "Innovation projects without\nimplementation partner"
        : lang === "fr"
          ? (d.instrument_fr ?? d.instrument)
          : lang === "de"
          ? d.instrument
          : (d.instrument_en ?? d.instrument),
  subcluster_n:
    d.subcluster === "Energy & environment"
      ? "Energy &\nenvironment"
      : d.subcluster === "Social sciences & business mgmt"
        ? "Social sciences &\nbusiness management"
        : d.subcluster,
}));

export const instrumentToInst = new Map([
  { instrument: "BRIDGE: Proof of Concept", inst: "Förderung für Schweizer Innovationsprojekte" },
  { instrument: "BRIDGE: Discovery", inst: "Förderung für Schweizer Innovationsprojekte" },
  { instrument: "Start-up Coaching", inst: "Begleitung von Start-ups" },
  { instrument: "Enterprise Europe Network (EEN)", inst: "Starthilfe für Projekte und Vernetzung" },
  { instrument: "Flagship Initiative", inst: "Förderung für Schweizer Innovationsprojekte" },
  { instrument: "Innovation Booster", inst: "Starthilfe für Projekte und Vernetzung" },
  { instrument: "Innovationsmentoring", inst: "Starthilfe für Projekte und Vernetzung" },
  { instrument: "Innovationsprojekte mit Umsetzungspartner", inst: "Förderung für Schweizer Innovationsprojekte" },
  { instrument: "Innovationsprojekte ohne Umsetzungspartner", inst: "Förderung für Schweizer Innovationsprojekte" },
  { instrument: "Innovationsscheck", inst: "Förderung für Schweizer Innovationsprojekte" },
  { instrument: "Internationale Projekte", inst: "Förderung für internationale Innovationsprojekte" },
  { instrument: "Internationalisierung", inst: "Begleitung von Start-ups" },
  { instrument: "Partnerschaften und Events", inst: "Starthilfe für Projekte und Vernetzung" },
  { instrument: "Start-up Innovationsprojekte (2023ff)", inst: "Förderung für Schweizer Innovationsprojekte" },
  { instrument: "Entrepreneurship Training", inst: "Begleitung von Start-ups" },
  { instrument: "Start-up Core Coaching", inst: "Begleitung von Start-ups" }
].map(item => [item.instrument, item.inst])
);

export const instrument_link_hex = await FileAttachment("data/instrument_link_hex.txt").tsv({ typed: true });

// Language-aware link map: instrument → URL for the current language
export const instrument_link = new Map(
  instrument_link_hex.map(item => [item.instrument, item[`link_${lang}`]])
);

export const df_waffle = await FileAttachment("data/daten_waffle.txt").tsv({ typed: true });

// Innovation Booster inline data (years differ between DE and EN/FR source projects;
// using EN/FR values here: 2021–2023)
export const df_ip = [
  {
    instrument: "Innovationsprojekte mit Umsetzungspartner",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2021, funding: 184, n: 399, label: "Projekte"
  },
  {
    instrument: "Innovationsprojekte mit Umsetzungspartner",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2022, funding: 160, n: 336, label: "Projekte"
  },
  {
    instrument: "Innovationsprojekte mit Umsetzungspartner",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2023, funding: 158, n: 307, label: "Projekte"
  },
  {
    instrument: "Innovationsschecks",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2021, funding: 184, n: 578, label: "KMU"
  },
  {
    instrument: "Innovationsschecks",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2022, funding: 160, n: 496, label: "KMU"
  },
  {
    instrument: "Innovationsschecks",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2023, funding: 158, n: 569, label: "KMU"
  },
  {
    instrument: "Start-up Core Coaching",
    inst: "Begleitung von Start-ups",
    year: 2021, funding: null, n: 83, label: "Start-ups"
  },
  {
    instrument: "Start-up Core Coaching",
    inst: "Begleitung von Start-ups",
    year: 2022, funding: null, n: 57, label: "Start-ups"
  },
  {
    instrument: "Start-up Core Coaching",
    inst: "Begleitung von Start-ups",
    year: 2023, funding: null, n: 94, label: "Start-ups"
  },
  {
    instrument: "Bridge: Proof of Concept",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2021, funding: null, n: 28, label: "Forschende"
  },
  {
    instrument: "Bridge: Proof of Concept",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2022, funding: null, n: 41, label: "Forschende"
  },
  {
    instrument: "Bridge: Proof of Concept",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2023, funding: null, n: 52, label: "Forschende"
  },
  {
    instrument: "Innovationsprojekte ohne Umsetzungspartner",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2021, funding: null, n: 39, label: "Projekte"
  },
  {
    instrument: "Innovationsprojekte ohne Umsetzungspartner",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2022, funding: null, n: 38, label: "Projekte"
  },
  {
    instrument: "Innovationsprojekte ohne Umsetzungspartner",
    inst: "Förderung für Schweizer Innovationsprojekte",
    year: 2023, funding: null, n: 60, label: "Projekte"
  }
];

// KOF DiD data with language-aware type labels
const kofTypeLabels = {
  de: { employment: "Beschäftigung", sales: "Umsatz" },
  en: { employment: "Employment", sales: "Sales" },
  fr: { employment: "Emploi", sales: "Ventes" }
};

export const kof_did = await FileAttachment("data/daten_kof_did.txt")
  .tsv()
  .then((data) =>
    data.map((d) => ({
      ...d,
      type_local: kofTypeLabels[lang][d.type] ?? d.type
    }))
  );

const df_ziel_erfolg = await FileAttachment("data/daten_zielerreichung.txt").tsv({ typed: true });
export const df_ziel = df_ziel_erfolg.filter((d) => d.category === "Zielerreichung");
export const df_erfolg = df_ziel_erfolg.filter((d) => d.category === "Erfolg");

// Satisfaction data with language-aware instrument name line-wrapping
export const df_zufrieden = df_ziel_erfolg
  .filter((d) => d.category === "Zufriedenheit")
  .map((d) => {
    const instrCol = `instrument_${lang}`;
    const baseInstr = d[instrCol] ?? d.instrument_de;
    // Apply line-breaks for long instrument names
    const instrument_display =
      d.instrument_de === "Innovationsprojekte mit Umsetzungspartner"
        ? lang === "de"
          ? "Innovationsprojekte mit\nUmsetzungspartner"
          : lang === "fr"
          ? "Projets d'innovation avec\npartenaire de mise en valeur"
          : "Innovation projects with\nimplementation partner"
        : d.instrument_de === "Innovationsprojekte ohne Umsetzungspartner"
          ? lang === "de"
            ? "Innovationsprojekte ohne\nUmsetzungspartner"
            : lang === "fr"
            ? "Projets d'innovation sans\npartenaire de mise en valeur"
            : "Innovation projects without\nimplementation partner"
          : baseInstr;
    return {
      ...d,
      [`instrument_${lang}`]: instrument_display
    };
  });

export const df_ergebnisse = await FileAttachment("data/daten_ergebnisse.txt").tsv({ typed: true });

const innovationsart = await FileAttachment("data/daten_innovationsart.txt").tsv({ typed: true });

export const df_innovationsart = innovationsart.map((d) => {
  // Language-aware instrument_n (with line breaks for long names)
  const instrument_n =
    d.instrument_de === "Innovationsprojekte mit UP"
      ? lang === "de"
        ? "Innovationsprojekte mit\nUmsetzungspartner"
        : lang === "fr"
        ? "Projets d'innovation avec\npartenaire de mise en œuvre"
        : "Innovation projects with\nimplementation partner"
      : d.instrument_de === "Innovationsprojekte ohne UP"
        ? lang === "de"
          ? "Innovationsprojekte ohne\nUmsetzungspartner"
          : lang === "fr"
          ? "Projets d'innovation sans\npartenaire de mise en œuvre"
          : "Innovation projects without\nimplementation partner"
        : lang === "fr"
          ? (d.instrument_fr ?? d.instrument_de)
          : lang === "de"
          ? d.instrument_de
          : (d.instrument_en ?? d.instrument_de);

  // Language-aware type_n (with line breaks for long type names)
  const typeCol = `type_${lang}`;
  const type_val = d[typeCol] ?? d.type_de;

  // EN: add line breaks for specific multi-word type labels
  // FR: add line breaks for multi-word French type labels
  const type_n =
    lang === "en"
      ? (type_val === "innovation de modèle d'entreprise"
          ? "innovation\nde modèle d'entreprise"
          : type_val === "innovation de produit"
          ? "innovation\nde produit"
          : type_val === "innovation en matière de services"
          ? "innovation\nen matière de services"
          : type_val)
      : lang === "fr"
      ? (type_val === "innovation de modèle d'entreprise"
          ? "innovation\nde modèle d'entreprise"
          : type_val === "innovation de produit"
          ? "innovation\nde produit"
          : type_val === "innovation en matière de services"
          ? "innovation\nen matière de services"
          : type_val)
      : type_val; // DE: no line breaks needed for German type names

  return {
    ...d,
    instrument_n,
    [`type_${lang}_n`]: type_n
  };
});

export const ia_order = new Set(
  df_innovationsart
    .filter((d) => ["inkrementelle", "radikale", "disruptive"].includes(d.type_de))
    .map((item) => item.instrument_n)
);
