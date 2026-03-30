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
  invert?: boolean;
};

type TagsProps = {
  items: readonly string[];
  className?: string;
};

type MetaItemProps = {
  label: string;
  value: string;
};

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("eyebrow", invert && "text-white/55")}>{eyebrow}</p>
      ) : null}

      <h2
        className={cn(
          "mt-4",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>

      {copy ? (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8",
            invert ? "text-white/72" : "section-copy",
          )}
        >
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

function MetaItem({ label, value }: MetaItemProps) {
  return (
    <div className="surface-card px-5 py-5">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 text-sm leading-6 text-foreground sm:text-base">{value}</p>
    </div>
  );
}

function InsightCard({
  title,
  body,
  index,
  invert = false,
}: {
  title: string;
  body: string;
  index?: number;
  invert?: boolean;
}) {
  return (
    <article
      className={cn(
        "p-6",
        invert
          ? "border border-white/10 bg-white/6"
          : "surface-card",
      )}
    >
      {typeof index === "number" ? (
        <p
          className={cn(
            "text-4xl font-semibold leading-none tracking-tight",
            invert ? "text-white/24" : "text-foreground/20",
          )}
        >
          {String(index + 1).padStart(2, "0")}
        </p>
      ) : null}
      <h3
        className={cn(
          "mt-4 text-xl font-semibold tracking-tight",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-4 text-sm leading-7 sm:text-base",
          invert ? "text-white/72" : "text-muted",
        )}
      >
        {body}
      </p>
    </article>
  );
}

function NarrativePanel({
  eyebrow,
  title,
  body,
  highlight,
  bodyClassName,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  highlight?: string;
  bodyClassName?: string;
  invert?: boolean;
}) {
  return (
    <article
      className={cn(
        "p-7 sm:p-8",
        invert ? "surface-card-dark" : "surface-card",
      )}
    >
      <p className={cn("eyebrow", invert && "text-white/55")}>{eyebrow}</p>
      <h3
        className={cn(
          "mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl",
          invert ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "mt-5 text-base leading-8 sm:text-lg",
          bodyClassName ?? "max-w-[46ch]",
          invert ? "text-white/74" : "text-muted",
        )}
      >
        {body}
      </p>
      {highlight ? (
        <div
          className={cn(
            "mt-7 px-5 py-5",
            invert
              ? "border border-white/10 bg-white/7"
              : "bg-accent-soft/72",
          )}
        >
          <p className={cn("eyebrow", invert && "text-white/45")}>Key point</p>
          <p
            className={cn(
              "mt-3 text-sm leading-7 sm:text-base",
              invert ? "text-white/82" : "text-foreground",
            )}
          >
            {highlight}
          </p>
        </div>
      ) : null}
    </article>
  );
}

export function ProjectHero({ project }: { project: Project }) {
  const projectUrl = project.liveUrl ?? project.githubUrl;

  return (
    <section className="pb-8 pt-8 sm:pb-12 sm:pt-12">
      <Container>
        <div className="surface-card p-4 sm:p-5 lg:p-6">
          <div className="grid gap-5 xl:grid-cols-[minmax(0,0.54fr)_minmax(0,0.46fr)] xl:items-stretch">
            <div className="bg-white/62 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="meta-chip">Case study</span>
                <span className="meta-chip">{project.client}</span>
                <span className="meta-chip">{project.period}</span>
              </div>

              <h1 className="mt-6 text-[3rem] leading-[0.94] tracking-tight text-foreground sm:text-5xl lg:text-[4.2rem]">
                {project.title}
              </h1>

              <p className="mt-5 text-lg leading-7 tracking-tight text-foreground/86 sm:text-[1.7rem] sm:leading-9">
                {project.tagline}
              </p>

              <p className="section-copy mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
                {project.summary}
              </p>

              <Tags items={project.focus} className="mt-6" />

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/#projects" variant="secondary">
                  Back to Projects
                </Button>
                {projectUrl ? <Button href={projectUrl}>Visit Project</Button> : null}
              </div>
            </div>

            <div className="space-y-4">
              {project.heroImage ? (
                <div className="surface-card overflow-hidden p-2.5">
                  <ParallaxMedia
                    className="h-[20rem] sm:h-[26rem] lg:h-[31rem]"
                    strength={34}
                  >
                    <Image
                      src={project.heroImage}
                      alt={`${project.title} hero preview`}
                      fill
                      priority
                      loading="eager"
                      fetchPriority="high"
                      sizes="(max-width: 1279px) 100vw, 42vw"
                      className="object-cover object-top"
                    />
                  </ParallaxMedia>
                </div>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {project.metrics.map((metric) => (
                  <article
                    key={metric.label}
                    className="border border-border bg-white/68 px-5 py-5"
                  >
                    <p className="text-[1.45rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[1.6rem]">
                      {metric.value}
                    </p>
                    <p className="mt-2.5 text-sm leading-6 text-muted">
                      {metric.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectSummaryBar({ project }: { project: Project }) {
  return (
    <section className="pb-8 sm:pb-10">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetaItem label="Focus" value={project.summaryFocus ?? project.client} />
          <MetaItem label="Role" value={project.role} />
          <MetaItem label="Period" value={project.period} />
          <MetaItem
            label="Stack"
            value={project.stack.slice(0, 4).join(", ")}
          />
        </div>
      </Container>
    </section>
  );
}

export function ProjectVisualShowcase({ project }: { project: Project }) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,0.68fr)_minmax(17rem,0.32fr)] xl:items-start">
          <div>
            <SectionHeading
              eyebrow="Showcase"
              title="Visuals and the delivery priorities."
              copy={
                project.showcaseIntro ??
                "The visuals below are there to support the story of the work, not to decorate it."
              }
            />

            <ProjectShowcaseVisuals project={project} className="mt-8 sm:mt-10" />
          </div>

          <aside className="space-y-5 xl:sticky xl:top-32">
            <div className="surface-card-dark px-6 py-7">
              <p className="eyebrow text-white/55">Focus areas</p>
              <Tags
                items={project.showcaseFocus ?? project.focus}
                className="mt-5 [&>span]:border-white/10 [&>span]:bg-white/8 [&>span]:text-white/70"
              />

              <div className="mt-7 space-y-3">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border border-white/10 bg-white/7 p-4"
                  >
                    <p className="text-lg font-semibold tracking-tight text-white">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/68">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card p-6">
              <p className="eyebrow">Outcome direction</p>
              <p className="mt-4 text-base leading-8 text-foreground">
                {project.outcome}
              </p>
              <div className="soft-divider mt-6" />
              <p className="mt-6 text-sm leading-7 text-muted">{project.tagline}</p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function ProjectOverviewSection({ project }: { project: Project }) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <NarrativePanel
          eyebrow="Overview"
          title="Project context"
          body={project.overview}
          highlight={project.referenceSummary ?? project.summary}
          bodyClassName="max-w-[62ch] lg:max-w-[66%]"
        />
      </Container>
    </section>
  );
}

export function ProjectChallengeSection({ project }: { project: Project }) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <NarrativePanel
          eyebrow="Challenge"
          title="The main problem to solve"
          body={project.challenge}
          highlight={project.showcaseIntro}
          bodyClassName="max-w-[62ch] lg:max-w-[66%]"
          invert
        />
      </Container>
    </section>
  );
}

export function ProjectRoleSection({ project }: { project: Project }) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] xl:items-start">
          <SectionHeading
            eyebrow="Role"
            title="My contribution to the delivery."
            copy="What I directly shaped in the case study."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {project.responsibilities.map((item, index) => (
              <article
                key={item}
                className="surface-card p-6 sm:p-7"
              >
                <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                  <p className="text-4xl font-semibold leading-none tracking-tight text-foreground/25 sm:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="text-sm leading-7 text-muted sm:text-base">
                      {item}
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

export function ProjectApproachSection({ project }: { project: Project }) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="surface-card-dark px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)]">
            <SectionHeading
              eyebrow="Approach"
              title="How the work was structured"
              copy="Delivery principles that shaped the implementation and helped keep the work practical in production."
              invert
            />

            <div className="grid gap-4 md:grid-cols-3">
              {project.approach.map((item, index) => (
                <InsightCard
                  key={item.title}
                  title={item.title}
                  body={item.body}
                  index={index}
                  invert
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProjectUxDecisionsSection({ project }: { project: Project }) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] xl:items-start">
          <SectionHeading
            eyebrow="UX decisions"
            title="Clarity, usability and trust."
            copy="Design-aware implementation choices rather than generic UI praise."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {project.uxDecisions.map((item) => (
              <article
                key={item.title}
                className="surface-card p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
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
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="grid gap-5 xl:grid-cols-[minmax(0,0.56fr)_minmax(0,0.44fr)]">
          <NarrativePanel
            eyebrow="Technical implementation"
            title="What the build relied on"
            body={project.technicalImplementation}
          />

          <article className="surface-card p-7 sm:p-8">
            <p className="eyebrow">Stack in context</p>
            <p className="mt-4 text-base leading-8 text-foreground">
              The technical layer was kept aligned with the delivery goal: make the
              interface maintainable, production-ready and easy to evolve.
            </p>
            <Tags items={project.stack} className="mt-6" />
          </article>
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
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:items-start">
          <SectionHeading
            eyebrow="Challenges and solutions"
            title="Tradeoffs handled during delivery."
            copy="Real frontend work usually involves constraints. These challenge-solution pairs keep the case study grounded in that reality."
          />

          <div className="space-y-4">
            {project.challengesSolutions.map((item) => (
              <article
                key={item.challenge}
                className="surface-card p-6"
              >
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <p className="eyebrow">Challenge</p>
                    <p className="mt-3 text-sm leading-7 text-foreground sm:text-base">
                      {item.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Solution</p>
                    <p className="mt-3 text-sm leading-7 text-muted sm:text-base">
                      {item.solution}
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

export function ProjectOutcomeSection({ project }: { project: Project }) {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="grid gap-5 xl:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
          <NarrativePanel
            eyebrow="Outcome"
            title="What improved by the end of the work"
            body={project.outcome}
            highlight={project.outcomePoints[0]}
            invert
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {project.outcomePoints.map((item) => (
              <article
                key={item}
                className="surface-card px-5 py-5"
              >
                <p className="text-sm leading-7 text-foreground sm:text-base">
                  {item}
                </p>
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
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="surface-card px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.56fr)_minmax(16rem,0.44fr)] xl:items-end">
            <SectionHeading
              eyebrow="Next steps"
              title="What I would refine if the project continued."
              copy={project.nextSteps}
            />

            <div className="space-y-4">
              <div className="bg-accent-soft/68 p-6">
                <p className="eyebrow">Forward-looking note</p>
                <p className="mt-3 text-sm leading-7 text-foreground sm:text-base">
                  Future iteration would build on the same principle used throughout
                  the project: keep the interface credible, maintainable and easier
                  to extend than the version before it.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href="/cv" variant="secondary">
                  View CV
                </Button>
                <Button href="/#projects">More Projects</Button>
              </div>
            </div>
          </div>
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
            className="surface-card px-6 py-6 transition-colors hover:bg-white/85"
          >
            <p className="eyebrow">Previous project</p>
            <p className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground">
              {previousProject.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">
              {previousProject.client}
            </p>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="surface-card px-6 py-6 transition-colors hover:bg-white/85"
          >
            <p className="eyebrow">Next project</p>
            <p className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground">
              {nextProject.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">{nextProject.client}</p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
