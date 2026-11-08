import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { paketWisata, SITE_URL, SITE_NAME } from "@/lib/data";
import TripDetail from "@/components/TripDetail";

export function generateStaticParams() {
  return paketWisata.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const tour = paketWisata.find((t) => t.slug === params.slug);
  if (!tour) return {};

  const url = `${SITE_URL}/paket-wisata/${tour.slug}`;
  return {
    title: tour.title,
    description: tour.desc,
    keywords: [
      tour.title,
      "paket wisata banyuwangi",
      "private trip banyuwangi",
      `${tour.shortTitle} banyuwangi`,
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
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

export default function PaketDetailPage({ params }: { params: { slug: string } }) {
  const tour = paketWisata.find((t) => t.slug === params.slug);
  if (!tour) notFound();

  const url = `${SITE_URL}/paket-wisata/${tour.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: tour.title,
        description: tour.desc,
        image: `${SITE_URL}${tour.image}`,
        brand: { "@type": "Brand", name: SITE_NAME },
        offers: {
          "@type": "Offer",
          url,
          priceCurrency: "IDR",
          price: tour.harga,
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Paket Wisata", item: `${SITE_URL}/#paket-wisata` },
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
      <TripDetail tour={tour} />
    </>
  );
}
