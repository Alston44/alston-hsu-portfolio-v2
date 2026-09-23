"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { LightboxTrigger } from "./Lightbox";

export const wdth = { fontVariationSettings: '"wdth" 100' } as const;

export const caseStudyBodyText =
  "text-[12px] leading-[1.7] tracking-[-0.25px] text-black/60 sm:text-[14px] md:text-[18px]";

const eyebrowClass =
  "text-[9px] font-semibold leading-none text-black sm:text-[11px] md:text-[14px]";

const headingClass =
  "font-serif text-[26px] leading-[1.1] text-black/60 sm:text-[32px] md:text-[40px]";

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
      : "bg-gradient-to-b from-[#ededed] to-[#e5e5e5]";
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-black/5 ${bg} ${className ?? ""}`}
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
            className="relative w-full overflow-hidden rounded-lg"
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
        <div className="relative h-full w-full overflow-hidden rounded-lg">
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
        className="absolute inset-0 p-3 sm:p-4 xl:p-[10px]"
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg">
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

/** Absolutely-positioned "look here" callout drawn over a screenshot, matching the reviewer's markup in Figma. */
export function RedAnnotation({
  left,
  top,
  width,
  height,
}: {
  left: string;
  top: string;
  width: string;
  height: string;
}) {
  return (
    <div
      className="pointer-events-none absolute border-[3px] border-[#fb1c1c] sm:border-[4px] xl:border-[6px]"
      style={{ left, top, width, height }}
    />
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
  const [activeId, setActiveId] = useState<string | null>(null);

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

  return (
    <div className="sticky top-28 hidden w-[140px] shrink-0 flex-col items-start gap-6 self-start xl:flex">
      <Link
        href="/#work"
        className="group flex items-center gap-2.5"
        aria-label="Back to work"
      >
        <Image
          src={`${iconDir}/icon-back-arrow.svg`}
          alt=""
          width={14}
          height={16}
          className="-rotate-90 transition-transform duration-300 ease-out group-hover:-translate-x-0.5"
        />
        <span
          className="text-[18px] tracking-[-0.25px] text-black/60"
          style={wdth}
        >
          Back
        </span>
      </Link>
      <nav className="flex flex-col items-start gap-[22px]">
        {links.map(({ label, href }) => {
          const isActive = activeId === href.slice(1);
          return (
            <a
              key={label}
              href={href}
              className={`text-[16px] transition-colors ${
                isActive
                  ? "font-bold text-black/80"
                  : "text-black/60 hover:text-black/80"
              }`}
              style={wdth}
            >
              {label}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
