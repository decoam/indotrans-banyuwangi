import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data";
import TentangKami from "@/components/TentangKami";

export const metadata: Metadata = {
  title: "About Us – Local Tour & Travel Banyuwangi",
  description:
    "INDOTRANS is a local Banyuwangi tour & travel company with a well-maintained fleet, experienced drivers & guides, transparent pricing, and 24-hour pickup service.",
  keywords: [
    "banyuwangi tour travel",
    "banyuwangi travel agent",
    "indotrans banyuwangi",
    "banyuwangi tour service",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/tentang-kami`,
    languages: {
      id: `${SITE_URL}/tentang-kami`,
      en: `${SITE_URL}/en/tentang-kami`,
      "x-default": `${SITE_URL}/tentang-kami`,
    },
  },
  openGraph: {
    url: `${SITE_URL}/en/tentang-kami`,
    locale: "en_US",
    title: "About INDOTRANS – Local Tour & Travel Banyuwangi",
    description:
      "Local Banyuwangi tour & travel with a well-maintained fleet, experienced guides, and transparent pricing.",
  },
};

export default function TentangKamiPageEn() {
  return (
    <main className="pt-16">
      <TentangKami locale="en" />
    </main>
  );
}
