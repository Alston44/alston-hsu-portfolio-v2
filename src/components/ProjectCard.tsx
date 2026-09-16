"use client";

import Link from "next/link";
import { useState, type MouseEvent, type ReactNode } from "react";
import HoverPill from "./HoverPill";

type ProjectCardProps = {
  href: string;
  background: string;
  media: ReactNode;
  title: string;
  company: string;
  tags: string[];
  pillLabel: string;
  pillColor: string;
};

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-black/10 bg-black/5 px-1.5 py-0.5 font-inter text-xs font-semibold text-black opacity-67">
      {children}
    </span>
  );
}

export default function ProjectCard({
  href,
  background,
  media,
  title,
  company,
  tags,
  pillLabel,
  pillColor,
}: ProjectCardProps) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [instant, setInstant] = useState(false);

  const updateCursor = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    setInstant(true);
    updateCursor(e);
    setHovering(true);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (instant) setInstant(false);
    updateCursor(e);
  };

  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 transition-transform duration-300 ease-out hover:-translate-y-0.5"
    >
      <div
        className="relative aspect-[624/455] w-full overflow-hidden rounded-lg shadow-none transition-shadow duration-300 ease-out group-hover:shadow-[0_10px_20px_-12px_rgba(0,0,0,0.18)]"
        style={{ backgroundImage: background }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovering(false)}
      >
        {media}
        <HoverPill
          label={pillLabel}
          color={pillColor}
          x={cursor.x}
          y={cursor.y}
          visible={hovering}
          instant={instant}
        />
      </div>
      <div className="flex w-full flex-col gap-3">
        <h3
          className="text-[13px] leading-[1.4] font-medium tracking-[-0.72px] text-black/60 sm:text-[16px] md:text-[20px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {title}
        </h3>
        <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span
            className="text-[10px] font-medium text-black/60 sm:text-[13px] md:text-base"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {company}
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
