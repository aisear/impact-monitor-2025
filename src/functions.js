import * as Plot from "npm:@observablehq/plot";
import * as aq from "npm:arquero";
import * as d3 from "npm:d3";
import { palette } from "./colors.js";
import { html } from "npm:htl";
import { getLang } from "./lang.js";
import { instruments } from "./constants.js";
import {
  daten_controlling, df_subcluster_n, df_ziel,
  df_innovationsart, df_zufrieden, df_waffle, df_ergebnisse, kof_did
} from "./data.js"

const lang = getLang();

// Clamp a responsive width: never wider than the design width, and never so
// narrow that the drawable area (after fixed margins) drops below minPlot px.
// Below the floor the whole SVG scales down via Plot's max-width: 100%.
function clampWidth(width, design, marginLeft, marginRight = 0, minPlot = 150) {
  const floor = Math.min(design, marginLeft + marginRight + minPlot);
  return Math.max(Math.min(width, design), floor);
}

// Shared chart data — language-independent, single source of truth.
// Approved follow-up applications from Innovation Boosters, ⌀ per year 2022–24
const ibToipisData = { cheques: 31, projects: 25 };
// Period covered by daten_subcluster.csv (matches the section heading/prose)
const subclusterPeriod = "2023–2025";

// Hardcoded annotation strings per language
const strings = {
  de: {
    erhebung: {
      s1: "Erhebung 1:\nAbschluss der Förderung",
      s2: "Erhebung 2:\n3 Jahre nach Abschluss",
      phase: "Umsetzung\nFördermassnahme"
    },
    fin_plot: {
      xLabel: "Bewilligte Mittel in Mio. Fr. pro Jahr (⌀ 2023–2025)",
      caption: "Quelle: Cockpit/PowerBI Innosuisse (2026)",
      snsf: "Betrag wird durch den SNF verdoppelt"
    },
    n_subcluster: {
      xLabel: `Anteil bewilligte Födermittel in % nach Themenbereich pro Förderangebot (⌀ ${subclusterPeriod})`,
      caption: "Quelle: Cockpit/PowerBI Innosuisse (2026)"
    },
    draw_dn_sustainability: ["soziale Nachhaltigkeit", "ökologische Nachhaltigkeit", "Nachhaltigkeit"],
    draw_dn_digital: ["Digitale Geschäftsmodelle", "Digitale Technologien", "Digitalisierung"],
    draw_inkr_radikal: "←  Anteil klar inkrementelle  |  radikale Projekte →                               ",
    draw_results_relevance: "← Relevanz",
    leverage: { funding: "1 Fr. Förderung", value: "4 Fr. Wertschöpfung" },
    kof_did: {
      domain: ["Umsatz", "Beschäftigung"],
      xLabel: "Jahr in Bezug auf Abschluss des Innovationsprojekts",
      yLabel: "Unterschied zwischen Unternehmen mit Innosuisse-Förderung und der Kontrollgruppe in %",
      project: "Innosuisse-\nInnovationsprojekt ⟶",
      projectX: "t-8",
      grow_pos: "↑ Innosuisse-Unternehmen wachsen stärker",
      grow_neg: "↓ Kontrollgruppe-Unternehmen wachsen stärker",
      marginLeft: 90,
      marginRight: 158
    },
    ib_toipis: {
      label: "⌀ Anzahl bewilligte Gesuche aus einem Innovation Booster pro Jahr",
      cheques: "Innovationsschecks",
      projects: "Innovationsprojekte",
      labelOffset: 25
    },
    su_vza: {
      label: "⌀ Anzahl Vollzeitbeschäftigte nach Abschluss des Core Coachings und 3 Jahre danach",
      type: "Vollzeitbeschäftigte",
      delta: "+11.7 Vollzeitbeschäftigte",
      pct_delta: 18.5,
      xDomain: [0, 27],
      textAnchor: "middle"
    },
    fundingUnit: "Mio. Fr."
  },
  en: {
    erhebung: {
      s1: "Survey 1:\nAt completion of funding",
      s2: "Survey 2:\n3 years after completion",
      phase: "Implementation \nof support offer"
    },
    fin_plot: {
      xLabel: "Approved funding in millions of Swiss francs per year (⌀ 2023-2025)",
      caption: "Source: Cockpit/PowerBI Innosuisse (2026)",
      snsf: "The amount is doubled by the SNSF"
    },
    n_subcluster: {
      xLabel: `Share of approved funding in % by thematic area and support offer (⌀ ${subclusterPeriod})`,
      caption: "Source: Cockpit / PowerBI Innosuisse (2026)"
    },
    draw_dn_sustainability: ["social sustainability", "environmental sustainability", "sustainability"],
    draw_dn_digital: ["digital business models", "digital technologies", "digitisation"],
    draw_inkr_radikal: "←  Share of clearly incremental  |  radical projects →                               ",
    draw_results_relevance: "← Relevance",
    leverage: { funding: "1 CHF funding", value: "4 CHF of value added" },
    kof_did: {
      domain: ["Sales", "Employment"],
      xLabel: "Year in relation to completion of the innovation project",
      yLabel: "Difference between companies with Innosuisse funding and the control group in %",
      project: "Innosuisse project ⟶",
      projectX: "t-2",
      grow_pos: "↑ Companies with Innosuisse funding grow stronger",
      grow_neg: "↓ Control group companies grow stronger",
      marginLeft: 80,
      marginRight: 180
    },
    ib_toipis: {
      label: "⌀ Number of approved applications from an\nInnovation Booster per year",
      cheques: "Innovation cheques",
      projects: "Innovation projects",
      labelOffset: 35
    },
    su_vza: {
      label: "⌀ Number of full-time employees after completing Core Coaching and 3 years later",
      type: "Full-time employees",
      delta: "+11.7 full-time employees",
      pct_delta: 10.5,
      xDomain: [0, 30],
      textAnchor: "start"
    },
    fundingUnit: "CHF mn"
  },
  fr: {
    erhebung: {
      s1: "Enquête 1:\nFin de la période d'encouragement",
      s2: "Enquête 2:\n3 ans après la fin",
      phase: "Mise en œuvre de \nl'offre d'encouragement"
    },
    fin_plot: {
      xLabel: "Fonds accordés en millions de francs par an (⌀ 2023-2025)",
      caption: "Source: Cockpit/PowerBI Innosuisse (2026)",
      snsf: "Le montant est doublé par le FNS"
    },
    n_subcluster: {
      xLabel: `Part fonds accordés en % selon le domaine thématique par offre d'encouragement (⌀ ${subclusterPeriod})`,
      caption: "Source: Cockpit / PowerBI Innosuisse (2026)"
    },
    draw_dn_sustainability: ["durabilité sociale", "durabilité environnementale", "durabilité"],
    draw_dn_digital: ["modèles d'entreprise numériques", "technologies numériques", "numérisation"],
    draw_inkr_radikal: "←  Part de projets clairement incrémentaux  |  radicaux →                               ",
    draw_results_relevance: "← Pertinence",
    leverage: { funding: "1 franc\nd'encouragement", value: "4 francs\nde valeur ajoutée" },
    kof_did: {
      domain: ["Ventes", "Emploi"],
      xLabel: "Année relative à l'achèvement du projet d'innovation",
      yLabel: "Différence entre les entreprises bénéficiant de l'encouragement d'Innosuisse et le groupe de contrôle en %",
      project: "Projet\nInnosuisse ⟶",
      projectX: "t-6",
      grow_pos: "↑ Les entreprises Innosuisse croissent plus fortement",
      grow_neg: "↓ Les entreprises du groupe de contrôle croissent plus fortement",
      marginLeft: 70,
      marginRight: 160
    },
    ib_toipis: {
      label: "⌀ Nombre de demandes approuvées par an\nprovenant d'un Innovation Booster",
      cheques: "Chèque d'innovation",
      projects: "Projets d'innovation",
      labelOffset: 35
    },
    su_vza: {
      label: "⌀ Nombre de personnes employées à plein temps à la fin du Core Coaching et trois ans plus tard",
      type: "Personnes employées à plein temps",
      delta: "+11.7 personnes employées à plein temps",
      pct_delta: 10.5,
      xDomain: [0, 30],
      textAnchor: "start"
    },
    fundingUnit: "mio. de francs"
  }
};

