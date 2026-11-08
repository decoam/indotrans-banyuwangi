import { Shield, Sparkles, MapPin, Star, Clock, CheckCircle2 } from "lucide-react";
import { buildWaUrl } from "@/lib/data";

const values = [
  { title: "Generasi Baru, Standar Baru", desc: "Hadir dengan armada terawat tahun muda, sistem reservasi cepat via WhatsApp, dan transparansi harga 100% tanpa biaya tersembunyi." },
  { title: "Local Insight, Layanan Berkelas", desc: "Driver dan tour guide kami adalah putra daerah yang memahami medan, budaya Osing, dan spot tersembunyi terbaik di seluruh Banyuwangi." },
  { title: "Fleksibel Sesuai Kebutuhan", desc: "Mulai dari backpacker solo, pasangan, keluarga, hingga rombongan korporat — semua itinerary dan opsi armada bisa disesuaikan." },
];

export default function TentangKami() {
  const waContactUrl = buildWaUrl(
    "Halo INDOTRANS! Saya ingin bertanya lebih lanjut mengenai layanan tour dan sewa armada di Banyuwangi."
  );

  return (
    <section id="tentang-kami" className="py-20 bg-[#0a0d14] relative overflow-hidden">
      {/* Decorative Orb */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-tag">
            <Sparkles className="w-4 h-4 text-gold" />
            Tentang Kami
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Terobosan Generasi Baru{" "}
            <span className="text-gold-gradient">Tour & Transport Banyuwangi</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            INDOTRANS hadir membawa standar baru dalam layanan pariwisata dan transportasi di
            Banyuwangi. Kami percaya bahwa setiap perjalanan harus berkesan, aman, dan tanpa repot.
          </p>
        </div>

        {/* Story & Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold/15 text-gold border border-gold/30">
              <Shield className="w-3.5 h-3.5" />
              Komitmen Kualitas & Kepercayaan
            </div>

            <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white">
              Bukan Sekadar Mengantar, Kami Merancang Pengalaman Terbaik
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Didirikan sebagai gebrakan baru di Banyuwangi, INDOTRANS menggabungkan kemudahan
              komunikasi instan lewat WhatsApp, armada bersih dan prima, serta pemandu lokal yang
              berdedikasi.
            </p>

            <div className="space-y-3 pt-2">
              {values.map((v, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">{v.title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href={waContactUrl} target="_blank" rel="noopener noreferrer" className="btn-gold text-xs sm:text-sm">
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </div>

          {/* Stats Highlight Card */}
          <div className="card-dark p-6 sm:p-8 bg-gradient-to-br from-[#131720] to-[#0f1218] border-gold/30 shadow-gold">
            <h4 className="font-outfit text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Komitmen &amp; Layanan
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#07090d]/80 border border-[#1a1f2e]">
                <div className="font-outfit text-2xl sm:text-3xl font-extrabold text-gold">18+</div>
                <div className="text-xs text-gray-400 mt-1">Armada Mobil &amp; Motor</div>
              </div>

              <div className="p-4 rounded-xl bg-[#07090d]/80 border border-[#1a1f2e]">
                <div className="font-outfit text-2xl sm:text-3xl font-extrabold text-gold">24 Jam</div>
                <div className="text-xs text-gray-400 mt-1">Layanan Antar Jemput</div>
              </div>

              <div className="p-4 rounded-xl bg-[#07090d]/80 border border-[#1a1f2e]">
                <div className="font-outfit text-2xl sm:text-3xl font-extrabold text-gold">100%</div>
                <div className="text-xs text-gray-400 mt-1">Harga Transparan</div>
              </div>

              <div className="p-4 rounded-xl bg-[#07090d]/80 border border-[#1a1f2e]">
                <div className="font-outfit text-2xl sm:text-3xl font-extrabold text-gold">Guide</div>
                <div className="text-xs text-gray-400 mt-1">Lokal Berpengalaman</div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-gold/5 border border-gold/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">Basecamp Operasional</div>
                <div className="text-gray-400">Jl. Brawijaya No. 88, Kebalenan, Banyuwangi</div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholders Row: Google Maps + Google Review */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Maps Placeholder */}
          <div className="card-dark p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gold" />
                  <h3 className="font-outfit text-base sm:text-lg font-bold text-white">
                    Lokasi Kantor Kami
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <Clock className="w-3 h-3" />
                  Proses Verifikasi Google Business
                </span>
              </div>

              <p className="text-xs text-gray-400 mb-4">
                Peta lokasi resmi kami di Banyuwangi. Integrasi Google Maps Business interaktif akan
                aktif segera setelah verifikasi selesai.
              </p>
            </div>

            {/* Map Frame with Overlay */}
            <div className="relative rounded-xl overflow-hidden border border-[#1a1f2e] h-64 bg-[#0a0d14]">
              {/* Fallback iframe Banyuwangi Area */}
              <iframe
                title="Peta Lokasi INDOTRANS Banyuwangi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126359.78913936932!2d114.30138097587123!3d-8.219251299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd154817a020d2d%3A0x4027a76e3531b20!2sBanyuwangi%2C%20Banyuwangi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(70%) contrast(1.1) brightness(0.8)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay Badge */}
              <div className="absolute inset-0 bg-[#07090d]/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div className="text-xs font-bold text-white mb-1">
                  Google Maps Business — Segera Hadir
                </div>
                <div className="text-[11px] text-gray-300 max-w-xs">
                  Kantor kami beralamat di Jl. Brawijaya No. 88, Kebalenan, Banyuwangi. Hubungi WhatsApp untuk penjemputan langsung.
                </div>
              </div>
            </div>
          </div>

          {/* Google Reviews — menunggu verifikasi */}
          <div className="card-dark p-5 sm:p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold" />
                  <h3 className="font-outfit text-base sm:text-lg font-bold text-white">
                    Ulasan Google
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  <Clock className="w-3 h-3" />
                  Menunggu Verifikasi
                </span>
              </div>

              <p className="text-xs text-gray-400 mb-4">
                Ulasan resmi pelanggan akan tampil di sini setelah akun Google Business kami
                terverifikasi. Kami memilih menampilkan ulasan asli, bukan yang dibuat-buat.
              </p>
            </div>

            <div className="rounded-xl bg-[#0a0d14] border border-[#1a1f2e] p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-gold" />
              </div>
              <div className="text-sm font-semibold text-white mb-1">Ulasan Segera Hadir</div>
              <div className="text-[11px] text-gray-400 leading-relaxed">
                Punya pengalaman bersama INDOTRANS? Ceritakan lewat Google Review setelah akun kami aktif.
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#1a1f2e] text-center text-[11px] text-gray-500">
              Terima kasih atas kepercayaan Anda.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
