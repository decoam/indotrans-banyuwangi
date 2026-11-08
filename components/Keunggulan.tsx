import {
  Car,
  Award,
  ShieldCheck,
  Clock,
  CircleDollarSign,
  Sliders,
} from "lucide-react";
import { getDict, type Locale } from "@/lib/i18n";

const icons = [Car, Award, ShieldCheck, Clock, CircleDollarSign, Sliders];

export default function Keunggulan({ locale = "id" }: { locale?: Locale }) {
  const d = getDict(locale);
  const features = d.keunggulan.features.map((f, i) => ({ ...f, icon: icons[i] }));

  return (
    <section id="keunggulan" className="py-20 bg-[#07090d] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag">
            <Award className="w-4 h-4 text-gold" />
            {d.keunggulan.tag}
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {d.keunggulan.title1}{" "}
            <span className="text-gold-gradient">{d.keunggulan.title2}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">{d.keunggulan.subtitle}</p>
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
