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

      <div class="row">
        <div class="col-md-12 text-center" style="padding-top: 25px;">
          <socials-component></socials-component>
        </div>
      </div>


    </div>
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8457.298709932402!2d56.1620482005249!3d57.9992703500139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1496774121710" width="100%" height="500" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    `
})

export class ContactsComponent {

}
