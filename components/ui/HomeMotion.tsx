"use client";

import { useEffect, useRef } from "react";

export default function HomeMotion() {
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const marker = markerRef.current;
    const main = marker?.parentElement;
    if (
      !main ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const sections = [...main.querySelectorAll<HTMLElement>(
      ":scope > .page-hero-home, :scope > .section, :scope > .stats-section",
    )];
    const cards = [...main.querySelectorAll<HTMLElement>(
      ".stats-grid > *, .why-list > *, .product-grid > *, .event-preview-list > *",
    )];
    const targets = [...sections, ...cards];

    targets.forEach((element, index) => {
      element.dataset.revealState = "pending";
      element.style.setProperty("--reveal-delay", `${(index % 4) * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) return;
          entry.target.dataset.revealState = "visible";
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      targets.forEach((element) => {
        delete element.dataset.revealState;
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, []);

  return <span aria-hidden="true" hidden ref={markerRef} />;
}
