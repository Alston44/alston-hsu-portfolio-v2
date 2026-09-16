import Image from "next/image";

export default function HoverPill({
  label,
  color,
  x,
  y,
  visible,
  instant = false,
}: {
  label: string;
  color: string;
  x: number;
  y: number;
  visible: boolean;
  /** Skip the transform transition for one frame so the pill appears exactly where the cursor enters instead of sliding in from its last position. */
  instant?: boolean;
}) {
  return (
    <div
      className="pointer-events-none absolute top-0 left-0 z-10 flex items-center gap-1 rounded-full border border-white/20 px-6 py-3 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-4px_rgba(0,0,0,0.1)] backdrop-blur-[8px] transition-opacity duration-200 ease-out"
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${visible ? 1 : 0.9})`,
        transitionProperty: "opacity, transform",
        transitionDuration: `200ms, ${instant ? "0ms" : "150ms"}`,
        opacity: visible ? 1 : 0,
        backgroundColor: color,
      }}
    >
      <Image src="/images/arrow-up-right-pill.svg" alt="" width={24} height={24} />
      <span className="whitespace-nowrap font-inter text-[14px] text-white">
        {label}
      </span>
    </div>
  );
}
