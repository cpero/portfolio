import { skills } from "@/lib/content";
import type { SkillItem } from "@/lib/schemas";

function getBadgeClass(prof?: SkillItem["proficiency"]): string {
  switch (prof) {
    case "beginner":
      return "badge-ghost";
    case "intermediate":
      return "badge-neutral";
    case "advanced":
      return "badge-secondary";
    case "expert":
      return "badge-primary";
    default:
      return "";
  }
}

export default function SkillsMatrix() {
  const categories = [
    { key: "languages", label: "Languages", items: skills.categories.languages },
    { key: "frameworks", label: "Frameworks", items: skills.categories.frameworks },
    { key: "tooling", label: "Tooling", items: skills.categories.tooling },
    { key: "cloudDevOps", label: "Cloud & DevOps", items: skills.categories.cloudDevOps },
    { key: "testing", label: "Testing", items: skills.categories.testing },
    { key: "uiLibraries", label: "UI Libraries", items: skills.categories.uiLibraries },
  ] as const;

  const hasProficiency = categories.some((c) => c.items?.some((i) => i.proficiency) ?? false);

  return (
    <section id="skills" className="w-full scroll-mt-24 lg:scroll-mt-28">
      <div className="mx-auto max-w-6xl p-8">
        <h2 className="decoration-accent text-2xl font-bold tracking-tight underline underline-offset-4 sm:text-3xl">
          Skills
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories
            .filter((c) => (c.items?.length ?? 0) > 0)
            .map((category) => (
              <div key={category.key} className="card bg-base-200 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-base">{category.label}</h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {category.items?.map((item, index) => (
                      <li key={`${category.key}-${item.name}-${index}`}>
                        <span className={`badge ${getBadgeClass(item.proficiency)}`}>
                          {item.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
        {hasProficiency && (
          <div className="text-base-content/70 mt-4 text-sm">
            <span className="font-medium">Legend:</span> beginner = ghost, intermediate = neutral,
            advanced = secondary, expert = primary
          </div>
        )}
      </div>
    </section>
  );
}
