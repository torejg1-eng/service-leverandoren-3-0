import Link from "next/link";
import type { ReactNode } from "react";

type ServiceStat = {
  label: string;
  value: string;
};

type ServiceStep = {
  title: string;
  text: string;
};

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumbLabel: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  stats: ServiceStat[];
};

export function PrecisionServiceHero({
  eyebrow,
  title,
  intro,
  breadcrumbLabel,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  stats,
}: ServiceHeroProps) {
  return (
    <section className="dark-grid relative overflow-hidden text-white">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 hidden w-[34%] border-l border-white/10 bg-white/[0.02] lg:block"
      />

      <div className="site-shell relative pb-16 pt-[calc(var(--header-height)+2.75rem)] md:pb-20 md:pt-[calc(var(--header-height)+4rem)]">
        <nav aria-label="Brødsmuler" className="mb-10 text-sm text-white/55">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link className="transition-colors hover:text-white" href="/">
                Forside
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white/85">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.38fr)] lg:gap-20">
          <div>
            <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
            <h1 className="mt-6 max-w-[15ch] text-[clamp(2.7rem,6vw,5.7rem)] font-[850] leading-[0.96] tracking-[-0.058em] text-balance">
              {title}
            </h1>
            <p className="lead-copy mt-7 text-white/72">{intro}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="button-primary" href="/kontakt">
                {primaryLabel}
                <span aria-hidden="true">→</span>
              </Link>
              <Link className="button-secondary-dark" href={secondaryHref}>
                {secondaryLabel}
              </Link>
            </div>
          </div>

          <dl className="border-y border-white/15">
            {stats.map((stat, index) => (
              <div
                className={`grid gap-1 py-5 ${index > 0 ? "border-t border-white/15" : ""}`}
                key={stat.label}
              >
                <dt className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[var(--green-bright)]">
                  {stat.label}
                </dt>
                <dd className="text-base font-semibold text-white/88">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function PrecisionSectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.65fr)] md:items-end md:gap-16">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-5">{title}</h2>
      </div>
      <div className="prose-premium">{children}</div>
    </div>
  );
}

export function PrecisionBulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-[var(--ink-soft)]">
      {items.map((item) => (
        <li className="grid grid-cols-[1rem_1fr] gap-3" key={item}>
          <span aria-hidden="true" className="mt-[0.62rem] h-px bg-[var(--green)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PrecisionProcess({
  eyebrow = "Arbeidsmetode",
  title,
  intro,
  steps,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  steps: ServiceStep[];
}) {
  return (
    <section className="dark-grid section-space text-white">
      <div className="site-shell">
        <div className="grid gap-8 lg:grid-cols-[minmax(18rem,0.62fr)_1fr] lg:gap-20">
          <div>
            <p className="eyebrow eyebrow-on-dark">{eyebrow}</p>
            <h2 className="mt-5 max-w-[13ch] text-4xl font-[820] leading-[1.02] tracking-[-0.045em] md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/66">{intro}</p>
          </div>

          <ol className="border-t border-white/15">
            {steps.map((step, index) => (
              <li
                className="grid gap-3 border-b border-white/15 py-6 sm:grid-cols-[4rem_12rem_1fr] sm:items-baseline"
                key={step.title}
              >
                <span className="font-mono text-xs font-bold tracking-[0.14em] text-[var(--green-bright)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold tracking-[-0.025em]">{step.title}</h3>
                <p className="leading-relaxed text-white/65">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function PrecisionServiceCta({
  title,
  text,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  text: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section className="paper-grid section-space border-t border-[var(--line)]">
      <div className="site-shell">
        <div className="grid gap-8 border-y border-[var(--line)] py-10 md:grid-cols-[1fr_auto] md:items-center md:py-14">
          <div>
            <p className="eyebrow">Neste steg</p>
            <h2 className="mt-5 max-w-[18ch] text-3xl font-[820] leading-[1.06] tracking-[-0.04em] md:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Link className="button-primary" href="/kontakt">
              Be om en vurdering <span aria-hidden="true">→</span>
            </Link>
            <Link className="button-secondary" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrecisionJsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
