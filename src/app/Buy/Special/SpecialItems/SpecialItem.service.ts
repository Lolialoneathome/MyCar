import { Injectable } from '@angular/core';
import { SpecialItem } from './SpecialItem';
import { ITEMS } from './special-item-mock';

@Injectable()
export class SpecialItemService {
  Get(): SpecialItem[]{
    return ITEMS;
  }
}
