import Link from "next/link";
import { LogoMark } from "./Navbar";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoArea} aria-label="Adorca 360 Home">
              <LogoMark size={28} />
              <span className={styles.logoText}>
                ADORCA <span className={styles.logoHighlight}>360</span>
              </span>
            </Link>
            <p className={styles.tagline}>
              Digital search and performance engineering studio. Engineering compounding organic search, programmatic distribution, and localized conversion architecture across 50+ global markets.
            </p>
            <div className={styles.contactEmailBox}>
              <span className={styles.contactLabel}>Inquiries &amp; Strategy:</span>
              <a href="mailto:contact@adorca360.com" className={styles.contactEmail}>
                contact@adorca360.com
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navigation</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/#work" className={styles.footerLink}>
                  Work
                </Link>
              </li>
              <li>
                <Link href="/#services" className={styles.footerLink}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#approach" className={styles.footerLink}>
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.footerLink}>
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/#about" className={styles.footerLink}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/#opportunity-tool" className={styles.footerLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Governance Column */}
          <div className={styles.legalCol}>
            <h4 className={styles.colTitle}>Governance</h4>
            <ul className={styles.linksList}>
              <li>
                <Link href="/privacy" className={styles.footerLink}>
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={styles.footerLink}>
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className={styles.footerLink}>
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Verified Copyright */}
        <div className={styles.bottomBar}>
          <span className={styles.copyright}>
            &copy; {currentYear} ADORCA 360. All rights reserved. 100% Attribution &amp; Data Ownership.
          </span>
          <div className={styles.bottomLegalLinks}>
            <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
            <span className={styles.dot}>•</span>
            <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
