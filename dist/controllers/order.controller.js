"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderController = exports.updateOrderController = exports.listOrderController = exports.createOrderController = void 0;
const createOrder_service_1 = require("../services/order/createOrder.service");
const listOrder_service_1 = require("../services/order/listOrder.service");
const updateOrder_service_1 = require("../services/order/updateOrder.service");
const deleteOrder_service_1 = require("../services/order/deleteOrder.service");
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const newOrder = yield (0, createOrder_service_1.createOrderService)(orderData);
    return res.status(201).json(newOrder);
});
exports.createOrderController = createOrderController;
const listOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield (0, listOrder_service_1.listOrderService)();
    return res.status(200).json(orders);
});
exports.listOrderController = listOrderController;
const updateOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const orderID = +req.params.id;
    const updateOrder = yield (0, updateOrder_service_1.updateOrderService)(orderData, orderID);
    return res.status(201).json(updateOrder);
});
exports.updateOrderController = updateOrderController;
const deleteOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderID = +req.params.id;
    yield (0, deleteOrder_service_1.deleteOrderService)(orderID);
    return res.status(204).send();
});
exports.deleteOrderController = deleteOrderController;
