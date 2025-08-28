import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import type { Project, ProjectImage } from "@/lib/schemas";

function formatYearMonth(value: string): string {
  const [year, month] = value.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = Math.max(0, Math.min(11, Number(month) - 1));
  return `${monthNames[monthIndex]} ${year}`;
}

function formatPeriod(start?: string, end?: string): string | undefined {
  if (!start && !end) return undefined;
  const startText = start ? formatYearMonth(start) : undefined;
  const endText = end ? formatYearMonth(end) : undefined;
  if (startText && endText) return `${startText} — ${endText}`;
  return startText ?? endText ?? undefined;
}

type Props = {
  project: Project;
  className?: string;
};

function renderImage(image: ProjectImage) {
  return (
    <motion.div
      className="border-base-300 relative overflow-hidden rounded-lg border"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-auto w-full object-cover"
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
      />
    </motion.div>
  );
}

export default function ProjectCard({ project, className }: Props) {
  const period = formatPeriod(project.dates?.start, project.dates?.end);
  return (
    <motion.article
      className={`card bg-base-200 shadow-sm transition-shadow duration-300 hover:shadow-lg ${className ?? ""}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="card-body">
        <div className="flex flex-col flex-wrap items-baseline justify-between gap-2">
          <h3 className="card-title text-base sm:text-lg">{project.title}</h3>
          {period && <time className="text-base-content/70 text-sm">{period}</time>}
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mt-2">{renderImage(project.images[0])}</div>
        )}

        {project.details && (
          <p className="text-base-content/70 mt-2 text-sm sm:text-base">{project.details}</p>
        )}

        {(project.tags?.length ?? 0) > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags?.map((tag, index) => (
              <span key={`${tag}-${index}`} className="badge badge-ghost">
                {tag}
              </span>
            ))}
          </div>
        )}

        {(project.stack?.length ?? 0) > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack?.map((tech, index) => (
              <span key={`${tech}-${index}`} className="badge badge-outline">
                {tech}
              </span>
            ))}
          </div>
        )}

        {project.link?.url && (
          <div className="mt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={project.link.url}
                target={/^https?:\/\//.test(project.link.url) ? "_blank" : undefined}
                rel={/^https?:\/\//.test(project.link.url) ? "noopener noreferrer" : undefined}
                className="btn btn-sm bg-primary gap-sec"
              >
                <Image src="/logos/github_logo.png" alt="Github Logo" width={16} height={16} />
                <span className="text-primary-content">view it here</span>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
