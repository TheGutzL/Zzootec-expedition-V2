import { z } from "zod";

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
})

export type CategorySchemaInfer = z.infer<typeof CategorySchema>;