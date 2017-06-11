import { Component, OnInit  } from '@angular/core';
import { Car  } from '../../Car/car';
import { CarService  } from '../../Car/car.service';

@Component({
    selector: 'best-sellers-collection',
    styleUrls: ['best-sellers-collection.component.css'],
    template: `
      <div class="row">
        <div class="col-md-3 col-sm-12 col-xs-12" *ngFor="let car of cars">
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
                    <li style="vertical-align: middle">
                      <div class="media" style="text-align: center; margin: auto;">
                       <div class="media-left media-top" style="padding: 3px">
                        <img src="assets/images/read_more_btn.svg" alt="@l!" class="media-object"/>
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