const s = strings[lang];

// Instrument domain — index-aligned with palette.cat
const instDomain = [
  "Förderung für Schweizer Innovationsprojekte",
  "Förderung für internationale Innovationsprojekte",
  "Starthilfe für Projekte und Vernetzung",
  "Begleitung von Start-ups",
];

// Translated instrument labels for legends (same order as instDomain)
const instLabels = lang === "en"
  ? ["Funding for national projects", "Funding for international projects", "Project set-up assistance and networking", "Support for start-ups"]
  : lang === "fr"
  ? ["Encouragement de projets nationaux", "Encouragement de projets internationaux", "Aide au démarrage de projets et mise en réseau", "Accompagnement de start-up"]
  : instDomain;

// Diverging pos/neg 4-stop (even selection from divPN6, teal→orange)
const divPN4 = [palette.divPN6[5], palette.divPN6[3], palette.divPN6[2], palette.divPN6[0]];

// Diverging domains per survey question (index-aligned with divPN3 / divPN4)
const zufriedenDomain = lang === "en"
  ? ["satisfied to very satisfied", "rather not satisfied to rather satisfied", "not at all satisfied to not satisfied"]
  : lang === "fr"
  ? ["satisfait à très satisfait", "plutôt pas satisfait à plutôt satisfait", "pas du tout satisfait à pas satisfait"]
  : ["zufrieden bis sehr zufrieden", "eher nicht bis eher zufrieden", "überhaupt nicht zufrieden bis nicht zufrieden"];

const zielDomain = lang === "en"
  ? ["fully achieved or exceeded", "rather achieved", "rather not achieved", "not or only partially achieved"]
  : lang === "fr"
  ? ["complètement atteint ou dépassé", "plutôt atteint", "plutôt pas atteint", "pas atteint ou dans une faible mesure"]
  : ["vollständig erreicht oder übertroffen", "eher erreicht", "eher nicht erreicht", "nicht oder nur in geringem Ausmass erreicht"];

const erfolgDomain = lang === "en"
  ? ["high or very high success", "rather high success", "rather low success", "no or low success"]
  : lang === "fr"
  ? ["succès élevé ou très élevé", "succès plutôt élevé", "succès plutôt faible", "pas de succès ou succès faible"]
  : ["hoher oder sehr hoher Erfolg", "eher hoher Erfolg", "eher geringer Erfolg", "kein Erfolg oder geringer Erfolg"];

// Start-up cohort domain
const suDomain = lang === "en"
  ? ["After completion", "Three years after completion"]
  : lang === "fr"
  ? ["Après la fin du projet", "Trois ans après la fin du projet"]
  : ["Nach Abschluss", "3 Jahre nach Abschluss"];

const black_innosuisse = "#000000";
const grey_innosuisse  = "#E8E8E8";
const grey_background  = "#E8E8E8";
const grey_comment     = "#333333";
const plotStyle = { fontFamily: '"Frutiger LT", Arial, sans-serif', fontWeight: 200 };

