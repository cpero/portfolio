import Image from "next/image";
import headshot from "@/public/headshot.png";
import { bio } from "@/lib/content";
import SkillsMatrix from "@/components/SkillsMatrix";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ResumeDownload from "@/components/ResumeDownload";
import Link from "next/link";

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
        <div className="mx-auto max-w-4xl p-8">
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
      <section id="resume" className="w-full">
        <div className="mx-auto max-w-4xl p-8">
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
    </main>
  );
}
