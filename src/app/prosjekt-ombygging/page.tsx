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

const title = "Prosjekt og ombygging i Østfold";
const description =
  "Ombygging, rehabilitering og praktiske tilpasninger for næringsbygg og eiendommer i Østfold – med tydelig plan og dokumentert overlevering.";
const pageUrl = "https://www.service-leverandøren.no/prosjekt-ombygging";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/prosjekt-ombygging" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/prosjekt-ombygging",
    images: [
      {
        url: "/hus.webp",
        width: 2000,
        height: 1125,
        alt: "Bygg som kan rehabiliteres eller tilpasses ny bruk",
      },
    ],
  },
};

const deliverables = [
  {
    title: "Kontor- og næringsombygging",
    text: "Tilpasninger planlegges rundt byggets bruk, slik at gjennomføringen blir forståelig for både eier og brukere.",
    bullets: [
      "Tilpasning til leietaker eller endret bruk",
      "Oppdeling og åpning av rom, overflater og detaljarbeid",
      "Fremdrift som tar hensyn til aktivitet i bygget",
    ],
  },
  {
    title: "Rehabilitering og oppgradering",
    text: "Vi gjennomfører praktiske tiltak der kvaliteten i detaljene og løsningenes videre drift er viktig.",
    bullets: [
      "Rehabilitering, oppgradering og vedlikeholdstiltak",
      "Tilpasninger for bedre funksjon, flyt og komfort",
      "Løsninger som er enkle å vedlikeholde videre",
    ],
  },
  {
    title: "Avklaring og koordinering",
    text: "Et presist omfang reduserer usikkerhet. Behov, prioriteringer og eventuelle grensesnitt avklares før utførelsen starter.",
    bullets: [
      "Befaring og gjennomgang av ønsket resultat",
      "Tydelig avtale om omfang og fremdrift",
      "Løpende kommunikasjon når forhold endrer seg",
    ],
  },
  {
    title: "Dokumentert overlevering",
    text: "Prosjektet avsluttes med en ryddig gjennomgang, slik at det er klart hva som er utført og hva som eventuelt bør følges opp.",
    bullets: [
      "Kort oppsummering av utført arbeid",
      "Bilder før og etter når det er relevant",
      "Anbefalinger for videre drift og vedlikehold",
    ],
  },
];

