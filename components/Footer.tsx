import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_NAME, WHATSAPP_NUMBER } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070a] border-t border-[#1a1f2e] pt-16 pb-8 text-gray-400 text-xs sm:text-sm">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-block mb-4">
              <span className="font-cinzel text-2xl font-black tracking-widest text-white">
                INDO<span className="text-gold-gradient">TRANS</span>
              </span>
              <div className="text-[9px] tracking-[0.2em] text-gray-500 uppercase">
                Tour &bull; Travel &bull; Transport Banyuwangi
              </div>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">
              Penyedia jasa tour & travel serta rental mobil dan motor resmi terpercaya di
              Banyuwangi. Mengutamakan kenyamanan, keamanan, dan kepuasan wisatawan.
            </p>
            <div className="flex gap-3 text-gold">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#131720] border border-[#1a1f2e] flex items-center justify-center hover:border-gold transition-colors"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#131720] border border-[#1a1f2e] flex items-center justify-center hover:border-gold transition-colors"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-outfit text-white font-bold text-sm uppercase tracking-wider mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-gold transition-colors">Beranda</a></li>
              <li><a href="#keunggulan" className="hover:text-gold transition-colors">Keunggulan Layanan</a></li>
              <li><a href="#tentang-kami" className="hover:text-gold transition-colors">Tentang Kami</a></li>
              <li><a href="#paket-wisata" className="hover:text-gold transition-colors">Paket Wisata Populer</a></li>
              <li><a href="#sewa-armada" className="hover:text-gold transition-colors">Sewa Mobil & Motor</a></li>
              <li><a href="#kalkulator" className="hover:text-gold transition-colors">Kalkulator Biaya</a></li>
              <li><a href="#galeri" className="hover:text-gold transition-colors">Galeri Dokumentasi</a></li>
              <li><a href="#faq" className="hover:text-gold transition-colors">Tanya Jawab (FAQ)</a></li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-outfit text-white font-bold text-sm uppercase tracking-wider mb-4">
              Destinasi Unggulan
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#paket-wisata" className="hover:text-gold transition-colors">Midnight Tour Kawah Ijen Blue Fire</a></li>
              <li><a href="#paket-wisata" className="hover:text-gold transition-colors">Safari Taman Nasional Baluran</a></li>
              <li><a href="#paket-wisata" className="hover:text-gold transition-colors">Hutan De Djawatan Lord of the Rings</a></li>
              <li><a href="#paket-wisata" className="hover:text-gold transition-colors">Pantai Pulau Merah Sunset</a></li>
              <li><a href="#paket-wisata" className="hover:text-gold transition-colors">Snorkeling Bangsring & Pulau Tabuhan</a></li>
              <li><a href="#paket-wisata" className="hover:text-gold transition-colors">Offroad Meru Betiri & Penyu Sukamade</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-outfit text-white font-bold text-sm uppercase tracking-wider mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>Jl. Brawijaya No. 88, Kebalenan, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="hover:text-gold transition-colors">
                  +62 899-1010-528 (Admin WA)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>info@indotransbanyuwangi.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>Layanan Booking 24 Jam Nonstop</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1f2e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {currentYear} {SITE_NAME}. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-4">
            <span>Banyuwangi, Jawa Timur</span>
            <span>&bull;</span>
            <span className="text-gold">Sunrise of Java</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
