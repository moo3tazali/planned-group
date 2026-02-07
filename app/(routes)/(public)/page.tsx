import {
  AboutSection,
  CtaSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
  StatsSection,
  WhyChooseUsSection,
} from './_components/public-sections';

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUsSection />
      <CtaSection />
    </main>
  );
}
