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
    "bg-accent text-white shadow-[0_16px_36px_-20px_rgba(36,75,58,0.7)] hover:bg-accent-strong",
  secondary:
    "border border-border bg-white/80 text-foreground hover:bg-white",
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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors",
    variantClasses[variant],
    className,
  );

  if (isExternal || isMailto || isHashLink) {
    return (
      <a
        href={href}
        className={classes}
        rel={isExternal ? "noreferrer" : undefined}
        target={isExternal ? "_blank" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
