import { Injectable } from '@nestjs/common';
import { BaseRepository } from '../database/base.repository';
import { DataSource } from 'typeorm';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.save({
        user_name : createUserInputs.user_name,
        user_mobileno : createUserInputs.user_mobileno,
        user_email : createUserInputs.user_email,
        user_password : createUserInputs.user_password
    });
  }
}