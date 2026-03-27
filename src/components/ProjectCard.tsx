import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProjectCardVisual } from "@/components/ProjectVisuals";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="surface-card flex h-full flex-col rounded-[2rem] p-4 sm:p-5">
      <ProjectCardVisual project={project} />

      <div className="flex flex-1 flex-col px-1 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {project.client}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent">
            {project.title}
          </Link>
        </h3>

        <p className="mt-5 text-sm leading-7 text-muted">{project.summary}</p>

        <div className="mt-6 space-y-2 text-sm leading-7 text-muted">
          <p>
            <span className="font-semibold text-foreground">Role</span> — {project.role}
          </p>
          <p>
            <span className="font-semibold text-foreground">Stack</span> —{" "}
            {project.stack.join(", ")}
          </p>
        </div>

        <div className="corner-cut mt-6 rounded-[1.5rem] bg-accent-soft/70 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Outcome
          </p>
          <p className="mt-2 text-sm leading-7 text-foreground">{project.outcome}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={`/projects/${project.slug}`}>Read Case Study</Button>
        </div>
      </div>
    </article>
  );
}
