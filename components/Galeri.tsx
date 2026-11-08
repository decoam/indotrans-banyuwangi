import Image from "next/image";
import { Camera } from "lucide-react";
import { getGaleriItems } from "@/lib/data.en";
import { getDict, type Locale } from "@/lib/i18n";

export default function Galeri({ locale = "id" }: { locale?: Locale }) {
  const d = getDict(locale);
  const items = getGaleriItems(locale);
  return (
    <section id="galeri" className="py-20 bg-[#0a0d14] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag">
            <Camera className="w-4 h-4 text-gold" />
            {d.galeri.tag}
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {d.galeri.title1} <span className="text-gold-gradient">{d.galeri.title2}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">{d.galeri.subtitle}</p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden group h-72 border border-[#1a1f2e] bg-[#131720] ${
                idx === 0 ? "sm:col-span-2 sm:h-80 lg:h-96" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090d]/90 via-[#07090d]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="font-outfit text-lg font-bold text-white group-hover:text-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 mt-1 line-clamp-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
