import type { Metadata } from "next";
import Link from "next/link";
import {
  PrecisionBulletList,
  PrecisionJsonLd,
  PrecisionProcess,
  PrecisionSectionHeading,
  PrecisionServiceCta,
  PrecisionServiceHero,
} from "../components/PrecisionServicePage";

const title = "Energioptimalisering av bygg i Østfold";
const description =
  "Kartlegging og energioptimalisering av ventilasjon, inneklima og teknisk drift i eksisterende næringsbygg i Østfold.";
const pageUrl = "https://www.service-leverandøren.no/optimalisering";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/optimalisering" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/optimalisering",
    images: [
      {
        url: "/rustfritt.webp",
        width: 1536,
        height: 1024,
        alt: "Næringsbygg som kan kartlegges for energioptimalisering",
      },
    ],
  },
};

const serviceAreas = [
  {
    title: "Energi og driftstid",
    text: "Vi ser på når anleggene går, hva som faktisk belaster bygget og om driften følger bruken av lokalene.",
    bullets: [
      "Kartlegging av driftstider og last utenfor brukstid",
      "ENØK-tiltak vurdert etter effekt, kostnad og gjennomførbarhet",
      "Justeringer som reduserer unødvendig drift uten å ofre komfort",
    ],
  },
  {
    title: "Ventilasjon og inneklima",
    text: "Temperatur, luftmengder og bruksmønster må ses i sammenheng. Målet er et stabilt inneklima, ikke enkeltstående justeringer.",
    bullets: [
      "Feilsøking ved ujevne temperatursoner, trekk eller støy",
      "Kontroll av hvordan ventilasjon, varme og kjøling påvirker hverandre",
      "Målrettede tiltak med tydelig dokumentasjon",
    ],
  },
  {
    title: "Teknisk drift og robusthet",
    text: "Vi identifiserer svake punkter som kan gi driftsstans, klager eller merarbeid og gjør dem om til en prioritert tiltaksplan.",
    bullets: [
      "Registrering og prioritering av tekniske avvik",
      "Praktiske anbefalinger tilpasset driftspersonell og eier",
      "Kontroll etter utført tiltak når det er relevant",
    ],
  },
  {
    title: "Gjennomføring i riktig rekkefølge",
    text: "Små og mellomstore grep vurderes først. Større investeringer anbefales når kartleggingen viser et reelt behov.",
    bullets: [
      "Avgrenset omfang og tydelige prioriteringer før oppstart",
      "Tiltak planlagt rundt den daglige driften",
      "Samlet dialog med eier, styre, forvalter eller driftspersonell",
    ],
  },
];

const operatingLevels = [
  {
    title: "Samkjørt",
    text: "Driftstider følger bruken av bygget, og varme, ventilasjon og kjøling arbeider etter samme mål.",
  },
  {
    title: "Fungerer, men kan forbedres",
    text: "Bygget oppleves stabilt, men anlegg går lenger enn nødvendig eller kompenserer for hverandre.",
  },
  {
    title: "Delvis ute av balanse",
    text: "Enkelte soner gir klager, tidligere justeringer mangler helhet, eller energibruken varierer uten klar forklaring.",
  },
  {
    title: "Feilregulert",
    text: "Styring, referanser eller driftstider gir høyt forbruk uten tilsvarende komfort. Årsaken må finnes før nye tiltak bestilles.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#tjeneste`,
      name: "Energioptimalisering av bygg",
      serviceType: "Energioptimalisering, inneklima og teknisk drift",
      description,
      url: pageUrl,
      areaServed: { "@type": "AdministrativeArea", name: "Østfold" },
      provider: { "@id": "https://www.service-leverandøren.no/#virksomhet" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#brodsmuler`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Forside",
          item: "https://www.service-leverandøren.no/",
        },
        { "@type": "ListItem", position: 2, name: "Optimalisering", item: pageUrl },
      ],
    },
  ],
};

