import { z } from "zod";

const loginSchema = z.object({
    name: z.string().max(127),
    password: z.string().max(255),
});

export default loginSchema;
