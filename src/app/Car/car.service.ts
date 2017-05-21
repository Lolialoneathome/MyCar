import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars';
import { STOCKED_CARS } from './mock-cars';

@Injectable()
export class CarService {
  getBestSellers(): Car[]{
    return CARS;
  }

  getCtockedCars(): Car[]{
    return STOCKED_CARS;
  }
}
