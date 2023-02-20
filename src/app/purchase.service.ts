import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  item:Item;
  constructor() { }
  setItem(item:Item)
  {
   this.item=item;
  }
  getItem()
  {
    return this.item;
  }
}
