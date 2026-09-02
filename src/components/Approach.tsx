"use client";

import { useIntersection } from "./utils";
import styles from "./Approach.module.css";

interface ProcessStep {
  num: string;
  name: string;
  tag: string;
  desc: string;
  deliverables: string[];
}

const STEPS: ProcessStep[] = [
  {
    num: "01",
    name: "DISCOVER",
    tag: "Audit & Architecture",
    desc: "We perform a forensic crawl across your technical infrastructure, uncover cannibalization bottlenecks, and analyze international search demand.",
    deliverables: ["Technical Crawl & Log Audit", "Hreflang & Schema Diagnostics", "Multilingual Keyword Mapping"],
  },
  {
    num: "02",
    name: "STRATEGIZE",
    tag: "Roadmap & KPI Model",
    desc: "We engineer a prioritized 90-day growth blueprint, establishing channel attribution benchmarks, ROAS milestones, and content cluster schedules.",
    deliverables: ["Channel Priority Scoring", "Competitor Gap Capture Plan", "Attribution Architecture Spec"],
  },
  {
    num: "03",
    name: "EXECUTE",
    tag: "Engineering & Media",
    desc: "We deploy high-velocity Next.js landing platforms, roll out localized content hubs, and activate algorithmic programmatic bid pipelines.",
    deliverables: ["Core Web Vitals Optimization", "Native Content Production", "Real-Time Ad Bidding Setup"],
  },
  {
    num: "04",
    name: "OPTIMIZE",
    tag: "Scale & Retention",
    desc: "We analyze server-side multi-touch attribution data to eliminate underperforming ad spend and double down on highest-yielding organic search clusters.",
    deliverables: ["First-Party Data Attribution", "A/B Funnel Tuning", "International Market Expansion"],
  },
];

export default function Approach() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  return (
    <section id="approach" className="floatingCardSection" ref={revealRef}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-subtitle">Our Methodology</span>
        <h2 className="section-title">From Strategy To Scale.</h2>
        <p className="section-desc">
          A disciplined 4-stage execution framework designed to eliminate guesswork, lower customer acquisition costs, and compound organic search equity.
        </p>
      </div>

      {/* Timeline Grid */}
      <div className={`${styles.timelineGrid} ${isVisible ? styles.visible : ""}`}>
        {STEPS.map((step, idx) => (
          <div key={step.num} className={styles.stepCard}>
            {/* Step Header with Node Ring */}
            <div className={styles.stepHeader}>
              <div className={styles.nodeCircle}>
                <span className={styles.nodeNum}>{step.num}</span>
              </div>
              {idx < STEPS.length - 1 && <div className={styles.timelineBar} aria-hidden="true" />}
            </div>

            {/* Step Body */}
            <div className={styles.stepBody}>
              <span className={styles.stepTag}>{step.tag}</span>
              <h3 className={styles.stepTitle}>{step.name}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>

              {/* Mini Deliverables */}
              <ul className={styles.deliverableList}>
                {step.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className={styles.deliverableItem}>
                    <span className={styles.bulletDot} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
