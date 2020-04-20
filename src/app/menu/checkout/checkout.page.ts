import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/itemService.service';
import { Item } from 'src/models/item.model';
import { isNumber } from 'util';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  status: 'numbers';
  availableItems: Item[];
  balance = '0';
  inputnueva = true;
  Numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['C', 0, '+']
  ];

  constructor(private itemService: ItemService) {
    this.status = 'numbers';
  }

  ngOnInit() {
    this.getItems();
  }

    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
      status = ev;
    }

    getItems(): void {
      this.itemService.getItems().subscribe((items: Item[]) => {
        this.availableItems = items.filter((item: Item) => {
          return item.status === 'available';
        });
      });
    }

    // tslint:disable-next-line: variable-name
    Boton(symmbol) {

      if (isNumber(symmbol)) {
        console.log('es un numero');
        if (this.inputnueva) {
        this.balance = '' + symmbol;
        } else {
          this.balance += '' + symmbol;
        }
        this.inputnueva = false;
      } else if (symmbol === 'C') {
        this.balance = '0';
        this.inputnueva = true;
      } else if (symmbol === '+') {
        console.log('Agregarse al carrito');
      }

    }

}
