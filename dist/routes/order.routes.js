"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = require("express");
const validateData_middleware_1 = __importDefault(require("../middlewares/validateData.middleware"));
const order_schema_1 = require("../schemas/order.schema");
const order_controller_1 = require("../controllers/order.controller");
const orderRoutes = (0, express_1.Router)();
exports.orderRoutes = orderRoutes;
orderRoutes.post("", (0, validateData_middleware_1.default)(order_schema_1.createOrderSchema), order_controller_1.createOrderController);
orderRoutes.get("", order_controller_1.listOrderController);
orderRoutes.patch("/:id", (0, validateData_middleware_1.default)(order_schema_1.updateOrderSchema), order_controller_1.updateOrderController);
orderRoutes.delete("/:id", order_controller_1.deleteOrderController);
