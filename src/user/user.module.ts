import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { PostRepository } from 'src/post/post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserResolver,UserService,UserRepository,PostRepository],
})
export class UserModule {}
