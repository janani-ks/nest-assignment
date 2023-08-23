import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  post_name: string;

  @Field()
  user_id: string;
}
