import { Component  } from '@angular/core';

@Component({
    selector: 'fast-sell-component',
    styleUrls: ['employess.component.css'],
    template: `
    <div class="jumbotron">

    </div>
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

      <div class="row padding-top-25">
          <div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-1 text-center">
            <img class="img-responsive center-block empty-car-img car-img padding-top-25" src="assets/images/dir.png" alt="no icon"/>
            <p class="header3 padding-top-25" style="margin-bottom: 0px">Александр Ракитин</p>
            <p>Директор MyCar – Пермь</p>
            <ul class="list-inline" style="display: flex;justify-content: space-around;">
                <li>
                <div class="media" style="text-align: center; margin: auto;">
                 <div class="media-left media-top" style="padding: 3px">
                  <img src="assets/images/phone.svg" alt="@l!" class="media-object"/>
                  </div>
                 <div class="media-body" style="width: auto; padding-left: 3px">
                    <span class="media-heading product-button-text media-middle">+ 7 000 00 00000</span>
                 </div>
                </div>
                </li>
                <li style="vertical-align: middle">
                  <div class="media" style="text-align: center; margin: auto;">
                   <div class="media-left media-top" style="padding: 3px">
                    <img src="assets/images/email.svg" alt="@l!" class="media-object"/>
                    </div>
                   <div class="media-body" style="width: auto; padding-left: 3px">
                      <span class="media-heading product-button-text media-middle">director@mycar.ru</span>
                   </div>
                 </div>
               </li>
            </ul>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-1 text-center">
            <img class="img-responsive center-block empty-car-img car-img padding-top-25" src="assets/images/fin_dir.png" alt="no icon"/>
            <p class="header3 padding-top-25" style="margin-bottom: 0px">Владимир Соколов</p>
            <p>Финансовый директор</p>
            <ul class="list-inline" style="display: flex;justify-content: space-around;">
                <li>
                <div class="media" style="text-align: center; margin: auto;">
                 <div class="media-left media-top" style="padding: 3px">
                  <img src="assets/images/phone.svg" alt="@l!" class="media-object"/>
                  </div>
                 <div class="media-body" style="width: auto; padding-left: 3px">
                    <span class="media-heading product-button-text media-middle">+ 7 000 00 00000</span>
                 </div>
                </div>
                </li>
                <li style="vertical-align: middle">
                  <div class="media" style="text-align: center; margin: auto;">
                   <div class="media-left media-top" style="padding: 3px">
                    <img src="assets/images/email.svg" alt="@l!" class="media-object"/>
                    </div>
                   <div class="media-body" style="width: auto; padding-left: 3px">
                      <span class="media-heading product-button-text media-middle">fin@mycar.ru</span>
                   </div>
                 </div>
               </li>
            </ul>
          </div>
      </div>
    </div>
    `
})

export class EmployesComponent {

}
