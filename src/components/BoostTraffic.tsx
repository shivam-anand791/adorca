import styles from "./BoostTraffic.module.css";

export default function BoostTraffic() {
  return (
    <section id="about" className="floatingCardSection">
      <div className={styles.container}>
        {/* Left Column: Mock SERP Dashboard */}
        <div className={styles.dashboard}>
          <div className={styles.window}>
            <div className={styles.windowHeader}>
              <div className={`${styles.dot} ${styles.dotActive}`}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.searchBarMock}>
                <span>target keywords ranking...</span>
              </div>
            </div>
            <div className={styles.windowBody}>
              {/* Result 1 - Top Position */}
              <div className={`${styles.serpItem} ${styles.serpActive}`}>
                <span className={styles.serpUrl}>https://adorca360.com/global-growth</span>
                <h4 className={styles.serpTitle}>#1 Organic Rank - Direct Revenue Scaler</h4>
                <p className={styles.serpSnippet}>
                  DOMINATE search result placements. Our targeted multi-market SEO strategies put your website 
                  directly in front of ready-to-buy audiences, boosting conversion metrics.
                </p>
                <span className={styles.serpBadge}>Pos #1</span>
              </div>

              {/* Result 2 */}
              <div className={styles.serpItem}>
                <span className={styles.serpUrl}>https://competitor.com/standard-seo</span>
                <h4 className={styles.serpTitle}>Generic Marketing Agency</h4>
                <p className={styles.serpSnippet}>
                  Standard programmatic channels with typical digital campaigns. High ad spends and minimal long-term search index equity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Copywriting */}
        <div className={styles.content}>
          <span className="section-subtitle">Boost Website Traffic</span>
          <h2 className={`section-title ${styles.title}`}>Dominate Search. Capture High-Value Intent.</h2>
          <p className={styles.desc}>
            We deploy advanced semantic content hubs and local search engine optimizations to ensure your brand captures primary search queries in any language.
          </p>
          <p className={styles.desc}>
            Unlike pay-per-click ads that stop delivering value the second you cease spending, organic search builds compounding equity that reduces acquisition costs over time.
          </p>

          <div>
            <a href="#why-choose" className="btn btn-primary">
              Talk to a Strategist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
