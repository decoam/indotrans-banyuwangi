"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE_NAME, WHATSAPP_NUMBER } from "@/lib/data";
import { getDict, getLocaleFromPath } from "@/lib/i18n";
import WaLink from "./WaLink";

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPath(pathname);
  const d = getDict(locale);
  const base = locale === "en" ? "/en" : "";
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: `${base}/#home`, label: d.footer.navHome },
    { href: `${base}/#keunggulan`, label: d.footer.navAdvantages },
    { href: `${base}/#tentang-kami`, label: d.footer.navAbout },
    { href: `${base}/#paket-wisata`, label: d.footer.navPackages },
    { href: `${base}/#sewa-armada`, label: d.footer.navFleet },
    { href: `${base}/#kalkulator`, label: d.footer.navCalculator },
    { href: `${base}/#galeri`, label: d.footer.navGallery },
    { href: `${base}/#faq`, label: d.footer.navFaq },
  ];

  const featuredLinks = [
    { href: `${base}/paket-wisata/one-day-south-banyuwangi`, label: d.footer.feat1 },
    { href: `${base}/paket-wisata/one-day-menjangan-baluran`, label: d.footer.feat2 },
    { href: `${base}/paket-wisata/2d1n`, label: d.footer.feat3 },
    { href: `${base}/paket-wisata/3d2n`, label: d.footer.feat4 },
    { href: `${base}/open-trip/kawah-ijen`, label: d.footer.feat5 },
    { href: `${base}/open-trip/baluran`, label: d.footer.feat6 },
    { href: `${base}/open-trip/menjangan-tabuhan`, label: d.footer.feat7 },
  ];

  return (
    <footer className="bg-[#05070a] border-t border-[#1a1f2e] pt-16 pb-8 text-gray-400 text-xs sm:text-sm">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href={base || "/"} className="inline-flex items-center gap-3 mb-4 group">
              <div className="relative h-10 w-auto aspect-[1347/728] overflow-hidden rounded-lg bg-black flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform shrink-0">
                <Image
                  src="/INDOTRANS.png"
                  alt="Logo INDOTRANS"
                  width={74}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl sm:text-2xl font-black tracking-widest text-white leading-none">
                  INDO<span className="text-gold-gradient">TRANS</span>
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-gray-500 uppercase mt-1">
                  Tour &bull; Travel &bull; Transport Banyuwangi
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed mb-4">{d.footer.brandDesc}</p>
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
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#131720] border border-[#1a1f2e] flex items-center justify-center hover:border-gold transition-colors"
                aria-label="TikTok"
              >
                <i className="fa-brands fa-tiktok text-sm"></i>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="font-outfit text-white font-bold text-sm uppercase tracking-wider mb-4">
              {d.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Tours */}
          <div>
            <h4 className="font-outfit text-white font-bold text-sm uppercase tracking-wider mb-4">
              {d.footer.featured}
            </h4>
            <ul className="space-y-2 text-xs">
              {featuredLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-outfit text-white font-bold text-sm uppercase tracking-wider mb-4">
              {d.footer.contact}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{d.footer.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <WaLink href={`https://wa.me/${WHATSAPP_NUMBER}`} location="footer" className="hover:text-gold transition-colors">
                  {d.footer.adminWa}
                </WaLink>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>indotranssarana@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0" />
                <span>{d.footer.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1f2e] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {currentYear} {SITE_NAME}. {d.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <span>{d.footer.location}</span>
            <span>&bull;</span>
            <span className="text-gold">{d.footer.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
