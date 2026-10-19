import Image from "next/image";

export function FramedScreenshot({
  src,
  alt,
  size = "lg",
  priority = false,
}: {
  src: string;
  alt: string;
  size?: "lg" | "sm";
  /** Set for a card that's above the fold so it's preloaded (it's the LCP image). */
  priority?: boolean;
}) {
  const frame =
    size === "lg"
      ? "left-1/2 top-[11%] h-[91%] w-[89%] -translate-x-1/2 rounded-card"
      : "left-[6.6%] top-[9%] h-[97%] w-[95%] rounded-card";

  return (
    <div
      className={`absolute overflow-hidden transition-transform duration-300 ease-out group-hover:scale-[1.025] ${frame}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 45vw, 92vw"
        quality={95}
        priority={priority}
        className="object-cover object-top"
      />
    </div>
  );
}

/** A single phone-shaped, muted looping screen recording centred in a card. */
export function PhoneVideo({
  src,
  label,
  aspect,
  poster,
}: {
  src: string;
  label: string;
  /** The video's width/height, so the phone keeps its proportions. */
  aspect: string;
  /** Still shown until the first frame is ready. */
  poster?: string;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="relative h-[86%] overflow-hidden rounded-[12%/5.5%] bg-black transition-transform duration-300 ease-out group-hover:scale-[1.025]"
        style={{ aspectRatio: aspect }}
      >
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={label}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
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

/**
 * Three phone screens side by side. Each is sized from the card's height and keeps the
 * proportions of the app screenshots (393:852, an iPhone screen), so the screens never get cropped or stretched when the card's shape
 * changes (a short window, a wide card, a narrow one).
 */
export function Triptych({ images }: { images: TriptychImage[] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-[3%] px-[9%]">
      {images.map(({ src, alt, fit = "cover", stretch }) => (
        <div
          key={src}
          className="relative aspect-393/852 h-[75%] flex-none overflow-hidden rounded-card transition-transform duration-300 ease-out group-hover:scale-[1.025]"
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
              sizes="(min-width: 1024px) 15vw, 30vw"
              className={fit === "contain" ? "object-contain" : "object-cover"}
            />
          )}
        </div>
      ))}
    </div>
  );
}
