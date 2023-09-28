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
const data_source_1 = __importDefault(require("../../data-source"));
const clients_entity_1 = __importDefault(require("../../entities/clients.entity"));
const erros_1 = require("../../erros");
const client_schema_1 = require("../../schemas/client.schema");
const createClientService = (clientData) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepo = data_source_1.default.getRepository(clients_entity_1.default);
    if (yield clientRepo.findOneBy({ name: clientData.name })) {
        throw new erros_1.AppError("Client already exist", 409);
    }
    const client = clientRepo.create(clientData);
    yield clientRepo.save(client);
    const newClient = client_schema_1.returnClientSchema.parse(client);
    return newClient;
});
exports.default = createClientService;
