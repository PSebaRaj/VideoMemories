import { object, string, TypeOf } from "zod";

export const registerUserSchema = {
    body: object({
        username: string({
            required_error: "Username required",
        }),
        email: string({
            required_error: "Email required",
        }).email("Not a valid email"),
        password: string({
            // password length >=6, <=64
            required_error: "Password required",
        })
            .min(6, "Password must be at least 6 characters long")
            .max(64, "Password should not be longer than 64 characterse"),
        confirmPassword: string({
            required_error: "Enter password twice",
        }),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Password does not match",
        path: ["confirmPassword"],
    }),
};

export type RegisterUserBody = TypeOf<typeof registerUserSchema.body>;
