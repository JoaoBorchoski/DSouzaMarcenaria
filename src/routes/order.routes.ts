import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createOrderSchema } from "../schemas/order.schema";
import {
    createOrderController,
    listOrderController,
} from "../controllers/order.controller";

const orderRoutes: Router = Router();

orderRoutes.post("", validateData(createOrderSchema), createOrderController);
orderRoutes.get("", listOrderController);

export { orderRoutes };
