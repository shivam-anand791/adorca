import Image from "next/image";
import styles from "./ProofStrip.module.css";

const PROOF_POINTS = [
  {
    val: "50+",
    label: "Markets Served",
    desc: "Localized search intelligence across international territories",
  },
  {
    val: "12+",
    label: "Years Experience",
    desc: "Algorithmic search resilience across every major core update",
  },
  {
    val: "100%",
    label: "Attribution Ownership",
    desc: "Complete administrative control of your analytics & tag pipelines",
  },
  {
    val: "Direct",
    label: "Network Integrations",
    desc: "Premier real-time bidding on top search & affiliate platforms",
  },
];

const PARTNER_LOGOS = [
  { name: "Google Ads", src: "/logos/google-ads.svg", width: 120, height: 32 },
  { name: "Amazon Partner", src: "/logos/amazon-partner.svg", width: 120, height: 32 },
  { name: "Taboola Ads", src: "/logos/taboola-ads.svg", width: 110, height: 32 },
  { name: "Outbrain", src: "/logos/outbrain.svg", width: 110, height: 32 },
  { name: "CJ Affiliate", src: "/logos/cj-affiliate.svg", width: 120, height: 32 },
  { name: "ClickBank", src: "/logos/clickbank.svg", width: 115, height: 32 },
  { name: "ShareASale", src: "/logos/shareasale.svg", width: 115, height: 32 },
];

export default function ProofStrip() {
  return (
    <section className={styles.section} aria-label="Verified Performance Proof">
      <div className="container">
        {/* KPI Counter Grid */}
        <div className={styles.kpiGrid}>
          {PROOF_POINTS.map((item, idx) => (
            <div key={idx} className={styles.kpiCard}>
              <span className={styles.kpiVal}>{item.val}</span>
              <span className={styles.kpiLabel}>{item.label}</span>
              <p className={styles.kpiDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Partner Networks Bar */}
        <div className={styles.partnerRow}>
          <span className={styles.partnerIntro}>Direct Network Integrations:</span>
          <div className={styles.logoMarquee}>
            <div className={styles.logoTrack}>
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((p, i) => (
                <div key={`${p.name}-${i}`} className={styles.logoItem} title={p.name}>
                  <Image
                    src={p.src}
                    alt={`${p.name} logo`}
                    width={p.width}
                    height={p.height}
                    className={styles.logoImg}
                    priority={i < 7}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
