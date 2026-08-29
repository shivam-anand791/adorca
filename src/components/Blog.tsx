import styles from "./Blog.module.css";

interface BlogPost {
  id: string;
  tag: string;
  date: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Blog() {
  const posts: BlogPost[] = [
    {
      id: "seo-global",
      tag: "Organic Growth",
      date: "August 24, 2026",
      title: "Unlocking Organic Growth: The Future of Global SEO",
      desc: "How localized regional intent matching and Core Web Vitals optimization are driving organic traffic acquisition across cross-border markets.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      )
    },
    {
      id: "aso-boosters",
      tag: "App Store Optimization",
      date: "August 18, 2026",
      title: "ASO Best Practices for App Revenue Boosting",
      desc: "Key tactical steps to optimize app store conversions, streamline onboarding, retain active users, and boost subscriptions.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      )
    },
    {
      id: "programmatic-ads",
      tag: "Programmatic Bidding",
      date: "August 10, 2026",
      title: "Why Programmatic Bidding is Outperforming Ad Networks",
      desc: "Leveraging algorithmic audience segmentation and real-time bids adjustments to maximize returns and lower acquisition costs.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="12 8 8 12 16 12 12 8"></polygon>
        </svg>
      )
    }
  ];

  return (
    <section id="blog" className={`section ${styles.section}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Our Blog</span>
          <h2 className="section-title">News &amp; Blogs</h2>
          <p className="section-desc">
            Stay updated with the latest digital advertising, organic growth insights, and programmatic search trends from our international network.
          </p>
        </div>

        {/* Blog Grid */}
        <div className={styles.grid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.card}>
              {/* Thumbnail Mockup */}
              <div className={styles.thumbnailMockup}>
                {post.icon}
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <div className={styles.metaRow}>
                  <span className={styles.tag}>{post.tag}</span>
                  <span className={styles.date}>{post.date}</span>
                </div>
                <h3 className={styles.cardTitle}>
                  <a href="#contact">{post.title}</a>
                </h3>
                <p className={styles.cardDesc}>{post.desc}</p>
                <a href="#contact" className={styles.readMoreLink}>
                  Read Article
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
