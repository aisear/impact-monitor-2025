import * as Plot from "npm:@observablehq/plot";
import * as aq from "npm:arquero";
import * as d3 from "npm:d3";
import { createColorScale, getBrandColors, getWaffleColorSet } from "./colors.js";
import { html } from "npm:htl";
import { getLang } from "./lang.js";
import { instruments } from "./constants.js";
import {
  daten_controlling, df_subcluster_n, df_ziel,
  df_innovationsart, df_zufrieden, df_waffle, df_ergebnisse, kof_did,
  instrument_link
} from "./data.js"

const lang = getLang();

// Hardcoded annotation strings per language
const strings = {
  de: {
    erhebung: {
      s1: "Erhebung 1:\nAbschluss der Förderung",
      s2: "Erhebung 2:\n3 Jahre nach Abschluss",
      phase: "Umsetzung\nFördermassnahme"
    },
    fin_plot: {
      xLabel: "Bewilligte Mittel in Mio. Fr. pro Jahr (⌀ 2021–2023)",
      caption: "Quelle: Cockpit/PowerBI Innosuisse (2025)",
      snsf: "Betrag wird durch den SNF verdoppelt"
    },
    n_subcluster: {
      xLabel: "Anteil bewilligte Innovationsvorhaben in % nach Themenbereich pro Förderangebot (⌀ 2022–2024)",
      caption: "Quelle: Cockpit/PowerBI Innosuisse (2025)",
      yDomain: [
        "Innovationsprojekte mit\nUmsetzungspartner",
        "Innovationsscheck",
        "Innovationsprojekte ohne\nUmsetzungspartner",
        "BRIDGE: Proof of Concept",
        "BRIDGE: Discovery",
        "Start-up Coaching"
      ],
      marginLeft: 150
    },
    draw_dn_sustainability: ["soziale Nachhaltigkeit", "ökologische Nachhaltigkeit", "Nachhaltigkeit"],
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
      pct_cheques: 31,
      pct_projects: 25,
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
      xLabel: "Approved funding in millions of Swiss francs per year (⌀ 2021-2023)",
      caption: "Source: Cockpit/PowerBI Innosuisse (2025)",
      snsf: "The amount is doubled by the SNSF"
    },
    n_subcluster: {
      xLabel: "Share of approved innovation projects in % by subject area by support offer (⌀ 2021-2023)",
      caption: "Source: Cockpit / PowerBI Innosuisse (2025)",
      yDomain: [
        "Innovation projects with\nimplementation partner",
        "Innovation cheque",
        "Innovation projects without\nimplementation partner",
        "BRIDGE Proof of Concept",
        "Start-up Core Coaching"
      ],
      marginLeft: 170
    },
    draw_dn_sustainability: ["social sustainability", "environmental sustainability", "sustainability"],
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
      pct_cheques: 36,
      pct_projects: 26,
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
      xLabel: "Fonds accordés en millions de francs par an (⌀ 2021-2023)",
      caption: "Source: Cockpit/PowerBI Innosuisse (2025)",
      snsf: "Le montant est doublé par le FNS"
    },
    n_subcluster: {
      xLabel: "Part des projets innovants accordés en % selon le domaine thématique par offre d'encouragement (⌀ 2021-2023)",
      caption: "Source: Cockpit / PowerBI Innosuisse (2025)",
      yDomain: [
        "Projets d'innovation avec\npartenaire de mise en œuvre",
        "Chèque d'innovation",
        "Projets d'innovation sans\npartenaire de mise en œuvre",
        "BRIDGE Proof of Concept",
        "Start-up Core Coaching"
      ],
      marginLeft: 170
    },
    draw_dn_sustainability: ["durabilité sociale", "durabilité environnementale", "durabilité"],
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
      pct_cheques: 36,
      pct_projects: 26,
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

const color_inst = createColorScale("inst");
const color_inst_lng = createColorScale("inst_lng");
const color_subcluster = createColorScale("subcluster");
const color_zufrieden = createColorScale("zufrieden");
const color_ziel = createColorScale("ziel");
const color_erfolg = createColorScale("erfolg");
const color_instrument = createColorScale("instrument");
const color_su = createColorScale("su");
const brand = getBrandColors();
const grey_innosuisse = brand.greyInnosuisse
const black_innosuisse = brand.blackInnosuisse
const grey_background = brand.greyBackground
const grey_comment = brand.greyComment
const color_waffle = getWaffleColorSet('dark')

