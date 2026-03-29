"use client";

import type { ReactNode } from "react";
import { useEffect, useEffectEvent, useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxMediaProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ParallaxMedia({
  children,
  className,
  strength = 42,
}: ParallaxMediaProps) {
  const frameRef = useRef<HTMLDivElement>(null);

  const updatePosition = useEffectEvent(() => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame.style.setProperty("--parallax-shift", "0px");
      return;
    }

    const rect = frame.getBoundingClientRect();
    const viewportCenter = window.innerHeight / 2;
    const elementCenter = rect.top + rect.height / 2;
    const denominator = viewportCenter + rect.height / 2 || 1;
    const viewportWidth = window.innerWidth;
    const travelRatio =
      viewportWidth < 640 ? 0.045 : viewportWidth < 1024 ? 0.06 : 0.075;

    const progress = clamp((elementCenter - viewportCenter) / denominator, -1, 1);
    const travel = Math.min(strength, rect.height * travelRatio);

    // Move against scroll so the image visibly lags behind its frame.
    frame.style.setProperty("--parallax-shift", `${-progress * travel}px`);
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const scheduleUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updatePosition();
      });
    };

    const handlePreferenceChange = () => {
      scheduleUpdate();
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handlePreferenceChange);
    } else {
      mediaQuery.addListener(handlePreferenceChange);
    }

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handlePreferenceChange);
      } else {
        mediaQuery.removeListener(handlePreferenceChange);
      }
    };
  }, []);

  return (
    <div ref={frameRef} className={cn("parallax-media", className)}>
      <div className="parallax-media__inner">
        <div className="parallax-media__content">{children}</div>
      </div>
    </div>
  );
}
