import { experience } from "@/lib/content";
import StaggeredReveal, { StaggeredItem } from "@/components/StaggeredReveal";

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

function formatPeriod(start: string, end?: string): string {
  const startText = formatYearMonth(start);
  const endText = end === "present" || !end ? "Present" : formatYearMonth(end);
  return `${startText} — ${endText}`;
}

export default function ExperienceTimeline() {
  const positions = experience.positions;

  return (
    <section id="experience" className="mb-16 w-full scroll-mt-24 lg:scroll-mt-28">
      <div className="mx-auto max-w-6xl p-8">
        <h2 className="decoration-accent text-2xl font-bold tracking-tight underline underline-offset-4 sm:text-3xl">
          Experience
        </h2>

        <StaggeredReveal className="mt-6 space-y-6" staggerDelay={0.2}>
          {positions.map((pos) => (
            <StaggeredItem key={pos.id ?? `${pos.company}-${pos.title}-${pos.period.start}`}>
              <li className="border-base-300 relative border-l-2 pl-6">
                <div
                  className="bg-primary absolute top-2 left-[-7px] h-3 w-3 rounded-full"
                  aria-hidden
                />
                <div className="card bg-base-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="card-body">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="card-title text-base sm:text-lg">
                        {pos.title} — {pos.company}
                      </h3>
                      <time className="text-base-content/70 text-sm">
                        {formatPeriod(pos.period.start, pos.period.end as string | undefined)}
                      </time>
                    </div>
                    {pos.companyDescription && (
                      <p className="text-base-content/70 text-sm">{pos.companyDescription}</p>
                    )}
                    {pos.highlights && pos.highlights.length > 0 && (
                      <ul className="mt-3 list-inside list-disc space-y-2 text-sm sm:text-base">
                        {pos.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                    {pos.stack && pos.stack.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {pos.stack.map((tech, index) => (
                          <span key={`${tech}-${index}`} className="badge badge-outline">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </StaggeredItem>
          ))}
        </StaggeredReveal>
      </div>
    </section>
  );
}
