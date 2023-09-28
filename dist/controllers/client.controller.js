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
exports.deleteClientController = exports.updateClientController = exports.listClientController = exports.createClientController = void 0;
const createClient_service_1 = __importDefault(require("../services/clients/createClient.service"));
const listClients_service_1 = __importDefault(require("../services/clients/listClients.service"));
const updateClient_service_1 = require("../services/clients/updateClient.service");
const deleteClient_service_1 = require("../services/clients/deleteClient.service");
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    const newClient = yield (0, createClient_service_1.default)(clientData);
    return res.status(201).json(newClient);
});
exports.createClientController = createClientController;
const listClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clients = yield (0, listClients_service_1.default)();
    return res.status(200).json(clients);
});
exports.listClientController = listClientController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    const clientId = +req.params.id;
    const updateClient = yield (0, updateClient_service_1.updateClientService)(clientData, clientId);
    return res.status(200).json(updateClient);
});
exports.updateClientController = updateClientController;
const deleteClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientID = +req.params.id;
    yield (0, deleteClient_service_1.deleteClienteService)(clientID);
    return res.status(204).send();
});
exports.deleteClientController = deleteClientController;
