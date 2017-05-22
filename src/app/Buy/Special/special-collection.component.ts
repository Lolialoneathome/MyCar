import { Component, OnInit  } from '@angular/core';
import { SpecialItem  } from './SpecialItems/SpecialItem';
import { SpecialItemService  } from './SpecialItems/SpecialItem.service';

@Component({
    selector: 'special-collection',
    styleUrls: ['special-collection.component.css'],
    template: `
        <div *ngFor="let special of specials">
          <div class="row row-item">
          <div class="bordered">
            <div class="col-md-12 bordered">
              <img class="img-responsive pull-left" style="padding-right: 30px" [src]=special.image alt="no icon"/>
              <div style="padding:50px">
                <div>{{special.title}}</div>
                <div>{{special.description}} <span class='rouble'>a</span></div>
                <div class="input-group">
                    <div class="media">
                     <div class="media-left media-top">
                      <img src="assets/images/doc_icon.png" style="padding: 4px" alt="@l!" class="media-object"/>
                      </div>
                     <div class="media-body">
                        <span class="media-heading product-button-text">Подробнее</span>
                     </div>
                  </div>
  							</div>
              </div>
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
