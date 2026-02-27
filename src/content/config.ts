import { defineCollection, z } from 'astro:content';

const speakersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string().optional(),
    bio: z.string(),
    image: z.string().optional(),
    linkedin: z.string().optional(),
    twitter: z.string().optional(),
    github: z.string().optional(),
    website: z.string().optional(),
    isOrganizer: z.boolean().default(false),
    sessionizeId: z.string().optional(),
    presentations: z.array(z.object({
      title: z.string(),
      url: z.string(),
      event: z.string().optional(),
      date: z.coerce.date().optional(),
    })).default([]),
  }),
});

export const collections = {
  speakers: speakersCollection,
};
