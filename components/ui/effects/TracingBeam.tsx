"use client";

import * as React from "react";

export type TracingBeamProps = React.PropsWithChildren<{
  className?: string;
}>;

function TracingBeamComponent({ children, className }: TracingBeamProps) {
  return <div className={className}>{children}</div>;
}

// Support both default and named imports.
export const TracingBeam = TracingBeamComponent;
export default TracingBeamComponent;
