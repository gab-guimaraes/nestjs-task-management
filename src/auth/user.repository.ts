import { EntityRepository, Repository } from "typeorm";
import { AuthCredencialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  
  async singUp(AuthCredencialsDto: AuthCredencialsDto): Promise<void> {
    const { username, password } = AuthCredencialsDto;

    const user = new User();
    user.username = username;
    user.password = password;
    await user.save();

  }
}