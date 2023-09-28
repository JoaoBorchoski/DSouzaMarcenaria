import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { createOrderSchema, updateOrderSchema } from "../schemas/order.schema";
import {
    createOrderController,
    deleteOrderController,
    listOrderController,
    updateOrderController,
} from "../controllers/order.controller";

const orderRoutes: Router = Router();

orderRoutes.post("", validateData(createOrderSchema), createOrderController);
orderRoutes.get("", listOrderController);
orderRoutes.patch(
    "/:id",
    validateData(updateOrderSchema),
    updateOrderController
);
orderRoutes.delete("/:id", deleteOrderController);

export { orderRoutes };
