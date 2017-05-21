import { Component, OnInit  } from '@angular/core';
import { Comment  } from '../../Comments/comment';
import { CommentService  } from '../../Comments/comment.service';

@Component({
    selector: 'comment-collection-component',
    styleUrls: ['comment-collection.component.css'],
    template: `
        <div class="col-md-3" *ngFor="let comment of comments">
        <div class="comment-info ">
         <div class="comment-author-text">{{comment.author}}</div>
         <div class="comment-date-text"> {{comment.date}}</div>
         <div class="comment-title-text">{{comment.title}} </div>
         <div class="comment-content-text"> {{comment.text}} </div>
       </div>
       <div class="show-full-comment text-center">
         <p><a class="btn btn-primary" href="#" role="button">Читать полностью</a></p>
       </div>
        </div>
      
    `,
    providers: [CommentService]
})

export class CommentCollectionComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  getComments(): void {
    this.comments = this.commentService.getComments();
    console.log("nya");
  }

  ngOnInit(): void {
    this.getComments();
  }
}
