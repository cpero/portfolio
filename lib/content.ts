import bioJson from "../content/bio.json";
import experienceJson from "../content/experience.json";
import skillsJson from "../content/skills.json";
import projectsJson from "../content/projects.json";

import { BioSchema, ExperienceSchema, SkillsSchema, ProjectsSchema } from "./schemas";

// Validate JSON content at import time so build fails fast on invalid content
export const bio = BioSchema.parse(bioJson);
export const experience = ExperienceSchema.parse(experienceJson);
export const skills = SkillsSchema.parse(skillsJson);
export const projects = ProjectsSchema.parse(projectsJson);

export type { Bio, Experience, Skills, Projects } from "./schemas";
