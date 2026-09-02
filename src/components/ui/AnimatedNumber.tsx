"use client";

import { useCountUp } from "../utils";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  trigger?: boolean;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedNumber({
  value,
  duration = 1400,
  trigger = true,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedNumberProps) {
  const animatedValue = useCountUp(value, duration, trigger);
  return (
    <span className={className}>
      {prefix}
      {animatedValue}
      {suffix}
    </span>
  );
}
