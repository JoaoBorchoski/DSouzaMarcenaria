"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const loginSchema = zod_1.z.object({
    name: zod_1.z.string().max(127),
    password: zod_1.z.string().max(255),
});
exports.default = loginSchema;
