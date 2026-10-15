"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { internationalEventLogos } from "../../lib/siteData";
import type { Locale } from "../../lib/types";

export default function EventLogoSwiper({ locale }: { locale: Locale }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrevious, setCanScrollPrevious] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const isArabic = locale === "ar";

  const updateControls = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanScrollPrevious(track.scrollLeft > 8);
    setCanScrollNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateControls();
    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(track);
    return () => resizeObserver.disconnect();
  }, [updateControls]);

  const scroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="event-logo-swiper">
      <div className="event-logo-controls">
        <button
          aria-label={isArabic ? "المؤتمرات السابقة" : "Previous conferences"}
          disabled={!canScrollPrevious}
          onClick={() => scroll(-1)}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          aria-label={isArabic ? "المؤتمرات التالية" : "Next conferences"}
          disabled={!canScrollNext}
          onClick={() => scroll(1)}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div
        aria-label={isArabic ? "شعارات المؤتمرات العلمية" : "Scientific conference logos"}
        className="event-logo-track"
        onScroll={updateControls}
        ref={trackRef}
        role="region"
        tabIndex={0}
      >
        {internationalEventLogos.map((logo) => (
          <figure className="event-logo-card" key={logo.name}>
            <Image
              alt={logo.name}
              fill
              sizes="(max-width: 760px) 70vw, 250px"
              src={logo.src}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
