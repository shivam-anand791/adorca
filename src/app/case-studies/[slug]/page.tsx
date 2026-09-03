import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./CaseStudyDetail.module.css";

interface CaseStudyData {
  slug: string;
  client: string;
  tag: string;
  headline: string;
  summary: string;
  metricVal: string;
  metricLabel: string;
  beforeVal: string;
  afterVal: string;
  timeline: string;
  industry: string;
  opportunity: string;
  challenge: string[];
  strategy: {
    title: string;
    description: string;
  }[];
  results: {
    stat: string;
    label: string;
  }[];
  nextSlug: string;
  nextTitle: string;
}

const CASE_STUDIES: Record<string, CaseStudyData> = {
  "ecomart-international-growth": {
    slug: "ecomart-international-growth",
    client: "Global E-Commerce Enterprise",
    tag: "E-Commerce & International SEO",
    headline: "Scaling Cross-Border Organic Traffic by +140% Across European & LATAM Markets",
    summary:
      "How Adorca 360 restructured multi-region technical hreflang infrastructure and deployed localized search intent clusters across 50+ regional catalogs.",
    metricVal: "+140%",
    metricLabel: "Organic Traffic Growth",
    beforeVal: "12,000 / mo",
    afterVal: "28,800 / mo",
    timeline: "6 Months",
    industry: "Consumer Retail & Cross-Border Commerce",
    opportunity: "Unlocking transactional search intent across multilingual non-English markets that were previously neglected by domestic competitors.",
    challenge: [
      "Duplicate multilingual product listings caused severe ranking cannibalization across Spanish, French, and German locales.",
      "Crawl budget was wasted on faceted navigation filters, leaving core revenue category pages unindexed.",
      "High mobile bounce rate due to slow server response times and unoptimized Core Web Vitals across overseas edge locations.",
    ],
    strategy: [
      {
        title: "Technical Hreflang & Crawl Optimization",
        description:
          "Restructured the entire URL taxonomy, implemented strict server-side hreflang headers, and optimized canonical tagging to eliminate international indexing conflicts.",
      },
      {
        title: "Localized Search Intent Clustering",
        description:
          "Deployed native in-market search research across 50+ regional catalogs, targeting high-conversion transactional search terms in local dialects.",
      },
      {
        title: "Next.js Edge Performance & Core Web Vitals",
        description:
          "Re-architected product detail pages with instant edge rendering, lazy-loaded media assets, and streamlined mobile conversion funnels.",
      },
    ],
    results: [
      { stat: "+140%", label: "Increase in Organic Sessions" },
      { stat: "420+", label: "Top 3 Ranking High-Intent Keywords" },
      { stat: "2.4x", label: "Monthly E-Commerce Conversion Growth" },
    ],
    nextSlug: "finflow-programmatic-cpa",
    nextTitle: "Slashing Enterprise B2B Cost-Per-Acquisition via Algorithmic Bid Pipelines",
  },
  "finflow-programmatic-cpa": {
    slug: "finflow-programmatic-cpa",
    client: "Fintech & SaaS Platform",
    tag: "Programmatic Lead Gen & CPA Optimization",
    headline: "Slashing Enterprise B2B Cost-Per-Acquisition by 42% via Algorithmic Bid Pipelines",
    summary:
      "A performance-focused programmatic overhaul that replaced generic search bidding with automated real-time audience segment targeting across premier ad networks.",
    metricVal: "-42%",
    metricLabel: "CPA Reduction",
    beforeVal: "$78 CPA",
    afterVal: "$45 CPA",
    timeline: "90 Days",
    industry: "Financial Technology & Enterprise Software",
    opportunity: "Routing ad budget dynamically toward high-intent decision makers on specialized ad inventory rather than paying inflated rates for broad search keywords.",
    challenge: [
      "Escalating competition on primary search keywords drove B2B acquisition costs up to an unsustainable $78 per lead.",
      "Landing page conversion drop-off on complex mobile financial calculators.",
      "Attribution blindness where multi-touch discovery credit was incorrectly assigned.",
    ],
    strategy: [
      {
        title: "Algorithmic Programmatic Bidding",
        description:
          "Configured real-time bid rules across premier advertising networks (Google Ads, Taboola, Outbrain) filtering exclusively for validated high-intent decision makers.",
      },
      {
        title: "Dynamic Landing Page Funnel Optimization",
        description:
          "Engineered tailored landing flows featuring interactive ROI calculators with dynamic personalization based on referring industry segments.",
      },
      {
        title: "Server-Side Multi-Touch Attribution",
        description:
          "Built a direct server-to-server attribution pipeline to measure true lifetime value and eliminate wasted spend on low-yield touchpoints.",
      },
    ],
    results: [
      { stat: "-42%", label: "Drop in Cost-Per-Acquisition" },
      { stat: "2x", label: "Qualified Enterprise Inbound Leads" },
      { stat: "+65%", label: "Total Ad Spend Efficiency Gain" },
    ],
    nextSlug: "playsphere-app-store-ranking",
    nextTitle: "Pushing Flagship Mobile Game from Position #34 to Top 5 Category Ranking",
  },
  "playsphere-app-store-ranking": {
    slug: "playsphere-app-store-ranking",
    client: "Mobile Studio & Gaming Studio",
    tag: "Mobile App Store Optimization (ASO)",
    headline: "Pushing Flagship Mobile Game from Position #34 to Top 5 Category Ranking",
    summary:
      "Comprehensive App Store Optimization and keyword velocity acceleration that unlocked +210% daily organic download growth across 14 stores.",
    metricVal: "Top 5",
    metricLabel: "Store Category Position",
    beforeVal: "Rank #34",
    afterVal: "Rank #4",
    timeline: "4 Months",
    industry: "Mobile Gaming & Interactive Media",
    opportunity: "Leveraging under-indexed foreign localized keywords and visual A/B testing to outrank legacy competitors on the App Store and Google Play.",
    challenge: [
      "Stuck at position #34 in competitive regional App Stores despite high D30 player retention.",
      "Low visual store listing conversion rate on Android and iOS store pages.",
      "Sub-optimal keyword localization across non-English speaking global markets.",
    ],
    strategy: [
      {
        title: "Cross-Market Keyword Extraction",
        description:
          "Localized metadata, titles, subtitles, and hidden keyword fields across 14 high-growth regional app stores.",
      },
      {
        title: "Visual Conversion A/B Experimentation",
        description:
          "Tested 18 variations of custom game preview screenshots, app icons, and gameplay trailer thumbnails to maximize store page conversion rate.",
      },
      {
        title: "Organic Velocity & Review Pipeline",
        description:
          "Implemented in-app prompt triggers at moments of player delight to boost 5-star organic review velocity and store algorithm favor.",
      },
    ],
    results: [
      { stat: "#4", label: "Peak Category Ranking (Top 5)" },
      { stat: "+210%", label: "Daily Organic Downloads" },
      { stat: "350+", label: "Regional Ranked Keyword Terms" },
    ],
    nextSlug: "ecomart-international-growth",
    nextTitle: "Scaling Cross-Border Organic Traffic by +140% Across European & LATAM Markets",
  },
};

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) {
    return {
      title: "Case Study Not Found | Adorca 360",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adorca360.com";
  const url = `${siteUrl}/case-studies/${study.slug}`;

  return {
    title: `${study.headline} - Case Study`,
    description: study.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${study.headline} | Adorca 360 Case Study`,
      description: study.summary,
      url,
      siteName: "Adorca 360",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.headline,
      description: study.summary,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adorca360.com";

  // Case Study Schema (Article + BreadcrumbList)
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.headline,
    description: study.summary,
    author: {
      "@type": "Organization",
      name: "Adorca 360 Strategy Team",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Adorca 360",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/case-studies/${study.slug}`,
    },
  };

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
        name: "Case Studies",
        item: `${siteUrl}/case-studies`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.headline,
        item: `${siteUrl}/case-studies/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <main className="pageCanvas" style={{ flex: 1, padding: "calc(var(--nav-height) + 28px) 0 64px 0" }}>
        <div className={styles.container}>
          {/* Breadcrumb & Navigation */}
          <div className={styles.topNav}>
            <Link href="/case-studies" className={styles.backLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              <span>Back to All Case Studies</span>
            </Link>
          </div>

          {/* Header Banner Card */}
          <header className={styles.headerCard}>
            <div className={styles.tagRow}>
              <span className={styles.tagBadge}>{study.tag}</span>
              <span className={styles.clientBadge}>{study.client}</span>
            </div>
            <h1 className={styles.mainTitle}>{study.headline}</h1>
            <p className={styles.summaryText}>{study.summary}</p>

            {/* Quick KPI Stat Grid */}
            <div className={styles.kpiGrid}>
              <div className={styles.kpiCard}>
                <span className={styles.kpiValue}>{study.metricVal}</span>
                <span className={styles.kpiLabel}>{study.metricLabel}</span>
              </div>
              <div className={styles.kpiCard}>
                <span className={styles.kpiValue}>{study.beforeVal} &rarr; {study.afterVal}</span>
                <span className={styles.kpiLabel}>Baseline to Peak</span>
              </div>
              <div className={styles.kpiCard}>
                <span className={styles.kpiValue}>{study.timeline}</span>
                <span className={styles.kpiLabel}>Campaign Duration</span>
              </div>
              <div className={styles.kpiCard}>
                <span className={styles.kpiValue}>{study.industry}</span>
                <span className={styles.kpiLabel}>Vertical</span>
              </div>
            </div>
          </header>

          {/* Opportunity & Strategic Context */}
          <section className={styles.sectionCard}>
            <span className={styles.sectionBadge}>The Opportunity</span>
            <h2 className={styles.sectionHeading}>Market Context &amp; Growth Hypothesis</h2>
            <p className={styles.summaryText}>{study.opportunity}</p>
          </section>

          {/* Challenge & Technical Obstacles */}
          <section className={styles.sectionCard}>
            <span className={styles.sectionBadge}>The Challenge</span>
            <h2 className={styles.sectionHeading}>Obstacles &amp; Growth Bottlenecks</h2>
            <ul className={styles.challengeList}>
              {study.challenge.map((item, i) => (
                <li key={i} className={styles.challengeItem}>
                  <div className={styles.bulletDot} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Strategic Execution Framework */}
          <section className={styles.sectionCard}>
            <span className={styles.sectionBadge}>The Solution</span>
            <h2 className={styles.sectionHeading}>Engineered Growth Strategy</h2>
            <div className={styles.strategyGrid}>
              {study.strategy.map((step, i) => (
                <div key={i} className={styles.strategyCard}>
                  <div className={styles.stepNumber}>0{i + 1}</div>
                  <h3 className={styles.strategyTitle}>{step.title}</h3>
                  <p className={styles.strategyDesc}>{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Verified Outcomes & Impact */}
          <section className={styles.sectionCard}>
            <span className={styles.sectionBadge}>Impact &amp; Results</span>
            <h2 className={styles.sectionHeading}>Measurable Growth Metrics</h2>
            <div className={styles.resultsGrid}>
              {study.results.map((res, i) => (
                <div key={i} className={styles.resultBox}>
                  <span className={styles.resultStat}>{res.stat}</span>
                  <span className={styles.resultLabel}>{res.label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Next Project Navigation Strip */}
          <div className={styles.sectionCard} style={{ background: "var(--bg-subtle)" }}>
            <span className={styles.sectionBadge}>Next Case Study</span>
            <h3 className={styles.sectionHeading} style={{ fontSize: "1.3rem" }}>{study.nextTitle}</h3>
            <div style={{ marginTop: "12px" }}>
              <Link href={`/case-studies/${study.nextSlug}`} className="btn btn-primary">
                View Next Project &rarr;
              </Link>
            </div>
          </div>

          {/* Bottom Conversion CTA Strip */}
          <section className={styles.ctaStrip}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaHeading}>Ready for similar results for your business?</h3>
              <p className={styles.ctaDesc}>
                Configure your target parameters with our senior strategy team using the Growth Opportunity Tool.
              </p>
            </div>
            <Link href="/#opportunity-tool" className="btn btn-lime">
              Build My Growth Plan
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
