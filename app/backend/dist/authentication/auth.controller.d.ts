import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/create-user.dto';
import { LoginUserDto } from '../user/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    getProfile(req: any): {
        user: {
            id: any;
            name: any;
            email: any;
            number: any;
        };
    };
}
