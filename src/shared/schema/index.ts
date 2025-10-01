import {z} from "zod";

const phoneRegex = new RegExp(
  /^(\+|)(7|8)( |)\d{3}( |)\d{3}( |)(\d{2}( |)){2}$/
);

export const SCHEMA_FORM = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Format mail@mail.com"),
  phone: z.string().regex(phoneRegex, "Format 8(999)-999-99-99 or +7(999)-999-99-99"),
  role: z.string().min(1, "Role is required")
});