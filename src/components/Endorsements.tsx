"use client";

import Image from "next/image";
import styles from "./Endorsements.module.css";

interface PartnerItem {
  id: string;
  name: string;
  tilt: number;
  logoSrc: string;
  width: number;
  height: number;
}

export default function Endorsements() {
  const partners: PartnerItem[] = [
    {
      id: "google-ads",
      name: "Google Ads",
      tilt: -5,
      logoSrc: "/logos/google-ads.svg",
      width: 140,
      height: 36,
    },
    {
      id: "amazon-partner",
      name: "Amazon Partner",
      tilt: 4,
      logoSrc: "/logos/amazon-partner.svg",
      width: 140,
      height: 36,
    },
    {
      id: "taboola",
      name: "Taboola Ads",
      tilt: -4,
      logoSrc: "/logos/taboola-ads.svg",
      width: 130,
      height: 36,
    },
    {
      id: "outbrain",
      name: "Outbrain",
      tilt: 6,
      logoSrc: "/logos/outbrain.svg",
      width: 130,
      height: 36,
    },
    {
      id: "cj",
      name: "CJ Affiliate",
      tilt: -6,
      logoSrc: "/logos/cj-affiliate.svg",
      width: 145,
      height: 36,
    },
    {
      id: "clickbank",
      name: "ClickBank",
      tilt: 5,
      logoSrc: "/logos/clickbank.svg",
      width: 135,
      height: 36,
    },
    {
      id: "shareasale",
      name: "ShareASale",
      tilt: -3,
      logoSrc: "/logos/shareasale.svg",
      width: 135,
      height: 36,
    },
  ];

  // Duplicate the partner list for seamless infinite marquee rotation
  const marqueePartners = [...partners, ...partners];

  return (
    <section className={styles.section} aria-label="Partner networks">
      <div className={styles.container}>
        <h3 className={styles.title}>Partnered with Premier Affiliate &amp; Advertising Networks</h3>

        {/* Continuous Moving Banner Wrapper */}
        <div className={styles.marqueeWrapper}>
          <div className={styles.marqueeTrack}>
            {marqueePartners.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className={styles.partnerCard}
                style={{
                  ["--card-tilt" as string]: `${partner.tilt}deg`,
                }}
                aria-label={partner.name}
              >
                <div className={styles.logoWrapper}>
                  <Image
                    src={partner.logoSrc}
                    alt={`${partner.name} logo`}
                    width={partner.width}
                    height={partner.height}
                    className={styles.logoImg}
                    priority={idx < 7}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
