"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

/* Signature Adorca 360 Logomark with Electric Blue & Lime Accents */
export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer subtle orbital ring */}
      <circle cx="20" cy="20" r="18.5" stroke="var(--blue)" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="3 3" />
      {/* Deep Navy rounded square badge */}
      <rect x="5" y="5" width="30" height="30" rx="8" fill="var(--navy)" />
      {/* Orbit swoosh arc */}
      <path
        d="M9 28 C 12 12, 28 10, 31 16"
        stroke="var(--lime)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* Bold A letterform in Blue */}
      <path
        d="M14.5 27 L20 13 L25.5 27"
        stroke="#FFFFFF"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 22.5 H23.5"
        stroke="var(--blue)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Glowing orbital node */}
      <circle cx="31" cy="16" r="2.5" fill="var(--lime)" />
    </svg>
  );
}

interface MegaItem {
  href: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
}

interface MegaCategory {
  title: string;
  pillarNum: string;
  items: MegaItem[];
}

const megaCategories: MegaCategory[] = [
  {
    title: "Acquire",
    pillarNum: "01",
    items: [
      {
        href: "/#services",
        label: "Global Growth Marketing",
        desc: "Cross-border search dominance in 50+ regions",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
      {
        href: "/#services",
        label: "Technical SEO & Indexing",
        desc: "Architecture, crawl efficiency & Core Web Vitals",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        href: "/#services",
        label: "Programmatic Advertising",
        desc: "Algorithmic real-time bidding & inventory routing",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        ),
      },
      {
        href: "/#services",
        label: "Lead Generation Pipelines",
        desc: "High-intent customer acquisition & capture funnels",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <polyline points="17 11 19 13 23 9" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Amplify",
    pillarNum: "02",
    items: [
      {
        href: "/#services",
        label: "Digital Marketing Strategy",
        desc: "Full-funnel consulting & data-driven ROI roadmaps",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        ),
      },
      {
        href: "/#services",
        label: "Social Media Marketing",
        desc: "Digital community architecture & organic reach",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        ),
      },
      {
        href: "/#services",
        label: "Influencer & Creator Marketing",
        desc: "Vetted creator partnerships driving referral revenue",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Convert",
    pillarNum: "03",
    items: [
      {
        href: "/#services",
        label: "Website Design & Development",
        desc: "High-performance Next.js web applications",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
      {
        href: "/#services",
        label: "App & Revenue Boosters",
        desc: "App Store Optimization (ASO) & category rank",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        ),
      },
      {
        href: "/#services",
        label: "Conversion Rate Optimization",
        desc: "Systematic user journey audits & A/B testing",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        ),
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const activeTheme = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
    requestAnimationFrame(() => {
      setTheme(activeTheme);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMenuOpen(false);
          setServicesOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setServicesOpen(false);
  };

  const toggleServices = (e: React.MouseEvent) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    }
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className="container">
        <div className={styles.navContainer}>
          {/* Brand Logo */}
          <Link href="/" className={styles.logoArea} onClick={handleLinkClick} aria-label="Adorca 360 Home">
            <LogoMark size={36} />
            <span className={styles.logoText}>
              Adorca<span className={styles.logoTextHighlight}>360</span>
            </span>
          </Link>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            type="button"
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Mobile Overlay */}
          {menuOpen && (
            <div
              className={styles.mobileOverlay}
              onClick={handleLinkClick}
              aria-hidden="true"
            />
          )}

          {/* Navigation Links */}
          <nav className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`} aria-label="Main Navigation">
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/#work" className={styles.navLink} onClick={handleLinkClick}>
                  Work
                </Link>
              </li>

              {/* Services 3-Pillar Mega Menu */}
              <li className={`${styles.navItem} ${styles.hasMega}`}>
                <Link
                  href="/#services"
                  className={styles.navLink}
                  onClick={toggleServices}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <svg className={`${styles.arrowIcon} ${servicesOpen ? styles.arrowOpen : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                {/* Mega Dropdown */}
                <div className={`${styles.megaMenu} ${servicesOpen ? styles.megaMenuOpen : ""}`}>
                  <div className={styles.megaGrid}>
                    {megaCategories.map((cat) => (
                      <div key={cat.title} className={styles.megaCategory}>
                        <div className={styles.categoryHeader}>
                          <span className={styles.pillarBadge}>{cat.pillarNum}</span>
                          <span className={styles.megaCategoryTitle}>{cat.title}</span>
                        </div>
                        <ul className={styles.megaList}>
                          {cat.items.map((item) => (
                            <li key={item.label}>
                              <Link href={item.href} className={styles.megaItem} onClick={handleLinkClick}>
                                <span className={styles.megaIcon}>{item.icon}</span>
                                <span className={styles.megaText}>
                                  <span className={styles.megaLabel}>{item.label}</span>
                                  <span className={styles.megaDesc}>{item.desc}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>

              <li className={styles.navItem}>
                <Link href="/#growth-system" className={styles.navLink} onClick={handleLinkClick}>
                  Growth System
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/#approach" className={styles.navLink} onClick={handleLinkClick}>
                  Approach
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/#opportunity-tool" className={styles.navLink} onClick={handleLinkClick}>
                  Opportunity Tool
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/blog" className={styles.navLink} onClick={handleLinkClick}>
                  Insights
                </Link>
              </li>

              <li className={styles.navItem}>
                <Link href="/#about" className={styles.navLink} onClick={handleLinkClick}>
                  About
                </Link>
              </li>
            </ul>

            {/* Mobile Actions Drawer */}
            <div className={styles.actionsMobile}>
              <button type="button" className="btn btn-secondary" onClick={toggleTheme} style={{ width: "100%" }}>
                {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
              </button>
              <Link href="/#opportunity-tool" className="btn btn-primary" onClick={handleLinkClick} style={{ width: "100%" }}>
                Talk to a Strategist
              </Link>
            </div>
          </nav>

          {/* Desktop Right Actions */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              )}
            </button>

            <Link href="/#opportunity-tool" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: "0.88rem" }}>
              Talk to a Strategist
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
