import { Component, Input, OnInit  } from '@angular/core';
import { StaticIndexItemComponent  } from './static-index-item.component';


@Component({
    selector: 'static-index-item-collection',
    styleUrls: ['static-index-item.component.css'],
    template: `
    <div class="row">
      <div class="col-md-4 col-xs-12 col-sm-12" style="padding-bottom:10px">
        <static-index-item-component [title]="'Комфортная цена'" [text]="'Пример разного всякого текста'" [imagePathActive]="'assets/images/StaticItems/1_price_active.svg'" [imagePathDisable]="'assets/images/StaticItems/1_price_disable.svg'" >
        </static-index-item-component>
      </div>
      <div class="col-md-4 col-xs-12 col-sm-12" style="padding-bottom:10px">
        <static-index-item-component [title]="'Гарантия качества'" [text]="'Пример разного всякого текста'" [imagePathActive]="'assets/images/StaticItems/2_quality_active.svg'" [imagePathDisable]="'assets/images/StaticItems/2_quality_disable.svg'" >
        </static-index-item-component>
      </div>
      <div class="col-md-4 col-xs-12 col-sm-12" style="padding-bottom:10px">
        <static-index-item-component [title]="'Безопасность'" [text]="'Пример разного всякого текста'" [imagePathActive]="'assets/images/StaticItems/3_security_active.svg'" [imagePathDisable]="'assets/images/StaticItems/3_security_disable.svg'" >
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
