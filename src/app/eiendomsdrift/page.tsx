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

const title = "Eiendomsdrift og teknisk tilsyn i Østfold";
const description =
  "Fast eiendomsdrift, teknisk tilsyn, byggservice og tydelig avviksrapportering for næringsbygg og sameier i Østfold.";
const pageUrl = "https://www.service-leverandøren.no/eiendomsdrift";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/eiendomsdrift" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/eiendomsdrift",
    images: [
      {
        url: "/images/omoss-arbeid.webp",
        width: 1536,
        height: 1024,
        alt: "Næringsbygg med behov for strukturert eiendomsdrift",
      },
    ],
  },
};

const serviceAreas = [
  {
    id: "teknisk-tilsyn",
    title: "Teknisk tilsyn",
    subtitle: "Faste runder, funksjonssjekk og tidlig avdekking",
    text: "Periodisk tilsyn gjør det enklere å se endringer over tid og fange opp feil før de utvikler seg.",
    bullets: [
      "Avtalte runder for bygg og tekniske installasjoner",
      "Enkel ventilasjonsservice med filterbytte og visuell kontroll etter avtale",
      "Registrering av avvik med anbefalt prioritet",
    ],
  },
  {
    id: "byggservice",
    title: "Vaktmester og byggservice",
    subtitle: "Løpende utbedringer og praktisk vedlikehold",
    text: "Småreparasjoner, justeringer og utskiftinger håndteres før de blir til større driftsproblemer.",
    bullets: [
      "Tetting, justering og mindre utskiftinger",
      "Praktiske vedlikeholdsoppgaver etter avtalt omfang",
      "Bilde- og tekstdokumentasjon når oppgaven krever det",
    ],
  },
  {
    id: "uteomrader",
    title: "Uteområder",
    subtitle: "Trygghet, orden og planlagt oppfølging",
    text: "Sesongskifter påvirker fremkommelighet, sikkerhet og vedlikeholdsbehov. Faste observasjoner gir et bedre grunnlag for tiltak.",
    bullets: [
      "Tilsyn av utearealer og enkle utbedringer",
      "Oppfølging knyttet til vinter og overgangssesonger",
      "Tiltaksliste for videre vedlikehold av uteområdene",
    ],
  },
  {
    id: "avvik-rapport",
    title: "Avvik og rapportering",
    subtitle: "Oversikt som kan brukes til å ta beslutninger",
    text: "Rapporteringen skal vise hva som er observert, hvorfor det bør følges opp og hvilket tiltak som anbefales.",
    bullets: [
      "Avvikslogg med prioritet og foreslått handling",
      "Tiltak rangert etter behov og risiko",
      "Kort og forståelig språk for eier, styre eller forvalter",
    ],
  },
];

const insights = [
  {
    href: "/innsikt/sjekkliste-eiendomsdrift",
    tag: "Drift",
    title: "Sjekkliste for eiendomsdrift som faktisk fungerer",
    excerpt: "En praktisk sjekkliste for kontroll på drift, avvik og småutbedringer.",
  },
  {
    href: "/innsikt/avvik-til-tiltak",
    tag: "Avvik",
    title: "Fra avvik til tiltak: slik unngår du at småting blir dyrt",
    excerpt: "Slik fanges avvik opp tidlig og gjøres om til en prioritert tiltaksliste.",
  },
  {
    href: "/innsikt/teknisk-tilsyn-enkel-modell",
    tag: "Tilsyn",
    title: "Teknisk tilsyn: en enkel modell for faste runder",
    excerpt: "Et oversiktlig opplegg for faste runder, rapportering og praktisk oppfølging.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#tjeneste`,
      name: "Eiendomsdrift og teknisk tilsyn",
      serviceType: "Eiendomsdrift, teknisk tilsyn, byggservice og avviksrapportering",
      description,
      url: pageUrl,
      areaServed: { "@type": "AdministrativeArea", name: "Østfold" },
      provider: { "@id": "https://www.service-leverandøren.no/#virksomhet" },
      audience: [
        { "@type": "BusinessAudience", audienceType: "Eiere og forvaltere av næringsbygg" },
        { "@type": "Audience", audienceType: "Sameier og styrer" },
      ],
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
        { "@type": "ListItem", position: 2, name: "Eiendomsdrift", item: pageUrl },
      ],
    },
  ],
};

