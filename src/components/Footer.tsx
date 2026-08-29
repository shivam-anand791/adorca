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
