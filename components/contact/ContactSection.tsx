import Link from "next/link";
import { bio } from "@/lib/content";
import ResumeDownload from "@/components/contact/ResumeDownload";
import * as motion from "motion/react-client";

export default function ContactSection() {
  return (
    <section id="contact" className="mb-12 w-full scroll-mt-24 lg:scroll-mt-28">
      <div className="mx-auto max-w-6xl p-8">
        <h2 className="decoration-accent text-2xl font-bold tracking-tight underline underline-offset-4 sm:text-3xl">
          Contact
        </h2>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="card bg-base-200 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <div className="card-body">
              <p className="text-base-content/80 mb-4 text-lg">
                Reach out via email or connect on the platforms below. You can also grab my resume
                here.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                {bio.email && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href={`mailto:${bio.email}`} className="btn btn-primary">
                      Email Me
                    </Link>
                  </motion.div>
                )}

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <ResumeDownload />
                </motion.div>

                {bio.socialLinks && bio.socialLinks.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {bio.socialLinks.map((link) => (
                      <motion.div
                        key={link.url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline"
                          aria-label={link.title ?? link.platform}
                        >
                          {link.title ?? link.platform}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
