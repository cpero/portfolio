import { skills } from "@/lib/content";
import type { SkillItem } from "@/lib/schemas";
import {
  Code,
  Database,
  GitBranch,
  Globe,
  Server,
  TestTube,
  FileCode,
  Palette,
  Atom,
  Sparkles,
  Grid,
  Layers,
  ArrowRight,
  RefreshCw,
  Network,
  Leaf,
  Zap,
  Shield,
  Cloud,
  Package,
  Hammer,
  Rocket,
  Eye,
  BarChart3,
  Activity,
  AlertTriangle,
  Gem,
  LucideIcon,
  Coffee,
  Braces,
  Type,
  Flower,
} from "lucide-react";

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

function getSkillIcon(name: string): LucideIcon {
  const iconMap: Record<string, LucideIcon> = {
    Java: Coffee,
    JavaScript: Braces,
    TypeScript: Type,
    Ruby: Gem,
    Python: Flower,
    HTML: FileCode,
    CSS: Palette,
    React: Atom,
    "Tailwind CSS": Sparkles,
    Bootstrap: Grid,
    "Material UI": Layers,
    "Next.js": ArrowRight,
    "Ruby on Rails": Zap,
    SQL: Database,
    AJAX: RefreshCw,
    "Node.js": Server,
    PostgreSQL: Database,
    GraphQL: Network,
    "REST APIs": Globe,
    Cucumber: Leaf,
    RSpec: TestTube,
    Jest: Zap,
    Vitest: Zap,
    Playwright: TestTube,
    Cypress: Shield,
    Git: GitBranch,
    Vite: Zap,
    Heroku: Cloud,
    AWS: Cloud,
    Docker: Package,
    "Apache Maven": Hammer,
    Vercel: Rocket,
    FullStory: Eye,
    "Google Analytics": BarChart3,
    "Vercel Analytics": Activity,
    Sentry: AlertTriangle,
    "D3.js": BarChart3,
  };

  return iconMap[name] || Code;
}

export default function SkillsMatrix() {
  const categories = [
    { key: "languages", label: "Languages", items: skills.categories.languages },
    { key: "frontend", label: "Frontend", items: skills.categories.frontend },
    { key: "backend", label: "Backend", items: skills.categories.backend },
    { key: "testing", label: "Testing", items: skills.categories.testing },
    { key: "devOps", label: "DevOps", items: skills.categories.devOps },
    { key: "analytics", label: "Analytics", items: skills.categories.analytics },
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
              <div key={category.key}>
                <div className="card bg-base-200 h-full shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div className="card-body flex flex-col">
                    <h3 className="card-title text-base">{category.label}</h3>
                    <ul className="mt-2 flex flex-1 flex-wrap gap-3 sm:gap-4">
                      {category.items?.map((item, index) => {
                        const IconComponent = getSkillIcon(item.name);
                        return (
                          <li key={`${category.key}-${item.name}-${index}`} className="list-none">
                            <span
                              className={`badge ${getBadgeClass(
                                item.proficiency,
                              )} inline-flex items-center justify-start gap-2`}
                            >
                              <IconComponent size={18} className="flex-shrink-0" />
                              <span className="whitespace-nowrap">{item.name}</span>
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
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
