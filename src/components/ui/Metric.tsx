import React from "react";
import styles from "./Metric.module.css";

interface MetricProps {
  value: React.ReactNode;
  label: string;
  description?: string;
  variant?: "primary" | "lime" | "neutral";
  className?: string;
}

export default function Metric({
  value,
  label,
  description,
  variant = "primary",
  className = "",
}: MetricProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`.trim()}>
      <div className={styles.val}>{value}</div>
      <div className={styles.label}>{label}</div>
      {description && <p className={styles.desc}>{description}</p>}
    </div>
  );
}
