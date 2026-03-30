import {
  AboutPreviewSection,
  ContactCtaSection,
  ExperienceSnapshotSection,
  FeaturedProjectsSection,
  HeroSection,
  TechStackSection,
  ValuePropsSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <>
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
