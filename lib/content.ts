import bioJson from "../content/bio.json";
import experienceJson from "../content/experience.json";
import educationJson from "../content/education.json";
import skillsJson from "../content/skills.json";
import projectsJson from "../content/projects.json";
import interestsJson from "../content/interests.json";

import {
  BioSchema,
  ExperienceSchema,
  EducationSchema,
  SkillsSchema,
  ProjectsSchema,
  InterestsSchema,
} from "./schemas";

// Validate JSON content at import time so build fails fast on invalid content
export const bio = BioSchema.parse(bioJson);
export const experience = ExperienceSchema.parse(experienceJson);
export const education = EducationSchema.parse(educationJson);
export const skills = SkillsSchema.parse(skillsJson);
export const projects = ProjectsSchema.parse(projectsJson);
export const interests = InterestsSchema.parse(interestsJson);

export type { Bio, Experience, Education, Skills, Projects, Interests } from "./schemas";
