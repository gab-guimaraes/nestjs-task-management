import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredencialsDto } from './dto/auth-credentials.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {

  }

  async singUp(authCredencialsDto: AuthCredencialsDto): Promise<void> {
    return this.userRepository.singUp(authCredencialsDto);
  }

  async singIn(authCredencialsDto: AuthCredencialsDto): Promise<void> {
    const username = this.userRepository.validateUserPassword(authCredencialsDto);
    
    if(!username) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }


}
