import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entity";
import { iClientRepo } from "../../interfaces/client.interface";
import { returnClientMultiplesSchema } from "../../schemas/client.schema";

const listClientService = async () => {
    const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

    const result = await clientRepo.find();
    const clients = returnClientMultiplesSchema.parse(result);

    return clients;
};

export default listClientService;
