import { Component, OnInit  } from '@angular/core';
import { Car  } from '../../Car/car';
import { CarService  } from '../../Car/car.service';

declare var jQuery: any;
@Component({
    selector: 'order-component',
    styleUrls: ['stock.component.css'],
    providers: [CarService],
    template: `
    <div class="container combined-components">
      <div class="row">
        <red-line-title [text]="'Автомобили в наличии'"></red-line-title>
      </div>
      <div class="row">
      <p>Осуществите Вашу мечту — станьте владельцем лучшего автомобиля с пробегом.
          В данном разделе Вас ждет широкий выбор автомобилей с пробегом, которые прошли полную техническую проверку. </p>

          <p>Если Вы не нашли желаемый автомобиль, воспользуйтесь бесплатной услугой поиска нужного Вам автомобиля. Просто оставьте нам заявку с описанием и мы подберем для Вас оптимальный вариант.</p>
      </div>

      <div class="row text-center padding-top-25">
      <div [routerLink]="['/buy_order']" class="media btn btn-gray" style="text-align: center; margin: auto;">
       <div class="media-left media-top" style="padding: 3px; border-right: 1px, solid, gray">
        <img src="assets/images/pen.svg" alt="@l!" class="media-object"/>
        </div>
       <div class="media-body" style="width: auto; padding-left: 10px">
          <span class="media-heading product-button-text media-middle">Оставить заявку</span>
       </div>
      </div>
			</div>

      <div class="row padding-top-25">
        <div class="col-md-12 padding-left-0">
          <input class="form-control" type="search" placeholder="Поиск автомобиля" />
          <span class="glyphicon glyphicon-search"></span>
        </div>
			</div>

      <div class="row padding-top-25">

					<div class="col-md-2 padding-left-0">
						<div class="form-group">
							<select class="selectpicker form-control" title="Марка">
									<option>Mustard</option>
									<option>Ketchup</option>
									<option>Relish</option>
							</select>
						</div>
					</div>

					<div class="col-md-2 padding-left-0">
						<div class="form-group">
				      <select class="selectpicker form-control" title="Модель">
									<option>Mustard</option>
									<option>Ketchup</option>
									<option>Relish</option>
							</select>
				    </div>
					</div>

					<div class="col-md-2 padding-left-0">
						<div class="form-group">
				      <select class="selectpicker form-control" title="Стоимость">
									<option>до 500 000</option>
									<option>500 000 - 1 000 000</option>
									<option>1 000 000 - 1 500 000</option>
                  <option>1 500 000 - 2 000 000</option>
                  <option>от 2 000 000</option>
							</select>
				    </div>
					</div>

					<div class="col-md-2 padding-left-0">
						<div class="form-group">
				      <select class="selectpicker form-control" data-size="5" data-dropup-auto="false" title="Год выпуска">
									<option>2000</option>
									<option>2001</option>
									<option>2002</option>
                  <option>2003</option>
                  <option>2004</option>
                  <option>2005</option>
                  <option>2006</option>
                  <option>2007</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
							</select>
				    </div>
					</div>

					<div class="col-md-2 padding-left-0">
						<div class="form-group">
				      <select class="selectpicker form-control" title="Коробка передач">
									<option>АТ</option>
									<option>МТ</option>
									<option>Робот</option>
                  <option>Вариатор</option>
							</select>
				    </div>
					</div>

					<div class="col-md-2 padding-left-0">
						<div class="form-group">
							<select class="selectpicker form-control" title="Привод">
									<option>Передний</option>
									<option>Задний</option>
									<option>Полный</option>
							</select>
						</div>
					</div>
				</div>

      <div class="row padding-top-25">
      <div class="col-md-3 col-sm-12 col-xs-12 padding-left-0" *ngFor="let car of cars">
        <img class="img-responsive car-img" [src]=car.image alt="no icon"/>
        <ul class="list-group bordered">
          <li  class="list-group-item">
            <div class="product-name-text">{{car.name}}</div>
            </li>
            <li  class="list-group-item">
            <div class="product-price-text">{{car.price}} <span class='rouble'>a</span></div>
            </li>
            <li  class="list-group-item">
            <div class="product-detailed"> {{car.description }} </div>
            </li>
            <li  class="list-group-item">
              <ul class="list-inline" style="display: flex;justify-content: space-around;">
                  <li><span class='rouble media-middle'> a </span> <span class="media-middle">Купить </span></li>
                  <li style="text-align: center; border-right: 1px solid;"></li>
                  <li style="vertical-align: middle"><div class="media" style="text-align: center; margin: auto;">
                     <div class="media-left media-top" style="padding: 3px">
                      <img src="assets/images/doc_icon.png" alt="@l!" class="media-object"/>
                      </div>
                     <div class="media-body" style="width: auto; padding-left: 3px">
                        <span class="media-heading product-button-text media-middle">Подробнее</span>
                     </div>
                   </div></li>
              </ul>
            </li>
        </ul>

      </div>

      </div>
      <script>

      </script>
    `
})

export class StockComponent implements OnInit {
  cars: Car[];

  constructor(private carService: CarService) { }

  getCars(): void {
    this.cars = this.carService.getCtockedCars();
  }

  ngOnInit(): void {
    this.getCars();
    jQuery('.selectpicker').selectpicker();
  }
}
