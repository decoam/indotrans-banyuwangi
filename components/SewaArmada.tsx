"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, Bike, Check, MessageCircle, Shield } from "lucide-react";
import { buildWaUrl } from "@/lib/data";
import { getArmadaMobil, getArmadaMotor } from "@/lib/data.en";
import { getDict, type Locale } from "@/lib/i18n";
import WaLink from "./WaLink";

export default function SewaArmada({ locale = "id" }: { locale?: Locale }) {
  const d = getDict(locale);
  const [activeTab, setActiveTab] = useState<"car" | "bike">("car");
  const mobil = getArmadaMobil(locale);
  const motor = getArmadaMotor(locale);

  const currentList = activeTab === "car" ? mobil : motor;

  return (
    <section id="sewa-armada" className="py-20 bg-[#0a0d14] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag">
            <Shield className="w-4 h-4 text-gold" />
            {d.armada.tag}
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {d.armada.title1} <span className="text-gold-gradient">{d.armada.title2}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">{d.armada.subtitle}</p>
        </div>

        {/* Category Toggle */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("car")}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "car"
                ? "bg-gold text-[#07090d] shadow-gold"
                : "bg-[#131720] text-gray-400 hover:text-white border border-[#1a1f2e]"
            }`}
          >
            <Car className="w-4 h-4" />
            {d.armada.carTab} ({mobil.length} {d.armada.options})
          </button>
          <button
            onClick={() => setActiveTab("bike")}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === "bike"
                ? "bg-gold text-[#07090d] shadow-gold"
                : "bg-[#131720] text-gray-400 hover:text-white border border-[#1a1f2e]"
            }`}
          >
            <Bike className="w-4 h-4" />
            {d.armada.bikeTab} ({motor.length} {d.armada.options})
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentList.map((unit) => {
            const waUrl = buildWaUrl(unit.waMessage);
            return (
              <div key={unit.id} className="card-dark flex flex-col group">
                {/* Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={unit.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131720] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="badge-bestseller">{unit.badge}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-outfit text-base font-bold text-white group-hover:text-gold transition-colors">
                        {unit.title}
                      </h3>
                      <span className="text-[10px] text-gray-400 bg-[#07090d] px-2 py-0.5 rounded border border-[#1a1f2e] shrink-0">
                        {unit.transmission}
                      </span>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#1a1f2e] mb-4 text-center">
                      {unit.specs.map((sp, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <span className="text-[11px] text-gray-300 font-medium">{sp.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Perks List */}
                    <ul className="space-y-1.5 mb-6 text-xs text-gray-400">
                      {unit.perks.map((p, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span className="leading-tight">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="pt-3 border-t border-[#1a1f2e] flex items-center justify-between">
                    <div>
                      <div className="text-gold font-outfit text-base font-bold">
                        {unit.hargaDisplay}
                      </div>
                      <span className="text-[10px] text-gray-400">{unit.unit}</span>
                    </div>

                    <WaLink
                      href={waUrl}
                      location="armada-card"
                      label={unit.id}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold text-xs px-3 py-2 shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      {d.armada.rent}
                    </WaLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
