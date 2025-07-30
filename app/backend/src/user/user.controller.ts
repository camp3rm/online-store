import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';


@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async create(@Body() user:CreateUserDto) {
    return this.userService.create(user);
  }
  @Get('/login')
  async login(@Body() user: LoginUserDto) {
    return this.userService.login(user);
  } 
}
