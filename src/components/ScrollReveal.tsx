


/**
 * <ScrollReveal> — Reusable wrapper component
 *
 * Wraps any content and applies the global fade-up + scale(0.98→1)
 * scroll-reveal animation defined in globals.css (.reveal-hidden / .reveal-visible).
 *
 * Props:
 *  - as?: keyof JSX.IntrinsicElements  — rendered tag, default "div"
 *  - delay?: 0 | 1 | 2 | 3 | 4 | 5   — stagger step (0 = no extra delay)
 *  - className?: string                 — extra class names
 *  - children: React.ReactNode
 *
 * Usage:
 *   <ScrollReveal delay={2} className={styles.card}>
 *     ...content...
 *   </ScrollReveal>
 *
 * prefers-reduced-motion: the CSS global override in globals.css disables
 * all transitions, so reduced-motion users see the content instantly.
 */
"use client";

import React from "react";
import { useScrollReveal } from "./utils";

interface ScrollRevealProps {
  as?: React.ElementType;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  style,
}: ScrollRevealProps) {
  const [ref, isVisible] = useScrollReveal();

  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";
  const visibilityClass = isVisible ? "reveal-visible" : "reveal-hidden";

  return (
    <Tag
      ref={ref}
      className={`${visibilityClass} ${delayClass} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
