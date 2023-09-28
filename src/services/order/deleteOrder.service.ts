import AppDataSource from "../../data-source";
import Order from "../../entities/orders.entity";
import { AppError } from "../../erros";
import { iOrderRepo } from "../../interfaces/order.interface";

const deleteOrderService = async (orderID: number): Promise<void> => {
    const orderRepo: iOrderRepo = AppDataSource.getRepository(Order);

    const order = await orderRepo.findOneBy({
        id: orderID,
    });

    if (!order) {
        throw new AppError("Order not found", 409);
    }

    await orderRepo.remove(order!);
};

export { deleteOrderService };
