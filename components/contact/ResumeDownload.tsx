"use client";

import Link from "next/link";

type Props = {
  children?: React.ReactNode;
};

export default function ResumeDownload({ children }: Props) {
  return (
    <Link
      href="/resume/cody_pero_resume.pdf"
      className="btn btn-secondary text-secondary-content"
      download
    >
      {children ?? "Download Resume"}
    </Link>
  );
}
