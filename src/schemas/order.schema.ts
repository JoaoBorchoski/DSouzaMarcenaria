import { z } from "zod";

const createOrderSchema = z.object({
    name: z.string().max(127),
    description: z.string(),
    price: z.string(),
    delivery_date: z.string(),
    payment_deadline: z.string(),
    is_finished: z.boolean().default(false),
    client: z.string(),
});

const returnOrderSchema = createOrderSchema.extend({
    id: z.number(),
    order_date: z.string(),
    client: z.object({
        id: z.number(),
        name: z.string(),
        email: z.string().email().max(127),
        address: z.string().max(255),
        phone: z.string().max(255),
    }),
});

const returnOrderMultiplesSchema = returnOrderSchema.array();

export { createOrderSchema, returnOrderSchema, returnOrderMultiplesSchema };
