import { Request, Response } from "express";
import { createOrderService } from "../services/order/createOrder.service";
import { listOrderService } from "../services/order/listOrder.service";

const createOrderController = async (req: Request, res: Response) => {
    const orderData = req.body;
    const newOrder = await createOrderService(orderData);

    return res.status(201).json(newOrder);
};

const listOrderController = async (req: Request, res: Response) => {
    const orders = await listOrderService();

    return res.status(200).json(orders);
};

export { createOrderController, listOrderController };
