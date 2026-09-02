import React from "react";
import styles from "./Badge.module.css";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "blue" | "lime" | "neutral";
  className?: string;
}

export default function Badge({
  children,
  variant = "blue",
  className = "",
  ...props
}: BadgeProps) {
  const variantClass = styles[variant] || styles.blue;
  return (
    <span className={`${styles.badge} ${variantClass} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}
