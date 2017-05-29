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
                <table style="width: 100%">
                  <tr>
                  <td style="width: 50%; text-align: center; border-right: 1px solid;">
                    <span class='rouble'> a </span> Купить
                  </td>
                  <td style="width: 50%; text-align: center">
                    <img src="assets/images/doc_icon.png" style="vertical-align: middle; height: 100%" alt="@l!"/> Подробнее
                  </td>
                  </tr>
                </table>
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
