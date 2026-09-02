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
  "/innsikt/avvik-til-tiltak",
  "/innsikt/sjekkliste-eiendomsdrift",
  "/innsikt/teknisk-tilsyn-enkel-modell",
  "/innsikt/uteomrader-vinterberedskap",
  "/om-oss",
  "/kontakt",
  "/personvern",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `https://www.serviceleverandøren.no${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/kontakt" ? 0.9 : 0.7,
  }));
}
