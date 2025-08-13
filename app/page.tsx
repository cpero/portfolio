//
import LandingSection from "@/components/landing/LandingSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";

// Removed unused dynamic fallbacks: each section provides its own loading UI

export default function Home() {
  return (
    <main id="content" className="flex min-h-screen flex-col items-center">
      <LandingSection />
      <ScrollReveal targetId="about">
        <AboutSection />
      </ScrollReveal>
      <ScrollReveal targetId="skills">
        <SkillsSection />
      </ScrollReveal>
      <ScrollReveal targetId="experience">
        <ExperienceSection />
      </ScrollReveal>
      <ScrollReveal targetId="projects">
        <ProjectsSection />
      </ScrollReveal>
      <ScrollReveal targetId="contact">
        <ContactSection />
      </ScrollReveal>
    </main>
  );
}
