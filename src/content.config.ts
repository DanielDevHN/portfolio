import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

/**
 * Content lives in one YAML file per collection, with both languages side by
 * side inside each record.
 *
 * Keeping the translations in the same entry rather than in parallel folders
 * means a new service or case study cannot be added in Spanish and silently
 * forgotten in English: the schema requires both, so the build fails first.
 */

const serviceText = z.object({
  badge: z.string().optional(),
  title: z.string(),
  description: z.string(),
});

const services = defineCollection({
  loader: file('src/content/services.yaml'),
  schema: z.object({
    order: z.number().int().positive(),
    /** Lucide icon name, without the `lucide:` prefix. */
    icon: z.string(),
    /** Highlighted cards carry the accent wash and lead the grid. */
    highlight: z.boolean().default(false),
    /** Technology tags. Product names, so they are not translated. */
    chips: z.array(z.string()).min(1).max(4),
    es: serviceText,
    en: serviceText,
  }),
});

const experienceText = z.object({
  role: z.string(),
  bullets: z.array(z.string()).min(1),
});

const experience = defineCollection({
  loader: file('src/content/experience.yaml'),
  schema: z.object({
    order: z.number().int().positive(),
    company: z.string(),
    startYear: z.number().int(),
    /** Omitted while the role is ongoing. */
    endYear: z.number().int().optional(),
    current: z.boolean().default(false),
    es: experienceText,
    en: experienceText,
  }),
});

const caseStudyText = z.object({
  title: z.string(),
  description: z.string(),
  /** Stack line under the divider. */
  tech: z.string(),
});

const caseStudies = defineCollection({
  loader: file('src/content/case-studies.yaml'),
  schema: z.object({
    order: z.number().int().positive(),
    icon: z.string(),
    organization: z.string(),
    es: caseStudyText,
    en: caseStudyText,
  }),
});

const educationText = z.object({
  degree: z.string(),
  institution: z.string(),
});

const education = defineCollection({
  loader: file('src/content/education.yaml'),
  schema: z
    .object({
      order: z.number().int().positive(),
      startYear: z.number().int().optional(),
      endYear: z.number().int(),
      /** Renders as "In progress · <endYear>" instead of a year range. */
      inProgress: z.boolean().default(false),
      es: educationText,
      en: educationText,
    })
    .refine((entry) => entry.inProgress || entry.startYear !== undefined, {
      message: 'Completed studies must declare a startYear',
      path: ['startYear'],
    }),
});

export const collections = { services, experience, caseStudies, education };
