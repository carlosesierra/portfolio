import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

type TagsProps = {
  items: readonly string[];
  className?: string;
};

type MetricCardProps = {
  value: string;
  label: string;
};

type StackGroupProps = {
  title: string;
  items: readonly string[];
};

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>

      {copy ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function Tags({ items, className }: TagsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
}

function MetricCard({ value, label }: MetricCardProps) {
  return (
    <article className="surface-card rounded-[2rem] p-6">
      <p className="font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
        {value}
      </p>
      <p className="mt-3 text-sm leading-7 text-muted">{label}</p>
    </article>
  );
}

function StackGroup({ title, items }: StackGroupProps) {
  return (
    <article className="surface-card rounded-[2rem] p-6">
      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>
      <Tags items={items} className="mt-5" />
    </article>
  );
}

export function HeroSection() {
  return (
    <section className="pb-18 pt-20 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
              {siteConfig.location}
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {siteConfig.name}
            </h1>
            <p className="mt-5 text-xl font-medium tracking-tight text-foreground/85 sm:text-2xl">
              {siteConfig.role}
            </p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
              {siteConfig.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects">View Projects</Button>
              <Button href="/cv" variant="secondary">
                View CV
              </Button>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
              What I’m strongest at
            </p>
            <p className="mt-4 text-lg leading-7 text-foreground">
              {siteConfig.supportingLine}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ValuePropsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="What I bring"
          title="Frontend work focused on clarity, maintainability and production-ready delivery."
          copy="My background combines UI implementation, structured frontend delivery and the kind of production discipline that comes from working across both websites and campaign environments."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.valueProps.map((item) => (
            <article key={item.title} className="surface-card rounded-[2rem] p-6">
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Featured work"
          title="Selected projects showing frontend structure, delivery quality and practical outcomes."
          copy="The case studies below focus on the decisions, implementation details and delivery outcomes behind the work, not just the finished screens."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function StrengthsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Working style"
            title="The strengths I bring into frontend delivery."
            copy="The strongest parts of my work sit between interface quality, structured implementation and practical delivery under real project constraints."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {siteConfig.strengths.map((item) => (
              <article key={item.title} className="surface-card rounded-[2rem] p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
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
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience snapshot"
          title="A quick view of the experience behind the work."
          copy="My background includes frontend engineering, campaign production, reusable UI delivery and practical implementation across different digital formats."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteConfig.experienceSnapshot.map((item) => (
            <article key={item.title} className="surface-card rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {item.eyebrow}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProofMetricsSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Proof points"
          title="What I’m strongest at in frontend work."
          copy="These are the areas I’ve built the most confidence in through production-facing frontend delivery."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.proofPoints.map((item) => (
            <MetricCard key={item.value} value={item.value} label={item.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Tooling"
          title="Tools and environments I use to build and ship frontend work."
          copy="These are the environments I work in most often across implementation, UI systems and production delivery."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.stackGroups.map((group) => (
            <StackGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutPreviewSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="About"
            title="A short introduction to how I approach frontend engineering."
          />

          <div className="surface-card rounded-[2rem] p-7 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-muted">
              {siteConfig.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <Button href="/cv" variant="secondary">
                View CV
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
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <div className="surface-card-strong rounded-[2.5rem] px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Next step
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            {siteConfig.contactCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {siteConfig.contactCta.body}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={siteConfig.contactCta.primaryHref}>
              {siteConfig.contactCta.primaryLabel}
            </Button>
            <Button href={siteConfig.contactCta.secondaryHref} variant="secondary">
              {siteConfig.contactCta.secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
