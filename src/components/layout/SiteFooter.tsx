import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="pb-10 pt-16">
      <Container>
        <div className="surface-card rounded-[2rem] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                {siteConfig.role}
              </p>
              <p className="mt-3 font-serif text-2xl tracking-tight text-foreground">
                {siteConfig.name}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {siteConfig.footerBlurb}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
