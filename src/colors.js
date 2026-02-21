// Colors
import * as Plot from "npm:@observablehq/plot";
import * as d3 from "npm:d3";
import { instrument_link_hex } from "./data.js";
import { getLang } from "./lang.js";

// --- Consolidated Color Scale Creation Function ---

/**
 * Creates a specific Plot color scale configuration based on the provided key.
 *
 * @param {'inst' | 'inst_lng' | 'instrument' | 'subcluster' | 'su' | 'zufrieden' | 'ziel' | 'erfolg'} scaleKey
 * @returns {object | null}
 */
export function createColorScale(scaleKey) {
  const lang = getLang();

  switch (scaleKey) {
    // Internal color-mapping by German funding category keys
    case 'inst':
      return Plot.scale({
        color: {
          type: "categorical",
          domain: [
            "Förderung für Schweizer Innovationsprojekte",
            "Förderung für internationale Innovationsprojekte",
            "Starthilfe für Projekte und Vernetzung",
            "Begleitung von Start-ups"
          ],
          range: ["#06F7DA", "#A2AFE9", "#FCE300", "#FF8674"]
        }
      });

    // Translated funding category labels for legend display
    case 'inst_lng':
      return Plot.scale({
        color: {
          type: "categorical",
          domain: lang === "en" ? [
            "Funding for national projects",
            "Funding for international projects",
            "Project set-up assistance and networking",
            "Support for start-ups"
          ] : lang === "fr" ? [
            "Encouragement de projets nationaux",
            "Encouragement de projets internationaux",
            "Aide au démarrage de projets et mise en réseau",
            "Accompagnement de start-up"
          ] : [
            "Förderung für Schweizer Innovationsprojekte",
            "Förderung für internationale Innovationsprojekte",
            "Starthilfe für Projekte und Vernetzung",
            "Begleitung von Start-ups"
          ],
          range: ["#06F7DA", "#A2AFE9", "#FCE300", "#FF8674"]
        }
      });

    // Per-instrument colors from data file
    case 'instrument':
      if (!instrument_link_hex || instrument_link_hex.length === 0) {
        console.warn("Instrument data (instrument_link_hex) is empty or not loaded.");
        return Plot.scale({ color: { type: "categorical", domain: [], range: [] } });
      }
      return Plot.scale({
        color: {
          type: "categorical",
          domain: instrument_link_hex.map(item => item.instrument),
          range: instrument_link_hex.map(item => item.hex)
        }
      });

    // Thematic subcluster colors
    case 'subcluster':
      return Plot.scale({
        color: {
          type: "categorical",
          domain: [
            "Engineering",
            "ICT",
            "Life sciences",
            "Social sciences & business mgmt",
            "Energy & environment"
          ],
          range: d3.quantize(d3.interpolateHcl("#FEB040", "#FFE7C5"), 5),
          interpolate: "hsl",
          legend: true
        }
      });

    // Start-up cohort comparison colors
    case 'su':
      return Plot.scale({
        color: {
          type: "categorical",
          domain: lang === "en"
            ? ["After completion", "Three years after completion"]
            : lang === "fr"
            ? ["Après la fin du projet", "Trois ans après la fin du projet"]
            : ["Nach Abschluss", "3 Jahre nach Abschluss"],
          range: ["#FF8674", "#7B3433"]
        }
      });

    // Satisfaction levels (diverging)
    case 'zufrieden':
      return Plot.scale({
        color: {
          domain: lang === "en"
            ? ["satisfied to very satisfied", "rather not satisfied to rather satisfied", "not at all satisfied to not satisfied"]
            : lang === "fr"
            ? ["satisfait à très satisfait", "plutôt pas satisfait à plutôt satisfait", "pas du tout satisfait à pas satisfait"]
            : ["zufrieden bis sehr zufrieden", "eher nicht bis eher zufrieden", "überhaupt nicht zufrieden bis nicht zufrieden"],
          range: ["#65CDDF", "#e8e8e8", "#FEB040"],
          type: "ordinal"
        }
      });

    // Goal achievement levels (diverging)
    case 'ziel':
      return Plot.scale({
        color: {
          domain: lang === "en"
            ? ["fully achieved or exceeded", "rather achieved", "rather not achieved", "not or only partially achieved"]
            : lang === "fr"
            ? ["complètement atteint ou dépassé", "plutôt atteint", "plutôt pas atteint", "pas atteint ou dans une faible mesure"]
            : ["vollständig erreicht oder übertroffen", "eher erreicht", "eher nicht erreicht", "nicht oder nur in geringem Ausmass erreicht"],
          range: ["#65CDDF", "#B1E5EF", "#FED79F", "#FEB040"],
          type: "ordinal"
        }
      });

    // Success levels (diverging)
    case 'erfolg':
      return Plot.scale({
        color: {
          domain: lang === "en"
            ? ["high or very high success", "rather high success", "rather low success", "no or low success"]
            : lang === "fr"
            ? ["succès élevé ou très élevé", "succès plutôt élevé", "succès plutôt faible", "pas de succès ou succès faible"]
            : ["hoher oder sehr hoher Erfolg", "eher hoher Erfolg", "eher geringer Erfolg", "kein Erfolg oder geringer Erfolg"],
          range: ["#65CDDF", "#B1E5EF", "#FED79F", "#FEB040"],
          type: "ordinal"
        }
      });

    default:
      console.error(`Unknown scale key requested: "${scaleKey}".`);
      return null;
  }
}


// --- Other Color Utility Functions ---

/**
 * Provides standard Innosuisse brand colors and greys.
 */
export function getBrandColors() {
  return {
    blackInnosuisse: "#53565A",
    greyInnosuisse: "#D9D9D6",
    greyComment: "#828282",
    greyBackground: "#E8E8E8"
  };
}

/**
 * Provides color sets for waffle plots.
 */
export function getWaffleColorSet(theme = 'dark') {
  const sets = {
    dark: [
      { inst: "Begleitung von Start-ups", standard: "#FF8674", shade: "#7B3433" },
      { inst: "Förderung für internationale Innovationsprojekte", standard: "#A2AFE9", shade: "#5C647C" },
      { inst: "Förderung für Schweizer Innovationsprojekte", standard: "#06F7DA", shade: "#007C67" },
      { inst: "Starthilfe für Projekte und Vernetzung", standard: "#FCE300", shade: "#867200" },
      { inst: "negative", standard: "#FED79F", shade: "#FEB040" },
      { inst: "negative_opposite", standard: "#65CDDF", shade: "#FEB040" }
    ],
    light: [
      { inst: "Förderung für Schweizer Innovationsprojekte", standard: "#AAF9E8", shade: "#06F7DA" },
      { inst: "Förderung für internationale Innovationsprojekte", standard: "#CDD2F0", shade: "#A2AFE9" },
      { inst: "Starthilfe für Projekte und Vernetzung", standard: "#FFED96", shade: "#FCE300" },
      { inst: "Begleitung von Start-ups", standard: "#FFC0B4", shade: "#FF8674" },
      { inst: "negative", standard: "#FECC82", shade: "#FC8B00" },
      { inst: "negative_opposite", standard: "#0571b0", shade: "#FC8B00" }
    ]
  };

  const selectedSet = sets[theme];
  if (!selectedSet) {
    console.warn(`Invalid waffle theme: "${theme}". Returning empty array.`);
    return [];
  }
  return selectedSet.map(item => ({ ...item }));
}
