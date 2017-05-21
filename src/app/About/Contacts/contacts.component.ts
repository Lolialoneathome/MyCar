import { Component  } from '@angular/core';

@Component({
    selector: 'fast-sell-component',
    template: `
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Контакты'"></red-line-title>
      </div>

      <div class="row">
        <div class="col-md-3 text-center">
          <p>Адрес:</p>
          <p>614000, г. Пермь, </p>
          <p>ул. Ленина, 127, оф. 4</p>
        </div>
        <div class="col-md-3 text-center">
          <p>Телефон:</p>
          <p>+ 7 000 00 00000</p>
        </div>
        <div class="col-md-3 text-center">
          <p>Электронная почта:</p>
          <p class="red-text">info@mycar-auto.ru</p>
        </div>
        <div class="col-md-3 text-center">
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
