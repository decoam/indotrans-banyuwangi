"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calculator, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/data";

const navLinks = [
  { href: "#home", label: "Beranda" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#tentang-kami", label: "Tentang Kami" },
  { href: "#paket-wisata", label: "Paket Wisata" },
  { href: "#sewa-armada", label: "Sewa Armada" },
  { href: "#kalkulator", label: "Hitung Biaya" },
  { href: "#galeri", label: "Galeri" },
  { href: "#testimoni", label: "Ulasan" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo INDOTRANS! Saya ingin konsultasi perjalanan / sewa armada di Banyuwangi."
  )}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090d]/90 backdrop-blur-md border-b border-[#1a1f2e] py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex flex-col group">
            <span className="font-cinzel text-xl sm:text-2xl font-black tracking-widest leading-none">
              <span className="text-white">INDO</span>
              <span className="text-gold-gradient group-hover:brightness-125 transition-all">
                TRANS
              </span>
            </span>
            <span className="text-[9px] tracking-[0.22em] text-gray-400 uppercase font-sans mt-0.5">
              Tour &bull; Travel &bull; Transport Banyuwangi
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#kalkulator"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-gold border border-gold/40 hover:bg-gold/10 transition-all"
            >
              <Calculator className="w-3.5 h-3.5" />
              Estimasi Biaya
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-[#07090d] bg-gold-gradient hover:brightness-110 shadow-gold transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chat WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-gold hover:bg-[#131720] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#1a1f2e] pt-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-200 hover:text-gold hover:bg-[#131720] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="#kalkulator"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-gold border border-gold/40 hover:bg-gold/10 transition-all"
              >
                <Calculator className="w-4 h-4" />
                Estimasi Biaya
              </a>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#07090d] bg-gold-gradient font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp Admin
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
