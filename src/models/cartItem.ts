import { z } from "zod";
import { ProductSchema } from "./product";

export const CartItemSchema = ProductSchema.extend({
  desiredQuantity: z.number(),
});

export type CartItem = z.infer<typeof CartItemSchema>;
