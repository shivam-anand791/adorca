import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContainer}>
          {/* Left Column: Copywriting */}
          <div className={styles.content}>
            <span className={styles.welcomeTag}>• Welcome to Adorca360.</span>
            <h1 className={styles.title}>
              Expert Seo and <br />
              Digital Agency <span className={styles.serifItalic}>Marketing</span>
            </h1>
            <p className={styles.description}>
              Search Engine Optimization is one of the best, most evergreen methods of growing business online. 
              It’s got a proven track record and yields tangible results.
            </p>
            <div className={styles.ctas}>
              <a href="#contact" className={`btn btn-primary ${styles.getStartedBtn}`}>
                Get started now
              </a>
            </div>
          </div>

          {/* Right Column: Visual orbital chart widget */}
          <div className={styles.visual}>
            <div className={styles.graphicBox}>
              <div className={styles.orbit1}>
                <div className={styles.orbit2}>
                  <div className={styles.orbit3}></div>
                </div>
              </div>
              <div className={styles.centerPoint}></div>

              {/* Green stats overlay */}
              <div className={styles.statsOverlay}>
                <span className={styles.statsVal}>79%</span>
                <span className={styles.statsLabel}>increase in overall traffic to your website</span>
              </div>

              {/* Line chart mockup overlay */}
              <div className={styles.lineChartMock}>
                <span className={styles.chartTitle}>SEO Performance</span>
                <svg className={styles.chartSvg} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M0 35 Q 15 35, 25 25 T 50 20 T 75 10 T 100 2" 
                    stroke="#10b981" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path 
                    d="M0 35 Q 15 35, 25 25 T 50 20 T 75 10 T 100 2 L 100 40 L 0 40 Z" 
                    fill="url(#chart-grad-hero)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="chart-grad-hero" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981"/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
