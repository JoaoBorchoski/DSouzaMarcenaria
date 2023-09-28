"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserSchema = exports.returnUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
const createUserSchema = zod_1.z.object({
    name: zod_1.z.string().max(127),
    email: zod_1.z.string().email().max(127),
    password: zod_1.z.string().max(255),
});
exports.createUserSchema = createUserSchema;
const returnUserSchema = createUserSchema
    .extend({
    id: zod_1.z.number(),
})
    .omit({ password: true });
exports.returnUserSchema = returnUserSchema;
const updateUserSchema = createUserSchema.partial();
exports.updateUserSchema = updateUserSchema;
