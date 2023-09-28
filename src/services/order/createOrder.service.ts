import AppDataSource from "../../data-source";
import Order from "../../entities/orders.entity";
import Client from "../../entities/clients.entity";
import { iCreateOrder, iOrderRepo } from "../../interfaces/order.interface";
import { iClientRepo } from "../../interfaces/client.interface";
import { returnOrderSchema } from "../../schemas/order.schema";
import { AppError } from "../../erros";

const createOrderService = async (orderData: iCreateOrder) => {
    const orderRepo: iOrderRepo = AppDataSource.getRepository(Order);
    const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

    const client = await clientRepo.findOneBy({ name: orderData.client });

    if (!client) {
        throw new AppError("Client does not exist", 409);
    }

    const order = orderRepo.create({
        ...orderData,
        client: client!,
    });

    await orderRepo.save(order);

    return returnOrderSchema.parse(order);
};

export { createOrderService };
