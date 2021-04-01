import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredencialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) {}
  
  @Post('/signup')
  singUp(@Body() authCredencialsDto: AuthCredencialsDto): Promise<void> {
    return this.authService.singUp(authCredencialsDto);
  }


}
