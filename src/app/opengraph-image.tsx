import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

export const alt = "Carlos Sierra portfolio homepage";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default function Image() {
  return createSocialImage({
    eyebrow: "Carlos Sierra",
    title: "Senior Front-End Engineer",
    description:
      "Recruiter-friendly portfolio with frontend case studies, CV content, and modern implementation examples.",
    accent: "#d4e4f1",
  });
}

