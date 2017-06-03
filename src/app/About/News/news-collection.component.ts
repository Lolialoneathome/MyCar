import { Component, OnInit  } from '@angular/core';
import { NewsItem  } from './NewsItems/NewsItem';
import { NewsItemService  } from './NewsItems/NewsItem.service';

@Component({
    selector: 'news-collection',
    styleUrls: ['news-collection.component.css'],
    template: `
    <div class="jumbotron">

    </div>
      <div class="container combined-components">
        <red-line-title [text]="'Новости'"></red-line-title>
        <div style="padding: 15px" *ngFor="let new of news">
          <div class="row bordered" style="padding: 0px">
            <div class="col-md-3 col-xs-12  no-padding">
              <img class="img-responsive pull-left-on-big pull-center-on-small" [src]=new.image alt="no icon"/>
            </div>
            <div class="col-md-9 col-xs-12">
              <div class="pull-center-on-small">
                <div class="header3" style="padding-top: 2%">{{new.title}}</div>
                <div style="padding-top: 2%">{{new.content}} <span class='rouble'>a</span></div>
                <div class="input-group"style="padding-top: 5%">
                    <div class="media">
                     <div class="media-left media-top">
                      <img src="assets/images/doc_icon.png" style="padding: 3px" alt="@l!" class="media-object"/>
                      </div>
                     <div class="media-body">
                        <span class="media-heading product-button-text media-middle">Подробнее</span>
                     </div>
                  </div>
  							</div>
              </div>
            </div>
          <div>
          </div>
        </div>
      </div>
      </div>
    `,
    providers: [NewsItemService]
})

export class NewsCollectionComponent implements OnInit {

  news: NewsItem[];

  constructor(private newsItemServie: NewsItemService) { }

  getItems(): void {
    this.news = this.newsItemServie.Get();
  }

  ngOnInit(): void {
    this.getItems();
  }
}
