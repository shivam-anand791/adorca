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
  sparkline: string;
}

const CHANNELS: OrbitChannel[] = [
  {
    id: "visibility",
    label: "Visibility",
    metric: "+140%",
    metricLabel: "Organic Search Visibility",
    desc: "Technical crawl optimization, semantic clusters, and server-side hreflang tagging.",
    cx: 80,
    cy: 95,
    sparkline: "M 0 35 Q 30 30, 60 22 T 120 12 T 180 4",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "leads",
    label: "Qualified Leads",
    metric: "3.2x",
    metricLabel: "High-Intent Lead Velocity",
    desc: "High-conversion landing architectures and verified multi-channel capture funnels.",
    cx: 340,
    cy: 85,
    sparkline: "M 0 32 Q 40 28, 80 18 T 140 10 T 180 2",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "markets",
    label: "Global Markets",
    metric: "50+",
    metricLabel: "International Territories",
    desc: "Localized native search extraction across European, Americas, and APAC markets.",
    cx: 355,
    cy: 280,
    sparkline: "M 0 30 Q 45 25, 90 20 T 135 14 T 180 6",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
      </svg>
    ),
  },
  {
    id: "performance",
    label: "Performance",
    metric: "-42%",
    metricLabel: "Cost-Per-Acquisition Drop",
    desc: "Algorithmic real-time bid optimization across premier inventory networks.",
    cx: 85,
    cy: 290,
    sparkline: "M 0 5 Q 35 12, 70 20 T 130 28 T 180 34",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    id: "conversion",
    label: "Conversion",
    metric: "2.4x",
    metricLabel: "End-to-End Funnel Lift",
    desc: "High-performance Next.js web systems and privacy-compliant first-party attribution.",
    cx: 210,
    cy: 350,
    sparkline: "M 0 36 Q 30 25, 75 16 T 135 8 T 180 2",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activeChannel, setActiveChannel] = useState<OrbitChannel>(CHANNELS[0]);

  return (
    <section className={styles.heroSection} ref={revealRef} aria-label="Hero Introduction">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Editorial Headline & Staggered Content Sequence */}
          <div className={`${styles.contentCol} ${isVisible ? styles.visible : ""}`}>
            <div className={`${styles.badgeRow} ${styles.stagger1}`}>
              <span className={styles.studioBadge}>
                <span className={styles.studioDot} aria-hidden="true" />
                Performance Growth Studio
              </span>
              <span className={styles.regionPill}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z" />
                </svg>
                50+ Markets
              </span>
            </div>

            <h1 className={`${styles.heroTitle} ${styles.stagger2}`}>
              Turn Digital <br />
              <span className={styles.highlightText}>Attention Into Growth.</span>
            </h1>

            <p className={`${styles.heroDesc} ${styles.stagger3}`}>
              We combine intelligent SEO, performance marketing, content strategy and technology to help ambitious brands scale faster across global markets.
            </p>

            <div className={`${styles.ctaGroup} ${styles.stagger4}`}>
              <Link href="/#opportunity-tool" className={`btn ${styles.growthPrimaryBtn}`}>
                Launch Growth Diagnostic
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/case-studies" className={`btn ${styles.growthSecondaryBtn}`}>
                Explore Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column: Signature Growth Intelligence Dashboard */}
          <div className={`${styles.visualCol} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.dashboardCardWrapper}>
              {/* Floating AI badge */}
              <div className={styles.aiFloatingBadge} aria-hidden="true">
                <span className={styles.aiPulseDot} />
                AI Powered Intelligence
              </div>

              <div className={styles.dashboardCard} aria-label="Adorca Growth Intelligence Dashboard">
                {/* Window Top Bar */}
                <div className={styles.dashboardHeader}>
                  <div className={styles.headerDots} aria-hidden="true">
                    <span className={`${styles.dot} ${styles.dotRed}`} />
                    <span className={`${styles.dot} ${styles.dotYellow}`} />
                    <span className={`${styles.dot} ${styles.dotGreen}`} />
                  </div>
                  <div className={styles.dashboardTitleWrap}>
                    <span className={styles.radarIconDot} aria-hidden="true" />
                    <span className={styles.dashboardTitle}>Growth Intelligence</span>
                  </div>
                  <span className={styles.liveIndicator}>
                    <span className={styles.pulseDot} aria-hidden="true" /> LIVE
                  </span>
                </div>

                {/* Orbit SVG & Interactive Network */}
                <div className={styles.orbitCanvas}>
                  <svg className={styles.orbitSvg} viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    {/* Orbital Paths */}
                    <ellipse cx="210" cy="190" rx="170" ry="120" stroke="var(--growth-radar-ring-outer)" strokeWidth="1.2" strokeDasharray="4 4" className={styles.orbitOuterRing} />
                    <ellipse cx="210" cy="190" rx="110" ry="80" stroke="var(--growth-radar-ring-inner)" strokeWidth="1.5" className={styles.orbitInnerRing} />
                    <ellipse cx="210" cy="190" rx="55" ry="40" stroke="var(--growth-radar-ring-inner)" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 3" />

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
                          stroke={isActive ? "var(--growth-radar-beam)" : "var(--growth-radar-ring-outer)"}
                          strokeWidth={isActive ? "2" : "1"}
                          strokeOpacity={isActive ? "0.95" : "0.25"}
                          strokeDasharray={isActive ? "none" : "3 3"}
                          className={isActive ? styles.activeBeam : styles.idleBeam}
                        />
                      );
                    })}

                    {/* Central Hub Node */}
                    <circle cx="210" cy="190" r="32" fill="var(--growth-radar-hub-bg)" stroke="var(--growth-radar-hub-ring)" strokeWidth="2.5" className={styles.hubCircle} />
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
                        aria-label={`Inspect ${ch.label} metrics: ${ch.metric}`}
                      >
                        <span className={styles.chipIcon}>{ch.icon}</span>
                        <span className={styles.chipText}>{ch.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Channel Live KPI Card with Trend Sparkline */}
                <div className={styles.activeKpiBox}>
                  <div className={styles.kpiHeader}>
                    <span className={styles.kpiTag}>{activeChannel.label.toUpperCase()}</span>
                    <span className={styles.kpiMetric}>{activeChannel.metric}</span>
                  </div>
                  <div className={styles.kpiContentRow}>
                    <div className={styles.kpiTextGroup}>
                      <p className={styles.kpiLabel}>{activeChannel.metricLabel}</p>
                      <p className={styles.kpiDesc}>{activeChannel.desc}</p>
                    </div>
                    <div className={styles.kpiSparklineBox} aria-hidden="true">
                      <svg viewBox="0 0 180 40" className={styles.sparklineSvg} fill="none">
                        <path
                          key={activeChannel.id}
                          d={activeChannel.sparkline}
                          stroke="var(--growth-sparkline)"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          className={styles.sparklinePath}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
