import { FAQ_DATA } from "@/data/faqData";

export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adorca360.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: "Adorca 360",
    legalName: "Adorca 360 Global Growth & Search Agency",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.png`,
    description:
      "Adorca 360 is a performance growth studio combining technical SEO, programmatic advertising, content architecture, and international market intelligence across 50+ markets.",
    email: "contact@adorca360.com",
    sameAs: [
      "https://twitter.com/adorca360",
      "https://linkedin.com/company/adorca360",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core Growth & Performance Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Global Growth Marketing",
            description: "Cross-border search expansion, international SEO, and localized multi-language setup across 50+ markets.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO & Indexing",
            description: "Crawl architecture, server-side hreflang configuration, and Core Web Vitals optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Programmatic Advertising Growth",
            description: "Automated real-time bid optimization across premier advertising inventory networks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App & Revenue Boosters",
            description: "App Store Optimization (ASO) and user acquisition loops to push category rankings.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Designing & Development",
            description: "High-performance, search-optimized Next.js web applications built for conversion.",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Adorca 360",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
