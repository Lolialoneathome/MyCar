import { Component  } from '@angular/core';

@Component({
    selector: 'fast-sell-component',
    template: `
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Оценка стоимости'"></red-line-title>
      </div>
      <div class="row">
      <p>Вы задумались о продаже своего автомобиля? Для того, чтобы правильно определить стоимость, обратитесь к профессионалам. </p>

      <p>Наши специалисты совершенно бесплатно сделают для вас расчет рыночной стоимости, которая будет оптимальна по соотношению «цена автомобиля к длительности продажи». </p>

      <p> Таким образом Вы точно не упустите свою выгоду при продаже Вашего автомобиля. </p>

      </div>

      <div class="row" style="padding-top: 50px">
        <div class="header1 text-center">Оценка автомобиля</div>
      </div>
      <ticket-form-component>
      </ticket-form-component>
    </div>
    `
})

export class ValuationComponent {

}
