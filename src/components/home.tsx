import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Tag } from "@/components/tag";
import { Container } from "@/components/container";
import { ParallaxMedia } from "@/components/parallax-media";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  className?: string;
};

type TagsProps = {
  items: readonly string[];
  className?: string;
};

type HeroPreviewCardProps = {
  project: (typeof featuredProjects)[number];
  className?: string;
  priority?: boolean;
};

const stackNotes: Record<string, string> = {
  Frontend:
    "Production-ready UI implementation with React, Next.js, TypeScript and responsive layout discipline.",
  "UI Systems":
    "Reusable patterns, component thinking and structured interface decisions that scale past a single page build.",
  Delivery:
    "Release-minded workflow across version control, CMS handoff, QA and practical production support.",
};

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}

      <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-[3.7rem]">
        {title}
      </h2>

      {copy ? (
        <p className="section-copy mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Tags({ items, className }: TagsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
}

function HeroPreviewCard({
  project,
  className,
  priority = false,
}: HeroPreviewCardProps) {
  return (
    <article
      className={cn(
        "surface-card h-full rounded-[1.75rem] p-2.5 lg:aspect-square",
        className,
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="corner-cut relative h-full min-h-[17rem] overflow-hidden rounded-[1.35rem] sm:min-h-[18rem] lg:min-h-0">
          <ParallaxMedia className="h-full" strength={22}>
            {project.heroImage ? (
              <Image
                src={project.heroImage}
                alt={`${project.title} project preview`}
                width={1600}
                height={1000}
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : undefined}
                sizes="(max-width: 1024px) 100vw, 24vw"
                className="h-full w-full object-cover object-top"
              />
            ) : (
              <div className="h-full w-full bg-[linear-gradient(180deg,#e7e2d8_0%,#f6f2eb_100%)]" />
            )}
          </ParallaxMedia>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#181513]/88 via-[#181513]/48 to-transparent p-4 text-white sm:p-5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-white/70">
              {project.client}
            </p>
            <p className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
              {project.title}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function HeroSection() {
  const [primaryProject, secondaryProject, tertiaryProject] = featuredProjects;

  return (
    <section className="pb-[4.5rem] pt-8 sm:pb-24 sm:pt-12 lg:pb-28">
      <Container>
        <div>
          <div className="max-w-4xl">
            <p className="eyebrow mt-8">{siteConfig.location}</p>

            <h1 className="mt-4 max-w-4xl font-serif text-[3.2rem] leading-[0.92] tracking-tight text-foreground sm:text-[4.8rem] lg:text-[6.2rem]">
              {siteConfig.name}
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 tracking-tight text-foreground/88 sm:mt-6 sm:text-[1.75rem] sm:leading-9">
              Senior Front-End Engineer
            </p>

            <p className="section-copy mt-6 max-w-3xl text-base leading-8 sm:text-lg">
              {siteConfig.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">View Projects</Button>
              <Button href="/cv" variant="secondary">
                View CV
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-4">
            <div className="surface-card flex h-full flex-col rounded-[2rem] p-5 sm:p-6 lg:aspect-square">
              <p className="eyebrow">At a glance</p>
              <div className="mt-5 flex flex-1 flex-col gap-5">
                <div>
                  <p className="font-serif text-3xl leading-none tracking-tight text-foreground">
                    3
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    Case studies with context, implementation and outcome.
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="soft-divider" />
                  <p className="pt-4 text-sm leading-6 text-muted">
                    React, Next.js, TypeScript, structured UI systems and
                    recruiter-readable presentation.
                  </p>
                </div>
              </div>
            </div>

            <HeroPreviewCard project={primaryProject} priority />
            <HeroPreviewCard project={secondaryProject} />
            <HeroPreviewCard project={tertiaryProject} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="section-shell py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured work"
          title="Frontend structure, delivery quality and practical outcomes."
          copy="The case studies below focus on the decisions, implementation details and delivery outcomes behind the work, not just the finished screens."
        />

        <div className="mt-10 space-y-5 sm:mt-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="feature"
              eagerImage={index === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ValuePropsSection() {
  return (
    <section className="section-shell py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] xl:items-start">
          <SectionHeading
            eyebrow="What I bring"
            title="Frontend work focused on clarity, maintainability and production-ready delivery."
            copy="My background combines UI implementation, structured frontend delivery and the kind of production discipline that comes from working across both websites and campaign environments."
          />

          <div className="space-y-4">
            {siteConfig.valueProps.map((item, index) => (
              <article
                key={item.title}
                className="surface-card rounded-[2rem] p-6 sm:p-7"
              >
                <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                  <p className="font-serif text-4xl leading-none tracking-tight text-foreground/25 sm:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                      {item.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ExperienceSnapshotSection() {
  return (
    <section className="section-shell py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.62fr)_minmax(18rem,0.38fr)] xl:items-start">
          <div>
            <SectionHeading
              eyebrow="Experience snapshot"
              title="The experience behind the work."
              copy="My background includes frontend engineering, campaign production, reusable UI delivery and practical implementation across different digital formats."
            />

            <div className="mt-10 space-y-4">
              {siteConfig.experienceSnapshot.map((item) => (
                <article
                  key={item.title}
                  className="surface-card rounded-[1.9rem] px-5 py-5 sm:px-6"
                >
                  <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                    <span className="editorial-dot mt-2 hidden sm:block" />
                    <div>
                      <p className="eyebrow">{item.eyebrow}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="surface-card-dark rounded-[2.4rem] px-6 py-7 sm:px-7 sm:py-8">
            <p className="eyebrow text-white/55">Full CV</p>
            <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-white sm:text-[2.5rem]">
              An overview of my frontend experience, core skills and selected project references.
            </h3>

            <div className="mt-8 space-y-3">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/6 p-4">
                <p className="eyebrow text-white/45">Includes</p>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Selected experience, project references and tooling across frontend engineering, digital production and delivery-focused work.
                </p>
              </div>
              <Button href="/cv" className="w-full">
                Open CV
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function StrengthsSection() {
  return (
    <section className="section-shell py-16 sm:py-24">
      <Container>
        <div className="surface-card-dark rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:items-start">
            <div className="max-w-xl">
              <p className="eyebrow text-white/55">Working style</p>
              <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-tight text-white sm:text-5xl">
                Sharing strengths in the frontend delivery.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                The strongest parts of my work sit between interface quality, structured implementation and practical delivery under real project constraints.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteConfig.strengths.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.9rem] border border-white/10 bg-white/6 p-6"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProofMetricsSection() {
  return (
    <section className="section-shell py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] xl:items-start">
          <SectionHeading
            eyebrow="Proof points"
            title="My forte in frontend work."
            copy="These are the areas I've built the most confidence in through production-facing frontend delivery."
          />

          <div className="space-y-4">
            {siteConfig.proofPoints.map((item) => (
              <article
                key={item.value}
                className="surface-card rounded-[2rem] px-6 py-6 sm:px-7"
              >
                <p className="font-serif text-[1.95rem] leading-tight tracking-tight text-foreground sm:text-[2.45rem]">
                  {item.value}
                </p>
                <p className="mt-4 max-w-[46ch] text-sm leading-7 text-muted sm:text-base">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="section-shell py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Tooling"
          title="Tools and environments I use."
          copy="These are the environments I work in most often across implementation, UI systems and production delivery."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteConfig.stackGroups.map((group) => (
            <article
              key={group.title}
              className="surface-card rounded-[2.15rem] p-6 sm:p-7"
            >
              <p className="eyebrow">{group.title}</p>
              <p className="mt-4 text-lg leading-8 text-foreground">
                {stackNotes[group.title]}
              </p>
              <Tags items={group.items} className="mt-6" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutPreviewSection() {
  return (
    <section id="about" className="section-shell py-16 sm:py-24">
      <Container>
        <div className="grid gap-6 xl:grid-cols-[minmax(16rem,0.36fr)_minmax(0,0.64fr)] xl:items-start">
          <aside className="surface-card-dark rounded-[2.5rem] px-6 py-7 sm:px-7 sm:py-8">
            <p className="eyebrow text-white/55">About</p>
            <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-tight text-white sm:text-5xl">
              Carlos Sierra
            </h2>

            <dl className="mt-8 space-y-5">
              <div>
                <dt className="eyebrow text-white/45">Location</dt>
                <dd className="mt-2 text-base text-white/82">{siteConfig.location}</dd>
              </div>
              <div>
                <dt className="eyebrow text-white/45">Role</dt>
                <dd className="mt-2 text-base text-white/82">{siteConfig.role}</dd>
              </div>
              <div>
                <dt className="eyebrow text-white/45">Specialties</dt>
                <dd className="mt-3">
                  <Tags
                    items={["React", "Next.js", "TypeScript", "UI Systems"]}
                    className="[&>span]:border-white/10 [&>span]:bg-white/8 [&>span]:text-white/70"
                  />
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-white/45">Focus now</dt>
                <dd className="mt-3 text-sm leading-7 text-white/72 sm:text-base">
                  Frontend roles where thoughtful interface implementation and
                  structured delivery matter equally.
                </dd>
              </div>
            </dl>
          </aside>

          <div className="surface-card rounded-[2.5rem] p-7 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="About"
              title="A short introduction to how I approach frontend engineering."
              className="max-w-none"
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-muted sm:text-lg">
              {siteConfig.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,0.62fr)_minmax(12rem,0.38fr)] lg:items-end">
              <div className="corner-cut rounded-[1.8rem] bg-accent-soft/62 p-5">
                <p className="eyebrow">Current focus</p>
                <p className="mt-3 text-sm leading-7 text-foreground sm:text-base">
                  Roles that value clean UI, maintainable frontend systems and a
                  polished but pragmatic approach to delivery.
                </p>
              </div>

              <Button href="/cv" variant="secondary" className="justify-center">
                View Full CV
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ContactCtaSection() {
  return (
    <section id="contact" className="section-shell py-16 sm:py-24">
      <Container>
        <div className="surface-card-strong rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.62fr)_minmax(16rem,0.38fr)] xl:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 font-serif text-4xl leading-[0.98] tracking-tight text-foreground sm:text-5xl lg:text-[3.8rem]">
                {siteConfig.contactCta.title}
              </h2>
              <p className="section-copy mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
                {siteConfig.contactCta.body}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button href={siteConfig.contactCta.primaryHref}>
                  {siteConfig.contactCta.primaryLabel}
                </Button>
                <Button
                  href={siteConfig.contactCta.secondaryHref}
                  variant="secondary"
                >
                  {siteConfig.contactCta.secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
