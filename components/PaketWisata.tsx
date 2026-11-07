"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, CheckCircle, MessageCircle } from "lucide-react";
import { paketWisata, buildWaUrl } from "@/lib/data";

const filterTabs = [
  { id: "all", label: "Semua Paket" },
  { id: "1day", label: "1 Hari (One Day)" },
  { id: "2d1n", label: "2 Hari 1 Malam" },
  { id: "3d2n", label: "3 Hari 2 Malam" },
  { id: "private", label: "Private Trip" },
  { id: "adventure", label: "Adventure & Bahari" },
];

export default function PaketWisata() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedTour, setSelectedTour] = useState<(typeof paketWisata)[0] | null>(null);

  const filteredTours = paketWisata.filter((t) => {
    if (activeFilter === "all") return true;
    return t.categories.includes(activeFilter);
  });

  return (
    <section id="paket-wisata" className="py-20 bg-[#07090d] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag">
            <span className="text-gold">✦</span> Destinasi Populer
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Paket Wisata <span className="text-gold-gradient">Eksklusif Banyuwangi</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Pilihan paket wisata terbaik mulai dari Midnight Tour Kawah Ijen, Safari Baluran, hingga
            petualangan bahari dan pantai eksotis dengan fasilitas all-in.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? "bg-gold text-[#07090d] shadow-gold"
                  : "bg-[#131720] text-gray-400 hover:text-white border border-[#1a1f2e]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour) => {
            const waUrl = buildWaUrl(tour.waMessage);
            return (
              <div key={tour.id} className="card-dark flex flex-col group">
                {/* Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131720] via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={
                        tour.badgeVariant === "bestseller"
                          ? "badge-bestseller"
                          : tour.badgeVariant === "exclusive"
                          ? "badge-exclusive"
                          : "badge-opentrip"
                      }
                    >
                      {tour.badge}
                    </span>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-[#07090d]/80 text-gray-300 backdrop-blur-sm border border-[#1a1f2e]">
                    <Clock className="w-3 h-3 text-gold" />
                    {tour.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="flex text-gold text-xs">
                        {"★".repeat(Math.floor(tour.rating))}
                      </div>
                      <span className="text-xs text-gray-400">({tour.reviews}+ Review)</span>
                    </div>

                    <h3 className="font-outfit text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                      {tour.title}
                    </h3>

                    <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 mb-4">
                      {tour.desc}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-6 text-xs text-gray-300">
                      {tour.highlights.map((hl, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span className="truncate">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 border-t border-[#1a1f2e] flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase text-gray-400 block font-semibold">
                        Mulai Dari
                      </span>
                      <div className="text-gold font-outfit text-lg font-extrabold">
                        {tour.hargaDisplay}{" "}
                        <span className="text-xs font-normal text-gray-400">{tour.unit}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedTour(tour)}
                        className="px-3 py-2 rounded-lg text-xs font-semibold text-gold border border-gold/40 hover:bg-gold/10 transition-colors"
                      >
                        Detail
                      </button>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold text-xs px-3 py-2 shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Pesan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Detail Tour */}
        {selectedTour && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedTour(null)}
          >
            <div
              className="card-dark max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative border-gold/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="badge-bestseller mb-2 inline-block">{selectedTour.badge}</span>
                  <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white">
                    {selectedTour.title}
                  </h3>
                  <div className="text-xs text-gold mt-1 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" /> {selectedTour.duration} &bull;{" "}
                    {selectedTour.hargaDisplay} {selectedTour.unit}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTour(null)}
                  className="p-1 rounded-lg text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm text-gray-300 mb-6 leading-relaxed">{selectedTour.desc}</p>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-gold mb-2">
                  Fasilitas Termasuk
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                  {selectedTour.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-gold shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-gold mb-2">
                  Rencana Perjalanan (Itinerary)
                </h4>
                <div className="space-y-2 text-xs text-gray-300">
                  {selectedTour.itinerary.map((it, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#1a1f2e] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-gray-400">Harga per orang</div>
                  <div className="text-lg font-bold text-gold font-outfit">
                    {selectedTour.hargaDisplay}
                  </div>
                </div>
                <a
                  href={buildWaUrl(selectedTour.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  Booking Sekarang via WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
