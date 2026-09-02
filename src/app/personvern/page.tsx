import Link from "next/link";

export default function PersonvernPage() {
  return (
    <main className="min-h-screen px-4 md:px-12 pt-[calc(var(--header-height)+24px)] pb-16">
      <section className="max-w-4xl mx-auto">
        <p className="text-emerald-300 font-semibold tracking-wide">Personvern</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
          Personvernerklæring
        </h1>
        <p className="mt-5 text-neutral-300 text-lg leading-relaxed">
          Service Leverandøren AS tar personvern på alvor. Her forklarer vi hvilke
          opplysninger vi kan samle inn, hvorfor vi gjør det, og hvilke rettigheter du har.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          <Info title="Behandlingsansvarlig" value="Service Leverandøren AS" />
          <Info title="Kontakt" value="post@serviceleverandøren.no" />
          <Info title="Telefon" value="+47 469 25 236" />
        </div>

        {/* Innhold */}
        <div className="mt-12 space-y-10">
          <Block title="1. Hvilke data vi samler inn">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300 leading-relaxed">
              <li>
                <span className="font-semibold text-neutral-100">Kontaktopplysninger</span>{" "}
                (navn, e-post, telefon) når du tar kontakt via skjema, e-post eller telefon.
              </li>
              <li>
                <span className="font-semibold text-neutral-100">Oppdragsinformasjon</span>{" "}
                (adresse, byggtype, ønsket tjeneste) når det er nødvendig for å kunne gi tilbud eller utføre oppdrag.
              </li>
              <li>
                <span className="font-semibold text-neutral-100">Tekniske data</span>{" "}
                (IP-adresse, nettlesertype, besøk på sider) kan forekomme i forbindelse med drift, sikkerhet og enkel statistikk.
              </li>
            </ul>
          </Block>

          <Block title="2. Hvorfor vi samler inn data (formål)">
            <ul className="list-disc pl-5 space-y-2 text-neutral-300 leading-relaxed">
              <li>Besvare henvendelser og gi tilbud.</li>
              <li>Planlegge og gjennomføre oppdrag.</li>
              <li>Fakturering og dokumentasjon knyttet til leveranse.</li>
              <li>Sikre stabil drift og forbedre nettsidens innhold.</li>
            </ul>
          </Block>

          <Block title="3. Behandlingsgrunnlag">
            <p className="text-neutral-300 leading-relaxed">
              Vi behandler personopplysninger når det er nødvendig for å:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300 leading-relaxed">
              <li>
                oppfylle en avtale eller gjennomføre tiltak på forespørsel før avtale inngås
              </li>
              <li>oppfylle rettslige forpliktelser (f.eks. regnskapsplikt)</li>
              <li>ivareta berettigede interesser (f.eks. sikkerhet og forbedring av nettsiden)</li>
              <li>samtykke, der dette kreves (f.eks. enkelte typer cookies)</li>
            </ul>
          </Block>

          <Block title="4. Deling av opplysninger">
            <p className="text-neutral-300 leading-relaxed">
              Vi deler ikke personopplysninger med andre enn det som er nødvendig for å levere
              tjenesten. Det kan inkludere:
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300 leading-relaxed">
              <li>
                leverandører av IT-/driftstjenester (for eksempel webhosting) for stabil og sikker drift
              </li>
              <li>
                regnskapsfører/banksystemer ved fakturering og betaling (når relevant)
              </li>
            </ul>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Vi deler aldri opplysninger for markedsføring på vegne av tredjeparter.
            </p>
          </Block>

          <Block title="5. Lagringstid">
            <p className="text-neutral-300 leading-relaxed">
              Vi lagrer personopplysninger så lenge det er nødvendig for formålet, eller så lenge
              vi er pålagt å lagre dem (for eksempel regnskapsdokumentasjon). Opplysninger knyttet
              til henvendelser slettes normalt når de ikke lenger er relevante.
            </p>
          </Block>

          <Block title="6. Cookies og statistikk">
            <p className="text-neutral-300 leading-relaxed">
              Nettsiden kan bruke cookies for grunnleggende funksjonalitet, sikkerhet og enkel statistikk.
              Cookies er små tekstfiler som lagres i nettleseren din.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-2 text-neutral-300 leading-relaxed">
              <li>
                <span className="font-semibold text-neutral-100">Nødvendige cookies</span>{" "}
                brukes for at nettsiden skal fungere.
              </li>
              <li>
                <span className="font-semibold text-neutral-100">Statistikk</span>{" "}
                kan brukes for å forstå bruksmønster og forbedre innhold (for eksempel via analyseverktøy).
              </li>
            </ul>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Du kan blokkere eller slette cookies i nettleseren din. Vær oppmerksom på at enkelte funksjoner
              kan slutte å fungere hvis cookies deaktiveres.
            </p>
          </Block>

          <Block title="7. Dine rettigheter">
            <p className="text-neutral-300 leading-relaxed">
              Du har rett til å be om innsyn, retting eller sletting av personopplysninger, og i visse tilfeller
              begrensning av behandlingen. Du kan også protestere på behandling som skjer basert på berettiget interesse.
            </p>
            <p className="mt-3 text-neutral-300 leading-relaxed">
              Ta kontakt med oss dersom du ønsker å bruke dine rettigheter.
            </p>
          </Block>

          <Block title="8. Kontakt">
            <p className="text-neutral-300 leading-relaxed">
              Har du spørsmål om personvern, eller ønsker innsyn/sletting, kontakt oss:
            </p>

            <div className="mt-4 rounded-2xl border border-white/15 bg-neutral-900/30 p-5">
              <p className="text-neutral-200">
                <span className="text-white/70">E-post:</span>{" "}
                <a className="hover:text-emerald-200 transition" href="mailto:post@serviceleverandøren.no">
                  post@serviceleverandøren.no
                </a>
              </p>
              <p className="mt-2 text-neutral-200">
                <span className="text-white/70">Telefon:</span>{" "}
                <a className="hover:text-emerald-200 transition" href="tel:+4746925236">
                  +47 469 25 236
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-neutral-900 hover:bg-emerald-300 transition"
              >
                Gå til kontaktsiden
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-neutral-100 hover:border-emerald-400/60 hover:text-emerald-200 transition"
              >
                Til forsiden
              </Link>
            </div>

            <p className="mt-6 text-xs text-white/50">
              Sist oppdatert: 03.02.2026
            </p>
          </Block>
        </div>
      </section>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-neutral-900/20 p-6 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/15 bg-neutral-900/40 p-4">
      <p className="text-xs uppercase tracking-wide text-neutral-400">{title}</p>
      <p className="mt-1 text-sm md:text-base font-semibold text-neutral-100">{value}</p>
    </div>
  );
}
