"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

/* Shared logomark SVG used in Navbar, Footer, and Hero */
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
      {/* Hexagonal rounded background */}
      <path
        d="M20 3 L34 11 L34 29 L20 37 L6 29 L6 11 Z"
        fill="url(#logo-bg-grad)"
        rx="4"
      />
      {/* Bold A letterform */}
      <path
        d="M14.5 28 L20 13 L25.5 28"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 23 H23.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Accent arc top-right */}
      <path
        d="M27 9 A5 5 0 0 1 32 14"
        stroke="#FF6B57"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="logo-bg-grad" x1="6" y1="3" x2="34" y2="37" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6C4CF1" />
          <stop offset="1" stopColor="#8B6CF3" />
        </linearGradient>
      </defs>
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
  items: MegaItem[];
}

const megaCategories: MegaCategory[] = [
  {
    title: "Growth",
    items: [
      {
        href: "#service-growth",
        label: "Global Growth Marketing",
        desc: "Multi-market SEO strategies for international scale",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        ),
      },
      {
        href: "#service-digital",
        label: "Digital Marketing Services",
        desc: "Full-funnel performance campaigns across all channels",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
      {
        href: "#service-leadgen",
        label: "Lead Generation",
        desc: "High-intent prospect pipelines that convert",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Creative & Social",
    items: [
      {
        href: "#service-smm",
        label: "Social Media Marketing",
        desc: "Audience-first content that builds brand equity",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 2H7C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4z" />
            <path d="M8 12h8M8 8h8M8 16h5" />
          </svg>
        ),
      },
      {
        href: "#service-social",
        label: "Social Influence Marketing",
        desc: "Influencer partnerships with measurable ROI",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    title: "Tech & Performance",
    items: [
      {
        href: "#service-webdev",
        label: "Website Design & Dev",
        desc: "Conversion-optimized sites built for speed",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
        ),
      },
      {
        href: "#service-programmatic",
        label: "Programmatic Advertising",
        desc: "AI-driven bidding for maximum impression value",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
          </svg>
        ),
      },
      {
        href: "#service-boosters",
        label: "App & Revenue Boosters",
        desc: "ASO, retention loops, and monetisation uplift",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
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
    // Read theme setting on mount
    const activeTheme = document.documentElement.getAttribute("data-theme") as "light" | "dark" || "light";
    requestAnimationFrame(() => {
      setTheme(activeTheme);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo Area */}
          <a href="#" className={styles.logoArea} onClick={handleLinkClick}>
            <LogoMark size={36} />
            <span className={styles.logoText}>Adorca<span className={styles.logoTextHighlight}>360</span></span>
          </a>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu */}
          <nav className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ""}`}>
            <li className={styles.navItem}>
              <a href="#about" className={styles.navLink} onClick={handleLinkClick}>About</a>
            </li>

            {/* Services mega-menu trigger */}
            <li className={`${styles.navItem} ${styles.hasMega}`}>
              <a
                href="#service"
                className={styles.navLink}
                onClick={toggleServices}
              >
                Services
                <svg className={`${styles.arrowIcon} ${servicesOpen ? styles.arrowOpen : ""}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              {/* Mega Menu */}
              <div className={`${styles.megaMenu} ${servicesOpen ? styles.megaMenuOpen : ""}`}>
                <div className={styles.megaGrid}>
                  {megaCategories.map((cat) => (
                    <div key={cat.title} className={styles.megaCategory}>
                      <span className={styles.megaCategoryTitle}>{cat.title}</span>
                      <ul className={styles.megaList}>
                        {cat.items.map((item) => (
                          <li key={item.href}>
                            <a href={item.href} className={styles.megaItem} onClick={handleLinkClick}>
                              <span className={styles.megaIcon}>{item.icon}</span>
                              <span className={styles.megaText}>
                                <span className={styles.megaLabel}>{item.label}</span>
                                <span className={styles.megaDesc}>{item.desc}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            <li className={styles.navItem}>
              <a href="#why-choose" className={styles.navLink} onClick={handleLinkClick}>Why Choose</a>
            </li>

            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink} onClick={handleLinkClick}>Contact</a>
            </li>

            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink} onClick={handleLinkClick}>Advertiser Signup</a>
            </li>

            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink} onClick={handleLinkClick}>Affiliate Signup</a>
            </li>

            {/* Mobile Actions */}
            <div className={styles.actionsMobile}>
              <button className="btn btn-secondary" onClick={toggleTheme}>
                {theme === "light" ? "Switch to Dark" : "Switch to Light"}
              </button>
              <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>
                Talk to a Strategist
              </a>
            </div>
          </nav>

          {/* Desktop Actions — single CTA */}
          <div className={styles.actions}>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            {/* Single CTA — duplicate removed */}
            <a href="#contact" className="btn btn-primary" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
              Talk to a Strategist
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
