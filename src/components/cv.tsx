import Link from "next/link";
import { Button } from "@/components/button";
import { Tag } from "@/components/tag";
import { Container } from "@/components/container";
import { brandContent } from "@/content/brand";
import { cvContent, type CvExperienceItem } from "@/content/cv";
import { getProjectBySlug } from "@/data/projects";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

type TagsProps = {
  items: readonly string[];
  className?: string;
};

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  invert = false,
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

function splitRoleMeta(role: string) {
  const [title, company] = role.split(" · ");
  return {
    title: title?.trim() ?? role,
    company: company?.trim(),
  };
}

function ExperienceItem({ item }: { item: CvExperienceItem }) {
  const { title, company } = splitRoleMeta(item.role);

  return (
    <article className="surface-card p-6 sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(14rem,0.3fr)_minmax(0,0.7fr)] xl:items-start">
        <div>
          <p className="eyebrow">{item.eyebrow}</p>
          <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            {title}
          </h3>
          {company ? (
            <p className="mt-3 text-base text-foreground/82 sm:text-lg">
              {company}
            </p>
          ) : null}

          <div className="mt-6 bg-accent-soft/68 px-4 py-4">
            <p className="eyebrow">Period</p>
            <p className="mt-2 text-sm leading-6 text-foreground sm:text-base">
              {item.period}
            </p>
          </div>
        </div>

        <div>
          <p className="text-base leading-8 text-muted sm:text-lg">{item.summary}</p>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {item.highlights.map((highlight) => (
              <div
                key={highlight}
                className="border border-border bg-white/6 px-4 py-4"
              >
                <p className="text-sm leading-7 text-foreground sm:text-base">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <Tags items={item.stack} className="mt-7" />
        </div>
      </div>
    </article>
  );
}

export function CvHero() {
  return (
    <section className="pb-8 pt-8 sm:pb-12 sm:pt-12">
      <Container>
        <div className="surface-card px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.64fr)_minmax(16rem,0.36fr)] xl:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">{cvContent.hero.eyebrow}</p>
              <h1 className="mt-4 text-[3rem] leading-[0.96] tracking-tight text-foreground sm:text-5xl lg:text-[4.2rem]">
                {brandContent.name}
              </h1>
              <p className="mt-4 text-xl tracking-tight text-foreground/86 sm:text-[1.7rem]">
                {brandContent.role}
              </p>
              <p className="section-copy mt-6 text-base leading-8 sm:text-lg">
                {cvContent.hero.intro}
              </p>
            </div>

            <div className="space-y-4">
              <div className="border border-border bg-white/66 p-5">
                <p className="eyebrow">{cvContent.hero.snapshotLabel}</p>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm text-muted">
                      {cvContent.hero.labels.location}
                    </dt>
                    <dd className="mt-1 text-base text-foreground">
                      {brandContent.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">
                      {cvContent.hero.labels.focus}
                    </dt>
                    <dd className="mt-1 text-base text-foreground">
                      {cvContent.hero.focusValue}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href={cvContent.hero.primaryCta.href}>
                  {cvContent.hero.primaryCta.label}
                </Button>
                <Button href={cvContent.hero.secondaryCta.href} variant="secondary">
                  {cvContent.hero.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProfessionalSummarySection() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="surface-card-dark p-7 sm:p-8">
          <div className="max-w-4xl">
            <SectionHeading
              eyebrow={cvContent.professionalSummary.eyebrow}
              title={cvContent.professionalSummary.title}
              invert
              className="max-w-none"
            />

            <div className="mt-6 space-y-5 text-base leading-8 text-white/72 sm:text-lg">
              {cvContent.professionalSummary.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CoreSkillsSection() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={cvContent.coreSkills.eyebrow}
          title={cvContent.coreSkills.title}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cvContent.coreSkills.groups.map((group) => (
            <article
              key={group.title}
              className="surface-card p-6 sm:p-7"
            >
              <p className="eyebrow">{group.title}</p>
              <Tags items={group.items} className="mt-6" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="surface-card-dark px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] xl:items-start">
            <SectionHeading
              eyebrow={cvContent.highlightsSection.eyebrow}
              title={cvContent.highlightsSection.title}
              copy={cvContent.highlightsSection.copy}
              invert
            />

            <div className="grid gap-4 md:grid-cols-3">
              {cvContent.highlightsSection.items.map((item) => (
                <article
                  key={item.title}
                  className="border border-white/10 bg-white/6 p-6"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-white">
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

export function ExperienceSection() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={cvContent.experienceSection.eyebrow}
          title={cvContent.experienceSection.title}
          copy={cvContent.experienceSection.copy}
        />

        <div className="mt-10 space-y-5">
          {cvContent.experienceSection.items.map((item) => (
            <ExperienceItem key={`${item.eyebrow}-${item.role}`} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function KeyProjectsSection() {
  const projects = cvContent.projectReferencesSection.slugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [project] : [];
  });

  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={cvContent.projectReferencesSection.eyebrow}
          title={cvContent.projectReferencesSection.title}
          copy={cvContent.projectReferencesSection.copy}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="surface-card p-6 transition-colors hover:bg-white/85"
            >
              <div className="flex flex-wrap gap-2">
                <span className="meta-chip">{project.client}</span>
                <span className="meta-chip">{project.period}</span>
              </div>
              <h3 className="mt-5 text-[2rem] font-semibold leading-tight tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                {project.referenceSummary ?? project.summary}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function EducationCertsSection() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] xl:items-start">
          <SectionHeading
            eyebrow={cvContent.educationSection.eyebrow}
            title={cvContent.educationSection.title}
            copy={cvContent.educationSection.copy}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {cvContent.educationSection.items.map((item) => (
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

export function ToolsSection() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow={cvContent.toolsSection.eyebrow}
          title={cvContent.toolsSection.title}
          copy={cvContent.toolsSection.copy}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cvContent.toolsSection.groups.map((group) => (
            <article
              key={group.title}
              className="surface-card p-6 sm:p-7"
            >
              <p className="eyebrow">{group.title}</p>
              <Tags items={group.items} className="mt-6" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CvCtaSection() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <Container>
        <div className="surface-card px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.62fr)_minmax(16rem,0.38fr)] xl:items-end">
            <SectionHeading
              eyebrow={cvContent.ctaSection.eyebrow}
              title={cvContent.ctaSection.title}
              className="max-w-none"
            />

            <div className="flex flex-wrap gap-3">
              <Button href={cvContent.ctaSection.primaryCta.href}>
                {cvContent.ctaSection.primaryCta.label}
              </Button>
              <Button href={cvContent.ctaSection.secondaryCta.href} variant="secondary">
                {cvContent.ctaSection.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
