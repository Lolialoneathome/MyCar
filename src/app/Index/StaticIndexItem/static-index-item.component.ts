import { Component, Input  } from '@angular/core';

@Component({
    selector: 'static-index-item-component',
    styleUrls: ['static-index-item.component.css'],
    template: `
      <div class="{{cssClass}} item text-center">
        <div class="centered-icons">
          <img class="img-responsive" [src]="imagePath" alt="no icon"/>
        </div>
        <p class="header2">{{title}}</p>
        <p>{{text}}</p>
      </div>
    `
})

export class StaticIndexItemComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() imagePath: string;
  @Input() cssClass: string;
}
