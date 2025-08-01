import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/create-user.dto';
import { LoginUserDto } from '../user/login-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<{
        access_token: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            number: string;
        };
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        access_token: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            name: string;
            email: string;
            number: string;
        };
    }>;
    validateUser(payload: any): Promise<(import("mongoose").Document<unknown, {}, import("../user/user.model").User, {}> & import("../user/user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
