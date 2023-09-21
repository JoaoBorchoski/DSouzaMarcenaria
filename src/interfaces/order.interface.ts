import { z } from "zod";
import { Repository } from "typeorm";
import Order from "../entities/orders.entity";
import { createOrderSchema, returnOrderSchema } from "../schemas/order.schema";

type iCreateOrder = z.infer<typeof createOrderSchema>;
type iReturnOrder = z.infer<typeof returnOrderSchema>;
type iOrderRepo = Repository<Order>;

export type { iCreateOrder, iReturnOrder, iOrderRepo };
