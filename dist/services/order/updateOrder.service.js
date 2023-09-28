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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateOrderService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const orders_entity_1 = __importDefault(require("../../entities/orders.entity"));
const erros_1 = require("../../erros");
const updateOrderService = (orderData, orderID) => __awaiter(void 0, void 0, void 0, function* () {
    const orderRepo = data_source_1.default.getRepository(orders_entity_1.default);
    const oldOrderData = yield orderRepo.findOneBy({ id: orderID });
    if (!oldOrderData) {
        throw new erros_1.AppError("Order does not exist", 409);
    }
    const updateOrder = orderRepo.create(Object.assign(Object.assign({}, oldOrderData), orderData));
    yield orderRepo.save(updateOrder);
    return updateOrder;
});
exports.updateOrderService = updateOrderService;
