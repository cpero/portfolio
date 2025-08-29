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
  summary: z.string().optional(),
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

// Skills
export const SkillItemSchema = z.object({
  name: z.string(),
  proficiency: z.enum(["beginner", "intermediate", "advanced", "expert"]).optional(),
});

export const SkillsSchema = z.object({
  categories: z.object({
    languages: z.array(SkillItemSchema).optional(),
    frontend: z.array(SkillItemSchema).optional(),
    backend: z.array(SkillItemSchema).optional(),
    testing: z.array(SkillItemSchema).optional(),
    devOps: z.array(SkillItemSchema).optional(),
    analytics: z.array(SkillItemSchema).optional(),
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
  details: z.string().optional(),
  experienceRef: z.string().optional(),
  tags: z.array(z.string()).optional(),
  stack: z.array(z.string()).optional(),
  link: ProjectLinkSchema.optional(),
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

export type Bio = z.infer<typeof BioSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Skills = z.infer<typeof SkillsSchema>;
export type Projects = z.infer<typeof ProjectsSchema>;
export type Contact = z.infer<typeof ContactSchema>;

// Inferred types for nested and item-level schemas for UI usage
export type SocialLink = z.infer<typeof SocialLinkSchema>;
export type ExperiencePosition = z.infer<typeof ExperiencePositionSchema>;
export type SkillItem = z.infer<typeof SkillItemSchema>;
export type ProjectLink = z.infer<typeof ProjectLinkSchema>;
export type ProjectImage = z.infer<typeof ProjectImageSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type ContactForm = z.infer<typeof ContactFormSchema>;
