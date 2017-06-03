import { Component, Input, OnInit  } from '@angular/core';
import { Car  } from '../Car/car';

declare var jQuery: any;
@Component({
    selector: 'ticket-form-tradein-component',
    styleUrls: ['ticket-form.component.css'],
    template: `
    <div class="row padding-top-25">
          <div class="col-md-8 col-md-offset-2">
                <input class="form-control" id="name" placeholder="ФИО">
          </div>
		</div>

       <div class="row">
         <div class="col-md-4 col-md-offset-2 padding-top-25">
           <input class="form-control" id="name" placeholder="Телефон">
         </div>
         <div class="col-md-4 padding-top-25">
           <input class="form-control" id="name" placeholder="E-mail">
         </div>
       </div>

       <div class="row padding-top-25">
           <div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-2 text-center">
               <p class="header3"> Ваш автомобиль:</p>
               <div class="btn-group-justified btn-group-vertical">
                 <div class="padding-right-left-20" role="group">
                   <select class="selectpicker form-control" multiple title="Марка">
                     <option>Mustard</option>
                     <option>Ketchup</option>
                     <option>Relish</option>
                   </select>
                 </div>
                 <div class="padding-right-left-20 padding-top-25" role="group">
                   <select class="selectpicker form-control" multiple title="Модель">
                     <option>Mustard</option>
                     <option>Ketchup</option>
                     <option>Relish</option>
                   </select>
                 </div>
                 <div class="padding-right-left-20 padding-top-25" role="group">
                   <select class="selectpicker form-control" multiple title="Год выпуска">
                     <option>Mustard</option>
                     <option>Ketchup</option>
                     <option>Relish</option>
                   </select>
                 </div>

                 <div class="padding-right-left-20 padding-top-25" role="group">
                   <div class="form-group">
                    <textarea class="form-control" rows="5" id="comment" placeholder="Комментарий"></textarea>
                  </div>
                 </div>
                </div>
                <div class="media btn btn-gray" style="text-align: center; margin: auto;">
                 <div class="media-left media-top" style="padding: 3px; border-right: 1px, solid, gray">
                  <img src="assets/images/photo_icon.png" alt="@l!" class="media-object"/>
                  </div>
                 <div class="media-body" style="width: auto; padding-left: 10px">
                    <span class="media-heading product-button-text media-middle">Добавить фото</span>
                 </div>
                </div>
           </div>
           <div class="col-xs-12 col-sm-6 col-md-4 text-center">
           <p class="header3"> Желаемый автомобиль:</p>

           <div *ngIf="isCarChanged">
             <img class="img-responsive car-img" [src]=car.image alt="no icon"/>
             <ul class="list-group bordered">
               <li  class="list-group-item">
                 <div class="product-name-text">{{car.name}}</div>
                 </li>
                 <li  class="list-group-item">
                 <div class="product-price-text"> <span class='rouble'>{{car.price}}</span></div>
                 </li>
                 <li  class="list-group-item">
                 <div class="product-detailed"> {{car.description }} </div>
                 </li>
                 <li  class="list-group-item">
                   <ul class="list-inline" style="display: flex;justify-content: space-around;">
                       <li><span class="media-middle"> Другой </span></li>
                       <li style="text-align: center; border-right: 1px solid;"></li>
                       <li style="vertical-align: middle">
                         <div class="media" style="text-align: center; margin: auto;">
                          <div class="media-left media-top" style="padding: 3px">
                           <img src="assets/images/doc_icon.png" alt="@l!" class="media-object"/>
                           </div>
                          <div class="media-body" style="width: auto; padding-left: 3px">
                             <span class="media-heading product-button-text media-middle">Подробнее</span>
                          </div>
                        </div>
                      </li>
                   </ul>
               </li>
             </ul>
           </div>

           <div *ngIf="!isCarChanged">
             <img class="img-responsive center-block empty-car-img car-img padding-top-25" [src]=emptyCarImagePath alt="no icon"/>
             <div class="padding-top-25">
               <div class="btn btn-gray" style="text-align: center; margin: auto;">
                Выбрать из галереи
               </div>
             </div>
           </div>




           </div>
       </div>

       <div class="row padding-top-25">
         <div class="col-md-8 col-md-offset-2">
            <p>Отметка о согласии <span class="red-bold-text">*</span></p>

            <p style="margin: 0px;">Следующие сведения о целях предоставления и условиях обработки Ваших персональных данных:</p>
            <p> <span class="red-bold-text">Правовое уведомление</span></p>



        </div>

       </div>
       <div class="row">
         <div class="col-md-8 col-md-offset-2">
         <ul class="list-inline" style="display: flex;justify-content: space-around;">
             <li><input class="big_checkbox" type="checkbox" value=""></li>
             <li>
             <label>
             Я внимательно ознакомился и соглашаюсь с условиями обработки моих персональных данных, а также я подтверждаю наличие согласия субъектов иных указанных мной персональных данных с условиями их обработки.
             </label>
             </li>
         </ul>
         </div>
       </div>

       <div class="row text-center padding-top-25">
          <p><a class="btn btn-primary btn-custom-red  btn-primary-custom-red btn-lg btn-lg-custom" href="#" role="button">Отправить</a></p>
       </div>
    `
})

export class TicketFormTradeinComponent implements OnInit {
  @Input() text: string;
  @Input() isPhoto: boolean;
  @Input() car: Car;
  isCarChanged: boolean = false;
  emptyCarImagePath: string = "assets/images/empty_car.png";

  ngOnInit(): void {
    jQuery('.selectpicker').selectpicker();
  }
}
