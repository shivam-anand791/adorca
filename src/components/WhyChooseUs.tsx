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
  const animatedValue = useCountUp(val, 1500, trigger);
  const radius = 44;
  const strokeCircumference = 2 * Math.PI * radius; // ≈ 276.46
  const strokeOffset = strokeCircumference - (strokeCircumference * animatedValue) / 100;

  return (
    <div className={styles.statItem}>
      <div className={styles.circleWrapper}>
        <svg className={styles.svgRing} width="112" height="112" viewBox="0 0 112 112" aria-hidden="true">
          {/* Background track circle */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="var(--border-color)"
            strokeWidth="6"
            fill="transparent"
          />
          {/* Animated active progress ring */}
          <circle
            cx="56"
            cy="56"
            r={radius}
            stroke="var(--accent-primary)"
            strokeWidth="6"
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
      desc: "Full visibility across all campaigns. We provide real-time ranking dashboards, unvarnished performance analytics, and transparent attribution reporting with zero hidden markups or vanity metrics.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      title: "12+ Years of SEO Experience",
      desc: "Over a decade of engineering organic growth through every major search engine core update. Our deep algorithmic expertise ensures your search rankings remain resilient and high-performing.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
          <path d="M12 2v2M12 20v2M20 12h2M2 12h2" opacity="0.4" />
        </svg>
      ),
    },
    {
      title: "Specialized Local SEO Experts",
      desc: "Native in-market specialists operating across 50+ international regions. We analyze local idioms, cultural search habits, and regional intent clusters to outrank local incumbents.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const statsList: StatCircle[] = [
    { val: 79, label: "Increase in overall traffic to your website" },
    { val: 85, label: "Overall conversion ratio through local SEO" },
    { val: 68, label: "Impression growth through international SEO" },
    { val: 75, label: "Organic impression growth rate" },
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

      {/* Reason Cards Grid */}
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
