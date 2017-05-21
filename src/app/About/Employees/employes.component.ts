import { Component  } from '@angular/core';

@Component({
    selector: 'fast-sell-component',
    template: `
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Наши сотрудники'"></red-line-title>
      </div>

      <div class="row">
      <p><span class="red-bold-text">My Car</span> – комфортный салон автомобилей с пробегом.</p>

        <p>За годы работы My Car удалось собрать команду настоящих профессионалов своего дела. </p>

        <p>Сотрудники автосалона имеют большой опыт работы в автобизнесе.
        Благодаря чему любой, даже самый сложный, запрос клиента выполняется максимально точно, быстро и качественно.</p>
      </div>

      <div class="row">
        <div class="col-md-6 text-center">
          <p>Адрес:</p>
          <p>614000, г. Пермь, </p>
          <p>ул. Ленина, 127, оф. 4</p>
        </div>
        <div class="col-md-6 text-center">
          <p>Телефон:</p>
          <p>+ 7 000 00 00000</p>
        </div>
      </div>


    </div>
    `
})

export class EmployesComponent {

}
