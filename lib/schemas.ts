import { z } from "zod";

// Bio
export const SocialLinkSchema = z.object({
  platform: z.enum(["linkedin", "github", "email"]),
  title: z.string().optional(),
  url: z.url(),
});

export const BioSchema = z.object({
  name: z.string(),
  email: z.email().optional(),
  location: z.string().optional(),
  summary: z.array(z.string()).max(5).optional(),
  socialLinks: z.array(SocialLinkSchema).optional(),
});

// Experience
export const ExperiencePositionSchema = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .optional(),
  title: z.string(),
  company: z.string(),
  companyDescription: z.string().optional(),
  industries: z.array(z.string()).optional(),
  period: z.object({
    start: z.string().regex(/^\d{4}-\d{2}$/),
    end: z.union([z.string().regex(/^\d{4}-\d{2}$/), z.literal("present")]).optional(),
  }),
  location: z.string().optional(),
  employmentType: z.literal("full-time"),
  stack: z.array(z.string()).optional(),
  highlights: z.array(z.string()).optional(),
  achievements: z.array(z.string()).optional(),
});

export const ExperienceSchema = z.object({
  positions: z.array(ExperiencePositionSchema),
});

// Education
export const EducationSchoolSchema = z.object({
  institution: z.string(),
  degreeType: z.string(),
  fieldOfStudy: z.string(),
  gpa: z.number().min(0).max(4).optional(),
  period: z.object({
    start: z.string().regex(/^\d{4}-\d{2}$/),
    end: z.string().regex(/^\d{4}-\d{2}$/),
  }),
  activities: z.array(z.string()).optional(),
});

export const EducationSchema = z.object({
  schools: z.array(EducationSchoolSchema),
});

// Skills
export const SkillItemSchema = z.object({
  name: z.string(),
  proficiency: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
});

export const SkillsSchema = z.object({
  categories: z.object({
    languages: z.array(SkillItemSchema).optional(),
    frameworks: z.array(SkillItemSchema).optional(),
    tooling: z.array(SkillItemSchema).optional(),
    cloudDevOps: z.array(SkillItemSchema).optional(),
    testing: z.array(SkillItemSchema).optional(),
    uiLibraries: z.array(SkillItemSchema).optional(),
  }),
});

// Projects
export const ProjectLinkSchema = z.object({
  type: z.enum(["code", "demo", "docs", "live", "repo", "other"]).optional(),
  title: z.string().optional(),
  url: z.url(),
});

export const ProjectImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const ProjectSchema = z.object({
  id: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    .optional(),
  title: z.string(),
  summary: z.string(),
  details: z.string().optional(),
  experienceRef: z.string().optional(),
  tags: z.array(z.string()).optional(),
  stack: z.array(z.string()).optional(),
  links: z.array(ProjectLinkSchema).optional(),
  images: z.array(ProjectImageSchema).optional(),
  dates: z
    .object({
      start: z
        .string()
        .regex(/^\d{4}-\d{2}$/)
        .optional(),
      end: z
        .string()
        .regex(/^\d{4}-\d{2}$/)
        .optional(),
    })
    .optional(),
  order: z.number().int().optional(),
});

export const ProjectsSchema = z.object({
  projects: z.array(ProjectSchema),
});

// Contact
export const ContactFormSchema = z.object({
  requiredFields: z.array(z.enum(["name", "email", "message"]).optional()).optional(),
  minMessageLength: z.number().int().min(1).default(1).optional(),
});

export const ContactSchema = z.object({
  emailRecipient: z.email(),
  mailtoFallback: z.url().optional(),
  form: ContactFormSchema.optional(),
});

// Interests
export const InterestsSchema = z.object({
  interests: z.array(z.string()),
});

export type Bio = z.infer<typeof BioSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Skills = z.infer<typeof SkillsSchema>;
export type Projects = z.infer<typeof ProjectsSchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Interests = z.infer<typeof InterestsSchema>;

// Inferred types for nested and item-level schemas for UI usage
export type SocialLink = z.infer<typeof SocialLinkSchema>;
export type ExperiencePosition = z.infer<typeof ExperiencePositionSchema>;
export type EducationSchool = z.infer<typeof EducationSchoolSchema>;
export type SkillItem = z.infer<typeof SkillItemSchema>;
export type ProjectLink = z.infer<typeof ProjectLinkSchema>;
export type ProjectImage = z.infer<typeof ProjectImageSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type ContactForm = z.infer<typeof ContactFormSchema>;
