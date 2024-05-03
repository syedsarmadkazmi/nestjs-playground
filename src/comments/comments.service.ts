import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comment } from './models/comments.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentsModel: Model<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return this.commentsModel.find().limit(10);
  }
}
