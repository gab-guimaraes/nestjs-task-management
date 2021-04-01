import { Injectable } from '@nestjs/common';
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

  singUp(authCredencialsDto: AuthCredencialsDto): Promise<void> {
    return this.userRepository.singUp(authCredencialsDto);
  }
}
