import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import {
    createClientSchema,
    updateClientSchema,
} from "../schemas/client.schema";
import {
    createClientController,
    deleteClientController,
    listClientController,
    updateClientController,
} from "../controllers/client.controller";
import {
    validateCreateClient,
    validateEmailExists,
} from "../middlewares/client.middleware";

const clientRoutes: Router = Router();

clientRoutes.post(
    "",
    validateData(createClientSchema),
    validateCreateClient,
    createClientController
);
clientRoutes.get("", listClientController);
clientRoutes.patch(
    "/:id",
    validateData(updateClientSchema),
    validateEmailExists,
    updateClientController
);
clientRoutes.delete("/:id", deleteClientController);

export default clientRoutes;
