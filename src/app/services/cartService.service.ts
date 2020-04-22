import { Injectable } from '@angular/core';
import { Item } from 'src/models/item.model';
import { Cart } from 'src/models/cart.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  availableItems: Item[];

  item: Item;
  carts: Cart;

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);


  constructor() { }


  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProductCart(product) {
    let added = false;

    console.log('cart services');
    console.log(this.item);
    console.log(product);
    console.log(this.cart);

    for (const p of this.cart) {
      console.log('adentro del for');
      if (p.id === product.id) {
        console.log('if');
        this.carts.totalQuantity += 1;
        added = true;
        console.log('se agrego cantidad');
        break;
      }
      if (!added) {
        console.log('if 2');
        this.cart.push(product);
        console.log('se agrego un producto nuevo');
      }
      console.log('for');
      this.cartItemCount.next(this.cartItemCount.value + 1);

    }
    console.log('for fuera');
  }

  crealCart() {

  }
}
