import { Model } from 'mongoose';
import { User } from './user.model';
import { CreateUserDto } from './create-user.dto';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<User>);
    create(data: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, User, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    login(data: {
        email: string;
        password: string;
    }): Promise<(import("mongoose").Document<unknown, {}, User, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
