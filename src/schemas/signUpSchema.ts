import {z} from "zod"


export const signUpSchema = z.object({
    username: z.string()
                .min(2,{message:"username  should be 2 charecters"})
                .max(20,{message:"username must be no more then 20 charecters"})
                .regex(/^[a-zA-Z0-9_]+$/,{message:"Username must not contain special charecter"}),
    email:z.string()
           .email({message:"invalid email address"}),
    password:z.string()
               .min(6,{message:"password must be atlist 6 charecter"})
})