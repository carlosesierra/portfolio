import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/container";

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-12 sm:pt-16">
      <Container>
        <div className="surface-card rounded-[2.35rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.62fr)_minmax(15rem,0.38fr)] lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">{siteConfig.role}</p>
              <p className="mt-3 font-serif text-[2rem] leading-none tracking-tight text-foreground">
                {siteConfig.name}
              </p>
              <p className="section-copy mt-4 max-w-xl text-sm leading-7 sm:text-base">
                {siteConfig.footerBlurb}
              </p>
            </div>

            <div className="space-y-5">
              <div className="soft-divider" />
              <div className="flex flex-wrap gap-3 text-sm text-muted">
                {siteConfig.navigation.map((item) =>
                  item.href.startsWith("/#") ? (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-border/70 bg-white/55 px-4 py-2 shadow-[0_10px_22px_-20px_rgba(23,34,48,0.22)] transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-safe:translate-y-0 motion-safe:transform-gpu motion-safe:hover:-translate-y-[1px] motion-safe:hover:shadow-[0_16px_28px_-20px_rgba(23,34,48,0.2)] hover:bg-white/85 hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-full border border-border/70 bg-white/55 px-4 py-2 shadow-[0_10px_22px_-20px_rgba(23,34,48,0.22)] transition-[transform,background-color,color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-safe:translate-y-0 motion-safe:transform-gpu motion-safe:hover:-translate-y-[1px] motion-safe:hover:shadow-[0_16px_28px_-20px_rgba(23,34,48,0.2)] hover:bg-white/85 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </div>
              <p className="text-sm text-muted">Melbourne, Australia</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
