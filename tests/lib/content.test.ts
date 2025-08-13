import { describe, it, expect } from "vitest";
import {
  BioSchema,
  ExperienceSchema,
  EducationSchema,
  SkillsSchema,
  ProjectsSchema,
  InterestsSchema,
} from "../../lib/schemas";
import { bio, experience, education, skills, projects, interests } from "../../lib/content";

describe("content schemas", () => {
  it("bio.json conforms to BioSchema", () => {
    expect(() => BioSchema.parse(bio)).not.toThrow();
  });

  it("experience.json conforms to ExperienceSchema", () => {
    expect(() => ExperienceSchema.parse(experience)).not.toThrow();
  });

  it("education.json conforms to EducationSchema", () => {
    expect(() => EducationSchema.parse(education)).not.toThrow();
  });

  it("skills.json conforms to SkillsSchema", () => {
    expect(() => SkillsSchema.parse(skills)).not.toThrow();
  });

  it("projects.json conforms to ProjectsSchema", () => {
    expect(() => ProjectsSchema.parse(projects)).not.toThrow();
  });

  it("interests.json conforms to InterestsSchema", () => {
    expect(() => InterestsSchema.parse(interests)).not.toThrow();
  });

  it("invalid project id should fail slug regex", () => {
    const invalid = {
      projects: [
        {
          id: "Invalid Slug!",
          title: "t",
          summary: "s",
        },
      ],
    };
    const result = ProjectsSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });
});
