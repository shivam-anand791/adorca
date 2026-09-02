"use client";

import React from "react";
import { useIntersection } from "../utils";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: React.ReactNode;
  delayMs?: number;
  threshold?: number;
  className?: string;
}

export default function Reveal({
  children,
  delayMs = 0,
  threshold = 0.08,
  className = "",
}: RevealProps) {
  const [ref, isVisible] = useIntersection({ threshold });

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
