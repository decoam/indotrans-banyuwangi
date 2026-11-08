import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { openTrip, SITE_URL, SITE_NAME } from "@/lib/data";
import { getOpenTrip } from "@/lib/data.en";
import TripDetail from "@/components/TripDetail";

export function generateStaticParams() {
  return openTrip.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = getOpenTrip("en").find((t) => t.slug === params.slug);
  if (!tour) return {};

  const url = `${SITE_URL}/en/open-trip/${tour.slug}`;
  return {
    title: `${tour.title} – ${tour.hargaDisplay}`,
    description: `${tour.desc} Starting from ${tour.hargaDisplay}/person (Indonesian). ${tour.jadwal}.`,
    keywords: [
      tour.title,
      "open trip banyuwangi",
      `${tour.shortTitle} banyuwangi`,
      "cheap open trip banyuwangi",
    ],
    alternates: {
      canonical: url,
      languages: {
        id: `${SITE_URL}/open-trip/${tour.slug}`,
        en: url,
        "x-default": `${SITE_URL}/open-trip/${tour.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url,
      locale: "en_US",
      title: `${tour.title} | ${SITE_NAME}`,
      description: tour.desc,
      images: [{ url: tour.image, width: 1200, height: 630, alt: tour.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: tour.title,
      description: tour.desc,
      images: [tour.image],
    },
  };
}

export default function OpenTripDetailPageEn({ params }: { params: { slug: string } }) {
  const tour = getOpenTrip("en").find((t) => t.slug === params.slug);
  if (!tour) notFound();

  const url = `${SITE_URL}/en/open-trip/${tour.slug}`;
  const offers = [
    {
      "@type": "Offer",
      name: "Indonesian",
      url,
      priceCurrency: "IDR",
      price: tour.harga,
      availability: "https://schema.org/InStock",
    },
  ];
  if ("hargaWna" in tour && tour.hargaWna) {
    offers.push({
      "@type": "Offer",
      name: "Foreign",
      url,
      priceCurrency: "IDR",
      price: tour.hargaWna,
      availability: "https://schema.org/InStock",
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: tour.title,
        description: tour.desc,
        image: `${SITE_URL}${tour.image}`,
        brand: { "@type": "Brand", name: SITE_NAME },
        offers,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/en` },
          { "@type": "ListItem", position: 2, name: "Open Trip", item: `${SITE_URL}/en#paket-wisata` },
          { "@type": "ListItem", position: 3, name: tour.title, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: tour.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TripDetail tour={tour} locale="en" />
    </>
  );
}
