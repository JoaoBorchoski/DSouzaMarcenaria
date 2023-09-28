import { Request, Response } from "express";
import { createOrderService } from "../services/order/createOrder.service";
import { listOrderService } from "../services/order/listOrder.service";
import { updateOrderService } from "../services/order/updateOrder.service";
import { deleteOrderService } from "../services/order/deleteOrder.service";

const createOrderController = async (req: Request, res: Response) => {
    const orderData = req.body;
    const newOrder = await createOrderService(orderData);

    return res.status(201).json(newOrder);
};

const listOrderController = async (req: Request, res: Response) => {
    const orders = await listOrderService();

    return res.status(200).json(orders);
};

const updateOrderController = async (req: Request, res: Response) => {
    const orderData = req.body;
    const orderID: number = +req.params.id;

    const updateOrder = await updateOrderService(orderData, orderID);

    return res.status(201).json(updateOrder);
};

const deleteOrderController = async (req: Request, res: Response) => {
    const orderID: number = +req.params.id;
    await deleteOrderService(orderID);

    return res.status(204).send();
};

export {
    createOrderController,
    listOrderController,
    updateOrderController,
    deleteOrderController,
};
