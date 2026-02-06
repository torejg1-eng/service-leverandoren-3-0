import Link from "next/link";

export default function InnsiktTekniskTilsyn() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      <section className="max-w-4xl mx-auto">
        {/* H1 */}
        <p className="text-emerald-300 font-semibold tracking-wide">
          Innsikt · Teknisk tilsyn
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Teknisk tilsyn: enkel modell for faste runder
        </h1>

        {/* Intro */}
        <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
          Mange bygg har faste tilsynsrunder og periodiske kontroller. Likevel
          opplever både eiere og drift at oversikten er begrenset, og at de samme
          problemene gjentar seg over tid.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Årsaken er sjelden mangel på rutiner – men at tilsynet ikke er rigget
          for å gi reell innsikt i byggets tekniske tilstand.
        </p>

        {/* Hvorfor */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Hvorfor teknisk tilsyn ofte gir lite effekt
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Tilsyn gjennomføres som sjekklister, ikke vurdering</li>
          <li>Avvik registreres uten tydelig prioritering</li>
          <li>Rapporter arkiveres, men brukes ikke aktivt</li>
          <li>Fokus ligger på enkeltkomponenter fremfor helhet</li>
        </ul>

        {/* Konsekvenser */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Typiske konsekvenser i praksis
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Små tekniske avvik utvikler seg over tid</li>
          <li>Drift reagerer på hendelser i stedet for å forebygge</li>
          <li>Vedlikehold blir fragmentert og lite målrettet</li>
          <li>Eier mangler et samlet bilde av byggets faktiske tilstand</li>
        </ul>

        {/* Forskjell */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Forskjellen på kontroll og reelt teknisk tilsyn
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Tilsyn vurderer samspill mellom tekniske systemer</li>
          <li>Observasjoner settes i sammenheng med drift og bruk</li>
          <li>Avvik kobles direkte til anbefalte tiltak</li>
          <li>Oppfølging er en del av neste runde – ikke et engangstiltak</li>
        </ul>

        {/* Når relevant */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Når gir teknisk tilsyn størst verdi
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Når bygget har vært i drift over tid uten helhetlig gjennomgang</li>
          <li>Når drift opplever at problemer «flytter på seg»</li>
          <li>Når vedlikehold skjer reaktivt</li>
          <li>Når eier ønsker bedre beslutningsgrunnlag</li>
        </ul>

        {/* Avslutning */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-neutral-900/40 p-6">
          <p className="text-neutral-200 leading-relaxed">
            Et godt teknisk tilsyn handler ikke om flere runder, men om riktige
            observasjoner og systematisk oppfølging. Det gir oversikt, trygghet
            og bedre kontroll over byggets utvikling.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/eiendomsdrift"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition"
            >
              Se hvordan vi jobber med eiendomsdrift
            </Link>

            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
            >
              Ta kontakt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
