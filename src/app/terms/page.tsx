import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Adorca 360 Engagement Terms and Performance Standards.",
  alternates: {
    canonical: "https://adorca360.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", padding: "calc(var(--nav-height) + 28px) 0 64px 0", backgroundColor: "var(--bg-page)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius-card)", padding: "clamp(28px, 4vw, 44px) clamp(20px, 3.5vw, 36px)", display: "flex", flexDirection: "column", gap: "20px", boxShadow: "var(--shadow-sm)" }}>
            <span className="section-subtitle">Legal &amp; Compliance</span>
            <h1 style={{ fontSize: "2.4rem", fontWeight: "800", color: "var(--text-primary)", letterSpacing: "-0.03em" }}>
              Terms of Service
            </h1>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Last Updated: August 2026</p>

            <div style={{ height: "1px", backgroundColor: "var(--border-light)", width: "100%" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", color: "var(--text-secondary)", lineHeight: "1.7", fontSize: "1rem" }}>
              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)" }}>1. Scope of Engagement</h2>
              <p>
                Adorca 360 provides technical search engine optimization, programmatic media strategy, content architecture, and conversion engineering services. All engagements are governed by defined sprint milestones and transparent performance deliverables.
              </p>

              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)" }}>2. Intellectual Property &amp; Client Assets</h2>
              <p>
                All custom code, schema architecture, keyword repositories, and data pipelines engineered specifically for a client remain the intellectual property and administrative possession of the client upon completion of milestones.
              </p>

              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)" }}>3. Verified Performance Standards</h2>
              <p>
                Adorca 360 focuses exclusively on verified, white-hat technical methodologies. We adhere strictly to official search engine webmaster guidelines and advertising platform policies, ensuring long-term compounding equity and algorithmic resilience.
              </p>

              <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--text-primary)" }}>4. Inquiries &amp; Legal Notices</h2>
              <p>
                For official legal notices or contractual terms, contact us at <a href="mailto:contact@adorca360.com" style={{ color: "var(--blue)", fontWeight: "600" }}>contact@adorca360.com</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
