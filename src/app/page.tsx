import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Eiendomsdrift og energioptimalisering i Østfold",
  description:
    "Service Leverandøren hjelper næringsbygg og eiendommer i Østfold med eiendomsdrift, energioptimalisering og prosjektgjennomføring.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Service Leverandøren | Bygg som fungerer bedre",
    description:
      "Eiendomsdrift, energioptimalisering og prosjektgjennomføring i Østfold – fra kartlegging til dokumentert tiltak.",
    url: "/",
    images: [
      {
        url: "/images/prosjekter/forside-prosjekt.webp",
        width: 1536,
        height: 1024,
        alt: "Arbeidsskisse av næringsbygg",
      },
    ],
  },
};

const services = [
  {
    number: "01",
    title: "Eiendomsdrift",
    text: "Teknisk tilsyn, byggservice, uteområder og ryddig avvikshåndtering – samlet hos én ansvarlig kontakt.",
    href: "/eiendomsdrift",
    link: "Se eiendomsdrift",
  },
  {
    number: "02",
    title: "Energioptimalisering av næringsbygg",
    text: "Vi finner unødvendig energibruk, feil driftstider og ubalanse i tekniske anlegg – og prioriterer tiltak som er praktiske å gjennomføre.",
    href: "/optimalisering",
    link: "Se energioptimalisering av næringsbygg",
  },
  {
    number: "03",
    title: "Prosjekt og ombygging",
    text: "Planlegging, koordinering og gjennomføring av ombygging og tekniske tiltak, med tydelig fremdrift og dokumentasjon.",
    href: "/prosjekt-ombygging",
    link: "Se prosjektleveransen",
  },
];

const process = [
  ["01", "Kartlegging", "Vi ser bygget, behovet og avvikene i sammenheng."],
  ["02", "Prioritering", "Du får en tydelig rekkefølge på hva som bør gjøres først."],
  ["03", "Gjennomføring", "Tiltak koordineres og utføres med ett tydelig ansvar."],
  ["04", "Oppfølging", "Arbeidet dokumenteres og følges opp etter gjennomføring."],
] as const;

