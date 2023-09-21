import { Request, Response } from "express";
import createClientService from "../services/clients/createClient.service";
import listClientService from "../services/clients/listClients.service";

const createClientController = async (req: Request, res: Response) => {
    const clientData = req.body;
    const newClient = await createClientService(clientData);

    return res.status(201).json(newClient);
};

const listClientController = async (req: Request, res: Response) => {
    const clients = await listClientService();

    return res.status(200).json(clients);
};

export { createClientController, listClientController };
