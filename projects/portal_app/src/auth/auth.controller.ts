import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('signup')
  signup(@Body() data: AuthDto) {
    return this.service.createStudent(data);
  }

  @Get('signin')
  signin(@Body() data: AuthDto) {
    return this.service.signin(data);
  }
}
