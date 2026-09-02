import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "lime" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const combinedClass = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        <span>{children}</span>
        {icon && <span className={styles.icon}>{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}
