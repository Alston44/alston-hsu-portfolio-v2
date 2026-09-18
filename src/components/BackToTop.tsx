"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`no-stagger fixed right-6 bottom-24 z-40 flex size-11 items-center justify-center rounded-full bg-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.15)] backdrop-blur-md transition-all duration-300 ease-out hover:bg-white sm:right-8 sm:bottom-28 xl:right-16 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5 text-black/60"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 15l6-6 6 6" />
      </svg>
    </button>
  );
}