export default function OptimaliseringPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <PrecisionJsonLd data={structuredData} />
      <PrecisionServiceHero
        breadcrumbLabel="Optimalisering"
        eyebrow="Energioptimalisering av eksisterende bygg"
        intro="Vi analyserer og forbedrer eksisterende bygg med fokus på energi, inneklima og driftssikkerhet. Tiltak prioriteres etter dokumentert behov og praktisk gjennomførbarhet."
        primaryLabel="Be om en gjennomgang"
        secondaryHref="/prosjekter/teknisk"
        secondaryLabel="Se tekniske arbeider"
        stats={[
          { label: "Fokus", value: "Energi · inneklima · teknisk drift" },
          { label: "Leveranse", value: "Kartlegging · tiltaksliste · rapport" },
          { label: "Arbeidsform", value: "Prioritert, praktisk og etterprøvbar" },
        ]}
        title="Optimalisering av bygg gir lavere kostnader og bedre drift"
      />

      <section className="paper-grid section-space">
        <div className="site-shell">
          <PrecisionSectionHeading
            eyebrow="Systematisk forbedring"
            title="Vi finner årsaken før vi foreslår tiltak"
          >
            <p>
              Unødvendig driftstid, feil styring og dårlig samspill mellom varme, kjøling og
              ventilasjon kan gi høyere energibruk. Vi undersøker helheten og gjør funnene om
              til tiltak det er mulig å gjennomføre.
            </p>
          </PrecisionSectionHeading>

          <div className="mt-14 border-y border-[var(--line)]">
            {serviceAreas.map((area, index) => (
              <article
                className="grid gap-5 border-b border-[var(--line)] py-8 last:border-b-0 md:grid-cols-[4rem_minmax(12rem,0.48fr)_1fr] md:gap-10 md:py-10"
                key={area.title}
              >
                <p className="label-number">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-2xl font-[800] leading-tight tracking-[-0.035em]">{area.title}</h3>
                  <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">{area.text}</p>
                </div>
                <PrecisionBulletList items={area.bullets} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-[var(--line)] bg-white">
        <div className="site-shell">
          <PrecisionSectionHeading
            eyebrow="Praktisk diagnose"
            title="Hvor står bygget i dag?"
          >
            <p>
              Et bygg kan fungere i hverdagen og likevel ha tekniske anlegg som ikke er godt
              samkjørt. Denne vurderingsmodellen gjør utgangspunktet forståelig før tiltakene
              prioriteres.
            </p>
          </PrecisionSectionHeading>

          <ol className="mt-14 grid border-l border-t border-[var(--line)] md:grid-cols-2">
            {operatingLevels.map((level, index) => (
              <li className="min-h-56 border-b border-r border-[var(--line)] p-7 md:p-9" key={level.title}>
                <p className="label-number">Nivå {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-8 text-2xl font-[800] tracking-[-0.035em]">{level.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-[var(--ink-soft)]">{level.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-6 border-l-2 border-[var(--green)] pl-6 md:grid-cols-[1fr_auto] md:items-center md:pl-8">
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
              Kartleggingen gir et faglig beslutningsgrunnlag. Derfra kan vi gjennomføre valgte
              tiltak eller gi driftsansvarlig en tydelig plan for videre oppfølging.
            </p>
            <Link className="editorial-link" href="/eiendomsdrift">
              Se fast eiendomsdrift <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <PrecisionProcess
        intro="Hvert trinn skal redusere usikkerhet. Derfor skilles kartlegging, prioritering, utførelse og kontroll tydelig fra hverandre."
        steps={[
          { title: "Kartlegging", text: "Befaring, relevante driftsdata, observasjoner og avgrensning av mål." },
          { title: "Tiltaksliste", text: "Anbefalinger prioritert etter behov, forventet effekt og gjennomførbarhet." },
          { title: "Gjennomføring", text: "Avtalte tiltak utføres ryddig og med hensyn til byggets daglige bruk." },
          { title: "Kontroll", text: "Vi dokumenterer hva som er gjort og anbefaler videre oppfølging ved behov." },
        ]}
        title="Fra teknisk funn til kontrollert forbedring"
      />

      <PrecisionServiceCta
        secondaryHref="/innsikt/teknisk-tilsyn-enkel-modell"
        secondaryLabel="Les om teknisk tilsyn"
        text="Fortell kort om byggtype, tekniske anlegg og hva dere ønsker å forbedre. Da kan vi foreslå en fornuftig start på kartleggingen."
        title="Få et tydelig utgangspunkt før dere investerer"
      />
    </main>
  );
}
