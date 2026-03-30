import type { LinkCta, SectionIntro, StackGroup, TitleBodyItem } from "@/content/types";

export type CvExperienceItem = {
  eyebrow: string;
  role: string;
  period: string;
  summary: string;
  highlights: readonly string[];
  stack: readonly string[];
};

type CvContent = {
  hero: {
    eyebrow: string;
    intro: string;
    snapshotLabel: string;
    labels: {
      location: string;
      focus: string;
    };
    focusValue: string;
    primaryCta: LinkCta;
    secondaryCta: LinkCta;
  };
  professionalSummary: SectionIntro & {
    paragraphs: readonly string[];
  };
  coreSkills: SectionIntro & {
    groups: readonly StackGroup[];
  };
  highlightsSection: SectionIntro & {
    items: readonly TitleBodyItem[];
  };
  experienceSection: SectionIntro & {
    items: readonly CvExperienceItem[];
  };
  projectReferencesSection: SectionIntro & {
    slugs: readonly string[];
  };
  educationSection: SectionIntro & {
    items: readonly TitleBodyItem[];
  };
  toolsSection: SectionIntro & {
    groups: readonly StackGroup[];
  };
  ctaSection: {
    eyebrow: string;
    title: string;
    primaryCta: LinkCta;
    secondaryCta: LinkCta;
  };
};

