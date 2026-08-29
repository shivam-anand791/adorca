import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info Column */}
          <div className={styles.brandCol}>
            <div className={styles.logoArea}>
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="16" stroke="url(#footer-logo-grad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="70 20"/>
                <path d="M14 26L20 14L26 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 22H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="28" cy="14" r="3.5" fill="#10b981"/>
                <defs>
                  <linearGradient id="footer-logo-grad" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10b981"/>
                    <stop offset="1" stopColor="#6C4CF1"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.logoText}>Adorca<span className={styles.logoTextHighlight}>360</span></span>
            </div>
            <p className={styles.tagline}>
              Our comprehensive SEO solutions are designed to put your website in front of the audience at the right time.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#about">About Us</a></li>
              <li className={styles.linkItem}><a href="#service">Our Services</a></li>
              <li className={styles.linkItem}><a href="#case-studies">Case Studies</a></li>
              <li className={styles.linkItem}><a href="#testimonials">Testimonials</a></li>
              <li className={styles.linkItem}><a href="#blog">News &amp; Blogs</a></li>
              <li className={styles.linkItem}><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#service-growth">Global Growth Marketing</a></li>
              <li className={styles.linkItem}><a href="#service-webdev">Website Designing</a></li>
              <li className={styles.linkItem}><a href="#service-programmatic">Programmatic Ads</a></li>
              <li className={styles.linkItem}><a href="#service-leadgen">Lead Generation</a></li>
              <li className={styles.linkItem}><a href="#service-smm">Social Media Growth</a></li>
              <li className={styles.linkItem}><a href="#service-boosters">App &amp; Revenue Boosters</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            &copy; {currentYear} Adorca360. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
