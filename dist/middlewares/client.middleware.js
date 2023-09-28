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
exports.validateCreateClient = exports.validateEmailExists = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const erros_1 = require("../erros");
const clients_entity_1 = __importDefault(require("../entities/clients.entity"));
const validateEmailExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clietId = Number(req.params.id);
    const clientRepo = data_source_1.default.getRepository(clients_entity_1.default);
    const findEmail = yield clientRepo.findOne({
        where: {
            email: req.body.email,
        },
    });
    if (findEmail && req.body.email && clietId !== findEmail.id) {
        throw new erros_1.AppError("Email already exists", 409);
    }
    next();
});
exports.validateEmailExists = validateEmailExists;
const validateCreateClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clietId = Number(req.params.id);
    const clientRepo = data_source_1.default.getRepository(clients_entity_1.default);
    const findName = yield clientRepo.findOneBy({ name: req.body.name });
    if (findName) {
        throw new erros_1.AppError("Name already exists", 409);
    }
    const findEmail = yield clientRepo.findOneBy({
        email: req.body.email,
    });
    if (findEmail) {
        throw new erros_1.AppError("Email already exists", 409);
    }
    const findPhone = yield clientRepo.findOneBy({ phone: req.body.phone });
    if (findPhone) {
        throw new erros_1.AppError("Phone already exists", 409);
    }
    const findAddress = yield clientRepo.findOneBy({
        address: req.body.address,
    });
    if (findAddress) {
        throw new erros_1.AppError("Address already exists", 409);
    }
    next();
});
exports.validateCreateClient = validateCreateClient;
