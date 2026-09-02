"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./Services.module.css";

interface ServiceCapability {
  title: string;
  desc: string;
  deliverables: string[];
}

interface ServicePillar {
  id: string;
  pillarNum: string;
  title: string;
  subtitle: string;
  summary: string;
  capabilities: ServiceCapability[];
  color: string;
}

const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "acquire",
    pillarNum: "01",
    title: "ACQUIRE",
    subtitle: "High-Intent Customer Acquisition",
    summary:
      "Capture in-market buyers across organic search, programmatic bidding, and cross-border discovery pipelines with precision indexing and zero budget leakage.",
    color: "var(--blue)",
    capabilities: [
      {
        title: "Technical SEO & Indexing",
        desc: "Restructure crawl efficiency, resolve hreflang conflicts, and guarantee Core Web Vitals excellence to dominate top search positions.",
        deliverables: ["Architecture Audits", "Hreflang Configuration", "Core Web Vitals Sprint"],
      },
      {
        title: "Lead Generation Pipelines",
        desc: "Acquire verified, high-converting B2B and consumer prospects through custom landing funnels and programmatic audience matching.",
        deliverables: ["High-Intent Inbound Funnels", "Conversion Flow Optimization", "Lead Scoring Models"],
      },
      {
        title: "Programmatic Advertising",
        desc: "Target the exact audience segments at scale using automated, algorithmic real-time bid optimization on top ad networks.",
        deliverables: ["Real-Time Bidding", "High-ROAS Allocation", "Audience Retargeting"],
      },
      {
        title: "Global Growth Marketing",
        desc: "Scale your footprint across 50+ international markets with localized regional bidding and multilingual search architectures.",
        deliverables: ["Cross-Border Strategy", "International SEO", "Regional Intent Mapping"],
      },
    ],
  },
  {
    id: "amplify",
    pillarNum: "02",
    title: "AMPLIFY",
    subtitle: "Brand Authority & Demand Stimulation",
    summary:
      "Transform search visibility into compounding brand equity through verified creator partnerships, social authority, and multi-channel marketing consulting.",
    color: "var(--lime)",
    capabilities: [
      {
        title: "Digital Marketing Strategy",
        desc: "Deploy full-funnel marketing campaigns backed by data-driven consulting, channel priority scoring, and continuous ROI audits.",
        deliverables: ["Cross-Channel Strategy", "Campaign Audits", "Growth Benchmarking"],
      },
      {
        title: "Social Media Marketing",
        desc: "Build engaged digital communities and orchestrate organic audience acquisition campaigns across leading digital platforms.",
        deliverables: ["Community Architecture", "Content Distribution", "Organic Engagement"],
      },
      {
        title: "Influencer & Creator Marketing",
        desc: "Partner with premier creators and industry voices to amplify your brand message, build trust, and generate direct referral sales.",
        deliverables: ["Creator Network Outreach", "Attribution Tracking", "Sponsored Campaigns"],
      },
    ],
  },
  {
    id: "convert",
    pillarNum: "03",
    title: "CONVERT",
    subtitle: "Revenue Systems & App Acceleration",
    summary:
      "Turn incoming clicks into compounding revenue with blazing-fast Next.js platforms, App Store category dominance, and rigorous funnel experimentation.",
    color: "#60A5FA",
    capabilities: [
      {
        title: "Website Design & Development",
        desc: "Launch blazing-fast, search-optimized Next.js web applications styled cleanly to maximize engagement, retention, and conversion rates.",
        deliverables: ["Next.js Edge Architecture", "Responsive UI Systems", "Speed Optimization"],
      },
      {
        title: "App & Revenue Boosters",
        desc: "Accelerate mobile application downloads and in-app subscription revenue with advanced App Store Optimization (ASO) and user loops.",
        deliverables: ["ASO Keyword Velocity", "Store Page A/B Testing", "Monetization Uplift"],
      },
      {
        title: "Conversion Rate Optimization",
        desc: "Systematically test and eliminate friction points along every user touchpoint to continuously lower customer acquisition cost.",
        deliverables: ["A/B Funnel Testing", "User Journey Audits", "Drop-off Reduction"],
      },
    ],
  },
];

export default function Services() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activePillar, setActivePillar] = useState<ServicePillar>(SERVICE_PILLARS[0]);

  return (
    <section id="services" className="floatingCardSection" ref={revealRef}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-subtitle">Our Service Pillars</span>
        <h2 className="section-title">Engineered for Performance. Built for Growth.</h2>
        <p className="section-desc">
          We organize our capabilities into three cohesive growth pillars to deliver an integrated acquisition, amplification, and conversion engine.
        </p>
      </div>

      {/* Pillar Selection Tabs */}
      <div className={styles.pillarTabs} role="tablist" aria-label="Service Pillars">
        {SERVICE_PILLARS.map((p) => {
          const isActive = p.id === activePillar.id;
          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`pillar-panel-${p.id}`}
              id={`pillar-tab-${p.id}`}
              className={`${styles.pillarTab} ${isActive ? styles.pillarTabActive : ""}`}
              onClick={() => setActivePillar(p)}
            >
              <span className={styles.tabNum}>{p.pillarNum}</span>
              <span className={styles.tabTitle}>{p.title}</span>
              <span className={styles.tabSubtitle}>{p.subtitle}</span>
            </button>
          );
        })}
      </div>

      {/* Editorial Overview Panel for Active Pillar */}
      <div className={styles.pillarOverview}>
        <div className={styles.overviewText}>
          <div className={styles.overviewBadge}>
            <span className={styles.overviewNum}>Pillar {activePillar.pillarNum}</span>
            <span className={styles.overviewTitle}>{activePillar.subtitle}</span>
          </div>
          <p className={styles.overviewSummary}>{activePillar.summary}</p>
        </div>
        <div className={styles.overviewCta}>
          <Link href="/#opportunity-tool" className="btn btn-primary">
            Scope {activePillar.title} Strategy
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Active Pillar Capabilities Grid */}
      <div
        id={`pillar-panel-${activePillar.id}`}
        role="tabpanel"
        aria-labelledby={`pillar-tab-${activePillar.id}`}
        className={`${styles.capabilitiesGrid} ${isVisible ? styles.visible : ""}`}
      >
        {activePillar.capabilities.map((cap, idx) => (
          <div key={idx} className={styles.capabilityCard}>
            <div className={styles.capHeader}>
              <span className={styles.capIndex}>0{idx + 1}</span>
              <h3 className={styles.capTitle}>{cap.title}</h3>
            </div>
            <p className={styles.capDesc}>{cap.desc}</p>

            {/* Deliverable tags */}
            <div className={styles.tagsRow}>
              {cap.deliverables.map((tag, tIdx) => (
                <span key={tIdx} className={styles.deliverableTag}>
                  {tag}
                </span>
              ))}
            </div>

            <div className={styles.capFooter}>
              <Link href="/#opportunity-tool" className={styles.capLink}>
                Explore in Growth Plan
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
