import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';
import { LoginUserDto } from './login-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./user.model").User, {}> & import("./user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    login(user: LoginUserDto): Promise<(import("mongoose").Document<unknown, {}, import("./user.model").User, {}> & import("./user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
