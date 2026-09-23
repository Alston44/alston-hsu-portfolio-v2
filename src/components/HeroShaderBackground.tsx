"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const ShaderGradientCanvas = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradientCanvas),
  { ssr: false },
);
const ShaderGradient = dynamic(
  () => import("shadergradient").then((mod) => mod.ShaderGradient),
  { ssr: false },
);

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

/**
 * Experimental — delete this file and its one usage in Hero.tsx to remove.
 * Opacity on the wrapper (not the shader's own brightness) is the easiest
 * dial to tune how strong the effect reads against the hero copy.
 *
 * Bleeds 100px above the section (the header's fixed height, so it shows
 * through the header's translucent/blurred background) and extends well
 * past the hero's bottom. It covers the full hero width; the vertical
 * mask (not the shader's own geometry) fades it to nothing before the
 * Works section so there's no hard edge at the bottom.
 */
export default function HeroShaderBackground() {
  // Freeze the gradient (still rendered) for visitors who prefer reduced motion.
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );

  return (
    <div
      className="pointer-events-none absolute inset-x-0 -top-[100px] -bottom-[220px] -z-10 opacity-[0.11] sm:opacity-[0.2]"
      style={{
        maskImage:
          "linear-gradient(to bottom, black 0%, black 50%, transparent 92%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 0%, black 50%, transparent 92%)",
      }}
    >
      <ShaderGradientCanvas pixelDensity={1} fov={45}>
        <ShaderGradient
          type="waterPlane"
          animate={reduceMotion ? "off" : "on"}
          uTime={0.2}
          uSpeed={0.1}
          uStrength={2.4}
          uDensity={1.1}
          uFrequency={5.5}
          uAmplitude={0}
          positionX={-0.5}
          positionY={0.1}
          positionZ={0}
          rotationX={0}
          rotationY={0}
          rotationZ={235}
          color1="#f3f7fd"
          color2="#a9bcd8"
          color3="#ffffff"
          reflection={0.1}
          wireframe={false}
          shader="defaults"
          cAzimuthAngle={180}
          cPolarAngle={115}
          cDistance={2.4}
          cameraZoom={1}
          lightType="3d"
          brightness={1.1}
          envPreset="city"
          grain="off"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
