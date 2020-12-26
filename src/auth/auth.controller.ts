import { GetUser } from './get-user.decorator';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Body, Controller, Get, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService){}

  @Post('/signup')
  signUp(@Body(ValidationPipe) authCredentials: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentials)
  }

  @Post('/signin')
  signIn(@Body(ValidationPipe) authCredentials: AuthCredentialsDto): Promise<{accessToken: string}> {
    return this.authService.signIn(authCredentials)
  }

  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log('controller',user)
  }
}
