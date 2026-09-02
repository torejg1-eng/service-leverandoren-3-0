import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Om Service Leverandøren",
  description:
    "Bli kjent med Service Leverandøren: praktisk håndverkskompetanse, teknisk byggforståelse og ansvarlig oppfølging i Østfold.",
  alternates: { canonical: "/om-oss" },
  openGraph: {
    title: "Om Service Leverandøren",
    description: "Praktisk kompetanse og tydelig ansvar for bygg og eiendommer i Østfold.",
    url: "/om-oss",
  },
};

const principles = [
  {
    number: "01",
    title: "Se hele bygget",
    text: "Drift, energibruk, vedlikehold og prosjektvalg påvirker hverandre. Derfor begynner vi med sammenhengen – ikke bare symptomet.",
  },
  {
    number: "02",
    title: "Prioritere ærlig",
    text: "Ikke alt må gjøres samtidig. Vi skiller mellom det som haster, det som gir effekt og det som kan planlegges senere.",
  },
  {
    number: "03",
    title: "Gjøre det forståelig",
    text: "Vurderinger og tiltak skal kunne brukes av eier, styre og drift – uten unødvendig fagspråk eller tung rapportering.",
  },
  {
    number: "04",
    title: "Følge opp ferdig",
    text: "Arbeidet stopper ikke ved en anbefaling. Avtalte tiltak gjennomføres, dokumenteres og kontrolleres i et tydelig videre løp.",
  },
] as const;

export default function OmOssPage() {
  return (
    <main className="bg-[#f3f4ef] pt-[var(--header-height)]">
      <section className="dark-grid text-white">
        <div className="site-shell grid gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
          <div>
            <p className="eyebrow eyebrow-on-dark">Om oss</p>
            <h1 className="mt-7 text-5xl font-extrabold leading-[0.95] tracking-[-0.06em] sm:text-7xl">
              Praktisk kompetanse. Tydelig ansvar.
            </h1>
            <p className="lead-copy mt-7 text-white/62">
              Service Leverandøren kombinerer håndverksbakgrunn, teknisk forståelse
              og operativ erfaring fra bygg. Målet er enkelt: tiltak som fungerer i
              praksis og blir fulgt ordentlig opp.
            </p>
            <Link href="/kontakt" className="button-primary mt-9">Ta en uforpliktende prat <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>

          <div className="relative min-h-[27rem] overflow-hidden border border-white/15 bg-[#17251f]">
            <Image
              src="/images/prosjekter/teknisk/teknisk2.webp"
              alt="Teknisk arbeid på ventilasjonsanlegg"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/80 via-transparent to-transparent" />
            <p className="absolute inset-x-0 bottom-0 p-6 font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em] text-white/72">
              Teknisk forståelse · praktisk gjennomføring
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Virksomheten / 01</p>
            <h2 className="section-title mt-6">Kort vei fra vurdering til handling.</h2>
          </div>
          <div className="prose-premium max-w-2xl lg:pt-12">
            <p>
              SERVICELEVERANDØREN AS ledes av Tore Josefsen Grøtting og har base i
              Skjeberg. Virksomheten leverer eiendomsdrift, energioptimalisering og
              prosjektgjennomføring i Østfold og nærområdene.
            </p>
            <p className="mt-6">
              Den samme praktiske tilnærmingen følger hele oppdraget: forstå behovet,
              finne riktig nivå, gjennomføre ryddig og gi kunden en oversikt som kan
              brukes videre. Det gir korte beslutningsveier og et tydelig kontaktpunkt.
            </p>

            <dl className="mt-10 grid border-y border-[#101a16]/15 sm:grid-cols-2">
              <div className="py-5 sm:border-r sm:border-[#101a16]/15 sm:pr-6">
                <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#0d7654]">Juridisk navn</dt>
                <dd className="mt-2 text-base font-bold text-[#101a16]">SERVICELEVERANDØREN AS</dd>
              </div>
              <div className="border-t border-[#101a16]/15 py-5 sm:border-t-0 sm:pl-6">
                <dt className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#0d7654]">Organisasjonsnummer</dt>
                <dd className="mt-2 text-base font-bold text-[#101a16]">936 026 087</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="paper-grid section-space border-y border-[#101a16]/12">
        <div className="site-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Arbeidsprinsipper / 02</p>
            <h2 className="section-title mt-6">Slik skal samarbeidet oppleves.</h2>
          </div>

          <div className="mt-12 grid border-y border-[#101a16]/15 md:grid-cols-2">
            {principles.map((principle, index) => (
              <article key={principle.number} className={`p-7 sm:p-9 ${index % 2 === 1 ? "md:border-l md:border-[#101a16]/15" : ""} ${index > 1 ? "border-t border-[#101a16]/15" : index === 1 ? "border-t border-[#101a16]/15 md:border-t-0" : ""}`}>
                <span className="font-mono text-xs font-bold text-[#0d7654]">{principle.number}</span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.035em]">{principle.title}</h3>
                <p className="mt-4 max-w-xl leading-7 text-[#59675f]">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#0b1712] text-white">
        <div className="site-shell grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow eyebrow-on-dark">Hva du får / 03</p>
            <h2 className="section-title mt-6">Ett kontaktpunkt gjennom hele leveransen.</h2>
          </div>
          <div>
            <ul className="border-t border-white/12">
              {[
                "En avklart oppgave og tydelig prioritering",
                "Direkte kommunikasjon underveis",
                "Praktiske anbefalinger som kan gjennomføres",
                "Dokumentasjon tilpasset oppdragets størrelse",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 border-b border-white/12 py-5 text-white/72">
                  <Check size={18} aria-hidden="true" className="shrink-0 text-[#38d39f]" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakt" className="button-primary">Be om befaring <ArrowRight size={18} aria-hidden="true" /></Link>
              <Link href="/prosjekter" className="button-secondary-dark">Se arbeid og prosjekter</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
