import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserInputs } from './dto/create-user.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) { }

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInputs') createUserInputs: CreateUserInputs,
  ) {
    return this.userService.createUser(createUserInputs);
  }

  @Query(() => User)
  public async getUserById(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Query(() => [User])
  public async getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Mutation(() => String)
  public async DeleteUserById(@Args('id') id: string) {
    return this.userService.DeleteUserById(id);
  }

  @Mutation(() => String)
  public async UpdateUserById(@Args('id') id: string,@Args('updates') updates: CreateUserInputs) {
    return this.userService.UpdateUserById(id,updates);
  }
}