import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userByemailAlreadyExists = this.usersRepository.findByEmail(email);
    if (userByemailAlreadyExists) {
      throw new Error("E-mail already exists");
    }

    const createUser = this.usersRepository.create({ name, email });

    return createUser;
  }
}

export { CreateUserUseCase };
