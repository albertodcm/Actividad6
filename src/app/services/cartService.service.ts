import { Injectable } from '@angular/core';
import { Cart } from 'src/models/cart.model';
import { Item } from 'src/models/item.model';
import { ItemService } from './itemService.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  availableItems: Item[];
  
  //constructor(private itemService: ItemService) { }

  constructor() { }

  add(id : string): void {
  
  };

}