const faqs = [
  {
    question: "Tar dere også private ombygginger?",
    answer:
      "Ja, ved kapasitet. Hovedvekten ligger på byggdrift, optimalisering og ombygging knyttet til dette, men enkelte private oppdrag vurderes ved forespørsel.",
  },
  {
    question: "Kan dere gjennomføre arbeidet uten å stoppe driften helt?",
    answer:
      "Det er ofte mulig. På befaring kartlegger vi byggets bruk og planlegger etapper, arbeidstid og avgrensning for å redusere unødvendig nedetid.",
  },
  {
    question: "Hvordan avklarer vi omfang og pris?",
    answer:
      "Vi starter med en befaring og avklarer ønsket resultat, forutsetninger og omfang. Deretter kan fremdrift og leveranse beskrives tydelig før arbeidet bestilles.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#tjeneste`,
      name: "Prosjekt og ombygging",
      serviceType: "Ombygging, rehabilitering og tilpasning av bygg",
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
        { "@type": "ListItem", position: 2, name: "Prosjekt og ombygging", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#sporsmal-og-svar`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function ProsjektOmbyggingPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <PrecisionJsonLd data={structuredData} />
      <PrecisionServiceHero
        breadcrumbLabel="Prosjekt og ombygging"
        eyebrow="Ombygging og praktiske tilpasninger"
        intro="Når drift eller optimalisering avdekker behov for endringer, leverer vi ombygging og tilpasninger med tydelig plan, forutsigbar fremdrift og dokumentert overlevering."
        primaryLabel="Be om befaring"
        secondaryHref="/prosjekter"
        secondaryLabel="Se referanseprosjekter"
        stats={[
          { label: "Utgangspunkt", value: "Behov, bygg og driftssituasjon" },
          { label: "Gjennomføring", value: "Avklart omfang og tydelig fremdrift" },
          { label: "Overlevering", value: "Kontroll, dokumentasjon og videre råd" },
        ]}
        title="Ombygging og tilpasning – ryddig gjennomføring med drift i fokus"
      />

      <section className="paper-grid section-space">
        <div className="site-shell">
          <PrecisionSectionHeading eyebrow="Leveranse" title="Bygget skal fungere bedre etterpå">
            <p>
              Vi tar oppdrag der gjennomføring, kvalitet og en ryddig prosess er viktig. Hver
              leveranse tilpasses det faktiske behovet – fra en avgrenset oppgradering til en
              større ombygging.
            </p>
          </PrecisionSectionHeading>

          <div className="mt-14 border-y border-[var(--line)]">
            {deliverables.map((item, index) => (
              <article
                className="grid gap-5 border-b border-[var(--line)] py-9 last:border-b-0 md:grid-cols-[4rem_minmax(14rem,0.48fr)_1fr] md:gap-10"
                key={item.title}
              >
                <p className="label-number">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="text-2xl font-[800] leading-tight tracking-[-0.035em]">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">{item.text}</p>
                </div>
                <PrecisionBulletList items={item.bullets} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-[var(--line)] bg-white">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1fr] lg:gap-24">
          <div>
            <p className="eyebrow">Før oppstart</p>
            <h2 className="section-title mt-5">Et tydelig omfang er en del av håndverket</h2>
          </div>
          <div className="prose-premium">
            <p className="lead-copy">
              En befaring handler ikke bare om mål og materialer. Vi ser også på tilgang,
              aktivitet i bygget, tekniske grensesnitt og hvilke deler av driften som må
              opprettholdes mens arbeidet pågår.
            </p>
            <p className="mt-6">
              Dersom behovet først krever en teknisk avklaring, kan en
              <Link href="/optimalisering"> kartlegging av bygg og anlegg</Link> være riktig
              start. Når løsningen er bestemt, gir et presist omfang et bedre grunnlag for både
              gjennomføring og overlevering.
            </p>
            <Link className="editorial-link mt-9" href="/prosjekter">
              Utforsk gjennomførte arbeider <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <PrecisionProcess
        intro="Prosessen er bygget for å gjøre ansvar og forventninger tydelige – før, under og etter utførelsen."
        steps={[
          { title: "Befaring", text: "Vi går gjennom behov, omfang, driftshensyn og ønsket sluttresultat." },
          { title: "Plan", text: "Tiltak, rekkefølge, avgrensninger og fremdrift beskrives før oppstart." },
          { title: "Utførelse", text: "Arbeidet gjennomføres ryddig, med dialog om avvik eller nødvendige valg." },
          { title: "Overlevering", text: "Utført arbeid kontrolleres og relevant dokumentasjon samles." },
        ]}
        title="Fra behov til ferdig løsning"
      />

      <section className="paper-grid section-space" id="sporsmal-og-svar">
        <div className="site-shell">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1fr] lg:gap-24">
            <div>
              <p className="eyebrow">Spørsmål og svar</p>
              <h2 className="section-title mt-5">Før dere bestiller ombygging</h2>
              <p className="mt-6 max-w-md leading-relaxed text-[var(--ink-soft)]">
                En kort avklaring er ofte nok til å finne ut om oppdraget passer, og hva som bør
                undersøkes på befaring.
              </p>
            </div>

            <div className="border-t border-[var(--line)]">
              {faqs.map((faq, index) => (
                <article className="border-b border-[var(--line)] py-7" key={faq.question}>
                  <div className="grid gap-3 sm:grid-cols-[3rem_1fr]">
                    <p className="label-number">{String(index + 1).padStart(2, "0")}</p>
                    <div>
                      <h3 className="text-xl font-[800] tracking-[-0.025em]">{faq.question}</h3>
                      <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">{faq.answer}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PrecisionServiceCta
        secondaryHref="/eiendomsdrift"
        secondaryLabel="Se eiendomsdrift"
        text="Send oss litt informasjon om byggtype, ønsket endring og hvordan lokalene brukes i dag. Da kan vi forberede en mer presis befaring."
        title="Start med en ryddig avklaring på stedet"
      />
    </main>
  );
}
