"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { buildWaUrl } from "@/lib/data";
import { getPaketWisata, getOpenTrip } from "@/lib/data.en";
import { getDict, type Locale } from "@/lib/i18n";
import WaLink from "./WaLink";

const filterTabs = (locale: Locale) => {
  const d = getDict(locale);
  return [
    { id: "all", label: d.paket.filterAll },
    { id: "1day", label: d.paket.filter1day },
    { id: "2d1n", label: d.paket.filter2d1n },
    { id: "3d2n", label: d.paket.filter3d2n },
    { id: "opentrip", label: d.paket.filterOpen },
  ];
};

function routePath(tour: { slug: string; categories: string[] }, locale: Locale) {
  const base = locale === "en" ? "/en" : "";
  return tour.categories.includes("opentrip")
    ? `${base}/open-trip/${tour.slug}`
    : `${base}/paket-wisata/${tour.slug}`;
}

function CardSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, paused]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover brightness-[0.9] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-105 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Foto sebelumnya"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#07090d]/70 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-gold hover:text-[#07090d] transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Foto berikutnya"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#07090d]/70 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-gold hover:text-[#07090d] transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Lihat foto ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-5 bg-gold"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function PaketWisata({ locale = "id" }: { locale?: Locale }) {
  const d = getDict(locale);
  const tabs = filterTabs(locale);
  const allTours = [...getPaketWisata(locale), ...getOpenTrip(locale)];
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredTours = allTours.filter((t) => {
    if (activeFilter === "all") return true;
    return t.categories.includes(activeFilter);
  });

  return (
    <section id="paket-wisata" className="py-24 bg-[#07090d] relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="section-tag inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gold/10 border border-gold/30 text-gold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>{d.paket.tag}</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            {d.paket.title1} <span className="text-gold-gradient">{d.paket.title2}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {d.paket.subtitle}
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === tab.id
                  ? "bg-gold text-[#07090d] shadow-gold font-bold scale-[1.02]"
                  : "bg-[#0f1218] text-gray-400 hover:text-white hover:bg-[#131720] border border-[#1a1f2e]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 xl:gap-8 items-stretch">
          {filteredTours.map((tour) => {
            const waUrl = buildWaUrl(tour.waMessage);
            const isBestValue = tour.id === "3d2n";
            const isOpenTrip = tour.categories.includes("opentrip");
            const minPax = "minPax" in tour ? tour.minPax : null;
            const jadwal = "jadwal" in tour ? tour.jadwal : null;
            const hargaWna = "hargaWnaDisplay" in tour ? tour.hargaWnaDisplay : null;

            return (
              <div
                key={tour.id}
                className={`relative rounded-2xl bg-[#0f1218] border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg ${
                  isBestValue
                    ? "border-gold/60 shadow-gold/20 hover:border-gold lg:-translate-y-2"
                    : "border-[#1a1f2e] hover:border-gold/40 hover:-translate-y-1"
                }`}
              >
                {isBestValue && (
                  <div className="absolute top-0 right-0 z-20">
                    <div className="bg-gradient-to-l from-gold to-gold-dark text-[#07090d] text-[10px] font-black tracking-wider uppercase px-4 py-1.5 rounded-bl-xl shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 fill-[#07090d]" />
                      <span>Best Value</span>
                    </div>
                  </div>
                )}

                <div>
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#131720]">
                    <CardSlideshow images={tour.images} alt={tour.imageAlt} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1218] via-[#0f1218]/30 to-transparent" />

                    <div className="absolute top-3.5 left-3.5 z-10 flex flex-wrap items-center gap-1.5">
                      {isOpenTrip && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-gold text-[#07090d] shadow-sm">
                          {d.paket.openTrip}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#07090d]/80 backdrop-blur-md text-gray-200 border border-white/10 shadow-sm">
                        <Clock className="w-3.5 h-3.5 text-gold" />
                        {tour.duration}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-24 z-10">
                      <h3 className="font-outfit text-xl font-bold text-white leading-snug group-hover:text-gold transition-colors">
                        {tour.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed mb-5 line-clamp-2">
                      {tour.desc}
                    </p>

                    {/* Rute */}
                    {"routes" in tour && tour.routes && tour.routes.length > 0 && (
                      <div className="rounded-xl bg-[#131720] border border-[#1a1f2e] p-3.5 mb-4 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-gold uppercase tracking-wider">
                          <Compass className="w-3.5 h-3.5" />
                          <span>{d.paket.destinations}</span>
                        </div>
                        {tour.routes.map((rt, idx) => (
                          <div key={idx} className="text-xs text-gray-400 leading-snug">
                            {rt.destinasi}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Open trip info */}
                    {isOpenTrip && (
                      <div className="rounded-xl bg-[#131720] border border-[#1a1f2e] p-3.5 mb-4 space-y-1">
                        {jadwal && (
                          <div className="text-[11px] text-gray-300">
                            <span className="font-semibold text-white">{d.paket.schedule}: </span>
                            {jadwal}
                          </div>
                        )}
                        {minPax && (
                          <div className="text-[11px] text-gray-300">
                            <span className="font-semibold text-white">{d.paket.minPax}: </span>
                            {minPax} {d.trip.pax}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Highlights */}
                    <ul className="space-y-1.5 text-xs text-gray-300">
                      {tour.highlights.slice(0, 4).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 leading-tight">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-6 pt-4 border-t border-[#1a1f2e] bg-[#0c0f15]/50">
                  <div className="mb-4 flex items-end justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 block">
                        {d.paket.startFrom}
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-outfit text-2xl font-black text-white group-hover:text-gold transition-colors">
                          {tour.hargaDisplay}
                        </span>
                        <span className="text-xs text-gray-400">{tour.unit}</span>
                      </div>
                      {hargaWna && (
                        <div className="text-[11px] text-gray-400 mt-0.5">
                          {d.paket.wna}: <span className="text-gold font-semibold">{hargaWna}</span>
                        </div>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 whitespace-nowrap">
                      <ShieldCheck className="w-3 h-3" />
                      {isOpenTrip ? `Min. ${minPax ?? "-"} Pax` : d.paket.private}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    <Link
                      href={routePath(tour, locale)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-gray-300 bg-[#131720] border border-[#1a1f2e] hover:border-gold hover:text-white transition-all"
                    >
                      <span>{d.paket.detail}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold" />
                    </Link>
                    <WaLink
                      href={waUrl}
                      location="paket-card"
                      label={tour.slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-[#07090d] bg-gold-gradient hover:brightness-110 shadow-gold transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-[#07090d]" />
                      <span>{d.paket.order}</span>
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
