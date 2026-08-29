"use client";

import { useIntersection } from "./utils";
import styles from "./Services.module.css";

interface ServiceItem {
  id: string;
  anchorId: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Services() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.05 });

  const servicesList: ServiceItem[] = [
    {
      id: "growth",
      anchorId: "service-growth",
      title: "Global Growth Marketing",
      desc: "Scale your business across international borders with multi-language setups, targeted region bidding, and localized cross-channel strategies.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      id: "smm",
      anchorId: "service-smm",
      title: "Social Media Marketing",
      desc: "Build engaged digital communities. Orchestrate organic campaigns and high-performing social branding content on top networks.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      id: "webdev",
      anchorId: "service-webdev",
      title: "Website Designing & Development",
      desc: "Launch blazing fast, search-optimized Next.js web systems styled cleanly to maximize engagement, retention, and conversion rates.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="14" y1="4" x2="10" y2="20"></line>
        </svg>
      )
    },
    {
      id: "digital",
      anchorId: "service-digital",
      title: "Digital Marketing Services",
      desc: "Implement high-performance SEO strategy audits, multi-channel growth consulting, and data-driven marketing campaigns built for ROI.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      id: "social",
      anchorId: "service-social",
      title: "Social Influence Marketing",
      desc: "Leverage premium creators and social personalities to amplify your brand voice, build trust, and organic user acquisition channels globally.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: "boosters",
      anchorId: "service-boosters",
      title: "App & Revenue Boosters",
      desc: "Boost your application ranking and drive organic conversions with advanced App Store Optimization (ASO) and revenue growth strategies.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
          <path d="M12 6v6m-3-3h6"></path>
        </svg>
      )
    },
    {
      id: "leadgen",
      anchorId: "service-leadgen",
      title: "Lead Generation Service",
      desc: "Acquire high-quality marketing and sales leads using conversion-focused landing pages, optimized funnels, and programmatic matching.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      )
    },
    {
      id: "programmatic",
      anchorId: "service-programmatic",
      title: "Programmatic Advertising Growth",
      desc: "Target the exact audience segments at scale. Implement automated, real-time bid optimization across premier advertising inventory networks.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    }
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

      {/* Services Grid */}
      <div className={`${styles.grid} ${isVisible ? styles.visible : ""}`}>
        {servicesList.map((service, idx) => (
          <div 
            key={service.id} 
            id={service.anchorId} 
            className={styles.card}
            style={{ 
              transitionDelay: `${idx * 80}ms` 
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
    </section>
  );
}
