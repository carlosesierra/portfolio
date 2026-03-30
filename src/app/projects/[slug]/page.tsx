import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ProjectApproachSection,
  ProjectChallengesSolutionsSection,
  ProjectChallengeSection,
  ProjectHero,
  ProjectOutcomeSection,
  ProjectOverviewSection,
  ProjectPager,
  ProjectRoleSection,
  ProjectSummaryBar,
  ProjectTechImplementationSection,
  ProjectUxDecisionsSection,
  ProjectVisualShowcase,
} from "@/components/project";
import { getProjectBySlug, projects } from "@/data/projects";
import { getProjectJsonLd, serializeJsonLd } from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project",
    };
  }

  return {
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    title: project.title,
    description: project.summary,
    openGraph: {
      description: project.summary,
      title: `${project.title} | Carlos Sierra`,
      type: "website",
      url: `/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      description: project.summary,
      title: `${project.title} | Carlos Sierra`,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const jsonLd = serializeJsonLd(getProjectJsonLd(project));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <ProjectHero project={project} />
      <ProjectSummaryBar project={project} />
      <ProjectVisualShowcase project={project} />
      <ProjectOverviewSection project={project} />
      <ProjectChallengeSection project={project} />
      <ProjectRoleSection project={project} />
      <ProjectApproachSection project={project} />
      <ProjectUxDecisionsSection project={project} />
      <ProjectTechImplementationSection project={project} />
      <ProjectChallengesSolutionsSection project={project} />
      <ProjectOutcomeSection project={project} />
      <ProjectPager currentSlug={project.slug} />
    </>
  );
}
