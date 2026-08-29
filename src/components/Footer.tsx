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
                <circle cx="20" cy="20" r="16" stroke="url(#footer-logo-grad-2)" strokeWidth="3" strokeLinecap="round" strokeDasharray="70 20"/>
                <path d="M14 26L20 14L26 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 22H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="28" cy="14" r="3.5" fill="#10b981"/>
                <defs>
                  <linearGradient id="footer-logo-grad-2" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10b981"/>
                    <stop offset="1" stopColor="#3b82f6"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className={styles.logoText}>Adorca<span className={styles.logoTextHighlight}>360</span></span>
            </div>
            <p className={styles.tagline}>
              Our comprehensive SEO solutions are designed to put your website in front of the audience at the right time.
            </p>
            
            {/* Social Icons list */}
            <div className={styles.socials}>
              {/* Facebook */}
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className={styles.socialIcon} aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Pinterest */}
              <a href="#" className={styles.socialIcon} aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className={styles.socialIcon} aria-label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>The Links</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#about">About</a></li>
              <li className={styles.linkItem}><a href="#service">Our Services</a></li>
              <li className={styles.linkItem}><a href="#about">Case Studies</a></li>
              <li className={styles.linkItem}><a href="#about">News &amp; Blogs</a></li>
              <li className={styles.linkItem}><a href="#about">Our Team</a></li>
              <li className={styles.linkItem}><a href="#contact">Contacts</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><a href="#service-social">SEO &amp; Marketing</a></li>
              <li className={styles.linkItem}><a href="#service-webdev">Web Development</a></li>
              <li className={styles.linkItem}><a href="#service-programmatic">Digital Advertising</a></li>
              <li className={styles.linkItem}><a href="#service-growth">Marketing Campaigns</a></li>
              <li className={styles.linkItem}><a href="#service-smm">Social Media Marketing</a></li>
              <li className={styles.linkItem}><a href="#service-social">PR and Promotions</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            &copy; {currentYear} . All rights reserved Adorca360
          </span>
        </div>
      </div>
    </footer>
  );
}
