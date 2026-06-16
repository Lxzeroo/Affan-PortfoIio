import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}