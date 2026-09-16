import Image from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ArrowLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  /** "default" matches the Hero's 18px/regular anchor; "sm" matches the About page's 16px/medium anchor. */
  size?: "default" | "sm";
};

export default function ArrowLink({
  children,
  className,
  size = "default",
  ...props
}: ArrowLinkProps) {
  const textClassName =
    size === "sm"
      ? "text-[10px] leading-[1.2] tracking-[-0.48px] font-medium sm:text-[13px] md:text-[16px]"
      : "text-[12px] leading-[1.2] tracking-[-0.54px] sm:text-[14px] md:text-[18px]";

  return (
    <Link
      className={`group flex items-center gap-[2px] ${className ?? ""}`}
      {...props}
    >
      <span
        className={`text-black/60 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:underline ${textClassName}`}
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {children}
      </span>
      <span className="flex size-[23.65px] shrink-0 items-center justify-center transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
        <span className="block rotate-[47.39deg]">
          <Image
            src="/images/arrow-up-right.svg"
            alt=""
            width={17}
            height={17}
          />
        </span>
      </span>
    </Link>
  );
}
