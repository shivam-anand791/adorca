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

export default function WhyChooseUs() {
  const valuesList: ValueCard[] = [
    {
      title: "Reliable & transparent",
      desc: "All traffic data, keyword reports, and performance parameters are fully visible. We maintain honest communication with regular client updates.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "12+ years of SEO experience",
      desc: "Over a decade of handling search engine algorithms. We understand how to adapt campaigns for sustainable search rankings.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "Specialized local SEO experts",
      desc: "Direct regional specialists configured to extract user intents in over 50 international markets, matching campaigns to localized search behaviors.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    }
  ];

  const statsList: StatCircle[] = [
    { val: 79, label: "increase in overall traffic to your website" },
    { val: 85, label: "overall conversion ratio through local SEO" },
    { val: 68, label: "impression growth through international SEO" },
    { val: 75, label: "organic impression growth rate" }
  ];

  // SVG Circumference for Radius = 48 is 2 * Math.PI * 48 = 301.6
  const strokeCircumference = 301.6;

  return (
    <>
      {/* Fold 1: Why Choose (Light Background) */}
      <section id="why-choose" className={`section ${styles.section}`}>
        <div className="container">
          {/* Section Header */}
          <div className="section-header" style={{ margin: "0 auto 60px", textAlign: "center" }}>
            <span className="section-subtitle">Why Choose</span>
            <h2 className="section-title">Why choose</h2>
            <p className="section-desc">
              With our global network of digital specialists, we’re able to provide greater knowledge
            </p>
          </div>

          {/* Cards Grid */}
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
        </div>
      </section>

      {/* Fold 2: Stats Banner Container (Dark Blue Section) */}
      <section className={`section-dark ${styles.statsSection}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {statsList.map((stat, idx) => {
              const strokeOffset = strokeCircumference - (strokeCircumference * stat.val) / 100;
              return (
                <div key={idx} className={styles.statItem}>
                  <div className={styles.circleWrapper}>
                    <svg className={styles.svgRing} width="110" height="110">
                      {/* Inner Ring Backing */}
                      <circle 
                        cx="55" 
                        cy="55" 
                        r="48" 
                        stroke="#1e293b" 
                        strokeWidth="5" 
                        fill="transparent" 
                      />
                      {/* Colored Active Meter Ring */}
                      <circle 
                        cx="55" 
                        cy="55" 
                        r="48" 
                        stroke="#10b981" 
                        strokeWidth="5" 
                        fill="transparent" 
                        strokeDasharray={strokeCircumference}
                        strokeDashoffset={strokeOffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className={styles.percentageText}>{stat.val}%</span>
                  </div>
                  <p className={styles.statDesc}>{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
