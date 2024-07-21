import { z } from "zod";
import { OrderStatusSchema } from "../order";


export const ProductOrderDto = z.object({
  productId: z.number(),
  quantity: z.number()
});

export const CreateOrderDto = z.object({
  userId: z.number(),
  status: OrderStatusSchema,
  shippingAddressId: z.number(),
  products: z.array(ProductOrderDto),
})

export type ProductOrderDtoInfer = z.infer<typeof ProductOrderDto>;
export type CreateOrderDtoInfer = z.infer<typeof CreateOrderDto>;