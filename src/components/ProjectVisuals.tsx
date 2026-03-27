import Image from "next/image";
import type { Project, ProjectImage } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectVisualsProps = {
  project: Project;
  className?: string;
};

type ProjectMediaProps = {
  project: Project;
  item: ProjectImage;
  className?: string;
  priority?: boolean;
  compact?: boolean;
};

type VisualTheme = {
  background: string;
  accent: string;
  border: string;
  ink: string;
};

const visualThemes: Record<string, VisualTheme> = {
  "structural-assessments": {
    background: "linear-gradient(180deg, #ece6dc 0%, #f7f3ec 100%)",
    accent: "#d9ccbb",
    border: "#b6a28b",
    ink: "#403125",
  },
  "any-motion": {
    background: "linear-gradient(180deg, #e3ebf2 0%, #f5f8fb 100%)",
    accent: "#cedceb",
    border: "#95a7bb",
    ink: "#223344",
  },
  vaa: {
    background: "linear-gradient(180deg, #e3e9e3 0%, #f5f8f4 100%)",
    accent: "#d8e1d7",
    border: "#93a493",
    ink: "#253328",
  },
};

function getTheme(project: Project) {
  return (
    visualThemes[project.slug] ?? {
      background: "linear-gradient(180deg, #ece7df 0%, #f8f5ef 100%)",
      accent: "#d7d0c5",
      border: "#b7ab99",
      ink: "#3f3428",
    }
  );
}

function getAspectClass(kind: ProjectImage["kind"] = "desktop") {
  switch (kind) {
    case "hero":
      return "aspect-[16/10]";
    case "mobile":
      return "aspect-[4/5]";
    case "detail":
      return "aspect-[5/4]";
    default:
      return "aspect-[16/10]";
  }
}

function getFallbackGallery(project: Project): ProjectImage[] {
  return [
    {
      alt: `${project.title} desktop interface placeholder`,
      caption: `${project.focus[0] ?? project.client} overview`,
      kind: "desktop",
    },
    {
      alt: `${project.title} detail placeholder`,
      caption: `${project.focus[1] ?? project.stack[0] ?? project.client} detail`,
      kind: "detail",
    },
  ];
}

function WindowDots() {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
      <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
      <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
    </div>
  );
}

