import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entity";
import { AppError } from "../../erros";
import { iClientRepo, iCreateClient } from "../../interfaces/client.interface";
import { returnClientSchema } from "../../schemas/client.schema";

const createClientService = async (clientData: iCreateClient) => {
    const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

    if (await clientRepo.findOneBy({ name: clientData.name })) {
        throw new AppError("Client already exist", 409);
    }
    const client = clientRepo.create(clientData);
    await clientRepo.save(client);

    const newClient = returnClientSchema.parse(client);
    return newClient;
};

export default createClientService;
