"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import { LogoMark } from "./Navbar";
import styles from "./Hero.module.css";

interface OrbitChannel {
  id: string;
  label: string;
  metric: string;
  metricLabel: string;
  desc: string;
  cx: number;
  cy: number;
  icon: React.ReactNode;
}

const CHANNELS: OrbitChannel[] = [
  {
    id: "seo",
    label: "Technical SEO",
    metric: "+140%",
    metricLabel: "Organic Visibility Growth",
    desc: "Crawl architecture, localized search intent clusters & Core Web Vitals",
    cx: 80,
    cy: 100,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "programmatic",
    label: "Programmatic Ads",
    metric: "-42%",
    metricLabel: "Cost-Per-Acquisition Drop",
    desc: "Algorithmic real-time bidding across premier inventory networks",
    cx: 340,
    cy: 90,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "markets",
    label: "Global Reach",
    metric: "50+",
    metricLabel: "International Markets",
    desc: "Native linguistic search extraction & multi-region deployment",
    cx: 360,
    cy: 280,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "aso",
    label: "App Growth",
    metric: "Top 5",
    metricLabel: "Store Category Ranking",
    desc: "ASO keyword velocity, review pipelines & user acquisition loops",
    cx: 90,
    cy: 290,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "conversion",
    label: "Conversion Funnels",
    metric: "2.4x",
    metricLabel: "Funnel Conversion Lift",
    desc: "High-performance Next.js systems & multi-touch attribution",
    cx: 210,
    cy: 350,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activeChannel, setActiveChannel] = useState<OrbitChannel>(CHANNELS[0]);

  return (
    <section className={`floatingCardSection ${styles.heroSection}`} ref={revealRef}>
      <div className={styles.grid}>
        {/* Left Column: Editorial Headline & Value Proposition */}
        <div className={`${styles.contentCol} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.badgeRow}>
            <span className="badge">Performance Growth Agency</span>
            <span className={styles.regionPill}>50+ Markets Supported</span>
          </div>

          <h1 className={styles.heroTitle}>
            Turn Search Into <br />
            <span className={styles.highlightText}>Sustainable Growth.</span>
          </h1>

          <p className={styles.heroDesc}>
            We combine technical SEO, programmatic media, content architecture, and international market intelligence to help ambitious brands acquire high-value customers across 50+ markets.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/#opportunity-tool" className="btn btn-primary">
              Build My Growth Plan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link href="/#work" className="btn btn-secondary">
              Explore Our Work
            </Link>
          </div>


          {/* Quick Metrics Bar */}
          <div className={styles.trustRow}>
            <div className={styles.trustItem}>
              <span className={styles.trustVal}>12+</span>
              <span className={styles.trustLabel}>Years Experience</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustVal}>100%</span>
              <span className={styles.trustLabel}>Attribution Ownership</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustVal}>Zero</span>
              <span className={styles.trustLabel}>Hidden Markups</span>
            </div>
          </div>
        </div>

        {/* Right Column: Signature Growth Orbit Intelligence Dashboard */}
        <div className={`${styles.visualCol} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.dashboardCard} aria-label="Adorca Growth Orbit Intelligence Dashboard">
            {/* Window Top Bar */}
            <div className={styles.dashboardHeader}>
              <div className={styles.headerDots}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <span className={styles.dashboardTitle}>Growth Orbit Intelligence</span>
              <span className={styles.liveIndicator}>
                <span className={styles.pulseDot} /> Live
              </span>
            </div>

            {/* Orbit SVG & Interactive Network */}
            <div className={styles.orbitCanvas}>
              <svg className={styles.orbitSvg} viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Orbital Paths */}
                <ellipse cx="210" cy="190" rx="170" ry="120" stroke="var(--blue)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="4 4" />
                <ellipse cx="210" cy="190" rx="110" ry="80" stroke="var(--lime)" strokeWidth="1.2" strokeOpacity="0.3" />

                {/* Dynamic Connection Lines from Hub to Active Node */}
                {CHANNELS.map((ch) => {
                  const isActive = ch.id === activeChannel.id;
                  return (
                    <line
                      key={ch.id}
                      x1="210"
                      y1="190"
                      x2={ch.cx}
                      y2={ch.cy}
                      stroke={isActive ? "var(--lime)" : "var(--blue)"}
                      strokeWidth={isActive ? "2" : "1"}
                      strokeOpacity={isActive ? "0.8" : "0.15"}
                      strokeDasharray={isActive ? "none" : "2 2"}
                    />
                  );
                })}

                {/* Central Hub Node */}
                <circle cx="210" cy="190" r="32" fill="var(--navy)" stroke="var(--blue)" strokeWidth="2" />
              </svg>

              {/* Central Logo in Hub */}
              <div className={styles.centralHub} aria-hidden="true">
                <LogoMark size={32} />
              </div>

              {/* Satellite Channel Chips */}
              {CHANNELS.map((ch) => {
                const isActive = ch.id === activeChannel.id;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    className={`${styles.channelChip} ${isActive ? styles.channelChipActive : ""}`}
                    style={{ left: `${(ch.cx / 420) * 100}%`, top: `${(ch.cy / 380) * 100}%` }}
                    onClick={() => setActiveChannel(ch)}
                    onMouseEnter={() => setActiveChannel(ch)}
                    aria-label={`Inspect ${ch.label} metrics`}
                  >
                    <span className={styles.chipIcon}>{ch.icon}</span>
                    <span className={styles.chipText}>{ch.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Channel Live KPI Card */}
            <div className={styles.activeKpiBox}>
              <div className={styles.kpiHeader}>
                <span className={styles.kpiTag}>{activeChannel.label}</span>
                <span className={styles.kpiMetric}>{activeChannel.metric}</span>
              </div>
              <p className={styles.kpiLabel}>{activeChannel.metricLabel}</p>
              <p className={styles.kpiDesc}>{activeChannel.desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
