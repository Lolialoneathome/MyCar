import { Component, OnInit  } from '@angular/core';
import { SpecialItem  } from './SpecialItems/SpecialItem';
import { SpecialItemService  } from './SpecialItems/SpecialItem.service';

@Component({
    selector: 'special-collection',
    styleUrls: ['special-collection.component.css'],
    template: `
    <div class="jumbotron">

    </div>
      <div class="container combined-components">
        <red-line-title [text]="'Специальные предложения'"></red-line-title>
        <div style="padding: 15px" *ngFor="let special of specials">
          <div class="row bordered" style="padding: 0px">
            <div class="col-md-3 col-xs-12  no-padding">
              <img class="img-responsive pull-left-on-big pull-center-on-small" [src]=special.image alt="no icon"/>
            </div>
            <div class="col-md-9 col-xs-12">
              <div class="pull-center-on-small">
                <div class="header3" style="padding-top: 2%">{{special.title}}</div>
                <div style="padding-top: 2%">{{special.description}} <span class='rouble'>a</span></div>
                <div class="input-group"style="padding-top: 5%">
                    <div class="media">
                     <div class="media-left media-top">
                      <img src="assets/images/read_more_btn.svg" style="padding: 3px" alt="@l!" class="media-object"/>
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
    providers: [SpecialItemService]
})

export class SpecialCollectionComponent implements OnInit {

  specials: SpecialItem[];

  constructor(private specialItemServie: SpecialItemService) { }

  getItems(): void {
    this.specials = this.specialItemServie.Get();
  }

  ngOnInit(): void {
    this.getItems();
  }
}
