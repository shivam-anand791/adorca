"use client";

import { useIntersection } from "./utils";
import styles from "./CaseStudies.module.css";

interface CaseStudy {
  id: string;
  tag: string;
  client: string;
  headline: string;
  metricVal: string;
  metricLabel: string;
  beforeVal: string;
  afterVal: string;
  chart: React.ReactNode;
}

export default function CaseStudies() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.1 });

  // PLACEHOLDER: replace with real case study data (client name, metrics, chart) before launch
  const cases: CaseStudy[] = [
    {
      id: "case-ecomart",
      tag: "E-Commerce Growth",
      client: "EcoMart Group", /* PLACEHOLDER: replace with real client name/logo */
      headline: "Expanding organic search reach across European and LATAM markets.",
      metricVal: "+140%",
      metricLabel: "Organic Traffic Increase",
      beforeVal: "12k / mo",
      afterVal: "28.8k / mo",
      chart: (
        <svg className={styles.chartSvg} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M10 70 Q 50 65, 80 40 T 150 25 T 190 10" 
            stroke="var(--accent-primary)" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
          <path 
            d="M10 70 Q 50 65, 80 40 T 150 25 T 190 10 L 190 80 L 10 80 Z" 
            fill="url(#ecomart-grad)"
            opacity="0.1"
          />
          <circle cx="190" cy="10" r="4" fill="var(--accent-primary)" />
          <defs>
            <linearGradient id="ecomart-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--accent-primary)"/>
              <stop offset="100%" stopColor="var(--accent-primary)" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      id: "case-finflow",
      tag: "Programmatic Lead Gen",
      client: "FinFlow Solutions",
      headline: "Optimizing CPA parameters and landing flow conversions.",
      metricVal: "-42%",
      metricLabel: "Cost-Per-Acquisition Drop",
      beforeVal: "$78 CPA",
      afterVal: "$45 CPA",
      chart: (
        <svg className={styles.chartSvg} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* CPA bars showing cost reduction */}
          <rect x="25" y="15" width="20" height="55" rx="3" fill="var(--text-muted)" opacity="0.3" />
          <text x="28" y="60" fill="var(--text-secondary)" fontSize="8" fontWeight="bold">Before</text>
          
          <rect x="85" y="30" width="20" height="40" rx="3" fill="var(--accent-primary)" opacity="0.5" />
          
          <rect x="145" y="45" width="20" height="25" rx="3" fill="var(--accent-primary)" />
          <text x="149" y="60" fill="#ffffff" fontSize="8" fontWeight="bold">After</text>
          
          <line x1="10" y1="70" x2="190" y2="70" stroke="var(--border-color)" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: "case-playsphere",
      tag: "Mobile App SEO",
      client: "PlaySphere Studio",
      headline: "ASO optimization and keyword pushes for store dominance.",
      metricVal: "Top 5",
      metricLabel: "App Store Category Rank",
      beforeVal: "Pos #34",
      afterVal: "Pos #4",
      chart: (
        <svg className={styles.chartSvg} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M10 65 L 50 60 L 90 40 L 130 35 L 170 15" 
            stroke="var(--accent-green)" 
            strokeWidth="3" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="170" cy="15" r="4" fill="var(--accent-green)" />
          <line x1="10" y1="70" x2="190" y2="70" stroke="var(--border-color)" strokeWidth="1" />
          {/* Subtle dots grid backing */}
          <circle cx="50" cy="30" r="1.5" fill="var(--border-color)" />
          <circle cx="90" cy="30" r="1.5" fill="var(--border-color)" />
          <circle cx="130" cy="30" r="1.5" fill="var(--border-color)" />
          <circle cx="170" cy="30" r="1.5" fill="var(--border-color)" />
        </svg>
      )
    }
  ];

  return (
    <section id="case-studies" className="floatingCardSection" ref={revealRef}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-subtitle">Case Studies</span>
        <h2 className="section-title">Real Results. Proven Metrics.</h2>
        <p className="section-desc">
          Explore how we deploy data-driven strategies to boost conversions, traffic index, and organic app installs for industry leaders.
        </p>
      </div>

      {/* Case Grid */}
      <div className={`${styles.grid} ${isVisible ? styles.visible : ""}`}>
        {cases.map((c, idx) => (
          <div 
            key={c.id} 
            className={styles.card}
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Tag and Client Name */}
            <div className={styles.cardHeader}>
              <span className={styles.tag}>{c.tag}</span>
              <span className={styles.client}>{c.client}</span>
            </div>

            {/* Headline */}
            <h3 className={styles.headline}>{c.headline}</h3>

            {/* Chart Area */}
            <div className={styles.chartBox}>
              {c.chart}
            </div>

            {/* Metrics display */}
            <div className={styles.metricsBox}>
              <div className={styles.metricBig}>
                <span className={styles.metricVal}>{c.metricVal}</span>
                <span className={styles.metricLabel}>{c.metricLabel}</span>
              </div>

              {/* Before vs After comparison row */}
              <div className={styles.compareRow}>
                <div className={styles.compareItem}>
                  <span className={styles.compareLabel}>Before</span>
                  <span className={styles.compareValue}>{c.beforeVal}</span>
                </div>
                <div className={styles.compareArrow}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
                <div className={styles.compareItem}>
                  <span className={styles.compareLabel}>After</span>
                  <span className={styles.compareValueHighlight}>{c.afterVal}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
