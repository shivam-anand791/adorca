"use client";

import { useState } from "react";
import { useIntersection } from "./utils";
import styles from "./GrowthOpportunityTool.module.css";

interface PlanParams {
  website: string;
  industry: string;
  market: string;
  objective: string;
  name: string;
  email: string;
  notes: string;
}

interface FormErrors {
  website?: string;
  name?: string;
  email?: string;
}

const INDUSTRIES = [
  "E-Commerce & Retail",
  "B2B SaaS & Fintech",
  "Mobile Apps & Gaming",
  "Professional & Corporate Services",
  "Healthcare & Life Sciences",
  "Other Direct-to-Consumer",
];

const MARKETS = [
  "Global Multi-Region (50+ Markets)",
  "North America (US & Canada)",
  "Western Europe (UK, DE, FR, ES, IT)",
  "Latin America (BR, MX, AR, CO)",
  "Asia-Pacific (AU, SG, JP, KR)",
  "Middle East & GCC",
];

const OBJECTIVES = [
  { id: "seo", label: "Organic Search & SEO Scale", focus: "Technical architecture, hreflang & semantic clusters" },
  { id: "cpa", label: "Lower Cost-Per-Acquisition (CPA)", focus: "Programmatic bidding & landing funnel experimentation" },
  { id: "global", label: "Cross-Border Market Expansion", focus: "Native linguistic keyword extraction & localized campaigns" },
  { id: "aso", label: "App Store Ranking & Downloads", focus: "ASO keyword velocity, review pipelines & retention loops" },
];

