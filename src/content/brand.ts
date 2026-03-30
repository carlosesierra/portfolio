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
    { label: "LinkedIn", href: "https://www.linkedin.com/in/carlosesierra/" },
    { label: "GitHub", href: "https://github.com/carlosesierra" },
  ],
  footerBlurb: "Built with Next.js, TypeScript and Tailwind CSS by Carlos Sierra.",
} as const satisfies BrandContent;
