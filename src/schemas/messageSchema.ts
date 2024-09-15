import {z} from "zod";

export const messageSchema = z.object({
    content:z
            .string()
            .min(10,{message:"Content must be at least 20 charcters"})
            .max(300,{message:"Content must be no longer 300 charcters"})
})

