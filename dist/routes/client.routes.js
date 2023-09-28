"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateData_middleware_1 = __importDefault(require("../middlewares/validateData.middleware"));
const client_schema_1 = require("../schemas/client.schema");
const client_controller_1 = require("../controllers/client.controller");
const client_middleware_1 = require("../middlewares/client.middleware");
const clientRoutes = (0, express_1.Router)();
clientRoutes.post("", (0, validateData_middleware_1.default)(client_schema_1.createClientSchema), client_middleware_1.validateCreateClient, client_controller_1.createClientController);
clientRoutes.get("", client_controller_1.listClientController);
clientRoutes.patch("/:id", (0, validateData_middleware_1.default)(client_schema_1.updateClientSchema), client_middleware_1.validateEmailExists, client_controller_1.updateClientController);
clientRoutes.delete("/:id", client_controller_1.deleteClientController);
exports.default = clientRoutes;
