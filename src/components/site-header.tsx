import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { brandContent } from "@/content/brand";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="min-w-0">
          <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">
            {brandContent.header.eyebrow}
          </span>
          <span className="block truncate text-base font-semibold tracking-tight text-foreground">
            {brandContent.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {brandContent.navigation.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Button
          href={brandContent.header.cvCta.href}
          variant="secondary"
          className="hidden sm:inline-flex"
        >
          {brandContent.header.cvCta.label}
        </Button>
      </Container>
    </header>
  );
}
