"use client";

import { useRef, useState } from "react";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import styles from "./Reveal.module.css";

/** Elements the reveal wrapper is allowed to render as. */
type RevealTag = "div" | "section" | "article" | "figure" | "aside" | "p";

type RevealProps<T extends RevealTag> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "className" | "children">;

const TRANSITION_MS = 900;

/**
 * Fades + lifts its child into view on first scroll past.
 *
 * Content that is already within the first viewport renders untouched, so the
 * top of the page never flashes empty. Respects `prefers-reduced-motion`.
 */
export function Reveal<T extends RevealTag = "div">({
  as,
  className,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // Already on screen (or above it) — leave it alone.
    if (reduced || el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            setState("shown");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Drop the transition class once the animation is done so the element's own
  // hover transitions are no longer overridden.
  useIsomorphicLayoutEffect(() => {
    if (state !== "shown") return;
    const timer = window.setTimeout(() => setState("idle"), TRANSITION_MS);
    return () => window.clearTimeout(timer);
  }, [state]);

  const revealClass =
    state === "hidden"
      ? styles.hidden
      : state === "shown"
        ? styles.shown
        : undefined;

  return (
    <Tag
      ref={ref}
      className={[className, revealClass].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </Tag>
  );
}
