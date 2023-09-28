import AppDataSource from "../../data-source";
import Client from "../../entities/clients.entity";
import { AppError } from "../../erros";
import { iClientRepo } from "../../interfaces/client.interface";

const deleteClienteService = async (clientID: number): Promise<void> => {
    const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

    const client = await clientRepo.findOneBy({
        id: clientID,
    });

    if (!client) {
        throw new AppError("Client not found", 409);
    }

    await clientRepo.remove(client!);
};

export { deleteClienteService };
