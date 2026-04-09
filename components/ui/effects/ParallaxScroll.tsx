"use client";

import * as React from "react";

export type ParallaxScrollProps = {
  images: Array<string | { src: string; alt?: string }>;
  className?: string;
};

/**
 * Minimal, build-safe implementation.
 * The project imports `ParallaxScroll` from this module.
 */
export function ParallaxScroll({ images, className }: ParallaxScrollProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-4">
        {images?.map((img, idx) => {
          const src = typeof img === "string" ? img : img.src;
          const alt = typeof img === "string" ? "" : img.alt ?? "";
          // eslint-disable-next-line @next/next/no-img-element
          return <img key={idx} src={src} alt={alt} className="w-full h-auto" />;
        })}
      </div>
    </div>
  );
}

export default ParallaxScroll;
