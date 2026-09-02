"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./AboutSection.module.css";

interface PillarData {
  id: "markets" | "experience" | "capabilities" | "operating-model";
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  stat: string;
  statLabel: string;
  highlights: string[];
  telemetry: {
    orbitLayer: string;
    protocol: string;
    nodesCount: number;
    status: string;
  };
}

const PILLARS: PillarData[] = [
  {
    id: "markets",
    number: "01",
    title: "Global Search Markets",
    subtitle: "Multilingual Regional Intent & Indexing",
    summary:
      "We analyze localized search idioms, cultural shopping intent, and regional indexing architecture across 50+ international territories without relying on fabricated physical office claims.",
    stat: "50+",
    statLabel: "International Search Markets",
    highlights: [
      "North America, Western Europe, DACH, APAC, LATAM & MEA",
      "Native ccTLD & server-side hreflang taxonomy",
      "Multi-platform indexing (Google Global, Bing, Baidu, Amazon)",
      "Zero fake geographic claims: Pure verified digital infrastructure",
    ],
    telemetry: {
      orbitLayer: "Outer Global Orbital Ring",
      protocol: "Localized Intent Mapping (ccTLD / Hreflang)",
      nodesCount: 50,
      status: "Verified Active Coverage",
    },
  },
  {
    id: "experience",
    number: "02",
    title: "12+ Years Experience",
    subtitle: "Algorithmic Search Resilience",
    summary:
      "Over a decade of engineering compounding organic growth through every major search paradigm shift—from early Panda and Penguin updates to modern AI Overviews and Helpful Content systems.",
    stat: "12+ Yrs",
    statLabel: "Continuous Track Record (Est. 2012)",
    highlights: [
      "40+ major Google Core updates successfully navigated",
      "Compounding organic equity that outlasts platform volatility",
      "Pioneering technical crawl & schema graph engineering",
      "Enterprise audit frameworks validated across 100+ deployments",
    ],
    telemetry: {
      orbitLayer: "Mid Algorithmic Resilience Ring",
      protocol: "Compounding Organic Equity (2012 - 2026)",
      nodesCount: 40,
      status: "Core Stability High",
    },
  },
  {
    id: "capabilities",
    number: "03",
    title: "Full-Funnel Capabilities",
    subtitle: "Search, Media & Conversion Engineering",
    summary:
      "A complete technical ecosystem connecting crawl architecture, semantic content clustering, programmatic media syndication, and enterprise conversion rate optimization.",
    stat: "4-Pillar",
    statLabel: "Unified Growth Infrastructure",
    highlights: [
      "Technical SEO: JS rendering, schema graphs, Core Web Vitals",
      "Programmatic: Google Ads, Taboola, Outbrain, Amazon, CJ, ClickBank",
      "Content: Semantic intent architectures & entity mapping",
      "Conversion: User journey instrumentation & checkout CRO",
    ],
    telemetry: {
      orbitLayer: "Core Capability Network Matrix",
      protocol: "Full-Funnel Technical Architecture",
      nodesCount: 16,
      status: "Direct API & Pipeline Ready",
    },
  },
  {
    id: "operating-model",
    number: "04",
    title: "Operating Model",
    subtitle: "100% Attribution & Senior Direct Access",
    summary:
      "We operate as an embedded technical growth partner. You retain 100% administrative ownership of all data assets, tag managers, and ad accounts with zero junior pass-offs.",
    stat: "100%",
    statLabel: "Client Data & Asset Ownership",
    highlights: [
      "Direct Senior Strategist collaboration on every account",
      "Zero vanity metrics: KPIs tied directly to pipeline & revenue",
      "Full administrative ownership of GA4, GSC & Looker dashboards",
      "Agile two-week sprint cycles with transparent telemetry",
    ],
    telemetry: {
      orbitLayer: "Central Command & Telemetry Core",
      protocol: "100% Client Ownership Guarantee",
      nodesCount: 4,
      status: "Complete Attribution Transparency",
    },
  },
];

