"use client";

import { useState } from "react";
import styles from "./ConsultationForm.module.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      tempErrors.name = "Full Name is required.";
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }
    
    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="floatingCardSection">
      <div className={styles.container}>
        {/* Left Column: Form */}
        <div className={styles.formCol}>
          {!isSubmitted ? (
            <>
              <div className={styles.formHeader}>
                <span className={styles.formSubtitle}>Consultation Request</span>
                <h3 className={styles.formTitle}>Schedule Free SEO Consultation</h3>
                <p className={styles.formDesc}>
                  Submit details about your website performance targets and our audit team will prepare a custom report.
                </p>
              </div>
              
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`} 
                    placeholder=" " 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className={`${styles.input} ${errors.email ? styles.inputError : ""}`} 
                    placeholder=" " 
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>

                {/* Subject */}
                <div className={styles.formGroup}>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className={`${styles.input} ${errors.subject ? styles.inputError : ""}`} 
                    placeholder=" " 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                </div>

                {/* Message */}
                <div className={styles.formGroup}>
                  <textarea 
                    id="message" 
                    name="message" 
                    className={styles.textarea} 
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message" className={styles.textareaLabel}>Message</label>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: "100%", marginTop: "10px" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </>
          ) : (
            /* Success Panel */
            <div className={styles.successContainer}>
              <div className={styles.successIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 className={styles.successTitle}>Mail Sent Successfully!</h3>
              <p className={styles.successDesc}>
                Thank you, <strong>{formData.name}</strong>. We have received your consultation brief 
                regarding <em>&quot;{formData.subject}&quot;</em>. Our auditor will review it and reply back to <strong>{formData.email}</strong> shortly.
              </p>
              <button className="btn btn-secondary" onClick={() => setIsSubmitted(false)}>
                Send Another Mail
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Contact Details */}
        <div className={styles.infoCol}>
          <span className={styles.formSubtitle}>Get Appointment</span>
          <h2 className={styles.infoTitle}>Let’s discuss a project together and grow together</h2>
          <p className={styles.infoDesc}>
            Let’s discuss how we can scale your search queries, run programmatic ad trials, or build local funnel conversions.
          </p>

          <div className={styles.contactList}>
            {/* Direct Digital Briefing */}
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span className={styles.itemLabel}>Digital Strategy Desk</span>
                <span className={styles.itemValue}>
                  <a href="mailto:contact@adorca360.com">contact@adorca360.com</a>
                </span>
              </div>
            </div>

            {/* Diagnostic Advisory */}
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span className={styles.itemLabel}>Advisory Response Window</span>
                <span className={styles.itemValue}>Within 1 Business Day</span>
              </div>
            </div>

            {/* Global Capabilities */}
            <div className={styles.contactItem}>
              <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div className={styles.itemContent}>
                <span className={styles.itemLabel}>Global Coverage</span>
                <span className={styles.itemValue}>50+ International Search & Growth Markets</span>
              </div>
            </div>
          </div>

          <p className={styles.infoFooterText}>
            Ready to grow? Fill out the form and one of our strategists will get back to you within one business day.
          </p>
        </div>
      </div>
    </section>
  );
}
