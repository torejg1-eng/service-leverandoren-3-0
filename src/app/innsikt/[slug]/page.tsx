// === START: src/app/innsikt/[slug]/page.tsx ===
import Link from "next/link";
import { notFound } from "next/navigation";

const posts = [
    {
    slug: "hvor-vanlig-er-feilregulerte-bygg",
    title: "Hvor vanlig er feilregulerte bygg – egentlig?",
    date: "2026-02-06",
    tag: "Energi",
    content: [
      "Mange næringsbygg fungerer tilsynelatende helt greit. Det er varme i lokalene, ventilasjonen går, og klagene er håndterbare.",
      "Likevel viser praktisk erfaring at svært mange bygg ligger betydelig over sitt stabile og optimale energinivå – uten at eier eller drift er klar over det.",
      "Spørsmålet er ikke om bygget fungerer. Spørsmålet er hvor godt det faktisk er regulert.",

      "Basert på praktisk feilsøking og optimalisering i norske kontor- og næringsbygg, ser fordelingen ofte slik ut:",
      "1) Godt optimalisert (ca. 10–15 %): Reell innregulering/optimalisering siste 3–5 år, samspill mellom varme og ventilasjon fungerer, lavt klagenivå og stabil energibruk.",
      "2) Fungerer greit – men sløser (ca. 40–50 %): Ingen akutte klager, overtemperatur løses med ventilasjon, for høy minimumsventilasjon og for lang driftstid på kveld/helg. Dette er ofte det største volumet, og her er 10–20 % energireduksjon ofte mulig uten komforttap.",
      "3) Delvis ute av balanse (ca. 25–30 %): Klager i enkelte soner, tidligere justeringer gjort stykkevis, dårlig samspill mellom varme og ventilasjon, drift tør ikke røre mer. Her blir verdien tydelig – både teknisk og økonomisk.",
      "4) Feilregulert / akkumulert feil (ca. 10–15 %): Ventilasjon brukt som kjøleanlegg, feil hydraulikk, feil VAV-min, feil referanser, historisk lappverk av justeringer. Sjeldnere, men svært synlige case.",

      "Hvorfor det ofte ser verre ut enn det egentlig er: De fleste bygg er ikke dårlige i utgangspunktet – de blir dårlige over tid. Flere leverandører har vært inne uten helhetsansvar, endringer gjøres for å stoppe klager, og energibruk følges ikke systematisk opp.",
      "Resultatet er ofte et bygg som teknisk sett fungerer, men som er regulert helt feil.",

      "Forskjellen mellom vanlig drift og systematisk optimalisering er som regel dette:",
      "Vanlig praksis: justerer én disiplin av gangen, reagerer på klager, mangler energidata som fasit.",
      "Systematisk optimalisering: ser varme, ventilasjon og brukeropplevelse samlet, jobber reversibelt og trinnvis, dokumenterer effekt i energikurver, og lar energidata avgjøre – ikke magefølelse.",

      "Realistisk forventning i markedet: 70–80 % av bygg har reelt optimaliseringspotensial. 30–40 % har potensial over 15 % energireduksjon. 10–15 % er tydelige case-studier.",
      "Det viktigste poenget: Mange eiere tror de er i gruppe 1–2, men ligger i praksis i gruppe 3.",

      "Dette bør ikke selges som «vi fikser bygg som er ute å kjøre». Det bør selges som: «Vi dokumenterer optimal drift og lavest stabile energinivå – uten komforttap». For volumet ligger i midten.",
      "Vil du vite hvor ditt bygg ligger? Ta kontakt for en gjennomgang.",
    ],
    bullets: [
      "De fleste bygg fungerer, men er ikke optimalisert",
      "Størst volum: «fungerer greit, men sløser» (ofte 10–20 % potensial)",
      "Systematisk optimalisering handler om helhet + data som fasit",
      "Markedet er stort – og «midten» tror ofte de er gode",
    ],
  },
  {
    slug: "sjekkliste-eiendomsdrift",
    title: "Sjekkliste for eiendomsdrift som faktisk fungerer",
    date: "2026-02-03",
    tag: "Drift",
    content: [
      "Målet er enkel kontroll: faste runder, avvik som blir fulgt opp, og en tiltaksplan som faktisk blir gjennomført.",
      "Start med det grunnleggende: ansvar, frekvens og tydelig rapportering.",
      "Deretter: prioriter avvik etter risiko og effekt – ikke etter hva som roper høyest i øyeblikket.",
    ],
    bullets: [
      "Faste runder med sjekkliste",
      "Avvikslogg med prioritet",
      "Tiltaksliste med ansvar og frist",
      "Kort rapport som er lett å lese",
    ],
  },
  {
    slug: "avvik-til-tiltak",
    title: "Fra avvik til tiltak: slik unngår du at småting blir dyrt",
    date: "2026-02-03",
    tag: "Avvik",
    content: [
      "Det som ofte koster mest er ikke store prosjekter – men små avvik som får leve lenge.",
      "Bruk en enkel modell: registrer → vurder risiko → velg tiltak → følg opp.",
      "Det er oppfølgingen som skaper proff drift.",
    ],
    bullets: [
      "Registrer avvik med bilde/tekst",
      "Sett prioritet (nå / snart / planlagt)",
      "Gjør små tiltak tidlig",
      "Følg opp til det er lukket",
    ],
  },
  {
    slug: "teknisk-tilsyn-enkel-modell",
    title: "Teknisk tilsyn: enkel modell for faste runder",
    date: "2026-02-03",
    tag: "Tilsyn",
    content: [
      "Teknisk tilsyn handler om forutsigbarhet: du vil oppdage feil før de skaper klager eller driftsstans.",
      "Hold det enkelt: faste punkter, faste runder, og en kort rapport med tiltak.",
    ],
    bullets: [
      "Fast frekvens (f.eks. månedlig/kvartalsvis)",
      "Sjekkliste med faste punkter",
      "Avvik → tiltaksliste",
      "Rapport som alle forstår",
    ],
  },
  {
    slug: "uteomrader-vinterberedskap",
    title: "Uteområder og vinterberedskap: det som ofte glemmes",
    date: "2026-02-03",
    tag: "Uteområder",
    content: [
      "Uteområder gir ofte flest småklager – fordi ingen eier helheten.",
      "En enkel plan for tilsyn og småutbedringer gir bedre sikkerhet og mindre støy.",
    ],
    bullets: [
      "Tilsyn ved værskifte",
      "Fokus på sikkerhet og fremkommelighet",
      "Tiltaksliste for vedlikehold",
      "Ryddig ansvar og oppfølging",
    ],
  },
];

export default function InnsiktPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      <article className="max-w-3xl mx-auto">
        <p className="text-emerald-300 font-semibold tracking-wide">{post.tag}</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-neutral-400">{formatDate(post.date)}</p>

        <div className="mt-8 space-y-4 text-neutral-300 leading-relaxed text-lg">
          {post.content.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/15 bg-neutral-900/30 p-6">
          <h2 className="text-xl font-bold tracking-tight">Kort oppsummert</h2>
          <ul className="mt-4 space-y-2 text-neutral-200 leading-relaxed">
            {post.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-emerald-300 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/innsikt"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
          >
            ← Tilbake til innsikt
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-3 font-semibold text-neutral-900 hover:bg-amber-400 transition"
          >
            Kontakt oss
          </Link>
        </div>
      </article>
    </main>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}
// === END: src/app/innsikt/[slug]/page.tsx ===
