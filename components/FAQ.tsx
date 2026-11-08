"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { getDict, type Locale } from "@/lib/i18n";

export default function FAQ({ locale = "id" }: { locale?: Locale }) {
  const d = getDict(locale);
  const faqs = d.faq.items;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#0a0d14] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag">
            <HelpCircle className="w-4 h-4 text-gold" />
            {d.faq.tag}
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            {d.faq.title1} <span className="text-gold-gradient">{d.faq.title2}</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">{d.faq.subtitle}</p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-dark overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-outfit text-sm sm:text-base font-semibold text-white hover:text-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#1a1f2e] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
