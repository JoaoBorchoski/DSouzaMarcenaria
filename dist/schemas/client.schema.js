"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateClientSchema = exports.returnClientMultiplesSchema = exports.returnClientSchema = exports.createClientSchema = void 0;
const zod_1 = require("zod");
const createClientSchema = zod_1.z.object({
    name: zod_1.z.string().max(127),
    email: zod_1.z.string().email().max(127),
    address: zod_1.z.string().max(255),
    phone: zod_1.z.string().max(255),
});
exports.createClientSchema = createClientSchema;
const returnClientSchema = createClientSchema.extend({
    id: zod_1.z.number(),
});
exports.returnClientSchema = returnClientSchema;
const returnClientMultiplesSchema = returnClientSchema.array();
exports.returnClientMultiplesSchema = returnClientMultiplesSchema;
const updateClientSchema = createClientSchema.partial();
exports.updateClientSchema = updateClientSchema;
