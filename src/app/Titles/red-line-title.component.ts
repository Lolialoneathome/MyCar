import { Component, Input  } from '@angular/core';

@Component({
    selector: 'red-line-title',
    styleUrls: ['red-line-title.component.css'],
    template: `
    <div class="row padding-top-25">
        <div class="header1 text-center">{{text}}</div>
        <div class="red-line-img">
           <img class="img-responsive" src="assets/images/red_line.png" alt="line"/>
        </div>
     </div>
    `
})

export class RedLineTitleComponent {
  @Input() text: string;
}
