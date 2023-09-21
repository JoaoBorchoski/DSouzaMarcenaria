import { z } from "zod";

const createUserSchema = z.object({
    name: z.string().max(127),
    email: z.string().email().max(127),
    password: z.string().max(255),
});

const returnUserSchema = createUserSchema
    .extend({
        id: z.number(),
    })
    .omit({ password: true });

const updateUserSchema = createUserSchema.partial();

export { createUserSchema, returnUserSchema, updateUserSchema };
