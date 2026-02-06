import Link from "next/link";

export default function InnsiktSjekklisteEiendomsdrift() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      <section className="max-w-4xl mx-auto">
        {/* H1 */}
        <p className="text-emerald-300 font-semibold tracking-wide">
          Innsikt · Eiendomsdrift
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Sjekkliste for eiendomsdrift som faktisk fungerer
        </h1>

        {/* Intro */}
        <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
          Mange bygg har sjekklister, rutiner og faste runder. Likevel opplever
          både eiere og drift at oversikten glipper, avvik gjentar seg, og
          forbedringer uteblir.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Problemet er sjelden mangel på innsats. Det er at sjekklistene ikke er
          bygget for å gi reell styring.
        </p>

        {/* Hvorfor */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Hvorfor mange sjekklister ikke gir kontroll
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>De er for omfattende og blir et ritual, ikke et verktøy</li>
          <li>De fanger symptomer, men ikke årsaker</li>
          <li>De brukes uten tydelig prioritering</li>
          <li>De gir lite grunnlag for konkrete tiltak</li>
        </ul>

        {/* Konsekvenser */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Typiske konsekvenser i praksis
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Avvik blir registrert, men ikke lukket</li>
          <li>Små problemer gjentar seg over tid</li>
          <li>Drift reagerer på klager i stedet for å styre proaktivt</li>
          <li>Energi- og vedlikeholdskostnader øker gradvis</li>
        </ul>

        {/* Forskjell */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Hva som skiller fungerende eiendomsdrift fra brannslukking
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Få, tydelige kontrollpunkter – ikke lange lister</li>
          <li>Fast struktur for oppfølging av avvik</li>
          <li>Klar kobling mellom observasjon og tiltak</li>
          <li>Dokumentasjon som brukes aktivt, ikke arkiveres</li>
        </ul>

        {/* Når relevant */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Når gir det mening å gjøre noe
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>De samme avvikene dukker opp gang på gang</li>
          <li>Det er uklart hvilke tiltak som faktisk har effekt</li>
          <li>Drift opplever at bygget er «i grenseland»</li>
          <li>Eier mangler trygghet på at driften er optimal</li>
        </ul>

        {/* Avslutning */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-neutral-900/40 p-6">
          <p className="text-neutral-200 leading-relaxed">
            En fungerende sjekkliste handler ikke om å kontrollere mer – men om å
            kontrollere riktig. Ofte er det små justeringer i struktur og
            oppfølging som gir størst effekt.
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
