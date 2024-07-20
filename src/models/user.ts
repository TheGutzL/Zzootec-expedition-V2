import { z } from "zod";
import { AddressSchema } from "./address";
import { RoleSchema } from "./role";

export const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  address: AddressSchema,
  isEnabled: z.boolean(),
  accountNoExpired: z.boolean(),
  accountNoLocked: z.boolean(),
  credentialNoExpired: z.boolean(),
  roles: z.array(RoleSchema),
});

export type UserSchemaInfer = z.infer<typeof UserSchema>;
