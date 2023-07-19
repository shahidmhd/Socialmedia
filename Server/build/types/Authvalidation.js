"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegisterSchema = void 0;
const zod_1 = require("zod");
exports.userRegisterSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "please enter name" })
        .min(3, { message: "name must be atleast 3 characters" })
        .trim(),
    userName: zod_1.z.string({ required_error: "please enter name" })
        .min(3, { message: "First name must be atleast 3 characters" })
        .trim(),
    email: zod_1.z.string({ required_error: "please enter valid email" })
        .trim().
        toLowerCase().
        email({ message: "please provide valide email" })
        .refine(val => val.endsWith("@gmail.com"), {
        message: "email must be end with @gmail.com"
    }),
    number: zod_1.z
        .number({ required_error: "Please enter a phone number" })
        .refine((val) => /^\d{10}$/.test(String(val)), {
        message: "Please provide a valid 10-digit phone number",
    }),
    password: zod_1.z.string({ required_error: "please provid password" })
        .trim()
        .min(5, { message: "Password must be atleast 5 characters" })
        .max(15, { message: "assword must be less than 15 characters" })
})
    .strict();
