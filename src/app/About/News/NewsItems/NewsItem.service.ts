import { Injectable } from '@angular/core';
import { NewsItem } from './NewsItem';
import { ITEMS } from './news-item-mock';

@Injectable()
export class NewsItemService {
  Get(): NewsItem[]{
    return ITEMS;
  }
}
