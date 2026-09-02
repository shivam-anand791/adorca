"use client";

import { useIntersection, useCountUp } from "./utils";
import styles from "./Hero.module.css";
import { LogoMark } from "./Navbar";

export default function Hero() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.1 });
  const countVal = useCountUp(79, 1400, isVisible);

  return (
    <section className={`floatingCardSection ${styles.hero}`} ref={revealRef}>
      <div className={styles.heroContainer}>
        {/* Left Column: Copywriting */}
        <div className={styles.content}>
          <span className={`badge ${styles.entranceBadge}`}>Welcome to Adorca360</span>
          
          <h1 className={`${styles.title} ${styles.entranceTitle}`}>
            Global Search <br />
            Dominance. <span className={styles.purpleText}>Accelerated.</span>
          </h1>

          <p className={`${styles.description} ${styles.entranceDesc}`}>
            We engineer high-performance SEO campaigns, programmatic advertising channels, and localized digital funnels designed to scale organic traffic and acquire customers across 50+ international markets.
          </p>

          <div className={`${styles.ctas} ${styles.entranceCtas}`}>
            <a href="#contact" className="btn btn-primary">
              See Your Growth Plan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#service" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </div>

        {/* Right Column: Signature Connected Node Graphic */}
        <div className={`${styles.visual} ${styles.visualEntrance}`}>
          <div className={styles.nodesContainer}>
            {/* SVG Connection Lines */}
            <svg className={styles.connectorSvg} viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="line-grad-center" x1="220" y1="220" x2="80" y2="110" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--accent-primary)" stopOpacity="0.6" />
                  <stop offset="1" stopColor="var(--accent-primary)" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Diagonal and radial connector lines to each satellite chip */}
              <line x1="220" y1="220" x2="85" y2="115" className={styles.line} />
              <line x1="220" y1="220" x2="355" y2="115" className={styles.line} />
              <line x1="220" y1="220" x2="220" y2="45" className={styles.line} />
              <line x1="220" y1="220" x2="80" y2="330" className={styles.line} />
              <line x1="220" y1="220" x2="360" y2="330" className={styles.line} />

              {/* Glowing anchor dots */}
              <circle cx="85" cy="115" r="4" className={styles.lineDot} />
              <circle cx="355" cy="115" r="4" className={styles.lineDot} />
              <circle cx="220" cy="45" r="4" className={styles.lineDot} />
              <circle cx="80" cy="330" r="4" className={styles.lineDot} />
              <circle cx="360" cy="330" r="4" className={styles.lineDot} />
            </svg>

            {/* Central Node: Adorca360 Rounded Square with Gradient */}
            <div className={`${styles.node} ${styles.centerNode}`} aria-label="Adorca360 Central Hub">
              <div className={styles.centerLogo}>
                <LogoMark size={38} />
              </div>
            </div>

            {/* Satellite Chip 1: SEO */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipSeo}`}>
              <div className={`${styles.chipIconWrapper} ${styles.iconSeo}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <span>SEO</span>
            </div>

            {/* Satellite Chip 2: App Growth */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipApp}`}>
              <div className={`${styles.chipIconWrapper} ${styles.iconApp}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <span>App Growth</span>
            </div>

            {/* Satellite Chip 3: Social */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipSocial}`}>
              <div className={`${styles.chipIconWrapper} ${styles.iconSocial}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span>Social</span>
            </div>

            {/* Satellite Chip 4: Programmatic */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipProg}`}>
              <div className={`${styles.chipIconWrapper} ${styles.iconProg}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="12 8 8 12 16 12 12 8"></polygon>
                </svg>
              </div>
              <span>Programmatic</span>
            </div>

            {/* Satellite Chip 5: Lead Gen */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipLead}`}>
              <div className={`${styles.chipIconWrapper} ${styles.iconLead}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <span>Lead Gen</span>
            </div>
          </div>

          {/* Floating animated metrics stats widget */}
          <div className={styles.statsOverlay}>
            <div className={styles.statsValueRow}>
              <span className={styles.statsVal}>{countVal}%</span>
              <span className={styles.trendArrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
              </span>
            </div>
            <span className={styles.statsLabel}>increase in overall organic traffic</span>
          </div>
        </div>
      </div>
    </section>
  );
}
