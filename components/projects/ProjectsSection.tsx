import { projects } from "@/lib/content";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full scroll-mt-24 lg:scroll-mt-28">
      <div className="mx-auto mb-16 max-w-6xl p-8">
        <h2 className="decoration-accent text-2xl font-bold tracking-tight underline underline-offset-4 sm:text-3xl">
          Projects
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.projects.slice().map((proj) => (
            <ProjectCard key={proj.id ?? `${proj.title}`} project={proj} />
          ))}
        </div>
      </div>
    </section>
  );
}
