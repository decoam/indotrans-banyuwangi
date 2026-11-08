"use client";

import { useState } from "react";
import { Calculator, Minus, Plus, MessageCircle, Sparkles } from "lucide-react";
import { buildWaUrl } from "@/lib/data";
import { getTourPrices, getVehiclePrices } from "@/lib/data.en";
import { getDict, type Locale } from "@/lib/i18n";

function formatIDR(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Kalkulator({ locale = "id" }: { locale?: Locale }) {
  const d = getDict(locale);
  const tourPrices = getTourPrices(locale);
  const vehiclePrices = getVehiclePrices(locale);
  const [serviceType, setServiceType] = useState<"wisata" | "kendaraan">("wisata");
  const [selectedTour, setSelectedTour] = useState("one-day-south");
  const [selectedVehicle, setSelectedVehicle] = useState("innova-reborn");
  const [days, setDays] = useState(1);
  const [pax, setPax] = useState(2);
  const [withDriver, setWithDriver] = useState(true);

  // Calculation
  let total = 0;
  let title = "";
  let details = "";

  if (serviceType === "wisata") {
    const tour = tourPrices[selectedTour] || tourPrices["one-day-south"];
    title = tour.name;
    let unitPrice = tour.pricePerPax;
    if (pax >= 5) unitPrice *= 0.9; // 10% off
    else if (pax >= 3) unitPrice *= 0.95; // 5% off

    const isMultiDay = selectedTour === "2d1n" || selectedTour === "3d2n";
    const multiplier = isMultiDay ? 1 : days;
    total = unitPrice * pax * multiplier;

    details = `${d.kalkulator.waServiceTour} (${title})\n${d.kalkulator.waPax}: ${pax} ${d.kalkulator.person}\n${d.kalkulator.waDuration}: ${days} ${d.kalkulator.day}\n${d.kalkulator.waEstimate}: ${formatIDR(
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

    details = `${d.kalkulator.waServiceRental} (${title})\n${d.kalkulator.waDuration}: ${days} ${d.kalkulator.day}\n${d.kalkulator.waDriver}: ${
      withDriver && veh.type === "car" ? d.kalkulator.waDriverIncluded : d.kalkulator.waSelfDrive
    }\n${d.kalkulator.waEstimate}: ${formatIDR(total)}`;
  }

  const waMsg = `${d.kalkulator.waIntro}\n\n${details}\n\n${d.kalkulator.waOutro}`;
  const waUrl = buildWaUrl(waMsg);

  return (
    <section id="kalkulator" className="py-20 bg-[#07090d] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag">
            <Calculator className="w-4 h-4 text-gold" />
            {d.kalkulator.tag}
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {d.kalkulator.title1} <span className="text-gold-gradient">{d.kalkulator.title2}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">{d.kalkulator.subtitle}</p>
        </div>

        {/* Card Calculator */}
        <div className="max-w-4xl mx-auto card-dark p-6 sm:p-10 border-gold/30 shadow-gold">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Input Column */}
            <div className="space-y-6">
              {/* Service Switch */}
              <div>
                <label className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-2">
                  {d.kalkulator.serviceType}
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
                    {d.kalkulator.tourPackage}
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
                    {d.kalkulator.rental}
                  </button>
                </div>
              </div>

              {/* Tour / Vehicle Dropdown */}
              {serviceType === "wisata" ? (
                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-2">
                    {d.kalkulator.selectTour}
                  </label>
                  <select
                    value={selectedTour}
                    onChange={(e) => setSelectedTour(e.target.value)}
                    className="w-full bg-[#0a0d14] border border-[#1a1f2e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {Object.entries(tourPrices).map(([key, t]) => (
                      <option key={key} value={key}>
                        {t.name} - {formatIDR(t.pricePerPax)}
                        {d.common.perPerson}
                      </option>
                    ))}
                  </select>
                </div>
              ) : (
                <div>
                  <label className="text-xs uppercase tracking-wider text-gray-400 font-bold block mb-2">
                    {d.kalkulator.selectVehicle}
                  </label>
                  <select
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="w-full bg-[#0a0d14] border border-[#1a1f2e] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {Object.entries(vehiclePrices).map(([key, v]) => (
                      <option key={key} value={key}>
                        {v.name} ({formatIDR(v.basePrice)}/{d.kalkulator.day})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Days Counter */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0a0d14] border border-[#1a1f2e]">
                <span className="text-sm text-white font-medium">{d.kalkulator.days}</span>
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
                  {serviceType === "wisata" ? d.kalkulator.participants : d.kalkulator.passengers}
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
                    <span className="text-sm text-gray-300">{d.kalkulator.driver}</span>
                  </label>
                )}
            </div>

            {/* Summary Column */}
            <div className="p-6 rounded-2xl bg-[#0a0d14] border border-[#1a1f2e] flex flex-col justify-between">
              <div>
                <h3 className="font-outfit text-base font-bold text-white mb-4 pb-3 border-b border-[#1a1f2e] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  {d.kalkulator.summary}
                </h3>

                <dl className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-400">{d.kalkulator.choice}</dt>
                    <dd className="text-white font-medium text-right max-w-[60%] truncate">
                      {title}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400">{d.kalkulator.durationLabel}</dt>
                    <dd className="text-white font-medium">{days} {d.kalkulator.day}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-400">{d.kalkulator.paxLabel}</dt>
                    <dd className="text-white font-medium">{pax} {d.kalkulator.person}</dd>
                  </div>
                  {pax >= 3 && serviceType === "wisata" && (
                    <div className="flex justify-between text-emerald-400">
                      <dt>{d.kalkulator.groupDiscount}</dt>
                      <dd>{pax >= 5 ? "10% OFF" : "5% OFF"}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="pt-6 border-t border-[#1a1f2e] mt-6">
                <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">
                  {d.kalkulator.total}
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
                  {d.kalkulator.send}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
