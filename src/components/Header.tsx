"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/Alston-Hsu-Resume.pdf", external: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    setVisible(false);
    const timeout = setTimeout(() => setMounted(false), 200);
    return () => clearTimeout(timeout);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/10 px-6 py-[10px] backdrop-blur-md sm:px-8 xl:px-16">
      <nav className="mx-auto flex w-full max-w-[1920px] items-center justify-between py-3">
        <Link
          href="/"
          aria-label="Alston Hsu, home"
          onClick={() => setOpen(false)}
        >
          <Logo animate />
        </Link>

        <ul className="hidden items-center gap-[60px] md:flex">
          {NAV_LINKS.map(({ label, href, external }) => (
            <li key={label}>
              <Link
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-[16px] leading-[21px] text-black/60 transition-colors duration-300 ease-out hover:text-black/80"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex size-10 shrink-0 items-center justify-center md:hidden"
        >
          <span className="relative flex h-[14px] w-6 flex-col gap-1">
            <span
              className={`h-0.5 w-full bg-black/60 transition-transform duration-200 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-black/60 transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-black/60 transition-transform duration-200 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {mounted &&
        createPortal(
          <div
            id="mobile-nav"
            className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-opacity duration-200 ease-out md:hidden ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <ul className="flex flex-col items-center gap-6">
              {NAV_LINKS.map(({ label, href, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className="text-xl text-black/60"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>,
          document.body,
        )}
    </header>
  );
}
