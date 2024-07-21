import { PaginatedResponse } from "@/types/paginatedResponse";
import { z } from "zod";
import { CategorySchema } from "./category";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
  image: z.string().url(),
  category: CategorySchema,
});

export type ProductSchemaInfer = z.infer<typeof ProductSchema>;
export type PaginatedProducts = PaginatedResponse<ProductSchemaInfer> & {
  _embedded: {
    productResponseList: ProductSchemaInfer[];
  };
};