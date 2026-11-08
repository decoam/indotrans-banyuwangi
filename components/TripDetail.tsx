import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  XCircle,
  MessageCircle,
  MapPin,
  Compass,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  Backpack,
  ScrollText,
} from "lucide-react";
import { paketWisata, openTrip, buildWaUrl } from "@/lib/data";
import TripFAQ from "./TripFAQ";

type Tour = (typeof paketWisata)[number] | (typeof openTrip)[number];

export default function TripDetail({ tour }: { tour: Tour }) {
  const waUrl = buildWaUrl(tour.waMessage);
  const isOpenTrip = tour.categories.includes("opentrip");
  const minPax = "minPax" in tour ? tour.minPax : null;
  const jadwal = "jadwal" in tour ? tour.jadwal : null;
  const hargaWna = "hargaWnaDisplay" in tour ? tour.hargaWnaDisplay : null;
  const customNote = "customNote" in tour ? tour.customNote : null;

  return (
    <article className="bg-[#07090d]">
      {/* Hero */}
      <div className="relative min-h-[62vh] flex items-end pt-28 pb-12 overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.38]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-[#07090d]/50 to-[#07090d]/70" />

        <div className="section-container relative z-10">
          <Link
            href="/#paket-wisata"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-gold mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Paket Wisata
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className={
                isOpenTrip
                  ? "inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-bold bg-gold text-[#07090d]"
                  : "inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-bold bg-gold/15 text-gold border border-gold/30"
              }
            >
              {isOpenTrip ? "Open Trip" : tour.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-[#07090d]/80 backdrop-blur-md text-gray-200 border border-white/10">
              <Clock className="w-3.5 h-3.5 text-gold" />
              {tour.duration}
            </span>
          </div>

          <h1 className="font-outfit text-3xl sm:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            {tour.title}
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6">
            {tour.desc}
          </p>

          <div className="flex flex-wrap items-end gap-6 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 block">
                Harga {isOpenTrip ? "WNI" : ""}
              </span>
              <div className="font-outfit text-2xl sm:text-3xl font-black text-gold">
                {tour.hargaDisplay}
                <span className="text-sm text-gray-400 font-normal ml-1">{tour.unit}</span>
              </div>
              {hargaWna && (
                <div className="text-xs text-gray-400 mt-1">
                  WNA: <span className="text-gold font-semibold">{hargaWna}</span>
                  {tour.unit}
                </div>
              )}
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-[#07090d] bg-gold-gradient shadow-gold hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-[#07090d]" />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container py-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left / main */}
        <div className="lg:col-span-2 space-y-8">
          {/* Destinasi */}
          {"routes" in tour && tour.routes && (
            <section className="rounded-2xl bg-[#0f1218] border border-[#1a1f2e] p-6">
              <h2 className="font-outfit text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold" />
                Destinasi & Rute
              </h2>
              <div className="space-y-2">
                {tour.routes.map((r, i) => (
                  <div key={i} className="text-sm text-gray-300">
                    <span className="font-semibold text-gold">{r.opsi}: </span>
                    {r.destinasi}
                  </div>
                ))}
              </div>
              {customNote && (
                <p className="text-xs text-gold/90 italic mt-3 pt-3 border-t border-[#1a1f2e]">
                  * {customNote}
                </p>
              )}
            </section>
          )}

          {/* Rundown */}
          <section className="rounded-2xl bg-[#0f1218] border border-[#1a1f2e] p-6">
            <h2 className="font-outfit text-lg font-bold text-white mb-5 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-gold" />
              Rundown Perjalanan
            </h2>
            <ol className="relative border-l border-[#1a1f2e] ml-2 space-y-4">
              {tour.rundown.map((item, i) => (
                <li key={i} className="ml-5">
                  <span className="absolute -left-[7px] mt-1.5 w-3 h-3 rounded-full bg-gold ring-4 ring-[#0f1218]" />
                  <div className="flex flex-wrap items-baseline gap-2">
                    {"day" in item && item.day && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded">
                        {item.day}
                      </span>
                    )}
                    <span className="font-outfit text-sm font-bold text-white">{item.time}</span>
                    <span className="text-sm text-gray-300">{item.activity}</span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Includes / Excludes */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#0f1218] border border-[#1a1f2e] p-6">
              <h3 className="font-outfit text-sm font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Harga Termasuk
              </h3>
              <ul className="space-y-2 text-xs text-gray-300">
                {tour.includes.map((it, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[#0f1218] border border-[#1a1f2e] p-6">
              <h3 className="font-outfit text-sm font-bold text-white mb-4 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400" />
                Belum Termasuk
              </h3>
              <ul className="space-y-2 text-xs text-gray-300">
                {tour.excludes.map((it, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Terms */}
          <section className="rounded-2xl bg-[#0f1218] border border-[#1a1f2e] p-6">
            <h2 className="font-outfit text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ScrollText className="w-5 h-5 text-gold" />
              Syarat & Ketentuan
            </h2>
            <ul className="space-y-2 text-xs text-gray-300">
              {tour.terms.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-outfit text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-gold" />
              Pertanyaan Umum
            </h2>
            <TripFAQ items={tour.faq} />
          </section>
        </div>

        {/* Right / sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-24 self-start">
          <div className="rounded-2xl bg-[#0f1218] border border-gold/40 p-6 shadow-gold">
            <div className="text-[10px] uppercase tracking-wider text-gray-400">
              Harga {isOpenTrip ? "WNI" : "Paket"}
            </div>
            <div className="font-outfit text-2xl font-black text-gold mb-1">
              {tour.hargaDisplay}
              <span className="text-xs text-gray-400 font-normal ml-1">{tour.unit}</span>
            </div>
            {hargaWna && (
              <div className="text-xs text-gray-400 mb-1">
                WNA: <span className="text-gold font-semibold">{hargaWna}</span>
                {tour.unit}
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-[#1a1f2e] space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>{tour.duration}</span>
              </div>
              {jadwal && (
                <div className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{jadwal}</span>
                </div>
              )}
              {minPax && (
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <span>Minimal {minPax} peserta</span>
                </div>
              )}
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{tour.meetingPoint}</span>
              </div>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-[#07090d] bg-gold-gradient shadow-gold hover:brightness-110 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-[#07090d]" />
              Booking via WhatsApp
            </a>
          </div>

          {/* Gear */}
          <div className="rounded-2xl bg-[#0f1218] border border-[#1a1f2e] p-6">
            <h3 className="font-outfit text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Backpack className="w-4 h-4 text-gold" />
              Peralatan Disiapkan
            </h3>
            <ul className="space-y-1.5 text-xs text-gray-300">
              {tour.gear.map((g, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </article>
  );
}
