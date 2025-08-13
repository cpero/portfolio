import Link from "next/link";
import ResumeDownload from "@/components/resume/ResumeDownload";

export default function ResumeSection() {
  return (
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
  );
}
