import { Component, OnInit  } from '@angular/core';
import { Car  } from '../../Car/car';
import { CarService  } from '../../Car/car.service';


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
					<p><a class="btn btn-custom-red btn-primary btn-primary-custom-red btn-lg" href="#" role="button">Оставить заявку</a></p>
			</div>

      <div class="row padding-top-25">
				<div class="input-group padding-top-25">
				      <input type="text" class="form-control" placeholder="Поиск автомобиля">
				      <span class="input-group-btn">
				        <button class="btn btn-custom-red btn-default" type="button">Go!</button>
				      </span>
				    </div>
			</div>

      <div class="row padding-top-25">

					<div class="col-md-2">
						<div class="form-group">
							<select class="selectpicker form-control" multiple title="Марка">
									<option>Mustard</option>
									<option>Ketchup</option>
									<option>Relish</option>
							</select>
						</div>
					</div>

					<div class="col-md-2">
						<div class="form-group">
				      <select class="selectpicker form-control" multiple title="Модель">
									<option>Mustard</option>
									<option>Ketchup</option>
									<option>Relish</option>
							</select>
				    </div>
					</div>

					<div class="col-md-2">
						<div class="form-group">
				      <select class="selectpicker form-control" multiple title="Стоимость">
									<option>Mustard</option>
									<option>Ketchup</option>
									<option>Relish</option>
							</select>
				    </div>
					</div>

					<div class="col-md-2">
						<div class="form-group">
				      <select class="selectpicker form-control" multiple title="Год выпуска">
									<option>Mustard</option>
									<option>Ketchup</option>
									<option>Relish</option>
							</select>
				    </div>
					</div>

					<div class="col-md-2">
						<div class="form-group">
				      <select class="selectpicker form-control" multiple title="Коробка передач">
									<option>Mustard</option>
									<option>Ketchup</option>
									<option>Relish</option>
							</select>
				    </div>
					</div>

					<div class="col-md-2">
						<div class="form-group">
							<select class="selectpicker form-control" multiple title="Привод">
									<option>Mustard</option>
									<option>Ketchup</option>
									<option>Relish</option>
							</select>
						</div>
					</div>
				</div>

      <div class="row padding-top-25">
        <div class="col-md-3 padding-top-25" *ngFor="let car of cars">
          <div class="bordered">
            <img class="img-responsive" [src]=car.image alt="no icon"/>
            <div class="product-description">
              <div class="product-name-text">{{car.name}}</div>
              <div class="product-price-text">{{car.price}} <span class='rouble'>a</span></div>
              <div class="product-detailed"> {{car.description }} </div>
              <div class="input-group">
									<div class="product-button product-button-text"> <span class='rouble'>a </span> Купить </div>
									<div class="product-button product-button-text"> | </div>

                  <div class="media">
                   <div class="media-left media-top">
                    <img src="assets/images/doc_icon.png" style="padding: 4px" alt="@l!" class="media-object"/>
                    </div>
                   <div class="media-body">
                      <span class="media-heading product-button-text">Подробнее</span>
                   </div>
                </div>
								</div>

            </div>
          </div>
        </div>
      </div>

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
  }
}
