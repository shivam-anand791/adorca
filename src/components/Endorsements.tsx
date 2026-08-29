"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Endorsements.module.css";

interface PartnerItem {
  id: string;
  name: string;
  tilt: number;
  logo: React.ReactNode;
}

/* ─── Real brand SVG marks ───────────────────────────────────────────────── */
const GoogleAdsLogo = () => (
  <svg width="96" height="28" viewBox="0 0 192 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Ads">
    {/* G icon */}
    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8c4.23 0 8.08 1.62 10.96 4.27L30.7 16.5A9.95 9.95 0 0024 14c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.08 0 9.24-3.58 9.9-8.27H24v-4h14.06c.12.78.19 1.59.19 2.4C38.25 32.37 31.88 40 24 40z" fill="#4285F4"/>
    {/* "Ads" wordmark */}
    <text x="50" y="36" fill="currentColor" fontWeight="700" fontSize="22" fontFamily="sans-serif" letterSpacing="-0.5">Ads</text>
  </svg>
);

const AmazonLogo = () => (
  <svg width="90" height="28" viewBox="0 0 180 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Amazon">
    <text x="0" y="36" fill="currentColor" fontWeight="900" fontSize="30" fontFamily="Arial,sans-serif" letterSpacing="-1">amazon</text>
    {/* smile arrow */}
    <path d="M4 46 Q44 58 86 44" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
    <path d="M82 40 L90 46 L80 50" fill="#FF9900"/>
  </svg>
);

const TaboolaLogo = () => (
  <svg width="96" height="28" viewBox="0 0 192 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Taboola">
    {/* T dot cluster icon */}
    <circle cx="16" cy="28" r="10" fill="#3B4EFF"/>
    <circle cx="32" cy="28" r="6"  fill="#3B4EFF" opacity="0.7"/>
    <circle cx="44" cy="28" r="4"  fill="#3B4EFF" opacity="0.4"/>
    <text x="54" y="36" fill="currentColor" fontWeight="800" fontSize="22" fontFamily="sans-serif">Taboola</text>
  </svg>
);

const OutbrainLogo = () => (
  <svg width="104" height="28" viewBox="0 0 208 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Outbrain">
    {/* Outbrain "O" brand orb */}
    <circle cx="22" cy="28" r="16" stroke="#FF6633" strokeWidth="4" fill="none"/>
    <circle cx="22" cy="16" r="5"  fill="#FF6633"/>
    <text x="46" y="36" fill="currentColor" fontWeight="800" fontSize="22" fontFamily="sans-serif">Outbrain</text>
  </svg>
);

const CJAffiliateLogo = () => (
  <svg width="110" height="28" viewBox="0 0 220 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CJ Affiliate">
    {/* Stylised CJ badge */}
    <rect x="2" y="8" width="40" height="40" rx="8" fill="#00A859"/>
    <text x="7" y="37" fill="white" fontWeight="900" fontSize="22" fontFamily="Arial,sans-serif">CJ</text>
    <text x="50" y="36" fill="currentColor" fontWeight="700" fontSize="20" fontFamily="sans-serif">Affiliate</text>
  </svg>
);

const ClickBankLogo = () => (
  <svg width="118" height="28" viewBox="0 0 236 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ClickBank">
    {/* CB coin mark */}
    <circle cx="24" cy="28" r="20" fill="#1F4EBD"/>
    <text x="11" y="35" fill="white" fontWeight="900" fontSize="16" fontFamily="Arial,sans-serif">CB</text>
    <text x="52" y="36" fill="currentColor" fontWeight="800" fontSize="20" fontFamily="sans-serif">ClickBank</text>
  </svg>
);

const ShareASaleLogo = () => (
  <svg width="118" height="28" viewBox="0 0 236 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ShareASale">
    {/* Network node trio */}
    <circle cx="12" cy="28" r="8" fill="#7B3FE4"/>
    <circle cx="34" cy="14" r="6" fill="#FF6B57"/>
    <circle cx="34" cy="42" r="6" fill="#22C55E"/>
    <line x1="12" y1="28" x2="34" y2="14" stroke="#7B3FE4" strokeWidth="2"/>
    <line x1="12" y1="28" x2="34" y2="42" stroke="#22C55E" strokeWidth="2"/>
    <text x="48" y="36" fill="currentColor" fontWeight="800" fontSize="19" fontFamily="sans-serif">ShareASale</text>
  </svg>
);

export default function Endorsements() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const partners: PartnerItem[] = [
    { id: "google-ads",   name: "Google Ads",        tilt: -4, logo: <GoogleAdsLogo /> },
    { id: "amazon",       name: "Amazon Partner",     tilt:  3, logo: <AmazonLogo /> },
    { id: "taboola",      name: "Taboola",            tilt: -3, logo: <TaboolaLogo /> },
    { id: "outbrain",     name: "Outbrain",           tilt:  5, logo: <OutbrainLogo /> },
    { id: "cj",           name: "CJ Affiliate",       tilt: -5, logo: <CJAffiliateLogo /> },
    { id: "clickbank",    name: "ClickBank",          tilt:  4, logo: <ClickBankLogo /> },
    { id: "shareasale",   name: "ShareASale",         tilt: -2, logo: <ShareASaleLogo /> },
  ];

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % partners.length);
    }, 2800);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered, partners.length]);

  const handleMouseEnter = (index: number) => {
    setIsHovered(true);
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className={styles.section} aria-label="Partner networks">
      <div className={styles.container}>
        <h3 className={styles.title}>Partnered with Premier Affiliate &amp; Advertising Networks</h3>

        {/* Tilted Card Row */}
        <div className={styles.rowWrapper}>
          <div className={styles.cardsRow}>
            {partners.map((partner, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={partner.id}
                  className={`${styles.partnerCard} ${isActive ? styles.active : ""}`}
                  style={{
                    /* tilt is applied via CSS var; mobile CSS overrides to 0 */
                    ["--card-tilt" as string]: `${partner.tilt}deg`,
                    transform: isActive
                      ? "rotate(0deg) scale(1.05)"
                      : `rotate(${partner.tilt}deg)`,
                  }}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                  aria-label={partner.name}
                >
                  <div className={styles.logoWrapper}>
                    {partner.logo}
                  </div>
                  <span className={styles.partnerName}>{partner.name}</span>
                </div>
              );
            })}
          </div>

          {/* Connector dots */}
          <div className={styles.connectionLineContainer} aria-hidden="true">
            <div className={styles.dotsRow}>
              {partners.map((_, idx) => (
                <div
                  key={idx}
                  className={`${styles.connectorDot} ${activeIndex === idx ? styles.dotActive : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
