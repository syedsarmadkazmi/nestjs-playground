import { Controller, Get, Inject } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(
    @Inject(CommentsService) private readonly commentsService: CommentsService,
  ) {}

  @Get()
  async findAll() {
    const comments = await await this.commentsService.findAll();
    return {
      comments,
    };
  }
}
