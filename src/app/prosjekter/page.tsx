import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Prosjekter og håndverksreferanser",
  description:
    "Se et dokumentert utvalg tekniske arbeider, ombygging, bad, kjøkken, utemiljø og håndverksprosjekter i Østfold.",
  alternates: { canonical: "/prosjekter" },
  openGraph: {
    title: "Prosjekter og håndverksreferanser",
    description: "Et dokumentert utvalg fra tekniske arbeider, ombygging og tidligere håndverksprosjekter.",
    url: "/prosjekter",
    images: [
      {
        url: "/images/prosjekter/mur/mur9.webp",
        alt: "Ferdig støttemur og opparbeidet utemiljø",
      },
    ],
  },
};

const projects = [
  {
    number: "01",
    name: "Tekniske arbeider",
    href: "/prosjekter/teknisk",
    img: "/images/prosjekter/teknisk/teknisk2.webp",
    alt: "Teknisk utstyr integrert i plassbygget veggløsning",
    label: "Nyere arbeid · teknisk",
    desc: "Teknisk innbygging og plassbygde løsninger utført etter forholdene på stedet.",
  },
  {
    number: "02",
    name: "Støttemur og utemiljø",
    href: "/prosjekter/mur",
    img: "/images/prosjekter/mur/mur9.webp",
    alt: "Ferdigstilt støttemur og opparbeidet innkjørsel foran bolig",
    label: "Tidligere arbeid · utemiljø",
    desc: "Terrengtilpasset støttemur, trapper og belegningsstein rundt eksisterende bolig.",
  },
  {
    number: "03",
    name: "Bad",
    href: "/prosjekter/bad",
    img: "/images/prosjekter/bad/bad9.webp",
    alt: "Ferdigstilt bad med mørke fliser og hvit innredning",
    label: "Tidligere arbeid · rehabilitering",
    desc: "Fra klargjort våtrom og flisarbeid til innredning og ferdige overflater.",
  },
  {
    number: "04",
    name: "Kjøkken",
    href: "/prosjekter/kjokken",
    img: "/images/prosjekter/Kjokken/kjokken2.webp",
    alt: "Montert kjøkken med mørke fronter og tilpasset arbeidsflate",
    label: "Tidligere arbeid · oppgradering",
    desc: "En praktisk kjøkkenoppgradering fra klargjort rom til montert innredning.",
  },
  {
    number: "05",
    name: "Hjemmekino",
    href: "/prosjekter/kino",
    img: "/images/prosjekter/kino/kino7.webp",
    alt: "Ferdig hjemmekino med lerret, prosjektor og høyttalere",
    label: "Tidligere arbeid · ombygging",
    desc: "Et spesialrom bygget med tilpassede overflater, prosjektor, lerret og lydoppsett.",
  },
  {
    number: "06",
    name: "Drivhus",
    href: "/prosjekter/drivhus",
    img: "/images/prosjekter/drivhus/drivhus2.webp",
    alt: "Ferdigstilt og opplyst drivhus på opparbeidet sokkel",
    label: "Tidligere arbeid · montering",
    desc: "Et frittstående drivhus etablert på opparbeidet sokkel og dokumentert gjennom sesongene.",
  },
];

export default function ProsjekterPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Prosjekter og håndverksreferanser",
    description:
      "Et dokumentert utvalg tekniske arbeider, ombygging og håndverksprosjekter.",
    url: "https://www.service-leverandøren.no/prosjekter",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.name,
        url: `https://www.service-leverandøren.no${project.href}`,
      })),
    },
  };

  return (
    <main className="min-h-screen bg-[#f3f0e8] pt-[var(--header-height)] text-[#142019]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#101713] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20 lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#8eb59c]">
              Arbeidsutvalg · referanser
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Arbeidet skal tåle å bli vist frem
            </h1>
          </div>
          <div className="border-l border-white/15 pl-6 sm:pl-8">
            <p className="text-lg leading-8 text-white/70">
              Her ser du et utvalg nyere tekniske arbeider og tidligere håndverksprosjekter fra fagpersonen bak virksomheten – dokumentert underveis og etter ferdigstilling.
            </p>
            <ul className="mt-7 space-y-3 text-sm font-semibold text-white/78">
              {["Ekte arbeidsbilder", "Prosess og ferdige detaljer", "Ulike fagområder"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <Check size={16} className="text-[#8eb59c]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="projects-heading" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-10 grid gap-6 border-b border-[#142019]/15 pb-7 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#315e43]">
              Utvalgte leveranser
            </p>
            <h2 id="projects-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
              Dokumentert. Konkret. Utført.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#536159] lg:justify-self-end">
            Åpne et prosjekt for å se flere bilder og få et tydeligere innblikk i oppbygging, detaljer og resultat.
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
          {projects.map((project, index) => {
            const prominent = index < 2;
            return (
              <article
                key={project.name}
                className={prominent ? "lg:col-span-6" : "lg:col-span-4"}
              >
                <Link href={project.href} className="group block focus:outline-none">
                  <figure
                    className={`relative overflow-hidden bg-[#d9d6cd] ${
                      prominent ? "aspect-[4/3]" : "aspect-[5/4]"
                    }`}
                  >
                    <Image
                      src={project.img}
                      alt={project.alt}
                      fill
                      priority={index === 0}
                      sizes={prominent ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                      className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-5 text-white sm:p-6">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
                        {project.label}
                      </span>
                      <span className="font-mono text-xs tabular-nums text-white/60">
                        {project.number}
                      </span>
                    </div>
                  </figure>
                  <div className="flex items-start justify-between gap-6 border-b border-[#142019]/15 py-5 transition group-hover:border-[#315e43]">
                    <div>
                      <h3 className={`${prominent ? "text-2xl sm:text-3xl" : "text-2xl"} font-extrabold tracking-[-0.03em]`}>
                        {project.name}
                      </h3>
                      <p className="mt-2 max-w-xl leading-7 text-[#536159]">{project.desc}</p>
                    </div>
                    <span className="mt-1 grid size-10 shrink-0 place-items-center border border-[#142019]/20 text-[#315e43] transition group-hover:border-[#315e43] group-hover:bg-[#315e43] group-hover:text-white">
                      <ArrowRight size={18} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#17231c] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#8eb59c]">
              Ditt prosjekt
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
              Beskriv behovet — vi ser på veien videre
            </h2>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start bg-[#dda238] px-6 py-3 text-sm font-extrabold text-[#15130d] transition hover:bg-[#efb84f] md:self-auto"
          >
            Be om en uforpliktende befaring
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
