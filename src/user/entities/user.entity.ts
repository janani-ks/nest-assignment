import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
  id: string;

  @Field()
  @Column({ name: 'user_name' })
  user_name: string;

  @Field()
  @Column({ name: 'user_mobileno' })
  user_mobileno: number;

  @Field()
  @Column({ name: 'user_email' })
  user_email: string;

  @Field()
  @Column({ name: 'user_password' })
  user_password: string;

  @Field()
  @Column({ name: 'createdAt' })
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field()
  @Column({ name: 'updatedAt' })
  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.users)
  post: Post[];

}