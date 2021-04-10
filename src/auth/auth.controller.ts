import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredencialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
  ) {}
  
  @Post('/signup')
  singUp(@Body(ValidationPipe) authCredencialsDto: AuthCredencialsDto): Promise<void> {
    return this.authService.signUp(authCredencialsDto);
  }

  @Post('/singnin')
  singIn(@Body(ValidationPipe) authCredencialsDto: AuthCredencialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredencialsDto);
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@Req() req) {
    console.log(req);
  }



}
