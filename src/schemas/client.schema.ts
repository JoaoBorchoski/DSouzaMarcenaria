import { z } from "zod";

const createClientSchema = z.object({
    name: z.string().max(127),
    email: z.string().email().max(127),
    address: z.string().max(255),
    phone: z.string().max(255),
});

const returnClientSchema = createClientSchema.extend({
    id: z.number(),
});

const returnClientMultiplesSchema = returnClientSchema.array();

const updateClientSchema = createClientSchema.partial();

export {
    createClientSchema,
    returnClientSchema,
    returnClientMultiplesSchema,
    updateClientSchema,
};
