import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import StatsSection from "@/components/StatsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <StatsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}