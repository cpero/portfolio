"use client";

import { trackResumeDownload, type ResumeEventSource } from "@/lib/analytics";
import Link from "next/link";

type Props = {
  source?: ResumeEventSource;
  variant?: "primary" | "outline";
  children?: React.ReactNode;
};

export default function ResumeDownload({ source = "other", variant = "primary", children }: Props) {
  const className = variant === "primary" ? "btn btn-primary" : "btn btn-outline";

  return (
    <Link
      href="/resume/cody_pero_resume.pdf"
      className={className}
      download
      onClick={() => trackResumeDownload(source)}
    >
      {children ?? "Download Resume"}
    </Link>
  );
}
