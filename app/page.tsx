import Hero from "@/components/Hero";
import Keunggulan from "@/components/Keunggulan";
import TentangKami from "@/components/TentangKami";
import PaketWisata from "@/components/PaketWisata";
import SewaArmada from "@/components/SewaArmada";
import Kalkulator from "@/components/Kalkulator";
import Galeri from "@/components/Galeri";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Hero />
      <Keunggulan />
      <TentangKami />
      <PaketWisata />
      <SewaArmada />
      <Kalkulator />
      <Galeri />
      <FAQ />
      <CTABanner />
    </main>
  );
}
