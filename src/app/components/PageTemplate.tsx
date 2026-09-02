import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

type ServiceItem = { title: string; desc: string; href?: string };

interface PageTemplateProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  bgColor?: string;
  bgImage?: string;
  services?: ServiceItem[];
}

export default function PageTemplate({
  title,
  subtitle,
  buttonText,
  buttonHref = "/kontakt",
  bgImage,
  services = [],
}: PageTemplateProps) {
  const external = buttonHref.startsWith("http");

  return (
    <main className="bg-[#f3f4ef] pt-[var(--header-height)]">
      <section className="dark-grid border-b border-white/10 text-white">
        <div className={`site-shell grid min-h-[32rem] items-center gap-10 py-14 ${bgImage ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow eyebrow-on-dark">Service Leverandøren</p>
            <h1 className="mt-7 text-balance text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl">{subtitle}</p>
            <Link
              href={buttonHref}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="button-primary mt-8"
            >
              {buttonText}<ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          {bgImage && (
            <div className="relative hidden aspect-[4/3] overflow-hidden border border-white/15 bg-[#dfe4dc] lg:block">
              <Image src={bgImage} alt="" fill priority sizes="42vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07100d]/55 via-transparent to-transparent" />
              <span className="absolute bottom-5 right-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.15em] text-white/65">SL / Østfold</span>
            </div>
          )}
        </div>
      </section>

      {services.length > 0 && (
        <section className="paper-grid section-space border-b border-[#101a16]/12">
          <div className="site-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Kompetanse og leveranse</p>
              <h2 className="section-title mt-6">Dette kan vi hjelpe deg med.</h2>
            </div>
            <div className="mt-12 grid border-y border-[#101a16]/15 md:grid-cols-3 md:divide-x md:divide-[#101a16]/15">
              {services.map((service, index) => {
                const content = (
                  <>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-xs font-bold text-[#0d7654]">0{index + 1}</span>
                      <Check size={18} aria-hidden="true" className="text-[#0d7654]" />
                    </div>
                    <h3 className="mt-8 text-2xl font-extrabold tracking-[-0.035em]">{service.title}</h3>
                    <p className="mt-4 leading-7 text-[#59675f]">{service.desc}</p>
                    {service.href && <span className="mt-7 inline-flex items-center gap-2 font-bold text-[#0d7654]">Les mer <ArrowRight size={15} aria-hidden="true" /></span>}
                  </>
                );

                return service.href ? (
                  <Link key={service.title} href={service.href} className="group px-1 py-9 transition-colors hover:bg-white/55 md:px-7 md:first:pl-0 md:last:pr-0">{content}</Link>
                ) : (
                  <article key={service.title} className="px-1 py-9 md:px-7 md:first:pl-0 md:last:pr-0">{content}</article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
