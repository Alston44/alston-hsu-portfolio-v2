"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { LightboxTrigger } from "./Lightbox";

export const wdth = { fontVariationSettings: '"wdth" 100' } as const;

export const caseStudyBodyText =
  "text-[16px] leading-[1.7] tracking-[-0.25px] text-black/75 2xl:text-[18px]";

const eyebrowClass =
  "text-[13px] font-semibold leading-none text-black 2xl:text-[14px]";

const headingClass =
  "font-serif text-[26px] leading-[1.1] text-black/75 sm:text-[32px] md:text-[36px]";

export function CaseStudyEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className={eyebrowClass} style={wdth}>
      {children}
    </p>
  );
}

export function CaseStudyHeading({ children }: { children: ReactNode }) {
  return (
    <p className={headingClass} style={wdth}>
      {children}
    </p>
  );
}

export function CaseStudyBody({ paragraphs }: { paragraphs: ReactNode[] }) {
  return (
    <div className={caseStudyBodyText} style={wdth}>
      {paragraphs.map((paragraph, i) => (
        <p key={i} className="mb-4 last:mb-0">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

/** One labelled column in the case study metadata row (contributions, duration, team, tools). */
export function MetaColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col gap-1.5 text-black/75 sm:w-auto sm:min-w-30 xl:min-w-0">
      <p
        className="text-[16px] font-bold leading-[1.4] 2xl:text-[18px]"
        style={wdth}
      >
        {label}
      </p>
      <div
        className="flex flex-col gap-0.5 text-[16px] leading-[1.3] tracking-[-0.25px] 2xl:text-[18px]"
        style={wdth}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Rounded hero rectangle that sits in the same 768px column as the page content
 * (same side gutters as the case study body), just under the header pill.
 */
export function CaseStudyHeroFrame({
  aspect = "aspect-4/3 sm:aspect-video",
  className = "",
  style,
  children,
}: {
  aspect?: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
}) {
  return (
    <div className="px-6 pt-2 sm:px-8 sm:pt-4 xl:px-16">
      <div
        className={`relative mx-auto w-full max-w-3xl overflow-hidden rounded-card ${aspect} ${className}`}
        style={style}
      >
        {children}
      </div>
    </div>
  );
}

export function CaseStudyMedia({
  aspect,
  tone = "gray",
  className,
  children,
}: {
  aspect: string;
  tone?: "gray" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  const bg =
    tone === "dark"
      ? "bg-[#e6e6e6]"
      : "bg-linear-to-b from-[#ededed] to-[#e5e5e5]";
  return (
    <div
      className={`relative w-full overflow-hidden rounded-card border border-black/5 ${bg} ${className ?? ""}`}
      style={{ aspectRatio: aspect }}
    >
      {children}
    </div>
  );
}

export function CoverBox({
  src,
  alt,
  aspect,
  tone,
  className,
  frameAspect,
  children,
}: {
  src: string;
  alt: string;
  aspect: string;
  tone?: "gray" | "dark";
  /** Padding classes (e.g. "p-4 sm:p-9") around an inset photo frame, matching Figma's padded card treatment. */
  className?: string;
  /** The inset photo frame's own aspect ratio, when it's smaller than the padded card and centered within it. */
  frameAspect?: string;
  children?: ReactNode;
}) {
  if (frameAspect) {
    return (
      <CaseStudyMedia aspect={aspect} tone={tone}>
        <LightboxTrigger
          src={src}
          alt={alt}
          className={`absolute inset-0 flex items-center justify-center ${className ?? ""}`}
        >
          <div
            className="relative w-full overflow-hidden rounded-card"
            style={{ aspectRatio: frameAspect }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover"
            />
            {children}
          </div>
        </LightboxTrigger>
      </CaseStudyMedia>
    );
  }

  return (
    <CaseStudyMedia aspect={aspect} tone={tone}>
      <LightboxTrigger
        src={src}
        alt={alt}
        className={`absolute inset-0 ${className ?? ""}`}
      >
        <div className="relative h-full w-full overflow-hidden rounded-card">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          {children}
        </div>
      </LightboxTrigger>
    </CaseStudyMedia>
  );
}

export function ContainBox({
  src,
  alt,
  aspect,
  tone,
}: {
  src: string;
  alt: string;
  aspect: string;
  tone?: "gray" | "dark";
}) {
  return (
    <CaseStudyMedia aspect={aspect} tone={tone}>
      <LightboxTrigger
        src={src}
        alt={alt}
        className="absolute inset-0 p-3 sm:p-4 xl:p-2.5"
      >
        <div className="relative h-full w-full overflow-hidden rounded-card">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-contain"
          />
        </div>
      </LightboxTrigger>
    </CaseStudyMedia>
  );
}

type TocLink = { label: string; href: string };

const TOC_LINKS: TocLink[] = [
  { label: "Overview", href: "#overview" },
  { label: "Problem", href: "#problem" },
  { label: "Discovery", href: "#discovery" },
  { label: "Ideation", href: "#ideation" },
  { label: "Reflection", href: "#reflection" },
];

export function CaseStudyToc({
  iconDir,
  links = TOC_LINKS,
}: {
  iconDir: string;
  links?: TocLink[];
}) {
  // The first section counts as current until you scroll past it, so a tick is always lit.
  const [activeId, setActiveId] = useState<string | null>(links[0]?.href.slice(1) ?? null);
  const [mounted, setMounted] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const sections = links.map(({ href }) =>
      document.getElementById(href.slice(1)),
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links]);

  // Step out of the way when the footer comes into view, so the two pills never stack.
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterInView(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const activeLabel = links.find(({ href }) => href.slice(1) === activeId)?.label ?? "";

  // A floating pill at the bottom centre of the screen, in the same frosted style as the
  // header: a back arrow, one tick per section (the current one is taller and darker; hover
  // one for its name) and the current section's name. It is portalled to <body> because the
  // page's entrance animation would otherwise anchor "fixed" to the animated wrapper.
  if (!mounted) return null;
  return createPortal(
    <nav
      aria-label="Case study sections"
      className={`fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-white/80 bg-white/90 py-1 pr-5 pl-1.5 shadow-[0_6px_24px_-10px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md transition duration-300 ease-out md:flex ${
        footerInView ? "pointer-events-none translate-y-4 opacity-0" : ""
      }`}
    >
      <Link
        href="/#work"
        aria-label="Back to work"
        className="group/back flex size-9 items-center justify-center rounded-full transition-colors duration-300 hover:bg-black/5"
      >
        <Image
          src={`${iconDir}/icon-back-arrow.svg`}
          alt=""
          width={14}
          height={16}
          className="-rotate-90 opacity-60 transition duration-300 ease-out group-hover/back:-translate-x-0.5 group-hover/back:opacity-100"
        />
      </Link>
      <span aria-hidden className="mx-1 h-4 w-px bg-black/10" />
      <ul className="flex items-center">
        {links.map(({ label, href }) => {
          const isActive = activeId === href.slice(1);
          return (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                aria-current={isActive ? "location" : undefined}
                className="group/item relative flex h-9 w-4 items-center justify-center"
              >
                <span
                  className={`block w-0.5 rounded-full transition-all duration-300 ease-out ${
                    isActive
                      ? "h-5 bg-black"
                      : "h-3 bg-black/25 group-hover/item:h-4 group-hover/item:bg-black/60"
                  }`}
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 translate-y-1 rounded-full bg-white px-2.5 py-1 text-[12px] whitespace-nowrap text-black/75 opacity-0 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition duration-200 ease-out group-hover/item:translate-y-0 group-hover/item:opacity-100"
                  style={wdth}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
      <span
        aria-hidden
        className="ml-2 w-24 truncate text-[13px] text-black/75"
        style={wdth}
      >
        {activeLabel}
      </span>
    </nav>,
    document.body,
  );
}
