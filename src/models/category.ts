import { PaginatedResponse } from "@/types/paginatedResponse";
import { z } from "zod";

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
})

export type CategorySchemaInfer = z.infer<typeof CategorySchema>;
export type PaginatedCategories = PaginatedResponse<CategorySchemaInfer> & {
  _embedded: {
    categoryResponseList: CategorySchemaInfer[];
  };
}