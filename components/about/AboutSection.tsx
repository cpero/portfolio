import Link from "next/link";
import { bio } from "@/lib/content";

export default function AboutSection() {
  return (
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
  );
}
