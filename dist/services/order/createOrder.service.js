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
exports.createOrderService = void 0;
const data_source_1 = __importDefault(require("../../data-source"));
const orders_entity_1 = __importDefault(require("../../entities/orders.entity"));
const clients_entity_1 = __importDefault(require("../../entities/clients.entity"));
const order_schema_1 = require("../../schemas/order.schema");
const erros_1 = require("../../erros");
const createOrderService = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const orderRepo = data_source_1.default.getRepository(orders_entity_1.default);
    const clientRepo = data_source_1.default.getRepository(clients_entity_1.default);
    const client = yield clientRepo.findOneBy({ name: orderData.client });
    if (!client) {
        throw new erros_1.AppError("Client does not exist", 409);
    }
    const order = orderRepo.create(Object.assign(Object.assign({}, orderData), { client: client }));
    yield orderRepo.save(order);
    return order_schema_1.returnOrderSchema.parse(order);
});
exports.createOrderService = createOrderService;