export function coloredUnderline(text, domain) {
  const colorScale = color_instrument.apply;
  const color = colorScale(domain);
  const link = instrument_link.get(domain);
  return html`<a href="${link}" style="text-decoration: underline; text-decoration-thickness: 2px; text-underline-offset: 2px; text-decoration-color: ${color}; color: #3d3d3d">${text}</a>`;
}

// Methodische Grundlage / Methodology / Bases méthodologiques
export function plot_erhebung() {
  return Plot.plot({
    height: 110,
    width: 540,
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

export function draw_fin_plot_legend() {
  return Plot.legend({ color: color_inst_lng, columns: 1, swatchSize: 12, style: { fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse } })
}

export function draw_fin_plot(
  funding,
  type,
  height,
  displayXAxis,
  displayCaption = false
) {
  const instrCol = lang === "de" ? "instrument" : `instrument_${lang}`;
  const labelCol = lang === "de" ? "label" : `label_${lang}`;

  const data = aq
    .from(daten_controlling)
    .groupby("FA", "inst", instrCol, "type", labelCol, "monitoring")
    .rollup({
      mean_funding: (d) => aq.op.round(aq.op.mean(d.funding) * 10) / 10,
      sum_funding: (d) => aq.op.round(aq.op.sum(d.funding) * 10) / 10,
      mean_n: (d) => aq.op.round(aq.op.mean(d.n)),
      sum_n: (d) => aq.op.round(aq.op.sum(d.n))
    })
    .objects();

  const df =
    type === undefined
      ? data.filter((d) => d.FA === funding)
      : data.filter((d) => (d.type === type) & (d.FA === funding));

  // Bridge instrument names differ by language (DE has colon, EN/FR don't)
  const bridgePOC = lang === "de" ? instruments.BP : "BRIDGE Proof of Concept";
  const bridgeDisc = lang === "de" ? instruments.BD : "BRIDGE Discovery";
  const startupSpecial = lang === "de"
    ? "Start-up Innovationsprojekte (2023ff)"
    : lang === "fr"
    ? "Projets d'innovation pour start-up (2023+)"
    : "Start-up innovation projects (2023+)";

  const fmtFunding = lang === "de"
    ? (v) => `⌀ ${v.toLocaleString("fr-CH")} Mio. Fr.`
    : lang === "fr"
    ? (v) => `⌀ ${v.toLocaleString("fr-CH")} mio. de francs`
    : (v) => `⌀ CHF ${v.toLocaleString("de-CH")} mn`;

  const fmtFundingSpecial = lang === "de"
    ? (v) => `${v.toLocaleString("fr-CH")} Mio. Fr. (2023)`
    : lang === "fr"
    ? (v) => `${v.toLocaleString("fr-CH")} mio. de francs (2023)`
    : (v) => `CHF ${v.toLocaleString("de-CH")} mn (2023)`;

  return Plot.plot({
    marginLeft: lang === "de" ? 260 : 300,
    marginRight: lang === "de" ? 0 : 55,
    marginTop: displayXAxis ? 45 : -1,
    marginBottom: 0,
    caption: displayCaption
      ? html`<span style="font-size: 10px; color: #828282;">${s.fin_plot.caption}</span>`
      : undefined,
    height: height,
    x: {
      domain: [0, 200],
      tickSize: displayXAxis ? 1 : 0,
      tickSpacing: 50,
      labelOffset: 45,
      label: displayXAxis ? s.fin_plot.xLabel : null
    },
    y: { label: null, tickSize: 0 },
    style: {
      fontFamily: "sans-serif",
      fontSize: "12px",
      fontWeight: 200,
      color: black_innosuisse
    },
    color: color_inst,
    marks: [
      Plot.axisX({ anchor: "top", ticks: [0, 50, 100, 150, 200] }),
      Plot.gridX({ interval: 25 }),
      Plot.barX(df, {
        x: "mean_funding",
        y: (d) => (d.monitoring === "Ja" ? `*${d[instrCol]}` : d[instrCol]),
        sort: { y: "x", reverse: true },
        fill: "inst"
      }),
      Plot.barX(
        df.filter((d) => d.monitoring !== "Ja"),
        {
          x: "mean_funding",
          y: (d) => (d.monitoring === "Ja" ? `*${d[instrCol]}` : d[instrCol]),
          sort: { y: "x", reverse: true },
          opacity: 0.6,
          fill: "white"
        }
      ),
      Plot.textX(df, {
        x: "mean_funding",
        y: (d) => (d.monitoring === "Ja" ? `*${d[instrCol]}` : d[instrCol]),
        text: (d) =>
          d[instrCol] === startupSpecial
            ? fmtFundingSpecial(d.mean_funding)
            : d[instrCol] === bridgePOC || d[instrCol] === bridgeDisc
            ? `${fmtFunding(d.mean_funding)} (${s.fin_plot.snsf})`
            : fmtFunding(d.mean_funding),
        textAnchor: "start",
        dx: 5,
        sort: { y: "x", reverse: true }
      }),
      Plot.ruleX([0])
    ]
  });
}

export function n_subcluster() {
  const ns = s.n_subcluster;
  return Plot.plot({
    marginLeft: ns.marginLeft,
    marginRight: 50,
    marginBottom: 0,
    marginTop: 65,
    caption: html`<span style="font-size: 10px; color: #828282;">${ns.caption}</span>`,
    style: { fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse },
    width: 755,
    height: 270,
    color: color_subcluster,
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
      label: ""
    },
    x: {
      labelOffset: 45,
      domain: [0, 80],
      axis: "top",
      labelAnchor: "left",
      percent: true,
      label: ns.xLabel,
      ticks: []
    },
    y: {
      label: "",
      tickSize: 0,
      domain: ns.yDomain
    },
    marks: [
      Plot.barX(df_subcluster_n, {
        x: "obs_value",
        y: "instrument_n",
        fx: "subcluster",
        fill: "subcluster",
        insetTop: 5,
        insetBottom: 5,
        sort: { y: "x", reverse: true }
      }),
      Plot.textX(df_subcluster_n, {
        x: "obs_value",
        y: "instrument_n",
        fx: "subcluster",
        text: (d) => d3.format("0.0%")(d.obs_value),
        textAnchor: "start",
        dx: 5
      }),
      Plot.text(
        df_subcluster_n.filter(
          (d) => d.instrument === "Innovationsprojekte mit UP"
        ),
        {
          fx: "subcluster",
          y: "instrument_n",
          text: "subcluster_n",
          frameAnchor: "top-left",
          dy: -45
        }
      )
    ]
  })
}

export function draw_result_zf_legend() {
  return Plot.legend({ color: color_zufrieden, swatchSize: 12, style: { fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse } })
}

export function draw_result(data, instrument, x_axis = true, sy = 0) {
  const df = data.filter((d) => d.instrument_de === instrument);
  const x_axis_d = x_axis
    ? { percent: true, label: "in %", ticks: [0, 25, 50, 75, 100] }
    : { label: null, axis: null };

  const instr = `instrument_${lang}`;
  const respondant = `respondant_${lang}`;
  const result_type = `result_type_${lang}`;

  return Plot.plot({
    height: x_axis ? 40 + 25 + sy : 40 + sy,
    x: x_axis_d,
    style: {fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse},
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
      axis: "left",
      label: null,
      ticks: null
    },
    color:
      data === df_ziel
        ? color_ziel
        : data === df_zufrieden
        ? color_zufrieden
        : color_erfolg,
    marks: [
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
    labelOffset: 55,
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
    Plot.barX(df, {
      x: "pct",
      y: "instrument_n",
      fill: "inst",
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
    marginTop: 65,
    marginLeft: 170,
    marginBottom: 0,
    marginRight: plot === "inkr_radikal" ? 65 : 0,
    width: width,
    height: height,
    color: color_inst,
    fx: {
      label: null,
      axis: "top"
    },
    fy: { label: null },
    style: {fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse},
    x: x_axis_d,
    y: { domain: df_order, label: null, tickSize: 0 },
    marks: marks
  });
}

// Likert helper function for diverging stacked bars
function Likert(responses) {
  const map = new Map(responses);
  return {
    order: Array.from(map.keys()),
    offset(I, X1, X2, Z) {
      for (const stacks of I) {
        for (const stack of stacks) {
          const k = d3.sum(stack, (i) => (X2[i] - X1[i]) * (1 - map.get(Z[i]))) / 2;
          for (const i of stack) {
            X1[i] -= k;
            X2[i] -= k;
          }
        }
      }
    }
  };
}

// Diverging stacked bar chart for incremental vs radical innovations (ported from DE)
export function draw_inkr_radikal_diverging(width = 640, height = 260) {
  const df_raw = df_innovationsart.filter((d) => d.plot === "inkr_radikal" && d.pct !== null);
  const labelKey = `label_${lang}`;

  const instSet = new Set(df_raw.map((d) => d.instrument_n));
  const transformedData = [];
  const differences = [];

  instSet.forEach((inst) => {
    const radikale_row = df_raw.find((d) => d.instrument_n === inst && d.type_de === "radikale");
    const inkrementelle_row = df_raw.find((d) => d.instrument_n === inst && d.type_de === "inkrementelle");

    if (radikale_row || inkrementelle_row) {
      const radikale_pct = radikale_row ? radikale_row.pct : 0;
      const inkrementelle_pct = inkrementelle_row ? inkrementelle_row.pct : 0;
      const neutral_pct = 100 - radikale_pct - inkrementelle_pct;
      const inst_value = radikale_row ? radikale_row.inst : inkrementelle_row.inst;

      const diff = radikale_pct - inkrementelle_pct;
      differences.push({ instrument_n: inst, difference: diff });

      const baseColor = color_inst.apply(inst_value);
      const lighterColor = d3.color(baseColor).brighter(0.8).formatHex();

      transformedData.push({
        instrument_n: inst,
        category: "inkrementelle",
        value: inkrementelle_pct,
        inst: inst_value,
        color: baseColor,
        label: df_raw[0][labelKey]
      });
      transformedData.push({
        instrument_n: inst,
        category: "neutral",
        value: neutral_pct,
        inst: inst_value,
        color: grey_background,
        label: df_raw[0][labelKey]
      });
      transformedData.push({
        instrument_n: inst,
        category: "radikale",
        value: radikale_pct,
        inst: inst_value,
        color: baseColor,
        label: df_raw[0][labelKey]
      });
    }
  });

  differences.sort((a, b) => a.difference - b.difference);
  const instrument_order = differences.map((d) => d.instrument_n);

  const likert = Likert([["inkrementelle", -1], ["neutral", 0], ["radikale", 1]]);

  return Plot.plot({
    marginTop: 65,
    marginLeft: 180,
    marginBottom: 0,
    marginRight: 40,
    width: width,
    height: height,
    color: color_inst,
    style: {fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse},
    x: {
      axis: "top",
      labelOffset: 45,
      labelAnchor: "center",
      label: s.draw_inkr_radikal,
      tickFormat: (d) => Math.abs(d) + "%",
      grid: true
    },
    y: {
      domain: instrument_order,
      label: null,
      tickSize: 0
    },
    marks: [
      Plot.barX(transformedData, {
        x: "value",
        y: "instrument_n",
        fill: "color",
        order: likert.order,
        offset: likert.offset,
        z: "category",
        inset: 0.5
      }),
      Plot.textX(
        transformedData,
        Plot.stackX({
          x: "value",
          y: "instrument_n",
          z: "category",
          text: (d) => {
            if (d.category === "neutral" || d.value === 0) return "";
            return `${d.value} %`;
          },
          fill: black_innosuisse,
          order: likert.order,
          offset: likert.offset
        })
      ),
      Plot.ruleX([0], {stroke: black_innosuisse, strokeWidth: 1})
    ]
  });
}

export function draw_dn(
  plot = "digital",
  instrument = instruments.CC,
  x_axis = true,
  sy = 0
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
    width: 800,
    color: color_inst,
    fx: {
      label: null,
      axis: "top",
      reverse: true,
      domain: plot !== "digital" ? s.draw_dn_sustainability : undefined
    },
    fy: { label: null },
    style: {fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse},
    x: x_axis_d,
    y: { label: null, tickSize: 0, axis: "right", reverse: true },
    marks: [
      Plot.barX(df, {
        x: "pct",
        y: respondant,
        fill: "inst",
        fx: type,
        fy: "instrument_n",
        opacity: 0.5,
        inset: 0.5,
        sort: { y: "-x" }
      }),
      Plot.barX(df_highlight, {
        x: "pct",
        y: respondant,
        fill: "inst",
        fx: type,
        fy: "instrument_n",
        inset: 1,
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
  const labelField = lang === "de" ? "label" : `label_${lang}`;

  const df =
    instrument !== "Innovation Booster"
      ? daten_controlling.filter((d) => d.instrument === instrument)
      : [
          {
            FA: "Starthilfe für Projekte und Vernetzung",
            inst: "Starthilfe für Projekte und Vernetzung",
            type: "Starthilfe für Projekte und Vernetzung",
            instrument: "Innovation Booster",
            year: 2021,
            funding: 4.9,
            n: 12,
            label: "Innovation Booster",
            label_en: "Innovation Booster",
            label_fr: "Innovation Booster",
            monitoring: "Ja"
          },
          {
            FA: "Starthilfe für Projekte und Vernetzung",
            inst: "Starthilfe für Projekte und Vernetzung",
            type: "Starthilfe für Projekte und Vernetzung",
            instrument: "Innovation Booster",
            year: 2022,
            funding: 8,
            n: 18,
            label: "Innovation Booster",
            label_en: "Innovation Booster",
            label_fr: "Innovation Booster",
            monitoring: "Ja"
          },
          {
            FA: "Starthilfe für Projekte und Vernetzung",
            inst: "Starthilfe für Projekte und Vernetzung",
            type: "Starthilfe für Projekte und Vernetzung",
            instrument: "Innovation Booster",
            year: 2023,
            funding: 7,
            n: 17,
            label: "Innovation Booster",
            label_en: "Innovation Booster",
            label_fr: "Innovation Booster",
            monitoring: "Ja"
          }
        ];

  const label = df[0][labelField];

  return Plot.plot({
    color: color_inst,
    height: 100,
    width: 110,
    marginTop: 35,
    marginRight: 40,
    marginLeft: 0,
    y: funding ? { label: s.fundingUnit } : { label: label, domain: instrument !== "Start-up Coaching" ? undefined : [0,400] },
    x: {
      domain: [2021, 2022, 2023],
      ticks: [2021, 2023],
      tickSize: 0,
      label: null,
      tickFormat: (d) => String(d)
    },
    style: {fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse},
    marks: [
      Plot.barY(df, {
        x: "year",
        y: funding ? "funding" : "n",
        fill: "inst",
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

export function drawMiniPlot1(instrument = instruments.CC, funding = false) {
  const df = [
    {
      FA: "Begleitung von Start-ups",
      inst: "Begleitung von Start-ups",
      type: "Begleitung von Start-ups",
      instrument: "Start-up Coaching",
      year: 2021,
      funding: 4.3,
      n: 319,
      label: "Total Coaching",
      monitoring: "Ja"
    },
    {
      FA: "Begleitung von Start-ups",
      inst: "Begleitung von Start-ups",
      type: "Begleitung von Start-ups",
      instrument: "Start-up Coaching",
      year: 2022,
      funding: 3.3,
      n: 283,
      label: "Total Coaching",
      monitoring: "Ja"
    },
    {
      FA: "Begleitung von Start-ups",
      inst: "Begleitung von Start-ups",
      type: "Begleitung von Start-ups",
      instrument: "Start-up Coaching",
      year: 2023,
      funding: 6,
      n: 380,
      label: "Total Coaching",
      monitoring: "Ja"
    }
  ];

  const label = df[0].label;

  return Plot.plot({
    color: color_inst,
    height: 100,
    width: 100,
    marginTop: 35,
    marginRight: 30,
    marginLeft: 0,
    y: funding ? { label: s.fundingUnit } : { label: label, domain: [0, 400] },
    x: {
      domain: [2021, 2022, 2023],
      ticks: [2021, 2023],
      tickSize: 0,
      label: null,
      tickFormat: (d) => String(d)
    },
    style: {fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse},
    marks: [
      Plot.barY(df, {
        x: "year",
        y: funding ? "funding" : "n",
        fill: "inst",
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
  dy_text2 = 0,
  colors = color_waffle
) {
  const df = df_waffle.filter((d) => d.title === title);
  const df1 = df.filter((d) => d.rank === "pct1");
  const df2 = df.filter((d) => d.rank === "pct2");

  // Dynamically select the correct text column based on the current language
  const text = `text_${lang}`;

  const color_scale =
    df[0].negative && df[0].opposites
      ? "negative_opposite"
      : df[0].negative && !df[0].opposites
      ? "negative"
      : df[0].inst;

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
        fill: colors === color_waffle ? "#E8E8E8" : "white",
        rx: "100%",
        gap: 3.5,
        stroke: grey_innosuisse,
        strokeWidth: colors === color_waffle ? 0 : 1
      }
    ),
    Plot.text(df1, {
      text: text,
      lineWidth: 13,
      dy: dy_text + 13,
      dx: 70,
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
      dy: dy_text + 13,
      dx: 10,
      stroke: "white",
      strokeWidth: 2,
      strokeOpacity: 0.8,
      fill: "rank",
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
    color: instLegend(colors, color_scale),
    x: { domain: [0, 100] },
    y: { domain: [0, 100] },
    style: {fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse},
    marks: marks
  });
}

function getLastDigit(number) {
  const numStr = number.toString();
  const lastDigit = parseInt(numStr.slice(-1), 10);
  return lastDigit === 0 ? 9.5 : lastDigit;
}

function instLegend(data, inst) {
  const df = data.filter((d) => d.inst === inst);
  const color1 = data.find((d) => d.inst === inst).shade;
  const color2 = data.find((d) => d.inst === inst).standard;

  return Plot.scale({
    color: {
      domain: ["pct2", "pct1", "background"],
      range: [color1, color2, "#F7F7F7"],
      type: "ordinal"
    }
  });
}

export function draw_results(
  instrument = instruments.CC,
  relevance = true,
  marginLeft = 200
) {
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
      fill: "inst",
      inset: 0.5
    }),
    Plot.barX(
      df.filter((d) => d.highlight === true),
      {
        x: "pct",
        y: type,
        fill: black_innosuisse,
        inset: 0.5,
        sort: { y: "-x" }
      }
    ),
    Plot.barX(df, {
      x1: "pct",
      x2: 100,
      y: type,
      fill: grey_background,
      inset: 0.5
    }),
    Plot.gridX({ stroke: "white", strokeOpacity: 1, interval: 25 }),
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
    marginTop: 45,
    marginLeft: marginLeft,
    marginRight: relevance ? 55 : 15,
    marginBottom: 10,
    color: color_inst,
    caption: html`<span style="font-size: 10px; color: #828282;">${caption}</span>`,
    style: {fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse},
    x: {
      axis: "top",
      labelAnchor: "left",
      domain: [0, 100],
      ticks: [0, 25, 50, 75, 100],
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

export function leverage() {
  return Plot.plot({
    marginLeft: 0,
    marginRight: 0,
    style: { fontSize: "20px", fontFamily: "sans-serif", fontWeight: 700, color: black_innosuisse },
    axis: null,
    x: { domain: [50, 500] },
    y: { domain: [95, 108] },
    width: 640,
    height: 150,
    color: { legend: true },
    marks: [
      Plot.dot(
        df_leverage.filter((d) => d.color === "Förderung"),
        { x: "x", y: "y", r: 25, fill: "#06F7DA" }
      ),
      Plot.dot(
        df_leverage.filter((d) => d.color === "Wertschöpfung"),
        { x: "x", y: "y", r: 25, fill: "#06F7DA", opacity: 0.5 }
      ),
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

export function kof_did_plot(nr) {
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
    width: 640,
    style: { fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse },
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

export function ib_toipis() {
  const ibs = s.ib_toipis;
  const df_toipis = [
    {
      type: ibs.cheques,
      pct: ibs.pct_cheques,
      instrument: "Starthilfe für Projekte und Vernetzung"
    },
    {
      type: ibs.projects,
      pct: ibs.pct_projects,
      instrument: "Starthilfe für Projekte und Vernetzung"
    }
  ];
  return Plot.plot({
    marginTop: 45,
    marginLeft: 120,
    width: 330,
    color: color_inst,
    x: {
      axis: "top",
      labelAnchor: "left",
      domain: [0, 40],
      ticks: [],
      labelOffset: ibs.labelOffset,
      label: ibs.label
    },
    y: { label: null },
    style: { fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse },
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

export function su_vza() {
  const svs = s.su_vza;
  return Plot.plot({
    marginTop: 45,
    marginBottom: 35,
    height: 120,
    marginLeft: 5,
    color: color_inst,
    style: { fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse },
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
          fill: "black",
          fillOpacity: 0.5,
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
  return Plot.legend({ color: color_su, style: { fontSize: "12px", fontFamily: "sans-serif", fontWeight: 200, color: black_innosuisse } })
}
