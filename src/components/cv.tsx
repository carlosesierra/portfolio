import Link from "next/link";
import { Button } from "@/components/button";
import { Tag } from "@/components/tag";
import { Container } from "@/components/container";
import { cvData, type CvExperienceItem } from "@/data/cv";
import { getProjectBySlug } from "@/data/projects";
import { siteConfig } from "@/data/site";
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
          "mt-4 font-serif text-4xl leading-[0.98] tracking-tight sm:text-5xl",
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
    <article className="surface-card rounded-[2.35rem] p-6 sm:p-8">
      <div className="grid gap-8 xl:grid-cols-[minmax(14rem,0.3fr)_minmax(0,0.7fr)] xl:items-start">
        <div>
          <p className="eyebrow">{item.eyebrow}</p>
          <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
            {title}
          </h3>
          {company ? (
            <p className="mt-3 text-base text-foreground/82 sm:text-lg">
              {company}
            </p>
          ) : null}

          <div className="corner-cut mt-6 rounded-[1.65rem] bg-accent-soft/68 px-4 py-4">
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
                className="rounded-[1.55rem] border border-border bg-white/6 px-4 py-4"
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
        <div className="surface-card-strong rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.64fr)_minmax(16rem,0.36fr)] xl:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">Curriculum vitae</p>
              <h1 className="mt-4 font-serif text-[3rem] leading-[0.96] tracking-tight text-foreground sm:text-5xl lg:text-[4.2rem]">
                {siteConfig.name}
              </h1>
              <p className="mt-4 text-xl tracking-tight text-foreground/86 sm:text-[1.7rem]">
                {siteConfig.role}
              </p>
              <p className="section-copy mt-6 text-base leading-8 sm:text-lg">
                {cvData.availability}
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-[2rem] border border-border bg-white/66 p-5">
                <p className="eyebrow">Snapshot</p>
                <dl className="mt-4 space-y-4">
                  <div>
                    <dt className="text-sm text-muted">Location</dt>
                    <dd className="mt-1 text-base text-foreground">
                      {siteConfig.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-muted">Focus</dt>
                    <dd className="mt-1 text-base text-foreground">
                      Frontend engineering, UI systems and delivery quality.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button href="/#projects">View Projects</Button>
                <Button href="/" variant="secondary">
                  Back Home
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
        <div className="surface-card-dark rounded-[2.35rem] p-7 sm:p-8">
          <div className="max-w-4xl">
            <SectionHeading
              eyebrow="Professional summary"
              title="Frontend engineer focused on clear UI, structured implementation and reliable delivery."
              invert
              className="max-w-none"
            />

            <div className="mt-6 space-y-5 text-base leading-8 text-white/72 sm:text-lg">
              {cvData.summary.map((paragraph) => (
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
          eyebrow="Core skills"
          title="Core skills: How I use them in practice."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cvData.coreSkills.map((group) => (
            <article
              key={group.title}
              className="surface-card rounded-[2.2rem] p-6 sm:p-7"
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
        <div className="surface-card-dark rounded-[2.7rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.34fr)_minmax(0,0.66fr)] xl:items-start">
            <SectionHeading
              eyebrow="Highlights"
              title="Strengths that show up consistently in my work."
              copy="These themes reflect how I tend to approach frontend implementation across both product-style websites and campaign-driven environments."
              invert
            />

            <div className="grid gap-4 md:grid-cols-3">
              {cvData.highlights.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.9rem] border border-white/10 bg-white/6 p-6"
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
          eyebrow="Experience"
          title="Selected experience."
          copy="Experience across frontend engineering, digital production and campaign delivery spanning websites, eDM systems, HTML5 banners and modern responsive UI implementation."
        />

        <div className="mt-10 space-y-5">
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
    <section className="section-shell py-12 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Project references"
          title="Selected project references"
          copy="A few projects that reflect my frontend implementation style, delivery thinking and approach to maintainable UI work."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="surface-card rounded-[2.2rem] p-6 transition-colors hover:bg-white/85"
            >
              <div className="flex flex-wrap gap-2">
                <span className="meta-chip">{project.client}</span>
                <span className="meta-chip">{project.period}</span>
              </div>
              <h3 className="mt-5 font-serif text-[2rem] leading-tight tracking-tight text-foreground">
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
            eyebrow="Education and specialisation"
            title="Ongoing learning and technical development."
            copy="Alongside project work, I continue refining my frontend practice through structured learning, design-to-code execution and deeper work with modern UI systems."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {cvData.education.map((item) => (
              <article
                key={item.title}
                className="surface-card rounded-[2rem] p-6"
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
          eyebrow="Tooling"
          title="Tools and technologies."
          copy="The tools below reflect the environments I've worked in most often across frontend build, interface implementation and digital delivery."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cvData.tools.map((group) => (
            <article
              key={group.title}
              className="surface-card rounded-[2.15rem] p-6 sm:p-7"
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
        <div className="surface-card-strong rounded-[2.8rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.62fr)_minmax(16rem,0.38fr)] xl:items-end">
            <SectionHeading
              eyebrow="Continue exploring"
              title="Explore the case studies for a closer look at implementation decisions, delivery thinking and frontend execution."
              className="max-w-none"
            />

            <div className="flex flex-wrap gap-3">
              <Button href="/#projects">Open Case Studies</Button>
              <Button href="/" variant="secondary">
                Return Home
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
