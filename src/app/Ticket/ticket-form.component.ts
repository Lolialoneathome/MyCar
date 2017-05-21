import { Component, Input  } from '@angular/core';

@Component({
    selector: 'ticket-form-component',
    styleUrls: ['ticket-form.component.css'],
    template: `
    <div class="row padding-top-25">
          <div class="col-md-8 col-md-offset-2">
                <input class="form-control" id="name" placeholder="ФИО">
          </div>
		</div>

       <div class="row padding-top-25">
         <div class="col-md-4 col-md-offset-2">
           <input class="form-control" id="name" placeholder="Телефон">
         </div>
         <div class="col-md-4">
           <input class="form-control" id="name" placeholder="E-mail">
         </div>
       </div>

       <div class="row padding-top-25">
         <div class="col-md-8 col-md-offset-2">
           <p class="header3"> Данные об автомобиле:</p>
           <div class="btn-group btn-group-justified" role="group" aria-label="...">
            <div class="btn-group" role="group">
  				      <select class="selectpicker form-control" multiple title="Модель">
  									<option>Mustard</option>
  									<option>Ketchup</option>
  									<option>Relish</option>
  							</select>
            </div>
            <div class="btn-group padding-right-left-20" role="group">
              <select class="selectpicker form-control" multiple title="Модель">
                  <option>Mustard</option>
                  <option>Ketchup</option>
                  <option>Relish</option>
              </select>
            </div>
            <div class="btn-group" role="group">
              <select class="selectpicker form-control" multiple title="Модель">
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

       <div class="row padding-top-25">
         <div class="col-md-8 col-md-offset-2">
         <div class="plain-text">
            <p>Отметка о согласии *</p>

            <p>Следующие сведения о целях предоставления и условиях обработки Ваших персональных данных: Правовое уведомление</p>

            <p>Все дополнительные хлопоты, вкл. доставку автомобиля из другого региона, диагностику технического состояния на месте продажи, а также проверку юридической чистоты, мы берем на себя.</p>

            <label><input type="checkbox" value="">Я внимательно ознакомился и соглашаюсь с условиями обработки моих персональных данных, а также я подтверждаю наличие согласия субъектов иных указанных мной персональных данных с условиями их обработки.</label>
           </div>
        </div>
       </div>

       <div class="row text-center padding-top-25">
          <p><a class="btn btn-custom-red btn-primary btn-primary-custom-red btn-lg" href="#" role="button">Отправить</a></p>
       </div>
    `
})

export class TicketFormComponent {
  @Input() text: string;
}
