import { projects } from "@/lib/content";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full">
      <div className="mx-auto max-w-6xl p-8">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.projects
            .slice()
            .sort((a, b) => (a.order ?? 9999) - (b.order ?? 9999))
            .map((proj) => (
              <ProjectCard key={proj.id ?? `${proj.title}-${proj.order ?? 0}`} project={proj} />
            ))}
        </div>
      </div>
    </section>
  );
}
