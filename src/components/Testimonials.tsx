"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarColor: string;
  avatarInitials: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // <!-- TODO: replace with real client testimonial -->
  const testimonials: Testimonial[] = [
    {
      /* TODO: replace with real client testimonial */
      id: "t1",
      name: "Sarah Jenkins",
      role: "Director of Growth",
      company: "EcoMart Group",
      quote: "Adorca360 completely transformed our international search footprint. Within six months of deploying their localized SEO funnels, our organic revenue across European and LATAM markets surged by 85%.",
      rating: 5,
      avatarColor: "#6C4CF1",
      avatarInitials: "SJ",
    },
    {
      /* TODO: replace with real client testimonial */
      id: "t2",
      name: "Marcus Thorne",
      role: "Head of Marketing",
      company: "FinFlow Solutions",
      quote: "Partnering with Adorca360 cut our cost-per-acquisition by 42% while doubling our verified inbound enterprise leads through algorithmic programmatic campaigns.",
      rating: 5,
      avatarColor: "#FF6B57",
      avatarInitials: "MT",
    },
    {
      /* TODO: replace with real client testimonial */
      id: "t3",
      name: "Elena Rostova",
      role: "VP of User Acquisition",
      company: "PlaySphere Studio",
      quote: "The App Store Optimization and keyword acceleration playbooks from Adorca360 pushed our flagship mobile gaming app into the Top 5 rankings in three competitive regional stores.",
      rating: 5,
      avatarColor: "#22C55E",
      avatarInitials: "ER",
    },
    {
      /* TODO: replace with real client testimonial */
      id: "t4",
      name: "David Chen",
      role: "Chief Marketing Officer",
      company: "Nexus Commerce",
      quote: "Adorca360 delivered a technical site architecture overhaul that doubled our crawl efficiency and boosted organic search click-through rates by 68% within 90 days.",
      rating: 5,
      avatarColor: "#3B82F6",
      avatarInitials: "DC",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getCardClass = (index: number) => {
    const len = testimonials.length;
    if (index === activeIndex) {
      return `${styles.card} ${styles.activeCard}`;
    }
    if (index === (activeIndex - 1 + len) % len) {
      return `${styles.card} ${styles.leftCard}`;
    }
    if (index === (activeIndex + 1) % len) {
      return `${styles.card} ${styles.rightCard}`;
    }
    return `${styles.card} ${styles.hiddenCard}`;
  };

  return (
    <section id="testimonials" className="floatingCardSection" aria-label="Customer Testimonials">
      {/* Section Header */}
      <div className="section-header center">
        <span className="section-subtitle">Words of Appreciation</span>
        <h2 className="section-title">What Our Partners Say</h2>
        <p className="section-desc">
          Hear from marketing and growth leaders who scaled their digital presence and search visibility with Adorca360.
        </p>
      </div>

      {/* Tilted Silhouette Carousel Area */}
      <div className={styles.carouselContainer}>
        <div className={styles.cardsTrack}>
          {testimonials.map((testimonial, idx) => (
            <div key={testimonial.id} className={getCardClass(idx)}>
              {/* Star Rating */}
              <div className={styles.starsRow} aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className={styles.star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className={styles.quote}>&ldquo;{testimonial.quote}&rdquo;</p>

              {/* Client Info Block */}
              <div className={styles.clientBlock}>
                <div
                  className={styles.avatar}
                  style={{ backgroundColor: testimonial.avatarColor }}
                  aria-hidden="true"
                >
                  {testimonial.avatarInitials}
                </div>
                <div className={styles.meta}>
                  <h4 className={styles.clientName}>{testimonial.name}</h4>
                  <span className={styles.clientRole}>
                    {testimonial.role}, <span className={styles.company}>{testimonial.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Circular Prev/Next Controls */}
        <div className={styles.controls}>
          <button
            className={styles.controlBtn}
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <button
            className={styles.controlBtn}
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
