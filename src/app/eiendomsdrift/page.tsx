// === START: src/app/eiendomsdrift/page.tsx ===
import Link from "next/link";

const insights = [
  {
    slug: "sjekkliste-eiendomsdrift",
    title: "Sjekkliste for eiendomsdrift som faktisk fungerer",
    excerpt:
      "En enkel, praktisk sjekkliste som gir kontroll på drift, avvik og småutbedringer – uten unødvendig byråkrati.",
    date: "2026-02-03",
    tag: "Drift",
  },
  {
    slug: "avvik-til-tiltak",
    title: "Fra avvik til tiltak: slik unngår du at småting blir dyrt",
    excerpt:
      "Hvordan du fanger opp og prioriterer avvik tidlig, og bygger en tiltaksliste som gir effekt og forutsigbarhet.",
    date: "2026-02-03",
    tag: "Avvik",
  },
  {
    slug: "teknisk-tilsyn-enkel-modell",
    title: "Teknisk tilsyn: enkel modell for faste runder",
    excerpt:
      "Et opplegg som passer næring og sameier: faste runder, tydelig rapport og praktisk oppfølging.",
    date: "2026-02-03",
    tag: "Tilsyn",
  },
  {
    slug: "uteomrader-vinterberedskap",
    title: "Uteområder og vinterberedskap: det som ofte glemmes",
    excerpt:
      "Sikkerhet, fremkommelighet og små tiltak som sparer tid og klager – spesielt i overgangssesonger.",
    date: "2026-02-03",
    tag: "Uteområder",
  },
];

const serviceCards = [
  {
    id: "teknisk-tilsyn",
    title: "Teknisk tilsyn",
    subtitle: "Faste runder, funksjonssjekk og tidlig avdekking",
    bullets: [
      "Periodiske runder etter avtale (bygg/teknisk)",
      "Enkel årlig ventilasjonsservice som del av drift (filter + visuell kontroll)",
      "Registrering av avvik og forslag til tiltak",
    ],
  },
  {
    id: "byggservice",
    title: "Vaktmester / byggservice",
    subtitle: "Løpende utbedringer og praktisk vedlikehold",
    bullets: [
      "Småreparasjoner og utbedringer før de blir kostbare",
      "Tetting, justering, utskiftinger og «fiks det nå»-oppgaver",
      "Ryddig dokumentasjon (bilder/tekst ved behov)",
    ],
  },
  {
    id: "uteomrader",
    title: "Uteområder",
    subtitle: "Trygghet, orden og enklere drift",
    bullets: [
      "Tilsyn av utearealer og enkle utbedringer",
      "Oppfølging av vinter/overganger (sikkerhet og fremkommelighet)",
      "Tiltaksliste for vedlikehold av uteområder",
    ],
  },
  {
    id: "avvik-rapport",
    title: "Avvik & rapportering",
    subtitle: "Oversikt, prioritering og oppfølging",
    bullets: [
      "Avvikslogg med prioritet og anbefalt handling",
      "Tiltaksliste rangert etter effekt og risiko",
      "Enkelt språk og praktiske anbefalinger",
    ],
  },
];

