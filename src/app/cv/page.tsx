import type { Metadata } from "next";
import {
  CoreSkillsSection,
  CvCtaSection,
  CvHero,
  EducationCertsSection,
  ExperienceSection,
  HighlightsSection,
  KeyProjectsSection,
  ProfessionalSummarySection,
  ToolsSection,
} from "@/components/cv";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Curriculum vitae page with experience, skills, key project references, and recruiter-friendly summary content.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "CV | Carlos Sierra",
    description:
      "Curriculum vitae page with experience, skills, key project references, and recruiter-friendly summary content.",
    url: "/cv",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV | Carlos Sierra",
    description:
      "Curriculum vitae page with experience, skills, key project references, and recruiter-friendly summary content.",
  },
};

export default function CvPage() {
  return (
    <>
      <CvHero />
      <ProfessionalSummarySection />
      <CoreSkillsSection />
      <HighlightsSection />
      <ExperienceSection />
      <KeyProjectsSection />
      <EducationCertsSection />
      <ToolsSection />
      <CvCtaSection />
    </>
  );
}
