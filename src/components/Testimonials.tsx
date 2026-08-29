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

  const testimonials: Testimonial[] = [
    {
      id: "t1",
      name: "Sarah Jenkins",
      role: "Director of Growth",
      company: "EcoMart Group",
      quote: "Adorca360 completely transformed our international traffic setup. Within six months of launching our localized SEO campaigns, organic conversions grew by 85% across Europe and LATAM.",
      rating: 5,
      avatarColor: "#6C4CF1",
      avatarInitials: "SJ"
    },
    {
      id: "t2",
      name: "Marcus Thorne",
      role: "Head of Marketing",
      company: "FinFlow Solutions",
      quote: "Their programmatic funnel targeting and landing page optimizations cut our cost-per-acquisition by 42% while doubling our high-quality sales leads. Highly recommended.",
      rating: 5,
      avatarColor: "#FF6B57",
      avatarInitials: "MT"
    },
    {
      id: "t3",
      name: "Elena Rostova",
      role: "VP of Acquisition",
      company: "PlaySphere Studio",
      quote: "ASO and mobile traffic acquisition strategies from Adorca360 drove our flagship gaming app into the top 5 ranking categories in three highly competitive regional app stores.",
      rating: 5,
      avatarColor: "#22C55E",
      avatarInitials: "ER"
    }
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
    <section id="testimonials" className="floatingCardSection">
      {/* Section Header */}
      <div className="section-header center">
        <span className="section-subtitle">Words of Appreciation</span>
        <h2 className="section-title">What Our Partners Say</h2>
        <p className="section-desc">
          Hear from the marketing and growth executives who have scaled their search presence with Adorca360.
        </p>
      </div>

      {/* Tilted Silhouette Carousel Area */}
      <div className={styles.carouselContainer}>
        <div className={styles.cardsTrack}>
          {testimonials.map((testimonial, idx) => (
            <div key={testimonial.id} className={getCardClass(idx)}>
              {/* Star Rating */}
              <div className={styles.starsRow}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className={styles.star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
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

        {/* Carousel controls */}
        <div className={styles.controls}>
          <button className={styles.controlBtn} onClick={handlePrev} aria-label="Previous testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button className={styles.controlBtn} onClick={handleNext} aria-label="Next testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
