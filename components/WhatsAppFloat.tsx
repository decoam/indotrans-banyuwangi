"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/data";

export default function WhatsAppFloat() {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo INDOTRANS! Saya ingin bertanya tentang paket wisata atau sewa kendaraan di Banyuwangi."
  )}`;

  return (
    <aside aria-label="Kontak WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-lg bg-[#131720] border border-[#1a1f2e] text-xs text-white shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Chat Admin via WhatsApp
      </div>

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp dengan Admin INDOTRANS"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-gold focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#07090d]"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
}