// Methodische Grundlage / Methodology / Bases méthodologiques
export function plot_erhebung(width = 540) {
  return Plot.plot({
    height: 110,
    width: clampWidth(width, 540, 25, 100, 250),
    marginTop: 35,
    marginBottom: 25,
    marginLeft: 25,
    marginRight: 100,
    x: {
      domain: [0, 6],
      tickFormat: () => "",
      tickSize: 0,
      label: null
    },
    y: {
      domain: [0.2, 1.8],
      tickFormat: () => "",
      tickSize: 0,
      label: null
    },
    marks: [
      Plot.rect([{ x1: 0, x2: 3, y1: 0.5, y2: 1.5 }], {
        x1: "x1", x2: "x2", y1: "y1", y2: "y2",
        fill: grey_innosuisse
      }),
      Plot.arrow([{ x1: 3.2, x2: 5.8, y1: 1, y2: 1 }], {
        x1: "x1", x2: "x2", y1: "y1", y2: "y2",
        stroke: grey_innosuisse
      }),
      Plot.dot([{ year: 3 }, { year: 6 }], {
        x: "year", y: 1, r: 7, symbol: "diamond", fill: black_innosuisse
      }),
      Plot.text(
        [
          { year: 3, text: s.erhebung.s1 },
          { year: 6, text: s.erhebung.s2 }
        ],
        {
          x: "year", y: 1, text: "text",
          fontSize: 12, fill: "black", textAnchor: "middle", dy: -40
        }
      ),
      Plot.text([{ year: 1.5, text: s.erhebung.phase }], {
        x: "year", y: 1, text: "text",
        fontSize: 12, textAnchor: "middle"
      })
    ]
  });
}

export function draw_fin_plot(
  funding,
  type,
  height,
  displayXAxis,
  width = 640,
  displayCaption = false
) {
  const instrCol = `instrument_${lang}`;
  const hrefCol = `href_${lang}`;

const data = aq
  .from(daten_controlling)
  .groupby("FA", "inst", instrCol, "type", "monitoring", "year")
  .rollup({
    sum_funding: (d) => aq.op.sum(d.funding),
    sum_n: (d) => aq.op.sum(d.n)
  })
  .groupby("FA", "inst", instrCol, "type", "monitoring")
  .rollup({
    mean_funding: (d) => aq.op.round(aq.op.mean(d.sum_funding) * 10) / 10,
    sum_funding: (d) => aq.op.round(aq.op.sum(d.sum_funding) * 10) / 10,
    mean_n: (d) => aq.op.round(aq.op.mean(d.sum_n)),
    sum_n: (d) => aq.op.round(aq.op.sum(d.sum_n))
  })
  .objects();

  const df =
    type === undefined
      ? data.filter((d) => d.FA === funding)
      : data.filter((d) => (d.type === type) & (d.FA === funding));

  const fmtFunding = lang === "de"
    ? (v) => `⌀ ${v.toLocaleString("fr-CH")} Mio. Fr.`
    : lang === "fr"
    ? (v) => `⌀ ${v.toLocaleString("fr-CH")} mio. de francs`
    : (v) => `⌀ CHF ${v.toLocaleString("de-CH")} mn`;

  const w = Math.min(width, 640);
  const mLeft = Math.min(280, Math.round(w * 0.5));

  return Plot.plot({
    marginLeft: mLeft,
    marginRight: 0,
    marginTop: displayXAxis ? 20 : -1,
    marginBottom: 0,
    caption: displayCaption
      ? html`<span style="font-size: 10px; color: #828282;">${s.fin_plot.caption}</span>`
      : undefined,
    height: height,
    width: w,
    x: {
      domain: [0, 200],
      axis: null,
      label: null
    },
    y: { label: null, axis: null },
    style: { ...plotStyle, fontSize: "12px" },
    marks: [
      // wrap instrument names to the available margin (lineWidth is in ems)
      Plot.axisY({ tickSize: 0, lineWidth: mLeft / 12 - 1 }),
      displayXAxis ? Plot.axisX({ anchor: "top", tickSize: 0, ticks: [], label: s.fin_plot.xLabel }) : null,
      Plot.barX(df, {
        x: "mean_funding",
        y: (d) => (d.monitoring === "Ja" ? `*${d[instrCol]}` : d[instrCol]),
        sort: { y: "x", reverse: true },
        fill: palette.accent,
        href: hrefCol
      }),
      Plot.ruleX([0]),
      Plot.textX(df, {
        x: "mean_funding",
        y: (d) => (d.monitoring === "Ja" ? `*${d[instrCol]}` : d[instrCol]),
        text: (d) => fmtFunding(Math.round(d.mean_funding, 0)),
        textAnchor: "start",
        dx: 5,
        sort: { y: "x", reverse: true }
      })
    ]
  });
}

// Language-neutral row order for the subcluster chart, keyed by instrument_de;
// translated to the current language via the data rows.
const subclusterOrder = [
  "Innovationsprojekte mit Umsetzungspartner",
  "Innovationsscheck",
  "Innovationsprojekte ohne Umsetzungspartner",
  "BRIDGE Proof of Concept",
  "BRIDGE Discovery",
  "Start-up Coaching"
];

export function n_subcluster(width = 755) {
  const ns = s.n_subcluster;
  const yDomain = subclusterOrder.map(
    (de) => df_subcluster_n.find((d) => d.instrument_de === de)?.instrument_n ?? de
  );
  const rowMax = d3.rollup(
    df_subcluster_n,
    (v) => d3.max(v, (d) => d.obs_value),
    (d) => d.instrument_n
  );
  const data = df_subcluster_n.map((d) => ({
    ...d,
    isMax: d.obs_value === rowMax.get(d.instrument_n)
  }));
  return Plot.plot({
    marginLeft: 170,
    marginRight: 50,
    marginBottom: 0,
    marginTop: 55,
    caption: html`<span style="font-size: 10px; color: #828282;">${ns.caption}</span>`,
    style: { ...plotStyle, fontSize: "12px" },
    width: clampWidth(width, 755, 170, 50, 300), // 5 facets → ≥60px each
    height: 270,
    color: {
      type: "categorical",
      domain: [
        "Engineering",
        "Life sciences",
        "Energy & environment",
        "ICT",
        "Social sciences & business mgmt"],
      range: palette.cat
    },
    fx: {
      domain: [
        "Engineering",
        "Life sciences",
        "Energy & environment",
        "ICT",
        "Social sciences & business mgmt"
      ],
      axis: "top",
      tickFormat: (d) => "",
      label: "",
      frameAnchor: "start",
    },
    x: {
      labelOffset: 55,
      domain: [0, 100],
      axis: "top",
      labelAnchor: "left",
      percent: true,
      label: ns.xLabel,
      ticks: []
    },
    y: {
      label: "",
      axis: null,
      domain: yDomain
    },
    marks: [
      Plot.axisY({ anchor: "left", tickSize: 0, lineWidth: 14 }),
      Plot.axisFx({ textAnchor: "start", dx: -50, tickSize: 0, lineWidth: 10 }),
      Plot.barX(data, {
        x: 1,
        y: "instrument_n",
        fx: "subcluster",
        fill: grey_background,
        insetTop: 3,
        insetBottom: 3,
        sort: { y: "x", reverse: true }
      }),
      Plot.barX(data, {
        x: "obs_value",
        y: "instrument_n",
        fx: "subcluster",
        fill: "subcluster",
        stroke: (d) => (d.isMax ? "#222" : "none"),
        strokeWidth: 1,
        insetTop: 3,
        insetBottom: 3,
        sort: { y: "x", reverse: true }
      }),
      Plot.textX(data, {
        x: "obs_value",
        y: "instrument_n",
        fx: "subcluster",
        text: (d) => d3.format("0.0%")(d.obs_value),
        textAnchor: "start",
        dx: 5
      })
    ]
  })
}

