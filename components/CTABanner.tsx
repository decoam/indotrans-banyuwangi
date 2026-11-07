import { MessageCircle, Sparkles } from "lucide-react";
import { buildWaUrl } from "@/lib/data";

export default function CTABanner() {
  const waUrl = buildWaUrl(
    "Halo INDOTRANS! Saya ingin konsultasi liburan / sewa armada di Banyuwangi. Tolong dibantu rekomendasinya ya."
  );

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0d14] to-[#07090d] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-gold/10 border border-gold/30 text-gold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Rencanakan Liburan Impian Anda Sekarang
        </div>

        <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          Siap Menjelajahi Keindahan <br />
          <span className="text-gold-gradient">Banyuwangi Bersama Kami?</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto font-light">
          Konsultasikan tanggal, destinasi, dan kebutuhan armada Anda secara gratis langsung ke tim
          admin kami melalui WhatsApp.
        </p>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold text-sm sm:text-base px-8 py-4 text-[#07090d] font-bold shadow-gold-lg animate-pulse-gold inline-flex items-center gap-3"
        >
          <MessageCircle className="w-5 h-5" />
          Hubungi Admin via WhatsApp Sekarang
        </a>

        <div className="mt-6 text-xs text-gray-500">
          Respon cepat dalam hitungan menit &bull; Pelayanan 24 Jam
        </div>
      </div>
    </section>
  );
}
