// === START POLISHED: src/app/components/Header.tsx ===
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Geist } from "next/font/google";

const geist = Geist({ subsets: ["latin"], weight: ["400", "600", "700"] });

// ✅ Ny prioritet: Optimalisering → Eiendomsdrift → Prosjekter
const links = [
  { href: "/optimalisering", text: "Energioptimalisering" },
  { href: "/eiendomsdrift", text: "Eiendomsdrift" },
  { href: "/prosjekt-ombygging", text: "Prosjekt" },
  { href: "/innsikt", text: "Innsikt" },
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

function isActivePath(pathname: string, href: string) {
  // Hjem skal bare være aktiv når du faktisk er på /
  if (href === "/") return pathname === "/";
  // Andre skal være aktive på både /route og /route/under
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--header-height",
      headerStyle.height
    );
  }, []);

  // Lukk mobilmeny automatisk ved route-change (nice på mobil)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const activeMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const l of links) map[l.href] = isActivePath(pathname, l.href);
    return map;
  }, [pathname]);

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
<Link
  href="/"
  aria-label="Gå til forsiden"
  className="group"
>
  <div
    className="font-extrabold tracking-tight select-none leading-none text-center md:text-left cursor-pointer"
    style={{
      transform: `scale(${headerStyle.logoScale}) translateY(${headerStyle.logoOffset})`,
      transformOrigin: "left center",
      maxWidth: "90vw",
      lineHeight: "1.1",
    }}
  >
    <span className="block md:inline text-emerald-400 group-hover:text-emerald-300 transition">
      Service
    </span>
    <span className="block md:inline text-white md:ml-2 group-hover:text-neutral-200 transition">
      Leverandøren
    </span>
    <span className="text-neutral-400 text-[0.8em] ml-1 group-hover:text-neutral-300 transition">
      AS
    </span>
  </div>
</Link>

      {/* Desktop-meny */}
      <nav className="hidden md:flex gap-8">
        {links.map((link) => {
          const active = !!activeMap[link.href];
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: active ? headerStyle.linkHover : headerStyle.linkColor,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = headerStyle.linkHover)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = active
                  ? headerStyle.linkHover
                  : headerStyle.linkColor)
              }
            >
              {link.text}
            </Link>
          );
        })}
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
        {links.map((link) => {
          const active = !!activeMap[link.href];
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${
                active ? "text-emerald-400 font-semibold" : "text-neutral-200"
              } hover:text-emerald-300 text-lg`}
            >
              {link.text}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
// === END POLISHED: src/app/components/Header.tsx ===
