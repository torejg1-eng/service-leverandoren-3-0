import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Utførte byggeprosjekter og referanser",
  description: "Se et utvalg utførte bad, kjøkken, tekniske arbeider, murarbeider og andre prosjekter fra Service Leverandøren AS.",
  alternates: { canonical: "/prosjekter" },
};

const projects = [
  { name: "Bad", href: "/prosjekter/bad", img: "/images/prosjekter/bad/bad1.webp", desc: "Rehabilitering og komplette baderomsløsninger." },
  { name: "Kjøkken", href: "/prosjekter/kjokken", img: "/images/prosjekter/Kjokken/kjokken1.webp", desc: "Praktiske kjøkken med gjennomført utførelse." },
  { name: "Tekniske arbeider", href: "/prosjekter/teknisk", img: "/images/prosjekter/teknisk/teknisk2.webp", desc: "Tekniske installasjoner og spesialtilpassede løsninger." },
  { name: "Murarbeider", href: "/prosjekter/mur", img: "/images/prosjekter/mur/mur7.webp", desc: "Mur, flis og solide overflater for varig bruk." },
  { name: "Kino", href: "/prosjekter/kino", img: "/images/prosjekter/kino/kino1.webp", desc: "Spesialbygde rom med fokus på detaljene." },
  { name: "Drivhus", href: "/prosjekter/drivhus", img: "/images/prosjekter/drivhus/drivhus1.webp", desc: "Skreddersydd konstruksjon og gjennomføring." },
];

export default function ProsjekterPage() {
  return (
    <main className="min-h-screen pt-[var(--header-height)]">
      <section className="border-b border-white/10 bg-gradient-to-br from-emerald-950/40 via-[#0b0f0d] to-[#080b0a]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Referanser</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl">Utførte prosjekter</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">Et utvalg arbeider som viser bredden i det vi leverer. Klikk deg inn for å se flere bilder fra hvert prosjekt.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link key={project.name} href={project.href} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition hover:-translate-y-1 hover:border-emerald-400/35">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={project.img} alt={`${project.name} utført av Service Leverandøren AS`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
                <p className="mt-2 leading-7 text-neutral-400">{project.desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-300">Se prosjektet <ArrowRight size={16} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
