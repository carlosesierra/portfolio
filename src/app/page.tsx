import type { Metadata } from "next";
import {
  AboutPreviewSection,
  ContactCtaSection,
  ExperienceSnapshotSection,
  FeaturedProjectsSection,
  HeroSection,
  TechStackSection,
  ValuePropsSection,
} from "@/components/home";
import { getHomeJsonLd, serializeJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description:
    "Senior Front-End Engineer portfolio for Carlos Sierra with recruiter-friendly case studies, CV content, and frontend delivery examples.",
  openGraph: {
    description:
      "Senior Front-End Engineer portfolio for Carlos Sierra with recruiter-friendly case studies, CV content, and frontend delivery examples.",
    title: "Carlos Sierra | Senior Front-End Engineer",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Senior Front-End Engineer portfolio for Carlos Sierra with recruiter-friendly case studies, CV content, and frontend delivery examples.",
    title: "Carlos Sierra | Senior Front-End Engineer",
  },
};

export default function HomePage() {
  const jsonLd = serializeJsonLd(getHomeJsonLd());

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <HeroSection />
      <FeaturedProjectsSection />
      <ValuePropsSection />
      <ExperienceSnapshotSection />
      <TechStackSection />
      <AboutPreviewSection />
      <ContactCtaSection />
    </>
  );
}
