import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex border border-border bg-white/72 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
