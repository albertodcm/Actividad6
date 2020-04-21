import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cart } from 'src/models/cart.model';

@Component({
  selector: 'app-charge',
  templateUrl: './charge.page.html',
  styleUrls: ['./charge.page.scss'],
})
export class ChargePage implements OnInit {

  cart: Cart;
  subtotal = '0';
  tax = 0;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.calcularTax();
  }


  dismiss() {
    console.log(' Entro al dismiss ');
    this.modalCtrl.dismiss();
  }

  calcularTax() {
    // tslint:disable-next-line: radix
       this.tax = ((parseInt(this.subtotal) / 100) * 9.75);
       console.log(this.tax);

       this.tax = parseFloat(this.tax.toFixed(2));

       this.tax.toPrecision(2);
       console.log(this.tax);
  }

}
