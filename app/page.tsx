import Image from "next/image";
import headshot from "@/public/headshot.png";
import { bio, projects } from "@/lib/content";
import ResumeDownload from "@/components/ResumeDownload";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import dynamic from "next/dynamic";

const SkillsMatrix = dynamic(() => import("@/components/SkillsMatrix"), {
  loading: () => (
    <section id="skills" className="w-full">
      <div className="mx-auto max-w-6xl p-8" aria-busy="true" aria-live="polite">
        Loading skills…
      </div>
    </section>
  ),
});

const ExperienceTimeline = dynamic(() => import("@/components/ExperienceTimeline"), {
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
      <section id="hero" className="hero bg-base-100 w-full">
        <div className="hero-content max-w-6xl flex-col-reverse items-center gap-10 p-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{bio.name}</h1>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <ResumeDownload source="hero">Download Resume</ResumeDownload>
              <Link
                href="/resume/cody_pero_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                View Resume
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <div className="mask mask-squircle border-base-300 relative aspect-[4/5] w-48 border shadow-xl sm:w-56 lg:w-64">
              <Image
                src={headshot}
                alt={`Portrait of ${bio.name}`}
                priority
                fill
                className="object-cover object-[50%_20%]"
                sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 12rem"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="w-full">
        <div className="mx-auto max-w-6xl p-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">About</h2>
          {bio.summary && (
            <div className="text-base-content/80 mt-4 space-y-4 text-lg leading-relaxed">
              {bio.summary.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          )}
          <div className="mt-6 grid gap-2 text-base">
            {bio.location && (
              <p>
                <span className="font-medium">Location:</span> {bio.location}
              </p>
            )}
            {bio.email && (
              <p>
                <span className="font-medium">Email:</span>{" "}
                <Link className="link" href={`mailto:${bio.email}`}>
                  {bio.email}
                </Link>
              </p>
            )}
          </div>
        </div>
      </section>
      <SkillsMatrix />
      <ExperienceTimeline />
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
      <section id="resume" className="w-full">
        <div className="mx-auto max-w-6xl p-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Resume</h2>
          <p className="text-base-content/80 mt-4 text-lg">
            Download a concise PDF resume or view it in your browser. Highlights reflect recent work
            across education, fintech, and enterprise.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ResumeDownload source="resume-section" />
            <Link
              href="/resume/cody_pero_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>
      <section id="contact" className="w-full">
        <div className="mx-auto max-w-6xl p-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Contact</h2>
          <p className="text-base-content/80 mt-4 text-lg">
            Reach out via email or connect on the platforms below.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {bio.email && (
              <Link href={`mailto:${bio.email}`} className="btn btn-primary">
                Email Me
              </Link>
            )}
            {bio.socialLinks && bio.socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-3">
                {bio.socialLinks.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    aria-label={link.title ?? link.platform}
                  >
                    {link.title ?? link.platform}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
