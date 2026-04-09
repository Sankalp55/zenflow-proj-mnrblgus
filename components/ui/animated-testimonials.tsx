"use client";

import * as React from "react";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  title?: string;
  src?: string;
};

export type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  className?: string;
};

/**
 * Minimal, build-safe implementation.
 * The project imports `AnimatedTestimonials` from this module.
 */
export function AnimatedTestimonials({
  testimonials,
  className,
}: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      {testimonials?.map((t, idx) => (
        <figure key={idx} className="space-y-2">
          <blockquote className="text-sm leading-relaxed">{t.quote}</blockquote>
          <figcaption className="text-xs opacity-80">
            {t.name}
            {t.title ? ` — ${t.title}` : ""}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default AnimatedTestimonials;
