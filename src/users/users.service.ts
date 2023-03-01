import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersDocument } from './schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users')
    private readonly usersModel: Model<UsersDocument>,
  ) {}

  async findAll() {
    const users = await this.usersModel.find();
    return users;
  }

  async create(createUserDto: CreateUserDto): Promise<UsersDocument> {
    const createUser = await new this.usersModel(createUserDto);
    return createUser.save();
  }

  async findOne(id: string) {
    let user;
    try {
      user = await this.usersModel.findById(id);
    } catch (error) {
      throw new NotFoundException("L'utilisateur ne peut pas être trouvé")
    }
    if (!user) {
      throw new NotFoundException("L'utilisateur n'existe pas")
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = await this.usersModel.updateOne({ _id: id }, updateUserDto);
    return updateUser;
  }

  async remove(id: string) {
    const removeUser = await this.usersModel.deleteOne({ _id: id });
    return removeUser;
  }
}
