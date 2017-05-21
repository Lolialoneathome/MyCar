import { Component  } from '@angular/core';

@Component({
    selector: 'fast-sell-component',
    template: `
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Быстрая продажа'"></red-line-title>
      </div>
      <div class="row">
          <p>Выкуп автомобиля клиента – это самый быстрый способ продать Ваш автомобиль.
          Просто приезжайте в MyCar и мы выкупим Ваш автомобиль по выгодной цене в тот же день.</p>

          <p>Работая по всей России, мы можем предложить Вам наиболее выгодную цену за Ваш автомобиль. Известно, что в различных регионах спрос на автомобили отличается. Например, разница в стоимости на один и тот же автомобиль может отличаться на 20% в зависимости от региона его продажи.
          Имея возможность продавать автомобили по всей стране, мы всегда озвучиваем Вам цену с учетом максимальных возможностей.
          </p>
          <p>Просто оставьте заявку!</p>
      </div>

      <div class="row">
        <div class="header1 text-center">Заявка на быструю продажу</div>
      </div>
      <ticket-form-component>
      </ticket-form-component>
    </div>
    `
})

export class FastSellComponent {

}
