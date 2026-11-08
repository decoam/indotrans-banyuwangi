import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data";
import TentangKami from "@/components/TentangKami";

export const metadata: Metadata = {
  title: "Tentang Kami – Tour & Travel Lokal Banyuwangi",
  description:
    "INDOTRANS adalah tour & travel lokal Banyuwangi dengan armada terawat, driver & guide berpengalaman, harga transparan, dan layanan antar jemput 24 jam.",
  keywords: [
    "tour travel banyuwangi",
    "travel agent banyuwangi",
    "indotrans banyuwangi",
    "jasa tour banyuwangi",
  ],
  alternates: {
    canonical: `${SITE_URL}/tentang-kami`,
    languages: {
      id: `${SITE_URL}/tentang-kami`,
      en: `${SITE_URL}/en/tentang-kami`,
      "x-default": `${SITE_URL}/tentang-kami`,
    },
  },
  openGraph: {
    url: `${SITE_URL}/tentang-kami`,
    title: "Tentang INDOTRANS – Tour & Travel Lokal Banyuwangi",
    description:
      "Tour & travel lokal Banyuwangi dengan armada terawat, guide berpengalaman, dan harga transparan.",
  },
};

export default function TentangKamiPage() {
  return (
    <main className="pt-16">
      <TentangKami />
    </main>
  );
}
