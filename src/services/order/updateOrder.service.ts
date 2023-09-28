import AppDataSource from "../../data-source";
import Order from "../../entities/orders.entity";
import { AppError } from "../../erros";
import { iOrderRepo } from "../../interfaces/order.interface";

const updateOrderService = async (orderData: any, orderID: number) => {
    const orderRepo: iOrderRepo = AppDataSource.getRepository(Order);
    const oldOrderData = await orderRepo.findOneBy({ id: orderID });

    if (!oldOrderData) {
        throw new AppError("Order does not exist", 409);
    }

    const updateOrder = orderRepo.create({
        ...oldOrderData,
        ...orderData,
    });

    await orderRepo.save(updateOrder);

    return updateOrder;
};

export { updateOrderService };
