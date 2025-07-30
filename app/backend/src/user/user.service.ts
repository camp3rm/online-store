import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { CreateUserDto } from './create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(data: CreateUserDto) {
    const newUser = new this.userModel(data);
    return newUser.save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  async login(data: { email: string; password: string }) {
    const user = await this.userModel.findOne({ email: data.email }).exec();
    if (user && await bcrypt.compare(data.password, user.password)) {
      return user;
    }
    return null;
}
}