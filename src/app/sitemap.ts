import type { MetadataRoute } from "next";

const routes = [
  "",
  "/optimalisering",
  "/eiendomsdrift",
  "/prosjekt-ombygging",
  "/prosjekter",
  "/prosjekter/bad",
  "/prosjekter/kjokken",
  "/prosjekter/kino",
  "/prosjekter/drivhus",
  "/prosjekter/mur",
  "/prosjekter/teknisk",
  "/innsikt",
  "/innsikt/hvor-vanlig-er-feilregulerte-bygg",
  "/innsikt/avvik-til-tiltak",
  "/innsikt/sjekkliste-eiendomsdrift",
  "/innsikt/teknisk-tilsyn-enkel-modell",
  "/innsikt/uteomrader-vinterberedskap",
  "/om-oss",
  "/kontakt",
  "/personvern",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://www.xn--service-leverandren-b8b.no${route}`,
    lastModified: route === "/optimalisering" ? new Date("2026-09-06") : undefined,
    changeFrequency: route === "" || route === "/innsikt" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/kontakt" ? 0.9 : route.startsWith("/prosjekter/") || route.startsWith("/innsikt/") ? 0.65 : 0.8,
  }));
}
