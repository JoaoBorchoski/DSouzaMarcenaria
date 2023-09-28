import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { AppError } from "../erros";
import { verify } from "jsonwebtoken";
import { iClientRepo } from "../interfaces/client.interface";
import Client from "../entities/clients.entity";

const validateEmailExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const clietId: number = Number(req.params.id);
    const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

    const findEmail = await clientRepo.findOne({
        where: {
            email: req.body.email,
        },
    });

    if (findEmail && req.body.email && clietId !== findEmail.id) {
        throw new AppError("Email already exists", 409);
    }

    next();
};

const validateCreateClient = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const clietId: number = Number(req.params.id);
    const clientRepo: iClientRepo = AppDataSource.getRepository(Client);

    const findName = await clientRepo.findOneBy({ name: req.body.name });
    if (findName) {
        throw new AppError("Name already exists", 409);
    }

    const findEmail = await clientRepo.findOneBy({
        email: req.body.email,
    });
    if (findEmail) {
        throw new AppError("Email already exists", 409);
    }

    const findPhone = await clientRepo.findOneBy({ phone: req.body.phone });
    if (findPhone) {
        throw new AppError("Phone already exists", 409);
    }

    const findAddress = await clientRepo.findOneBy({
        address: req.body.address,
    });
    if (findAddress) {
        throw new AppError("Address already exists", 409);
    }

    next();
};

export { validateEmailExists, validateCreateClient };
