import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entity";
import { AppError } from "../../erros";
import { iClientRepo, iClientUpdate } from "../../interfaces/client.interface";

const updateClientService = async (
    clientData: iClientUpdate,
    clientID: number
) => {
    const clientRepo: iClientRepo = AppDataSource.getRepository(Client);
    const oldClientData = await clientRepo.findOneBy({ id: clientID });

    if (!oldClientData) {
        throw new AppError("Client does not exist", 409);
    }

    const updataClient = clientRepo.create({
        ...oldClientData,
        ...clientData,
    });

    await clientRepo.save(updataClient);

    return updataClient;
};

export { updateClientService };
