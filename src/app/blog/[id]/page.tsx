import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./BlogDetail.module.css";

interface ArticleData {
  id: string;
  tag: string;
  date: string;
  isoDate: string;
  readTime: string;
  title: string;
  lead: string;
  authorName: string;
  authorRole: string;
  heroVisualType: "global-seo" | "aso-dominance" | "programmatic-bidding";
  body: React.ReactNode;
  relatedIds: string[];
}

const ARTICLES_DATA: Record<string, ArticleData> = {
  "seo-global": {
    id: "seo-global",
    tag: "Organic Growth",
    date: "August 24, 2026",
    isoDate: "2026-08-24T09:00:00Z",
    readTime: "6 min read",
    authorName: "Adorca 360 Research Team",
    authorRole: "Technical Search & Systems Engineering",
    heroVisualType: "global-seo",
    title: "Unlocking Organic Growth: The Future of Global Multi-Region SEO",
    lead: "How localized regional intent matching, server-side hreflang taxonomy, and Core Web Vitals optimization drive sustainable organic traffic acquisition across cross-border markets.",
    body: (
      <>
        <p>
          In the rapidly evolving landscape of international search, standard keyword translation tactics are obsolete. As modern search engines prioritize semantic intent matching and evaluate websites on strict performance metrics like Core Web Vitals, enterprise organic expansion requires a specialized, global-first architecture.
        </p>

        <h3>1. The Shift to Semantic Intent Mapping</h3>
        <p>
          Traditional SEO relied heavily on verbatim keyword densities. Today, search algorithms analyze the contextual relationships between queries, regional dialects, and transactional urgency. For cross-border brands, translating words is insufficient—growth teams must perform localized intent clustering, studying how native users formulate queries based on regional idioms and colloquial search behaviors.
        </p>

        <blockquote>
          &ldquo;Translating a keyword is not the same as translating the search intent. Real global growth happens when you engineer content systems that match how regional consumers think and transact.&rdquo;
        </blockquote>

        <h3>2. Core Web Vitals as an International Ranking Pillar</h3>
        <p>
          Page experience is a foundational ranking parameter. Slow Time to First Byte (TTFB), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) degrade search placement across international data networks. Deploying modern server-rendered frameworks with global edge CDN caching allows brands to serve content in under 200ms anywhere in the world.
        </p>

        <h3>3. Multi-Region Technical Indexing Best Practices</h3>
        <ul>
          <li>
            <strong>Server-Side Hreflang Tags:</strong> Implement strict hreflang headers in response payloads to prevent regional cannibalization and ensure crawlers map locale variations accurately.
          </li>
          <li>
            <strong>Subdirectory Architecture:</strong> Prefer serving international setups in subdirectory paths (e.g., <code>/es/</code> or <code>/de/</code>) to consolidate domain authority and link equity into a single root domain.
          </li>
          <li>
            <strong>Schema Graph Localization:</strong> Deploy JSON-LD structured data with regional Organization and LocalBusiness markup to claim rich search snippets across regional SERPs.
          </li>
        </ul>

        <h3>4. Connecting Search Strategy to Measurable Revenue</h3>
        <p>
          Organic visibility is only valuable when it converts into pipeline. By connecting Google Search Console and GA4 event pipelines to custom Looker Studio dashboards, growth leaders gain real-time transparency over organic ROI and keyword attribution across every target market.
        </p>
      </>
    ),
    relatedIds: ["aso-boosters", "programmatic-ads"],
  },

  "aso-boosters": {
    id: "aso-boosters",
    tag: "App Store Optimization",
    date: "August 18, 2026",
    isoDate: "2026-08-18T09:00:00Z",
    readTime: "5 min read",
    authorName: "Adorca 360 Research Team",
    authorRole: "App Store & Mobile Acquisition",
    heroVisualType: "aso-dominance",
    title: "ASO Best Practices for App Revenue Boosting & Category Dominance",
    lead: "Key tactical steps to optimize app store conversion velocity, streamline onboarding funnels, and boost organic store ranking algorithms.",
    body: (
      <>
        <p>
          Acquiring mobile app users is only half the battle. To drive sustainable revenue growth, apps must achieve high visibility in app stores and convert store impressions into active, paying subscribers. App Store Optimization (ASO) is the compounding organic engine that powers this acquisition pipeline.
        </p>

        <h3>1. Visual Conversion Rate Optimization</h3>
        <p>
          Your app icon, screenshots, and preview videos are the primary visual touchpoints. Standard screenshot galleries fail to communicate direct value. A/B testing screenshot captions, highlighting core features within the first two slides, and selecting vibrant contrasting brand palettes can boost install conversion velocity by up to 35%.
        </p>

        <blockquote>
          &ldquo;Users decide to download an app in less than 3 seconds. If your visual messaging doesn&apos;t address their primary workflow or entertainment desire instantly, they bounce.&rdquo;
        </blockquote>

        <h3>2. Strategic Keyword Indexing and Taxonomy</h3>
        <p>
          App store search algorithms index the app title, subtitle, and keyword metadata fields. Maximize these boundaries:
        </p>
        <ul>
          <li>
            <strong>App Title:</strong> Place your primary high-volume keyword alongside your brand name for maximum indexing weight.
          </li>
          <li>
            <strong>Subtitle:</strong> Utilize secondary high-intent action verbs and core value propositions.
          </li>
          <li>
            <strong>Keyword Field &amp; Localization:</strong> Localize keyword packages for every active storefront to capture native search phrases.
          </li>
        </ul>

        <h3>3. Post-Install Conversion Funnel Acceleration</h3>
        <p>
          ASO does not end at the download. A frictionless onboarding flow, immediate value demonstration, and streamlined paywall presentation prevent early uninstall spikes—a metric that store algorithms monitor closely to determine search ranking permanence.
        </p>
      </>
    ),
    relatedIds: ["seo-global", "programmatic-ads"],
  },

  "programmatic-ads": {
    id: "programmatic-ads",
    tag: "Programmatic Bidding",
    date: "August 10, 2026",
    isoDate: "2026-08-10T09:00:00Z",
    readTime: "7 min read",
    authorName: "Adorca 360 Research Team",
    authorRole: "Programmatic Media & Bid Engineering",
    heroVisualType: "programmatic-bidding",
    title: "Why Programmatic Bidding is Outperforming Generic Ad Networks",
    lead: "Leveraging algorithmic audience segmentation and real-time bid adjustments to eliminate budget leakage and slash acquisition costs.",
    body: (
      <>
        <p>
          For years, digital advertisers relied on manual bid parameters and static audience segments inside standard ad networks. As consumer behaviors and digital journeys fluctuate in real time, static campaigns suffer from massive budget leakage. Programmatic bidding offers an algorithmic, real-time alternative that optimizes bid values in milliseconds.
        </p>

        <h3>1. Real-Time Bidding (RTB) Architecture Explained</h3>
        <p>
          Programmatic platforms purchase ad inventory through automated micro-auctions. When a user loads a publisher page, the platform evaluates regional intent, device taxonomy, and behavioral history, submitting a calibrated bid and rendering a personalized creative in under 100 milliseconds.
        </p>

        <blockquote>
          &ldquo;By automating the valuation process for every single impression, programmatic pipelines allocate media spend only to high-conversion probability opportunities.&rdquo;
        </blockquote>

        <h3>2. First-Party Audience Cohorts &amp; Intent Triggers</h3>
        <p>
          Modern programmatic frameworks leverage first-party data layers to construct dynamic audience cohorts. Instead of targeting broad, generic demographic bands, algorithmic systems activate on high-intent signals such as verified cart abandonment, search research loops, and cross-channel content consumption.
        </p>

        <h3>3. Direct Partner Network Integrations</h3>
        <p>
          By connecting directly to premier ad inventory exchanges and performance networks (Google Ads, Amazon Partner Network, Taboola, Outbrain, CJ Affiliate, ClickBank, ShareASale), programmatic pipelines bypass intermediary markups, lowering Effective Cost Per Mille (eCPM) while maximizing conversion return on ad spend (ROAS).
        </p>
      </>
    ),
    relatedIds: ["seo-global", "aso-boosters"],
  },
};

