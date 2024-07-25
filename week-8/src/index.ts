import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(3).max(20),
  password: z.string().min(6).max(20),
  email: z.string().email(),
  phone: z.string().min(10).max(10),
  confirmPassword: z.string().min(6).max(20),
});

export type SignupSchema = z.infer<typeof signupSchema>;
