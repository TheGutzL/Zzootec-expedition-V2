import { z } from "zod";

export const AddressSchema = z.object({
  street: z.string(),
  houseNumber: z.string(),
  zipCode: z.string(),
});

export const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  address: AddressSchema,
});

export type UserSchemaInfer = z.infer<typeof UserSchema>;