"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// A fan of same-size prints that behaves like a deck of cards. The prints sit in a smooth
// rainbow arc, opening from left to right: every print is centred, then tilted around one
// shared pivot far below the row (`origin-[50%_300%]`), so equal angle steps give an even arc.
// The print in the first slot is on top, and each print is covered by the one to its left.
//
//  - Click a print further along the fan: it slides up out of the deck, then goes to the top,
//    and the prints that were ahead of it each move one slot along.
//  - Click the top print: it goes to the back of the deck, and everything moves up one slot.
//
// Each print's angle comes from its slot, and the `rotate` property transitions, so every
// reshuffle swings along the arc.
const STEP = 9.5; // degrees between neighbouring slots
const FIRST = -2 * STEP; // the first slot leans furthest left
const LIFT = 56; // px a picked print slides out along its angle before it is placed
const LIFT_MS = 320; // how long the lift lasts before the deck reshuffles
const HEADER_CLEARANCE = 12; // px kept free between a lifted print and the header pill

// Rank for each card's corner index: A, K, Q, J, 10 of hearts, a royal flush.
const PRINTS = [
  { src: "/images/about/profile.webp", alt: "Alston Hsu", main: true, rank: "A" },
  { src: "/images/about/food.webp", alt: "Alston sharing a meal", rank: "K" },
  { src: "/images/about/dog.webp", alt: "A dog with a yellow bow", rank: "Q" },
  { src: "/images/about/workspace.webp", alt: "Alston's design workspace", rank: "J" },
  { src: "/images/about/beach.webp", alt: "Silhouette on a beach at sunset", rank: "10" },
];

// Corner index: a small white tab in the corner of the photo, rank over suit. Sized from the
// row's width (cqw), so it shrinks with the cards on small screens.
const index =
  "absolute flex flex-col items-center rounded-br-[7px] bg-white px-[4px] pt-[2px] pb-[3px] font-serif text-[clamp(7px,1.43cqw,11px)] leading-[1.05] font-bold text-[#c8102e]";

const START = 600; // ms before the first print starts to open
const DELAY_STEP = 130; // ms between prints, left to right

// Small inline icons for the middle of the chips: tool logos, a dumbbell and a basketball. Drawn here as plain
// SVG so there is nothing extra to download.
const FigmaLogo = (
  <svg viewBox="0 0 38 57" className="size-full" aria-hidden>
    <path fill="#1ABCFE" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
    <path fill="#0ACF83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
    <path fill="#FF7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" />
    <path fill="#F24E1E" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" />
    <path fill="#A259FF" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" />
  </svg>
);

const DumbbellIcon = (
  <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
    <g fill="#1d2433">
      <rect x="7" y="10.9" width="10" height="2.2" rx="1.1" />
      <rect x="4.6" y="6.5" width="2.8" height="11" rx="1.2" />
      <rect x="16.6" y="6.5" width="2.8" height="11" rx="1.2" />
      <rect x="1.9" y="8.9" width="2.4" height="6.2" rx="1.1" />
      <rect x="19.7" y="8.9" width="2.4" height="6.2" rx="1.1" />
    </g>
  </svg>
);

// A simplified Claude spark: twelve rounded rays of slightly different lengths.
const ClaudeLogo = (
  <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
    <g stroke="#D97757" strokeWidth="2.6" strokeLinecap="round">
      <line x1="12.00" y1="10.40" x2="12.00" y2="2.40" />
      <line x1="12.80" y1="10.61" x2="15.90" y2="5.25" />
      <line x1="13.39" y1="11.20" x2="19.97" y2="7.40" />
      <line x1="13.60" y1="12.00" x2="19.40" y2="12.00" />
      <line x1="13.39" y1="12.80" x2="20.31" y2="16.80" />
      <line x1="12.80" y1="13.39" x2="15.90" y2="18.75" />
      <line x1="12.00" y1="13.60" x2="12.00" y2="21.20" />
      <line x1="11.20" y1="13.39" x2="8.40" y2="18.24" />
      <line x1="10.61" y1="12.80" x2="3.69" y2="16.80" />
      <line x1="10.40" y1="12.00" x2="4.20" y2="12.00" />
      <line x1="10.61" y1="11.20" x2="4.03" y2="7.40" />
      <line x1="11.20" y1="10.61" x2="8.30" y2="5.59" />
    </g>
  </svg>
);

