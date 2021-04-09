import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { AuthCredencialsDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  
  async singUp(AuthCredencialsDto: AuthCredencialsDto): Promise<void> {
    const { username, password } = AuthCredencialsDto;

    const user = new User();
    user.username = username;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);
    
    console.log(user.password);

    try {
      await user.save();
    } catch (error) {
      console.log(error.code)
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async validateUserPassword(authCredencialsDto: AuthCredencialsDto): Promise<string> {
    const { username, password } = authCredencialsDto;
    const user = await this.findOne({ username });

    console.log(user);

    if (user && await user.validatePassword(password)) {
      console.log('password correct')
      return user.username;
    }else {
      return null;
    }
  }

  private async hashPassword(password: String, salt: String): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}