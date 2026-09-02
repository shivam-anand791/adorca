import { FAQ_DATA } from "@/data/faqData";

export default function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adorca360.com";

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: "Adorca 360",
    legalName: "Adorca 360 Digital Search & Performance Engineering Studio",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/og-image.png`,
    description:
      "Adorca 360 is a digital growth studio combining technical SEO, programmatic distribution, localized search intent architectures, and conversion engineering across 50+ global markets.",
    email: "contact@adorca360.com",
    sameAs: [
      "https://twitter.com/adorca360",
      "https://linkedin.com/company/adorca360",
    ],
    areaServed: [
      "North America",
      "Western Europe",
      "DACH",
      "Asia-Pacific",
      "Latin America",
      "Middle East & Africa",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core Growth & Performance Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Global Growth Marketing & Multilingual SEO",
            description: "Cross-border search dominance, native intent clustering, and server-side hreflang architecture in 50+ markets.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Technical SEO & Crawl Optimization",
            description: "Crawl architecture, JS rendering optimization, schema graph engineering, and Core Web Vitals sprints.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Programmatic Media Distribution",
            description: "Automated real-time bid optimization across premier advertising exchanges and direct performance networks.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App Store Category Dominance (ASO)",
            description: "Keyword velocity, store page conversion optimization, and app user acquisition funnels.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Conversion Architecture & Web Systems",
            description: "High-performance, search-optimized Next.js web applications built for conversion rate optimization.",
          },
        },
      ],
    },
  };

  // 2. WebSite Schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Adorca 360",
    description: "Digital search and performance engineering studio for ambitious growth brands.",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    inLanguage: "en-US",
  };

  // 3. BreadcrumbList Schema (Homepage)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Case Studies",
        item: `${siteUrl}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Insights",
        item: `${siteUrl}/blog`,
      },
    ],
  };

  // 4. FAQPage Schema
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
