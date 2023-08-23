import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInputs {
  @Field()
  user_name : string;
  @Field()
  user_mobileno : number ;
  @Field()
  user_email : string ;
  @Field()
  user_password : string;
}