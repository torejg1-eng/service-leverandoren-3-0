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

const title = "Energioptimalisering av næringsbygg i Østfold";
const description =
  "Praktisk energioptimalisering av ventilasjon, VAV, vannbåren varme, driftstider og SD-anlegg i næringsbygg i Østfold. Be om en vurdering.";
const pageUrl = "https://www.service-leverandøren.no/optimalisering";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/optimalisering" },
  openGraph: {
    title: "Energioptimalisering av næringsbygg i Østfold",
    description,
    type: "website",
    url: "/optimalisering",
    images: [
      {
        url: "/rustfritt.webp",
        width: 1536,
        height: 1024,
        alt: "Næringsbygg som illustrerer energioptimalisering av eksisterende bygg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Energioptimalisering av næringsbygg i Østfold",
    description,
    images: ["/rustfritt.webp"],
  },
};

const warningSigns = [
  "Energibruken virker høy uten at vær, brukstid eller areal forklarer hvorfor.",
  "Rom er vekselvis for varme og for kalde, eller brukerne opplever trekk.",
  "Ventilasjon, varme og kjøling ser ut til å arbeide mot hverandre.",
  "Tekniske anlegg går tidligere, senere eller mer enn den faktiske bruken tilsier.",
  "Alarmer og temperaturklager kommer tilbake etter at settpunkter er endret.",
  "SD-anlegget viser normale verdier, men forholdene ute i bygget stemmer ikke.",
];

const systems = [
  {
    title: "Ventilasjon og VAV-anlegg",
    text: "Vi vurderer hvordan luftmengder, tilluftstemperatur, driftstider og romregulering følger den faktiske bruken av bygget.",
    bullets: [
      "Kontroll av driftstider, settpunkter og temperaturer",
      "Vurdering av VAV-soner, spjeld og romrespons",
      "Samspill mellom ventilasjon, varme og eventuell kjøling",
    ],
  },
  {
    title: "Vannbåren varme og radiatoranlegg",
    text: "Varmekurve, tur- og returtemperatur og lokal regulering må fungere sammen. Vi leter etter både feil innstillinger og fysiske feil.",
    bullets: [
      "Varmekurve, pumpeinnstillinger og temperaturforløp",
      "Ventiler, aktuatorer, termostater og romregulering",
      "Ujevne soner, manglende sirkulasjon og unødvendig varmebruk",
    ],
  },
  {
    title: "Driftstider og SD-anlegg",
    text: "Kalendere og settpunkter sammenholdes med åpningstider, belegg og det som faktisk skjer i lokalene.",
    bullets: [
      "Natt-, helge- og feriedrift",
      "Overstyringer som har blitt stående over tid",
      "Trender og driftsdata brukt som grunnlag for målrettede endringer",
    ],
  },
  {
    title: "Feilsøking ute i bygget",
    text: "En verdi i SD-anlegget er ikke alltid det samme som riktig funksjon. Derfor kontrolleres relevante komponenter og romforhold fysisk.",
    bullets: [
      "Defekte eller frakoblede ventiler og aktuatorer",
      "Avvik mellom signal, innstilling og faktisk temperatur",
      "Feil som gir både energitap, klager og merarbeid i driften",
    ],
  },
];

const faqItems = [
  {
    question: "Hva er energioptimalisering av et næringsbygg?",
    answer:
      "Det er en systematisk gjennomgang av hvordan byggets tekniske anlegg fungerer i praksis. Driftstider, temperaturer, ventilasjon, VAV, varmekurve, ventiler og regulering vurderes samlet for å finne unødvendig drift og konkrete feil.",
  },
  {
    question: "Kan energibruken reduseres uten å bytte tekniske anlegg?",
    answer:
      "Ofte finnes det forbedringer i eksisterende anlegg, men det kan ikke loves på forhånd. Riktige driftstider, reparasjon av feil og bedre samspill bør undersøkes før større investeringer besluttes. Hvis utstyr må skiftes, gir gjennomgangen et bedre beslutningsgrunnlag.",
  },
  {
    question: "Hvilke tekniske anlegg arbeider dere med?",
    answer:
      "Arbeidet kan omfatte ventilasjon, VAV, vannbåren varme, radiatoranlegg, pumper, ventiler, aktuatorer, romregulering og relevante innstillinger og trender i SD-anlegget.",
  },
  {
    question: "Kan energioptimalisering også gi bedre inneklima?",
    answer:
      "Ja, når inneklimaproblemene skyldes feil drift eller regulering. Målet er ikke å senke temperaturen ukritisk, men å levere riktig temperatur og luftmengde når og der bygget brukes.",
  },
  {
    question: "Hvordan dokumenteres en energibesparelse?",
    answer:
      "En troverdig før- og ettersammenligning bør ta hensyn til blant annet utetemperatur, brukstid, belegg, areal og andre endringer i bygget. Omfanget av måling og oppfølging avtales ut fra målet og hvilke data som er tilgjengelige.",
  },
  {
    question: "Er dette det samme som formell energikartlegging eller energimerking?",
    answer:
      "Nei. Energioptimalisering er praktisk arbeid med drift, funksjon og innstillinger. Formell energikartlegging og energimerking kan ha egne krav til metode, dokumentasjon og kompetanse og må derfor avklares som en egen leveranse.",
  },
  {
    question: "Hvor i Østfold utfører dere oppdrag?",
    answer:
      "Service Leverandøren har base i Skjeberg og tar oppdrag for næringsbygg i blant annet Sarpsborg, Fredrikstad, Halden og ellers i Østfold og nærområdene.",
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#tjeneste`,
      name: "Energioptimalisering av næringsbygg",
      alternateName: "Driftsoptimalisering av bygg",
      serviceType: "Energioptimalisering av eksisterende næringsbygg",
      description,
      url: pageUrl,
      areaServed: [
        { "@type": "AdministrativeArea", name: "Østfold" },
        { "@type": "City", name: "Sarpsborg" },
        { "@type": "City", name: "Fredrikstad" },
        { "@type": "City", name: "Halden" },
      ],
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Byggeiere, eiendomsforvaltere og driftsansvarlige",
      },
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Energioptimalisering av næringsbygg",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#sporsmal-og-svar`,
      mainEntity: faqItems.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function OptimaliseringPage() {
  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <PrecisionJsonLd data={structuredData} />

      <PrecisionServiceHero
        breadcrumbLabel="Energioptimalisering"
        eyebrow="Næringsbygg · Østfold"
        intro="Service Leverandøren hjelper eiere, forvaltere og driftsansvarlige med å finne unødvendig energibruk og feil i eksisterende tekniske anlegg. Vi undersøker ventilasjon, VAV, vannbåren varme, driftstider og styring før nye investeringer anbefales."
        primaryLabel="Be om en innledende vurdering"
        secondaryHref="/prosjekter/teknisk"
        secondaryLabel="Se tekniske arbeider"
        stats={[
          { label: "Systemer", value: "Ventilasjon · VAV · vannbåren varme" },
          { label: "Leveranse", value: "Gjennomgang · tiltak · oppfølging" },
          { label: "Område", value: "Sarpsborg · Fredrikstad · Halden · Østfold" },
        ]}
        title="Energioptimalisering av næringsbygg i Østfold"
      />

      <section className="paper-grid section-space">
        <div className="site-shell">
          <PrecisionSectionHeading
            eyebrow="Når bør bygget undersøkes?"
            title="Lavere energibruk starter med riktig diagnose"
          >
            <p>
              Høyt energiforbruk og dårlig inneklima kan ha samme årsak. For lange
              driftstider, feil temperaturkurve eller komponenter som ikke fungerer,
              kan få anleggene til å kompensere for hverandre.
            </p>
            <p className="mt-5">
              Vi starter med hvordan bygget faktisk brukes og fungerer. Målet er å
              finne de riktige tiltakene før det bestilles dyr utskifting på mistanke.
            </p>
          </PrecisionSectionHeading>

          <ul className="mt-14 grid border-l border-t border-[var(--line)] md:grid-cols-2">
            {warningSigns.map((sign, index) => (
              <li
                className="grid min-h-36 grid-cols-[2.5rem_1fr] gap-4 border-b border-r border-[var(--line)] bg-white/35 p-6 md:p-8"
                key={sign}
              >
                <span className="label-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-semibold leading-7 text-[var(--ink)]">
                  {sign}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-space border-y border-[var(--line)] bg-white">
        <div className="site-shell">
          <PrecisionSectionHeading
            eyebrow="Teknisk energioptimalisering"
            title="Dette kartlegger og optimaliserer vi"
          >
            <p>
              Energieffektivisering av næringsbygg handler ikke bare om ett system.
              Varme, ventilasjon, kjøling, styring og forholdene i rommene må vurderes
              i sammenheng. Det gir et bedre grunnlag for å prioritere praktiske
              ENØK-tiltak etter effekt, kostnad og gjennomførbarhet.
            </p>
          </PrecisionSectionHeading>

          <div className="mt-14 border-y border-[var(--line)]">
            {systems.map((system, index) => (
              <article
                className="grid gap-5 border-b border-[var(--line)] py-8 last:border-b-0 md:grid-cols-[4rem_minmax(12rem,0.48fr)_1fr] md:gap-10 md:py-10"
                key={system.title}
              >
                <p className="label-number">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-2xl font-[800] leading-tight tracking-[-0.035em]">
                    {system.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[var(--ink-soft)]">
                    {system.text}
                  </p>
                </div>
                <PrecisionBulletList items={system.bullets} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-grid section-space border-b border-[var(--line)]">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="eyebrow">Fra skjerm til romnivå</p>
            <h2 className="section-title mt-5">
              Vi kontrollerer mer enn verdiene i SD-anlegget
            </h2>
          </div>

          <div className="prose-premium lg:pt-12">
            <p>
              En temperaturkurve eller et styresignal kan se riktig ut uten at en
              ventil, aktuator eller romføler gjør det den skal. Derfor sammenholder
              vi tilgjengelige driftsdata med målinger, komponenter og opplevelsen til
              dem som bruker bygget.
            </p>
            <p className="mt-6">
              Det gjør det mulig å skille mellom feil som må repareres, innstillinger
              som kan forbedres, og investeringer som faktisk er nødvendige. Denne
              praktiske driftsoptimaliseringen reduserer risikoen for å løse symptomet
              i stedet for årsaken.
            </p>

            <div className="mt-9 grid gap-5 border-y border-[var(--line)] py-7 sm:grid-cols-3">
              {[
                ["01", "Reparere", "Konkrete komponent- og funksjonsfeil"],
                ["02", "Optimalisere", "Driftstider, kurver og regulering"],
                ["03", "Investere", "Bare når behovet er faglig begrunnet"],
              ].map(([number, heading, text]) => (
                <div key={heading}>
                  <p className="label-number">{number}</p>
                  <h3 className="mt-4 text-xl font-extrabold">{heading}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{text}</p>
                </div>
              ))}
            </div>

            <Link className="editorial-link mt-8" href="/om-oss">
              Les om erfaring og arbeidsform <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <PrecisionProcess
        eyebrow="Slik arbeider vi"
        intro="Hvert trinn skal redusere usikkerhet og gjøre det tydelig hva som er observert, hva som anbefales og hvordan effekten skal følges opp."
        steps={[
          {
            title: "Avklaring",
            text: "Byggtype, bruk, tekniske anlegg, kjente problemer og tilgjengelige driftsdata gjennomgås.",
          },
          {
            title: "Kontroll",
            text: "Innstillinger og trender sammenholdes med temperaturer, komponenter og faktiske romforhold.",
          },
          {
            title: "Prioritering",
            text: "Funn deles i feil som må repareres, mulige optimaliseringstiltak og behov som må utredes videre.",
          },
          {
            title: "Oppfølging",
            text: "Avtalte endringer dokumenteres og følges over tid, slik at energi og inneklima kan vurderes samlet.",
          },
        ]}
        title="Fra teknisk avvik til kontrollert forbedring"
      />

      <section className="section-space border-b border-[var(--line)] bg-white">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div>
            <p className="eyebrow">Lokal og praktisk oppfølging</p>
            <h2 className="section-title mt-5">
              For byggeiere og driftsteam i Østfold
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-soft)]">
              Service Leverandøren har base i Skjeberg og følger opp næringsbygg i
              Sarpsborg, Fredrikstad, Halden og ellers i Østfold og nærområdene.
            </p>
          </div>

          <div className="border-l-2 border-[var(--green)] pl-7 lg:mt-12 lg:pl-10">
            <p className="text-xl font-semibold leading-8 text-[var(--ink)]">
              Oppdraget følges av Tore Josefsen Grøtting, med praktisk erfaring fra
              teknisk drift, vedlikehold og optimalisering av eksisterende næringsbygg.
            </p>
            <p className="mt-5 leading-7 text-[var(--ink-soft)]">
              Du får én ansvarlig kontakt gjennom gjennomgang, prioritering,
              gjennomføring og oppfølging. Ved behov samordnes andre fag, men
              anbefalingene skal fortsatt være forståelige og etterprøvbare.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href="/kontakt">
                Be om en vurdering <span aria-hidden="true">→</span>
              </Link>
              <Link className="button-secondary" href="/eiendomsdrift">
                Se teknisk eiendomsdrift
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="paper-grid section-space border-b border-[var(--line)]"
        aria-labelledby="faq-heading"
      >
        <div className="site-shell grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
          <div>
            <p className="eyebrow">Spørsmål og svar</p>
            <h2 id="faq-heading" className="section-title mt-5">
              Vanlige spørsmål om energioptimalisering
            </h2>
          </div>

          <div className="border-t border-[var(--line)]">
            {faqItems.map(({ question, answer }) => (
              <details className="group border-b border-[var(--line)] py-1" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-extrabold leading-7 marker:hidden">
                  <span>{question}</span>
                  <span
                    aria-hidden="true"
                    className="text-2xl font-light text-[var(--green)] transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-7 pr-10 leading-7 text-[var(--ink-soft)]">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <PrecisionServiceCta
        secondaryHref="/innsikt/hvor-vanlig-er-feilregulerte-bygg"
        secondaryLabel="Les om feilregulerte bygg"
        text="Fortell kort om byggtype, tekniske anlegg, energibruk og utfordringene dere opplever. Da kan vi avklare hva som er fornuftig å undersøke først."
        title="Trenger bygget nye komponenter – eller bedre innstillinger?"
      />
    </main>
  );
}