const BasketballIcon = (
  <svg viewBox="0 0 24 24" className="size-full" aria-hidden>
    <circle cx="12" cy="12" r="10.6" fill="#E8782A" />
    <g fill="none" stroke="#2a1608" strokeWidth="1.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10.6" />
      <path d="M12 1.4v21.2M1.4 12h21.2" />
      <path d="M4.3 3.6C8.6 8 8.6 16 4.3 20.4M19.7 3.6C15.4 8 15.4 16 19.7 20.4" />
    </g>
  </svg>
);

// Poker chips tossed on the table beside the fan: soft pink, blue, orange and dark, each
// with an icon in the middle (Figma, a dumbbell, Claude, a basketball). Mostly decorative:
// they sit on top of the fan's lower corners. Click one and it hops, spins a little and settles
// back. `left` / `top` are shares of the row's width / height.
const CHIPS: {
  color: string;
  left: string;
  top: string;
  rotate: number;
  name: string; // for the button's label
  drift: number; // px: how far sideways it starts, so the chips don't all fall down the same line
  logo: ReactNode;
}[] = [
  { color: "#f2a3c0", left: "79%", top: "62%", rotate: 14, drift: -36, name: "Figma", logo: FigmaLogo },
  { color: "#3d7ff2", left: "86%", top: "73%", rotate: -9, drift: 28, name: "dumbbell", logo: DumbbellIcon },
  { color: "#e8702a", left: "3%", top: "70%", rotate: 22, drift: 34, name: "Claude", logo: ClaudeLogo },
  { color: "#23262b", left: "9%", top: "80%", rotate: -16, drift: -30, name: "basketball", logo: BasketballIcon },
];
const CHIPS_START = 2000; // ms: after the fan has opened
const CHIPS_STEP = 260; // ms between chips: each one lands before the next is well under way

// A click makes a chip hop: up with a little spin, back down with a small bounce, then settled
// where it started. Played with the Web Animations API so it layers over the fall-in animation.
function hop(chip: HTMLElement, tilt: number) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const side = Math.random() < 0.5 ? -1 : 1;
  const spin = side * (35 + Math.random() * 35);
  const drift = side * (4 + Math.random() * 6);
  const at = (turn: number) => `${tilt + spin * turn}deg`;
  chip.animate(
    [
      { translate: "0px 0px", rotate: at(0), scale: 1, easing: "cubic-bezier(0.2, 0.7, 0.3, 1)" },
      { offset: 0.32, translate: `${drift}px -30px`, rotate: at(1), scale: 1.1, easing: "cubic-bezier(0.55, 0, 1, 0.45)" },
      { offset: 0.62, translate: "0px 0px", rotate: at(0.2), scale: 1, easing: "cubic-bezier(0.2, 0.7, 0.3, 1)" },
      { offset: 0.78, translate: `0px -9px`, rotate: at(0.35), scale: 1.02, easing: "cubic-bezier(0.55, 0, 1, 0.45)" },
      { translate: "0px 0px", rotate: at(0), scale: 1 },
    ],
    { duration: 700 },
  );
}

