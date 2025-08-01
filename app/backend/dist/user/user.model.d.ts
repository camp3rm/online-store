export declare class User {
    name: string;
    email: string;
    password: string;
    number: string;
}
export declare const UserModel: import("@typegoose/typegoose").ReturnModelType<typeof User, import("@typegoose/typegoose/lib/types").BeAnObject>;
