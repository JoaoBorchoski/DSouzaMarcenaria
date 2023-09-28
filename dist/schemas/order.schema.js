"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnOrderMultiplesSchema = exports.updateOrderSchema = exports.returnOrderSchema = exports.createOrderSchema = void 0;
const zod_1 = require("zod");
const createOrderSchema = zod_1.z.object({
    name: zod_1.z.string().max(127),
    description: zod_1.z.string(),
    price: zod_1.z.string(),
    delivery_date: zod_1.z.string(),
    payment_deadline: zod_1.z.string(),
    is_finished: zod_1.z.boolean().default(false),
    client: zod_1.z.string(),
});
exports.createOrderSchema = createOrderSchema;
const returnOrderSchema = createOrderSchema.extend({
    id: zod_1.z.number(),
    order_date: zod_1.z.string(),
    client: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        email: zod_1.z.string().email().max(127),
        address: zod_1.z.string().max(255),
        phone: zod_1.z.string().max(255),
    }),
});
exports.returnOrderSchema = returnOrderSchema;
const updateOrderSchema = zod_1.z.object({
    is_finished: zod_1.z.boolean(),
});
exports.updateOrderSchema = updateOrderSchema;
const returnOrderMultiplesSchema = returnOrderSchema.array();
exports.returnOrderMultiplesSchema = returnOrderMultiplesSchema;
