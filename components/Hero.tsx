"use client";

import { useState } from "react";
import Image from "next/image";
import { Compass, Car, Sparkles, Send } from "lucide-react";
import { buildWaUrl } from "@/lib/data";

const stats = [
  { value: "12.500+", label: "Wisatawan Puas" },
  { value: "45+", label: "Unit Mobil & Motor" },
  { value: "100%", label: "Berizin & Terpercaya" },
  { value: "5.0 ★", label: "Rating Google" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"wisata" | "rental">("wisata");

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

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_bg.jpg"
          alt="Panorama Kawah Ijen Banyuwangi"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-ken-burns filter brightness-[0.32]"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-transparent to-[#07090d]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090d]/90 via-[#07090d]/40 to-transparent" />
        {/* Glow Orb */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-gold/10 border border-gold/30 text-gold mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
            <span>#1 Luxury Tour & Transport Specialist Banyuwangi</span>
          </div>

          {/* Headline */}
          <h1 className="font-outfit text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Eksplorasi Keajaiban <br />
            <span className="text-gold-gradient">Banyuwangi Sunrise of Java</span> <br />
            dengan Kenyamanan Terbaik
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl font-light">
            Nikmati fenomena langka Kawah Ijen Blue Fire, savana eksotis TN Baluran, hingga hutan
            magis De Djawatan. Didukung armada mobil & motor mewah terbaru dengan layanan
            antar-jemput 24 jam.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a href="#paket-wisata" className="btn-gold">
              <Compass className="w-5 h-5" />
              Jelajahi Paket Wisata
            </a>
            <a href="#sewa-armada" className="btn-outline-gold">
              <Car className="w-5 h-5" />
              Sewa Mobil & Motor
            </a>
          </div>

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 rounded-2xl bg-[#0f1218]/70 border border-[#1a1f2e] backdrop-blur-md mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center sm:text-left">
                <div className="font-outfit text-xl sm:text-2xl font-black text-gold">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Quick Search Widget */}
          <div className="rounded-2xl bg-[#0f1218]/85 border border-[#1a1f2e] p-5 sm:p-6 backdrop-blur-md shadow-2xl">
            {/* Tabs */}
            <div className="flex border-b border-[#1a1f2e] pb-3 mb-4 gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("wisata")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "wisata"
                    ? "bg-gold text-[#07090d] shadow-gold"
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
                    ? "bg-gold text-[#07090d] shadow-gold"
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
                    <option value="Midnight Kawah Ijen Blue Fire">Kawah Ijen Blue Fire</option>
                    <option value="Safari TN Baluran">TN Baluran Safari</option>
                    <option value="De Djawatan & Pulau Merah">De Djawatan & Pulau Merah</option>
                    <option value="Banyuwangi Ultimate 3D2N">Banyuwangi 3D2N All-In</option>
                    <option value="Bangsring Snorkeling & Tabuhan">Bangsring & Tabuhan</option>
                    <option value="Adventure Meru Betiri & Sukamade">Meru Betiri & Sukamade</option>
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
                    <option value="Toyota Innova Reborn">Innova Reborn (VIP)</option>
                    <option value="Toyota HiAce Premio Luxury">HiAce Premio (14 Seat)</option>
                    <option value="Toyota Fortuner VRZ">Fortuner VRZ (SUV 4x4)</option>
                    <option value="Toyota All New Avanza">All New Avanza (Hemat)</option>
                    <option value="Yamaha NMax 155">Yamaha NMax 155</option>
                    <option value="Honda PCX 160">Honda PCX 160 ABS</option>
                    <option value="Honda CRF 150L Trail">Honda CRF 150L (Trail)</option>
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
