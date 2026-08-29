"use client";

import { useIntersection, useCountUp } from "./utils";
import styles from "./WhyChooseUs.module.css";

interface ValueCard {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface StatCircle {
  val: number;
  label: string;
}

interface StatCircleItemProps {
  val: number;
  label: string;
  trigger: boolean;
}

function StatCircleItem({ val, label, trigger }: StatCircleItemProps) {
  const animatedValue = useCountUp(val, 1600, trigger);
  const strokeCircumference = 301.59;
  const strokeOffset = strokeCircumference - (strokeCircumference * animatedValue) / 100;

  return (
    <div className={styles.statItem}>
      <div className={styles.circleWrapper}>
        <svg className={styles.svgRing} width="110" height="110">
          {/* Inner Ring Backing */}
          <circle 
            cx="55" 
            cy="55" 
            r="48" 
            stroke="var(--border-color)" 
            strokeWidth="5" 
            fill="transparent" 
          />
          {/* Colored Active Meter Ring */}
          <circle 
            cx="55" 
            cy="55" 
            r="48" 
            stroke="var(--accent-primary)" 
            strokeWidth="5" 
            fill="transparent" 
            strokeDasharray={strokeCircumference}
            strokeDashoffset={strokeOffset}
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.percentageText}>{animatedValue}%</span>
      </div>
      <p className={styles.statDesc}>{label}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.1 });

  const valuesList: ValueCard[] = [
    {
      title: "Reliable & Transparent",
      desc: "All traffic data, keyword reports, and performance parameters are fully visible. We maintain honest communication with regular client updates.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "12+ Years of SEO Experience",
      desc: "Over a decade of handling search engine algorithms. We understand how to adapt campaigns for sustainable search rankings.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "Specialized Local SEO Experts",
      desc: "Direct regional specialists configured to extract user intents in over 50 international markets, matching campaigns to localized search behaviors.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    }
  ];

  const statsList: StatCircle[] = [
    { val: 79, label: "Increase in overall traffic to your website" },
    { val: 85, label: "Overall conversion ratio through local SEO" },
    { val: 68, label: "Impression growth through international SEO" },
    { val: 75, label: "Organic impression growth rate" }
  ];

  return (
    <section id="why-choose" className="floatingCardSection" ref={revealRef}>
      {/* Section Header */}
      <div className="section-header center">
        <span className="section-subtitle">Why Choose Us</span>
        <h2 className="section-title">The Competitive Edge.</h2>
        <p className="section-desc">
          We combine technical search infrastructure, data-driven optimization, and transparent reporting to deliver sustainable organic growth.
        </p>
      </div>

      {/* Cards Grid */}
      <div className={styles.grid}>
        {valuesList.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.iconCircle}>
              {card.icon}
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className={styles.divider}></div>

      {/* Stats Progress Circle Grid */}
      <div className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {statsList.map((stat, idx) => (
            <StatCircleItem key={idx} val={stat.val} label={stat.label} trigger={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
