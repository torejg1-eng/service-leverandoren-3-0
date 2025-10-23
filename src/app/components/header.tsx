// === START POLISHED: src/app/components/Header.tsx ===
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Geist } from "next/font/google";
const geist = Geist({ subsets: ["latin"], weight: ["400", "600", "700"] });

const links = [
  { href: "/", text: "Hjem" },
  { href: "/ventilasjon", text: "Ventilasjon" },
  { href: "/tomrer", text: "Tømrer" },
  { href: "/prosjekter", text: "Prosjekter" },
  { href: "/butikk", text: "Nettbutikk" },
  { href: "/kontakt", text: "Kontakt" },
];

// 🎨 Justerbare verdier
const headerStyle = {
  bgColor: "rgba(15, 15, 15, 0.9)",
  textColor: "#ffffff",
  linkColor: "#e5e5e5",
  linkHover: "#00ffbb",
  borderColor: "rgba(255,255,255,0.15)",
  height: "90px",
  fontSize: "1rem",
  logoScale: 2.25,
  logoOffset: "-1px",
};

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--header-height", headerStyle.height);
  }, []);

  return (
    <header
      className={`${geist.className} fixed top-0 left-0 w-full z-[9999] flex items-center justify-between px-4 md:px-12 shadow-md backdrop-blur-md transition-all duration-300`}
      style={{
        backgroundColor: headerStyle.bgColor,
        color: headerStyle.textColor,
        borderBottom: `1px solid ${headerStyle.borderColor}`,
        height: headerStyle.height,
        fontSize: headerStyle.fontSize,
      }}
    >
{/* Logo */}
<div
  className="font-extrabold tracking-tight select-none leading-none text-center md:text-left"
  style={{
    transform: `scale(${headerStyle.logoScale}) translateY(${headerStyle.logoOffset})`,
    transformOrigin: "left center",
    maxWidth: "90vw", // hindrer overflow på mobil
    lineHeight: "1.1",
  }}
>
  <span className="block md:inline text-emerald-400">Service</span>
  <span className="block md:inline text-white md:ml-2">Leverandøren</span>
  <span className="text-neutral-400 text-[0.8em] ml-1">AS</span>
</div>

      {/* Desktop-meny */}
      <nav className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color:
                pathname === link.href
                  ? headerStyle.linkHover
                  : headerStyle.linkColor,
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = headerStyle.linkHover)}
            onMouseLeave={(e) =>
              (e.currentTarget.style.color =
                pathname === link.href
                  ? headerStyle.linkHover
                  : headerStyle.linkColor)
            }
          >
            {link.text}
          </Link>
        ))}
      </nav>

      {/* Mobilmeny knapp */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-3 text-neutral-200 hover:text-emerald-300 transition relative z-[10000]"
        aria-label="Åpne meny"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobilmeny dropdown m/fade */}
      <nav
        className={`absolute top-full left-0 w-full bg-neutral-900/95 border-t border-neutral-700 px-6 py-4 flex flex-col gap-3 md:hidden z-[9998] shadow-lg transform transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`${
              pathname === link.href
                ? "text-emerald-400 font-semibold"
                : "text-neutral-200"
            } hover:text-emerald-300 text-lg`}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </header>
  );
}
// === END POLISHED: src/app/components/Header.tsx ===
