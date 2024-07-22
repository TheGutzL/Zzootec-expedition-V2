import { z } from "zod";
import { AddressSchema } from "./address";
import { ProductSchema } from "./product";
import { UserSchema } from "./user";
import { PaginatedResponse } from "@/types/paginatedResponse";

export const OrderStatusSchema = z.enum([
  "PENDING",
  "PROCESSING",
  "COMPLETED",
  "FAILED",
  "CANCELLED",
  "SHIPPED",
  "DELIVERED",
]);

export const OrderSchema = z.object({
  orderId: z.number(),
  total: z.number(),
  status: OrderStatusSchema,
  user: UserSchema,
  shippingAddress: AddressSchema,
  createdAt: z.string(),
});

export const OrderDetailSchema = z.object({
  id: z.number(),
  orderId: z.number(),
  product: ProductSchema,
  quantity: z.number(),
  subtotal: z.number(),
});

export type OrderSchemaInfer = z.infer<typeof OrderSchema>;

export type OrderDetailSchemaInfer = z.infer<typeof OrderDetailSchema>;

export type PaginatedOrders = PaginatedResponse<OrderSchemaInfer> & {
  _embedded: {
    orderResponseList: OrderSchemaInfer[];
  };
};
