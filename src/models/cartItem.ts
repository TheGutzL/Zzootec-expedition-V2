import { z } from "zod";
import { ProductSchema } from "./product";

const CartItemSchem = ProductSchema.extend({
  desiredQuantity: z.number(),
});

export type CartItem = z.infer<typeof CartItemSchem>;
