import { Component  } from '@angular/core';
import { Car  } from '../../Car/car';
import { CarService  } from '../../Car/car.service';

@Component({
    selector: 'best-sellers-component',
    //styleUrls: ['online-service.component.css'],
    template: `
      <div *ngIf="car">
        <h2>{{car.name}} details!</h2>
        <div>
          <label>id: </label>{{car.price}}
        </div>
        <div>
          <label>name: </label>
          <input [(ngModel)]="car.name" placeholder="name"/>
        </div>
    </div>
    `
})

export class BestSellersComponent {
  car: Car;
}
