import {
  Car,
  Award,
  ShieldCheck,
  Clock,
  CircleDollarSign,
  Sliders,
} from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Armada Baru & Terawat",
    desc: "Seluruh unit mobil dan motor tahun muda, diservis berkala di bengkel resmi, AC dingin, bersih wangi, dan disanitasi sebelum serah terima.",
  },
  {
    icon: Award,
    title: "Driver & Guide Berlisensi",
    desc: "Pengemudi dan pemandu lokal ramah, santun, menguasai medan tanjakan Ijen & Baluran, serta siap membantu dokumentasi foto & video terbaik Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Perlengkapan Ijen Lengkap",
    desc: "Khusus pendakian Kawah Ijen, gratis Respirator Gas Mask standar internasional, senter kepala terang, dan jas hujan darurat.",
  },
  {
    icon: Clock,
    title: "Antar-Jemput 24 Jam Gratis",
    desc: "Tiba tengah malam via Kereta Api atau mendarat di Bandara Blimbingsari? Tim INDOTRANS siap menjemput tepat waktu tanpa biaya tambahan.",
  },
  {
    icon: CircleDollarSign,
    title: "Harga Jujur & Transparan",
    desc: "Tanpa biaya tersembunyi. Rincian BBM, tiket masuk, parkir, dan retribusi dijelaskan terbuka sejak awal tanpa pungutan mendadak di lapangan.",
  },
  {
    icon: Sliders,
    title: "Itinerary Fleksibel & Kustom",
    desc: "Mau tambah spot kuliner Sego Tempong, hunting kopi Osing, atau singgah di pantai rahasia? Rute dapat disesuaikan dengan ritme liburan Anda.",
  },
];

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="py-20 bg-[#07090d] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag">
            <Award className="w-4 h-4 text-gold" />
            Mengapa Memilih INDOTRANS?
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Standar Pelayanan Prima untuk{" "}
            <span className="text-gold-gradient">Liburan Impian Anda</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Kami mengutamakan keselamatan, kenyamanan, dan pengalaman tak terlupakan dalam setiap
            sudut keindahan Banyuwangi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="card-dark p-6 sm:p-8 flex flex-col group relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all pointer-events-none" />

                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-5 text-gold group-hover:scale-110 group-hover:bg-gold group-hover:text-[#07090d] transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-outfit text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {feat.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
