import { z } from "zod";
export declare const signupSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    email: string;
    phone: string;
    confirmPassword: string;
}, {
    username: string;
    password: string;
    email: string;
    phone: string;
    confirmPassword: string;
}>;
export type SignupSchema = z.infer<typeof signupSchema>;
