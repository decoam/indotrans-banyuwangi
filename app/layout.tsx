import type { Metadata } from "next";
import { Cinzel, Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/data";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "INDOTRANS Banyuwangi â€“ Tour & Travel, Sewa Mobil Motor Terpercaya",
    template: "%s | INDOTRANS Banyuwangi",
  },
  description:
    "Layanan Tour & Travel resmi dan sewa mobil motor terbaik di Banyuwangi. Spesialis paket wisata Kawah Ijen Blue Fire, Baluran Africa van Java, De Djawatan & Pulau Merah. Armada terawat dan driver berpengalaman.",
  keywords: [
    "tour travel banyuwangi",
    "sewa mobil banyuwangi",
    "rental motor banyuwangi",
    "paket wisata kawah ijen",
    "kawah ijen blue fire tour",
    "sewa hiace banyuwangi",
    "open trip banyuwangi",
    "baluran safari tour",
    "indotrans banyuwangi",
    "wisata banyuwangi murah",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "INDOTRANS Banyuwangi â€“ Tour & Travel, Sewa Mobil Motor Terpercaya",
    description:
      "Paket wisata Kawah Ijen Blue Fire, Safari Baluran, De Djawatan & sewa mobil motor terpercaya di Banyuwangi. Armada baru, driver berlisensi, harga transparan.",
    images: [
      {
        url: "/images/hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "INDOTRANS Banyuwangi â€“ Tour & Travel Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INDOTRANS Banyuwangi â€“ Tour & Travel Terpercaya",
    description: "Paket wisata Kawah Ijen, Safari Baluran & sewa kendaraan di Banyuwangi.",
    images: ["/images/hero_bg.jpg"],
  },
  icons: {
    icon: [
      { url: "/INDOTRANS.png", type: "image/png" },
    ],
    shortcut: "/INDOTRANS.png",
    apple: "/INDOTRANS.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristAgency",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/INDOTRANS.png`,
  telephone: "+62-899-1010-528",
  email: "indotranssarana@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Brawijaya No. 88, Kebalenan",
    addressLocality: "Banyuwangi",
    addressRegion: "Jawa Timur",
    postalCode: "68416",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.2192513,
    longitude: 114.3691773,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "Rp 250.000 – Rp 1.800.000",
  description:
    "Tour & Travel resmi dan sewa mobil motor terpercaya di Banyuwangi. Spesialis paket wisata Kawah Ijen Blue Fire, Safari Baluran, De Djawatan & Pulau Merah.",
  areaServed: "Banyuwangi, Jawa Timur, Indonesia",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Wisata & Sewa Kendaraan Banyuwangi",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${cinzel.variable} ${outfit.variable} ${jakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-DEFAULT text-white antialiased">{children}</body>
    </html>
  );
}
