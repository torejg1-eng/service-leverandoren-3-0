// === START: src/app/prosjekt-ombygging/page.tsx ===
import Link from "next/link";
import { ArrowRight, Building2, ClipboardCheck, Hammer, ShieldCheck } from "lucide-react";

export default function ProsjektOmbyggingPage() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto">
        <p className="text-emerald-300 font-semibold tracking-wide">
          Prosjekt og ombygging
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Ombygging og tilpasning – ryddig gjennomføring med drift i fokus
        </h1>

        <p className="mt-5 text-neutral-300 text-lg md:text-xl leading-relaxed">
          Når drift og optimalisering avdekker behov for endringer, leverer vi ombygging og
          tilpasninger med tydelig plan, forutsigbar fremdrift og dokumentert utførelse.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-amber-400 transition"
          >
            Be om befaring
          </Link>
          <Link
            href="/prosjekter"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
          >
            Se prosjekter <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Stat title="Mål" value="Bedre funksjon og flyt" />
          <Stat title="Fokus" value="Driftssikkerhet og kvalitet" />
          <Stat title="Leveranse" value="Ryddig plan + dokumentasjon" />
        </div>
      </section>

      {/* Hva vi leverer */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Typiske leveranser
        </h2>
        <p className="mt-3 text-neutral-300 leading-relaxed">
          Vi tar oppdrag der gjennomføring, kvalitet og ryddig prosess er viktig – og der endringene
          skal fungere i praksis etterpå.
        </p>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            icon={<Building2 className="h-6 w-6" />}
            title="Kontor- og næringsombygging"
            bullets={[
              "Tilpasning til leietaker / endret bruk",
              "Oppdeling/åpning av rom, overflater og detaljarbeid",
              "Ryddig fremdrift uten unødvendig nedetid",
            ]}
          />
          <Card
            icon={<Hammer className="h-6 w-6" />}
            title="Praktiske oppgraderinger"
            bullets={[
              "Rehabilitering, oppgradering og vedlikeholdstiltak",
              "Lyd/komfort-tilpasninger der det er relevant",
              "Tiltak som støtter drift og vedlikehold videre",
            ]}
          />
          <Card
            icon={<ClipboardCheck className="h-6 w-6" />}
            title="Dokumentasjon og overlevering"
            bullets={[
              "Kort rapport på hva som er gjort",
              "Bilder før/etter ved behov",
              "Anbefalinger for videre drift/vedlikehold",
            ]}
          />
          <Card
            icon={<ShieldCheck className="h-6 w-6" />}
            title="Trygg prosess"
            bullets={[
              "Avklaring av omfang før oppstart",
              "Tydelig avtale og fremdriftsplan",
              "Ryddig kommunikasjon underveis",
            ]}
          />
        </div>
      </section>

      {/* Slik jobber vi */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Slik jobber vi
        </h2>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Step n="1" title="Befaring" text="Behov, omfang, driftshensyn og mål." />
          <Step n="2" title="Plan" text="Tiltak, prioritet og enkel fremdriftsplan." />
          <Step n="3" title="Utførelse" text="Ryddig gjennomføring og kvalitet i detaljene." />
          <Step n="4" title="Overlevering" text="Dokumentasjon og anbefalt videre oppfølging." />
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Spørsmål og svar</h2>
        <div className="mt-7 space-y-4">
          <FAQ
            q="Tar dere også private ombygginger?"
            a="Ja, ved kapasitet. Vi profilerer oss primært mot byggdrift, optimalisering og ombygging som henger sammen med dette – men tar også enkelte private oppdrag ved forespørsel."
          />
          <FAQ
            q="Kan dere gjennomføre uten å stoppe drift helt?"
            a="Ofte ja. Vi planlegger for minst mulig nedetid og tilpasser fremdrift etter byggets bruk."
          />
          <FAQ
            q="Hvordan avklarer vi omfang og pris?"
            a="Vi starter med befaring og et tydelig avklart omfang. Deretter avtaler vi fremdrift og leveranse. Målet er forutsigbarhet – både på tid og gjennomføring."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto mt-14">
        <div className="rounded-2xl border border-white/15 bg-neutral-900/40 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            Ønsker du en ryddig plan før dere bygger om?
          </h3>
          <p className="mt-2 text-neutral-300 leading-relaxed">
            Send oss litt info om byggtype og hva dere ønsker å endre, så foreslår vi en praktisk løsning.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition"
            >
              Kontakt oss
            </Link>
            <Link
              href="/optimalisering"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
            >
              Se optimalisering
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-neutral-900/40 p-4">
      <p className="text-xs uppercase tracking-wide text-neutral-400">{title}</p>
      <p className="mt-1 text-sm md:text-base font-semibold text-neutral-100">{value}</p>
    </div>
  );
}

function Card({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-800 ring-1 ring-white/10 text-emerald-300">
          {icon}
        </div>
        <h3 className="font-bold text-lg tracking-tight">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-neutral-300 leading-relaxed">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ n, title, text }: { n: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
      <p className="text-emerald-300 font-bold">{n}</p>
      <h4 className="mt-2 font-bold tracking-tight">{title}</h4>
      <p className="mt-2 text-neutral-300 leading-relaxed">{text}</p>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-6">
      <h3 className="text-lg font-bold tracking-tight">{q}</h3>
      <p className="mt-2 text-neutral-300 leading-relaxed">{a}</p>
    </div>
  );
}
// === END: src/app/prosjekt-ombygging/page.tsx ===
