"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./GrowthSystem.module.css";

interface SystemStage {
  id: string;
  step: string;
  name: string;
  category: string;
  summary: string;
  deliverables: string[];
  kpi: string;
  icon: React.ReactNode;
}

const STAGES: SystemStage[] = [
  {
    id: "seo",
    step: "01",
    name: "Search Infrastructure & SEO",
    category: "High-Intent Discovery",
    summary: "Build an unshakeable organic footprint with technical crawl optimization, semantic indexation, and multilingual hreflang architecture.",
    deliverables: ["Technical Architecture Audit", "International Hreflang Configuration", "Core Web Vitals Performance", "Keyword Intent Clustering"],
    kpi: "Rank #1 for transactional queries",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "content",
    step: "02",
    name: "Localized Semantic Content",
    category: "Relevance & Authority",
    summary: "Produce authoritative localized content hubs crafted by native linguistic analysts to outrank local incumbents in target geographies.",
    deliverables: ["Native Linguistic Localization", "Search Intent Topic Clusters", "Authority Link Architecture", "Competitive Keyword Gap Capture"],
    kpi: "50+ regional catalogs ranked",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    id: "social",
    step: "03",
    name: "Social Influence & Amplification",
    category: "Brand Trust & Demand",
    summary: "Orchestrate creator partnerships and social community channels that generate validated referral demand and organic backlinks.",
    deliverables: ["Vetted Creator Network Outreach", "Multi-Platform Brand Presence", "Social Demand Stimulation", "Community Retention Funnels"],
    kpi: "Compounding referral velocity",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "paid",
    step: "04",
    name: "Programmatic Advertising",
    category: "Real-Time Acquisition",
    summary: "Deploy algorithmic real-time bidding across premier inventory networks to capture high-intent buyers without budget leakage.",
    deliverables: ["Real-Time Bidding Automation", "High-ROAS Network Allocation", "Audience Intent Retargeting", "Ad Creative Matrix Testing"],
    kpi: "-42% Cost-Per-Acquisition",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
  },
  {
    id: "data",
    step: "05",
    name: "Multi-Touch Attribution & Data",
    category: "Attribution Transparency",
    summary: "Implement server-side first-party tracking pipelines providing unvarnished visibility into cross-channel conversion paths.",
    deliverables: ["Server-Side Tracking Pipelines", "Cross-Device Conversion Mapping", "Looker Studio Custom Dashboards", "100% Client Data Ownership"],
    kpi: "Zero vanity metrics",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    id: "conversion",
    step: "06",
    name: "Conversion Systems & Retention",
    category: "Revenue Acceleration",
    summary: "Transform inbound traffic into paying customers through high-velocity Next.js landing flows, ASO, and user onboarding optimization.",
    deliverables: ["High-Velocity Edge Landing Pages", "App Store Optimization (ASO)", "A/B Funnel Experimentation", "Customer Retention Loops"],
    kpi: "2.4x Funnel Conversion Lift",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function GrowthSystem() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activeStage, setActiveStage] = useState<SystemStage>(STAGES[0]);

  return (
    <section id="growth-system" className="darkCardSection" ref={revealRef}>
      {/* Header */}
      <div className="section-header center">
        <span className="section-subtitle">Connected Growth Infrastructure</span>
        <h2 className="section-title">One Growth System. Every Channel Connected.</h2>
        <p className="section-desc">
          Rather than treating SEO, paid media, and web development as isolated silos, we engineer a continuous acquisition system that turns search demand into measurable revenue.
        </p>
      </div>

      <div className={styles.systemContainer}>
        {/* Interactive Step Selector Strip */}
        <div className={styles.pipelineStrip} role="tablist" aria-label="Growth System Pipeline Stages">
          {STAGES.map((st, idx) => {
            const isActive = st.id === activeStage.id;
            return (
              <button
                key={st.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`stage-panel-${st.id}`}
                id={`stage-tab-${st.id}`}
                className={`${styles.stepNode} ${isActive ? styles.stepNodeActive : ""}`}
                onClick={() => setActiveStage(st)}
              >
                <div className={styles.nodeTop}>
                  <span className={styles.stepNum}>{st.step}</span>
                  <span className={styles.stepIcon}>{st.icon}</span>
                </div>
                <span className={styles.stepName}>{st.name}</span>
                {idx < STAGES.length - 1 && <span className={styles.connectorArrow} aria-hidden="true">&rarr;</span>}
              </button>
            );
          })}
        </div>

        {/* Detailed Active Stage Panel */}
        <div
          id={`stage-panel-${activeStage.id}`}
          role="tabpanel"
          aria-labelledby={`stage-tab-${activeStage.id}`}
          className={`${styles.detailCard} ${isVisible ? styles.visible : ""}`}
        >
          <div className={styles.detailGrid}>
            {/* Left: Strategic Context */}
            <div className={styles.detailMain}>
              <div className={styles.detailMeta}>
                <span className={styles.stageTag}>Stage {activeStage.step} &bull; {activeStage.category}</span>
                <span className={styles.kpiBadge}>{activeStage.kpi}</span>
              </div>
              <h3 className={styles.detailTitle}>{activeStage.name}</h3>
              <p className={styles.detailSummary}>{activeStage.summary}</p>

              <div className={styles.actionRow}>
                <Link href="/#opportunity-tool" className="btn btn-lime">
                  Deploy in Growth Plan
                </Link>
              </div>
            </div>


            {/* Right: Key Deliverables List */}
            <div className={styles.deliverablesBox}>
              <h4 className={styles.deliverablesHeading}>Engineered Deliverables</h4>
              <ul className={styles.deliverablesList}>
                {activeStage.deliverables.map((item, i) => (
                  <li key={i} className={styles.deliverableItem}>
                    <div className={styles.checkIcon} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
