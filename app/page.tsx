import LandingSection from "@/components/landing/LandingSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ContactSection from "@/components/contact/ContactSection";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main id="content" className="flex min-h-screen flex-col items-center">
      <LandingSection />

      <ScrollReveal direction="left" duration={1.2} offset={80}>
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal direction="right" duration={1.0} offset={60}>
        <SkillsSection />
      </ScrollReveal>

      <ScrollReveal direction="left" duration={1.0} offset={60}>
        <ExperienceSection />
      </ScrollReveal>

      <ScrollReveal direction="right" duration={1.2} offset={80}>
        <ProjectsSection />
      </ScrollReveal>

      <ScrollReveal direction="left" duration={1.0} offset={60}>
        <ContactSection />
      </ScrollReveal>
    </main>
  );
}
