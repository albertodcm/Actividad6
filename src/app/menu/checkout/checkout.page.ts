import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/itemService.service';
import { Item } from 'src/models/item.model';
import { isNumber } from 'util';
import { Cart } from 'src/models/cart.model';
import { ModalController } from '@ionic/angular';
import { ChargePage } from '../charge/charge.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  cart: Cart;
  availableItems: Item[];
  status: 'numbers';
  balance = '0';
  subtotal = '0';
  inputnueva = true;
  balanceVieja = '0';
  Numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['C', 0, '+']
  ];



  constructor(private itemService: ItemService,
              public modalCtrl: ModalController) {
    this.status = 'numbers';
  }

  ngOnInit() {
    this.getItems();
  }


  async showCharge(cartId: string) {
    const modal = await this.modalCtrl.create({
      component: ChargePage,
      componentProps: {
        subtotal: this.subtotal
      }
    });
    return await modal.present();
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
        this.balanceVieja = this.balance;
        // tslint:disable-next-line: radix
        this.subtotal = '' + (parseInt(this.balanceVieja) + parseInt(this.subtotal));
        console.log(this.balance);
        console.log('Agregarse al carrito');
        console.log(this.subtotal);
        this.balance = '0';
        this.inputnueva = true;
      }
    }

    clearEverything() {
      this.subtotal = '0';
    }
}
