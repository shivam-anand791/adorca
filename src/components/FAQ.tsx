"use client";

import { useState } from "react";
import { useIntersection } from "./utils";
import { FAQ_DATA } from "@/data/faqData";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-timeline");
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="floatingCardSection" ref={revealRef} aria-label="Frequently Asked Questions">
      {/* Section Header */}
      <div className="section-header center">
        <span className="section-subtitle">Frequently Asked Questions</span>
        <h2 className="section-title">Everything You Need to Know</h2>
        <p className="section-desc">
          Clear answers about our growth methodologies, campaign timelines, network integrations, and reporting transparency.
        </p>
      </div>

      {/* Accordion List */}
      <div className={`${styles.accordionWrapper} ${isVisible ? styles.visible : ""}`}>
        {FAQ_DATA.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
            >
              <button
                type="button"
                className={styles.questionBtn}
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={isOpen}
                aria-controls={`answer-${item.id}`}
                id={`question-${item.id}`}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>

              <div
                id={`answer-${item.id}`}
                role="region"
                aria-labelledby={`question-${item.id}`}
                className={`${styles.answerContainer} ${isOpen ? styles.answerOpen : ""}`}
              >
                <div className={styles.answerContent}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
