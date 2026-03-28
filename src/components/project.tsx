import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ParallaxMedia } from "@/components/parallax-media";
import { ProjectShowcaseVisuals } from "@/components/project-visuals";
import { Tag } from "@/components/tag";
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
  const projectUrl = project.liveUrl ?? project.githubUrl;

  return (
    <section className="pb-10 pt-16 sm:pb-12 sm:pt-20">
      <Container>
        <div className="surface-card-strong rounded-[2.5rem] p-8 sm:p-10">
          <div
            className={cn(
              project.heroImage &&
                "grid gap-8 lg:grid-cols-[minmax(0,0.67fr)_minmax(18rem,0.33fr)] lg:items-start",
            )}
          >
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                Case Study
              </p>
              <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              {project.heroImage ? (
                <div className="mt-6 lg:hidden">
                  <div className="surface-card overflow-hidden rounded-[1.9rem] p-2.5">
                    <ParallaxMedia
                      className="corner-cut aspect-square rounded-[1.5rem]"
                      strength={34}
                    >
                      <Image
                        src={project.heroImage}
                        alt={`${project.title} hero preview`}
                        fill
                        priority
                        sizes="(max-width: 639px) calc(100vw - 8.5rem), (max-width: 1023px) calc(100vw - 9.5rem)"
                        className="object-cover object-top"
                      />
                    </ParallaxMedia>
                  </div>
                </div>
              ) : null}

              <p className="mt-5 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                {project.summary}
              </p>
              <Tags items={project.focus} className="mt-6" />

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#projects" variant="secondary">
                  Back to Projects
                </Button>
                {projectUrl ? (
                  <Button href={projectUrl}>Visit Project</Button>
                ) : null}
              </div>
            </div>

            {project.heroImage ? (
              <div className="hidden lg:block lg:justify-self-end lg:w-full lg:max-w-[24rem]">
                <div className="surface-card overflow-hidden rounded-[1.9rem] p-2.5">
                  <ParallaxMedia
                    className="corner-cut aspect-[4/3] rounded-[1.5rem]"
                    strength={40}
                  >
                    <Image
                      src={project.heroImage}
                      alt={`${project.title} hero preview`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover object-top"
                    />
                  </ParallaxMedia>
                </div>
              </div>
            ) : null}
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

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.18fr_0.82fr] xl:items-start">
          <ProjectShowcaseVisuals project={project} />

          <div className="space-y-5">
            <div className="surface-card rounded-[2rem] p-6 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                {project.metrics.map((metric) => (
                  <article
                    key={metric.label}
                    className="corner-cut rounded-[1.5rem] border border-border bg-white/78 p-5"
                  >
                    <p className="text-lg font-semibold leading-tight tracking-tight text-foreground">
                      {metric.value}
                    </p>
                    <p className="mt-3 max-w-[34ch] text-sm leading-7 text-muted">
                      {metric.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Focus Areas
              </p>
              <Tags items={project.showcaseFocus ?? project.focus} className="mt-5" />

              <div className="corner-cut mt-8 rounded-[1.75rem] border border-border bg-white/75 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  Summary
                </p>
                <p className="mt-3 text-sm leading-7 text-muted">{project.tagline}</p>
              </div>

              <div className="corner-cut mt-5 rounded-[1.75rem] bg-accent-soft/75 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                  Outcome direction
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground">{project.outcome}</p>
              </div>
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
          copy="The points below reflect the parts of the work I directly shaped across frontend implementation, structure and delivery."
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
    <section className="pb-12 pt-8 sm:pb-14 sm:pt-10">
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
