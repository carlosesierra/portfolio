import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = "Carlos Sierra CV";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "Curriculum vitae",
    title: "Carlos Sierra CV",
    description:
      "Frontend engineering experience, selected project references, and recruiter-friendly summary content.",
    accent: "#e5d08e",
  });
}

