import type { LinkCta, NavigationItem } from "@/content/types";

type BrandContent = {
  name: string;
  role: string;
  location: string;
  header: {
    eyebrow: string;
    cvCta: LinkCta;
  };
  navigation: readonly NavigationItem[];
  footerBlurb: string;
};

export const brandContent = {
  name: "Carlos Sierra",
  role: "Senior Front-End Engineer",
  location: "Melbourne, Australia",
  header: {
    eyebrow: "Portfolio",
    cvCta: {
      label: "View CV",
      href: "/cv",
    },
  },
  navigation: [
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "CV", href: "/cv" },
  ],
  footerBlurb:
    "Built with React / Next.js / Tailwind by Carlos Sierra. Focused on clean systems, accessible implementation and practical frontend delivery.",
} as const satisfies BrandContent;
