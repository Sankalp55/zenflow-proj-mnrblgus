"use client";

import * as React from "react";

export type BentoGridProps = React.HTMLAttributes<HTMLDivElement>;

export function BentoGrid({ className, ...props }: BentoGridProps) {
  return <div className={className} {...props} />;
}

export type BentoGridItemProps = React.HTMLAttributes<HTMLDivElement> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
};

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
  ...props
}: BentoGridItemProps) {
  return (
    <div className={className} {...props}>
      {header ? <div>{header}</div> : null}
      <div className="space-y-1">
        {icon ? <div>{icon}</div> : null}
        {title ? <div>{title}</div> : null}
        {description ? <div>{description}</div> : null}
      </div>
    </div>
  );
}

export default BentoGrid;
