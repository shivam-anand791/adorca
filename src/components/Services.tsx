"use client";

import { useRef } from "react";
import { useIntersection } from "./utils";
import ScrollScrubber from "./ScrollScrubber";
import styles from "./Services.module.css";

interface ServiceItem {
  id: string;
  anchorId: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Services() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const servicesList: ServiceItem[] = [
    {
      id: "growth",
      anchorId: "service-growth",
      title: "Global Growth Marketing",
      desc: "Scale your business across international borders with multi-language setups, targeted region bidding, and localized cross-channel strategies.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          <polyline points="16 8 20 8 20 12" />
          <line x1="14" y1="14" x2="20" y2="8" />
        </svg>
      ),
    },
    {
      id: "smm",
      anchorId: "service-smm",
      title: "Social Media Marketing",
      desc: "Build engaged digital communities. Orchestrate organic campaigns and high-performing social branding content on top networks.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="12" y1="9" x2="12" y2="15" />
        </svg>
      ),
    },
    {
      id: "webdev",
      anchorId: "service-webdev",
      title: "Website Designing & Development",
      desc: "Launch blazing fast, search-optimized Next.js web systems styled cleanly to maximize engagement, retention, and conversion rates.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="18" rx="3" />
          <line x1="2" y1="9" x2="22" y2="9" />
          <polyline points="8 14 6 16 8 18" />
          <polyline points="14 14 16 16 14 18" />
          <line x1="12" y1="13" x2="10" y2="19" />
        </svg>
      ),
    },
    {
      id: "digital",
      anchorId: "service-digital",
      title: "Digital Marketing Services",
      desc: "Implement high-performance SEO strategy audits, multi-channel growth consulting, and data-driven marketing campaigns built for ROI.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <polyline points="3 8 9 3 15 7 21 2" />
        </svg>
      ),
    },
    {
      id: "social",
      anchorId: "service-social",
      title: "Social Influence Marketing",
      desc: "Leverage premium creators and social personalities to amplify your brand voice, build trust, and organic user acquisition channels globally.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          <polygon points="19 11 20.5 14 23.5 14.5 21.2 16.8 21.8 20 19 18.5 16.2 20 16.8 16.8 14.5 14.5 17.5 14" fill="none" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      id: "boosters",
      anchorId: "service-boosters",
      title: "App & Revenue Boosters",
      desc: "Boost your application ranking and drive organic conversions with advanced App Store Optimization (ASO) and revenue growth strategies.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
          <polyline points="9 11 12 7 15 11" />
          <line x1="12" y1="7" x2="12" y2="14" />
        </svg>
      ),
    },
    {
      id: "leadgen",
      anchorId: "service-leadgen",
      title: "Lead Generation Service",
      desc: "Acquire high-quality marketing and sales leads using conversion-focused landing pages, optimized funnels, and programmatic matching.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      id: "programmatic",
      anchorId: "service-programmatic",
      title: "Programmatic Advertising Growth",
      desc: "Target the exact audience segments at scale. Implement automated, real-time bid optimization across premier advertising inventory networks.",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="15" x2="23" y2="15" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="15" x2="4" y2="15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="service" className="floatingCardSection" ref={revealRef}>
      {/* Section Header */}
      <div className="section-header">
        <span className="section-subtitle">Our Exclusive Services</span>
        <h2 className="section-title">Engineered for Performance. Built for Growth.</h2>
        <p className="section-desc">
          We deploy localized organic campaigns, programmatic search pipelines, and conversion-optimized web platforms built to expand your market share.
        </p>
      </div>

      {/* Horizontally Scrollable Services Row */}
      <div className={styles.scrollWrapper}>
        <div
          id="services-scroll-container"
          ref={scrollContainerRef}
          className={`${styles.scrollRow} ${isVisible ? styles.visible : ""}`}
        >
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              id={service.anchorId}
              className={styles.card}
              style={{
                transitionDelay: isVisible ? `${idx * 80}ms` : "0ms",
              }}
            >
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Drag-Handle Scrubber Control */}
      <ScrollScrubber
        containerRef={scrollContainerRef}
        ariaLabel="Exclusive services horizontal scrubber"
      />
    </section>
  );
}
