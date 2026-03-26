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
      <ValuePropsSection />
      <FeaturedProjectsSection />
      <StrengthsSection />
      <ExperienceSnapshotSection />
      <ProofMetricsSection />
      <TechStackSection />
      <AboutPreviewSection />
      <ContactCtaSection />
    </>
  );
}
