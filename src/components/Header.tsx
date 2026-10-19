"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/Alston-Hsu-Resume.pdf", external: true },
];

const glass =
  "border border-white/80 shadow-[0_6px_24px_-10px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.9)]";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="pointer-events-none sticky top-0 z-50 px-6 py-3 sm:px-8 xl:px-16">
      <div className="relative mx-auto w-full max-w-3xl">
        <nav
          className={`pointer-events-auto flex w-full items-center justify-between relative rounded-full bg-white/90 py-1.5 backdrop-blur-[96px] pr-4 pl-3 md:pr-8 ${glass}`}
        >
          <Link
            href="/"
            aria-label="Alston Hsu, home"
            onClick={() => setOpen(false)}
          >
            <Logo animate className="size-11" />
          </Link>

          <ul className="hidden items-center gap-15 md:flex">
            {NAV_LINKS.map(({ label, href, external }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="text-[16px] leading-[21px] text-black/75 transition-colors duration-300 ease-out hover:text-black"
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
            <span className="relative flex h-3.5 w-6 flex-col gap-1">
              <span
                className={`h-0.5 w-full bg-black/60 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-black/60 transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-black/60 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>

        {/* Tapping anywhere outside the dropdown closes it. */}
        {open && (
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={() => setOpen(false)}
            className="pointer-events-auto fixed inset-0 -z-10 cursor-default md:hidden"
          />
        )}
        {/* Always in the page, so it can ease both ways: fades, slides down and scales up
            from the pill when opening, and does the reverse (a touch quicker) when closing.
            `invisible` takes over once it has faded, so closed links can't be tabbed to.
            Solid white on purpose: a backdrop blur here would be redrawn every frame of the
            animation, which is what made it choppy on phones. Only opacity, translate and
            scale change, and the browser can animate those without repainting. */}
        <div
          id="mobile-nav"
          aria-hidden={!open}
          className={`absolute inset-x-0 top-full mt-2 origin-top rounded-[2rem] bg-white px-8 py-6 transition-[opacity,translate,scale,visibility] will-change-[opacity,translate,scale] md:hidden ${glass} ${
            open
              ? "pointer-events-auto visible translate-y-0 scale-100 opacity-100 duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              : "pointer-events-none invisible -translate-y-2 scale-95 opacity-0 duration-200 ease-in"
          }`}
        >
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map(({ label, href, external }) => (
              <li key={label}>
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="block text-base text-black/75"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
