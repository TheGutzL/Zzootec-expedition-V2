import { z } from "zod";

export const AddressSchema = z.object({
  addressId: z.number(),
  street: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.string(),
});

export type AddressSchemaInfer = z.infer<typeof AddressSchema>;
