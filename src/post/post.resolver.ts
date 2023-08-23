import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) { }
  @Mutation(() => Post)
  public async createPost(
    @Args('createPostInputs') createPostInputs: CreatePostInput,
  ) {
    return this.postService.createPost(createPostInputs);
  }

  @Query(() => [Post])
  public async getAllPosts(){
    return this.postService.getAllPosts();
  }

  @Mutation(() => String)
  public async DeletePostById(@Args('id') id:string){
    return this.postService.DeletePostById(id);
  }

  @Mutation(() => String)
  public async UpdatePostById(@Args('id') id: string,@Args('updates') updates: CreatePostInput) {
    return this.postService.UpdatePostById(id,updates);
  }
}
