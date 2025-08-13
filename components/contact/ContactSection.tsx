import Link from "next/link";
import { bio } from "@/lib/content";

export default function ContactSection() {
  return (
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
  );
}
