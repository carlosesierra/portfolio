import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Tag } from "@/components/tag";
import { Container } from "@/components/container";
import { ParallaxMedia } from "@/components/parallax-media";
import { ProjectCard } from "@/components/project-card";
import { brandContent } from "@/content/brand";
import { homeContent } from "@/content/home";
import { featuredProjects } from "@/data/projects";
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

      <h2 className="mt-4 text-foreground">
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
        "surface-card h-full p-2.5 lg:aspect-square",
        className,
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="relative h-full min-h-68 overflow-hidden sm:min-h-72 lg:min-h-0">
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

          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-[#181513]/88 via-[#181513]/48 to-transparent p-4 text-white sm:p-5">
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
    <section className="pb-18 pt-8 sm:pb-24 sm:pt-12 lg:pb-28">
      <Container>
        <div>
          <div className="max-w-4xl">
            <p className="eyebrow mt-8">{brandContent.location}</p>

            <h1 className="mt-4 max-w-4xl text-[3.2rem] leading-[0.92] tracking-tight text-foreground sm:text-[4.8rem] lg:text-[6.2rem]">
              {brandContent.name}
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-medium leading-8 tracking-tight text-foreground/88 sm:mt-6 sm:text-[1.75rem] sm:leading-9">
              {brandContent.role}
            </p>

            <p className="section-copy mt-6 max-w-3xl text-base leading-8 sm:text-lg">
              {homeContent.hero.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={homeContent.hero.primaryCta.href}>
                {homeContent.hero.primaryCta.label}
              </Button>
              <Button href={homeContent.hero.secondaryCta.href} variant="secondary">
                {homeContent.hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-4">
            <div className="surface-card flex h-full flex-col p-5 sm:p-6 lg:aspect-square">
              <p className="eyebrow">{homeContent.hero.atGlance.eyebrow}</p>
              <div className="mt-5 flex flex-1 flex-col gap-5">
                <div>
                  <p className="text-3xl font-semibold leading-none tracking-tight text-foreground">
                    {homeContent.hero.atGlance.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {homeContent.hero.atGlance.body}
                  </p>
                </div>

                <div>
                  <div className="soft-divider" />
                  <p className="pt-4 text-sm leading-6 text-muted">
                    {homeContent.hero.atGlance.supporting}
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
          eyebrow={homeContent.featured.eyebrow}
          title={homeContent.featured.title}
          copy={homeContent.featured.copy}
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
            eyebrow={homeContent.whatIBring.eyebrow}
            title={homeContent.whatIBring.title}
            copy={homeContent.whatIBring.copy}
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {homeContent.whatIBring.items.map((item, index) => (
              <article
                key={item.title}
                className="surface-card p-6 sm:p-7"
              >
                <div className="grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:items-start">
                  <p className="text-4xl font-semibold leading-none tracking-tight text-foreground/25 sm:text-5xl">
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
              eyebrow={homeContent.experienceSnapshot.eyebrow}
              title={homeContent.experienceSnapshot.title}
              copy={homeContent.experienceSnapshot.copy}
            />

            <div className="mt-10 space-y-4">
              {homeContent.experienceSnapshot.items.map((item) => (
                <article
                  key={item.title}
                  className="surface-card px-5 py-5 sm:px-6"
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

          <aside className="surface-card-dark px-6 py-7 sm:px-7 sm:py-8">
            <p className="eyebrow text-white/55">
              {homeContent.experienceSnapshot.aside.eyebrow}
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-[2.5rem]">
              {homeContent.experienceSnapshot.aside.title}
            </h3>

            <div className="mt-8 space-y-3">
              <div className="border border-white/10 bg-white/6 p-4">
                <p className="eyebrow text-white/45">
                  {homeContent.experienceSnapshot.aside.includesLabel}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  {homeContent.experienceSnapshot.aside.includesBody}
                </p>
              </div>
              <Button
                href={homeContent.experienceSnapshot.aside.cta.href}
                className="w-full"
              >
                {homeContent.experienceSnapshot.aside.cta.label}
              </Button>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export function TechStackSection() {
  return (
    <section className="section-shell py-14 sm:py-18">
      <Container>
        <SectionHeading
          eyebrow={homeContent.tooling.eyebrow}
          title={homeContent.tooling.title}
        />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {homeContent.tooling.groups.map((group) => (
            <article
              key={group.title}
              className="surface-card p-5 sm:p-6"
            >
              <p className="eyebrow">{group.title}</p>
              <Tags items={group.items} className="mt-4 gap-2" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutPreviewSection() {
  return (
    <section id="about" className="section-shell py-14 sm:py-18">
      <Container>
        <div className="surface-card p-7 sm:p-8 lg:p-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.62fr)_minmax(18rem,0.38fr)] xl:items-start">
            <div>
              <SectionHeading
                eyebrow={homeContent.about.intro.eyebrow}
                title={homeContent.about.intro.title}
                className="max-w-none"
              />

              <p className="mt-8 max-w-3xl text-base leading-8 text-muted sm:text-lg">
                {homeContent.about.intro.paragraph}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {homeContent.about.metadata.map((item) => (
                <div
                  key={item.label}
                  className="border border-border bg-accent-soft/44 px-4 py-4"
                >
                  <p className="eyebrow">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-foreground sm:text-base">
                    {item.value}
                  </p>
                </div>
              ))}
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
        <div className="surface-card px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,0.62fr)_minmax(16rem,0.38fr)] xl:items-end">
            <div className="max-w-3xl">
              <p className="eyebrow">{homeContent.contact.eyebrow}</p>
              <h2 className="mt-4 text-foreground">
                {homeContent.contact.title}
              </h2>
              <p className="section-copy mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8">
                {homeContent.contact.body}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button href={homeContent.contact.primaryCta.href}>
                  {homeContent.contact.primaryCta.label}
                </Button>
                <Button href={homeContent.contact.secondaryCta.href} variant="secondary">
                  {homeContent.contact.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
