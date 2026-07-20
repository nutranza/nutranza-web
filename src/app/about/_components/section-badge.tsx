import type { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
  number: string;
};

export function SectionBadge({ children, number }: SectionBadgeProps) {
  return (
    <p className="inline-flex w-fit overflow-hidden rounded-xl border border-brand-cocoa/20 bg-brand-surface text-xs font-extrabold leading-none text-brand-cocoa-deep shadow-[0_8px_24px_rgba(58,33,20,0.08)] sm:text-sm">
      <span className="flex items-center bg-brand-mango px-3 py-2.5 font-black tracking-[0.08em] sm:px-3.5">
        {number}
      </span>
      <span className="flex items-center border-l border-brand-cocoa/20 px-4 py-2.5 tracking-[0.04em] sm:px-5">
        {children}
      </span>
    </p>
  );
}
