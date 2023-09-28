import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createUserSchema } from "../schemas/user.schemas";
import {
    createUserController,
    retriveUserController,
} from "../controllers/users.controllers";

const usersRoutes: Router = Router();

usersRoutes.post("", validateData(createUserSchema), createUserController);
usersRoutes.get("/:id", retriveUserController);

export default usersRoutes;
