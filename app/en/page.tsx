import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Keunggulan from "@/components/Keunggulan";
import TentangKami from "@/components/TentangKami";
import PaketWisata from "@/components/PaketWisata";
import SewaArmada from "@/components/SewaArmada";
import Kalkulator from "@/components/Kalkulator";
import Galeri from "@/components/Galeri";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import { SITE_URL } from "@/lib/data";

export const metadata: Metadata = {
  title: "Banyuwangi Tour & Travel – Ijen Blue Fire, Baluran & Vehicle Rental",
  description:
    "Trusted local tour & travel and car/motorbike rental in Banyuwangi. Ijen Blue Fire, Baluran safari, Menjangan snorkeling, De Djawatan and Pulau Merah packages. 24-hour pickup.",
  keywords: [
    "banyuwangi tour package",
    "ijen blue fire tour",
    "baluran safari tour",
    "menjangan snorkeling",
    "banyuwangi car rental",
    "banyuwangi travel",
    "open trip banyuwangi",
  ],
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      id: SITE_URL,
      en: `${SITE_URL}/en`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/en`,
    siteName: "INDOTRANS Banyuwangi",
    title: "Banyuwangi Tour & Travel – Ijen, Baluran & Rental",
    description:
      "Ijen Blue Fire, Baluran safari, Menjangan snorkeling and Banyuwangi vehicle rental. Trusted local operator.",
  },
};

export default function HomeEn() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Hero locale="en" />
      <Keunggulan locale="en" />
      <TentangKami locale="en" />
      <PaketWisata locale="en" />
      <SewaArmada locale="en" />
      <Kalkulator locale="en" />
      <Galeri locale="en" />
      <FAQ locale="en" />
      <CTABanner locale="en" />
    </main>
  );
}
