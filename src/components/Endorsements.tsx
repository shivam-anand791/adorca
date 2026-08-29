"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Endorsements.module.css";

interface PartnerItem {
  id: string;
  name: string;
  tilt: number; // default tilt in degrees
  logo: React.ReactNode;
}

export default function Endorsements() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const partners: PartnerItem[] = [
    {
      id: "google-ads",
      name: "Google Ads",
      tilt: -4,
      logo: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 2.5L7.5 18H2.5L11.5 2.5H16.5Z" fill="#1A73E8" />
          <path d="M16.5 2.5L21.5 11L12.5 23H7.5L16.5 2.5Z" fill="#F9BC05" />
        </svg>
      )
    },
    {
      id: "amazon",
      name: "Amazon Partner",
      tilt: 3,
      logo: (
        <svg viewBox="0 0 48 24" width="48" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 14h6M8 18c10 4 20 4 30 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M36 16l3 3.5l-4.5 1" fill="currentColor"/>
          <text x="10" y="11" fill="currentColor" fontWeight="800" fontSize="8" fontFamily="sans-serif">amazon</text>
        </svg>
      )
    },
    {
      id: "taboola",
      name: "Taboola Ads",
      tilt: -3,
      logo: (
        <svg viewBox="0 0 70 20" width="70" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="10" r="5" fill="#3B82F6"/>
          <circle cx="16" cy="10" r="3" fill="#F97316"/>
          <text x="24" y="14" fill="currentColor" fontWeight="800" fontSize="11" fontFamily="sans-serif">Taboola</text>
        </svg>
      )
    },
    {
      id: "outbrain",
      name: "Outbrain Platform",
      tilt: 5,
      logo: (
        <svg viewBox="0 0 75 20" width="75" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 14c3-1 4-4 4-6s-2-4-4-4s-4 2-4 4s1 5 4 6Z" fill="#FF5A00"/>
          <circle cx="12" cy="7" r="2" fill="#FF5A00"/>
          <text x="20" y="14" fill="currentColor" fontWeight="800" fontSize="11" fontFamily="sans-serif">Outbrain</text>
        </svg>
      )
    },
    {
      id: "cj",
      name: "CJ Affiliate",
      tilt: -5,
      logo: (
        <svg viewBox="0 0 75 20" width="75" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="10" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
          <text x="5" y="13" fill="currentColor" fontWeight="800" fontSize="9" fontFamily="sans-serif">CJ</text>
          <text x="18" y="14" fill="currentColor" fontWeight="800" fontSize="10" fontFamily="sans-serif">Affiliate</text>
        </svg>
      )
    },
    {
      id: "clickbank",
      name: "ClickBank Network",
      tilt: 4,
      logo: (
        <svg viewBox="0 0 85 20" width="85" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="10" r="6" stroke="#1D4ED8" strokeWidth="2"/>
          <path d="M8 4v12M4 10h8" stroke="#1D4ED8" strokeWidth="1.5"/>
          <text x="18" y="14" fill="currentColor" fontWeight="800" fontSize="9" fontFamily="sans-serif">CLICKBANK</text>
        </svg>
      )
    },
    {
      id: "shareasale",
      name: "ShareASale",
      tilt: -2,
      logo: (
        <svg viewBox="0 0 85 20" width="85" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5" cy="10" r="3" fill="#22C55E"/>
          <circle cx="13" cy="10" r="3" fill="#3B82F6"/>
          <circle cx="9" cy="6" r="2" fill="#10B981"/>
          <line x1="5" y1="10" x2="13" y2="10" stroke="currentColor" strokeWidth="1"/>
          <text x="20" y="14" fill="currentColor" fontWeight="800" fontSize="10" fontFamily="sans-serif">ShareASale</text>
        </svg>
      )
    }
  ];

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % partners.length);
    }, 2800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, partners.length]);

  const handleMouseEnter = (index: number) => {
    setIsHovered(true);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>Partnered with Premier Affiliate & Advertising Networks</h3>
        
        {/* Tilted Card Row Wrapper */}
        <div className={styles.rowWrapper}>
          <div className={styles.cardsRow}>
            {partners.map((partner, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={partner.id}
                  className={`${styles.partnerCard} ${isActive ? styles.active : ""}`}
                  style={{
                    transform: isActive ? "rotate(0deg) scale(1.08)" : `rotate(${partner.tilt}deg)`
                  }}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={styles.logoWrapper}>
                    {partner.logo}
                  </div>
                  <span className={styles.partnerName}>{partner.name}</span>
                </div>
              );
            })}
          </div>

          {/* Dotted Connection Line beneath */}
          <div className={styles.connectionLineContainer}>
            <div className={styles.connectorLine}></div>
            <div className={styles.dotsRow}>
              {partners.map((partner, idx) => (
                <div 
                  key={idx} 
                  className={`${styles.connectorDot} ${activeIndex === idx ? styles.dotActive : ""}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