export default function EiendomsdriftPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <PrecisionJsonLd data={structuredData} />
      <PrecisionServiceHero
        breadcrumbLabel="Eiendomsdrift"
        eyebrow="Eiendomsdrift for næringsbygg og sameier"
        intro="Vi følger opp løpende drift, teknisk tilsyn og praktisk vedlikehold. Målet er forutsigbarhet for eier, styre og leietakere – med ett tydelig løp fra observasjon til utført tiltak."
        primaryLabel="Spør om driftsavtale"
        secondaryHref="/optimalisering"
        secondaryLabel="Se energioptimalisering av næringsbygg"
        stats={[
          { label: "Oppfølging", value: "Faste runder og tydelig ansvar" },
          { label: "Arbeidsflyt", value: "Avvik · prioritering · tiltak" },
          { label: "Dokumentasjon", value: "Kort, forståelig og handlingsrettet" },
        ]}
        title="Eiendomsdrift som gir kontroll, færre avvik og bedre flyt"
      />

      <section className="paper-grid section-space">
        <div className="site-shell">
          <PrecisionSectionHeading
            eyebrow="Tjenesteområder"
            title="Én struktur for den daglige driften"
          >
            <p>
              Vi deler leveransen i fire praktiske områder. Det gjør ansvaret tydelig,
              bestillingen enklere og oppfølgingen mer forutsigbar gjennom året.
            </p>
          </PrecisionSectionHeading>

          <div className="mt-14 border-y border-[var(--line)]">
            {serviceAreas.map((area, index) => (
              <article
                className="scroll-mt-28 border-b border-[var(--line)] py-9 last:border-b-0"
                id={area.id}
                key={area.id}
              >
                <div className="grid gap-5 md:grid-cols-[4rem_minmax(14rem,0.48fr)_1fr] md:gap-10">
                  <p className="label-number">{String(index + 1).padStart(2, "0")}</p>
                  <div>
                    <h3 className="text-2xl font-[800] leading-tight tracking-[-0.035em]">{area.title}</h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-[var(--green)]">
                      {area.subtitle}
                    </p>
                    <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">{area.text}</p>
                  </div>
                  <PrecisionBulletList items={area.bullets} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PrecisionProcess
        intro="En driftsavtale skal gjøre hverdagen enklere. Omfang, frekvens og rapportering avklares derfor før de faste rutinene starter."
        steps={[
          { title: "Oppstart", text: "Vi avklarer eiendom, kontaktpunkter, behov og ønsket nivå på leveransen." },
          { title: "Rutiner", text: "Frekvens, sjekklister og ansvar settes opp i et oversiktlig arbeidsløp." },
          { title: "Utførelse", text: "Tilsyn, mindre utbedringer og avtalte oppgaver gjennomføres systematisk." },
          { title: "Rapport", text: "Avvik, utførte tiltak og anbefalt videre oppfølging formidles tydelig." },
        ]}
        title="Fast rytme. Tydelig ansvar. Færre løse tråder."
      />

      <section className="section-space border-b border-[var(--line)] bg-white">
        <div className="site-shell">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-24">
            <div>
              <p className="eyebrow">Fra avvik til tiltak</p>
              <h2 className="section-title mt-5">Rapportering som leder til handling</h2>
            </div>
            <div>
              <p className="lead-copy text-[var(--ink-soft)]">
                En lang rapport skaper ikke nødvendigvis bedre drift. Vi prioriterer et enkelt
                beslutningsgrunnlag: hva må håndteres nå, hva bør planlegges og hva skal følges
                med på videre.
              </p>
              <dl className="mt-10 border-y border-[var(--line)]">
                {[
                  ["Nå", "Forhold som krever rask avklaring eller tiltak."],
                  ["Planlegg", "Vedlikehold og forbedringer som bør inn i en avtalt fremdrift."],
                  ["Følg med", "Observasjoner som registreres og kontrolleres ved neste runde."],
                ].map(([term, detail]) => (
                  <div className="grid gap-2 border-b border-[var(--line)] py-5 last:border-b-0 sm:grid-cols-[8rem_1fr]" key={term}>
                    <dt className="font-mono text-xs font-bold uppercase tracking-[0.12em] text-[var(--green)]">
                      {term}
                    </dt>
                    <dd className="text-[var(--ink-soft)]">{detail}</dd>
                  </div>
                ))}
              </dl>
              <Link className="editorial-link mt-9" href="/innsikt/avvik-til-tiltak">
                Les mer om avvik og prioritering <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-grid section-space">
        <div className="site-shell">
          <div className="flex flex-col justify-between gap-6 border-b border-[var(--line)] pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Faglig innsikt</p>
              <h2 className="mt-5 text-4xl font-[820] tracking-[-0.045em] md:text-5xl">Praktisk drift, forklart enkelt</h2>
            </div>
            <Link className="editorial-link" href="/innsikt">
              Se alle artikler <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid border-l border-[var(--line)] md:grid-cols-3">
            {insights.map((article, index) => (
              <Link
                className="group flex min-h-80 flex-col border-b border-r border-[var(--line)] p-7 transition-colors hover:bg-white md:p-8"
                href={article.href}
                key={article.href}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="label-number">{article.tag}</p>
                  <p className="font-mono text-[0.68rem] text-[var(--ink-soft)]">0{index + 1}</p>
                </div>
                <h3 className="mt-10 text-2xl font-[800] leading-[1.12] tracking-[-0.035em]">{article.title}</h3>
                <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">{article.excerpt}</p>
                <span className="mt-auto pt-8 font-bold text-[var(--green)] transition-transform group-hover:translate-x-1" aria-hidden="true">
                  Les artikkelen →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PrecisionServiceCta
        secondaryHref="/prosjekter"
        secondaryLabel="Se referanseprosjekter"
        text="Beskriv eiendommen, dagens oppfølging og hva dere ønsker bedre kontroll på. Vi foreslår et realistisk nivå for tilsyn, byggservice og rapportering."
        title="Sett eiendomsdriften i system"
      />
    </main>
  );
}
