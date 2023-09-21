import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createClientSchema } from "../schemas/client.schema";
import {
    createClientController,
    listClientController,
} from "../controllers/client.controller";

const clientRoutes: Router = Router();

clientRoutes.post("", validateData(createClientSchema), createClientController);
clientRoutes.get("", listClientController);

export default clientRoutes;
