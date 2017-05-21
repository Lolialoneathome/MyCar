import { Component  } from '@angular/core';

@Component({
    selector: 'fast-sell-component',
    template: `
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Комиссионная продажа'"></red-line-title>
      </div>
      <div class="row">
        <p>Комиссионная продажа – возможность продать Ваш автомобиль по Вашей цене.</p>

        <p>Вы просто размещаете автомобиль на нашей площадке, дальше действовать будем мы.
        Мы можем продать Ваш автомобиль по той цене, которую вы назовете всего за 7 дней и выдать Вам деньги точно в день продажи.
        </p>
        <p>Просто оставьте заявку!</p>
      </div>

      <div class="row">
        <div class="header1 text-center">Комиссионная продажа</div>
      </div>
      <ticket-form-component>
      </ticket-form-component>
    </div>
    `
})

export class ComissionSellComponent {

}
