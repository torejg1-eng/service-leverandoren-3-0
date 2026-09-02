// === START: src/app/optimalisering/page.tsx ===
import type { Metadata } from "next";\nimport Link from "next/link";\n\nexport const metadata: Metadata = {\n  title: "Energioptimalisering av bygg i Østfold",\n  description: "Kartlegging og optimalisering av energi, ventilasjon, inneklima og teknisk drift i eksisterende næringsbygg.",\n  alternates: { canonical: "/optimalisering" },\n};

export default function OptimaliseringPage() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      {/* Hero */}
      <section className="max-w-5xl mx-auto">
        <p className="text-emerald-300 font-semibold tracking-wide">
          Energioptimalisering av eksisterende bygg
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

{/* Hvor ligger ditt bygg? */}
<section className="max-w-5xl mx-auto mt-14">
  <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
    Hvor ligger ditt bygg i praksis?
  </h2>

  <p className="mt-3 text-neutral-300 leading-relaxed">
    De fleste bygg fungerer helt greit i hverdagen. Likevel ser vi ofte at varme,
    ventilasjon og drift ikke er optimalt samkjørt. Forskjellen mellom fungerende
    og optimalisert er ofte betydelig – både teknisk og økonomisk.
  </p>

  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* 1 */}
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
      <h3 className="font-bold text-lg tracking-tight mb-3">
        1. Godt optimalisert
      </h3>
<ul className="list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
        <li>Samspill mellom varme og ventilasjon fungerer i hele bygget</li>
        <li>Driftstid er tilpasset faktisk bruk av bygget</li>
        <li>Energibruken er stabil og forutsigbar over tid</li>
        <li>Tekniske anlegg arbeider sammen uten overstyring</li>
        <li>Ønsket temperatur opprettholdes uten at systemer kompenserer for hverandre</li>
        <li className="text-emerald-300 font-semibold pt-2">
          Dette nivået oppnås sjeldent i ordinær drift
        </li>
      </ul>
    </div>

    {/* 2 */}
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
      <h3 className="font-bold text-lg tracking-tight mb-3">
        2. Fungerer greit – men sløser
      </h3>
<ul className="list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
        <li>Ingen akutte klager fra brukere eller leietakere</li>
        <li>Overtemperatur løses ofte med økt ventilasjon</li>
        <li>Driftstid er lengre enn faktisk behov</li>
        <li>Energiforbruket er høyere enn nødvendig, men oppleves som normalt</li>
        <li className="text-emerald-300 font-semibold pt-2">
          Dette er der de fleste bygg befinner seg
        </li>
      </ul>
    </div>

    {/* 3 */}
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
      <h3 className="font-bold text-lg tracking-tight mb-3">
        3. Delvis ute av balanse
      </h3>
<ul className="list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
        <li>Klager i enkelte soner eller perioder</li>
        <li>Tidligere justeringer er gjort uten helhetlig plan</li>
        <li>Varme og ventilasjon motarbeider hverandre</li>
        <li>Driftspersonell er usikre på hva som kan justeres videre</li>
        <li className="pt-2">
          Bygget fungerer, men er teknisk ustabilt
        </li>
      </ul>
    </div>

    {/* 4 */}
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
      <h3 className="font-bold text-lg tracking-tight mb-3">
        4. Feilregulert
      </h3>
<ul className="list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
        <li>Ventilasjon brukes i praksis som kjøleanlegg</li>
        <li>Historiske endringer har bygget seg opp over tid</li>
        <li>Uklare eller feil referanser i styring og regulering</li>
        <li>Høyt energiforbruk uten tilsvarende komfort</li>
        <li className="pt-2">
          Feilene er synlige, men årsaken er ofte sammensatt
        </li>
      </ul>
    </div>
  </div>
  {/* Erfaringsbasert fordeling */}
<div className="max-w-4xl mx-auto mt-6">
  <p className="text-sm md:text-[0.95rem] text-neutral-400 leading-relaxed">
    <span className="font-semibold text-neutral-300">
      Erfaringsbasert virkelighetsbilde:
    </span>{" "}
    Basert på praktisk arbeid med norske kontor- og næringsbygg ser vi ofte
    følgende grove fordeling:
  </p>

  <ul className="mt-3 list-disc list-outside pl-6 space-y-1.5 text-sm md:text-[0.95rem] text-neutral-400">
    <li>Omtrent <span className="text-neutral-300 font-semibold">10–15&nbsp;%</span> av bygg er reelt godt optimalisert</li>
    <li>Rundt <span className="text-neutral-300 font-semibold">40–50&nbsp;%</span> fungerer greit, men har betydelig energisløsing</li>
    <li>Ca. <span className="text-neutral-300 font-semibold">25–30&nbsp;%</span> er delvis ute av balanse</li>
    <li>Omtrent <span className="text-neutral-300 font-semibold">10–15&nbsp;%</span> er tydelig feilregulert</li>
  </ul>

  <p className="mt-3 text-sm md:text-[0.95rem] text-neutral-400 leading-relaxed">
    Det innebærer at sannsynligheten for at et bygg faktisk befinner seg i
    øverste kategori er relativt lav – selv om bygget i hverdagen kan oppleves
    som velfungerende.
  </p>
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
