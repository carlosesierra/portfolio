import Link from "next/link";
import { Button } from "@/components/button";
import { ProjectCardVisual } from "@/components/project-visuals";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  variant?: "feature" | "standard";
  eagerImage?: boolean;
};

type DetailItemProps = {
  label: string;
  value: string;
};

function DetailItem({ label, value }: DetailItemProps) {
  return (
    <div className="border border-border bg-white/62 px-4 py-3">
      <p className="eyebrow">{label}</p>
      <p className="mt-2 text-sm leading-6 text-foreground">{value}</p>
    </div>
  );
}

export function ProjectCard({
  project,
  variant = "standard",
  eagerImage = false,
}: ProjectCardProps) {
  const isFeature = variant === "feature";
  const projectUrl = project.liveUrl ?? project.githubUrl;

  return (
    <article className="surface-card p-3 sm:p-4">
      <div
        className={cn(
          "grid gap-5",
          isFeature && "xl:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] xl:items-stretch",
        )}
      >
        <ProjectCardVisual
          project={project}
          variant={isFeature ? "feature" : "standard"}
          eagerImage={eagerImage}
        />

        <div className="flex flex-1 flex-col px-1 py-2">
          <div className="flex flex-wrap gap-2">
            <span className="meta-chip">{project.client}</span>
            <span className="meta-chip">{project.period}</span>
            {project.stack.slice(0, isFeature ? 2 : 1).map((item) => (
              <span key={item} className="meta-chip">
                {item}
              </span>
            ))}
          </div>

          <h3
            className={cn(
              "mt-5 font-semibold leading-[0.98] tracking-tight text-foreground",
              isFeature ? "text-[2.7rem] sm:text-5xl" : "text-[1.9rem] sm:text-[2.25rem]",
            )}
          >
            <Link href={`/projects/${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          </h3>

          <p className="section-copy mt-4 text-base leading-7 sm:text-lg sm:leading-8">
            {project.summary}
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <DetailItem label="Role" value={project.role} />
            <DetailItem
              label="Focus"
              value={(project.showcaseFocus ?? project.focus).slice(0, 2).join(" / ")}
            />
            <DetailItem
              label="Stack"
              value={project.stack.slice(0, 3).join(", ")}
            />
          </div>

          <div className="mt-6 bg-accent-soft/72 p-5 sm:p-6">
            <p className="eyebrow">Outcome</p>
            <p className="mt-3 text-sm leading-7 text-foreground sm:text-base">
              {project.outcome}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`/projects/${project.slug}`}>Read Case Study</Button>
            {projectUrl ? (
              <Button href={projectUrl} variant="secondary">
                Visit Project
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
