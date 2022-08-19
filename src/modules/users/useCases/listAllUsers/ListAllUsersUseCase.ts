import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const foundUser = this.usersRepository.findById(user_id);

    if (!foundUser) {
      throw new Error("User not Exist");
    }

    if (foundUser.admin === false) {
      throw new Error("User not admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
