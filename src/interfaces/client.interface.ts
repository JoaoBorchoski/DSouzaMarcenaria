import { z } from "zod";
import { Repository } from "typeorm";
import {
    createClientSchema,
    returnClientSchema,
} from "../schemas/client.schema";
import Client from "../entities/clients.entity";

type iCreateClient = z.infer<typeof createClientSchema>;
type iReturnClient = z.infer<typeof returnClientSchema>;
type iClientRepo = Repository<Client>;

type iClientUpdate = {
    nome: string;
    email: string;
};

export type { iCreateClient, iReturnClient, iClientRepo, iClientUpdate };
