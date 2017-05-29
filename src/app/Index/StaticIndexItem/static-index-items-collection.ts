import { Component, Input, OnInit  } from '@angular/core';
import { StaticIndexItemComponent  } from './static-index-item.component';


@Component({
    selector: 'static-index-item-collection',
    styleUrls: ['static-index-item.component.css'],
    template: `
    <div class="row">
      <div class="col-md-4 col-xs-12 col-sm-12" style="padding-bottom:10px">
        <static-index-item-component [title]="'Комфортная цена'" [text]="'Пример разного всякого текста'" [imagePathActive]="'assets/images/comf_price_a.png'" [imagePathDisable]="'assets/images/comf_price_d.png'" >
        </static-index-item-component>
      </div>
      <div class="col-md-4 col-xs-12 col-sm-12" style="padding-bottom:10px">
        <static-index-item-component [title]="'Гарантия качества'" [text]="'Пример разного всякого текста'" [imagePathActive]="'assets/images/garantee_a.png'" [imagePathDisable]="'assets/images/garantee_d.png'" >
        </static-index-item-component>
      </div>
      <div class="col-md-4 col-xs-12 col-sm-12" style="padding-bottom:10px">
        <static-index-item-component [title]="'Безопасность'" [text]="'Пример разного всякого текста'" [imagePathActive]="'assets/images/security_a.png'" [imagePathDisable]="'assets/images/security_d.png'" >
        </static-index-item-component>
      </div>
    </div>
    `
})

export class StaticIndexItemCollection implements OnInit {

  private LeftComponent: StaticIndexItemComponent;
  mouseEnter(item: StaticIndexItemComponent) {
    console.log(item);
  }

  mouseLeave() {

  }

  ngOnInit(): void {
  }

}
