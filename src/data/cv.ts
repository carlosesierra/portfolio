export type CvSkillGroup = {
  title: string;
  items: string[];
};

export type CvHighlight = {
  title: string;
  body: string;
};

export type CvExperienceItem = {
  eyebrow: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type CvEducationItem = {
  title: string;
  body: string;
};

export type CvData = {
  availability: string;
  summary: string[];
  coreSkills: CvSkillGroup[];
  highlights: CvHighlight[];
  experience: CvExperienceItem[];
  keyProjectSlugs: string[];
  education: CvEducationItem[];
  tools: CvSkillGroup[];
};

// Replace these seeded entries with your exact employment history before sharing.
export const cvData: CvData = {
  availability:
    "Front-End Engineer with experience across React, TypeScript, modern responsive UI implementation, digital production and delivery-focused frontend systems.",
  summary: [
    "I’m a Front-End Engineer with a background across websites, campaign delivery, eDM systems and branded digital production. My work combines clean frontend implementation, maintainable component structure, responsive design thinking and a practical understanding of how digital work gets delivered in real production environments.",
    "I’m particularly interested in opportunities where strong UI execution meets modern engineering workflows, accessible interfaces and reusable systems that can scale over time.",
  ],
  coreSkills: [
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
        "CMS integration",
        "Cross-browser QA",
        "Performance review",
      ],
    },
  ],
  highlights: [
    {
      title: "Readable frontend systems",
      body:
        "Built work that favours predictable structure and reusable patterns over fragile one-off execution.",
    },
    {
      title: "Design sensitivity",
      body:
        "Strong experience in translating layouts, hierarchy and interface direction into polished frontend delivery.",
    },
    {
      title: "Recruiter-friendly presentation",
      body:
        "Able to describe and present implementation work clearly for both technical teams and hiring stakeholders.",
    },
  ],
  experience: [
    {
      eyebrow: "Recent role",
      role: "Senior Front-End Engineer",
      period: "Recent experience",
      summary:
        "Delivered production-facing interfaces and digital work across websites, reusable components, eDM systems and campaign assets.",
      highlights: [
        "Streamlined delivery across digital production through structured frontend patterns and repeatable workflow thinking.",
        "Improved execution through clearer system structure, reusable UI and component-driven delivery.",
        "Worked across implementation detail, QA and visual polish in fast-moving production environments.",
      ],
      stack: ["React", "TypeScript", "UI Systems", "QA Process"],
    },
    {
      eyebrow: "Marketing and delivery team",
      role: "Front-End Engineer",
      period: "Previous experience",
      summary:
        "Built responsive interfaces, campaign assets and structured frontend deliverables while collaborating with design and production teams.",
      highlights: [
        "Balanced layout quality with responsible component decisions in deadline-driven delivery work.",
        "Collaborated across stakeholders to translate design direction into practical implementation.",
        "Refined page hierarchy and responsive behaviour across multiple digital outputs.",
      ],
      stack: ["React", "Tailwind", "CMS Workflows", "Performance Review"],
    },
    {
      eyebrow: "Earlier foundation",
      role: "Frontend Developer",
      period: "Foundational experience",
      summary:
        "Built a foundation in frontend implementation, browser behaviour, campaign assets and multi-format digital production.",
      highlights: [
        "Strengthened layout, styling and UI implementation fundamentals across websites and production deliverables.",
        "Learned to work with shared codebases and evolving design direction.",
        "Built confidence across delivery QA, visual consistency and browser edge cases.",
      ],
      stack: ["HTML", "CSS", "JavaScript", "UI Implementation"],
    },
  ],
  keyProjectSlugs: [
    "structural-assessments",
    "any-motion",
    "vaa",
  ],
  education: [
    {
      title: "Ongoing frontend specialisation",
      body:
        "Continuous learning across frontend systems, accessibility, performance and modern component-based workflows.",
    },
    {
      title: "Design-to-code practice",
      body:
        "Continued work on layout systems, interaction quality, UI patterns and translating visual direction into robust frontend implementation.",
    },
  ],
  tools: [
    {
      title: "Build",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
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
      items: ["Git", "Content modelling", "CMS updates", "Review cycles", "Release support"],
    },
  ],
};