export function draw_result_zf_legend() {
  return Plot.legend({ color: { type: "ordinal", domain: zufriedenDomain, range: palette.div3 }, swatchSize: 12, style: { ...plotStyle, fontSize: "12px" } })
}

export function draw_result(data, instrument, x_axis = true, sy = 0, width = 640) {
  const df = data.filter((d) => d.instrument_de === instrument);
  const x_axis_d = x_axis
    ? { percent: true, label: "in %", ticks: [0, 25, 50, 75, 100] }
    : { label: null, axis: null };

  const instr = `instrument_${lang}`;
  const respondant = `respondant_${lang}`;
  const result_type = `result_type_${lang}`;

  return Plot.plot({
    width: clampWidth(width, 640, 180, 170),
    height: x_axis ? 40 + 25 + sy : 40 + sy,
    x: x_axis_d,
    style: { ...plotStyle, fontSize: "12px" },
    marginBottom: x_axis ? 25 : 0,
    marginTop: 0,
    marginLeft: 180,
    marginRight: 170,
    y: {
      label: null,
      axis: "right",
      tickSize: 0,
      type: "band",
      reverse: false
    },
    fy: {
      axis: null,
      label: null,
      ticks: null
    },
    color: data === df_ziel
      ? { type: "ordinal", domain: zielDomain, range: div4 }
      : data === df_zufrieden
      ? { type: "ordinal", domain: zufriedenDomain, range: palette.div3 }
      : { type: "ordinal", domain: erfolgDomain, range: div4 },
    marks: [
      Plot.axisFy({ lineWidth: 15, anchor: "left" }),
      Plot.barX(df, {
        x: (d) => d.pct/100,
        y: respondant,
        fy: instr,
        fill: result_type
      }),
      Plot.textX(
        df,
        Plot.stackX({
          x: (d) => d.pct/100,
          y: respondant,
          fy: instr,
          text: (d) => d3.format("0.0%")(d.pct/100),
          opacity: (d) => (d.pct/100 < 0.04 ? 0 : 1)
        })
      )
    ]
  });
}

export function draw_innoart(plot = "type_2", width = 640, height = 150) {
  const df = df_innovationsart.filter((d) => d.plot === plot && d.pct !== null);
  const type = `type_${lang}_n`;
  const labelKey = `label_${lang}`;

  const x_axis_d = {
    axis: "top",
    labelOffset: lang === "fr" ? 55 : 45,
    labelAnchor: "left",
    domain: [0, 100],
    ticks: [],
    label: df[0][labelKey]
  };

  let df_order;
  let df_diff = [];

  // Special handling for "inkr_radikal" plot (ported from DE version)
  if (plot === "inkr_radikal") {
    const instSet = new Set(df.map((d) => d.instrument_n));
    const differences = [];

    instSet.forEach((inst) => {
      const radikale = df.find((d) => d.instrument_n === inst && d.type_de === "radikale");
      const inkrementelle = df.find((d) => d.instrument_n === inst && d.type_de === "inkrementelle");

      if (radikale && inkrementelle) {
        const diff = radikale.pct - inkrementelle.pct;
        differences.push({
          instrument_n: inst,
          difference: diff,
          inst: radikale.inst
        });
      }
    });

    differences.sort((a, b) => a.difference - b.difference);
    df_order = differences.map((d) => d.instrument_n);
    df_diff = differences;
  } else {
    df_order = Array.from(new Set(df.map((item) => item.instrument_n)));
  }

  const marks = [
    Plot.axisY({ anchor: "left", tickSize: 0, lineWidth: 14 }),
    Plot.axisFx({ anchor: "top", lineWidth: 10 }),
    Plot.barX(df, {
      x: "pct",
      y: "instrument_n",
      fill: type,
      fx: type,
      inset: 0.5,
      sort: plot === "inkr_radikal" ? null : { y: "-x" }
    }),
    Plot.barX(df, {
      x1: "pct",
      x2: 100,
      y: "instrument_n",
      fill: grey_background,
      fx: type,
      inset: 0.5
    }),
    Plot.textX(df, {
      x: "pct",
      y: "instrument_n",
      text: (d) => `${d.pct} %`,
      dx: 5,
      fx: type,
      sort: plot === "inkr_radikal" ? null : { y: "-x" },
      textAnchor: "start"
    })
  ];

  // Add difference labels for "inkr_radikal" plot
  if (plot === "inkr_radikal" && df_diff.length > 0) {
    const df_diff_with_type = df_diff.map(d => {
      const matchRow = df.find(r => r.instrument_n === d.instrument_n && r.type_de === "radikale");
      return { ...d, [type]: matchRow ? matchRow[type] : "radikale" };
    });

    marks.push(
      Plot.text(df_diff_with_type, {
        x: 100,
        y: "instrument_n",
        text: (d) => d.difference > 0 ? `+${d.difference} %` : `${d.difference} %`,
        dx: 45,
        textAnchor: "end",
        fill: grey_comment,
        fx: type
      })
    );
    marks.push(
      Plot.text(df_diff_with_type, {
        x: 100,
        y: "instrument_n",
        text: ["Δ"],
        dy: -30,
        dx: 45,
        textAnchor: "end",
        fill: grey_comment,
        fx: type
      })
    );
  }

  return Plot.plot({
    marginTop: lang === "fr" ? 55 : 50,
    marginLeft: 170,
    marginBottom: 0,
    marginRight: plot === "inkr_radikal" ? 65 : 15,
    width: width,
    height: height,
    color: { type: "categorical", range: (plot === "type_2" && width <= 482) ? palette.cat.slice(3) : palette.cat },
    fx: {
      label: null,
      axis: null
    },
    fy: { label: null },
    style: { ...plotStyle, fontSize: "12px" },
    x: x_axis_d,
    y: { domain: df_order, label: null, axis: null },
    marks: marks
  });
}

