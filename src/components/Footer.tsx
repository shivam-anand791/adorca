import Link from "next/link";
import styles from "./Footer.module.css";
import { LogoMark } from "./Navbar";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info Column */}
          <div className={styles.brandCol}>
            <div className={styles.logoArea}>
              <LogoMark size={30} />
              <span className={styles.logoText}>Adorca<span className={styles.logoTextHighlight}>360</span></span>
            </div>
            <p className={styles.tagline}>
              Adorca360 drives measurable growth for brands in 50+ markets — from organic search and programmatic to affiliate and app monetisation.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/#about">About Us</Link></li>
              <li className={styles.linkItem}><Link href="/#service">Our Services</Link></li>
              <li className={styles.linkItem}><Link href="/case-studies">Case Studies</Link></li>
              <li className={styles.linkItem}><Link href="/#testimonials">Testimonials</Link></li>
              <li className={styles.linkItem}><Link href="/blog">News &amp; Blogs</Link></li>
              <li className={styles.linkItem}><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linksList}>
              <li className={styles.linkItem}><Link href="/#service-growth">Global Growth Marketing</Link></li>
              <li className={styles.linkItem}><Link href="/#service-webdev">Website Designing</Link></li>
              <li className={styles.linkItem}><Link href="/#service-programmatic">Programmatic Ads</Link></li>
              <li className={styles.linkItem}><Link href="/#service-leadgen">Lead Generation</Link></li>
              <li className={styles.linkItem}><Link href="/#service-smm">Social Media Growth</Link></li>
              <li className={styles.linkItem}><Link href="/#service-boosters">App &amp; Revenue Boosters</Link></li>
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
