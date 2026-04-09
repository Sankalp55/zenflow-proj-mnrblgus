"use client";

import * as React from "react";

export type StickyScrollItem = {
  title: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
};

export type StickyScrollProps = {
  content: StickyScrollItem[];
  className?: string;
};

/**
 * Minimal, build-safe implementation.
 * The project imports `StickyScrollReveal` but expects export name `StickyScroll`.
 */
export function StickyScroll({ content, className }: StickyScrollProps) {
  return (
    <div className={className}>
      {content?.map((item, idx) => (
        <section key={idx} className="py-6">
          <div className="font-medium">{item.title}</div>
          {item.description ? (
            <div className="text-sm opacity-80">{item.description}</div>
          ) : null}
          {item.content ? <div className="mt-3">{item.content}</div> : null}
        </section>
      ))}
    </div>
  );
}

export const StickyScrollReveal = StickyScroll;
export default StickyScroll;
