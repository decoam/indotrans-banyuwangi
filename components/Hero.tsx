"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Compass, Car, Sparkles, Send, MessageCircle } from "lucide-react";
import { buildWaUrl, WHATSAPP_NUMBER } from "@/lib/data";

const heroSlides = [
  {
    image: "/images/destinasi/kawahijen.jpg",
    alt: "Kawah Ijen Blue Fire Banyuwangi",
    badge: "Fenomena Alam Langka Dunia",
    title: "Kawah Ijen Blue Fire",
  },
  {
    image: "/images/destinasi/baluran.jpg",
    alt: "Taman Nasional Baluran Savana Bekol",
    badge: "Africa van Java",
    title: "Savana Eksotis Baluran",
  },
  {
    image: "/images/destinasi/djawatan.jpg",
    alt: "Hutan De Djawatan Lord of the Rings",
    badge: "Lord of the Rings van Java",
    title: "Hutan Purba De Djawatan",
  },
  {
    image: "/images/destinasi/pulaumerah.jpg",
    alt: "Pantai Pulau Merah Sunset",
    badge: "Golden Hour Sunset",
    title: "Sunset Magis Pulau Merah",
  },
  {
    image: "/images/destinasi/tabuhan.jpg",
    alt: "Pulau Menjangan dan Pulau Tabuhan",
    badge: "Surga Snorkeling",
    title: "Pulau Menjangan & Tabuhan",
  },
  {
    image: "/images/destinasi/telukhijau.jpg",
    alt: "Green Bay Teluk Hijau Banyuwangi",
    badge: "Pantai Kristal Tersembunyi",
    title: "Green Bay (Teluk Hijau)",
  },
];

