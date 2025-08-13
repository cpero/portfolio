import Image from "next/image";
import dynamic from "next/dynamic";
import LandingSection from "@/components/landing/LandingSection";
import AboutSection from "@/components/about/AboutSection";
import SkillsSection from "@/components/skills/SkillsSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ContactSection from "@/components/contact/ContactSection";

const SkillsMatrix = dynamic(() => import("@/components/skills/SkillsMatrix"), {
  loading: () => (
    <section id="skills" className="w-full">
      <div className="mx-auto max-w-6xl p-8" aria-busy="true" aria-live="polite">
        Loading skills…
      </div>
    </section>
  ),
});

const ExperienceTimeline = dynamic(() => import("@/components/experience/ExperienceTimeline"), {
  loading: () => (
    <section id="experience" className="w-full">
      <div className="mx-auto max-w-6xl p-8" aria-busy="true" aria-live="polite">
        Loading experience…
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <main id="content" className="flex min-h-screen flex-col items-center">
      <LandingSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </main>
  );
}
