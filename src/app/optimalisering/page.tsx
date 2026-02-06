// === START: src/app/optimalisering/page.tsx ===
import Link from "next/link";

export default function OptimaliseringPage() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto">
        <p className="text-emerald-300 font-semibold tracking-wide">
          Optimalisering (hovedfokus)
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Optimalisering av bygg gir lavere kostnader og bedre drift
        </h1>
        <p className="mt-5 text-neutral-300 text-lg md:text-xl leading-relaxed">
          Vi analyserer og forbedrer eksisterende bygg med fokus på energi, inneklima og
          driftssikkerhet. Tiltak prioriteres etter effekt og gjennomførbarhet – ikke «mest mulig arbeid».
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-amber-400 transition"
          >
            Be om gjennomgang
          </Link>
          <Link
            href="/prosjekter"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
          >
            Se prosjekter
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Stat title="Fokus" value="Energi • Inneklima • Drift" />
          <Stat title="Leveranse" value="Tiltaksliste + rapport" />
          <Stat title="Mål" value="Stabil drift og lavere kostnader" />
        </div>
      </section>

      {/* Hva vi optimaliserer */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Hva vi optimaliserer
        </h2>
        <p className="mt-3 text-neutral-300 leading-relaxed">
          Typisk finner vi «små feil med stor effekt»: unødvendig driftstid, feil styring,
          dårlig samspill mellom varme/kjøling og bruksmønster, eller manglende vedlikehold som gir høyere energibruk.
        </p>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card
            title="Energi og driftstid"
            bullets={[
              "Kartlegging av driftstider og last (hva går når ingen bruker bygget)",
              "Tiltak for mer riktig drift (uten å ofre komfort)",
              "ENØK-tiltak rangert etter effekt og kost/nytte",
            ]}
          />
          <Card
            title="Inneklima og komfort"
            bullets={[
              "Feilsøking som gir jevnere temperatursoner",
              "Tiltak mot trekk, støy og ubehag (praktisk, ikke teoretisk)",
              "Målrettede justeringer med dokumentasjon",
            ]}
          />
          <Card
            title="Teknisk drift og robusthet"
            bullets={[
              "Avvik og svake punkter som skaper driftsstans eller klager",
              "Tiltaksplan som gjør drift mer forutsigbar",
              "Oppfølging etter gjennomført tiltak (for å sikre effekt)",
            ]}
          />
          <Card
            title="Praktisk gjennomføring"
            bullets={[
              "Vi prioriterer tiltak som kan gjennomføres uten «prosjekt-kaos»",
              "Små og mellomstore grep først – store grep kun når det lønner seg",
              "Tett dialog med eier/styre/forvalter underveis",
            ]}
          />
        </div>
      </section>

      {/* Slik jobber vi */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Slik jobber vi</h2>
        <div className="mt-7 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Step n="1" title="Kartlegging" text="Befaring, data/observasjoner og avgrensning av mål." />
          <Step n="2" title="Tiltaksliste" text="Prioritert liste med anbefalinger og effekt-vurdering." />
          <Step n="3" title="Gjennomføring" text="Vi utfører valgte tiltak – ryddig og dokumentert." />
          <Step n="4" title="Kontroll" text="Oppfølging og rapport: hva ble gjort og hva anbefales videre." />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto mt-14">
        <div className="rounded-2xl border border-white/15 bg-neutral-900/40 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            Vil du ha en konkret tiltaksplan?
          </h3>
          <p className="mt-2 text-neutral-300 leading-relaxed">
            Send oss litt info om byggtype og hva dere ønsker å forbedre, så foreslår vi en praktisk fremgangsmåte.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition"
            >
              Kontakt oss
            </Link>
            <Link
              href="/eiendomsdrift"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
            >
              Se eiendomsdrift
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

function Card({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
      <h3 className="font-bold text-lg tracking-tight">{title}</h3>
      <ul className="mt-3 space-y-2 text-neutral-300 leading-relaxed">
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
// === END: src/app/optimalisering/page.tsx ===
