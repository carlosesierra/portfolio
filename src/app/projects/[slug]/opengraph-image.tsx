import { getProjectBySlug } from "@/data/projects";
import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

type ProjectImageProps = {
  params: Promise<{ slug: string }>;
};

export const alt = "Carlos Sierra project case study";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function Image({ params }: ProjectImageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createSocialImage({
      eyebrow: "Case study",
      title: "Carlos Sierra",
      description: "Frontend project case study and delivery notes.",
      accent: "#d4e4f1",
    });
  }

  return createSocialImage({
    eyebrow: "Case study",
    title: project.title,
    description: project.tagline,
    accent:
      project.slug === "any-motion"
        ? "#cedceb"
        : project.slug === "vaa"
          ? "#d8e1d7"
          : "#d9ccbb",
  });
}

