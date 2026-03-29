export type ProjectContentBlock = {
  title: string;
  body: string;
};

export type ProjectChallengeSolution = {
  challenge: string;
  solution: string;
};

export type ProjectMetric = {
  value: string;
  label: string;
};

export type ProjectImage = {
  src?: string;
  alt: string;
  caption?: string;
  kind?: "hero" | "desktop" | "mobile" | "detail";
  frameClassName?: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  summaryFocus?: string;
  period: string;
  tagline: string;
  showcaseIntro?: string;
  summary: string;
  role: string;
  stack: string[];
  focus: string[];
  showcaseFocus?: string[];
  outcome: string;
  featured: boolean;
  referenceSummary?: string;
  overview: string;
  challenge: string;
  responsibilities: string[];
  approach: ProjectContentBlock[];
  uxDecisions: ProjectContentBlock[];
  technicalImplementation: string;
  challengesSolutions: ProjectChallengeSolution[];
  outcomePoints: string[];
  nextSteps: string;
  heroImage?: string;
  gallery?: ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  metrics: ProjectMetric[];
};

// Replace these seed projects with your own shipped work before publishing.
export const projects: Project[] = [
  {
    slug: "structural-assessments",
    title: "Structural Assessments",
    client: "Engineering website",
    summaryFocus: "Engineering service website",
    period: "Recent",
    tagline:
      "Strengthening a technical service brand through clearer information architecture, structured sections and production-ready frontend delivery.",
    showcaseIntro:
      "The interface needed to communicate technical credibility quickly, make services easier to understand and support enquiries without adding unnecessary friction.",
    summary:
      "A production-ready engineering website focused on clearer service presentation, stronger trust signals and maintainable frontend delivery.",
    role: "Frontend engineering, architecture, deployment readiness",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    focus: ["Service presentation", "SEO structure", "Enquiry UX"],
    showcaseFocus: ["Service presentation", "Structured content", "Contact flow"],
    outcome:
      "A stronger frontend foundation with clearer service communication, better SEO readiness and more robust enquiry handling.",
    featured: true,
    liveUrl: "https://www.structuralassessments.com.au/",
    heroImage: "/projects/structural-assessments/structuralassessments-hero.webp",
    gallery: [
      {
        src: "/projects/structural-assessments/structuralassessments-desktop.webp",
        alt: "Structural Assessments desktop website screenshot",
        caption: "Desktop page composition",
        kind: "detail",
        frameClassName: "h-[24rem] sm:h-[28rem] lg:h-[34rem]",
      },
      {
        src: "/projects/structural-assessments/structuralassessments-mob.webp",
        alt: "Structural Assessments mobile website screenshot",
        caption: "Mobile enquiry flow",
        kind: "mobile",
        frameClassName: "h-[24rem] sm:h-[28rem] lg:h-[34rem]",
      },
    ],
    referenceSummary:
      "An engineering services site built to improve clarity, trust and production readiness through structured frontend implementation.",
    overview:
      "This project focused on rebuilding an engineering services site with a clearer content structure, stronger technical credibility and a frontend implementation that was ready for real production use. The work needed to support both marketing clarity and practical delivery concerns such as metadata, contact handling and long-term maintainability.",
    challenge:
      "The core challenge was presenting specialised services in a way that felt authoritative without becoming dense or difficult to scan, while also making the enquiry flow trustworthy and resilient enough for production.",
    responsibilities: [
      "Defined the section and content architecture for the public-facing site",
      "Built the responsive frontend with reusable UI patterns",
      "Implemented structured metadata and clearer service hierarchy",
      "Hardened the contact flow for validation, bot protection and delivery reliability",
    ],
    approach: [
      {
        title: "Content architecture",
        body:
          "Services and supporting information were reorganised into more readable sections so visitors could understand the offer quickly without working through dense technical copy.",
      },
      {
        title: "Production hardening",
        body:
          "The build was shaped around practical delivery concerns including secure contact handling, validation, and a structure that could be maintained cleanly after launch.",
      },
      {
        title: "SEO and discoverability",
        body:
          "Metadata and schema support were treated as part of the frontend work so the site could communicate clearly to users and search engines alike.",
      },
    ],
    uxDecisions: [
      {
        title: "Readable technical messaging",
        body:
          "Headings, section order and supporting copy were shaped to make specialised services easier to understand without flattening the technical positioning.",
      },
      {
        title: "Structured navigation",
        body:
          "The page flow was designed to help visitors move from service understanding to next-step enquiry without losing context.",
      },
      {
        title: "Responsive clarity",
        body:
          "Layouts stayed composed across breakpoints so technical content remained readable and visually calm on both desktop and mobile.",
      },
      {
        title: "Trust through restraint",
        body:
          "The visual system stayed clean and restrained so the interface felt credible, modern and business-appropriate rather than decorative.",
      },
    ],
    technicalImplementation:
      "The site was implemented with Next.js App Router, React, TypeScript and Tailwind CSS using a section-based architecture. The build also included structured data, metadata support, server-side contact handling, reCAPTCHA verification and rate-limiting considerations so the frontend was ready for real deployment rather than just visual presentation.",
    challengesSolutions: [
      {
        challenge: "Making technical services easier to scan",
        solution:
          "Used stronger information hierarchy, clearer section grouping and more deliberate CTA placement so users could orient themselves quickly.",
      },
      {
        challenge: "Balancing UX quality with production reliability",
        solution:
          "Handled contact validation, reCAPTCHA and rate limiting as part of the frontend delivery so the experience stayed polished while still being operationally robust.",
      },
    ],
    outcomePoints: [
      "Clearer service presentation",
      "Stronger SEO and structured content foundation",
      "More robust enquiry handling",
      "Maintainable section-based frontend structure",
    ],
    nextSteps:
      "A follow-up iteration would expand automated coverage, formalise more component documentation and deepen analytics around service-page behaviour and enquiry drop-off.",
    metrics: [
      {
        value: "Structured services",
        label:
          "Turned technical offerings into clearer, scan-friendly sections.",
      },
      {
        value: "Production-ready contact",
        label:
          "Added validation, rate limiting and bot protection to the enquiry flow.",
      },
      {
        value: "SEO groundwork",
        label:
          "Embedded schema and metadata thinking into the frontend architecture.",
      },
    ],
  },
  {
    slug: "any-motion",
    title: "anyMotion",
    client: "Internal tooling",
    summaryFocus: "Campaign production pipeline",
    period: "Recent",
    tagline:
      "Turning repetitive banner setup into a repeatable production pipeline with JSON-driven configuration, shared runtime logic and faster iteration.",
    showcaseIntro:
      "The main priority was reducing production overhead while keeping banner builds flexible enough for campaign-specific motion, sizes and asset variations.",
    summary:
      "A JSON-driven banner production pipeline built to reduce repetitive setup, standardise campaign output and speed up delivery across high-volume digital work.",
    role: "Workflow engineering, build tooling, production efficiency",
    stack: ["Node.js", "Vite", "TypeScript", "Build tooling"],
    focus: ["Workflow automation", "Campaign delivery", "Reusable runtime logic"],
    showcaseFocus: ["JSON campaign config", "Generated outputs", "Operational speed"],
    outcome:
      "Faster campaign turnaround with more consistent outputs and far less manual banner setup.",
    featured: true,
    githubUrl: "https://github.com/carlosesierra/any-motion",
    heroImage: "/projects/any-motion/anymotion-hero.webp",
    gallery: [
      {
        src: "/projects/any-motion/anymotion-desktop.webp",
        alt: "anyMotion campaign output overview screenshot",
        caption: "Campaign output overview",
        kind: "detail",
        frameClassName: "h-[24rem] sm:h-[28rem] lg:h-[34rem]",
      },
      {
        src: "/projects/any-motion/anymotion-mob.webp",
        alt: "anyMotion tall-format banner output screenshot",
        caption: "Tall-format banner detail",
        kind: "mobile",
        frameClassName: "h-[24rem] sm:h-[28rem] lg:h-[34rem]",
      },
    ],
    referenceSummary:
      "An internal production tool focused on campaign automation, reusable build logic and faster banner delivery.",
    overview:
      "This project focused on replacing repetitive manual banner setup with a structured production system. Campaigns could be defined through JSON configuration and shared runtime logic, then compiled into self-contained outputs that were easier to validate, preview and ship across multiple sizes and streams.",
    challenge:
      "The challenge was creating a pipeline that was flexible enough for campaign-specific variants while still keeping builds deterministic, outputs consistent and day-to-day production work fast under delivery pressure.",
    responsibilities: [
      "Defined the JSON-first campaign configuration model",
      "Built the script pipeline for validation, asset handling and HTML generation",
      "Created shared runtime and styling layers for reusable campaign behaviour",
      "Improved the local workflow for previewing, rebuilding and shipping banner sets",
    ],
    approach: [
      {
        title: "Configuration first",
        body:
          "Campaign data, sizes, loops and runtime variants were driven from configuration so new work could be set up from a predictable structure rather than repeated manual steps.",
      },
      {
        title: "Deterministic pipeline",
        body:
          "The build flow was broken into validation, cleaning, copying, optimisation, styling, HTML compilation and cache-busting so production output stayed consistent and easier to debug.",
      },
      {
        title: "Shared runtime logic",
        body:
          "Shared runtime and style layers kept common banner behaviour centralised while still allowing campaign-specific variants where needed.",
      },
    ],
    uxDecisions: [
      {
        title: "Fast operator flow",
        body:
          "The development flow prioritised quick previewing and regeneration so production work could move without long setup delays.",
      },
      {
        title: "Clear build stages",
        body:
          "Separating the pipeline into explicit steps made failures easier to reason about and reduced the ambiguity that often slows down delivery tooling.",
      },
      {
        title: "Flexible without drift",
        body:
          "Variant handling was structured so campaign-specific differences could be introduced without creating a different workflow for every new build.",
      },
      {
        title: "Practical previewing",
        body:
          "Campaign viewer pages and local serving made it easier to review outputs quickly before handoff or release.",
      },
    ],
    technicalImplementation:
      "The system was implemented with Node.js, TypeScript and Vite-backed local serving, using script-based build stages for validation, asset copying, image optimisation, SCSS compilation, HTML generation and cache-busting. Campaign output was generated as standalone HTML artifacts so delivery remained practical for production environments.",
    challengesSolutions: [
      {
        challenge: "Supporting many banner variants without duplicating setup",
        solution:
          "Moved campaign differences into JSON config and runtime variant blocks so the pipeline could stay consistent while outputs remained flexible.",
      },
      {
        challenge: "Keeping outputs production-ready while speeding up iteration",
        solution:
          "Combined deterministic build steps, preview tooling and self-contained HTML output so teams could move faster without sacrificing delivery quality.",
      },
    ],
    outcomePoints: [
      "Less repetitive manual banner setup",
      "Faster campaign iteration and previewing",
      "More consistent generated outputs",
      "A clearer, reusable production workflow",
    ],
    nextSteps:
      "The next step would be deeper schema validation, stronger automated output checks and more tooling around campaign QA so the pipeline could support even larger production volumes with less manual review.",
    metrics: [
      {
        value: "JSON-driven setup",
        label: "Reduced manual campaign configuration overhead.",
      },
      {
        value: "One pipeline",
        label: "Centralised repeated build steps into a reusable workflow.",
      },
      {
        value: "Self-contained output",
        label: "Generated artifacts that were easier to review and deliver.",
      },
    ],
  },
  {
    slug: "vaa",
    title: "VAA",
    client: "Content-led business website",
    summaryFocus: "Content-driven website and CMS",
    period: "Recent",
    tagline:
      "Combining a modern frontend with a structured CMS setup so content updates, event publishing and ongoing site maintenance stay organised.",
    showcaseIntro:
      "The frontend needed to stay polished for visitors while giving editors a practical system for updating sections, events and long-form content.",
    summary:
      "A content-led website and CMS setup built to support events, editorial updates and a more maintainable publishing workflow.",
    role: "Frontend engineering, CMS integration, content architecture",
    stack: ["Next.js", "Sanity", "TypeScript", "Tailwind CSS"],
    focus: ["Structured content", "Dynamic routes", "CMS workflow"],
    showcaseFocus: ["Sanity Studio", "Event pages", "Reusable sections"],
    outcome:
      "A cleaner content workflow with reusable page patterns and a stronger frontend base for ongoing updates.",
    featured: true,
    liveUrl: "https://www.venezuelanassociationaustralia.com.au/",
    heroImage: "/projects/vaa/vaa-hero.webp",
    gallery: [
      {
        src: "/projects/vaa/vaa-desktop.webp",
        alt: "VAA desktop content website screenshot",
        caption: "Content layout and page composition",
        kind: "detail",
        frameClassName: "h-[24rem] sm:h-[28rem] lg:h-[34rem]",
      },
      {
        src: "/projects/vaa/vaa-mob.webp",
        alt: "VAA mobile event and editorial screenshot",
        caption: "Mobile event and editorial preview",
        kind: "mobile",
        frameClassName: "h-[24rem] sm:h-[28rem] lg:h-[34rem]",
      },
    ],
    referenceSummary:
      "A content-driven website and CMS setup focused on reusable sections, dynamic event pages and easier day-to-day publishing.",
    overview:
      "This project combined a Next.js site with a Sanity studio so the public-facing experience and editorial workflow could evolve together. The goal was to support a content-led business site with reusable sections, dynamic event pages and a structure that would make ongoing updates more practical.",
    challenge:
      "The central challenge was giving editors enough flexibility to manage varied content and event updates without allowing the frontend to drift into a collection of inconsistent layouts and one-off templates.",
    responsibilities: [
      "Integrated the frontend with a structured Sanity content model",
      "Built reusable sections and navigation for the main site experience",
      "Implemented dynamic event pages and Portable Text rendering",
      "Worked across both the public site and the editorial CMS setup",
    ],
    approach: [
      {
        title: "Shared content model",
        body:
          "The content model was designed to support recurring site sections and event content from a single structured system rather than ad hoc page-specific fields.",
      },
      {
        title: "Reusable frontend patterns",
        body:
          "Page sections, navigation and content presentation were built from reusable pieces so the site could scale without accumulating disconnected templates.",
      },
      {
        title: "Publishing practicality",
        body:
          "The site and studio were treated as one delivery system, making it easier to publish updates, manage events and keep the frontend maintainable over time.",
      },
    ],
    uxDecisions: [
      {
        title: "Content clarity",
        body:
          "Layout rhythm and section sequencing were shaped to keep content readable while still giving the site enough visual character.",
      },
      {
        title: "Event discoverability",
        body:
          "Dynamic event pages and supporting navigation made it easier to surface individual pieces of content without breaking the overall site structure.",
      },
      {
        title: "Editorial guardrails",
        body:
          "The component set was kept focused enough that content editors could work flexibly without easily undermining hierarchy or layout consistency.",
      },
      {
        title: "Motion with restraint",
        body:
          "Interactive and reveal-based details were used selectively so the site felt polished without competing with the content itself.",
      },
    ],
    technicalImplementation:
      "The project used Next.js App Router, React, TypeScript and next-sanity within a monorepo that separated the public site from the Sanity studio. Dynamic routes, Portable Text rendering, schema definitions and reusable sections helped keep both publishing and frontend delivery structured.",
    challengesSolutions: [
      {
        challenge: "Supporting content flexibility without frontend drift",
        solution:
          "Defined reusable sections and schema-driven content types so new content could be added within a clearer set of frontend constraints.",
      },
      {
        challenge: "Keeping the site and CMS maintainable as one system",
        solution:
          "Used a monorepo structure with a dedicated studio and a shared content model so changes could stay coordinated across both surfaces.",
      },
    ],
    outcomePoints: [
      "Cleaner content publishing workflow",
      "Reusable frontend sections and page patterns",
      "Dynamic event pages connected to structured content",
      "Stronger base for ongoing site updates",
    ],
    nextSteps:
      "A next phase would add richer preview tooling, stronger metadata handling across more content types and broader component coverage as the publishing model grows.",
    metrics: [
      {
        value: "CMS-backed content",
        label: "Connected the public site to a structured editing workflow.",
      },
      {
        value: "Dynamic events",
        label: "Supported reusable detail pages from structured content.",
      },
      {
        value: "Shared content model",
        label: "Improved consistency across frontend and editorial setup.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
