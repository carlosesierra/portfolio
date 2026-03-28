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
    "An overview of my frontend experience, core skills and selected project references.",
  summary: [
    "I'm a Front-End Engineer with experience across websites, campaign delivery, eDM systems and modern responsive UI implementation. My work combines clean frontend execution, reusable structure, accessibility awareness and a practical understanding of how digital projects are delivered in real production environments.",
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
        "Sanity (Headless CMS)",
        "Cross-browser QA",
        "Performance review",
      ],
    },
  ],
  highlights: [
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
  experience: [
    {
      eyebrow: "Recent role",
      role: "Frontend Engineer · Freelance",
      period: "2015 - Present",
      summary:
        "Delivering websites, landing pages and eDM campaigns for businesses that need practical, modern web presence and reliable frontend implementation.",
      highlights: [
        "Designed, built and launched modern business websites with a focus on clarity, responsiveness and maintainable structure",
        "Delivered one-page sites, landing pages, eDM campaigns and animated banners across a range of business needs",
        "Handled implementation end to end, from frontend build and layout refinement through to deployment-ready deliver",
      ],
      stack: ["React", "Tailwind", "TypeScript", "Frontend Development", "QA Process", "eDM" ,"Web Design"],
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
      stack: ["JavaScript", "React", "Bootstrap", "GSAP", "Node", "CMS Workflows", "Performance Review"],
    },
    {
      eyebrow: "Jan 2018 - Jan 2025",
      role: "Senior Front-End Developer · eg+ worldwide",
      period: "Foundational experience",
      summary:
        "Delivered frontend and digital production work across websites, responsive eDMs, HTML5 banners and landing pages, with a strong emphasis on scalable delivery and implementation quality.",
      highlights: [
        "Built responsive digital experiences across web, email and campaign formats in high-volume production environments.",
        "Worked across React, Node, GSAP, Gulp, JavaScript and Sass to support efficient and reliable campaign delivery.",
        "Contributed to workflow improvements and repeatable production patterns that supported faster execution and consistent output quality.",
      ],
      stack: ["React", "Node", "GSAP", "Gulp", "Marketing Cloud", "Campaign Production"],
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
