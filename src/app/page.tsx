import {
  AboutPreviewSection,
  ContactCtaSection,
  ExperienceSnapshotSection,
  FeaturedProjectsSection,
  HeroSection,
  ProofMetricsSection,
  StrengthsSection,
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
      <StrengthsSection />
      <ProofMetricsSection />
      <TechStackSection />
      <AboutPreviewSection />
      <ContactCtaSection />
    </>
  );
}
