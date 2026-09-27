"use client";

import { useLayoutEffect } from "react";

/**
 * Drives the scroll-reveal behaviour from the mock: elements marked
 * `data-reveal` fade and rise into place the first time they enter the
 * viewport, and anything already on screen at load is shown immediately
 * (the hero should never animate in).
 *
 * The initial hidden state lives in CSS behind `.reveal-ready`, which this
 * component sets before the first paint. That means:
 *   - no flash of already-positioned content, and
 *   - if JS never runs, `.reveal-ready` is absent and everything is visible.
 */
export default function Reveal() {
  useLayoutEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 },
    );

    // Measure everything before mutating classes, so reading layout here
    // can't be thrown off by our own style changes.
    const visible = els.filter(
      (el) => el.getBoundingClientRect().top < window.innerHeight,
    );

    root.classList.add("reveal-ready");
    for (const el of visible) el.classList.add("is-revealed");
    for (const el of els) {
      if (!el.classList.contains("is-revealed")) observer.observe(el);
    }

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
      for (const el of els) el.classList.remove("is-revealed");
    };
  }, []);

  return null;
}