export default function AboutSection() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activePillarId, setActivePillarId] = useState<PillarData["id"]>("markets");

  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section id="about" className="floatingCardSection" ref={revealRef} aria-label="About Adorca 360">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className="section-subtitle">Verified Infrastructure &amp; Operating Model</span>
          <h2 className={styles.mainHeading}>
            Built For <br />
            <span className={styles.accentText}>Ambitious Growth.</span>
          </h2>
          <p className={styles.leadNarrative}>
            Adorca 360 operates on a foundational engineering principle: sustainable market leadership requires deep technical infrastructure, transparent data attribution, and localized search intelligence. We partner directly with growth-focused leaders to engineer compounding digital enterprise value.
          </p>
        </div>

        {/* 2-Column Interactive Workspace: Left Narrative & Pillars / Right Growth Orbit Global Visual */}
        <div className={`${styles.workspaceGrid} ${isVisible ? styles.visible : ""}`}>
          {/* Left Column: 4 Verified Pillar Selector Cards */}
          <div className={styles.pillarsCol}>
            <div className={styles.pillarNav} role="tablist" aria-label="About Adorca 360 Verified Pillars">
              {PILLARS.map((pillar) => {
                const isActive = pillar.id === activePillarId;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    role="tab"
                    id={`pillar-tab-${pillar.id}`}
                    aria-selected={isActive}
                    aria-controls={`pillar-panel-${pillar.id}`}
                    className={`${styles.pillarTab} ${isActive ? styles.pillarTabActive : ""}`}
                    onClick={() => setActivePillarId(pillar.id)}
                  >
                    <div className={styles.tabHeader}>
                      <span className={styles.tabNum}>{pillar.number}</span>
                      <span className={styles.tabTitle}>{pillar.title}</span>
                      <span className={styles.tabStatBadge}>{pillar.stat}</span>
                    </div>
                    <p className={styles.tabSubtitle}>{pillar.subtitle}</p>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Narrative Detail */}
            <div
              id={`pillar-panel-${activePillar.id}`}
              role="tabpanel"
              aria-labelledby={`pillar-tab-${activePillar.id}`}
              className={styles.activePillarDetail}
            >
              <div className={styles.detailHeader}>
                <div className={styles.detailTitleGroup}>
                  <span className={styles.detailBadge}>Pillar {activePillar.number}</span>
                  <h3 className={styles.detailTitle}>{activePillar.title}</h3>
                </div>
                <div className={styles.detailMetricBox}>
                  <span className={styles.detailMetricVal}>{activePillar.stat}</span>
                  <span className={styles.detailMetricLabel}>{activePillar.statLabel}</span>
                </div>
              </div>

              <p className={styles.detailSummary}>{activePillar.summary}</p>

              <div className={styles.highlightsGrid}>
                {activePillar.highlights.map((item, idx) => (
                  <div key={idx} className={styles.highlightItem}>
                    <svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className={styles.highlightText}>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.actionRow}>
                <Link href="/#opportunity-tool" className="btn btn-primary">
                  Explore Growth Diagnostics
                </Link>
                <Link href="/case-studies" className="btn btn-secondary">
                  View Verified Case Studies
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Growth Orbit Global / Network Visual */}
          <div className={styles.visualCol}>
            <div className={styles.orbitCard} aria-label="Growth Orbit Global Network Visualization">
              {/* Orbit Card Header */}
              <div className={styles.orbitHeader}>
                <div className={styles.windowControls}>
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                  <span className={styles.windowDot} />
                </div>
                <div className={styles.orbitBadge}>
                  <span className={styles.orbitStatusDot} />
                  <span>Growth Orbit • Global Network</span>
                </div>
                <span className={styles.verifiedTag}>Verified System</span>
              </div>

              {/* Interactive SVG Global Orbit Canvas */}
              <div className={styles.orbitCanvas}>
                <svg
                  className={styles.orbitSvg}
                  viewBox="0 0 500 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="hubGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1657FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#081033" stopOpacity="0.95" />
                    </radialGradient>
                  </defs>

                  {/* Concentric Orbital Trajectories */}
                  {/* Outer Orbit: Global Markets (50+ Markets) */}
                  <ellipse
                    cx="250"
                    cy="220"
                    rx="220"
                    ry="170"
                    className={`${styles.orbitPath} ${activePillarId === "markets" ? styles.pathActive : ""}`}
                    strokeDasharray="4 6"
                  />

                  {/* Mid-Outer Orbit: Algorithmic Experience (12+ Years) */}
                  <ellipse
                    cx="250"
                    cy="220"
                    rx="165"
                    ry="125"
                    className={`${styles.orbitPath} ${activePillarId === "experience" ? styles.pathActive : ""}`}
                    strokeDasharray="2 4"
                  />

                  {/* Mid-Inner Orbit: Full-Funnel Capabilities */}
                  <ellipse
                    cx="250"
                    cy="220"
                    rx="115"
                    ry="85"
                    className={`${styles.orbitPath} ${activePillarId === "capabilities" ? styles.pathActive : ""}`}
                  />

                  {/* Inner Orbit: Operating Model */}
                  <ellipse
                    cx="250"
                    cy="220"
                    rx="65"
                    ry="45"
                    className={`${styles.orbitPath} ${activePillarId === "operating-model" ? styles.pathActive : ""}`}
                    strokeDasharray="3 3"
                  />

                  {/* Radial Network Beams to Active Nodes */}
                  <line
                    x1="250"
                    y1="220"
                    x2="80"
                    y2="130"
                    className={`${styles.networkBeam} ${activePillarId === "markets" ? styles.beamActive : ""}`}
                  />
                  <line
                    x1="250"
                    y1="220"
                    x2="420"
                    y2="130"
                    className={`${styles.networkBeam} ${activePillarId === "markets" ? styles.beamActive : ""}`}
                  />
                  <line
                    x1="250"
                    y1="220"
                    x2="100"
                    y2="310"
                    className={`${styles.networkBeam} ${activePillarId === "experience" ? styles.beamActive : ""}`}
                  />
                  <line
                    x1="250"
                    y1="220"
                    x2="400"
                    y2="310"
                    className={`${styles.networkBeam} ${activePillarId === "capabilities" ? styles.beamActive : ""}`}
                  />

                  {/* Central Adorca Hub */}
                  <circle cx="250" cy="220" r="38" fill="url(#hubGradient)" stroke="var(--blue)" strokeWidth="2" />
                  <circle cx="250" cy="220" r="18" fill="var(--navy)" stroke="var(--lime)" strokeWidth="1.5" />
                  <circle cx="250" cy="220" r="4" fill="#FFFFFF" />

                  {/* Orbital Nodes - Markets */}
                  <g
                    className={`${styles.orbitNodeGroup} ${activePillarId === "markets" ? styles.nodeGroupActive : ""}`}
                    onClick={() => setActivePillarId("markets")}
                    style={{ cursor: "pointer" }}
                  >
                    <circle cx="80" cy="130" r="14" className={styles.nodeBackdrop} />
                    <circle cx="80" cy="130" r="8" className={styles.nodeCore} />
                    <text x="80" y="160" textAnchor="middle" className={styles.nodeLabel}>NA / EU</text>
                  </g>

                  <g
                    className={`${styles.orbitNodeGroup} ${activePillarId === "markets" ? styles.nodeGroupActive : ""}`}
                    onClick={() => setActivePillarId("markets")}
                    style={{ cursor: "pointer" }}
                  >
                    <circle cx="420" cy="130" r="14" className={styles.nodeBackdrop} />
                    <circle cx="420" cy="130" r="8" className={styles.nodeCore} />
                    <text x="420" y="160" textAnchor="middle" className={styles.nodeLabel}>APAC / LATAM</text>
                  </g>

                  {/* Orbital Nodes - Experience */}
                  <g
                    className={`${styles.orbitNodeGroup} ${activePillarId === "experience" ? styles.nodeGroupActive : ""}`}
                    onClick={() => setActivePillarId("experience")}
                    style={{ cursor: "pointer" }}
                  >
                    <circle cx="100" cy="310" r="14" className={styles.nodeBackdrop} />
                    <circle cx="100" cy="310" r="8" className={styles.nodeCore} />
                    <text x="100" y="340" textAnchor="middle" className={styles.nodeLabel}>12+ Yrs Core</text>
                  </g>

                  {/* Orbital Nodes - Capabilities */}
                  <g
                    className={`${styles.orbitNodeGroup} ${activePillarId === "capabilities" ? styles.nodeGroupActive : ""}`}
                    onClick={() => setActivePillarId("capabilities")}
                    style={{ cursor: "pointer" }}
                  >
                    <circle cx="400" cy="310" r="14" className={styles.nodeBackdrop} />
                    <circle cx="400" cy="310" r="8" className={styles.nodeCore} />
                    <text x="400" y="340" textAnchor="middle" className={styles.nodeLabel}>Full-Funnel</text>
                  </g>

                  {/* Orbital Node - Operating Model */}
                  <g
                    className={`${styles.orbitNodeGroup} ${activePillarId === "operating-model" ? styles.nodeGroupActive : ""}`}
                    onClick={() => setActivePillarId("operating-model")}
                    style={{ cursor: "pointer" }}
                  >
                    <circle cx="250" cy="135" r="12" className={styles.nodeBackdrop} />
                    <circle cx="250" cy="135" r="6" className={styles.nodeCore} />
                    <text x="250" y="120" textAnchor="middle" className={styles.nodeLabel}>100% Ownership</text>
                  </g>
                </svg>

                {/* Central Overlay Badge */}
                <div className={styles.centerHubBadge} aria-hidden="true">
                  <span className={styles.hubTitle}>ADORCA 360</span>
                  <span className={styles.hubSub}>Global Core</span>
                </div>
              </div>

              {/* Orbit Live Telemetry Card */}
              <div className={styles.telemetryCard}>
                <div className={styles.telemetryHeader}>
                  <span className={styles.telemetryTag}>Active Orbit Telemetry</span>
                  <span className={styles.telemetryStatus}>{activePillar.telemetry.status}</span>
                </div>
                <div className={styles.telemetryGrid}>
                  <div className={styles.telemetryItem}>
                    <span className={styles.telemetryLabel}>Orbital Layer</span>
                    <span className={styles.telemetryVal}>{activePillar.telemetry.orbitLayer}</span>
                  </div>
                  <div className={styles.telemetryItem}>
                    <span className={styles.telemetryLabel}>Telemetry Protocol</span>
                    <span className={styles.telemetryVal}>{activePillar.telemetry.protocol}</span>
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
