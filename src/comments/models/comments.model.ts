import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop({ type: SchemaTypes.ObjectId })
  id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  movie_id: number;

  @Prop()
  text: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
