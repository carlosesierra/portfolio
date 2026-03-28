export const siteConfig = {
  name: "Carlos Sierra",
  role: "Senior Front-End Engineer",
  location: "Melbourne, Australia",
  intro:
    "I build fast, accessible and production-ready interfaces with React, TypeScript and modern frontend workflows. My experience spans product websites, marketing platforms, reusable UI patterns, eDM systems and high-volume campaign delivery.",
  supportingLine:
    "I'm particularly strong at turning design into polished, maintainable frontend systems that work well across devices and are practical to ship.",
  navigation: [
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "CV", href: "/cv" },
  ],
  valueProps: [
    {
      title: "Clear interface structure",
      body:
        "I focus on strong hierarchy, readable layouts and component patterns that make interfaces easier to scan, use and maintain.",
    },
    {
      title: "Clear communication of technical work",
      body:
        "I can present frontend work in a way that is both visually polished and clearly tied to implementation value.",
    },
    {
      title: "Maintainable frontend patterns",
      body:
        "I prefer reusable structure, scalable styling and systems that support future changes without unnecessary complexity.",
    },
  ],
  strengths: [
    {
      title: "Design-aware engineering",
      body:
        "I enjoy translating layout, spacing, typography and interaction intent into polished frontend implementation.",
    },
    {
      title: "Structured delivery",
      body:
        "I'm used to working with deadlines, revisions, content constraints and production requirements without losing quality.",
    },
    {
      title: "Frontend system thinking",
      body:
        "I prefer reusable components, consistent patterns and implementation choices that support long-term maintainability.",
    },
    {
      title: "Reliable delivery quality",
      body:
        "The quality of the finished work matters to me just as much as shipping it. I aim for interfaces that feel considered and reliable.",
    },
  ],
  experienceSnapshot: [
    {
      eyebrow: "Recent role",
      title: "Senior Front-End Engineer",
      body:
        "Delivered digital work across websites, UI systems, eDMs and campaign assets with a focus on implementation quality and scalable production.",
    },
    {
      eyebrow: "Core strength",
      title: "Front-End Engineer",
      body:
        "Strong in responsive interface implementation, structured frontend patterns and translating design direction into production-ready UI.",
    },
    {
      eyebrow: "Earlier foundation",
      title: "Frontend Developer",
      body:
        "Built a broad technical base across websites, digital production, eDM workflows and multi-format campaign delivery.",
    },
  ],
  proofPoints: [
    {
      value: "Accessibility-minded implementation",
      label:
        "Semantic structure and accessible UI patterns are built into how I approach frontend implementation.",
    },
    {
      value: "Reusable component thinking",
      label:
        "I prefer repeatable component thinking over one-off page styling whenever possible.",
    },
    {
      value: "React + Next.js",
      label:
        "Comfortable building modern frontend interfaces with TypeScript, structured styling and deployment-ready workflows.",
    },
  ],
  stackGroups: [
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
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
  about: [
    "I'm a Melbourne-based Front-End Engineer with a background across websites, digital production and marketing-tech delivery. Over time, I've developed a strong interest in the systems behind good interface work — how components are structured, how content is presented clearly and how delivery stays reliable under real production constraints.",
    "The common thread in my work is frontend execution that feels polished, maintainable and grounded in practical delivery. I'm now focused on roles where thoughtful UI implementation, structured engineering and product-facing collaboration come together.",
  ],
  contactCta: {
    title:
      "Open to frontend roles where thoughtful UI and structured delivery matter.",
    body:
      "This portfolio highlights the kind of work I want to keep building: accessible interfaces, maintainable frontend systems and polished digital experiences delivered with care.",
    primaryLabel: "View CV",
    primaryHref: "/cv",
    secondaryLabel: "Browse Projects",
    secondaryHref: "/#projects",
  },
  footerBlurb:
    "Built with React / Next.js / Tailwind by Carlos Sierra. Focused on clean systems, accessible implementation and practical frontend delivery.",
} as const;
