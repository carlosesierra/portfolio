import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { brandContent } from "@/content/brand";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-3 py-4 sm:gap-6">
        <Link href="/" className="min-w-0 flex-1">
          <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">
            {brandContent.header.eyebrow}
          </span>
          <span className="block truncate text-base font-semibold tracking-tight text-foreground">
            {brandContent.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {brandContent.navigation.map((item) => {
            const isHashLink = item.href.startsWith("/#");
            const isExternal =
              item.href.startsWith("http://") || item.href.startsWith("https://");

            if (isHashLink || isExternal) {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground"
                  rel={isExternal ? "noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            href={brandContent.header.cvCta.href}
            variant="secondary"
            className="whitespace-nowrap px-3 py-2 text-[0.76rem] sm:px-5 sm:py-3 sm:text-sm"
          >
            {brandContent.header.cvCta.label}
          </Button>
          <Button
            href={brandContent.header.extendedCta.href}
            variant="secondary"
            className="whitespace-nowrap px-3 py-2 text-[0.76rem] sm:px-5 sm:py-3 sm:text-sm"
          >
            {brandContent.header.extendedCta.label}
          </Button>
        </div>
      </Container>
    </header>
  );
}
