import { Injectable} from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostRepository } from './post.repository';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) { }

  public async createPost(createPostInputs: CreatePostInput) {
    return this.postRepo.createPost(createPostInputs);
  }

  public async getAllPosts() {
    return this.postRepo.find();
  }

  public async DeletePostById(id: string) {
    const post = await this.postRepo.delete({id:id});
    if (post.affected)
      return "Post Deleted Successfully"
    else
      return "Unexpected Error"
  }

  public async UpdatePostById(userId: string, updates: CreatePostInput) {
    const post = this.postRepo
      .createQueryBuilder('users')
      .update(Post)
      .set({
        name:updates.post_name,
        userId:updates.user_id
      })
      .where("id = :id", { id: userId })
      .execute()
    if ((await post).affected)
      return "Post Updated Successfully"
    else
      return "Unexpected Error";
  }

}
