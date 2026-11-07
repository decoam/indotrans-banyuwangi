"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Bagaimana cara booking paket wisata atau sewa kendaraan di INDOTRANS?",
    a: "Sangat mudah! Anda cukup memilih paket atau kendaraan yang diinginkan di website ini, lalu klik tombol 'Pesan' atau 'Kirim via WhatsApp'. Tim admin kami akan merespons dalam hitungan menit untuk konfirmasi tanggal, jumlah peserta, dan penjemputan.",
  },
  {
    q: "Apakah biaya tour Kawah Ijen sudah termasuk masker gas respirator?",
    a: "Ya, 100% SUDAH TERMASUK! Kami meminjamkan masker gas respirator standar internasional kualitas terbaik dan senter kepala (headlamp) terang secara gratis demi keselamatan dan kenyamanan pendakian Anda.",
  },
  {
    q: "Apakah rental kendaraan bisa lepas kunci (tanpa supir)?",
    a: "Bisa! Kami melayani rental mobil dan motor lepas kunci dengan syarat mudah (KTP, SIM A/C aktif, tiket kereta/pesawat, atau deposit jaminan). Proses verifikasi instan dan unit langsung diantar ke lokasi Anda.",
  },
  {
    q: "Di mana saja titik penjemputan yang dilayani secara gratis?",
    a: "Penjemputan gratis meliputi seluruh area Banyuwangi Kota, Stasiun Banyuwangi Kota (Karangasem), Stasiun Ketapang, Pelabuhan Ketapang, Bandara Blimbingsari, dan seluruh hotel di dalam radius Banyuwangi.",
  },
  {
    q: "Apakah jadwal atau destinasi tour bisa diubah sesuai keinginan (Custom Trip)?",
    a: "Tentu bisa! Kami sangat fleksibel. Anda dapat berkonsultasi langsung via WhatsApp dengan tim kami untuk mengatur rute khusus, durasi perjalanan, hingga spot kuliner khas Banyuwangi yang ingin dikunjungi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-[#0a0d14] relative">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="section-tag">
            <HelpCircle className="w-4 h-4 text-gold" />
            Tanya Jawab
          </div>
          <h2 className="font-outfit text-2xl sm:text-4xl font-extrabold text-white mb-4">
            Pertanyaan yang <span className="text-gold-gradient">Sering Diajukan</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Temukan jawaban cepat seputar reservasi, perlengkapan, dan layanan prima kami di bawah
            ini.
          </p>
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
