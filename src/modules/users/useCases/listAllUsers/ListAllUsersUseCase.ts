import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const findUser = this.usersRepository.findById(user_id);
    if (!findUser) {
      throw new Error("User not found by id");
    }

    if (findUser.admin === true) {
      return this.usersRepository.list();
    }

    throw new Error("Is not admin");
  }
}

export { ListAllUsersUseCase };
