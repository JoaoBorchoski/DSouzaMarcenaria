import { Request, Response } from "express";
import createClientService from "../services/clients/createClient.service";
import listClientService from "../services/clients/listClients.service";
import { updateClientService } from "../services/clients/updateClient.service";
import { deleteClienteService } from "../services/clients/deleteClient.service";

const createClientController = async (req: Request, res: Response) => {
    const clientData = req.body;
    const newClient = await createClientService(clientData);

    return res.status(201).json(newClient);
};

const listClientController = async (req: Request, res: Response) => {
    const clients = await listClientService();

    return res.status(200).json(clients);
};

const updateClientController = async (req: Request, res: Response) => {
    const clientData = req.body;
    const clientId = +req.params.id;

    const updateClient = await updateClientService(clientData, clientId);

    return res.status(200).json(updateClient);
};

const deleteClientController = async (req: Request, res: Response) => {
    const clientID: number = +req.params.id;
    await deleteClienteService(clientID);

    return res.status(204).send();
};

export {
    createClientController,
    listClientController,
    updateClientController,
    deleteClientController,
};
