import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.xn--service-leverandren-b8b.no/sitemap.xml",
    host: "https://www.xn--service-leverandren-b8b.no",
  };
}
