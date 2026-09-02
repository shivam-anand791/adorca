import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import styles from "./BlogIndex.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights | Adorca360 Blog",
  description: "Explore the latest insights, strategies, and industry analysis on global SEO, App Store Optimization, and programmatic advertising.",
};

const ARTICLES = [
  {
    id: "seo-global",
    tag: "Organic Growth",
    date: "August 24, 2026",
    readTime: "6 min read",
    title: "Unlocking Organic Growth: The Future of Global SEO",
    desc: "How localized regional intent matching and Core Web Vitals optimization are driving organic traffic acquisition across cross-border markets.",
  },
  {
    id: "aso-boosters",
    tag: "App Store Optimization",
    date: "August 18, 2026",
    readTime: "5 min read",
    title: "ASO Best Practices for App Revenue Boosting",
    desc: "Key tactical steps to optimize app store conversions, streamline onboarding, retain active users, and boost subscriptions.",
  },
  {
    id: "programmatic-ads",
    tag: "Programmatic Bidding",
    date: "August 10, 2026",
    readTime: "7 min read",
    title: "Why Programmatic Bidding is Outperforming Ad Networks",
    desc: "Leveraging algorithmic audience segmentation and real-time bids adjustments to maximize returns and lower acquisition costs.",
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
            <span className="section-subtitle">Insights &amp; Analysis</span>
            <h1 className={styles.title}>News &amp; Blogs</h1>
            <p className={styles.desc}>
              Discover tactical breakdowns and industry intelligence from our digital marketing and search growth specialists.
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
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
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
