import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { COMMENTS } from './comments-mock';

@Injectable()
export class CommentService {
  getComments(): Comment[]{
    return COMMENTS;
  }
}
