import { Component, Input, OnInit  } from '@angular/core';

@Component({
    selector: 'static-index-item-component',
    styleUrls: ['static-index-item.component.css'],
    template: `
      <div (mouseenter) ="mouseEnter()" (mouseleave) = "mouseLeave()" class="{{cssClass}} item text-center">
        <div class="centered-icons">
          <img class="img-responsive" [src]="imagePath" alt="no icon"/>
        </div>
        <p class="{{headerCssClass}}">{{title}}</p>
        <p>{{text}}</p>
      </div>
    `
})

export class StaticIndexItemComponent {
  @Input() title: string;
  @Input() text: string;
  @Input() imagePathDisable: string;
  @Input() imagePathActive: string;
  private imagePath : string;
  private headerCssClass : string = "header2";
  public cssClass: string = "white-back";

  mouseEnter() {
    this.cssClass = "red-back"
    this.imagePath = this.imagePathActive;
    this.headerCssClass = "header2-white";
  }

  mouseLeave() {
      this.cssClass = "white-back";
      this.imagePath = this.imagePathDisable;
      this.headerCssClass = "header2";
  }

  ngOnInit(): void {
    this.imagePath = this.imagePathDisable;
  }
}
