import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/button";
import { Container } from "@/components/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/75 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link href="/" className="min-w-0">
          <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-muted">
            Portfolio
          </span>
          <span className="block truncate text-base font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {siteConfig.navigation.map((item) =>
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

        <Button href="/cv" variant="secondary" className="hidden sm:inline-flex">
          View CV
        </Button>
      </Container>
    </header>
  );
}
