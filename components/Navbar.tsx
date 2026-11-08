"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/data";

const mainNavLinks = [
  { href: "#home", label: "Beranda" },
  {
    href: "#tentang-kami",
    label: "Tentang Kami",
    dropdown: [
      { href: "#tentang-kami", label: "Profil & Keunggulan" },
      { href: "#galeri", label: "Galeri Dokumentasi" },
      { href: "#testimoni", label: "Ulasan Wisatawan" },
    ],
  },
  { href: "#paket-wisata", label: "Paket Wisata" },
  { href: "#sewa-armada", label: "Sewa Armada" },
  { href: "#kalkulator", label: "Hitung Biaya" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo INDOTRANS! Saya ingin konsultasi perjalanan / sewa armada di Banyuwangi."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#07090d]/95 backdrop-blur-md border-b border-[#1a1f2e] py-3 shadow-2xl"
          : "bg-gradient-to-b from-[#07090d]/90 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative h-9 sm:h-11 w-auto aspect-[1347/728] overflow-hidden rounded-lg bg-black flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/INDOTRANS.png"
                alt="Logo INDOTRANS Banyuwangi"
                width={70}
                height={38}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-2xl font-black tracking-widest leading-none">
                <span className="text-white">INDO</span>
                <span className="text-gold-gradient group-hover:brightness-125 transition-all">
                  TRANS
                </span>
              </span>
              <span className="hidden sm:block text-[9px] tracking-[0.2em] text-gray-400 uppercase font-sans mt-0.5">
                Tour &bull; Travel &bull; Transport Banyuwangi
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Rapi & Ringkas */}
          <nav className="hidden lg:flex items-center gap-7">
            {mainNavLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative group py-2"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 group-hover:text-gold transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </a>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 w-52 pt-2 transition-all duration-200 ${
                      desktopDropdownOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="rounded-xl bg-[#0f1218] border border-[#1a1f2e] shadow-2xl p-2 space-y-1">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-gold hover:bg-[#131720] transition-colors"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Action Button - Hubungi Sekarang */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi Sekarang via WhatsApp"
              className="inline-flex items-center gap-2 px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#07090d] bg-gold-gradient hover:brightness-110 shadow-gold transition-all duration-300"
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#07090d]" />
              <span className="hidden sm:inline">Hubungi Sekarang</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-gray-300 hover:text-gold bg-[#131720]/80 border border-[#1a1f2e] hover:border-gold/40 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Solid Background, no see-through) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full h-[calc(100vh-65px)] bg-[#07090d] border-t border-[#1a1f2e] shadow-2xl overflow-y-auto px-5 py-6 flex flex-col justify-between">
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gold/80 px-3 pb-1">
              Navigasi Menu
            </div>

            {mainNavLinks.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="rounded-xl bg-[#0f1218] border border-[#1a1f2e] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-white hover:text-gold transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold transition-transform duration-200 ${
                        mobileSubmenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileSubmenuOpen && (
                    <div className="bg-[#131720] border-t border-[#1a1f2e] px-3 py-2 space-y-1">
                      {link.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-300 hover:text-gold hover:bg-[#07090d] transition-colors"
                        >
                          &bull; {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-semibold text-gray-200 hover:text-gold bg-[#0f1218] border border-[#1a1f2e] transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Bottom Mobile Drawer Call-to-action */}
          <div className="pt-6 border-t border-[#1a1f2e] space-y-3 mt-6">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-[#07090d] bg-gold-gradient shadow-gold"
            >
              <PhoneCall className="w-4 h-4" />
              Hubungi Sekarang via WhatsApp
            </a>
            <p className="text-center text-[11px] text-gray-500">
              Layanan CS & Reservasi 24 Jam Nonstop
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
