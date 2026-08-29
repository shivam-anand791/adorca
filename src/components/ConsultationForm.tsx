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
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.container}>
          {/* Left Column: Form */}
          <div className={styles.formCol}>
            {!isSubmitted ? (
              <>
                <div className={styles.formHeader}>
                  <span className={styles.formSubtitle}>Send Us Mail</span>
                  <h3 className={styles.formTitle}>Schedule free SEO consultation</h3>
                  <p className={styles.formDesc}>
                    With our global network of digital specialists, we’re able to provide local knowledge in more.
                  </p>
                </div>
                
                <form className={styles.form} onSubmit={handleSubmit} noValidate>
                  {/* Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      className={styles.input} 
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      className={styles.input} 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>

                  {/* Subject */}
                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      className={styles.input} 
                      placeholder="SEO Audit Request" 
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {errors.subject && <span className={styles.error}>{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      className={styles.textarea} 
                      placeholder="Tell us about your website objectives..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn btn-green ${styles.submitBtn}`} 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Request..." : "Send Us Mail"}
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
              With our global network of digital specialists, we’re able to provide local knowledge in more 
              than 50 international markets. Our team has knowledge for new market.
            </p>

            <div className={styles.contactList}>
              {/* Call Consulting */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemLabel}>Call Consulting</span>
                  <span className={styles.itemValue}>
                    <a href="tel:+12341096666">(234) 109-6666</a>
                  </span>
                </div>
              </div>

              {/* Call Corporate */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemLabel}>Call Cooperate</span>
                  <span className={styles.itemValue}>
                    <a href="tel:+12342448888">234) 244-8888</a>
                  </span>
                </div>
              </div>

              {/* Visit Our Office */}
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <span className={styles.itemLabel}>Visit Our Office</span>
                  <span className={styles.itemValue}>
                    Office: 2220 Plymouth R02, Hopkins,<br />
                    Minnesota(MN), UK
                  </span>
                </div>
              </div>
            </div>

            <p className={styles.infoFooterText}>
              Our comprehensive SEO solutions are designed to put your website in front of the audience at the right time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
