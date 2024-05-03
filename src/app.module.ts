import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://testuser:LdmwaKcCm7Yy6ROv@nest-backend.c6druui.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Nest-Backend',
    ),
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
