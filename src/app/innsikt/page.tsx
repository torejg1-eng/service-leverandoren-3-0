import type { Metadata } from "next";
import Link from "next/link";
import { insightArticles } from "./articles";

export const metadata: Metadata = {
  title: "Innsikt om eiendomsdrift og energioptimalisering",
  description:
    "Praktiske fagartikler om eiendomsdrift, energioptimalisering, teknisk tilsyn, avvik og uteområder – skrevet for eiere og driftsteam.",
  alternates: { canonical: "/innsikt" },
  openGraph: {
    type: "website",
    url: "/innsikt",
    title: "Innsikt om eiendomsdrift og energioptimalisering",
    description:
      "Konkrete fagartikler for bedre beslutninger om drift, energi og tekniske bygg.",
    images: [
      {
        url: "/rustfritt.webp",
        width: 1536,
        height: 1024,
        alt: "Moderne næringsbygg som illustrerer teknisk eiendomsdrift",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innsikt om eiendomsdrift og energioptimalisering",
    description: "Praktisk kunnskap for eiere og driftsteam.",
    images: ["/rustfritt.webp"],
  },
};

export default function InnsiktPage() {
  const [featuredArticle, ...articles] = insightArticles;

  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <header className="dark-grid border-b border-white/10 text-white">
        <div className="site-shell pb-16 pt-[calc(var(--header-height)+3.5rem)] md:pb-24 md:pt-[calc(var(--header-height)+5.5rem)]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
            <div>
              <p className="eyebrow eyebrow-on-dark">Innsikt</p>
              <h1 className="mt-7 max-w-[14ch] text-[clamp(3rem,7vw,6rem)] font-[850] leading-[0.94] tracking-[-0.06em] text-balance">
                Kunnskap som gjør bygg enklere å styre.
              </h1>
            </div>

            <div className="border-l border-white/20 pl-6 text-[1.05rem] leading-7 text-white/70">
              <p>
                Praktiske fagnotater om drift, energi og tekniske bygg – uten
                unødvendig fagspråk eller løfter uten målegrunnlag.
              </p>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-[var(--green-bright)]">
                For eiere · styrer · driftsteam
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="paper-grid section-space">
        <div className="site-shell">
          <div className="mb-10 flex flex-col gap-5 border-b border-[var(--line)] pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Siste fagnotater</p>
              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.04em] md:text-5xl">
                Fra observasjon til beslutning
              </h2>
            </div>
            <p className="max-w-md text-[var(--ink-soft)]">
              Metoder og vurderinger du kan bruke i den daglige forvaltningen av
              næringsbygg og felles eiendom.
            </p>
          </div>

          <Link
            href={`/innsikt/${featuredArticle.slug}`}
            className="group grid overflow-hidden border border-[var(--line)] bg-white transition-colors hover:border-[var(--green)] lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div className="flex min-h-64 flex-col justify-between bg-[var(--green)] p-7 text-white md:p-10">
              <div className="flex items-center justify-between gap-4 font-mono text-[0.7rem] font-bold uppercase tracking-[0.14em]">
                <span>{featuredArticle.tag}</span>
                <span className="text-white/65">Nyeste</span>
              </div>
              <div className="mt-16">
                <p className="text-sm text-white/70">
                  <time dateTime={featuredArticle.date}>{featuredArticle.displayDate}</time>
                  <span aria-hidden="true"> · </span>
                  {featuredArticle.readTime}
                </p>
                <span className="mt-5 inline-flex items-center gap-3 border-b border-white pb-1 font-bold transition-[gap] group-hover:gap-5">
                  Les fagnotatet <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-7 md:p-12 lg:p-16">
              <p className="label-number">01 / Fremhevet</p>
              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.04] tracking-[-0.045em] text-balance md:text-5xl">
                {featuredArticle.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-soft)]">
                {featuredArticle.description}
              </p>
            </div>
          </Link>

          <div className="mt-6 grid border-l border-t border-[var(--line)] md:grid-cols-2">
            {articles.map((article, index) => (
              <Link
                key={article.slug}
                href={`/innsikt/${article.slug}`}
                className="group flex min-h-[25rem] flex-col border-b border-r border-[var(--line)] bg-[var(--paper)] p-7 transition-colors hover:bg-white md:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <p className="label-number">
                    {String(index + 2).padStart(2, "0")} / {article.tag}
                  </p>
                  <p className="shrink-0 text-sm text-[var(--ink-soft)]">
                    <time dateTime={article.date}>{article.displayDate}</time>
                  </p>
                </div>
                <h2 className="mt-12 max-w-[18ch] text-3xl font-extrabold leading-[1.08] tracking-[-0.04em] text-balance">
                  {article.title}
                </h2>
                <p className="mt-5 max-w-xl leading-7 text-[var(--ink-soft)]">
                  {article.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-3 pt-10 font-bold text-[var(--green)] transition-[gap] group-hover:gap-5">
                  Les artikkelen <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-white py-16 md:py-20">
        <div className="site-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="eyebrow">Har du et konkret bygg?</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-[-0.045em] md:text-5xl">
              Få observasjoner gjort om til en tydelig tiltaksplan.
            </h2>
          </div>
          <Link href="/kontakt" className="button-primary md:min-w-48">
            Be om en prat <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
