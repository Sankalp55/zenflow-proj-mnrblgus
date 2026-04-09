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
 * Build-safe fallback for templates expecting `AnimatedTestimonials`.
 */
export function AnimatedTestimonials({ testimonials, className }: AnimatedTestimonialsProps) {
  return (
    <div className={className}>
      {testimonials?.map((t, idx) => (
        <figure key={idx} className="space-y-2">
          <blockquote className="text-sm text-muted-foreground">{t.quote}</blockquote>
          <figcaption className="text-sm font-medium">
            {t.name}
            {t.title ? <span className="text-muted-foreground"> · {t.title}</span> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default AnimatedTestimonials;
