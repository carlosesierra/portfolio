import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Container } from "@/components/layout/Container";
import { cvData, type CvExperienceItem } from "@/data/cv";
import { getProjectBySlug } from "@/data/projects";
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

function ExperienceItem({ item }: { item: CvExperienceItem }) {
  return (
    <article className="surface-card rounded-[2rem] p-7 sm:p-8">
      <div className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            {item.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            {item.role}
          </h3>
        </div>
        <p className="text-sm text-muted">{item.period}</p>
      </div>

      <p className="mt-6 text-sm leading-7 text-muted">{item.summary}</p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {item.highlights.map((highlight) => (
          <div key={highlight} className="rounded-[1.5rem] bg-white/75 p-4">
            <p className="text-sm leading-7 text-foreground">{highlight}</p>
          </div>
        ))}
      </div>

      <Tags items={item.stack} className="mt-6" />
    </article>
  );
}

export function CvHero() {
  return (
    <section className="pb-10 pt-16 sm:pb-12 sm:pt-20">
      <Container>
        <div className="surface-card-strong rounded-[2.5rem] p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Curriculum Vitae
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            {siteConfig.name}
          </h1>
          <p className="mt-4 text-xl tracking-tight text-foreground/85">
            {siteConfig.role}
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {cvData.availability}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#projects">View Projects</Button>
            <Button href="/" variant="secondary">
              Back Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function ProfessionalSummarySection() {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Professional summary"
          title="A concise overview of the role profile."
        />

        <div className="mt-8 surface-card rounded-[2rem] p-7 sm:p-8">
          <div className="space-y-5 text-base leading-8 text-muted sm:text-lg">
            {cvData.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function CoreSkillsSection() {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Core skills"
          title="Breadth organised into clear buckets."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cvData.coreSkills.map((group) => (
            <article key={group.title} className="surface-card rounded-[2rem] p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <Tags items={group.items} className="mt-5" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Highlights"
          title="Key themes worth scanning before the detailed experience history."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cvData.highlights.map((item) => (
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

export function ExperienceSection() {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Role entries organised so you can swap in your exact role history."
          copy="The structure below is designed to show role context, contribution and stack clearly. Replace the generic copy with your final role history and achievements."
        />

        <div className="mt-8 space-y-5">
          {cvData.experience.map((item) => (
            <ExperienceItem key={`${item.eyebrow}-${item.role}`} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export function KeyProjectsSection() {
  const projects = cvData.keyProjectSlugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [project] : [];
  });

  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="References"
          title="Project references that connect the CV to the case studies."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="surface-card rounded-[2rem] p-6 transition-colors hover:bg-white/85"
            >
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
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
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Education and specialisation"
          title="A placeholder-ready section for formal study and ongoing learning."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {cvData.education.map((item) => (
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

export function ToolsSection() {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow="Tooling"
          title="Delivery tooling grouped by how it tends to be used."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {cvData.tools.map((group) => (
            <article key={group.title} className="surface-card rounded-[2rem] p-6">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {group.title}
              </h3>
              <Tags items={group.items} className="mt-5" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function CvCtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="surface-card-strong rounded-[2.5rem] px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted">
            Continue exploring
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
            Use the project pages to show execution depth, not just role titles.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/#projects">Open Case Studies</Button>
            <Button href="/" variant="secondary">
              Return Home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
