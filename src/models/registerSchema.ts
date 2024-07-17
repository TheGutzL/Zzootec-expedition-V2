import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(),
});
