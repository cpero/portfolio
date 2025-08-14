"use client";

import { trackResumeDownload, type ResumeEventSource } from "@/lib/analytics";
import Link from "next/link";

type Props = {
  source?: ResumeEventSource;
  children?: React.ReactNode;
};

export default function ResumeDownload({ source = "other", children }: Props) {
  return (
    <Link
      href="/resume/cody_pero_resume.pdf"
      className="btn btn-secondary text-secondary-content"
      download
      onClick={() => trackResumeDownload(source)}
    >
      {children ?? "Download Resume"}
    </Link>
  );
}
