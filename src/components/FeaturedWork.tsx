"use client";

import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./FeaturedWork.module.css";

export default function FeaturedWork() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  return (
    <section id="work" className="floatingCardSection" ref={revealRef}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-subtitle">Verified Case Studies</span>
        <h2 className="section-title">Measurable Impact. Proven Outcomes.</h2>
        <p className="section-desc">
          Explore how we deploy data-driven strategies to boost search visibility, optimize programmatic cost-per-acquisition, and push app store category dominance.
        </p>
      </div>

      <div className={`${styles.workContainer} ${isVisible ? styles.visible : ""}`}>
        {/* Primary Large Featured Case Study */}
        <div className={styles.featuredCase}>
          <div className={styles.featuredLeft}>
            <div className={styles.caseTagRow}>
              <span className={styles.tagBadge}>Featured Case Study</span>
              <span className={styles.categoryPill}>E-Commerce &amp; International SEO</span>
            </div>

            <h3 className={styles.featuredHeadline}>
              Scaling Cross-Border Organic Traffic by +140% Across European &amp; LATAM Markets
            </h3>

            <p className={styles.featuredSummary}>
              How we restructured multi-region technical architecture, eliminated multilingual cannibalization, and deployed localized search intent clusters across 50+ regional catalogs.
            </p>

            {/* Strategic Pillars List */}
            <div className={styles.strategyPillars}>
              <div className={styles.strategyItem}>
                <span className={styles.stratNum}>01</span>
                <div>
                  <h4 className={styles.stratTitle}>Technical Hreflang Overhaul</h4>
                  <p className={styles.stratDesc}>Strict server-side hreflang tagging eliminated regional indexing conflicts.</p>
                </div>
              </div>
              <div className={styles.strategyItem}>
                <span className={styles.stratNum}>02</span>
                <div>
                  <h4 className={styles.stratTitle}>Localized Intent Clustering</h4>
                  <p className={styles.stratDesc}>Native keyword extraction captured high-conversion transactional search volume.</p>
                </div>
              </div>
            </div>

            <Link href="/case-studies/ecomart-international-growth" className="btn btn-primary" style={{ marginTop: "12px", width: "max-content" }}>
              Read Full Case Study
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Featured Right: KPI & Visual Comparison Card */}
          <div className={styles.featuredRight}>
            <div className={styles.kpiHeroCard}>
              <span className={styles.kpiHeroLabel}>Primary Growth Outcome</span>
              <div className={styles.kpiHeroVal}>+140%</div>
              <span className={styles.kpiHeroSub}>Organic Traffic Increase</span>

              {/* SVG Trend Line */}
              <div className={styles.chartWrapper}>
                <svg className={styles.trendSvg} viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M10 85 Q 80 80, 140 50 T 240 25 T 290 10"
                    stroke="var(--blue)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx="290" cy="10" r="5" fill="var(--lime)" stroke="var(--blue)" strokeWidth="2" />
                  <line x1="10" y1="90" x2="290" y2="90" stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
              </div>

              {/* Before vs After comparison */}
              <div className={styles.compareRow}>
                <div className={styles.compareBlock}>
                  <span className={styles.compareLabel}>Baseline</span>
                  <span className={styles.compareVal}>12,000 / mo</span>
                </div>
                <span className={styles.compareArrow} aria-hidden="true">&rarr;</span>
                <div className={styles.compareBlock}>
                  <span className={styles.compareLabel}>Peak Traffic</span>
                  <span className={styles.compareValHighlight}>28,800 / mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Supporting Case Study Tiles (2 Column Grid) */}
        <div className={styles.secondaryGrid}>
          {/* Secondary Case 1: Programmatic CPA */}
          <div className={styles.secondaryCard}>
            <div className={styles.secondaryHeader}>
              <span className={styles.secondaryCategory}>Programmatic Lead Gen</span>
              <span className={styles.secondaryKpi}>-42% CPA</span>
            </div>
            <h3 className={styles.secondaryTitle}>
              Slashing B2B Cost-Per-Acquisition via Algorithmic Real-Time Bid Rules
            </h3>
            <p className={styles.secondaryDesc}>
              Replaced broad match keyword bidding with dynamic programmatic audience segmentation across premier ad inventory.
            </p>
            <div className={styles.secondaryMeta}>
              <div className={styles.metaStat}>
                <span className={styles.metaVal}>2x</span>
                <span className={styles.metaLabel}>Enterprise Leads</span>
              </div>
              <div className={styles.metaStat}>
                <span className={styles.metaVal}>$78 &rarr; $45</span>
                <span className={styles.metaLabel}>CPA Reduction</span>
              </div>
            </div>
            <Link href="/case-studies/finflow-programmatic-cpa" className={styles.cardReadLink}>
              View Case Study Breakdown &rarr;
            </Link>
          </div>

          {/* Secondary Case 2: App Store Optimization */}
          <div className={styles.secondaryCard}>
            <div className={styles.secondaryHeader}>
              <span className={styles.secondaryCategory}>Mobile App Growth (ASO)</span>
              <span className={styles.secondaryKpi}>Top 5 Rank</span>
            </div>
            <h3 className={styles.secondaryTitle}>
              Pushing Flagship Mobile Game to Top 5 Category Ranking Across 14 Stores
            </h3>
            <p className={styles.secondaryDesc}>
              Comprehensive visual listing experimentation and localized keyword acceleration driving +210% daily organic downloads.
            </p>
            <div className={styles.secondaryMeta}>
              <div className={styles.metaStat}>
                <span className={styles.metaVal}>+210%</span>
                <span className={styles.metaLabel}>Daily Installs</span>
              </div>
              <div className={styles.metaStat}>
                <span className={styles.metaVal}>Pos #34 &rarr; #4</span>
                <span className={styles.metaLabel}>Store Position</span>
              </div>
            </div>
            <Link href="/case-studies/playsphere-app-store-ranking" className={styles.cardReadLink}>
              View Case Study Breakdown &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
