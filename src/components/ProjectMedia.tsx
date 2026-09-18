import Image from "next/image";

export function FramedScreenshot({
  src,
  alt,
  size = "lg",
}: {
  src: string;
  alt: string;
  size?: "lg" | "sm";
}) {
  const frame =
    size === "lg"
      ? "left-1/2 top-[11%] h-[91%] w-[89%] -translate-x-1/2 rounded-[4px] shadow-[0_3px_20px_rgba(0,0,0,0.4)]"
      : "left-[6.6%] top-[9%] h-[97%] w-[95%] rounded-[11px] shadow-[0_4px_22px_rgba(0,0,0,0.4)]";

  return (
    <div
      className={`absolute overflow-hidden transition-transform duration-300 ease-out group-hover:scale-[1.025] ${frame}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={95}
        className="object-cover object-top"
      />
    </div>
  );
}

type TriptychImage = {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  /** Manual zoom/offset for a source image that doesn't crop cleanly with object-fit. */
  stretch?: { height: string; top: string };
};

export function Triptych({ images }: { images: TriptychImage[] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-[3%] px-[9%]">
      {images.map(({ src, alt, fit = "cover", stretch }) => (
        <div
          key={src}
          className="relative h-[75%] flex-1 overflow-hidden rounded-lg transition-transform duration-300 ease-out group-hover:scale-[1.025]"
        >
          {stretch ? (
            // eslint-disable-next-line @next/next/no-img-element -- needs a manual size/offset outside next/image's fill+object-fit model
            <img
              src={src}
              alt={alt}
              className="absolute left-0 w-full max-w-none"
              style={{ height: stretch.height, top: stretch.top }}
            />
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              className={fit === "contain" ? "object-contain" : "object-cover"}
            />
          )}
        </div>
      ))}
    </div>
  );
}
