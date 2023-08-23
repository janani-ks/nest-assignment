import { Injectable, Post } from '@nestjs/common';
import { CreateUserInputs } from './dto/create-user.input';
import { UserRepository } from './user.repository';
import { PostRepository } from 'src/post/post.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly postRepo: PostRepository,
  ) { }

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.userRepo.createUser(createUserInputs);
  }

  public async getUserById(id: string) {
    return this.userRepo
      .createQueryBuilder('users')
      .leftJoinAndSelect('users.post', 'p')
      .where('users.id =:id', { id })
      .getOne();
  }

  public async getAllUsers() {
    return this.userRepo.find();
  }

  public async DeleteUserById(userId: string) {
    const post = await this.postRepo.delete({ userId: userId });
    if (post) {
      const user = await this.userRepo.delete({ id: userId });
      if (user.affected)
        return "User Deleted Successfully";
    }
    return "Unexpected Error";
  }

  public async UpdateUserById(userId: string, updates: CreateUserInputs) {
    const user = this.userRepo
      .createQueryBuilder('users')
      .update(User)
      .set({
        user_name: updates.user_name,
        user_email: updates.user_email,
        user_mobileno: updates.user_mobileno,
        user_password: updates.user_password
      })
      .where("id = :id", { id: userId })
      .execute()
    if ((await user).affected)
      return "User Updated Successfully"
    else
      return "Unexpected Error";
  }
}