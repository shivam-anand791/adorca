import React from "react";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  subtitle?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${styles.header} ${styles[align]} ${className}`.trim()}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
}