export const cvContent = {
  hero: {
    eyebrow: "Curriculum vitae",
    intro:
      "An overview of my frontend experience, core skills and selected project references.",
    snapshotLabel: "Snapshot",
    labels: {
      location: "Location",
      focus: "Focus",
    },
    focusValue: "Frontend engineering, UI systems and delivery quality.",
    primaryCta: {
      label: "View Projects",
      href: "/#projects",
    },
    secondaryCta: {
      label: "Back Home",
      href: "/",
    },
  },
  professionalSummary: {
    eyebrow: "Professional summary",
    title:
      "Frontend engineer focused on clear UI, structured implementation and reliable delivery.",
    paragraphs: [
      "I'm a Front-End Engineer with experience across websites, campaign delivery, eDM systems and modern responsive UI implementation. My work combines clean frontend execution, reusable structure, accessibility awareness and a practical understanding of how digital projects are delivered in real production environments.",
    ],
  },
  coreSkills: {
    eyebrow: "Core skills",
    title: "Core skills: How I use them in practice.",
    groups: [
      {
        title: "Frontend Engineering",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Accessibility",
        ],
      },
      {
        title: "Interface Systems",
        items: [
          "Component architecture",
          "Design systems",
          "Responsive layouts",
          "Interaction states",
          "Structured content",
        ],
      },
      {
        title: "Delivery",
        items: [
          "Vercel",
          "Git workflow",
          "Sanity (Headless CMS)",
          "CMS integration",
          "Cross-browser QA",
          "Performance review",
        ],
      },
    ],
  },
  highlightsSection: {
    eyebrow: "Highlights",
    title: "Strengths that show up consistently in my work.",
    copy:
      "These themes reflect how I tend to approach frontend implementation across both product-style websites and campaign-driven environments.",
    items: [
      {
        title: "Structured frontend systems",
        body:
          "Built work that favours predictable structure and reusable patterns over fragile one-off execution.",
      },
      {
        title: "Design-aware implementation",
        body:
          "Strong experience in translating layouts, hierarchy and interface direction into polished frontend delivery.",
      },
      {
        title: "Clear presentation of technical work",
        body:
          "Able to describe and present implementation work clearly for both technical teams and hiring stakeholders.",
      },
    ],
  },
  experienceSection: {
    eyebrow: "Experience",
    title: "Selected experience.",
    copy:
      "Frontend and digital production experience across websites, eDM systems, HTML5 banners and responsive UI delivery.",
    items: [
      {
        eyebrow: "Current practice",
        role: "Frontend Engineer · Freelance",
        period: "2015 - Present",
        summary:
          "Delivering websites, landing pages and eDM campaigns for businesses that need practical, modern web presence and reliable frontend implementation.",
        highlights: [
          "Designed, built and launched modern business websites with a focus on clarity, responsiveness and maintainable structure.",
          "Delivered one-page sites, landing pages, eDM campaigns and animated banners across a range of business needs.",
          "Handled implementation end to end, from frontend build and layout refinement through to deployment-ready delivery.",
        ],
        stack: [
          "React",
          "Tailwind",
          "TypeScript",
          "Frontend Development",
          "QA Process",
          "eDM",
          "Web Design",
        ],
      },
      {
        eyebrow: "Marketing and delivery team",
        role: "Senior Front-End Developer · MADE THIS",
        period: "Dec 2023 - Jan 2025",
        summary:
          "Delivered frontend development across landing pages, responsive eDMs and HTML5 animated banners, translating creative direction into polished, production-ready digital work.",
        highlights: [
          "Built responsive landing pages, eDMs and animated banner work across fast-paced campaign delivery environments.",
          "Worked across React, Bootstrap, GSAP, JavaScript, Sass and production tooling including Node and npm.",
          "Balanced visual quality, implementation accuracy and turnaround speed across campaign-led frontend delivery.",
        ],
        stack: [
          "JavaScript",
          "React",
          "Bootstrap",
          "GSAP",
          "Node",
          "CMS Workflows",
          "Performance Review",
        ],
      },
      {
        eyebrow: "Earlier experience",
        role: "Senior Front-End Developer · eg+ worldwide",
        period: "Jan 2018 - Jan 2025",
        summary:
          "Delivered frontend and digital production work across websites, responsive eDMs, HTML5 banners and landing pages, with a strong emphasis on scalable delivery and implementation quality.",
        highlights: [
          "Built responsive digital experiences across web, email and campaign formats in high-volume production environments.",
          "Worked across React, Node, GSAP, Gulp, JavaScript and Sass to support efficient and reliable campaign delivery.",
          "Contributed to workflow improvements and repeatable production patterns that supported faster execution and consistent output quality.",
        ],
        stack: [
          "React",
          "Node",
          "GSAP",
          "Gulp",
          "Marketing Cloud",
          "Campaign Production",
        ],
      },
    ],
  },
  projectReferencesSection: {
    eyebrow: "Project references",
    title: "Selected project references",
    copy:
      "A few projects that reflect how I approach frontend implementation, delivery and long-term usability.",
    slugs: ["structural-assessments", "any-motion", "vaa"],
  },
  educationSection: {
    eyebrow: "Education and specialisation",
    title: "Ongoing learning and technical development.",
    copy:
      "Alongside project work, I continue refining my frontend practice through structured learning, design-to-code execution and deeper work with modern UI systems.",
    items: [
      {
        title: "Ongoing full-stack specialisation",
        body:
          "Continuous learning across frontend systems, accessibility, performance and modern component-based workflows.",
      },
      {
        title: "Design-to-code practice",
        body:
          "Continued work on layout systems, interaction quality, UI patterns and translating visual direction into robust frontend implementation.",
      },
    ],
  },
  toolsSection: {
    eyebrow: "Tooling",
    title: "Tools and technologies.",
    copy:
      "The tools below reflect the environments I've worked in most often across frontend build, interface implementation and digital delivery.",
    groups: [
      {
        title: "Build",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Semantic HTML",
          "CSS",
        ],
      },
      {
        title: "Interface",
        items: [
          "Component UI",
          "Design tokens",
          "Responsive layout",
          "Accessibility",
          "Release polish",
        ],
      },
      {
        title: "Workflow",
        items: [
          "Git",
          "Content modelling",
          "CMS updates",
          "Review cycles",
          "Release support",
        ],
      },
    ],
  },
  ctaSection: {
    eyebrow: "Continue exploring",
    title:
      "Explore the case studies for a closer look at implementation decisions, delivery thinking and frontend execution.",
    primaryCta: {
      label: "Open Case Studies",
      href: "/#projects",
    },
    secondaryCta: {
      label: "Return Home",
      href: "/",
    },
  },
} as const satisfies CvContent;
