import { Component, Input, OnInit  } from '@angular/core';

declare var jQuery: any;
@Component({
    selector: 'ticket-form-component',
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
         <div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
           <p class="header3"> Данные об автомобиле:</p>
         </div>
         <div class="col-md-8 col-md-offset-2 col-sm-12 col-xs-12">
         <div class="btn-group btn-group-justified btn-vertical-on-small">
           <div class="btn-group btn-vertical-on-small" role="group">
             <select class="selectpicker form-control" multiple title="Марка">
               <option>Mustard</option>
               <option>Ketchup</option>
               <option>Relish</option>
             </select>
           </div>
           <div class="btn-group padding-right-left-20 btn-vertical-on-small" role="group">
             <select class="selectpicker form-control" multiple title="Модель">
               <option>Mustard</option>
               <option>Ketchup</option>
               <option>Relish</option>
             </select>
           </div>
           <div class="btn-group btn-vertical-on-small" role="group">
             <select class="selectpicker form-control" multiple title="Год выпуска">
               <option>Mustard</option>
               <option>Ketchup</option>
               <option>Relish</option>
             </select>
           </div>
          </div>
         </div>
       </div>

       <div class="row padding-top-25">
         <div class="col-md-8 col-md-offset-2">
           <div class="form-group">
            <textarea class="form-control" rows="5" id="comment" placeholder="Комментарий"></textarea>
          </div>
        </div>
       </div>

       <div *ngIf="isPhoto" class="row padding-top-25">
         <div class="col-md-8 text-center col-md-offset-2">
         <div class="media btn btn-gray" style="text-align: center; margin: auto;">
          <div class="media-left media-top" style="padding: 3px; border-right: 1px, solid, gray">
           <img src="assets/images/photo_icon.png" alt="@l!" class="media-object"/>
           </div>
          <div class="media-body" style="width: auto; padding-left: 10px">
             <span class="media-heading product-button-text media-middle">Добавить фото</span>
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

export class TicketFormComponent implements OnInit {
  @Input() text: string;
  @Input() isPhoto: boolean;

  ngOnInit(): void {
    jQuery('.selectpicker').selectpicker();
  }
}
