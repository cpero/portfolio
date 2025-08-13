import Image from "next/image";
import Link from "next/link";
import type { Project, ProjectImage, ProjectLink } from "@/lib/schemas";

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
    <div className="border-base-300 relative overflow-hidden rounded-lg border">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-auto w-full object-cover"
        sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
}

function renderLink(link: ProjectLink, index: number) {
  const label = link.title ?? (link.type ? link.type : "link");
  const isExternal = /^https?:\/\//.test(link.url);
  return (
    <Link
      key={`${label}-${index}`}
      href={link.url}
      className="btn btn-sm"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {label}
    </Link>
  );
}

export default function ProjectCard({ project, className }: Props) {
  const period = formatPeriod(project.dates?.start, project.dates?.end);
  return (
    <article className={`card bg-base-200 shadow-sm ${className ?? ""}`}>
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

        {(project.links?.length ?? 0) > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.links?.map((lnk, i) => renderLink(lnk, i))}
          </div>
        )}
      </div>
    </article>
  );
}
