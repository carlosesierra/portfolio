import Link from "next/link";
import { Container } from "@/components/container";
import { brandContent } from "@/content/brand";

export function SiteFooter() {
  return (
    <footer className="pb-8 pt-10 sm:pt-12">
      <Container>
        <div className="surface-card px-6 py-6 sm:px-8 sm:py-7">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.56fr)_minmax(15rem,0.44fr)] lg:items-center">
            <div className="max-w-xl">
              <p className="text-sm leading-7 text-muted sm:text-base">
                {brandContent.footerBlurb}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3 text-sm text-muted">
                {brandContent.navigation.map((item) => {
                  const isHashLink = item.href.startsWith("/#");
                  const isExternal =
                    item.href.startsWith("http://") || item.href.startsWith("https://");
                  const classes =
                    "border border-border/70 bg-white/55 px-4 py-2 shadow-[0_10px_22px_-20px_rgba(23,34,48,0.22)] transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-safe:translate-y-0 motion-safe:transform-gpu motion-safe:hover:-translate-y-[1px] motion-safe:hover:shadow-[0_16px_28px_-20px_rgba(23,34,48,0.2)] hover:bg-white/85 hover:text-foreground";

                  if (isHashLink || isExternal) {
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        className={classes}
                        rel={isExternal ? "noreferrer" : undefined}
                        target={isExternal ? "_blank" : undefined}
                      >
                        {item.label}
                      </a>
                    );
                  }

                  return (
                    <Link key={item.href} href={item.href} className={classes}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
