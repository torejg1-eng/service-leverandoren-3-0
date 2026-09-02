import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  INSIGHTS_URL,
  formatInsightDate,
  getInsightArticle,
  insightArticles,
} from "../articles";

type InsightArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return insightArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: InsightArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) {
    return { title: "Fagartikkel ikke funnet" };
  }

  const canonicalPath = `/innsikt/${article.slug}`;

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "article",
      url: canonicalPath,
      title: article.title,
      description: article.description,
      publishedTime: `${article.date}T08:00:00+01:00`,
      authors: ["Service Leverandøren AS"],
      section: article.tag,
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
      title: article.title,
      description: article.description,
      images: ["/rustfritt.webp"],
    },
  };
}

export default async function InsightArticlePage({ params }: InsightArticlePageProps) {
  const { slug } = await params;
  const article = getInsightArticle(slug);

  if (!article) notFound();

  const canonicalUrl = `${INSIGHTS_URL}/${article.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#artikkel`,
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        inLanguage: "nb-NO",
        mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
        author: {
          "@type": "Organization",
          "@id": "https://www.service-leverandøren.no/#virksomhet",
          name: "Service Leverandøren AS",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.service-leverandøren.no/#virksomhet",
          name: "Service Leverandøren AS",
        },
        about: article.tag,
        isPartOf: { "@id": `${INSIGHTS_URL}#innsikt` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#brodsmuler`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Forside",
            item: "https://www.service-leverandøren.no/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Innsikt",
            item: INSIGHTS_URL,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.shortTitle,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[var(--paper)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <header className="dark-grid border-b border-white/10 text-white">
        <div className="site-shell pb-16 pt-[calc(var(--header-height)+2.5rem)] md:pb-24 md:pt-[calc(var(--header-height)+4rem)]">
          <nav aria-label="Brødsmulesti" className="text-sm text-white/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="transition-colors hover:text-white">Forside</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/innsikt" className="transition-colors hover:text-white">Innsikt</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80" aria-current="page">{article.shortTitle}</li>
            </ol>
          </nav>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
            <div>
              <p className="eyebrow eyebrow-on-dark">{article.tag}</p>
              <h1 className="mt-7 max-w-[18ch] text-[clamp(2.9rem,6.5vw,5.8rem)] font-[850] leading-[0.96] tracking-[-0.06em] text-balance">
                {article.title}
              </h1>
            </div>
            <div className="border-l border-white/20 pl-6">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[var(--green-bright)]">Fagnotat</p>
              <p className="mt-4 text-sm leading-6 text-white/65">
                Publisert <time dateTime={article.date}>{formatInsightDate(article.date)}</time>
                <br />{article.readTime}
              </p>
            </div>
          </div>
        </div>
      </header>

      <article className="paper-grid section-space">
        <div className="site-shell grid gap-12 lg:grid-cols-[15rem_minmax(0,45rem)] lg:justify-center lg:gap-20">
          <aside>
            <div className="border-t-2 border-[var(--green)] pt-5 lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
              <p className="label-number">Kort oppsummert</p>
              <ul className="mt-6 space-y-5">
                {article.summary.map((item) => (
                  <li key={item} className="grid grid-cols-[1rem_1fr] gap-3 text-sm leading-6 text-[var(--ink-soft)]">
                    <span className="mt-[0.58rem] h-1.5 w-1.5 bg-[var(--green)]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div>
            <div className="border-b border-[var(--line)] pb-10">
              {article.intro.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={index === 0
                    ? "text-xl font-semibold leading-8 tracking-[-0.015em] text-[var(--ink)] md:text-2xl md:leading-9"
                    : "mt-5 text-lg leading-8 text-[var(--ink-soft)]"}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="prose-premium">
              {article.sections.map((section, sectionIndex) => (
                <section key={section.heading} className="border-b border-[var(--line)] py-10 md:py-14">
                  <div className="grid gap-4 sm:grid-cols-[2.25rem_1fr]">
                    <p className="label-number pt-1" aria-hidden="true">{String(sectionIndex + 1).padStart(2, "0")}</p>
                    <div>
                      <h2 className="text-2xl font-extrabold md:text-3xl">{section.heading}</h2>
                      {section.paragraphs?.map((paragraph) => (
                        <p key={paragraph} className="mt-5">{paragraph}</p>
                      ))}
                      {section.bullets && (
                        <ul className="mt-6 space-y-3">
                          {section.bullets.map((item) => (
                            <li key={item} className="grid grid-cols-[1.1rem_1fr] gap-3">
                              <span className="mt-[0.68rem] h-px w-3 bg-[var(--green)]" aria-hidden="true" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.callout && (
                        <blockquote className="mt-8 border-l-4 border-[var(--green)] bg-white px-6 py-5 text-lg font-semibold leading-8 text-[var(--ink)]">
                          {section.callout}
                        </blockquote>
                      )}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-12 border border-[var(--line)] bg-white p-7 md:p-10" aria-labelledby="article-next-step">
              <p className="eyebrow">Neste steg</p>
              <h2 id="article-next-step" className="mt-5 text-3xl font-extrabold tracking-[-0.04em]">Trenger du et konkret beslutningsgrunnlag?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-[var(--ink-soft)]">
                Vi kan gå gjennom bygget, samle observasjonene og prioritere tiltakene i en ryddig plan.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="button-primary">Ta kontakt <span aria-hidden="true">→</span></Link>
                <Link href={article.serviceHref} className="button-secondary">{article.serviceLabel}</Link>
              </div>
            </section>

            <Link href="/innsikt" className="editorial-link mt-10"><span aria-hidden="true">←</span> Alle fagartikler</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
