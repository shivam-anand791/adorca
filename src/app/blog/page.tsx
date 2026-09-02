import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./BlogIndex.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strategic Intelligence & Insights | Adorca 360",
  description:
    "Explore tactical breakdowns and performance engineering analysis on global SEO, App Store Optimization, and programmatic advertising.",
  alternates: {
    canonical: "https://adorca360.com/blog",
  },
  openGraph: {
    title: "Strategic Intelligence & Insights | Adorca 360",
    description:
      "Explore tactical breakdowns and performance engineering analysis on global SEO, App Store Optimization, and programmatic advertising.",
    url: "https://adorca360.com/blog",
    siteName: "Adorca 360",
    type: "website",
  },
};

const ARTICLES = [
  {
    id: "seo-global",
    tag: "Organic Growth",
    date: "August 24, 2026",
    readTime: "6 min read",
    title: "Unlocking Organic Growth: The Future of Global Multi-Region SEO",
    desc: "How localized regional intent matching, server-side hreflang tagging, and Core Web Vitals optimization drive sustainable organic traffic acquisition across cross-border markets.",
  },
  {
    id: "aso-boosters",
    tag: "App Store Optimization",
    date: "August 18, 2026",
    readTime: "5 min read",
    title: "ASO Best Practices for App Revenue Boosting & Category Dominance",
    desc: "Key tactical steps to optimize app store conversion velocity, streamline onboarding funnels, and boost organic store algorithms.",
  },
  {
    id: "programmatic-ads",
    tag: "Programmatic Bidding",
    date: "August 10, 2026",
    readTime: "7 min read",
    title: "Why Programmatic Bidding is Outperforming Generic Ad Networks",
    desc: "Leveraging algorithmic audience segmentation and real-time bid adjustments to eliminate budget leakage and slash acquisition costs.",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className={styles.mainWrapper}>
        <div className="container">
          {/* Header */}
          <div className={styles.header}>
            <span className="section-subtitle">Strategic Intelligence &amp; Analysis</span>
            <h1 className={styles.title}>Insights &amp; Articles</h1>
            <p className={styles.desc}>
              Discover tactical breakdowns and industry intelligence from our digital search and programmatic growth specialists.
            </p>
          </div>

          {/* Articles Grid */}
          <div className={styles.grid}>
            {ARTICLES.map((article) => (
              <article key={article.id} className={styles.card}>
                <div className={styles.metaRow}>
                  <span className={styles.tag}>{article.tag}</span>
                  <span className={styles.dot}>•</span>
                  <span className={styles.date}>{article.date}</span>
                </div>
                <h2 className={styles.cardTitle}>
                  <Link href={`/blog/${article.id}`}>{article.title}</Link>
                </h2>
                <p className={styles.cardDesc}>{article.desc}</p>
                <div className={styles.cardFooter}>
                  <span className={styles.readTime}>{article.readTime}</span>
                  <Link href={`/blog/${article.id}`} className={styles.readLink}>
                    Read Intelligence Brief
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
