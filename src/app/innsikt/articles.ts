export const INSIGHTS_URL = "https://www.service-leverandøren.no/innsikt";

export type InsightSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
};

export type InsightArticle = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  date: string;
  displayDate: string;
  tag: string;
  readTime: string;
  intro: string[];
  sections: InsightSection[];
  summary: string[];
  serviceHref: string;
  serviceLabel: string;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: "hvor-vanlig-er-feilregulerte-bygg",
    title: "Hvor vanlig er feilregulerte bygg – egentlig?",
    shortTitle: "Hvor vanlig er feilregulerte bygg?",
    description:
      "Slik vurderer du om varme, ventilasjon og driftstider i et næringsbygg er riktig regulert – uten å lene deg på udokumenterte spareprosenter.",
    date: "2026-02-06",
    displayDate: "6. februar 2026",
    tag: "Energioptimalisering",
    readTime: "6 min lesetid",
    intro: [
      "Et bygg kan holde temperaturen, ha ventilasjon i drift og få få klager – og likevel bruke mer energi enn nødvendig. Normal drift er ikke det samme som optimal drift.",
      "Hvor stort forbedringspotensialet er, kan ikke avgjøres med en generell markedsprosent. Det må vurderes ut fra byggets bruk, tekniske anlegg, styring og målte drift over tid.",
    ],
    sections: [
      {
        heading: "Feil kan skjule seg i tilsynelatende normal drift",
        paragraphs: [
          "Reguleringen i et bygg endres ofte litt etter litt. Driftstider forlenges for å håndtere en klage, settpunkter flyttes, eller en midlertidig overstyring blir stående. Hver justering kan virke fornuftig isolert, men summen kan gi unødvendig samtidig oppvarming og kjøling eller drift utenfor brukstid.",
          "Det er derfor mer presist å lete etter avvik i samspillet mellom systemene enn å stemple hele bygget som feilregulert.",
        ],
      },
      {
        heading: "Signaler som er verdt å undersøke",
        bullets: [
          "Varme- eller ventilasjonsanlegg går vesentlig lenger enn byggets faktiske brukstid.",
          "Temperaturklager løses med varige overstyringer i stedet for å finne årsaken.",
          "Varme og kjøling motarbeider hverandre i samme sone eller tidsrom.",
          "Energibruken endrer seg uten at vær, arealbruk eller åpningstid forklarer utviklingen.",
          "Settpunkter og tidsplaner mangler dokumentert begrunnelse eller ansvarlig eier.",
        ],
      },
      {
        heading: "En trygg metode for å finne reelt potensial",
        paragraphs: [
          "Start med en referanseperiode som viser energibruk, utetemperatur, driftstider og kjente endringer i bygget. Gå deretter gjennom varme, ventilasjon og brukeropplevelse samlet.",
          "Endre én tydelig hypotese av gangen, følg utviklingen og dokumenter resultatet. Små, reversible justeringer gjør det enklere å se hva som faktisk virker – og å gå tilbake hvis komforten påvirkes.",
        ],
        bullets: [
          "Etabler en målbar referanse før justering.",
          "Prioriter åpenbare avvik i tidsstyring og samspill.",
          "Følg både energibruk og inneklima etter endringen.",
          "Dokumenter nye innstillinger, observasjoner og ansvar.",
        ],
      },
      {
        heading: "Hva kan man si om besparelsen?",
        paragraphs: [
          "Et troverdig anslag må bygge på data fra det konkrete bygget. Bygningstype, teknisk tilstand, bruksmønster, vær og tidligere tiltak påvirker utfallet. Derfor bør en prosentvis forventning alltid følges av forutsetninger og en beskrivelse av hvordan effekten skal verifiseres.",
        ],
        callout:
          "Et godt mål er lavest mulig stabil energibruk innenfor avtalte krav til inneklima – dokumentert før og etter tiltak.",
      },
      {
        heading: "Når er en gjennomgang særlig relevant?",
        paragraphs: [
          "En strukturert gjennomgang er aktuell når forbruket er vanskelig å forklare, når tekniske justeringer har samlet seg over tid, eller når driftsteamet mangler et samlet bilde av hvordan anleggene påvirker hverandre.",
          "Resultatet bør være et prioritert beslutningsgrunnlag: hva som er observert, hvilke tiltak som anbefales, og hvordan effekten skal måles.",
        ],
      },
    ],
    summary: [
      "Normal temperatur og få klager dokumenterer ikke optimal drift.",
      "Reelt potensial må vurderes i det enkelte bygget – ikke med en generell prosent.",
      "Varme, ventilasjon, brukstid og inneklima bør analyseres i sammenheng.",
      "Trinnvise tiltak og før-/ettermåling gir et tryggere beslutningsgrunnlag.",
    ],
    serviceHref: "/optimalisering",
    serviceLabel: "Se hvordan vi jobber med energioptimalisering",
  },
  {
    slug: "sjekkliste-eiendomsdrift",
    title: "Sjekkliste for eiendomsdrift som faktisk fungerer",
    shortTitle: "Sjekkliste for eiendomsdrift",
    description:
      "En praktisk modell for sjekklister, avvik og ansvar som gjør faste driftsrunder til et reelt styringsverktøy.",
    date: "2026-02-03",
    displayDate: "3. februar 2026",
    tag: "Eiendomsdrift",
    readTime: "5 min lesetid",
    intro: [
      "En god sjekkliste skal gjøre det enklere å oppdage endringer, prioritere riktig og lukke avvik. Hvis listen bare bekrefter at en runde er gjennomført, gir den begrenset verdi.",
      "Nøkkelen er færre og tydeligere kontrollpunkter, koblet til ansvar, frist og dokumentert oppfølging.",
    ],
    sections: [
      {
        heading: "Start med risiko og formål",
        paragraphs: [
          "Kontrollpunktene bør ta utgangspunkt i hva som kan påvirke sikkerhet, drift, inneklima, energibruk og bygningsmasse. Det gjør listen relevant for det aktuelle bygget i stedet for å bli en generell mal.",
        ],
        bullets: [
          "Hva må kontrolleres for å oppdage kritiske endringer tidlig?",
          "Hvilke observasjoner kan driftsteamet faktisk vurdere på runden?",
          "Hva krever fagperson eller en egen periodisk kontroll?",
          "Hvilken dokumentasjon trenger eier for å kunne prioritere tiltak?",
        ],
      },
      {
        heading: "Gjør hvert kontrollpunkt handlingsrettet",
        paragraphs: [
          "Formuleringen «kontroller teknisk rom» sier lite. Et bedre punkt beskriver hva som skal observeres, hva normaltilstanden er, og hva som skal skje ved avvik.",
          "Bilde, kort beskrivelse og fast kategorisering gjør det enklere å sammenligne utviklingen fra runde til runde.",
        ],
      },
      {
        heading: "Skill mellom observasjon og prioritering",
        paragraphs: [
          "Den som går runden skal kunne registrere det som faktisk observeres. Prioriteringen bør deretter bygge på konsekvens, hastegrad og sammenheng med andre avvik – ikke bare på hvem som melder høyest.",
        ],
        bullets: [
          "Kritisk: krever umiddelbar sikring eller oppfølging.",
          "Snarlig: bør planlegges og tildeles ansvar innen kort tid.",
          "Planlagt: kan samordnes med vedlikehold eller annet arbeid.",
          "Observasjon: følges over tid før tiltak besluttes.",
        ],
      },
      {
        heading: "Lukk runden – ikke bare listen",
        paragraphs: [
          "En gjennomført kontroll er først verdifull når funnene har en eier. Hvert avvik bør ha ansvarlig person, neste handling og frist. Ved neste runde må status kontrolleres før nye punkter legges til.",
        ],
        callout:
          "En kort sjekkliste med konsekvent oppfølging er ofte mer nyttig enn en lang liste uten tydelig eierskap.",
      },
    ],
    summary: [
      "Tilpass kontrollpunktene til byggets risiko, bruk og tekniske anlegg.",
      "Beskriv hva som skal observeres og hva som utløser handling.",
      "Prioriter avvik etter konsekvens og hastegrad.",
      "Tildel ansvar og kontroller lukking på neste runde.",
    ],
    serviceHref: "/eiendomsdrift",
    serviceLabel: "Se hvordan vi jobber med eiendomsdrift",
  },
  {
    slug: "avvik-til-tiltak",
    title: "Fra avvik til tiltak: slik unngår du at småting blir dyrt",
    shortTitle: "Fra avvik til tiltak",
    description:
      "En enkel arbeidsflyt for å registrere, prioritere og lukke avvik før små problemer utvikler seg til større kostnader.",
    date: "2026-02-03",
    displayDate: "3. februar 2026",
    tag: "Avvik og oppfølging",
    readTime: "5 min lesetid",
    intro: [
      "De fleste driftsorganisasjoner oppdager mange avvik tidlig. Utfordringen oppstår når observasjonen ikke får en tydelig eier, beslutning og frist.",
      "En enkel og konsekvent arbeidsflyt gjør det mulig å skille det kritiske fra det som kan planlegges – og å følge saken helt til effekten er kontrollert.",
    ],
    sections: [
      {
        heading: "Registrer slik at andre forstår funnet",
        paragraphs: [
          "Et avvik bør beskrive sted, tidspunkt, observert tilstand og mulig konsekvens. Legg ved bilde eller måleverdi når det gir mening. Unngå å konkludere med årsaken før den er undersøkt.",
        ],
      },
      {
        heading: "Prioriter etter konsekvens – ikke irritasjon",
        paragraphs: [
          "Høy synlighet betyr ikke alltid høy risiko. Vurder konsekvens for mennesker, drift, økonomi og bygningsmasse, sammen med sannsynligheten for at problemet utvikler seg.",
        ],
        bullets: [
          "Må området eller utstyret sikres med en gang?",
          "Kan avviket gi følgeskade eller driftsstans?",
          "Påvirker det flere brukere eller tekniske systemer?",
          "Kan tiltaket samordnes med planlagt vedlikehold?",
        ],
      },
      {
        heading: "Definer neste handling",
        paragraphs: [
          "«Følges opp» er ikke en handling. Beskriv om saken skal undersøkes, prises, utbedres eller overvåkes. Sett ansvarlig og frist som står i forhold til prioriteten.",
          "Ved komplekse feil kan første tiltak være å hente inn måledata eller faglig vurdering, ikke å skifte en komponent på mistanke.",
        ],
      },
      {
        heading: "Kontroller effekt før avviket lukkes",
        paragraphs: [
          "At arbeidet er utført betyr ikke automatisk at avviket er løst. Kontroller funksjon, dokumenter resultatet og oppdater eventuelle rutiner eller innstillinger som skal forhindre gjentakelse.",
        ],
        callout:
          "Et avvik er lukket når ønsket tilstand er gjenopprettet og resultatet er kontrollert – ikke bare når bestillingen er ferdigmeldt.",
      },
    ],
    summary: [
      "Beskriv observasjonen presist før du vurderer årsak.",
      "Prioriter etter konsekvens, sannsynlighet og hastegrad.",
      "Gi saken en konkret neste handling, ansvarlig og frist.",
      "Kontroller effekten før avviket markeres som lukket.",
    ],
    serviceHref: "/eiendomsdrift",
    serviceLabel: "Se hvordan vi følger opp drift og avvik",
  },
  {
    slug: "teknisk-tilsyn-enkel-modell",
    title: "Teknisk tilsyn: enkel modell for faste runder",
    shortTitle: "Enkel modell for teknisk tilsyn",
    description:
      "Slik organiserer du tekniske tilsynsrunder som fanger endringer, gir prioriterte tiltak og bygger historikk for bygget.",
    date: "2026-02-03",
    displayDate: "3. februar 2026",
    tag: "Teknisk tilsyn",
    readTime: "5 min lesetid",
    intro: [
      "Teknisk tilsyn skal gjøre endringer synlige før de utvikler seg til driftsstans, følgeskader eller vedvarende inneklimaproblemer.",
      "Verdien ligger ikke i antall kontrollpunkter, men i en fast struktur for observasjon, vurdering og oppfølging.",
    ],
    sections: [
      {
        heading: "Del tilsynet i tre nivåer",
        bullets: [
          "Hyppig driftsrunde: synlige endringer, alarmer, lekkasjer, temperatur og orden.",
          "Periodisk funksjonskontroll: ytelse, innstillinger og samspill mellom anlegg.",
          "Fagkontroll: lovpålagte eller spesialiserte kontroller utført av riktig kompetanse.",
        ],
        paragraphs: [
          "Når nivåene skilles tydelig, unngår du både dobbeltarbeid og at viktige fagkontroller forsvinner i den ordinære runden.",
        ],
      },
      {
        heading: "Se etter endring, ikke bare feil",
        paragraphs: [
          "Avvik viser seg ofte som en gradvis utvikling: mer støy, hyppigere alarm, endret trykk, fuktspor eller temperatur som driver. Sammenlign med tidligere observasjoner og måledata for å oppdage mønsteret.",
        ],
      },
      {
        heading: "Koble tekniske funn til bruk og drift",
        paragraphs: [
          "Et anlegg kan vise normale verdier samtidig som brukerne opplever problemer. Registrer derfor relevante klager, åpningstider og endringer i arealbruk sammen med de tekniske observasjonene.",
          "Det gir et bedre grunnlag for å finne årsak og velge riktig tiltak.",
        ],
      },
      {
        heading: "La neste runde starte med forrige rapport",
        paragraphs: [
          "Gå gjennom åpne tiltak før den nye runden begynner. Kontroller det som skulle vært utbedret, og vurder om observasjoner som tidligere ble satt til overvåking har endret seg.",
        ],
        callout:
          "Teknisk tilsyn bygger verdi over tid når observasjoner, tiltak og resultat kan sammenlignes fra runde til runde.",
      },
    ],
    summary: [
      "Skill mellom driftsrunde, funksjonskontroll og fagkontroll.",
      "Registrer gradvise endringer – ikke bare tydelige feil.",
      "Se tekniske data i sammenheng med bruk og klager.",
      "Bruk forrige rapport aktivt i neste tilsynsrunde.",
    ],
    serviceHref: "/eiendomsdrift",
    serviceLabel: "Les om våre tjenester innen teknisk drift",
  },
  {
    slug: "uteomrader-vinterberedskap",
    title: "Uteområder og vinterberedskap: det som ofte glemmes",
    shortTitle: "Uteområder og vinterberedskap",
    description:
      "Praktiske grep for risikovurdering, ansvar og oppfølging av uteområder før frost, snø og raske værskifter.",
    date: "2026-02-03",
    displayDate: "3. februar 2026",
    tag: "Uteområder",
    readTime: "5 min lesetid",
    intro: [
      "God vinterdrift begynner før det første snøfallet. Kjente risikopunkter, tydelig ansvar og avtalte responstider gir et bedre utgangspunkt når været skifter raskt.",
      "Planen bør dekke mer enn brøyting og strøing. Vannveier, belysning, adkomst, taknedløp og overgangen mellom inne- og utearealer påvirker både sikkerhet og fremkommelighet.",
    ],
    sections: [
      {
        heading: "Kartlegg områdene før sesongen",
        bullets: [
          "Ganglinjer, trapper, ramper og inngangssoner.",
          "Parkeringsarealer, varelevering og adkomst for nødetater.",
          "Sluk, renner, taknedløp og steder der smeltevann samler seg.",
          "Mørke soner, skadet dekke og kanter som blir vanskeligere å se i snø.",
        ],
        paragraphs: [
          "Dokumenter risikopunktene på et enkelt kart eller med bilder. Da blir det tydelig hvor innsatsen skal prioriteres og hva leverandører må kjenne til.",
        ],
      },
      {
        heading: "Avklar ansvar og utløsende kriterier",
        paragraphs: [
          "Planen bør beskrive hvem som følger værmeldingen, hvem som bestiller eller starter tiltak, og hvordan utført arbeid dokumenteres. Avklar også hva som skjer utenfor ordinær arbeidstid.",
          "Konkrete kriterier for inspeksjon og tiltak reduserer rommet for misforståelser når forholdene endrer seg raskt.",
        ],
      },
      {
        heading: "Følg overgangene mellom værtypene",
        paragraphs: [
          "Mildvær etterfulgt av frost, vind som flytter snø og vann som fryser på nytt kan endre risikobildet etter at området er håndtert. Kontroll etter værskifte er derfor like viktig som det første tiltaket.",
        ],
      },
      {
        heading: "Evaluer hendelser mens de er ferske",
        paragraphs: [
          "Registrer klager, nestenulykker, forsinkelser og steder som krevde ekstra innsats. Bruk erfaringene til å oppdatere kart, materiellbehov og ansvarsdeling før neste værsituasjon.",
        ],
        callout:
          "Vinterberedskap er en løpende driftsprosess: planlegg, utfør, kontroller og forbedre.",
      },
    ],
    summary: [
      "Kartlegg risikopunkter og kritiske adkomster før sesongen.",
      "Avklar ansvar, responstid og dokumentasjon.",
      "Kontroller uteområdene på nytt når været skifter.",
      "Bruk hendelser og observasjoner til å forbedre planen.",
    ],
    serviceHref: "/eiendomsdrift",
    serviceLabel: "Se hvordan vi jobber med uteområder og drift",
  },
];

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}

export function formatInsightDate(date: string) {
  return new Intl.DateTimeFormat("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
