import { Component  } from '@angular/core';

@Component({
    selector: 'fast-sell-component',
    template: `
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Обмен trade-in'"></red-line-title>
      </div>
      <div class="row">
      <p>При покупке по системе Трейд-ин Ваш автомобиль принимается в качестве частичного взноса за новый автомобиль с пробегом.
      Вам не нужно самостоятельно продавать Ваш автомобиль. Мы просто обменяем его на другой с доплатой. </p>

                    <p>При это Вы получаете дополнительную скидку до 50 000 рублей*.
      Это предложение позволяет Вам не только сэкономить существенную сумму, но и сократить затраты времени и сил на продажу своего автомобиля и выбор нового.
      </p>
      </div>

      <div class="row" style="padding-top: 50px">
        <div class="header1 text-center">Обмен автомобиля</div>
      </div>
      <ticket-form-component>
      </ticket-form-component>
    </div>
    `
})

export class TradeInComponent {

}
