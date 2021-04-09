import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredencialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) {}
  
  @Post('/signup')
  singUp(@Body(ValidationPipe) authCredencialsDto: AuthCredencialsDto): Promise<void> {
    return this.authService.singUp(authCredencialsDto);
  }

  @Post('/singnin')
  singIn(@Body(ValidationPipe) authCredencialsDto: AuthCredencialsDto): Promise<{ accessToken: string }> {
    return this.authService.singIn(authCredencialsDto);
  }



}
