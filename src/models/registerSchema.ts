import { z } from "zod";

export const signupSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
});

export type SignupSchemaInfer = z.infer<typeof signupSchema>;