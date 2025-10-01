import {z} from "zod";

export const SCHEMA_FORM = z.object({
  name: z.string().min(2, "Minimum length: 2"),
  email: z.string().email("Format mail@mail.com"),
  phone: z.string().min(10, "Format +7 (999) 999 99 99"),
  role: z.string().min(1, "Role is required")
});