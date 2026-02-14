import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EngineeringPhilosophySection } from "@/components/sections/EngineeringPhilosophySection";
import { Footer } from "@/components/sections/Footer";
import { FullStackSection } from "@/components/sections/FullStackSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LabMetricsSection } from "@/components/sections/LabMetricsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 mesh-overlay opacity-40" />
      <div className="relative z-10">
        <HeroSection />
        <LabMetricsSection />
        <CaseStudiesSection />
        <FullStackSection />
        <SkillsSection />
        <EngineeringPhilosophySection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}