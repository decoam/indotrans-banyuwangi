import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Keunggulan from "@/components/Keunggulan";
import TentangKami from "@/components/TentangKami";
import PaketWisata from "@/components/PaketWisata";
import SewaArmada from "@/components/SewaArmada";
import Kalkulator from "@/components/Kalkulator";
import Galeri from "@/components/Galeri";
import Testimoni from "@/components/Testimoni";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090d] text-white">
      <Navbar />
      <Hero />
      <Keunggulan />
      <TentangKami />
      <PaketWisata />
      <SewaArmada />
      <Kalkulator />
      <Galeri />
      <Testimoni />
      <FAQ />
      <CTABanner />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
