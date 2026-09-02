import React from "react";
import styles from "./Section.module.css";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: "floating" | "dark" | "plain";
  className?: string;
}

export default function Section({
  children,
  variant = "floating",
  className = "",
  ...props
}: SectionProps) {
  const variantClass = styles[variant] || styles.floating;
  return (
    <section className={`${styles.section} ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </section>
  );
}
