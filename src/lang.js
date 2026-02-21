/**
 * Language detection from URL path.
 * Returns "de", "fr", or "en" (default).
 */
export function getLang() {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  if (path.includes("/de/")) return "de";
  if (path.includes("/fr/")) return "fr";
  return "en";
}

export const langLabels = {
  de: "Deutsch",
  en: "English",
  fr: "Français"
};
