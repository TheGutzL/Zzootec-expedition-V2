import { z } from "zod";

export const loginResponseSchema = z.object({
  username: z.string(),
  message: z.string(),
  jwt: z.string(),
  status: z.boolean(),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;
