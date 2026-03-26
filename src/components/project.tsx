import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/layout/Container";
import { projects, type Project } from "@/data/projects";
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

type MetaItemProps = {
  label: string;
  value: React.ReactNode;
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

function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div className="surface-card rounded-[1.5rem] px-5 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
        {label}
      </p>
      <div className="mt-3 text-sm leading-6 text-foreground">{value}</div>
    </div>
  );
}

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="pb-10 pt-16 sm:pb-12 sm:pt-20">
      <Container>
        <div className="surface-card-strong rounded-[2.5rem] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Case Study
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {project.summary}
          </p>
          <Tags items={project.focus} className="mt-6" />

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#projects" variant="secondary">
              Back to Projects
            </Button>
            {project.liveUrl ? <Button href={project.liveUrl}>Visit Live Site</Button> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectSummaryBar({ project }: { project: Project }) {
  return (
    <section className="pb-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetaItem label="Focus" value={project.summaryFocus ?? project.client} />
          <MetaItem label="Role" value={project.role} />
          <MetaItem label="Period" value={project.period} />
          <MetaItem label="Context" value={project.stack.slice(0, 4).join(", ")} />
        </div>
      </Container>
    </section>
  );
}

export function ProjectVisualShowcase({ project }: { project: Project }) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Showcase"
          title="A summary of the project priorities."
          copy={
            project.showcaseIntro ??
            "The implementation priorities were shaped around clarity, maintainability and a frontend structure that could hold up in production."
          }
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="surface-card rounded-[2rem] p-6 sm:p-8">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-accent/35" />
              <span className="h-3 w-3 rounded-full bg-muted/35" />
              <span className="h-3 w-3 rounded-full bg-border" />
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {project.metrics.map((metric) => (
                <article key={metric.label} className="rounded-[1.5rem] bg-white/85 p-5">
                  <p className="font-serif text-2xl leading-tight tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">{metric.label}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-accent-soft/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Outcome direction
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground">{project.outcome}</p>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Focus Areas
            </p>
            <Tags items={project.showcaseFocus ?? project.focus} className="mt-5" />

            <div className="mt-8 rounded-[1.75rem] border border-border bg-white/75 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Summary
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{project.tagline}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectOverviewSection({ project }: { project: Project }) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading eyebrow="Overview" title="Project context" />
        <div className="mt-8 surface-card rounded-[2rem] p-7 sm:p-8">
          <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {project.overview}
          </p>
        </div>
      </Container>
    </section>
  );
}

export function ProjectChallengeSection({ project }: { project: Project }) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading eyebrow="Challenge" title="The main problem to solve" />
        <div className="mt-8 surface-card rounded-[2rem] p-7 sm:p-8">
          <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {project.challenge}
          </p>
        </div>
      </Container>
    </section>
  );
}

export function ProjectRoleSection({ project }: { project: Project }) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Role"
          title="Scope of contribution"
          copy="These responsibilities are shown to make it clear what I directly shaped in the case study and what sat within the frontend delivery scope."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {project.responsibilities.map((item) => (
            <article key={item} className="surface-card rounded-[1.75rem] p-5">
              <p className="text-sm leading-7 text-foreground">{item}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProjectApproachSection({ project }: { project: Project }) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading eyebrow="Approach" title="How the work was structured" />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {project.approach.map((item) => (
            <article key={item.title} className="surface-card rounded-[2rem] p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
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

export function ProjectUxDecisionsSection({ project }: { project: Project }) {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <SectionHeading eyebrow="UX Decisions" title="Design and UX decisions" />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {project.uxDecisions.map((item) => (
            <article key={item.title} className="surface-card h-full rounded-[2rem] p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-foreground/75">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProjectTechImplementationSection({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Technical Implementation"
          title="What the build relied on"
        />

        <div className="mt-8 surface-card rounded-[2rem] p-7 sm:p-8">
          <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {project.technicalImplementation}
          </p>
          <Tags items={project.stack} className="mt-6" />
        </div>
      </Container>
    </section>
  );
}

export function ProjectChallengesSolutionsSection({
  project,
}: {
  project: Project;
}) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Challenges And Solutions"
          title="Tradeoffs handled during delivery"
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {project.challengesSolutions.map((item) => (
            <article key={item.challenge} className="surface-card rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Challenge
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground">
                {item.challenge}
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Solution
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{item.solution}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function ProjectOutcomeSection({ project }: { project: Project }) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading eyebrow="Outcome" title="What improved by the end of the work" />

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-card rounded-[2rem] p-7 sm:p-8">
            <p className="font-serif text-3xl leading-tight tracking-tight text-foreground">
              {project.outcome}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.outcomePoints.map((item) => (
              <article key={item} className="surface-card rounded-[1.75rem] p-5">
                <p className="text-sm leading-7 text-foreground">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectNextStepsSection({ project }: { project: Project }) {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Next Steps"
          title="What I would refine if the project continued"
        />

        <div className="mt-8 surface-card rounded-[2rem] p-7 sm:p-8">
          <p className="max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {project.nextSteps}
          </p>
        </div>
      </Container>
    </section>
  );
}

export function ProjectPager({ currentSlug }: { currentSlug: string }) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);

  if (currentIndex === -1) {
    return null;
  }

  const previousProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            href={`/projects/${previousProject.slug}`}
            className="surface-card rounded-[2rem] p-6 transition-colors hover:bg-white/85"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Previous
            </p>
            <p className="mt-3 text-xl font-semibold tracking-tight text-foreground">
              {previousProject.title}
            </p>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="surface-card rounded-[2rem] p-6 transition-colors hover:bg-white/85"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Next
            </p>
            <p className="mt-3 text-xl font-semibold tracking-tight text-foreground">
              {nextProject.title}
            </p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
