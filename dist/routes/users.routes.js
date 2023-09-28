"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateData_middleware_1 = __importDefault(require("../middlewares/validateData.middleware"));
const user_schemas_1 = require("../schemas/user.schemas");
const users_controllers_1 = require("../controllers/users.controllers");
const usersRoutes = (0, express_1.Router)();
usersRoutes.post("", (0, validateData_middleware_1.default)(user_schemas_1.createUserSchema), users_controllers_1.createUserController);
usersRoutes.get("/:id", users_controllers_1.retriveUserController);
exports.default = usersRoutes;