export function draw_dn(
  plot = "digital",
  instrument = instruments.CC,
  x_axis = true,
  sy = 0,
  width = 800
) {
  const df = df_innovationsart.filter(
    (d) => d.plot === plot && instrument.includes(d.instrument_de)
  );

  const type = `type_${lang}_n`;
  const respondant = `respondant_${lang}`;

  const df_highlight =
    plot === "digital"
      ? df.filter((d) => d.type_de === "Digitalisierung")
      : df.filter((d) => d.type_de === "Nachhaltigkeit");

  const x_axis_d = x_axis
    ? {
        axis: "top",
        labelOffset: 45,
        labelAnchor: "left",
        domain: [0, 100],
        ticks: [],
        label: df[0][`label_${lang}`]
      }
    : { label: null, axis: null };

  const df_order = new Set(df.map((item) => item.instrument_n));

  return Plot.plot({
    marginTop: x_axis ? 45 : 0,
    marginBottom: 0,
    marginLeft: 165,
    marginRight: 120,
    height: x_axis ? 85 + sy : 40 + sy,
    width: clampWidth(width, 800, 165, 120, 240), // 3 facets → ≥80px each
    fx: {
      label: null,
      axis: "top",
      reverse: true,
      domain: plot !== "digital" ? s.draw_dn_sustainability : s.draw_dn_digital
    },
    fy: { label: null, axis: null },
    style: { ...plotStyle, fontSize: "12px" },
    x: x_axis_d,
    y: { label: null, tickSize: 0, axis: "right", reverse: true },
    marks: [
      Plot.axisFy({ anchor: "left", lineWidth: 14 }),
      Plot.barX(df, {
        x: "pct",
        y: respondant,
        fill: palette.accentInk,
        fx: type,
        fy: "instrument_n",
        inset: 0.5,
        sort: { y: "-x" }
      }),
      Plot.barX(df_highlight, {
        x: "pct",
        y: respondant,
        fill: palette.accent,
        fx: type,
        fy: "instrument_n",
        inset: 0.5,
        sort: { y: "-x" }
      }),
      Plot.barX(df, {
        x1: "pct",
        x2: 100,
        y: respondant,
        fill: grey_background,
        fx: type,
        fy: "instrument_n",
        inset: 0.5
      }),
      Plot.textX(df, {
        x: "pct",
        y: respondant,
        text: (d) => `${d.pct} %`,
        dx: 5,
        fx: type,
        fy: "instrument_n",
        sort: { y: "-x" },
        textAnchor: "start"
      }),
      Plot.textX(
        df_highlight.filter(
          (d) => d.type_de === "Nachhaltigkeit" || "Digitalisierung"
        ),
        {
          x: 100,
          y: respondant,
          text: ["→"],
          dx: 2,
          dy: x_axis ? 11 : 0,
          fx: type,
          fy: "instrument_n",
          sort: { y: "-x" },
          textAnchor: "start"
        }
      )
    ]
  });
}

// Ergebnisse Förderangebote

export function drawMiniPlot(instrument, funding = true) {
  const labelCol = `label_${lang}`;
  const instrCol = `instrument_${lang}`;
  const pre_df = daten_controlling.filter((d) => d.instrument_de === instrument || d.label_de === instrument);

  const df =  instrument !== "Start-up Coaching" ? pre_df : aq
  .from(pre_df)
  .groupby("FA", "inst", "type", instrCol, "year", "monitoring")
  .rollup({
    funding: (d) => aq.op.sum(d.funding),
    n: (d) => aq.op.sum(d.n)
  })
  .derive({ [labelCol]: aq.escape(d => d[instrCol]) })
  .objects();
  
  const label = df[0][labelCol];

  return Plot.plot({
    height: 100,
    width: 110,
    marginTop: 35,
    marginRight: 40,
    marginLeft: 0,
    y: funding ? { label: s.fundingUnit } : { label: label, domain: instrument !== "Start-up Coaching" ? undefined : [0,400] },
    x: {
      domain: [2023, 2024, 2025],
      ticks: [2023, 2025],
      tickSize: 0,
      label: null,
      tickFormat: (d) => String(d)
    },
    style: plotStyle,
    marks: [
      Plot.barY(df, {
        x: "year",
        y: funding ? "funding" : "n",
        fill: palette.accent,
        sort: { x: "y", reverse: true }
      }),
      Plot.textY(df, {
        x: "year",
        y: funding ? "funding" : "n",
        text: (d) =>
          funding && d.funding > 100
            ? d.funding.toFixed(0)
            : funding
            ? (d.funding.toFixed(1) * 1).toLocaleString("fr-CH")
            : d.n,
        dy: -9,
        sort: { x: "y", reverse: true },
        frameAnchor: "middle"
      }),
      Plot.ruleY([0])
    ]
  });
}

