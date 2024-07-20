import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(2, "El usuario debe tener más de 2 caracteres")
    .max(50),
  password: z
    .string()
    .min(2, "El password debe tener más de 2 caracteres")
    .max(50),
});

export type LoginSchemaInfer = z.infer<typeof loginSchema>;
