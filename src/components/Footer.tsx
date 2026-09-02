import Link from "next/link";
import { LogoMark } from "./Navbar";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoArea}>
              <LogoMark size={32} />
              <span className={styles.logoText}>
                Adorca<span className={styles.logoTextHighlight}>360</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Adorca 360 is a performance growth and search marketing studio. We engineer high-velocity organic search, programmatic bidding, and localized digital funnels across 50+ international markets.
            </p>
            <div className={styles.contactEmailBox}>
              <span className={styles.contactEmailLabel}>Inquiries &amp; Strategy:</span>
              <a href="mailto:contact@adorca360.com" className={styles.contactEmail}>
                contact@adorca360.com
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Platform</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/#work">Featured Work</Link></li>
              <li className={styles.linkItem}><Link href="/#services">Service Pillars</Link></li>
              <li className={styles.linkItem}><Link href="/#growth-system">Growth System</Link></li>
              <li className={styles.linkItem}><Link href="/#approach">Approach</Link></li>
              <li className={styles.linkItem}><Link href="/#opportunity-tool">Growth Diagnostic</Link></li>
              <li className={styles.linkItem}><Link href="/#insights">News &amp; Insights</Link></li>
              <li className={styles.linkItem}><Link href="/#about">About Adorca</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/#services">Global Growth Marketing</Link></li>
              <li className={styles.linkItem}><Link href="/#services">Technical SEO &amp; Indexing</Link></li>
              <li className={styles.linkItem}><Link href="/#services">Programmatic Advertising</Link></li>
              <li className={styles.linkItem}><Link href="/#services">Lead Generation Pipelines</Link></li>
              <li className={styles.linkItem}><Link href="/#services">Website Design &amp; Dev</Link></li>
              <li className={styles.linkItem}><Link href="/#services">App Store Optimization</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright area */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            &copy; {currentYear} Adorca 360. All rights reserved. 100% Attribution Transparency.
          </span>
          <div className={styles.legalLinks}>
            <a href="#about" className={styles.legalLink}>Operating Model</a>
            <span className={styles.legalDot}>&bull;</span>
            <a href="mailto:contact@adorca360.com" className={styles.legalLink}>Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
