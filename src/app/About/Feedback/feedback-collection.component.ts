import { Component, OnInit  } from '@angular/core';
import { Comment  } from '../../Comments/comment';
import { CommentService  } from '../../Comments/comment.service';

@Component({
    selector: 'feedback-collection',
    //styleUrls: ['news-collection.component.css'],
    template: `
    <div class="jumbotron">

    </div>
      <div class="container combined-components">
        <red-line-title [text]="'Отзывы'"></red-line-title>
        <div class="row">
          <div class="col-md-12 col-xs-12">
            <p>Наша главная ценность - это счастливые клиенты.</p>
            <p>Отзывы публикуются на основании записи в "Книге отзывов и предложений"</p>
          </div>
        </div>
        <div style="padding-top: 50px" *ngFor="let comment of comments">
          <div class="row" style="padding: 0px">
            <div class="col-md-12 col-xs-12">
              <span> {{comment.author}}</span>
              <span> <p> {{comment.date}} </p></span>
              <div style="padding-top: 25px">
                <span class="header3">{{comment.title}}</span>
                <p style="padding-top: 10px">{{comment.text}}</p>
              </div>
            </div>
        </div>
      </div>
      </div>
    `,
    providers: [CommentService]
})

export class FeedbackCollectionComponent implements OnInit {

  comments: Comment[];

  constructor(private commentService: CommentService) { }

  getItems(): void {
    this.comments = this.commentService.getComments();
  }

  ngOnInit(): void {
    this.getItems();
  }
}
