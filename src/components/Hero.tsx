"use client";

import { useIntersection, useCountUp } from "./utils";
import styles from "./Hero.module.css";

export default function Hero() {
  const [revealRef, isVisible] = useIntersection();
  const countVal = useCountUp(79, 1500, isVisible);

  return (
    <section className={`floatingCardSection ${styles.hero}`} ref={revealRef}>
      <div className={styles.heroContainer}>
        {/* Left Column: Copywriting */}
        <div className={styles.content}>
          <span className="badge">Welcome to Adorca360</span>
          <h1 className={styles.title}>
            Global Search <br />
            Dominance. <span className={styles.purpleText}>Accelerated.</span>
          </h1>
          <p className={styles.description}>
            We engineer high-performance SEO campaigns, programmatic advertising channels, and localized digital funnels designed to scale organic traffic and acquire customers across 50+ international markets.
          </p>
          <div className={styles.ctas}>
            <a href="#contact" className="btn btn-primary">
              Get Started Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#service" className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Connected Node Graphic */}
        <div className={styles.visual}>
          <div className={styles.nodesContainer}>
            {/* SVG Connection Lines */}
            <svg className={styles.connectorSvg} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="250" y1="250" x2="100" y2="130" className={styles.line} />
              <line x1="250" y1="250" x2="400" y2="140" className={styles.line} />
              <line x1="250" y1="250" x2="90" y2="340" className={styles.line} />
              <line x1="250" y1="250" x2="390" y2="350" className={styles.line} />
              <line x1="250" y1="250" x2="250" y2="60" className={styles.line} />
              
              {/* Outer pulsing rings on line ends */}
              <circle cx="100" cy="130" r="6" className={styles.lineDot} />
              <circle cx="400" cy="140" r="6" className={styles.lineDot} />
              <circle cx="90" cy="340" r="6" className={styles.lineDot} />
              <circle cx="390" cy="350" r="6" className={styles.lineDot} />
              <circle cx="250" cy="60" r="6" className={styles.lineDot} />
            </svg>

            {/* Central Node */}
            <div className={`${styles.node} ${styles.centerNode}`}>
              <div className={styles.centerLogo}>
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeDasharray="70 20"/>
                  <path d="M14 26L20 14L26 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 22H23" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            {/* Outer Chip 1: SEO */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipSeo}`}>
              <svg className={styles.chipIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <span>SEO</span>
            </div>

            {/* Outer Chip 2: Social Growth */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipSocial}`}>
              <svg className={styles.chipIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>Social</span>
            </div>

            {/* Outer Chip 3: Programmatic */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipProg}`}>
              <svg className={styles.chipIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" y1="12" x2="18" y2="12"></line>
                <line x1="6" y1="12" x2="2" y2="12"></line>
                <line x1="12" y1="6" x2="12" y2="2"></line>
                <line x1="12" y1="22" x2="12" y2="18"></line>
              </svg>
              <span>Programmatic</span>
            </div>

            {/* Outer Chip 4: Lead Gen */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipLead}`}>
              <svg className={styles.chipIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
              <span>Lead Gen</span>
            </div>

            {/* Outer Chip 5: App Growth */}
            <div className={`${styles.node} ${styles.outerChip} ${styles.chipApp}`}>
              <svg className={styles.chipIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
              </svg>
              <span>App Growth</span>
            </div>
          </div>

          {/* Floating animated metrics stats widget */}
          <div className={styles.statsOverlay}>
            <div className={styles.statsValueRow}>
              <span className={styles.statsVal}>{countVal}%</span>
              <span className={styles.trendArrow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
