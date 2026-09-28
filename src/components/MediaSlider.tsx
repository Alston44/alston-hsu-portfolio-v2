"use client";

import Image from "next/image";
import { useState } from "react";
import { wdth } from "./CaseStudy";
import { LightboxTrigger } from "./Lightbox";

type Slide = {
  src: string;
  alt: string;
  /** Short tab label, e.g. "Lo-fi" / "Hi-fi". */
  label: string;
  /** Caption shown below the frame for this slide. */
  caption: string;
  /** "image" (default) opens in the lightbox; "video" shows scrub controls instead of autoplaying, and isn't zoomable. */
  type?: "image" | "video";
};

/**
 * A padded media frame that switches between a few labeled slides (tabs +
 * arrow buttons), for showing two versions of the same concept side by side
 * in time rather than in space — e.g. a lo-fi wireframe vs. its hi-fi design.
 */
export function MediaSlider({
  slides,
  aspect,
  tone = "gray",
}: {
  slides: Slide[];
  aspect: string;
  tone?: "gray" | "dark";
}) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const bg =
    tone === "dark"
      ? "bg-[#e6e6e6]"
      : "bg-gradient-to-b from-[#ededed] to-[#e5e5e5]";

  const go = (delta: number) =>
    setIndex((i) => (i + delta + slides.length) % slides.length);

  return (
    <div className="flex flex-col gap-3">
      {slides.length > 1 && (
        <div className="flex items-center gap-1 self-center rounded-full border border-black/10 bg-black/[0.03] p-1">
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setIndex(i)}
              aria-pressed={i === index}
              className={`rounded-full px-3 py-1 text-[10px] font-medium tracking-[-0.2px] transition-colors sm:text-[12px] ${
                i === index
                  ? "bg-white text-black/80 shadow-sm"
                  : "text-black/45 hover:text-black/70"
              }`}
              style={wdth}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      <div
        className={`relative w-full overflow-hidden rounded-lg border border-black/5 ${bg}`}
        style={{ aspectRatio: aspect }}
      >
        {slide.type === "video" ? (
          <div className="absolute inset-0 p-4 sm:p-6 xl:p-9">
            <div className="relative h-full w-full">
              {/* Keying by src forces a fresh element on slide change, so the new clip loads at frame one instead of resuming the outgoing clip's playback position. */}
              <video
                key={slide.src}
                src={slide.src}
                controls
                preload="metadata"
                playsInline
                aria-label={slide.alt}
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>
        ) : (
          <LightboxTrigger
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 p-4 sm:p-6 xl:p-9"
          >
            <div className="relative h-full w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-contain"
              />
            </div>
          </LightboxTrigger>
        )}

        {slides.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => go(-1)}
              className="absolute top-1/2 left-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black/60 shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-colors hover:bg-white sm:left-3 sm:size-9"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => go(1)}
              className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black/60 shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-colors hover:bg-white sm:right-3 sm:size-9"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      <p
        className="text-[9px] leading-[1.6] text-black/60 sm:text-[11px] md:text-sm"
        style={wdth}
      >
        {slide.caption}
      </p>
    </div>
  );
}
