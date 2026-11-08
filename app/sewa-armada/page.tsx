import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data";
import SewaArmada from "@/components/SewaArmada";

export const metadata: Metadata = {
  title: "Sewa Mobil & Motor Banyuwangi – Armada Terawat & Lepas Kunci",
  description:
    "Sewa mobil dan motor terpercaya di Banyuwangi. Innova, Avanza, Xenia, Brio, Agya, HiAce, Alphard, NMax, PCX, Vario, Scoopy, BeAT. Lepas kunci atau dengan driver, antar jemput 24 jam.",
  keywords: [
    "sewa mobil banyuwangi",
    "rental motor banyuwangi",
    "sewa avanza banyuwangi",
    "sewa innova banyuwangi",
    "rental mobil lepas kunci banyuwangi",
    "sewa hiace banyuwangi",
  ],
  alternates: {
    canonical: `${SITE_URL}/sewa-armada`,
    languages: {
      id: `${SITE_URL}/sewa-armada`,
      en: `${SITE_URL}/en/sewa-armada`,
      "x-default": `${SITE_URL}/sewa-armada`,
    },
  },
  openGraph: {
    url: `${SITE_URL}/sewa-armada`,
    title: "Sewa Mobil & Motor Banyuwangi – INDOTRANS",
    description:
      "Armada mobil & motor terawat di Banyuwangi. Lepas kunci atau dengan driver, antar jemput 24 jam.",
  },
};

export default function SewaArmadaPage() {
  return (
    <main className="pt-16">
      <SewaArmada />
    </main>
  );
}
