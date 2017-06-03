import { Component  } from '@angular/core';

@Component({
    selector: 'fast-sell-component',
    styleUrls: ['contacts.component.css'],
    template: `
    <div class="jumbotron">

    </div>
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Контакты'"></red-line-title>
      </div>




      <div class="row">
        <div class="col-md-3 col-xs-12 xol-sm-12 text-center">
          <p>Адрес:</p>
          <p>614000, г. Пермь, </p>
          <p>ул. Ленина, 127, оф. 4</p>
        </div>
        <div class="col-md-3 col-xs-12 xol-sm-12 text-center padding-top-25">
          <p>Телефон:</p>
          <p>+ 7 000 00 00000</p>
        </div>
        <div class="col-md-3 col-xs-12 xol-sm-12 text-center padding-top-25">
          <p>Электронная почта:</p>
          <p> <span class="red-bold-text"> info@mycar-auto.ru </span> </p>
        </div>
        <div class="col-md-3 col-xs-12 xol-sm-12 text-center padding-top-25">
          <p>Часы работы:</p>
          <p>Пн-Пт: 09:00 - 20:00</p>
          <p>Сб-Вс: 08:00 - 19:00</p>
        </div>
      </div>


    </div>
    `
})

export class ContactsComponent {

}
