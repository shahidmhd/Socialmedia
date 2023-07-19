import { z} from "zod"

export const userRegisterSchema = z.object({

    name:z.string({required_error:"please enter name"})
    .min(3,{message:"name must be atleast 3 characters"})
    .trim(),

    userName:z.string({required_error:"please enter name"})
    .min(3,{message:"First name must be atleast 3 characters"})
    .trim(),


    email: z.string({required_error:"please enter valid email"})
    .trim().
    toLowerCase().
    email({message:"please provide valide email"})
    .refine(val => val.endsWith("@gmail.com"),{
        message:"email must be end with @gmail.com"
    }),
    number: z
    .number({ required_error: "Please enter a phone number" })
    .refine((val) => /^\d{10}$/.test(String(val)), {
      message: "Please provide a valid 10-digit phone number",
    }),

    password:z.string({required_error:"please provid password"})
    .trim()
    .min(5,{message:"Password must be atleast 5 characters"})
    .max(15,{message:"assword must be less than 15 characters"})

})
.strict()

export type UserRegisterType = z.infer<typeof userRegisterSchema>