export function draw_waffle(
  title = "ip_impuls",
  dy_text = 0,
  dy_text2 = 0
) {
  const df = df_waffle.filter((d) => d.title === title);
  const df1 = df.filter((d) => d.rank === "pct1");
  const df2 = df.filter((d) => d.rank === "pct2");

  // Dynamically select the correct text column based on the current language
  const text = `text_${lang}`;
  
  const { negative, opposites } = df[0];
  const colorRange = opposites ? palette.div2
    : negative ? palette.hueN2
    : palette.hue2;

  const x1 = df2.length !== 0 ? getLastDigit(df2[0].pct) * 10 - 1 : null;

  const y1 =
    df2.length !== 0
      ? Math.floor(df2[0].pct / 10) * 10 + (x1 === 94 ? 2 : 10)
      : null;
  const y2 =
    df2.length !== 0
      ? Math.floor(df2[0].pct / 10) * 10 + (x1 === 94 ? 15 : 23) + dy_text2
      : null;

  const marks = [
    Plot.waffleY(
      { length: 1 },
      {
        y2: [100],
        fill: palette.background,
        rx: "100%",
        gap: 3.5,
        stroke: grey_innosuisse,
        strokeWidth: 0
      }
    ),
    Plot.text(df1, {
      text: text,
      lineWidth: 13,
      dy: dy_text + 13,
      dx: 77,
      fill: black_innosuisse,
      textAnchor: "start",
      frameAnchor: "top-left",
      lineAnchor: "top",
      fontSize: 14,
      lineHeight: 1.15,
      stroke: "white",
      strokeWidth: 1,
      strokeOpacity: 1
    }),
    Plot.text(df1, {
      text: (d) => (d.pct / 100).toLocaleString("fr-CH", { style: "percent" }),
      textAnchor: "start",
      frameAnchor: "top-left",
      lineAnchor: "top",
      dy: dy_text + 15,
      dx: 10,
      stroke: "white",
      strokeWidth: 2,
      strokeOpacity: 0.8,
      fill: black_innosuisse,
      fontSize: 26,
      fontWeight: "bold"
    }),

    ...(!df[0].opposites
      ? [
          Plot.waffleY(df, {
            y2: "pct",
            fill: "rank",
            rx: "100%",
            gap: 3
          })
        ]
      : [
          Plot.waffleY(df1, {
            y1: (d) => 100 - d.pct,
            y2: 100,
            rx: "100%",
            fill: "rank",
            gap: 2
          }),
          Plot.waffleY(df2, {
            y: "pct",
            rx: "100%",
            fill: "rank",
            gap: 2
          })
        ]),

    ...(df2.length !== 0
      ? [
          Plot.arrow([{ x1: x1, y1: y1, x2: 100, y2: y2 }], {
            x1: "x1",
            y1: "y1",
            x2: "x2",
            y2: "y2",
            bend: 15,
            headLength: 10
          }),
          Plot.text(df2, {
            x: [100],
            y: y2,
            textAnchor: "start",
            lineAnchor: "top",
            dy: -5,
            lineWidth: 9.9,
            fill: black_innosuisse,
            text: text,
            dx: 8,
            fontSize: 14,
            lineHeight: 1.15
          })
        ]
      : [])
  ];

  return Plot.plot({
    axis: null,
    label: null,
    height: 255 - dy_text,
    marginTop: -dy_text,
    marginBottom: 15,
    marginLeft: 0,
    marginRight: y2 === null ? 0 : 140,
    width: y2 === null ? 240 : 380,
    color: Plot.scale({ color: { domain: ["pct1", "pct2"], range: colorRange, type: "ordinal" } }),
    x: { domain: [0, 100] },
    y: { domain: [0, 100] },
    style: plotStyle,
    marks: marks
  });
}

export function draw_bar(
  data,
  {
    title = "ip_impuls",
    mode = "single", // "single" | "opposite"
    rank = "pct1"   // "pct1" | "pct2" — only used when mode === "single"
  } = {}
) {
  const df = data.filter((d) => d.title === title);
  if (df.length === 0) return null;

  const { negative } = df[0];
  const colorRange = negative ? palette.div2
    : mode === "opposite" ? palette.div2
    : [palette.accent];

  const formatPct = (d) =>
    (d.pct / 100).toLocaleString("fr-CH", { style: "percent" });

  const label = (subset, side) =>
    Plot.text(subset, {
      x: side === "left" && subset[0].pct > 20 ? "pct" : undefined,
      frameAnchor: side === "right" ? "right" : "left",
      dx: side === "left" && subset[0].pct <= 20 ? 2 : -2,
      dy: 20,
      text: formatPct,
      fill: "black",
      fontSize: 13,
      fontWeight: "bold",
      textAnchor: side === "left" && subset[0].pct <= 20 ? "start" : "end"
    });

  const marks = [
    Plot.barX(
      { length: 1 },
      { x1: 0, x2: 100, fill: palette.background, insetTop: 1, insetBottom: 1 }
    )
  ];

  if (mode === "opposite") {
    const df1 = df.filter((d) => d.rank === "pct1");
    const df2 = df.filter((d) => d.rank === "pct2");
    marks.push(
      Plot.barX(df1, { x: "pct", fill: "rank", insetTop: 1, insetBottom: 1 }),
      Plot.barX(df2, {
        x1: (d) => 100 - d.pct,
        x2: 100,
        fill: "rank",
        insetTop: 1,
        insetBottom: 1
      }),
      label(df1, "left"),
      label(df2, "right")
    );
  } else {
    const subset = df.filter((d) => d.rank === rank);
    marks.push(
      Plot.barX(subset, {
        x: "pct",
        fill: "rank",
        insetTop: 1,
        insetBottom: 1
      }),
      label(subset, "left")
    );
  }

  marks.push(
    //Plot.ruleX([0, 100]),
    Plot.ruleX([50], { stroke: "white" })
  );

  return Plot.plot({
    axis: null,
    label: null,
    height: 38,
    width: 150,
    marginTop: 3,
    marginBottom: 15,
    color: Plot.scale({
      color: {
        domain: ["pct1", "pct2"],
        range: colorRange,
        type: "ordinal"
      }
    }),
    x: { domain: [0, 100] },
    style: plotStyle,
    marks
  });
}