export default function GrowthOpportunityTool() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string>("");

  const [params, setParams] = useState<PlanParams>({
    website: "",
    industry: INDUSTRIES[0],
    market: MARKETS[0],
    objective: OBJECTIVES[0].id,
    name: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const selectedObjective = OBJECTIVES.find((o) => o.id === params.objective) || OBJECTIVES[0];

  const handleParamChange = (field: keyof PlanParams, value: string) => {
    setParams((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateStep1 = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!params.website.trim()) {
      tempErrors.website = "Please provide your website or domain URL.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!params.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }
    if (!params.email.trim()) {
      tempErrors.email = "Work Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(params.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    if (validateStep2()) {
      setStatus("loading");
      setServerError("");

      try {
        const res = await fetch("/api/opportunity", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(params),
        });

        if (!res.ok) {
          const errData = await res.json().catch(() => ({}));
          throw new Error(errData.error || "Unable to submit growth diagnostic brief. Please try again.");
        }

        setStatus("success");
      } catch (err: unknown) {
        setStatus("error");
        setServerError(err instanceof Error ? err.message : "A network error occurred. Please try again.");
      }
    }
  };

  return (
    <section id="opportunity-tool" className="floatingCardSection" ref={revealRef}>
      {/* Section Header */}
      <div className="section-header center">
        <span className="section-subtitle">Growth Diagnostics</span>
        <h2 className="section-title">What&apos;s Your Growth Opportunity?</h2>
        <p className="section-desc">
          Configure your target market and performance objectives. Our senior strategists will review your parameters and prepare a tailored growth roadmap.
        </p>
      </div>

      <div className={`${styles.toolContainer} ${isVisible ? styles.visible : ""}`}>
        {status !== "success" ? (
          <div className={styles.toolGrid}>
            {/* Left: Interactive Form */}
            <div className={styles.formCol}>
              <div className={styles.stepIndicator}>
                <span className={`${styles.stepBadge} ${step === 1 ? styles.stepBadgeActive : ""}`}>
                  Step 1: Campaign Parameters
                </span>
                <span className={styles.stepDivider}>&rarr;</span>
                <span className={`${styles.stepBadge} ${step === 2 ? styles.stepBadgeActive : ""}`}>
                  Step 2: Consultation Details
                </span>
              </div>

              {status === "error" && (
                <div className={styles.serverErrorBox} role="alert" aria-live="polite">
                  <div className={styles.errorTextRow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <div>
                      <strong className={styles.errorTitle}>Unable to submit brief.</strong>
                      <p className={styles.errorMessage}>{serverError || "Please check your connection and try again."}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={styles.retryBtn}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Retry
                  </button>
                </div>
              )}

              {step === 1 ? (
                <form className={styles.form} onSubmit={handleNextStep} noValidate>
                  {/* Website URL */}
                  <div className={styles.formGroup}>
                    <label htmlFor="tool-website" className={styles.label}>
                      Website / App URL <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="tool-website"
                      className={`${styles.input} ${errors.website ? styles.inputError : ""}`}
                      placeholder="e.g. yourcompany.com"
                      value={params.website}
                      onChange={(e) => handleParamChange("website", e.target.value)}
                    />
                    {errors.website && <span className={styles.errorText}>{errors.website}</span>}
                  </div>

                  {/* Industry Select */}
                  <div className={styles.formGroup}>
                    <label htmlFor="tool-industry" className={styles.label}>Industry Vertical</label>
                    <select
                      id="tool-industry"
                      className={styles.select}
                      value={params.industry}
                      onChange={(e) => handleParamChange("industry", e.target.value)}
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  {/* Market Select */}
                  <div className={styles.formGroup}>
                    <label htmlFor="tool-market" className={styles.label}>Primary Target Region</label>
                    <select
                      id="tool-market"
                      className={styles.select}
                      value={params.market}
                      onChange={(e) => handleParamChange("market", e.target.value)}
                    >
                      {MARKETS.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Objective Radios */}
                  <div className={styles.formGroup}>
                    <label className={styles.label} id="growth-goal-label">Primary Growth Goal</label>
                    <div className={styles.objectiveGrid} role="radiogroup" aria-labelledby="growth-goal-label">
                      {OBJECTIVES.map((obj) => (
                        <button
                          key={obj.id}
                          type="button"
                          role="radio"
                          aria-checked={params.objective === obj.id}
                          className={`${styles.objectiveCard} ${params.objective === obj.id ? styles.objectiveCardActive : ""}`}
                          onClick={() => handleParamChange("objective", obj.id)}
                        >
                          <span className={styles.objRadio} aria-hidden="true">
                            {params.objective === obj.id && <span className={styles.objRadioDot} />}
                          </span>
                          <span className={styles.objText}>
                            <span className={styles.objLabel}>{obj.label}</span>
                            <span className={styles.objSub}>{obj.focus}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "10px" }}>
                    Configure Strategy Preview &rarr;
                  </button>
                </form>
              ) : (
                /* Step 2: Contact Details */
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  <div className={styles.formGroup}>
                    <label htmlFor="tool-name" className={styles.label}>
                      Full Name <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="tool-name"
                      className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                      placeholder="e.g. Alex Morgan"
                      value={params.name}
                      onChange={(e) => handleParamChange("name", e.target.value)}
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="tool-email" className={styles.label}>
                      Work Email <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="email"
                      id="tool-email"
                      className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                      placeholder="e.g. alex@company.com"
                      value={params.email}
                      onChange={(e) => handleParamChange("email", e.target.value)}
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="tool-notes" className={styles.label}>Specific Growth Targets or Timeline (Optional)</label>
                    <textarea
                      id="tool-notes"
                      className={styles.textarea}
                      placeholder="Tell us about your current monthly traffic, active ad spend, or target timeline..."
                      rows={3}
                      value={params.notes}
                      onChange={(e) => handleParamChange("notes", e.target.value)}
                    />
                  </div>

                  <div className={styles.buttonRow}>
                    <button type="button" className="btn btn-secondary" onClick={() => setStep(1)}>
                      &larr; Back to Parameters
                    </button>
                    <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                      {status === "loading" ? "Submitting Brief..." : "Submit for Strategy Audit"}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Live Strategy Preview Blueprint */}
            <div className={styles.previewCol}>
              <div className={styles.previewCard}>
                <div className={styles.previewHeader}>
                  <span className={styles.previewBadge}>Tailored Growth Blueprint</span>
                  <span className={styles.previewMarket}>{params.market}</span>
                </div>

                <div className={styles.blueprintDomain}>
                  <span className={styles.domainLabel}>Target Domain:</span>
                  <span className={styles.domainVal}>{params.website || "yourwebsite.com"}</span>
                </div>

                <div className={styles.strategyBlock}>
                  <h4 className={styles.strategyTitle}>Strategic Focus Area</h4>
                  <p className={styles.strategyHighlight}>{selectedObjective.label}</p>
                  <p className={styles.strategyDesc}>{selectedObjective.focus}</p>
                </div>

                {/* Recommended Channels */}
                <div className={styles.channelsBox}>
                  <span className={styles.channelsHeading}>Recommended Growth Channels</span>
                  <div className={styles.channelsList}>
                    <div className={styles.channelItem}>
                      <span className={styles.chDot} />
                      <span>Technical Architecture &amp; Hreflang Audit</span>
                    </div>
                    <div className={styles.channelItem}>
                      <span className={styles.chDot} />
                      <span>Native Multilingual Intent Clustering</span>
                    </div>
                    <div className={styles.channelItem}>
                      <span className={styles.chDot} />
                      <span>First-Party Server-Side Attribution Tracking</span>
                    </div>
                  </div>
                </div>

                <div className={styles.guaranteeNote}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span>100% Data &amp; Dashboard Ownership Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Success Confirmation State */
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className={styles.successTitle}>Growth Brief Received!</h3>
            <p className={styles.successDesc}>
              Thank you, <strong>{params.name}</strong>. We have registered your parameters for <strong>{params.website}</strong> ({params.industry} &bull; {params.market}). Our strategy director is reviewing your domain architecture and will reach out to <strong>{params.email}</strong> within one business day with your tailored growth plan.
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setStatus("idle");
                setStep(1);
              }}
            >
              Configure Another Blueprint
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
