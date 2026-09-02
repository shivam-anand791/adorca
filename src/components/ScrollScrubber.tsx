"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./ScrollScrubber.module.css";

interface ScrollScrubberProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  ariaLabel?: string;
}

export default function ScrollScrubber({
  containerRef,
  className,
  ariaLabel = "Scroll position scrubber",
}: ScrollScrubberProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [handleWidth, setHandleWidth] = useState<number>(60);
  const [handleOffset, setHandleOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [canScroll, setCanScroll] = useState<boolean>(true);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const dragStartRef = useRef<{
    pointerX: number;
    startScrollLeft: number;
  }>({ pointerX: 0, startScrollLeft: 0 });

  const isDraggingRef = useRef(false);

  // Sync state and compute dimensions
  const updateScrubber = useCallback(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const visibleWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    const trackWidth = track.clientWidth;
    const maxScroll = scrollWidth - visibleWidth;

    if (maxScroll <= 1 || trackWidth === 0) {
      setCanScroll(false);
      return;
    }

    setCanScroll(true);

    // Calculate handle width (ratio of visible area)
    const ratio = visibleWidth / scrollWidth;
    const calculatedHandleWidth = Math.max(ratio * trackWidth, 48); // min 48px handle
    setHandleWidth(calculatedHandleWidth);

    // Calculate handle position
    const maxHandleTravel = trackWidth - calculatedHandleWidth;
    const currentScrollLeft = container.scrollLeft;
    const progress = Math.max(0, Math.min(1, currentScrollLeft / maxScroll));
    const offset = progress * maxHandleTravel;

    setHandleOffset(offset);
    setScrollPercent(Math.round(progress * 100));
  }, [containerRef]);

  // Two-way sync: listen to scroll and resize
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    updateScrubber();

    const handleScroll = () => {
      if (isDraggingRef.current) return; // During active drag, drag handler controls scrollLeft
      updateScrubber();
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrubber);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        updateScrubber();
      });
      resizeObserver.observe(container);
      resizeObserver.observe(track);
    }

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrubber);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [containerRef, updateScrubber]);

  // Pointer Dragging on Handle
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartRef.current = {
      pointerX: e.clientX,
      startScrollLeft: container.scrollLeft,
    };

    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const visibleWidth = container.clientWidth;
    const scrollWidth = container.scrollWidth;
    const trackWidth = track.clientWidth;
    const maxScroll = scrollWidth - visibleWidth;
    const maxHandleTravel = trackWidth - handleWidth;

    if (maxHandleTravel <= 0 || maxScroll <= 0) return;

    const deltaX = e.clientX - dragStartRef.current.pointerX;
    const scrollDelta = (deltaX / maxHandleTravel) * maxScroll;
    const targetScrollLeft = Math.max(0, Math.min(maxScroll, dragStartRef.current.startScrollLeft + scrollDelta));

    // 1:1 real-time direct update during drag
    container.scrollLeft = targetScrollLeft;

    const progress = targetScrollLeft / maxScroll;
    setHandleOffset(progress * maxHandleTravel);
    setScrollPercent(Math.round(progress * 100));
  };

  const snapToNearestCard = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    if (children.length === 0) return;

    const currentScrollLeft = container.scrollLeft;
    let closestOffset = children[0].offsetLeft;
    let minDiff = Math.abs(currentScrollLeft - closestOffset);

    for (let i = 1; i < children.length; i++) {
      const offset = children[i].offsetLeft - children[0].offsetLeft;
      const diff = Math.abs(currentScrollLeft - offset);
      if (diff < minDiff) {
        minDiff = diff;
        closestOffset = offset;
      }
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    container.scrollTo({
      left: closestOffset,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [containerRef]);

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if capture was lost
    }

    snapToNearestCard();
  };

  // Clicking directly on Track to jump
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const trackWidth = track.clientWidth;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const maxHandleTravel = trackWidth - handleWidth;

    if (maxHandleTravel <= 0 || maxScroll <= 0) return;

    const targetOffset = clickX - handleWidth / 2;
    const progress = Math.max(0, Math.min(1, targetOffset / maxHandleTravel));
    const targetScrollLeft = progress * maxScroll;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container) return;

    const cardStep = (container.firstElementChild as HTMLElement)?.offsetWidth || 340;
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const behavior = prefersReducedMotion ? "auto" : "smooth";

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      container.scrollBy({ left: -cardStep, behavior });
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      container.scrollBy({ left: cardStep, behavior });
    } else if (e.key === "Home") {
      e.preventDefault();
      container.scrollTo({ left: 0, behavior });
    } else if (e.key === "End") {
      e.preventDefault();
      container.scrollTo({ left: container.scrollWidth, behavior });
    }
  };

  if (!canScroll) {
    return null;
  }

  return (
    <div className={`${styles.scrubberWrapper} ${className || ""}`}>
      <div
        ref={trackRef}
        className={styles.track}
        onClick={handleTrackClick}
        role="scrollbar"
        aria-label={ariaLabel}
        aria-controls="services-scroll-container"
        aria-valuenow={scrollPercent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-orientation="horizontal"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div
          className={`${styles.handle} ${isDragging ? styles.dragging : ""}`}
          style={{
            width: `${handleWidth}px`,
            transform: `translateX(${handleOffset}px)`,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        />
      </div>
    </div>
  );
}