function getLastDigit(number) {
  const numStr = number.toString();
  const lastDigit = parseInt(numStr.slice(-1), 10);
  return lastDigit === 0 ? 9.5 : lastDigit;
}

export function draw_results(
  instrument = instruments.CC,
  relevance = true,
  marginLeft = 200,
  width = 640
) {
  const width_max = clampWidth(width, 640, marginLeft, relevance ? 55 : 15);
  const type = `type_${lang}`;
  const label_lng = `label_${lang}`;
  const caption_lng = `caption_${lang}`;
  const inst_shade = df_ergebnisse.find(
    (d) => d.instrument === instrument
  ).inst;

  const df = df_ergebnisse.filter((d) => d.instrument === instrument);

  const df_order = relevance
    ? df.sort((a, b) => b.relevance - a.relevance).map((item) => item[type])
    : df.sort((a, b) => b.pct - a.pct).map((item) => item[type]);

  const label = df.map((row) => row[label_lng])[0];

  const caption =
    df.map((row) => row[caption_lng])[0] === null
      ? ""
      : df.map((row) => row[caption_lng])[0];

  const marks = [
    Plot.barX(df, {
      x: "pct",
      y: type,
      fill: "highlight",
      inset: 0.5
    }),
    Plot.barX(df, {
      x1: "pct",
      x2: 100,
      y: type,
      fill: grey_background,
      inset: 0.5
    }),
    Plot.ruleX([50], { stroke: "white", strokeOpacity: 1 }),
    Plot.textX(df, {
      x: "pct",
      y: type,
      text: (d) => `${d.pct} %`,
      dx: 5,
      sort: { y: "-x" },
      textAnchor: "start"
    }),

    ...(relevance
      ? [
          Plot.textX(df, {
            x: 100,
            y: type,
            text: (d) => (d.relevance < 100 ? `${d.relevance} %` : ""),
            fill: grey_comment,
            dx: 35,
            textAnchor: "end"
          }),
          Plot.textX(df, {
            x: 100,
            y: type,
            text: [s.draw_results_relevance],
            fill: grey_comment,
            dx: 50,
            dy: -5,
            rotate: -90,
            textAnchor: "end"
          })
        ]
      : [])
  ];

  return Plot.plot({
    marginTop: 30,
    marginLeft: marginLeft,
    marginRight: relevance ? 55 : 15,
    marginBottom: 10,
    width: width_max,
    color: { type: "categorical", range: palette.hue2 },
    caption: html`<span style="font-size: 10px; color: #828282;">${caption}</span>`,
    style: { ...plotStyle, fontSize: "12px" },
    x: {
      axis: "top",
      labelAnchor: "left",
      domain: [0, 100],
      tickSize: 0,
      ticks: [],
      labelOffset: 25,
      label: label
    },
    y: {
      label: null,
      tickSize: 0,
      domain: df_order
    },
    marks: marks
  });
}

const df_leverage = [
    { x: 110, y: 100, color: "Förderung" },
    { x: 290, y: 100, color: "Wertschöpfung" },
    { x: 330, y: 100, color: "Wertschöpfung" },
    { x: 370, y: 100, color: "Wertschöpfung" },
    { x: 410, y: 100, color: "Wertschöpfung" }
  ];

export function leverage(width = 640) {
  return Plot.plot({
    marginLeft: 0,
    marginRight: 0,
    style: { ...plotStyle, fontSize: "20px", fontWeight: 700 },
    axis: null,
    x: { domain: [50, 500] },
    y: { domain: [95, 108] },
    width: Math.min(width, 640),
    height: 150,
    color: { legend: false, range: palette.hue2, type: "categorical", reverse: true },
    marks: [
      Plot.dot(
        df_leverage,
        { x: "x", y: "y", r: 25, fill: "color"}
      ),
      // Plot.dot(
      //   df_leverage.filter((d) => d.color === "Wertschöpfung"),
      //   { x: "x", y: "y", r: 25, fill: "#06F7DA", opacity: 0.5 }
      // ),
      Plot.arrow([{ x1: 150, y1: 100, x2: 250, y2: 100 }], {
        x1: "x1",
        y1: "y1",
        x2: "x2",
        y2: "y2",
        headLength: 10,
        strokeWidth: 1.5
      }),
      Plot.text(
        [
          { x: 110, y: 105, text: s.leverage.funding },
          { x: 350, y: 105, text: s.leverage.value }
        ],
        {
          x: "x",
          y: "y",
          text: "text",
          textAnchor: "middle",
          fill: "black"
        }
      )
    ]
  })
};

