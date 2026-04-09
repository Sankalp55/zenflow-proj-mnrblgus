"use client";

import * as React from "react";

export type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

/**
 * Minimal, build-safe SparklesCore placeholder.
 * The project imports `SparklesCore` from this module.
 */
export function SparklesCore({
  id,
  className,
  background,
}: SparklesCoreProps) {
  return (
    <div
      id={id}
      className={className}
      aria-hidden="true"
      style={{
        background: background ?? "transparent",
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default SparklesCore;