const insights = [
  {
    title: "Hvor vanlig er feilregulerte bygg – egentlig?",
    text: "Slik vurderer du om varme, ventilasjon og driftstider i et næringsbygg er riktig regulert.",
    href: "/innsikt/hvor-vanlig-er-feilregulerte-bygg",
    tag: "Energioptimalisering",
  },
  {
    title: "Sjekkliste for eiendomsdrift som faktisk fungerer",
    text: "En praktisk sjekkliste som gir bedre kontroll på drift, avvik og småutbedringer.",
    href: "/innsikt/sjekkliste-eiendomsdrift",
    tag: "Eiendomsdrift",
  },
  {
    title: "En enkel modell for teknisk tilsyn",
    text: "Faste runder, tydelig rapportering og en tiltaksliste som faktisk blir brukt.",
    href: "/innsikt/teknisk-tilsyn-enkel-modell",
    tag: "Teknisk tilsyn",
  },
] as const;

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-[#f3f4ef] pt-[var(--header-height)]">
      <section className="dark-grid relative border-b border-white/10 text-white">
        <div className="site-shell grid min-h-[calc(100svh-var(--header-height))] items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <div className="relative z-10">
            <p className="eyebrow eyebrow-on-dark reveal">Eiendomsdrift · energi · prosjekt</p>
            <h1 className="display-title reveal reveal-delay-1 mt-7 text-white">
              Vi får bygg til å fungere bedre.
            </h1>
            <p className="lead-copy reveal reveal-delay-2 mt-7 text-white/66">
              Service Leverandøren leverer eiendomsdrift, energioptimalisering og
              prosjektgjennomføring for næringsbygg og eiendommer i Østfold – med
              én ansvarlig kontakt fra kartlegging til dokumentert tiltak.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/kontakt" className="button-primary">
                Be om en uforpliktende befaring <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/prosjekter" className="button-secondary-dark">
                Se arbeid og prosjekter
              </Link>
            </div>

            <a href="tel:+4746925236" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white/62 transition hover:text-[#38d39f]">
              <Phone size={16} aria-hidden="true" /> Snakk direkte med oss: +47 469 25 236
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[36rem] lg:ml-auto">
            <div className="absolute -left-5 top-10 hidden h-[72%] w-px bg-[#38d39f]/55 lg:block" />
            <div className="relative border border-white/15 bg-[#ecece5] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.32)] sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src="/images/prosjekter/forside-prosjekt.webp"
                  alt="Teknisk arbeidsskisse av næringsbygg"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-4 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#35433c]">
                <span>Fra plan til gjennomført tiltak</span>
                <span>SL / 01</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-3 border border-white/15 bg-[#0c1813] px-5 py-3 font-mono text-[0.66rem] font-bold uppercase tracking-[0.15em] text-[#38d39f] sm:-right-6">
              Østfold + nærområdene
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="site-shell grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              ["01", "Én ansvarlig kontakt"],
              ["02", "Fra avvik til ferdig tiltak"],
              ["03", "Lokal oppfølging i Østfold"],
            ].map(([number, text]) => (
              <div key={number} className="flex items-center gap-4 px-2 py-5 sm:px-6 first:pl-0 last:pr-0">
                <span className="font-mono text-[0.65rem] font-bold text-[#38d39f]">{number}</span>
                <span className="text-sm font-semibold text-white/72">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-grid section-space">
        <div className="site-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="eyebrow">Tjenester / 01</p>
              <h2 className="section-title mt-6">Tre fagområder. Ett ansvar.</h2>
            </div>
            <p className="lead-copy text-[#526159] lg:ml-auto lg:max-w-xl">
              Du trenger ikke starte med en ferdig bestilling. Vi hjelper deg å avklare
              behovet, velge riktig nivå og skape en gjennomførbar plan.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            <article className="relative flex min-h-[31rem] flex-col justify-between overflow-hidden border border-[#101a16]/15 bg-[#0b1712] p-7 text-white sm:p-10 lg:row-span-2">
              <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full border border-[#38d39f]/20" />
              <div className="relative">
                <span className="font-mono text-xs font-bold text-[#38d39f]">{services[0].number}</span>
                <h3 className="mt-8 max-w-sm text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl">{services[0].title}</h3>
                <p className="mt-6 max-w-lg text-lg leading-8 text-white/60">{services[0].text}</p>
              </div>
              <Link href={services[0].href} className="mt-12 inline-flex w-fit items-center gap-3 border-b border-[#38d39f] pb-1 font-bold text-[#38d39f]">
                {services[0].link} <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </article>

            {services.slice(1).map((service) => (
              <article key={service.href} className="group grid gap-7 border border-[#101a16]/15 bg-white/70 p-7 transition-colors hover:bg-white sm:grid-cols-[4.5rem_1fr] sm:p-9">
                <span className="font-mono text-xs font-bold text-[#0d7654]">{service.number}</span>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-[-0.035em] sm:text-3xl">{service.title}</h3>
                  <p className="mt-4 leading-7 text-[#536159]">{service.text}</p>
                  <Link href={service.href} className="editorial-link mt-7">{service.link} <ArrowRight size={16} aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-grid section-space text-white">
        <div className="site-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow eyebrow-on-dark">Arbeidsform / 02</p>
              <h2 className="section-title mt-6">Fra observasjon til dokumentert resultat.</h2>
            </div>
            <p className="lead-copy text-white/58 lg:pt-14">
              God drift handler sjelden om ett enkelt grep. Det handler om å finne riktig
              rekkefølge, ta ansvar for gjennomføringen og følge tiltaket helt inn.
            </p>
          </div>

          <ol className="mt-16 grid border-y border-white/12 md:grid-cols-4 md:divide-x md:divide-white/12">
            {process.map(([number, title, text]) => (
              <li key={number} className="relative border-b border-white/12 px-1 py-8 last:border-0 md:border-b-0 md:px-6 md:first:pl-0 md:last:pr-0">
                <span className="font-mono text-xs font-bold text-[#38d39f]">{number}</span>
                <h3 className="mt-8 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-shell">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Arbeidsutvalg / 03</p>
              <h2 className="section-title mt-6">Arbeidet skal tåle å bli vist frem.</h2>
            </div>
            <Link href="/prosjekter" className="button-secondary w-fit">Se hele arbeidsutvalget <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>

          <div className="mt-12 grid auto-rows-[14rem] gap-3 sm:auto-rows-[18rem] lg:grid-cols-12 lg:auto-rows-[16rem]">
            <ProjectImage
              href="/prosjekter/teknisk"
              src="/images/prosjekter/teknisk/teknisk2.webp"
              alt="Teknisk installasjon under arbeid"
              title="Tekniske arbeider"
              className="lg:col-span-5 lg:row-span-2"
            />
            <ProjectImage
              href="/prosjekter/mur"
              src="/images/prosjekter/mur/mur7.webp"
              alt="Mur- og utearbeid under gjennomføring"
              title="Mur og uteområde"
              className="lg:col-span-7"
            />
            <ProjectImage
              href="/prosjekter/kjokken"
              src="/images/prosjekter/Kjokken/kjokken1.webp"
              alt="Innredningsarbeid underveis"
              title="Innredning og ombygging"
              className="lg:col-span-7"
            />
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-[#68746e]">
            Bildene viser arbeid underveis og ferdige detaljer fra ulike fagområder. Vi
            presenterer prosessen slik den faktisk ser ut – uten konstruerte resultattall.
          </p>
        </div>
      </section>

      <section className="section-space border-y border-[#101a16]/12 bg-[#e9ece5]">
        <div className="site-shell grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">Energioptimalisering / 04</p>
            <h2 className="section-title mt-6">Når næringsbygget fungerer – men ikke optimalt.</h2>
            <p className="lead-copy mt-7 text-[#526159]">
              Høyt forbruk, ujevn temperatur eller gjentakende alarmer er ofte symptomer
              på driftstider, regulering eller vedlikehold som ikke spiller sammen.
            </p>
            <Link href="/optimalisering" className="editorial-link mt-8">Slik jobber vi med energioptimalisering av næringsbygg <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>

          <div className="border-t border-[#101a16]/20">
            {[
              ["Driftstid", "Er anleggene i gang når bygget faktisk er i bruk?"],
              ["Varme og ventilasjon", "Jobber systemene med hverandre – eller mot hverandre?"],
              ["Avvik", "Blir årsaken løst, eller bare alarmen kvittert ut?"],
              ["Oppfølging", "Er tiltakene kontrollert etter at de er gjennomført?"],
            ].map(([title, text], index) => (
              <div key={title} className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-[#101a16]/15 py-6">
                <span className="font-mono text-xs font-bold text-[#0d7654]">0{index + 1}</span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#59675f]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f3f4ef]">
        <div className="site-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[30rem] overflow-hidden bg-[#dfe4dc]">
            <Image
              src="/images/prosjekter/teknisk/teknisk2.webp"
              alt="Teknisk arbeid utført på et ventilasjonsanlegg"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-7 pt-20 text-white">
              <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#7fe9c3]">Praktisk tilnærming</p>
              <p className="mt-2 text-sm text-white/75">Teknisk forståelse møter arbeid ute i bygget.</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Om oss / 05</p>
            <h2 className="section-title mt-6">Praktisk kompetanse. Tydelig ansvar.</h2>
            <p className="lead-copy mt-7 text-[#526159]">
              Vi kombinerer håndverksbakgrunn, teknisk byggforståelse og operativ
              oppfølging. Anbefalingene skal være realistiske, tiltakene gjennomførbare
              og kommunikasjonen direkte.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Se helheten", "Prioritere ærlig", "Følge opp ferdig"].map((item) => (
                <li key={item} className="flex items-center gap-2 border-t border-[#101a16]/18 pt-4 text-sm font-bold">
                  <Check size={16} aria-hidden="true" className="text-[#0d7654]" /> {item}
                </li>
              ))}
            </ul>
            <Link href="/om-oss" className="editorial-link mt-9">Bli bedre kjent med oss <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-[#101a16]/12 bg-white">
        <div className="site-shell">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Innsikt / 06</p>
              <h2 className="section-title mt-6">Kunnskap som kan brukes i bygget.</h2>
            </div>
            <Link href="/innsikt" className="editorial-link w-fit">Se alle fagartikler <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>

          <div className="mt-12 grid border-y border-[#101a16]/15 lg:grid-cols-2">
            <InsightCard item={insights[0]} featured />
            <div className="lg:border-l lg:border-[#101a16]/15">
              {insights.slice(1).map((item) => <InsightCard key={item.href} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1712] py-16 text-white sm:py-20">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow eyebrow-on-dark">Neste steg</p>
            <h2 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-[-0.05em] sm:text-6xl">
              La oss finne det viktigste tiltaket først.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Fortell kort om bygget eller prosjektet. Du får en direkte vurdering av hvor det er fornuftig å begynne.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:min-w-72">
            <Link href="/kontakt" className="button-primary">Be om befaring <ArrowRight size={18} aria-hidden="true" /></Link>
            <a href="tel:+4746925236" className="button-secondary-dark"><Phone size={17} aria-hidden="true" /> +47 469 25 236</a>
            <a href="mailto:post@service-leverandøren.no" className="inline-flex items-center justify-center gap-2 pt-2 text-xs font-semibold text-white/50 hover:text-white"><Mail size={14} aria-hidden="true" /> post@service-leverandøren.no</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectImage({ href, src, alt, title, className }: { href: string; src: string; alt: string; title: string; className?: string }) {
  return (
    <Link href={href} className={`group relative overflow-hidden bg-[#dce1da] ${className ?? ""}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white">
        <span className="text-xl font-bold tracking-[-0.025em]">{title}</span>
        <ArrowRight size={20} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

function InsightCard({ item, featured = false }: { item: (typeof insights)[number]; featured?: boolean }) {
  return (
    <Link href={item.href} className={`group block p-7 transition-colors hover:bg-[#f3f4ef] sm:p-9 ${featured ? "lg:min-h-[26rem] lg:p-12" : "border-b border-[#101a16]/15 last:border-b-0"}`}>
      <p className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#0d7654]">{item.tag}</p>
      <h3 className={`mt-6 max-w-xl font-extrabold tracking-[-0.04em] ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{item.title}</h3>
      <p className="mt-4 max-w-xl leading-7 text-[#59675f]">{item.text}</p>
      <span className="mt-8 inline-flex items-center gap-2 font-bold text-[#0d7654]">Les artikkelen <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></span>
    </Link>
  );
}