export default function EiendomsdriftPage() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      {/* HERO */}
      <section className="max-w-5xl mx-auto">
        <p className="text-emerald-300 font-semibold tracking-wide">
          Eiendomsdrift
        </p>

        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Eiendomsdrift som gir kontroll, færre avvik og bedre flyt
        </h1>

        <p className="mt-5 text-neutral-300 text-lg md:text-xl leading-relaxed">
          Vi tar ansvar for løpende drift, tilsyn og praktisk vedlikehold. Målet er
          forutsigbarhet for eier, styre og leietakere – med ryddig oppfølging og
          tydelige tiltak.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-amber-400 transition"
          >
            Spør om driftsavtale
          </Link>
          <Link
            href="/optimalisering"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
          >
            Se optimalisering
          </Link>
        </div>

        {/* “Proff-kort” a la Toma (uten å overdrive) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Stat title="Oppfølging" value="Faste runder + tydelig ansvar" />
          <Stat title="Oversikt" value="Avvik → tiltak → gjennomføring" />
          <Stat title="Trygghet" value="Ryddig dokumentasjon og dialog" />
        </div>
      </section>

      {/* TJENESTEKORT (Toma-stil) */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Tjenester innen eiendomsdrift
        </h2>
        <p className="mt-3 text-neutral-300 leading-relaxed">
          Vi deler eiendomsdrift i fire praktiske områder. Det gjør det enklere å
          bestille riktig, og gir tydelig ansvar og leveranse.
        </p>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceCards.map((c) => (
            <ServiceCard key={c.id} card={c} />
          ))}
        </div>
      </section>

      {/* SLIK JOBBER VI */}
      <section className="max-w-5xl mx-auto mt-14">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Slik jobber vi
        </h2>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Step
            n="1"
            title="Oppstart"
            text="Avklar behov, byggtype og ønsket nivå på drift."
          />
          <Step
            n="2"
            title="Rutiner"
            text="Sjekklister, frekvens og tydelig kontaktpunkt."
          />
          <Step
            n="3"
            title="Utførelse"
            text="Tilsyn, utbedringer og oppfølging etter avtale."
          />
          <Step
            n="4"
            title="Rapport"
            text="Avvik og tiltak – kort, forståelig og praktisk."
          />
        </div>
      </section>

      {/* DETALJ-SEKSJONER (ankere) */}
      <section className="max-w-5xl mx-auto mt-14 space-y-4">
        <DetailBlock
          id="teknisk-tilsyn"
          title="Teknisk tilsyn"
          text="Faste runder er ofte den enkleste måten å få kontroll: små feil oppdages før de blir store, og drift blir mer forutsigbar."
          bullets={[
            "Periodiske runder etter avtale",
            "Enkel årlig ventilasjonsservice som del av drift (filter + visuell kontroll)",
            "Avvik med prioritet og anbefalt tiltak",
          ]}
        />
        <DetailBlock
          id="byggservice"
          title="Vaktmester / byggservice"
          text="Praktisk vedlikehold og småutbedringer gir stor effekt over tid. Vi tar ‘småting’ på alvor – fordi det sparer kostnader, tid og klager."
          bullets={[
            "Småreparasjoner og utbedringer",
            "Tetting, justering og utskiftinger",
            "Dokumentasjon ved behov (bilder/tekst)",
          ]}
        />
        <DetailBlock
          id="uteomrader"
          title="Uteområder"
          text="Uteområder er ofte kilden til småproblemer som blir store når årstidene skifter. En ryddig plan gir trygghet og bedre drift."
          bullets={[
            "Tilsyn og enkel oppfølging av uteareal",
            "Tiltaksliste for vedlikehold",
            "Fokus på sikkerhet og fremkommelighet",
          ]}
        />
        <DetailBlock
          id="avvik-rapport"
          title="Avvik & rapportering"
          text="Rapportering skal være kort og nyttig – ikke tungt. Vi jobber med klar prioritet: hva må gjøres nå, hva bør gjøres snart, og hva kan planlegges."
          bullets={[
            "Avvikslogg med prioritet",
            "Tiltaksliste rangert etter effekt og risiko",
            "Tydelig språk og praktiske anbefalinger",
          ]}
        />
      </section>

      {/* INNSIKT (Toma “Aktuelt”-følelse) */}
      <section className="max-w-5xl mx-auto mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Innsikt
            </h2>
            <p className="mt-2 text-neutral-300 leading-relaxed">
              Korte, praktiske artikler og erfaringer fra drift og optimalisering.
            </p>
          </div>
          <Link
            href="/innsikt"
            className="hidden sm:inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
          >
            Se alle
          </Link>
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.slice(0, 4).map((p) => (
            <Link
              key={p.slug}
              href={`/innsikt/${p.slug}`}
              className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5 hover:border-emerald-400/40 transition"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs uppercase tracking-wide text-emerald-300">
                  {p.tag}
                </p>
                <p className="text-xs text-neutral-400">{formatDate(p.date)}</p>
              </div>
              <h3 className="mt-3 font-bold text-lg tracking-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-neutral-300 leading-relaxed">
                {p.excerpt}
              </p>
              <p className="mt-4 text-emerald-300 font-semibold">Les mer →</p>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/innsikt"
            className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
          >
            Se alle innlegg
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto mt-14">
        <div className="rounded-2xl border border-white/15 bg-neutral-900/40 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            Ønsker du en fast og ryddig driftsrutine?
          </h3>
          <p className="mt-2 text-neutral-300 leading-relaxed">
            Send oss litt info om eiendommen og ønsket nivå, så foreslår vi en
            enkel og praktisk driftsavtale.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition"
            >
              Kontakt oss
            </Link>
            <Link
              href="/prosjekter"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
            >
              Se prosjekter
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
      <p className="mt-1 text-sm md:text-base font-semibold text-neutral-100">
        {value}
      </p>
    </div>
  );
}

function ServiceCard({
  card,
}: {
  card: {
    id: string;
    title: string;
    subtitle: string;
    bullets: string[];
  };
}) {
  return (
    <div className="rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
      <h3 className="font-bold text-lg tracking-tight">{card.title}</h3>
      <p className="mt-1 text-neutral-300">{card.subtitle}</p>

      <ul className="mt-4 space-y-2 text-neutral-300 leading-relaxed">
        {card.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <a
          href={`#${card.id}`}
          className="inline-flex items-center justify-center rounded-xl border border-white/20 px-4 py-2 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
        >
          Les mer
        </a>
      </div>
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

function DetailBlock({
  id,
  title,
  text,
  bullets,
}: {
  id: string;
  title: string;
  text: string;
  bullets: string[];
}) {
  return (
    <div id={id} className="rounded-2xl border border-white/15 bg-neutral-900/30 p-6">
      <h3 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-neutral-300 leading-relaxed">{text}</p>
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

function formatDate(iso: string) {
  // ISO YYYY-MM-DD -> DD.MM.YYYY
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
// === END: src/app/eiendomsdrift/page.tsx ===
