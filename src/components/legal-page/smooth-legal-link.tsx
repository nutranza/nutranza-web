"use client";

import type { MouseEvent, ReactNode } from "react";

export function SmoothLegalLink({
  sectionId,
  className,
  children,
}: {
  sectionId: string;
  className: string;
  children: ReactNode;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", `#${sectionId}`);
    target.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <a href={`#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
