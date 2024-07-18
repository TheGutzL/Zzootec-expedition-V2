import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(2),
});

export type LoginSchemaInfer = z.infer<typeof loginSchema>;