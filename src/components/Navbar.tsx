"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Read theme setting on mount
    const activeTheme = document.documentElement.getAttribute("data-theme") as "light" | "dark" || "light";
    setTheme(activeTheme);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="16" stroke="url(#logo-grad-head)" strokeWidth="3" strokeLinecap="round" strokeDasharray="70 20"/>
              <path d="M14 26L20 14L26 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17 22H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="28" cy="14" r="3.5" fill="#10b981"/>
              <defs>
                <linearGradient id="logo-grad-head" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#10b981"/>
                  <stop offset="1" stopColor="#3b82f6"/>
                </linearGradient>
              </defs>
            </svg>
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
            
            <li className={styles.navItem}>
              <a 
                href="#service" 
                className={styles.navLink} 
                onClick={toggleServices}
              >
                Service
                <svg className={styles.arrowIcon} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <div className={`${styles.dropdown} ${servicesOpen ? styles.dropdownOpen : ""}`}>
                <a href="#service-social" className={styles.dropdownLink} onClick={handleLinkClick}>Social Influence Marketing</a>
                <a href="#service-boosters" className={styles.dropdownLink} onClick={handleLinkClick}>App & Revenue Boosters</a>
                <a href="#service-leadgen" className={styles.dropdownLink} onClick={handleLinkClick}>Lead generation service</a>
                <a href="#service-programmatic" className={styles.dropdownLink} onClick={handleLinkClick}>Programmatic advertising Growth</a>
                <a href="#service-growth" className={styles.dropdownLink} onClick={handleLinkClick}>Global Growth Marketing</a>
                <a href="#service-smm" className={styles.dropdownLink} onClick={handleLinkClick}>Social Media Marketing</a>
                <a href="#service-webdev" className={styles.dropdownLink} onClick={handleLinkClick}>Website Designing & Development</a>
                <a href="#service-digital" className={styles.dropdownLink} onClick={handleLinkClick}>Digital Marketing Services</a>
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

            {/* Mobile Actions: Dark Mode Toggle inside menu */}
            <div className={styles.actionsMobile}>
              <button className="btn btn-secondary" onClick={toggleTheme}>
                {theme === "light" ? "Switch to Dark" : "Switch to Light"}
              </button>
              <a href="#contact" className="btn btn-green" onClick={handleLinkClick}>
                Contact Us
              </a>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className={styles.actions}>
            {/* Theme Toggle Button */}
            <button 
              className={styles.themeToggle} 
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
            >
              {theme === "light" ? (
                // Moon Icon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                // Sun Icon
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>
            <a href="#contact" className="btn btn-green" style={{ padding: "8px 18px", fontSize: "0.85rem" }}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
