import { BaseRepository } from "src/database/base.repository";
import { Post } from "./entities/post.entity";
import { DataSource } from "typeorm";
import { CreatePostInput } from "./dto/create-post.input";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostRepository extends BaseRepository<Post>{
    constructor(private readonly dataSource: DataSource) {
        super(Post, dataSource.createEntityManager());
    }

    public async createPost(createPostInput: CreatePostInput) {
        return this.save({
            name: createPostInput.post_name,
            userId: createPostInput.user_id
        })
    }

}