import { MessageSquareQuote } from "lucide-react";
import { testimoniData } from "@/lib/data";

export default function Testimoni() {
  return (
    <section id="testimoni" className="py-20 bg-[#07090d] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag">
            <MessageSquareQuote className="w-4 h-4 text-gold" />
            Ulasan Wisatawan
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Cerita Nyata dari <span className="text-gold-gradient">Pelanggan Puas</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Kepuasan dan senyum bahagia wisatawan adalah bukti dedikasi kami memberikan pelayanan
            terbaik di Banyuwangi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimoniData.map((item, idx) => (
            <div key={idx} className="card-dark p-6 flex flex-col justify-between">
              <div>
                {/* Stars */}
                <div className="flex text-gold text-sm mb-4">
                  {"★".repeat(item.rating)}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#1a1f2e] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center font-outfit font-black text-xs text-[#07090d] shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-outfit text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-[11px] text-gray-400">
                    {item.asal} &bull; <span className="text-gold">{item.paket}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
