import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent text-white shadow-[0_18px_40px_-26px_rgba(23,34,48,0.58)] motion-safe:hover:-translate-y-[1px] motion-safe:hover:shadow-[0_24px_44px_-26px_rgba(23,34,48,0.52)] hover:bg-accent-strong",
  secondary:
    "border border-border bg-white/76 text-foreground shadow-[0_12px_24px_-22px_rgba(23,34,48,0.26),inset_0_1px_0_rgba(255,255,255,0.72)] motion-safe:hover:-translate-y-[1px] motion-safe:hover:shadow-[0_18px_30px_-22px_rgba(23,34,48,0.24),inset_0_1px_0_rgba(255,255,255,0.82)] hover:bg-white",
  ghost: "text-foreground hover:text-accent",
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
}: ButtonProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const isMailto = href.startsWith("mailto:");
  const isHashLink = href.startsWith("#") || href.startsWith("/#");
  const classes = cn(
    "inline-flex items-center justify-center px-5 py-3 text-sm font-semibold tracking-[0.01em] no-underline outline-none transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-safe:translate-y-0 motion-safe:transform-gpu will-change-transform focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    variantClasses[variant],
    className,
  );

  if (isExternal || isMailto || isHashLink) {
    return (
      <a
        href={href}
        className={classes}
        data-button=""
        data-button-variant={variant}
        rel={isExternal ? "noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      data-button=""
      data-button-variant={variant}
    >
      {children}
    </Link>
  );
}
