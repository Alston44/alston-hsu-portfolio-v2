"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const GAP = 96; // px between cards; matches gap-24 below
const BASE_TOP = 116; // px: under the header pill, leaving room for the counter between them
const PEEK = 12; // px: each earlier card keeps this much visible at the top of the stack
const HOLD = 160; // px of scrolling the finished stack stays pinned before it lets go
const SHRINK = 0.06; // how much a covered card scales down
const DIM = 0.14; // how much a covered card darkens
const EASE = 0.16; // share of the remaining distance covered each frame (lower = softer)

const smoothstep = (t: number) => t * t * (3 - 2 * t);

/**
 * Vertical stack of cards: each card pins near the top of the screen while the next one
 * slides up over it, and the card underneath eases back (smaller, slightly darker).
 *
 * On shorter windows the card images shrink (see max-h on the cards below), so a finished
 * stack plus the footer always fit on screen and the cards never have to slide up behind the
 * counter at the bottom of the page.
 *
 * Each card sticks inside its own wrapper, and the wrappers are stretched (with a matching
 * negative margin, so layout doesn't change) until every card's release point is `PEEK`
 * higher than the next one's. That way the whole stack lets go together and keeps its
 * spacing, instead of squeezing into one pile when the last card arrives.
 *
 * The scale and darkening chase their target a little each frame instead of snapping to
 * it, so wheel steps and trackpad flicks still read as one smooth motion. Darkening is a
 * fading overlay (opacity) rather than a CSS filter, which would repaint the whole card.
 */
export default function ProjectStack({ children }: { children: ReactNode }) {
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const wraps = useRef<(HTMLDivElement | null)[]>([]);
  const shades = useRef<(HTMLSpanElement | null)[]>([]);
  const target = useRef<number[]>([]);
  const current = useRef<number[]>([]);
  const frame = useRef(0);
  const items = Children.toArray(children);
  const [active, setActive] = useState(1);
  const [extra, setExtra] = useState<number[]>(() => items.map(() => 0));

  const paint = useCallback((i: number, covered: number) => {
    const eased = smoothstep(covered);
    const card = cards.current[i];
    const shade = shades.current[i];
    if (card) card.style.transform = eased ? `scale(${1 - SHRINK * eased})` : "";
    if (shade) shade.style.opacity = String(DIM * eased);
  }, []);

  const tick = useCallback(() => {
    let moving = false;
    cards.current.forEach((_, i) => {
      const goal = target.current[i] ?? 0;
      let now = current.current[i] ?? 0;
      if (Math.abs(goal - now) > 0.0005) {
        now += (goal - now) * EASE;
        moving = true;
      } else {
        now = goal;
      }
      current.current[i] = now;
      paint(i, now);
    });
    frame.current = moving ? requestAnimationFrame(tick) : 0;
  }, [paint]);

  const update = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    cards.current.forEach((card, i) => {
      const next = cards.current[i + 1];
      let covered = 0;
      if (card && next && !reduce) {
        // The next card starts covering this one once it reaches the bottom of it, and
        // has fully covered it when it reaches its own pinned position.
        const start = BASE_TOP + i * PEEK + card.offsetHeight + GAP;
        const end = BASE_TOP + (i + 1) * PEEK;
        covered = Math.min(
          1,
          Math.max(0, (start - next.getBoundingClientRect().top) / (start - end)),
        );
      }
      target.current[i] = covered;
    });
    // The counter shows how many cards have reached their pinned spot (at least the first).
    const pinned = cards.current.filter(
      (card, i) => card && card.getBoundingClientRect().top <= BASE_TOP + i * PEEK + 4,
    ).length;
    setActive(Math.max(1, pinned));
    if (!frame.current) frame.current = requestAnimationFrame(tick);
  }, [tick]);

  // How far to stretch each card's wrapper below it so every card releases PEEK above the
  // next one: the last card's natural bottom, minus its distance from the end of the stack.
  const measure = useCallback(() => {
    const bottoms = cards.current.map((card, i) => {
      const wrap = wraps.current[i];
      return wrap && card ? wrap.offsetTop + card.offsetHeight : 0;
    });
    const last = bottoms.length - 1;
    const next = bottoms.map((bottom, i) =>
      Math.max(0, Math.round(bottoms[last] + HOLD - (last - i) * PEEK - bottom)),
    );
    setExtra((prev) =>
      prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next,
    );
  }, []);

  useEffect(() => {
    measure();
    const observer = new ResizeObserver(measure);
    cards.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  return (
    <div className="mx-auto w-full max-w-3xl" style={{ paddingBottom: HOLD }}>
      {/* Zero-height sticky anchor: it rides the top of the stack, then sticks just under the
          header pill and stays there to the bottom of the page. The counter is plain text
          hanging above the anchor, between the header and the pinned cards. */}
      <div
        className="pointer-events-none sticky z-30 h-0"
        style={{ top: BASE_TOP }}
        aria-hidden
      >
        <p className="absolute top-0 left-0 -translate-y-full pt-3 pb-4 font-serif text-[13px] leading-none tracking-[0.04em] text-black/70 tabular-nums">
          <span key={active} className="counter-tick inline-block">
            {String(active).padStart(2, "0")}
          </span>
          <span className="text-black/35"> / {String(items.length).padStart(2, "0")}</span>
        </p>
      </div>
      <div className="flex flex-col gap-24">
      {items.map((child, i) => (
        <div
          key={i}
          ref={(node) => {
            wraps.current[i] = node;
          }}
          style={{ marginBottom: -extra[i] }}
        >
          <div
            ref={(node) => {
              cards.current[i] = node;
            }}
            style={{ top: BASE_TOP + i * PEEK }}
            className="sticky origin-top rounded-card bg-white will-change-transform [&_[data-card-media]]:max-h-[max(300px,calc(100svh-340px))]"
          >
            {child}
            <span
              ref={(node) => {
                shades.current[i] = node;
              }}
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-card bg-black opacity-0"
            />
          </div>
          <div aria-hidden style={{ height: extra[i] }} />
        </div>
      ))}
      </div>
    </div>
  );
}
