import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { AppError } from "../../erros";
import { iReturnUser, iUserRepo } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/user.schemas";

const retriveUserService = async (id: number) => {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: id });

    if (!user) {
        throw new AppError("User not exist", 409);
    }

    const newUser = returnUserSchema.parse(user);

    return newUser;
};

export { retriveUserService };
