const baseUrl = process.env.SITE_URL ?? "http://127.0.0.1:3100";
const canonicalOrigin = "https://www.service-leverandøren.no";

const routes = [
  "/",
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
  "/faktura",
];

const failures = [];

for (const route of routes) {
  const response = await fetch(new URL(route, baseUrl), { redirect: "follow" });
  const html = await response.text();
  if (!response.ok) failures.push(`${route}: HTTP ${response.status}`);
  if (!html.includes('<html lang="nb"')) failures.push(`${route}: mangler lang=nb`);

  const h1Count = (html.match(/<h1(?:\s|>)/g) ?? []).length;
  if (h1Count !== 1) failures.push(`${route}: forventet én H1, fant ${h1Count}`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const expectedCanonical = new URL(route, canonicalOrigin).href;
  const normalizedCanonical = canonical ? new URL(canonical).href : undefined;
  if (normalizedCanonical !== expectedCanonical) {
    failures.push(`${route}: canonical ${canonical ?? "mangler"}, forventet ${expectedCanonical}`);
  }

  if (/hentet fra \/public|post@service[-]leverandoren\.no|Dette bør ikke selges|bygger autoritet/i.test(html)) {
    failures.push(`${route}: inneholder tekst som ikke skal publiseres`);
  }

  process.stdout.write(`OK ${response.status} ${route}\n`);
}

for (const route of ["/robots.txt", "/sitemap.xml", "/icon.svg"]) {
  const response = await fetch(new URL(route, baseUrl));
  if (!response.ok) failures.push(`${route}: HTTP ${response.status}`);
  process.stdout.write(`OK ${response.status} ${route}\n`);
}

for (const image of [
  "/images/prosjekter/forside-prosjekt.webp",
  "/images/prosjekter/mur/mur11.webp",
  "/images/prosjekter/teknisk/teknisk3.webp",
]) {
  const response = await fetch(new URL(image, baseUrl));
  if (!response.ok) failures.push(`${image}: HTTP ${response.status}`);
  if (!response.headers.get("content-type")?.startsWith("image/webp")) {
    failures.push(`${image}: feil MIME-type ${response.headers.get("content-type")}`);
  }
  process.stdout.write(`OK ${response.status} ${image}\n`);
}

if (failures.length) {
  process.stderr.write(`\n${failures.join("\n")}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write(`\nAlle ${routes.length} sider og tekniske endepunkter bestod.\n`);
}
