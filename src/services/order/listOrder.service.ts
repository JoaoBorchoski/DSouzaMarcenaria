import AppDataSource from "../../data-source";
import Order from "../../entities/orders.entity";
import { iOrderRepo } from "../../interfaces/order.interface";
import { returnOrderMultiplesSchema } from "../../schemas/order.schema";

const listOrderService = async () => {
    const orderRepo: iOrderRepo = AppDataSource.getRepository(Order);

    const result = orderRepo.find({
        relations: {
            client: true,
        },
    });

    return result;
};

export { listOrderService };