export function kof_did_plot(nr, width = 640) {
  const ks = s.kof_did;
  const domain_base = ks.domain;
  const domain = nr === undefined ? domain_base : [domain_base[nr]];

  return Plot.plot({
    marginLeft: ks.marginLeft,
    marginBottom: 45,
    marginRight: ks.marginRight,
    marginTop: 45,
    x: {
      domain: ["t-12", "t-10", "t-8", "t-6", "t-4", "t-2", "t", "t+2", "t+4"],
      label: ks.xLabel
    },
    y: {
      domain: [-75, 75],
      ticks: [-75, -50, -25, 25, 50, 75],
      tickFormat: (d) => (d > 0 ? `+${d} %` : `${d} %`),
      percent: true,
      labelOffset: 15,
      label: ks.yLabel
    },
    fy: {
      label: null,
      domain: domain,
      axis: "left",
      padding: nr === undefined ? 0.2 : 0.05
    },
    height: nr === undefined ? 600 : 350,
    width: clampWidth(width, 640, ks.marginLeft, ks.marginRight),
    style: { ...plotStyle, fontSize: "12px" },
    marks: [
      Plot.rectX([{ x1: "t-2", y1: -0.75, x2: "t", y2: 0.85 }], {
        x1: "x1",
        x2: "x2",
        y1: "y1",
        y2: "y2",
        fill: "lightblue",
        fillOpacity: 0.2
      }),
      Plot.ruleY([0], { stroke: grey_innosuisse, opacity: 0.5 }),
      Plot.ruleX(kof_did, {
        x: "year_text",
        y1: "lower_99",
        y2: "upper_99",
        fy: "type_local",
        stroke: (d) => (d.year >= 0 ? "#92c5de" : grey_innosuisse)
      }),
      Plot.ruleX(kof_did, {
        x: "year_text",
        y1: "lower_95",
        y2: "upper_95",
        fy: "type_local",
        stroke: (d) => (d.year >= 0 ? "#0571b0" : black_innosuisse)
      }),
      Plot.dot(kof_did, {
        x: "year_text",
        y: "ptest",
        fy: "type_local",
        symbol: "diamond2",
        r: 4,
        fill: (d) => (d.year >= 0 ? "#0571b0" : black_innosuisse)
      }),
      Plot.text(
        [
          {
            type_local: domain_base[0],
            x: ks.projectX,
            y: 0.5,
            text: ks.project
          },
          {
            type_local: domain_base[0],
            x: "t",
            y: 0.26,
            text: "⌀ 21 %"
          },
          {
            type_local: domain_base[1],
            x: "t",
            y: 0.23,
            text: "⌀ 18 %"
          }
        ],
        {
          x: "x",
          y: "y",
          fy: "type_local",
          dx: 5,
          text: "text",
          textAnchor: "start",
          fill: "#0571b0"
        }
      ),
      Plot.text(
        [
          {
            x: "t+4",
            y: 0.14,
            text: ks.grow_pos
          },
          {
            x: "t+4",
            y: -0.15,
            text: ks.grow_neg
          }
        ],
        {
          x: "x",
          y: "y",
          dx: 15,
          lineWidth: 16,
          text: "text",
          textAnchor: "start",
          fill: black_innosuisse
        }
      ),
      Plot.line(
        [
          { type_local: domain_base[0], year_text: "t", y: 0.21 },
          { type_local: domain_base[0], year_text: "t+4", y: 0.21 },
          { type_local: domain_base[1], year_text: "t", y: 0.18 },
          { type_local: domain_base[1], year_text: "t+4", y: 0.18 }
        ],
        {
          x: "year_text",
          y: "y",
          fy: "type_local",
          stroke: "#0571b0",
          strokeWidth: 0.5,
          strokeDasharray: "4 0 0"
        }
      )
    ]
  })
}

export function ib_toipis(width = 400) {
  const ibs = s.ib_toipis;
  const df_toipis = [
    {
      type: ibs.cheques,
      pct: ibToipisData.cheques,
      instrument: "Starthilfe für Projekte und Vernetzung"
    },
    {
      type: ibs.projects,
      pct: ibToipisData.projects,
      instrument: "Starthilfe für Projekte und Vernetzung"
    }
  ];
  return Plot.plot({
    marginTop: 45,
    marginLeft: 120,
    marginRight: 0,
    width: clampWidth(width, 400, 120),
    color: { type: "categorical", range: palette.cat },
    x: {
      axis: "top",
      labelAnchor: "left",
      domain: [0, 40],
      ticks: [],
      labelOffset: ibs.labelOffset,
      label: ibs.label
    },
    y: { label: null, tickSize: 0 },
    style: { ...plotStyle, fontSize: "12px" },
    marks: [
      Plot.barX(df_toipis, {
        x: "pct",
        y: "type",
        fill: "instrument",
        inset: 0.5,
        sort: { y: "-x" }
      }),
      Plot.barX(
        df_toipis.filter(
          (d) => d.type === "Innosuisse-Innovationsprojekt vorbereitet"
        ),
        {
          x: "pct",
          y: "type",
          fill: "black",
          fillOpacity: 0.5,
          inset: 0.5,
          sort: { y: "-x" }
        }
      ),
      Plot.gridX({ stroke: "white", strokeOpacity: 1, interval: 1 }),
      Plot.textX(df_toipis, {
        x: "pct",
        y: "type",
        text: "pct",
        dx: 5,
        sort: { y: "-x" },
        textAnchor: "start"
      })
    ]
  })
};

export function su_vza(width = 640) {
  const svs = s.su_vza;
  return Plot.plot({
    width: Math.min(width, 640),
    marginTop: 45,
    marginBottom: 35,
    height: 120,
    marginLeft: 5,
    color: { type: "categorical", range: palette.hue2 },
    style: { ...plotStyle, fontSize: "12px" },
    x: {
      axis: "top",
      labelAnchor: "right",
      domain: svs.xDomain,
      ticks: [10.5, 26.4],
      tickFormat: d3.format(".1f"),
      label: svs.label
    },
    y: { axis: null },
    marks: [
      Plot.barX(
        [
          {
            type: svs.type,
            pct: 26.4,
            instrument: "Begleitung von Start-ups"
          }
        ],
        {
          x: "pct",
          y: "type",
          fill: "instrument",
          inset: 0.5,
          sort: { y: "x" }
        }
      ),
      Plot.barX(
        [
          {
            type: svs.type,
            pct: 26.4,
            instrument: "Begleitung von Start-ups"
          }
        ],
        {
          x1: [10.5],
          x2: "pct",
          y: "type",
          fill: palette.accentInk,
          fillOpacity: 1,
          inset: 0.5,
          sort: { y: "x" }
        }
      ),
      Plot.gridX({ stroke: "white", strokeOpacity: 1, interval: 1 }),
      Plot.textX(
        [
          {
            type: svs.type,
            pct: svs.pct_delta,
            text: svs.delta,
            instrument: "Begleitung von Start-ups"
          }
        ],
        {
          x: "pct",
          y: "type",
          text: "text",
          fontSize: 20,
          fill: "black",
          fontWeight: 700,
          dx: 5,
          dy: 40,
          sort: { y: "x" },
          textAnchor: svs.textAnchor
        }
      )
    ]
  })
}

export function su_vza_legend() {
  return Plot.legend({ color: { type: "categorical", domain: suDomain, range: palette.hue2 }, style: { ...plotStyle, fontSize: "12px" } })
}
