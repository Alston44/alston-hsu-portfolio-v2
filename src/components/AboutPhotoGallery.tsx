import Image from "next/image";
import type { CSSProperties } from "react";

const SCATTERED_PHOTOS = [
  {
    src: "/images/about/food.webp",
    alt: "Alston sharing a meal",
    left: "5.05%",
    top: "0%",
    width: "36.2%",
    height: "33.5%",
    rotate: "-5deg",
  },
  {
    src: "/images/about/dog.webp",
    alt: "A dog with a yellow bow",
    left: "49%",
    top: "0%",
    width: "47.5%",
    height: "44.7%",
    rotate: "6deg",
  },
  {
    src: "/images/about/workspace.webp",
    alt: "Alston's design workspace",
    left: "13.46%",
    top: "44.76%",
    width: "29%",
    height: "27.6%",
    rotate: "5deg",
  },
  {
    src: "/images/about/beach.webp",
    alt: "Silhouette on a beach at sunset",
    left: "48%",
    top: "58.89%",
    width: "43.6%",
    height: "41.1%",
    rotate: "-4deg",
  },
];

export default function AboutPhotoGallery() {
  return (
    <div className="flex w-full shrink-0 flex-col gap-8 md:w-[29%] md:max-w-[560px]">
      <div className="main-photo-fade-in relative aspect-square w-full overflow-hidden rounded-lg">
        <Image
          src="/images/about/profile.webp"
          alt="Alston Hsu"
          fill
          sizes="(min-width: 768px) 416px, 100vw"
          className="object-cover object-[center_75%]"
          priority
        />
      </div>
      <div className="relative aspect-[416/449] w-full">
        {SCATTERED_PHOTOS.map(({ src, alt, left, top, width, height, rotate }, index) => (
          <div
            key={src}
            className="photo-fall-in absolute overflow-hidden rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            style={
              {
                left,
                top,
                width,
                height,
                "--photo-rotate": rotate,
                animationDelay: `${900 + index * 120}ms`,
              } as CSSProperties
            }
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 768px) 200px, 40vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
