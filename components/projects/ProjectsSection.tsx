import { projects } from "@/lib/content";
import ProjectCard from "@/components/projects/ProjectCard";
import StaggeredReveal, { StaggeredItem } from "@/components/StaggeredReveal";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full scroll-mt-24 lg:scroll-mt-28">
      <div className="mx-auto mb-16 max-w-6xl p-8">
        <h2 className="decoration-accent text-2xl font-bold tracking-tight underline underline-offset-4 sm:text-3xl">
          Projects
        </h2>

        <StaggeredReveal
          className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.15}
        >
          {projects.projects.slice().map((proj) => (
            <StaggeredItem key={proj.id ?? `${proj.title}`}>
              <ProjectCard project={proj} />
            </StaggeredItem>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  );
}
