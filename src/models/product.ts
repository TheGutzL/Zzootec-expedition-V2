import { z } from "zod";
import { CategorySchema } from "./category";


export const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
  image: z.string().url(),
  category: CategorySchema
})

export type ProductSchemaInfer = z.infer<typeof productSchema>;