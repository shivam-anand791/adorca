import React from "react";
import styles from "./Container.module.css";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
  className?: string;
}

export default function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  const sizeClass = styles[size] || styles.default;
  return (
    <div className={`${styles.container} ${sizeClass} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
