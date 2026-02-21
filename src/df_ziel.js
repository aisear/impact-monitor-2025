// Data import
import { FileAttachment } from "observablehq:stdlib";
const df_ziel_erfolg = await FileAttachment("data/daten_zielerreichung.txt").tsv({ typed: true });
export const df_ziel = df_ziel_erfolg.filter((d) => d.category === "Zielerreichung");
