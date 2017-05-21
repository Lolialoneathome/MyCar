import { Component, Input  } from '@angular/core';

@Component({
    selector: 'online-service-component',
    styleUrls: ['online-service.component.css'],
    template: `
      <div class="small-icons">
        <img class="img-responsive" [src]="imagePath" alt="search icon"/>
      </div>
      <p>{{text}}</p>
    `
})

export class OnlineServiceComponent {
  @Input() text: string;
  @Input() imagePath: string;
}
