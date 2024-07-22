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

export const ProductRequestSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
  image: z.string().url(),
  categoryId: z.number(),
});

export type ProductSchemaInfer = z.infer<typeof ProductSchema>;
export type ProductRequestSchemaInfer = z.infer<typeof ProductRequestSchema>;
export type PaginatedProducts = PaginatedResponse<ProductSchemaInfer> & {
  _embedded: {
    productResponseList: ProductSchemaInfer[];
  };
};