function ProjectFallbackVisual({
  project,
  item,
  className,
  compact = false,
}: ProjectMediaProps) {
  const theme = getTheme(project);
  const primaryMetric = project.metrics[0];
  const secondaryMetric = project.metrics[1];
  const tertiaryMetric = project.metrics[2];

  if (item.kind === "mobile") {
    return (
      <div
        role="img"
        aria-label={item.alt}
        className={cn("relative h-full w-full overflow-hidden rounded-[1.4rem]", className)}
        style={{ background: theme.background }}
      >
        <div className="absolute inset-x-6 top-6 h-20 rounded-[1.35rem]" style={{ background: theme.accent }} />
        <div
          className="absolute left-1/2 top-1/2 flex h-[76%] w-[56%] -translate-x-1/2 -translate-y-1/2 flex-col rounded-[2.25rem] border bg-white/95 p-4 shadow-[0_18px_40px_-28px_rgba(31,28,23,0.3)]"
          style={{ borderColor: theme.border }}
        >
          <div className="mx-auto h-1.5 w-14 rounded-full bg-foreground/12" />
          <div className="mt-4 rounded-[1.2rem] px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em]" style={{ background: theme.accent, color: theme.ink }}>
            {project.focus[0] ?? project.client}
          </div>
          <div className="mt-4 rounded-[1.2rem] border border-border bg-background/80 px-3 py-3">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-muted">
              {project.client}
            </p>
            <p className="mt-2 text-sm font-semibold tracking-tight text-foreground">
              {project.metrics[0]?.value ?? project.title}
            </p>
          </div>
          <div className="mt-3 grid gap-2">
            <div className="h-2 rounded-full bg-foreground/10" />
            <div className="h-2 w-5/6 rounded-full bg-foreground/8" />
            <div className="h-2 w-2/3 rounded-full bg-foreground/8" />
          </div>
          <div className="mt-auto rounded-full px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em]" style={{ background: theme.ink, color: "white" }}>
            {project.focus[1] ?? project.stack[0] ?? "Frontend"}
          </div>
        </div>
      </div>
    );
  }

  if (item.kind === "detail") {
    return (
      <div
        role="img"
        aria-label={item.alt}
        className={cn("relative h-full w-full overflow-hidden rounded-[1.4rem] p-4 sm:p-5", className)}
        style={{ background: theme.background }}
      >
        <div className="absolute inset-x-0 top-0 h-24 opacity-70" style={{ background: theme.accent }} />
        <div className="relative flex h-full flex-col">
          <WindowDots />
          <div className="mt-5 grid gap-3">
            <div className="rounded-[1.35rem] border border-border bg-white/95 p-4">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted">
                {project.stack.slice(0, 2).join(" + ")}
              </p>
              <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                {primaryMetric?.value ?? project.title}
              </p>
              <div className="mt-4 grid gap-2">
                <div className="h-2 rounded-full bg-foreground/10" />
                <div className="h-2 w-11/12 rounded-full bg-foreground/8" />
                <div className="h-2 w-4/5 rounded-full bg-foreground/8" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[secondaryMetric, tertiaryMetric].map((metric, index) => (
                <div key={`${metric?.value ?? project.title}-${index}`} className="rounded-[1.2rem] border border-border bg-white/92 p-4">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    Detail
                  </p>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-foreground">
                    {metric?.value ?? project.focus[index] ?? project.client}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    {metric?.label ?? project.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={item.alt}
      className={cn("relative h-full w-full overflow-hidden rounded-[1.4rem] p-4 sm:p-5", className)}
      style={{ background: theme.background }}
    >
      <div className="relative flex h-full flex-col">
        <WindowDots />
        <div className={cn("mt-5 grid flex-1 gap-4", compact ? "grid-cols-[0.42fr_0.58fr]" : "grid-cols-[0.35fr_0.65fr]")}>
          <div className="rounded-[1.35rem] border border-border bg-white/92 p-4">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
              {project.client}
            </p>
            <p className={cn("mt-3 font-semibold tracking-tight text-foreground", compact ? "text-base" : "text-lg")}>
              {project.focus[0] ?? project.title}
            </p>
            <div className="mt-4 space-y-2">
              {project.focus.slice(0, 3).map((focusItem) => (
                <div key={focusItem} className="rounded-full px-3 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.18em]" style={{ background: theme.accent, color: theme.ink }}>
                  {focusItem}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1.35rem] border border-border bg-white/95 p-4">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
                {project.summaryFocus ?? project.client}
              </p>
              <p className={cn("mt-2 font-semibold tracking-tight text-foreground", compact ? "text-lg" : "text-xl")}>
                {primaryMetric?.value ?? project.title}
              </p>
              <div className="mt-4 grid gap-2">
                <div className="h-2 rounded-full bg-foreground/10" />
                <div className="h-2 w-11/12 rounded-full bg-foreground/8" />
                <div className="h-2 w-4/5 rounded-full bg-foreground/8" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[secondaryMetric, tertiaryMetric].map((metric, index) => (
                <div key={`${metric?.value ?? project.title}-${index}`} className="rounded-[1.2rem] border border-border bg-white/92 p-4">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    Metric
                  </p>
                  <p className="mt-2 text-sm font-semibold tracking-tight text-foreground">
                    {metric?.value ?? project.stack[index] ?? project.client}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted">
                    {metric?.label ?? project.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectMediaFigure({
  project,
  item,
  className,
  priority = false,
  compact = false,
}: ProjectMediaProps) {
  const itemKind = item.kind ?? "desktop";
  const wrapperClass = cn(
    "space-y-3",
    itemKind === "mobile" && "sm:max-w-[19rem]",
    className,
  );
  const mediaClass = cn(
    "corner-cut relative overflow-hidden rounded-[1.5rem]",
    item.frameClassName ?? getAspectClass(itemKind),
  );

  return (
    <figure className={wrapperClass}>
      <div className="surface-card overflow-hidden rounded-[1.85rem] p-2.5">
        <div className={mediaClass}>
          {item.src ? (
            <Image
              src={item.src}
              alt={item.alt}
              fill
              priority={priority}
              sizes={
                compact
                  ? "(max-width: 1024px) 100vw, 32vw"
                  : itemKind === "mobile"
                    ? "(max-width: 768px) 100vw, 18rem"
                    : "(max-width: 1280px) 100vw, 42rem"
              }
              className="object-cover object-top"
            />
          ) : (
            <ProjectFallbackVisual
              project={project}
              item={item}
              compact={compact}
              className="h-full w-full"
            />
          )}
        </div>
      </div>
      {item.caption ? (
        <figcaption className="px-1 text-sm leading-6 text-muted">
          {item.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function ProjectCardVisual({ project }: ProjectVisualsProps) {
  return (
    <ProjectMediaFigure
      project={project}
      item={{
        src: project.heroImage,
        alt: `${project.title} project preview`,
        kind: "hero",
      }}
      compact
      className="w-full"
    />
  );
}

export function ProjectShowcaseVisuals({
  project,
  className,
}: ProjectVisualsProps) {
  const gallery = project.gallery?.length ? project.gallery : getFallbackGallery(project);

  return (
    <div className={cn("space-y-5", className)}>
      <ProjectMediaFigure
        project={project}
        item={{
          src: project.heroImage,
          alt: `${project.title} hero preview`,
          caption: `${project.title} overview`,
          kind: "hero",
        }}
        priority
      />

      <div className="grid gap-4 md:grid-cols-2">
        {gallery.map((item, index) => (
          <ProjectMediaFigure
            key={`${project.slug}-${item.caption ?? item.alt}-${index}`}
            project={project}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}
