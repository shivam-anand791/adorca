"use client";

import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  return (
    <section className="darkCardSection" ref={revealRef} style={{ position: "relative" }}>
      {/* Ambient Orbit Decorative Graphic */}
      <div className={styles.ambientOrbit} aria-hidden="true">
        <svg className={styles.orbitSvg} viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="300" cy="200" rx="260" ry="140" stroke="var(--blue)" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="6 6" />
          <ellipse cx="300" cy="200" rx="160" ry="80" stroke="var(--lime)" strokeWidth="1.2" strokeOpacity="0.25" />
          <circle cx="140" cy="120" r="4" fill="var(--lime)" />
          <circle cx="460" cy="280" r="4" fill="var(--blue)" />
        </svg>
      </div>

      <div className={`${styles.contentWrapper} ${isVisible ? styles.visible : ""}`}>
        <span className="section-subtitle">Start Your Expansion</span>
        <h2 className={styles.title}>
          Ready To Build <br />
          <span className={styles.highlightText}>What&apos;s Next?</span>
        </h2>
        <p className={styles.desc}>
          Tell us where your business is today. We&apos;ll show you where your next organic growth and international revenue opportunity lies.
        </p>

        <div className={styles.actionsRow}>
          <Link href="/#opportunity-tool" className="btn btn-lime">
            Talk to a Strategist
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <a href="mailto:contact@adorca360.com" className="btn btn-secondary">
            contact@adorca360.com
          </a>
        </div>


        <div className={styles.guaranteeRow}>
          <span className={styles.guaranteeItem}>&bull; 100% Attribution Transparency</span>
          <span className={styles.guaranteeItem}>&bull; Zero Vanity Metrics</span>
          <span className={styles.guaranteeItem}>&bull; 50+ Markets Supported</span>
        </div>
      </div>
    </section>
  );
}
