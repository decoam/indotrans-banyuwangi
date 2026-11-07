"use client";

import { useState } from "react";
import { Calculator, Minus, Plus, MessageCircle, Sparkles } from "lucide-react";
import { tourPrices, vehiclePrices, buildWaUrl } from "@/lib/data";

function formatIDR(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Kalkulator() {
  const [serviceType, setServiceType] = useState<"wisata" | "kendaraan">("wisata");
  const [selectedTour, setSelectedTour] = useState("ijen-midnight");
  const [selectedVehicle, setSelectedVehicle] = useState("innova-reborn");
  const [days, setDays] = useState(1);
  const [pax, setPax] = useState(2);
  const [withDriver, setWithDriver] = useState(true);

  // Calculation
  let total = 0;
  let title = "";
  let details = "";

  if (serviceType === "wisata") {
    const tour = tourPrices[selectedTour] || tourPrices["ijen-midnight"];
    title = tour.name;
    let unitPrice = tour.pricePerPax;
    if (pax >= 5) unitPrice *= 0.9; // diskon 10%
    else if (pax >= 3) unitPrice *= 0.95; // diskon 5%

    const multiplier = title.includes("2D1N") || title.includes("3D2N") ? 1 : days;
    total = unitPrice * pax * multiplier;

    details = `Layanan: Paket Wisata (${title})\nJumlah Peserta: ${pax} Orang\nDurasi: ${days} Hari\nEstimasi Biaya: ${formatIDR(
      total
    )}`;
  } else {
    const veh = vehiclePrices[selectedVehicle] || vehiclePrices["innova-reborn"];
    title = veh.name;
    let driverCost = 0;
    if (veh.type === "car" && withDriver) {
      driverCost = 150000;
    }
    total = (veh.basePrice + driverCost) * days;

    details = `Layanan: Sewa Kendaraan (${title})\nDurasi Sewa: ${days} Hari\nOpsi Driver: ${
      withDriver && veh.type === "car" ? "Termasuk Driver + BBM" : "Lepas Kunci"
    }\nEstimasi Biaya: ${formatIDR(total)}`;
  }

  const waMsg = `Halo INDOTRANS! Saya telah menghitung estimasi biaya di website:\n\n${details}\n\nMohon konfirmasi ketersediaan jadwal dan promo spesialnya. Terima kasih!`;
  const waUrl = buildWaUrl(waMsg);

  return (
    <section id="kalkulator" className="py-20 bg-[#07090d] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag">
            <Calculator className="w-4 h-4 text-gold" />
            Kalkulator Biaya Real-Time
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Hitung Estimasi Biaya <span className="text-gold-gradient">Sesuai Kebutuhan</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Dapatkan gambaran biaya transparan seketika untuk paket wisata maupun sewa kendaraan,
            lalu kirimkan langsung ke WhatsApp kami untuk diskon khusus.
          </p>
        </div>

        {/* Card Calculator */}
        <div className="max-w-4xl mx-auto card-dark p-6 sm:p-10 border-gold/30 shadow-gold">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Column */}
            <div className="space-y-6">
              {/* Service Switch */}
              <div>
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-2">
                  Jenis Layanan
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType("wisata")}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      serviceType === "wisata"
                        ? "bg-gold text-[#07090d] shadow-gold"
                        : "bg-[#0a0d14] text-gray-400 hover:text-white border border-[#1a1f2e]"
                    }`}
                  >
                    Paket Wisata
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType("kendaraan")}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      serviceType === "kendaraan"
                        ? "bg-gold text-[#07090d] shadow-gold"
                        : "bg-[#0a0d14] text-gray-400 hover:text-white border border-[#1a1f2e]"
                    }`}
                  >
                    Rental Kendaraan
                  </button>
                </div>
              </div>

              {/* Tour / Vehicle Dropdown */}
              {serviceType === "wisata" ? (
                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-2">
                    Pilih Paket Wisata
                  </label>
                  <select
                    value={selectedTour}
                    onChange={(e) => setSelectedTour(e.target.value)}
                    className="w-full bg-[#0a0d14] border border-[#1a1f2e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    <option value="ijen-midnight">Midnight Tour Kawah Ijen (Rp 350.000/pax)</option>
                    <option value="baluran-safari">Safari TN Baluran (Rp 375.000/pax)</option>
                    <option value="djawatan-merah">De Djawatan & Pulau Merah (Rp 325.000/pax)</option>
                    <option value="bwi-2d1n">Banyuwangi 2D1N (Rp 750.000/pax)</option>
                    <option value="bwi-3d2n">Banyuwangi Ultimate 3D2N (Rp 1.350.000/pax)</option>
                    <option value="bangsring-tabuhan">Bangsring Snorkeling (Rp 420.000/pax)</option>
                  </select>
                </div>
              ) : (
                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-2">
                    Pilih Kendaraan
                  </label>
                  <select
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="w-full bg-[#0a0d14] border border-[#1a1f2e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    <option value="innova-reborn">Toyota Innova Reborn (Rp 650.000/hari)</option>
                    <option value="hiace-premio">Toyota HiAce Premio Luxury (Rp 1.200.000/hari)</option>
                    <option value="fortuner-vrz">Toyota Fortuner VRZ 4x4 (Rp 1.100.000/hari)</option>
                    <option value="avanza-facelift">Toyota All New Avanza (Rp 400.000/hari)</option>
                    <option value="nmax-155">Yamaha NMax 155 (Rp 110.000/hari)</option>
                    <option value="pcx-160">Honda PCX 160 ABS (Rp 115.000/hari)</option>
                    <option value="crf-150">Honda CRF 150L Trail (Rp 160.000/hari)</option>
                    <option value="scoopy-smart">Honda Scoopy Prestige (Rp 85.000/hari)</option>
                  </select>
                </div>
              )}

              {/* Days Counter */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0a0d14] border border-[#1a1f2e]">
                <span className="text-sm text-white font-medium">Durasi Hari</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setDays(Math.max(1, days - 1))}
                    className="w-8 h-8 rounded-lg bg-[#131720] border border-[#1a1f2e] text-white flex items-center justify-center hover:border-gold transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-gold">{days}</span>
                  <button
                    type="button"
                    onClick={() => setDays(Math.min(14, days + 1))}
                    className="w-8 h-8 rounded-lg bg-[#131720] border border-[#1a1f2e] text-white flex items-center justify-center hover:border-gold transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Pax Counter */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0a0d14] border border-[#1a1f2e]">
                <span className="text-sm text-white font-medium">
                  {serviceType === "wisata" ? "Jumlah Peserta (Orang)" : "Jumlah Penumpang"}
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPax(Math.max(1, pax - 1))}
                    className="w-8 h-8 rounded-lg bg-[#131720] border border-[#1a1f2e] text-white flex items-center justify-center hover:border-gold transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center text-sm font-bold text-gold">{pax}</span>
                  <button
                    type="button"
                    onClick={() => setPax(Math.min(30, pax + 1))}
                    className="w-8 h-8 rounded-lg bg-[#131720] border border-[#1a1f2e] text-white flex items-center justify-center hover:border-gold transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Driver Checkbox (mobil only) */}
              {serviceType === "kendaraan" &&
                vehiclePrices[selectedVehicle]?.type === "car" && (
                  <label className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0a0d14] border border-[#1a1f2e] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={withDriver}
                      onChange={(e) => setWithDriver(e.target.checked)}
                      className="w-4 h-4 accent-gold"
                    />
                    <span className="text-sm text-gray-300">
                      Termasuk Driver + BBM (+Rp 150.000/hari)
                    </span>
                  </label>
                )}
            </div>

            {/* Summary Column */}
            <div className="p-6 rounded-2xl bg-[#0a0d14] border border-[#1a1f2e] flex flex-col justify-between">
              <div>
                <h3 className="font-outfit text-base font-bold text-white mb-4 pb-3 border-b border-[#1a1f2e] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  Rincian Estimasi
                </h3>

                <dl className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-400">Pilihan:</dt>
                    <dd className="text-white font-medium text-right max-w-[60%] truncate">
                      {title}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400">Durasi:</dt>
                    <dd className="text-white font-medium">{days} Hari</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400">Peserta/Penumpang:</dt>
                    <dd className="text-white font-medium">{pax} Orang</dd>
                  </div>
                  {pax >= 3 && serviceType === "wisata" && (
                    <div className="flex justify-between text-emerald-400">
                      <dt>Diskon Rombongan:</dt>
                      <dd>{pax >= 5 ? "10% OFF" : "5% OFF"}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="pt-6 border-t border-[#1a1f2e] mt-6">
                <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                  Total Estimasi Biaya
                </div>
                <div className="text-gold font-outfit text-2xl sm:text-3xl font-extrabold mb-4">
                  {formatIDR(total)}
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full justify-center text-xs sm:text-sm py-3"
                >
                  <MessageCircle className="w-4 h-4" />
                  Kirim Pesanan via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
