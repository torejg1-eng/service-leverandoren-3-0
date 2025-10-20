// === START FIXED: src/app/components/PageTemplate.tsx ===
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

type ServiceItem = {
  title: string;
  desc: string;
  href?: string; // ✅ gjør kortet klikkbart når satt
};

interface PageTemplateProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string; // ✅ lenke for hovedknappen
  bgColor?: string; // ✅ fallback-bakgrunn når bgImage mangler
  bgImage?: string; // ✅ valgfritt heltebilde (optimalisert via next/image)
  services?: ServiceItem[];
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
  buttonHref,
  bgColor = "bg-gray-700",
  bgImage,
  services = [],
}) => {
  const isDark =
    bgColor.includes("gray") ||
    bgColor.includes("slate") ||
    bgColor.includes("neutral") ||
    bgColor.includes("black") ||
    bgColor.includes("zinc") ||
    bgColor.includes("stone");

  const titleColor = isDark ? "text-gray-100 drop-shadow-md" : "text-gray-900";
  const subtitleColor = isDark ? "text-gray-200 drop-shadow-sm" : "text-gray-700";

  const ButtonEl = () => {
    if (buttonHref) {
      return (
        <Link
          href={buttonHref}
          className="inline-block mt-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-5 rounded shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          {buttonText}
        </Link>
      );
    }
    return (
      <button
        type="button"
        onClick={onButtonClick}
        className="mt-6 bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-5 rounded shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        {buttonText}
      </button>
    );
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className={`relative py-20 text-center overflow-hidden ${bgColor}`}>
        {/* Bakgrunnsbilde (valgfritt) */}
        {bgImage && (
          <>
            <Image
              src={bgImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          </>
        )}

        {/* Innhold */}
        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <h1 className={`text-4xl md:text-5xl font-bold ${titleColor}`}>{title}</h1>
          <p className={`mt-3 text-lg md:text-xl ${subtitleColor}`}>{subtitle}</p>
          <ButtonEl />
        </div>

        {/* Dekorlinje nederst */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-amber-400" />
      </section>

      {/* SERVICES */}
      {services.length > 0 && (
        <section className="bg-gray-50 py-12 border-t-4 border-amber-400">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">
            Våre tjenester
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {services.map((s, i) => {
              const CardInner = (
                <>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </>
              );

              // 🔗 Kort med lenke
              if (s.href) {
                return (
                  <Link
                    key={i}
                    href={s.href}
                    className="block bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition focus:outline-none focus:ring-2 focus:ring-amber-400"
                  >
                    {CardInner}
                  </Link>
                );
              }

              // 🧩 Vanlig kort uten lenke
              return (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition"
                >
                  {CardInner}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default PageTemplate;
// === END FIXED: src/app/components/PageTemplate.tsx ===
