import { z } from "zod";

export const RolePermissionSchema = z.enum([
  "READ",
  "DELETE",
  "CREATE",
  "REFACTOR",
  "UPDATE",
]);

export const RoleSchema = z.object({
  id: z.number(),
  roleName: z.string(),
  permissions: z.array(RolePermissionSchema),
});

export type RoleSchemaInfer = z.infer<typeof RoleSchema>;