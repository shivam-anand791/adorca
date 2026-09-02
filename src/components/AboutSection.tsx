"use client";

import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./AboutSection.module.css";

const PRINCIPLES = [
  {
    title: "Native In-Market Search Intelligence",
    desc: "We analyze colloquial search idioms, cultural shopping habits, and regional intent clusters across 50+ international territories.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "12+ Years Algorithmic Search Resilience",
    desc: "Over a decade of engineering compounding organic growth across every major search core update and platform shift.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "100% Attribution Transparency",
    desc: "Full administrative ownership of all Google Search Console, GA4, ad accounts, tag containers, and custom Looker Studio dashboards.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Direct Advertising & Affiliate Networks",
    desc: "Direct integration with Google Ads, Amazon Partner Network, Taboola, Outbrain, CJ Affiliate, ClickBank, and ShareASale.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  return (
    <section id="about" className="floatingCardSection" ref={revealRef}>
      <div className={styles.grid}>
        {/* Left Column: Narrative */}
        <div className={`${styles.narrativeCol} ${isVisible ? styles.visible : ""}`}>
          <span className="section-subtitle">About Adorca 360</span>
          <h2 className={styles.title}>
            Built For <br />
            <span className={styles.blueHighlight}>Ambitious Growth.</span>
          </h2>
          <p className={styles.desc}>
            Adorca 360 was founded on a simple operating principle: high-performing digital marketing requires deep technical infrastructure, transparent data attribution, and localized search intelligence.
          </p>
          <p className={styles.desc}>
            Rather than relying on vanity metrics or superficial retainers, we partner with growth-focused leaders to engineer scalable organic search and programmatic channels that deliver compounding enterprise value.
          </p>
          <div className={styles.ctaRow}>
            <Link href="/#opportunity-tool" className="btn btn-primary">
              Talk to a Senior Strategist
            </Link>
          </div>

        </div>

        {/* Right Column: Key Operating Principles Grid */}
        <div className={`${styles.principlesCol} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.principlesGrid}>
            {PRINCIPLES.map((item, idx) => (
              <div key={idx} className={styles.principleCard}>
                <div className={styles.iconBox}>{item.icon}</div>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
