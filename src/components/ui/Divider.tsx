import React from "react";
import styles from "./Divider.module.css";

interface DividerProps {
  spacing?: "sm" | "md" | "lg";
  className?: string;
}

export default function Divider({ spacing = "md", className = "" }: DividerProps) {
  return <hr className={`${styles.divider} ${styles[spacing]} ${className}`.trim()} />;
}