export default function AboutPhotoGallery() {
  // order[slot] = index into PRINTS; slot 0 is the top of the deck.
  const [order, setOrder] = useState(() => PRINTS.map((_, i) => i));
  const [lifted, setLifted] = useState<{ index: number; lift: number } | null>(null);
  const timer = useRef(0);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  // Hold the page still while the entrance animation plays (the fan opening, then the chips
  // falling in). It only blocks the ways of scrolling that don't need a pointer on the page:
  // wheel, touch drag and the scroll keys. The page unlocks as soon as every animation in the
  // gallery has finished, with a timeout as a safety net. Nothing is locked if the animations
  // are off (reduced motion).
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const animations = el.getAnimations({ subtree: true });
    if (animations.length === 0) return;

    if (window.scrollY > 0) window.scrollTo(0, 0);

    const block = (e: Event) => e.preventDefault();
    const scrollKeys = new Set([" ", "PageUp", "PageDown", "Home", "End", "ArrowUp", "ArrowDown"]);
    const blockKeys = (e: KeyboardEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      if (scrollKeys.has(e.key) && !target?.closest("button, a, input, textarea, select")) {
        e.preventDefault();
      }
    };
    const lock = () => {
      window.addEventListener("wheel", block, { passive: false });
      window.addEventListener("touchmove", block, { passive: false });
      window.addEventListener("keydown", blockKeys);
    };
    const unlock = () => {
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", blockKeys);
    };

    lock();
    const fallback = window.setTimeout(unlock, 7000);
    Promise.allSettled(animations.map((animation) => animation.finished)).then(unlock);
    return () => {
      window.clearTimeout(fallback);
      unlock();
    };
  }, []);

  const pick = (index: number, button: HTMLButtonElement) => {
    if (lifted) return; // let the current move finish
    const slot = order.indexOf(index);
    const angle = FIRST + slot * STEP;
    const up = Math.cos((angle * Math.PI) / 180); // how much of the lift points straight up
    const header = document.querySelector("header nav")?.getBoundingClientRect().bottom ?? 0;
    const shift = parseFloat(getComputedStyle(button).translate.split(" ")[1]) || 0; // hover nudge
    const room = button.getBoundingClientRect().top - shift - (header + HEADER_CLEARANCE);
    setLifted({ index, lift: Math.min(LIFT, Math.max(0, room / up)) });

    timer.current = window.setTimeout(() => {
      setOrder((current) =>
        slot === 0
          ? [...current.slice(1), current[0]] // top print goes to the back
          : [index, ...current.filter((i) => i !== index)], // picked print goes to the top
      );
      setLifted(null);
    }, LIFT_MS);
  };

  return (
    <div ref={root} className="@container relative aspect-100/54 w-full">
      {PRINTS.map(({ src, alt, main, rank }, i) => {
        const slot = order.indexOf(i);
        const isLifted = lifted?.index === i;
        return (
          // The fan animation only plays on load. After that the angle is the `rotate`
          // property, which transitions between slots, and the lift uses `translate`; sin()
          // and cos() of the slot's angle turn `--lift` into a move straight outward.
          <button
            key={src}
            type="button"
            aria-label={`${slot === 0 ? "Send to the back" : "Bring to the top"}: ${alt}`}
            onClick={(e) => pick(i, e.currentTarget)}
            className={`photo-fan absolute top-0 left-[36.5%] aspect-5/7 w-[27%] origin-[50%_300%] cursor-pointer rounded-[10px] bg-white p-[5px] ring-1 ring-black/15 transition-[translate,rotate,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [rotate:var(--angle)] [translate:calc(sin(var(--angle))*var(--lift))_calc(cos(var(--angle))*var(--lift)*-1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/40 ${
              isLifted
                ? "shadow-[0_24px_56px_rgba(0,0,0,0.35)]"
                : `[--lift:0px] hover:[--lift:14px] ${
                    slot === 0
                      ? "shadow-[0_14px_36px_rgba(0,0,0,0.3)]"
                      : "shadow-[0_10px_28px_rgba(0,0,0,0.2)]"
                  }`
            }`}
            style={
              {
                // the lifted print is above everything; otherwise each print is under its left neighbour
                zIndex: isLifted ? PRINTS.length + 1 : PRINTS.length - slot,
                "--angle": `${FIRST + slot * STEP}deg`,
                ...(isLifted ? { "--lift": `${lifted.lift}px` } : {}),
                animationDelay: `${START + i * DELAY_STEP}ms`,
              } as CSSProperties
            }
          >
            <span className="relative block size-full overflow-hidden rounded-[6px]">
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 832px) 250px, 30vw"
                quality={main ? 95 : undefined}
                priority={main}
                className={main ? "object-cover object-[center_40%]" : "object-cover"}
                draggable={false}
              />
              {/* Corner indices, like a playing card: rank over suit, and again upside down. */}
              <span aria-hidden className={`${index} top-0 left-0`}>
                <span>{rank}</span>
                <span>♥</span>
              </span>
              <span aria-hidden className={`${index} right-0 bottom-0 rotate-180`}>
                <span>{rank}</span>
                <span>♥</span>
              </span>
            </span>
          </button>
        );
      })}
      {CHIPS.map(({ color, left, top, rotate, drift, name, logo }, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Flick the ${name} chip`}
          onClick={(e) => hop(e.currentTarget, rotate)}
          className="poker-chip absolute z-20 aspect-square w-[12%] cursor-pointer rounded-full transition-[scale] duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black/40"
          style={
            {
              left,
              top,
              "--chip": color,
              "--r": `${rotate}deg`,
              "--fall-x": `${drift}px`,
              animationDelay: `${CHIPS_START + i * CHIPS_STEP}ms`,
            } as CSSProperties
          }
        >
          <span className="poker-chip__logo">{logo}</span>
        </button>
      ))}
    </div>
  );
}
