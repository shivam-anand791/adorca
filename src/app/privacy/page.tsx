import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Adorca 360",
  description: "Adorca 360 Privacy Policy and Data Ownership Standards.",
  alternates: {
    canonical: "https://adorca360.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "calc(var(--nav-height) + 40px) 0 80px 0", backgroundColor: "var(--bg-page)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-card)", padding: "48px 40px", display: "flex", flexDirection: "column", gap: "24px", boxShadow: "var(--shadow-md)" }}>
            <span className="section-subtitle">Legal &amp; Compliance</span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Last Updated: August 2026</p>

            <div style={{ height: "1px", backgroundColor: "var(--border-light)", width: "100%" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "1rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)" }}>1. 100% Client Data Ownership</h2>
              <p>
                At Adorca 360, our core operating principle is complete data transparency and client ownership. All Google Analytics 4 accounts, Google Search Console properties, advertising platform containers, and custom Looker Studio dashboards configured during an engagement remain the sole administrative property of the client.
              </p>

              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)" }}>2. Information Collection &amp; Use</h2>
              <p>
                When you use our Growth Opportunity Diagnostic Tool or submit consultation requests, we collect standard diagnostic metrics (such as target domain, monthly search volume tier, primary growth objective, and contact details) strictly for the purpose of generating tailored growth recommendations and communicating with you.
              </p>

              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)" }}>3. Third-Party Network Privacy</h2>
              <p>
                We do not sell, rent, or trade your personal or operational data to any third party. Data interactions with verified advertising and search networks (e.g., Google Ads, Taboola, Outbrain, Amazon Partner Network) are governed by direct platform APIs configured under client-owned accounts.
              </p>

              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)" }}>4. Contact &amp; Inquiries</h2>
              <p>
                For questions regarding data processing, privacy, or account configuration, contact our team at <a href="mailto:contact@adorca360.com" style={{ color: "var(--blue)", fontWeight: "600" }}>contact@adorca360.com</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
