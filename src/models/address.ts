import { z } from "zod";

export const AddressSchema = z.object({
  street: z.string(),
  houseNumber: z.string(),
  zipCode: z.string(),
});

export type AddressSchemaInfer = z.infer<typeof AddressSchema>;
