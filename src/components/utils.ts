"use client";

import { useEffect, useRef, useState } from "react";

// ─── Scroll-reveal hook ────────────────────────────────────────────────────────
// Returns a [ref, isVisible] tuple. Attach ref to any element; isVisible
// flips true once the element enters the viewport.
// Respects prefers-reduced-motion: if the user has requested reduced motion,
// isVisible is immediately true so elements render without animation.
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [options]);

  return [ref, isVisible] as const;
}

// ─── Legacy alias (used by Hero, WhyChooseUs, CaseStudies) ───────────────────
// Hook to detect when an element is in the viewport
export function useIntersection(options: IntersectionObserverInit = { threshold: 0.1, rootMargin: "0px" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        // Stop observing once visible if we only want one-time animation
        observer.unobserve(currentRef);
      }
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}

// Hook to animate count-up from 0 to target.
// Correctly handles trigger=true on first mount and ensures final target is always reached.
export function useCountUp(target: number, duration: number = 1600, trigger: boolean = false) {
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const [count, setCount] = useState(() => (prefersReduced ? target : 0));
  const hasRun = useRef(false);

  useEffect(() => {
    if (prefersReduced) {
      return;
    }

    // Guard: only run once even if trigger stays true across re-renders
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    const end = target;
    if (end === 0) return;

    const startTime = performance.now();
    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * end);

      if (progress < 1) {
        setCount(current);
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end); // Guarantee exact final value
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);
    return () => { cancelAnimationFrame(animationFrameId); };
  }, [target, duration, trigger, prefersReduced]);

  return count;
}
