"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type LightboxState = { src: string; alt: string } | null;

const LightboxContext = createContext<
  ((src: string, alt: string) => void) | null
>(null);

export function useLightbox() {
  const open = useContext(LightboxContext);
  if (!open) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return open;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState>(null);
  const [mounted, setMounted] = useState(false);

  const open = useCallback((src: string, alt: string) => {
    setState({ src, alt });
  }, []);
  const close = useCallback(() => setState(null), []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state, close]);

  return (
    <LightboxContext.Provider value={open}>
      {children}
      {mounted &&
        state &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6 backdrop-blur-sm sm:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={state.alt}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-6 right-6 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element -- full-resolution original for an on-demand lightbox view, next/image's fixed-container sizing doesn't fit an arbitrary-aspect modal */}
            <img
              src={state.src}
              alt={state.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
          </div>,
          document.body,
        )}
    </LightboxContext.Provider>
  );
}

export function LightboxTrigger({
  src,
  alt,
  className,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  children: ReactNode;
}) {
  const open = useLightbox();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => open(src, alt)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(src, alt);
        }
      }}
      aria-label={`Enlarge: ${alt}`}
      className={`cursor-zoom-in ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
