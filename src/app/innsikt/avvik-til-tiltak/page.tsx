import Link from "next/link";

export default function InnsiktAvvikTilTiltak() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      <section className="max-w-4xl mx-auto">
        {/* H1 */}
        <p className="text-emerald-300 font-semibold tracking-wide">
          Innsikt · Avvik og oppfølging
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Fra avvik til tiltak: slik unngår du at småting blir dyrt
        </h1>

        {/* Intro */}
        <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
          De fleste bygg har systemer for å registrere avvik. Likevel ser vi ofte
          at små problemer blir stående over tid – helt til de utvikler seg til
          kostbare eller konfliktfylte saker.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Utfordringen er sjelden at avvik ikke blir sett. Det er at de ikke blir
          fulgt opp på en måte som gir varig effekt.
        </p>

        {/* Hvorfor */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Hvorfor avvik sjelden blir til reelle tiltak
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Avvik registreres, men mangler tydelig ansvar</li>
          <li>Tiltak blir utsatt fordi de ikke oppleves som kritiske</li>
          <li>Små problemer normaliseres over tid</li>
          <li>Det mangler en klar kobling mellom observasjon og handling</li>
        </ul>

        {/* Konsekvenser */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Typiske konsekvenser i byggdrift
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Gjentakende klager fra brukere eller leietakere</li>
          <li>Økende energibruk uten åpenbar årsak</li>
          <li>Flere «midlertidige løsninger» som blir permanente</li>
          <li>Tap av oversikt over hva som faktisk er gjort</li>
        </ul>

        {/* Forskjell */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Forskjellen på avvikshåndtering og faktisk styring
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Avvik brukes som beslutningsgrunnlag – ikke bare dokumentasjon</li>
          <li>Tiltak prioriteres etter effekt, ikke støy</li>
          <li>Oppfølging er en del av drift, ikke et tillegg</li>
          <li>Endringer evalueres over tid</li>
        </ul>

        {/* Når relevant */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Når gir det mening å se nærmere på avvikene
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>De samme avvikene dukker opp flere ganger</li>
          <li>Tiltak gjennomføres uten å gi ønsket effekt</li>
          <li>Drift opplever at «ingenting blir ferdig»</li>
          <li>Eier mangler oversikt over reell status i bygget</li>
        </ul>

        {/* Avslutning */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-neutral-900/40 p-6">
          <p className="text-neutral-200 leading-relaxed">
            Når avvik følges systematisk helt frem til tiltak, endres dynamikken i
            byggdriften. Små problemer stoppes tidlig – før de blir dyre eller
            konfliktfylte.
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
