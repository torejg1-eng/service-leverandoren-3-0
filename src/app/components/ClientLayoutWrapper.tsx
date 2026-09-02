"use client";

import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <a href="#site-content" className="skip-link">Hopp til hovedinnhold</a>
      <Header />
      <div id="site-content" style={{ minHeight: "calc(100dvh - var(--header-height) - 56px)" }}>
        {children}
      </div>
      <Footer />
    </>
  );
}
