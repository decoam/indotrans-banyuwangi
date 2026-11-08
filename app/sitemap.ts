import { MetadataRoute } from "next";
import { SITE_URL, paketWisata, openTrip } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/sewa-armada",
    "/tentang-kami",
    ...paketWisata.map((p) => `/paket-wisata/${p.slug}`),
    ...openTrip.map((p) => `/open-trip/${p.slug}`),
  ];

  const now = new Date();

  return paths.flatMap((path) => {
    const idUrl = `${SITE_URL}${path}`;
    const enUrl = `${SITE_URL}/en${path}`;
    const languages = { id: idUrl, en: enUrl, "x-default": idUrl };
    const priority = path === "" ? 1.0 : path.includes("paket") || path.includes("open-trip") ? 0.9 : 0.8;

    return [
      {
        url: idUrl,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority,
        alternates: { languages },
      },
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: priority - 0.1,
        alternates: { languages },
      },
    ];
  });
}
