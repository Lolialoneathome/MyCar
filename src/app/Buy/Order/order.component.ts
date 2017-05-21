import { Component  } from '@angular/core';

@Component({
    selector: 'order-component',
    template: `
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Автомобили на заказ'"></red-line-title>
      </div>
      <div class="row">
        <p>Вы точно знаете каким должен быть Ваш автомобиль с пробегом!</p>

        <p>Оставьте нам заявку на поиск данного автомобиля и мы осуществим Вашу мечту.
        По Вашему заказу мы подберем варианты наиболее подходящих автомобилей со всей России по комфортной для Вас цене.</p>

        <p>Все дополнительные хлопоты, вкл. доставку автомобиля из другого региона, диагностику технического состояния на месте продажи, а также проверку юридической чистоты, мы берем на себя.</p>

        <p>Просто оставьте заявку!</p>
      </div>

      <div class="row">
        <div class="header1 text-center">Оставить заявку</div>
      </div>
      <ticket-form-component>
      </ticket-form-component>
    `
})

export class OrderComponent {

}
