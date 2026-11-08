import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data";
import SewaArmada from "@/components/SewaArmada";

export const metadata: Metadata = {
  title: "Car & Motorbike Rental Banyuwangi – Well-Maintained Fleet",
  description:
    "Trusted car and motorbike rental in Banyuwangi. Innova, Avanza, Xenia, Brio, Agya, HiAce, Alphard, NMax, PCX, Vario, Scoopy, BeAT. Self drive or with driver, 24-hour pickup.",
  keywords: [
    "banyuwangi car rental",
    "banyuwangi motorbike rental",
    "rent car banyuwangi",
    "banyuwangi self drive rental",
    "banyuwangi hiace rental",
    "alphard rental banyuwangi",
  ],
  alternates: {
    canonical: `${SITE_URL}/en/sewa-armada`,
    languages: {
      id: `${SITE_URL}/sewa-armada`,
      en: `${SITE_URL}/en/sewa-armada`,
      "x-default": `${SITE_URL}/sewa-armada`,
    },
  },
  openGraph: {
    url: `${SITE_URL}/en/sewa-armada`,
    locale: "en_US",
    title: "Car & Motorbike Rental Banyuwangi – INDOTRANS",
    description:
      "Well-maintained car & motorbike fleet in Banyuwangi. Self drive or with driver, 24-hour pickup.",
  },
};

export default function SewaArmadaPageEn() {
  return (
    <main className="pt-16">
      <SewaArmada locale="en" />
    </main>
  );
}