const stats = [
  { value: "18+", label: "Unit Armada" },
  { value: "24 Jam", label: "Layanan Antar Jemput" },
  { value: "100%", label: "Harga Transparan" },
  { value: "Guide", label: "Lokal Berpengalaman" },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<"wisata" | "rental">("wisata");

  // Slideshow auto-rotation (5 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Wisata form
  const [wisataPkg, setWisataPkg] = useState("Midnight Kawah Ijen Blue Fire");
  const [wisataDate, setWisataDate] = useState("");
  const [wisataPax, setWisataPax] = useState("3 - 5 Orang");
  const [wisataType, setWisataType] = useState("Private Trip");

  // Rental form
  const [rentalVehicle, setRentalVehicle] = useState("Toyota Innova Reborn");
  const [rentalDate, setRentalDate] = useState("");
  const [rentalDuration, setRentalDuration] = useState("1 Hari (24 Jam)");
  const [rentalOption, setRentalOption] = useState("Mobil + Driver + BBM");

  const handleWisataSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo INDOTRANS! Saya ingin konsultasi *Paket Wisata ${wisataPkg}*:\n- Rencana Tanggal: ${wisataDate || "Belum ditentukan"}\n- Jumlah Peserta: ${wisataPax}\n- Jenis Trip: ${wisataType}\nMohon info ketersediaan & harga promo. Terima kasih!`;
    window.open(buildWaUrl(msg), "_blank");
  };

  const handleRentalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo INDOTRANS! Saya ingin sewa *${rentalVehicle}*:\n- Tanggal Sewa: ${rentalDate || "Belum ditentukan"}\n- Durasi: ${rentalDuration}\n- Layanan: ${rentalOption}\nMohon info ketersediaan unit. Terima kasih!`;
    window.open(buildWaUrl(msg), "_blank");
  };

  const directWaPesanan = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo INDOTRANS! Saya ingin pesan paket wisata / rental armada di Banyuwangi sekarang. Mohon info harga promo & ketersediaannya."
  )}`;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background Slideshow (Wisata Banyuwangi: Baluran, Djawatan, Pulau Merah, Bangsring) */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover animate-ken-burns filter brightness-[0.38] contrast-[1.08]"
            />
          </div>
        ))}

        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-transparent to-[#07090d]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090d]/90 via-[#07090d]/50 to-[#07090d]/90" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        {/* Slide Indicator Dots (Bottom Right) */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2 bg-[#07090d]/70 backdrop-blur-md px-4 py-2 rounded-full border border-[#1a1f2e]">
          <span className="text-[11px] font-semibold text-gold mr-1">
            {heroSlides[currentSlide].title}
          </span>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Lihat slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? "w-6 bg-gold" : "w-2 bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Content: Center Aligned, Highlight Utama WhatsApp */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gold/15 border border-gold/40 text-gold mb-6 backdrop-blur-md shadow-gold">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
            <span>Tour &amp; Travel Lokal Banyuwangi</span>
          </div>

          {/* Headline */}
          <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            Eksplorasi Keajaiban <br />
            <span className="text-gold-gradient">Banyuwangi Sunrise of Java</span> <br />
            dengan Kenyamanan Terbaik
          </h1>

          {/* HIGHLIGHT UTAMA: Tombol Pesan Sekarang Ditengah (Track WhatsApp) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full max-w-xl">
            <a
              href={directWaPesanan}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-black text-[#07090d] bg-gold-gradient shadow-gold-lg hover:brightness-110 hover:scale-105 transition-all duration-300 ring-2 ring-gold/40 ring-offset-4 ring-offset-[#07090d] animate-pulse-gold group"
            >
              <MessageCircle className="w-6 h-6 text-[#07090d] fill-[#07090d] group-hover:rotate-12 transition-transform" />
              <span>PESAN SEKARANG VIA WHATSAPP</span>
            </a>

            <div className="flex items-center gap-3">
              <a
                href="#paket-wisata"
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-200 bg-[#131720]/80 border border-[#1a1f2e] hover:border-gold hover:text-gold transition-all"
              >
                Lihat Paket Wisata
              </a>
              <a
                href="#sewa-armada"
                className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-gray-200 bg-[#131720]/80 border border-[#1a1f2e] hover:border-gold hover:text-gold transition-all"
              >
                Sewa Armada
              </a>
            </div>
          </div>

          <div className="text-xs text-gray-400 mb-10 flex items-center justify-center gap-4 flex-wrap">
            <span>✓ Respon WhatsApp Cepat (&lt; 5 Menit)</span>
            <span>&bull;</span>
            <span>✓ Tanpa Biaya Tersembunyi</span>
            <span>&bull;</span>
            <span>✓ Siap Jemput 24 Jam</span>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-[#0f1218]/80 border border-[#1a1f2e] backdrop-blur-md mb-8 w-full max-w-3xl">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="font-outfit text-xl sm:text-2xl font-black text-gold">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Search Widget */}
          <div className="rounded-2xl bg-[#0f1218]/90 border border-[#1a1f2e] p-5 sm:p-6 backdrop-blur-md shadow-2xl w-full text-left">
            {/* Tabs */}
            <div className="flex border-b border-[#1a1f2e] pb-3 mb-4 gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("wisata")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "wisata"
                    ? "bg-gold text-[#07090d] shadow-gold font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Compass className="w-4 h-4" />
                Cari Paket Wisata
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("rental")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "rental"
                    ? "bg-gold text-[#07090d] shadow-gold font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Car className="w-4 h-4" />
                Rental Mobil / Motor
              </button>
            </div>

            {/* Wisata Form */}
            {activeTab === "wisata" && (
              <form onSubmit={handleWisataSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Destinasi / Paket
                  </label>
                  <select
                    value={wisataPkg}
                    onChange={(e) => setWisataPkg(e.target.value)}
                    className="bg-[#131720] border border-[#1a1f2e] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="Paket 1 Hari (One Day Tour)">Paket 1 Hari (One Day Tour) - Rp 850.000</option>
                    <option value="Paket 2 Hari 1 Malam (2D1N)">Paket 2D1N (Ijen, Green Bay, Djawatan) - Rp 1.500.000</option>
                    <option value="Paket 3 Hari 2 Malam (3D2N)">Paket 3D2N Best Value (All-In) - Rp 1.800.000</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Rencana Tanggal
                  </label>
                  <input
                    type="date"
                    value={wisataDate}
                    onChange={(e) => setWisataDate(e.target.value)}
                    className="bg-[#131720] border border-[#1a1f2e] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Peserta
                  </label>
                  <select
                    value={wisataPax}
                    onChange={(e) => setWisataPax(e.target.value)}
                    className="bg-[#131720] border border-[#1a1f2e] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="1 - 2 Orang">1 - 2 Orang (Couple/Solo)</option>
                    <option value="3 - 5 Orang">3 - 5 Orang (Keluarga)</option>
                    <option value="6 - 10 Orang">6 - 10 Orang (Rombongan)</option>
                    <option value="11+ Orang">11+ Orang (Grup/Bus)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Jenis Trip
                  </label>
                  <select
                    value={wisataType}
                    onChange={(e) => setWisataType(e.target.value)}
                    className="bg-[#131720] border border-[#1a1f2e] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="Private Trip">Private Trip</option>
                    <option value="Open Trip">Open Trip</option>
                    <option value="Custom Itinerary">Custom Itinerary</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button type="submit" className="btn-gold w-full justify-center text-xs py-2.5">
                    <Send className="w-3.5 h-3.5" />
                    Konsultasi WA
                  </button>
                </div>
              </form>
            )}

            {/* Rental Form */}
            {activeTab === "rental" && (
              <form onSubmit={handleRentalSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Pilih Armada
                  </label>
                  <select
                    value={rentalVehicle}
                    onChange={(e) => setRentalVehicle(e.target.value)}
                    className="bg-[#131720] border border-[#1a1f2e] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="Toyota Alphard VIP">Toyota Alphard VIP</option>
                    <option value="Toyota HiAce Premio Luxury">HiAce Premio (14 Seat)</option>
                    <option value="Toyota Fortuner VRZ">Fortuner VRZ (SUV 4x4)</option>
                    <option value="Toyota HiAce Commuter">HiAce Commuter (15 Seat)</option>
                    <option value="Toyota Innova Zenix Hybrid">Innova Zenix Hybrid</option>
                    <option value="Toyota Innova Reborn">Innova Reborn</option>
                    <option value="Mitsubishi Xpander Cross">Mitsubishi Xpander</option>
                    <option value="Toyota All New Veloz">Toyota Veloz</option>
                    <option value="Toyota All New Avanza">All New Avanza</option>
                    <option value="Daihatsu All New Xenia">All New Xenia</option>
                    <option value="Honda All New Brio RS">Honda Brio</option>
                    <option value="Toyota All New Agya GR">Toyota Agya</option>
                    <option value="Honda PCX 160 ABS">Honda PCX 160</option>
                    <option value="Yamaha NMax 155 Connected">Yamaha NMax 155</option>
                    <option value="Honda Stylo 160">Honda Stylo 160</option>
                    <option value="Honda Vario 160">Honda Vario</option>
                    <option value="Honda Scoopy Prestige">Honda Scoopy</option>
                    <option value="Honda BeAT FI">Honda BeAT</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Tanggal Sewa
                  </label>
                  <input
                    type="date"
                    value={rentalDate}
                    onChange={(e) => setRentalDate(e.target.value)}
                    className="bg-[#131720] border border-[#1a1f2e] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Durasi
                  </label>
                  <select
                    value={rentalDuration}
                    onChange={(e) => setRentalDuration(e.target.value)}
                    className="bg-[#131720] border border-[#1a1f2e] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="1 Hari (24 Jam)">1 Hari (24 Jam)</option>
                    <option value="2 Hari">2 Hari</option>
                    <option value="3 Hari">3 Hari</option>
                    <option value="4+ Hari">4+ Hari (Diskon Khusus)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold">
                    Layanan
                  </label>
                  <select
                    value={rentalOption}
                    onChange={(e) => setRentalOption(e.target.value)}
                    className="bg-[#131720] border border-[#1a1f2e] rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-gold"
                  >
                    <option value="Mobil + Driver + BBM">Mobil + Driver + BBM</option>
                    <option value="Lepas Kunci">Lepas Kunci (Self Drive)</option>
                    <option value="Antar Jemput Stasiun/Bandara">Antar Jemput Gratis</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button type="submit" className="btn-gold w-full justify-center text-xs py-2.5">
                    <Send className="w-3.5 h-3.5" />
                    Cek Unit WA
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
