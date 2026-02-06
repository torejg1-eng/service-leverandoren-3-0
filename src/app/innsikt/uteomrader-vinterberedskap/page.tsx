import Link from "next/link";

export default function InnsiktUteomraderVinterberedskap() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      <section className="max-w-4xl mx-auto">
        {/* H1 */}
        <p className="text-emerald-300 font-semibold tracking-wide">
          Innsikt · Uteområder
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Uteområder og vinterberedskap: det som ofte glemmes
        </h1>

        {/* Intro */}
        <p className="mt-6 text-neutral-300 text-lg leading-relaxed">
          Uteområder vurderes ofte som enkle å drifte. I praksis er det nettopp
          her mange små feil får store konsekvenser – særlig i overgangene mellom
          sesonger.
        </p>

        <p className="mt-4 text-neutral-300 leading-relaxed">
          Manglende forberedelse, uklart ansvar og reaktiv håndtering gjør at
          uteområder raskt blir en kilde til klager, risiko og unødvendige kostnader.
        </p>

        {/* Hvorfor */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Hvorfor uteområder ofte blir nedprioritert
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Fokus ligger på tekniske installasjoner inne</li>
          <li>Uteområder vurderes som sesongbaserte</li>
          <li>Ansvar er ofte delt mellom flere aktører</li>
          <li>Tiltak gjøres først når problemene oppstår</li>
        </ul>

        {/* Konsekvenser */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Typiske konsekvenser i praksis
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Økt risiko for fallulykker og personskader</li>
          <li>Flere klager fra brukere og leietakere</li>
          <li>Uforutsigbare kostnader knyttet til hasteutrykning</li>
          <li>Belastning på drift i perioder med høyt trykk</li>
        </ul>

        {/* Forskjell */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Forskjellen på reaktiv håndtering og vinterberedskap
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Kjente risikoområder er identifisert på forhånd</li>
          <li>Tiltak planlegges før sesongskifte</li>
          <li>Ansvar og responstid er tydelig avklart</li>
          <li>Oppfølging skjer som del av ordinær drift</li>
        </ul>

        {/* Når relevant */}
        <h2 className="mt-12 text-2xl md:text-3xl font-bold tracking-tight">
          Når gir dette størst verdi
        </h2>

        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-300 leading-relaxed">
          <li>Ved gjentakende klager på uteområder</li>
          <li>Når vinterdrift oppleves som stressende eller uforutsigbar</li>
          <li>Når ansvar og roller er uklare</li>
          <li>Når eier ønsker færre hendelser og bedre kontroll</li>
        </ul>

        {/* Avslutning */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-neutral-900/40 p-6">
          <p className="text-neutral-200 leading-relaxed">
            God vinterberedskap handler ikke om å gjøre mer – men om å være
            forberedt. Når uteområder inngår som en naturlig del av
            eiendomsdriften, reduseres både risiko og belastning betydelig.
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
