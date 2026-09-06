import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Slik behandler SERVICELEVERANDØREN AS personopplysninger når du besøker nettstedet eller tar kontakt.",
  alternates: { canonical: "/personvern" },
  robots: { index: true, follow: true },
};

export default function PersonvernPage() {
  return (
    <main className="bg-[#f3f4ef] pt-[var(--header-height)]">
      <header className="dark-grid text-white">
        <div className="site-shell py-14 sm:py-20">
          <p className="eyebrow eyebrow-on-dark">Juridisk informasjon</p>
          <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-[0.96] tracking-[-0.055em] sm:text-7xl">Personvernerklæring</h1>
          <p className="lead-copy mt-7 text-white/62">
            Her forklarer vi hvilke personopplysninger vi behandler, hvorfor vi gjør det og hvordan du kan bruke rettighetene dine.
          </p>
          <p className="mt-8 font-mono text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/42">Sist oppdatert 2. september 2026</p>
        </div>
      </header>

      <div className="site-shell grid gap-12 py-14 lg:grid-cols-[16rem_1fr] lg:py-20">
        <aside className="lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:self-start">
          <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.15em] text-[#0d7654]">Behandlingsansvarlig</p>
          <p className="mt-4 font-bold">SERVICELEVERANDØREN AS</p>
          <p className="mt-2 text-sm leading-6 text-[#5b6861]">Org.nr. 936 026 087<br />Åsa-Tors vei 18A<br />1746 Skjeberg</p>
          <a href="mailto:post@service-leverandøren.no" className="mt-5 block break-all text-sm font-bold text-[#0d7654]">post@service-leverandøren.no</a>
          <a href="tel:+4746925236" className="mt-2 block text-sm font-bold text-[#0d7654]">+47 469 25 236</a>
        </aside>

        <article className="prose-premium max-w-3xl">
          <PrivacySection number="01" title="Opplysninger vi behandler">
            <p>Når du sender kontaktskjema, e-post eller ringer oss, kan vi behandle navn, virksomhet, e-postadresse, telefonnummer og opplysninger du selv skriver om behovet eller oppdraget.</p>
            <p>Når nettstedet besøkes, kan hosting- og sikkerhetssystemer registrere tekniske data som IP-adresse, tidspunkt, nettlesertype og forespurt side. Dette brukes for å levere og beskytte nettstedet.</p>
          </PrivacySection>

          <PrivacySection number="02" title="Formål og behandlingsgrunnlag">
            <ul>
              <li>Besvare henvendelser og gjøre avklaringer før en eventuell avtale.</li>
              <li>Planlegge, levere og følge opp avtalte oppdrag.</li>
              <li>Oppfylle lovpålagte krav, blant annet dokumentasjon og regnskap.</li>
              <li>Ivareta berettigede interesser knyttet til sikker og stabil nettdrift.</li>
            </ul>
            <p>Grunnlaget er normalt tiltak før avtale eller oppfyllelse av avtale, rettslig plikt eller vår berettigede interesse. Samtykke brukes der loven krever det.</p>
          </PrivacySection>

          <PrivacySection number="03" title="Leverandører og deling">
            <p>Kontaktskjemaet sendes via <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noreferrer">Formspree</a>. Nettsiden driftes hos <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">Vercel</a>. Disse leverandørene kan behandle opplysninger for å levere sine tjenester.</p>
            <p>Vi kan også dele nødvendige opplysninger med regnskapsfører, betalingsleverandør eller fagpartnere når det er nødvendig for en avtalt leveranse eller lovpålagt plikt. Vi selger ikke personopplysninger.</p>
          </PrivacySection>

          <PrivacySection number="04" title="Lagring og sletting">
            <p>Opplysninger lagres bare så lenge de er nødvendige for formålet. Henvendelser som ikke blir til et oppdrag slettes når de ikke lenger trengs. Opplysninger knyttet til avtaler og fakturering oppbevares så lenge bokføringsreglene eller andre plikter krever det.</p>
          </PrivacySection>

          <PrivacySection number="05" title="Informasjonskapsler">
            <p>Nettstedet er per sist oppdaterte versjon ikke satt opp med markedsføringscookies. Tekniske funksjoner hos hosting-leverandøren kan likevel bruke eller lagre nødvendig informasjon for sikkerhet og levering. Hvis analyse eller markedsføring blir tatt i bruk senere, skal erklæringen og eventuell samtykkeløsning oppdateres først.</p>
          </PrivacySection>

          <PrivacySection number="06" title="Rettighetene dine">
            <p>Du kan be om innsyn, retting, sletting, begrensning eller dataportabilitet når vilkårene er oppfylt. Du kan også protestere mot behandling basert på berettiget interesse og trekke tilbake et samtykke.</p>
            <p>Ta kontakt med oss dersom du vil bruke en rettighet. Du kan også klage til <a href="https://www.datatilsynet.no/om-datatilsynet/kontakt-oss/klage-til-datatilsynet/" target="_blank" rel="noreferrer">Datatilsynet</a>.</p>
          </PrivacySection>

          <section className="border border-[#101a16]/15 bg-white p-7 sm:p-9">
            <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.15em] text-[#0d7654]">Spørsmål om personvern</p>
            <h2 className="mt-4 text-2xl font-extrabold">Kontakt oss direkte</h2>
            <p className="mt-4">Skriv til <a href="mailto:post@service-leverandøren.no">post@service-leverandøren.no</a> eller ring <a href="tel:+4746925236">+47 469 25 236</a>.</p>
            <Link href="/kontakt" className="button-primary mt-6 no-underline">Gå til kontaktsiden</Link>
          </section>
        </article>
      </div>
    </main>
  );
}

function PrivacySection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-12 border-t border-[#101a16]/18 pt-7">
      <p className="font-mono text-[0.66rem] font-bold uppercase tracking-[0.15em] text-[#0d7654]">{number}</p>
      <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">{children}</div>
    </section>
  );
}