export async function generateStaticParams() {
  return Object.keys(ARTICLES_DATA).map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = ARTICLES_DATA[id];

  if (!article) {
    return {
      title: "Article Not Found | Adorca 360",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adorca360.com";
  const url = `${siteUrl}/blog/${article.id}`;

  return {
    title: `${article.title} | Adorca 360 Insights`,
    description: article.lead,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.lead,
      url,
      siteName: "Adorca 360",
      type: "article",
      publishedTime: article.isoDate,
      authors: [article.authorName],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.lead,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const article = ARTICLES_DATA[id];

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedIds
    .map((relId) => ARTICLES_DATA[relId])
    .filter(Boolean);

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adorca360.com";

  // Article JSON-LD Structured Data for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.lead,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    author: {
      "@type": "Organization",
      name: article.authorName,
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
      "@id": `${siteUrl}/blog/${article.id}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Navbar />

      <main className={styles.mainWrapper}>
        <div className="container">
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumbs} aria-label="Breadcrumb Navigation">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.separator}>/</span>
            <Link href="/blog" className={styles.breadcrumbLink}>Insights</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.activeBreadcrumb}>{article.tag}</span>
          </nav>

          <div className={styles.layout}>
            {/* Left Content Area */}
            <article className={styles.article}>
              {/* Category Tag & Meta */}
              <div className={styles.metaRow}>
                <span className={styles.tag}>{article.tag}</span>
                <span className={styles.dot}>•</span>
                <time dateTime={article.isoDate} className={styles.date}>{article.date}</time>
                <span className={styles.dot}>•</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>

              {/* Title */}
              <h1 className={styles.title}>{article.title}</h1>

              {/* Author Attribution Block */}
              <div className={styles.authorBlock}>
                <div className={styles.authorAvatar} aria-hidden="true">
                  <span>A360</span>
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{article.authorName}</span>
                  <span className={styles.authorRole}>{article.authorRole}</span>
                </div>
              </div>

              {/* Hero Graphic Visual Banner */}
              <div className={styles.heroVisualBanner} aria-label={`${article.title} Visual Overview`}>
                <div className={styles.heroVisualHeader}>
                  <span className={styles.heroBadge}>Strategic Brief • {article.tag}</span>
                  <span className={styles.heroRead}>{article.readTime}</span>
                </div>
                <div className={styles.heroVisualGraphic}>
                  <svg className={styles.visualSvg} viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <circle cx="80" cy="80" r="45" stroke="var(--blue)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
                    <circle cx="80" cy="80" r="16" fill="var(--navy)" stroke="var(--lime)" strokeWidth="2" />
                    <line x1="125" y1="80" x2="260" y2="80" stroke="var(--blue)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="300" cy="80" r="35" stroke="var(--lime)" strokeWidth="1.5" strokeOpacity="0.6" />
                    <circle cx="300" cy="80" r="12" fill="var(--navy)" stroke="var(--blue)" strokeWidth="2" />
                    <line x1="335" y1="80" x2="475" y2="80" stroke="var(--blue)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <circle cx="510" cy="80" r="45" stroke="var(--blue)" strokeWidth="1.5" strokeOpacity="0.4" strokeDasharray="3 3" />
                    <circle cx="510" cy="80" r="16" fill="var(--navy)" stroke="var(--lime)" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Lead Paragraph */}
              <p className={styles.lead}>{article.lead}</p>

              {/* Divider */}
              <div className={styles.divider} />

              {/* Body Content */}
              <div className={styles.body}>{article.body}</div>

              {/* Article Footer & Internal Links Callout */}
              <div className={styles.articleFooter}>
                <div className={styles.footerShareBlock}>
                  <span className={styles.footerShareLabel}>Explore Related Solutions:</span>
                  <div className={styles.internalLinksGroup}>
                    <Link href="/case-studies" className="btn btn-secondary">
                      View Case Studies &rarr;
                    </Link>
                    <Link href="/#opportunity-tool" className="btn btn-primary">
                      Run Diagnostic Tool &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Related Articles Section */}
              {relatedArticles.length > 0 && (
                <div className={styles.relatedSection}>
                  <h3 className={styles.relatedHeaderTitle}>Related Strategic Insights</h3>
                  <div className={styles.relatedGrid}>
                    {relatedArticles.map((rel) => (
                      <div key={rel.id} className={styles.relatedCardItem}>
                        <div className={styles.relMetaRow}>
                          <span className={styles.relTag}>{rel.tag}</span>
                          <span className={styles.relReadTime}>{rel.readTime}</span>
                        </div>
                        <h4 className={styles.relTitle}>
                          <Link href={`/blog/${rel.id}`}>{rel.title}</Link>
                        </h4>
                        <p className={styles.relDesc}>{rel.lead}</p>
                        <Link href={`/blog/${rel.id}`} className={styles.relLink}>
                          Read Article &rarr;
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Right Sticky Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.ctaCard}>
                <span className={styles.sidebarSubtitle}>Growth Infrastructure</span>
                <h3 className={styles.sidebarTitle}>Need Technical Search Intelligence?</h3>
                <p className={styles.sidebarDesc}>
                  Our senior strategists analyze crawl budgets, hreflang taxonomies, and programmatic pipelines for high-growth brands.
                </p>
                <Link href="/#opportunity-tool" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Launch Diagnostic Tool
                </Link>
              </div>

              <div className={styles.relatedCard}>
                <h4 className={styles.relatedTitle}>Core Capabilities</h4>
                <ul className={styles.relatedList}>
                  <li><Link href="/#services" className={styles.relatedLink}>Technical SEO &amp; Crawl Optimization</Link></li>
                  <li><Link href="/#services" className={styles.relatedLink}>Programmatic Media Distribution</Link></li>
                  <li><Link href="/#services" className={styles.relatedLink}>App Store Category Dominance</Link></li>
                  <li><Link href="/#services" className={styles.relatedLink}>Attribution &amp; CRO Architecture</Link></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
