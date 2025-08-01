import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/create-user.dto';
import { LoginUserDto } from '../user/login-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
    private jwtService: JwtService,
    ) {}

    async register(createUserDto: CreateUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

        const userData = {
            ...createUserDto,
            password: hashedPassword,
        };

        const user = await this.userService.create(userData);

        const payload = { email: user.email, sub: user._id, name: user.name };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                number: user.number,
            },
        };
    }

    async login(loginUserDto: LoginUserDto) {
        const user = await this.userService.validateUser(loginUserDto.email, loginUserDto.password);

        if (!user) {
            throw new UnauthorizedException('Невірний email або пароль');
        }

        const payload = { email: user.email, sub: user._id, name: user.name };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                number: user.number,
            },
        };
    }

    async validateUser(payload: any) {
        return await this.userService.findById(payload.sub);
    }
}