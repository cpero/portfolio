import { bio } from "@/lib/content";

export default function AboutSection() {
  return (
    <section id="about" className="mb-16 w-full scroll-mt-24 lg:scroll-mt-28">
      <div className="mx-auto max-w-6xl p-8">
        <h2 className="decoration-accent text-4xl font-bold tracking-tight underline underline-offset-4">
          About
        </h2>
        {bio.summary && (
          <div className="text-base-content/80 mt-4 space-y-4 text-lg leading-relaxed">
            <p>{bio.summary}</p>
          </div>
        )}
        <div className="mt-6 grid gap-2 text-base">
          {bio.location && (
            <p>
              <span className="font-medium">Location:</span> {bio.location}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
