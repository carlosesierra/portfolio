import type {
  LabeledTitleBodyItem,
  LinkCta,
  SectionIntro,
  StackGroup,
  TitleBodyItem,
} from "@/content/types";

type HomeContent = {
  hero: {
    intro: string;
    primaryCta: LinkCta;
    secondaryCta: LinkCta;
    atGlance: {
      eyebrow: string;
      value: string;
      body: string;
      supporting: string;
    };
  };
  featured: SectionIntro;
  whatIBring: SectionIntro & {
    items: readonly TitleBodyItem[];
  };
  experienceSnapshot: SectionIntro & {
    items: readonly LabeledTitleBodyItem[];
    aside: {
      eyebrow: string;
      title: string;
      includesLabel: string;
      includesBody: string;
      cta: LinkCta;
    };
  };
  tooling: SectionIntro & {
    groups: readonly StackGroup[];
  };
  about: {
    aside: {
      eyebrow: string;
      labels: {
        location: string;
        role: string;
        specialties: string;
        focusNow: string;
      };
      specialties: readonly string[];
      focusNow: string;
    };
    main: SectionIntro & {
      paragraphs: readonly string[];
    };
    currentFocus: {
      eyebrow: string;
      body: string;
      cta: LinkCta;
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: LinkCta;
    secondaryCta: LinkCta;
  };
};

export const homeContent = {
  hero: {
    intro:
      "I build fast, accessible and production-ready interfaces with React, TypeScript and modern frontend workflows. My experience spans product websites, marketing platforms, reusable UI patterns, eDM systems and high-volume campaign delivery.",
    primaryCta: {
      label: "View Projects",
      href: "#projects",
    },
    secondaryCta: {
      label: "View CV",
      href: "/cv",
    },
    atGlance: {
      eyebrow: "At a glance",
      value: "3",
      body: "Case studies with context, implementation and outcome.",
      supporting:
        "React, Next.js, TypeScript, structured UI systems and recruiter-readable presentation.",
    },
  },
  featured: {
    eyebrow: "Featured work",
    title: "Frontend structure, delivery quality and practical outcomes.",
    copy:
      "The case studies below focus on the decisions, implementation details and delivery outcomes behind the work, not just the finished screens.",
  },
  whatIBring: {
    eyebrow: "What I bring",
    title:
      "Frontend work shaped by clarity, structured delivery and practical implementation.",
    copy:
      "My background combines interface implementation, delivery discipline and production experience across websites and campaign environments.",
    items: [
      {
        title: "Clear interface structure",
        body:
          "I shape hierarchy, layout and component boundaries so interfaces are easier to scan, use and extend.",
      },
      {
        title: "Design-aware engineering",
        body:
          "I translate typography, spacing, interaction states and visual direction into frontend work that feels considered in the browser.",
      },
      {
        title: "Structured delivery",
        body:
          "I work comfortably with deadlines, revisions, content constraints and production requirements without losing implementation quality.",
      },
      {
        title: "Clear communication of technical work",
        body:
          "I can explain decisions, tradeoffs and frontend contribution clearly for teammates, clients and hiring review.",
      },
    ],
  },
  experienceSnapshot: {
    eyebrow: "Experience snapshot",
    title: "The experience behind the work.",
    copy:
      "Experience across freelance, studio and production environments spanning websites, eDMs and campaign-driven frontend work.",
    items: [
      {
        eyebrow: "2015 - Present",
        title: "Frontend Engineer · Freelance",
        body:
          "Delivering websites, landing pages and eDM campaigns for businesses that need practical, modern web presence and reliable frontend implementation.",
      },
      {
        eyebrow: "Dec 2023 - Jan 2025",
        title: "Senior Front-End Developer · MADE THIS",
        body:
          "Delivered frontend development across landing pages, responsive eDMs and HTML5 animated banners, translating creative direction into polished, production-ready digital work.",
      },
      {
        eyebrow: "Jan 2018 - Jan 2025",
        title: "Senior Front-End Developer · eg+ worldwide",
        body:
          "Delivered frontend and digital production work across websites, responsive eDMs, HTML5 banners and landing pages, with a strong emphasis on scalable delivery and implementation quality.",
      },
    ],
    aside: {
      eyebrow: "Full CV",
      title:
        "An overview of my frontend experience, core skills and selected project references.",
      includesLabel: "Includes",
      includesBody:
        "Selected experience, project references and tooling across frontend engineering, digital production and delivery-focused work.",
      cta: {
        label: "Open CV",
        href: "/cv",
      },
    },
  },
  tooling: {
    eyebrow: "Tooling",
    title: "Tools and environments I use.",
    copy:
      "These are the environments I work in most often across implementation, UI systems and production delivery.",
    groups: [
      {
        title: "Frontend",
        items: [
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "HTML",
          "CSS",
        ],
      },
      {
        title: "UI Systems",
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
          "Git / GitHub",
          "CMS workflows",
          "Performance reviews",
          "Cross-browser QA",
        ],
      },
    ],
  },
  about: {
    aside: {
      eyebrow: "About",
      labels: {
        location: "Location",
        role: "Role",
        specialties: "Specialties",
        focusNow: "Focus now",
      },
      specialties: ["React", "Next.js", "TypeScript", "UI Systems"],
      focusNow:
        "Frontend roles where thoughtful interface implementation and structured delivery matter equally.",
    },
    main: {
      eyebrow: "About",
      title: "A short introduction to how I approach frontend engineering.",
      paragraphs: [
        "I'm a Melbourne-based Front-End Engineer with a background across websites, digital production and marketing-tech delivery. Over time, I've developed a strong interest in the systems behind good interface work - how components are structured, how content is presented clearly and how delivery stays reliable under real production constraints.",
        "I’m now focused on frontend roles where thoughtful UI implementation, modern engineering workflows and product-facing collaboration come together.",
      ],
    },
    currentFocus: {
      eyebrow: "Current focus",
      body:
        "Roles that value clean UI, maintainable frontend systems and a polished but pragmatic approach to delivery.",
      cta: {
        label: "View Full CV",
        href: "/cv",
      },
    },
  },
  contact: {
    eyebrow: "Next step",
    title: "Open to frontend roles where thoughtful UI and structured delivery matter.",
    body:
      "I'm looking for frontend roles where clear UI, strong implementation and dependable delivery all matter.",
    primaryCta: {
      label: "View CV",
      href: "/cv",
    },
    secondaryCta: {
      label: "Browse Projects",
      href: "/#projects",
    },
  },
} as const satisfies HomeContent;
