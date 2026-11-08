"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function TripFAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  if (!items?.length) return null;

  return (
    <div className="space-y-3">
      {items.map((faq, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className="rounded-xl bg-[#131720] border border-[#1a1f2e] overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-semibold text-white hover:text-gold transition-colors"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-gold shrink-0" />
                {faq.q}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gold shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#1a1f2e] pt-3">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
