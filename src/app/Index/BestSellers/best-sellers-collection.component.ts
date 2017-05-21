import { Component, OnInit  } from '@angular/core';
import { Car  } from '../../Car/car';
import { CarService  } from '../../Car/car.service';

@Component({
    selector: 'best-sellers-collection',
    styleUrls: ['best-sellers-collection.component.css'],
    template: `
      <div class="row">
        <div class="col-md-3" *ngFor="let car of cars">
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
    `,
    providers: [CarService]
})

export class BestSellersCollectionComponent implements OnInit {

  cars: Car[];

  constructor(private carService: CarService) { }

  getCars(): void {
    this.cars = this.carService.getBestSellers();
    console.log("nya");
    console.log(this.cars);
  }

  ngOnInit(): void {
    this.getCars();
  }
}
